export type AnalyticsEventName =
  | "whatsapp_click"
  | "form_start"
  | "form_submit"
  | "rfp_step_complete"
  | "rfp_submit"
  | "booking_scheduled"
  | "company_profile_download"
  | "newsletter_signup"
  | "lead_magnet_download"
  | "tool_used"
  | "pricing_toggle"
  | "package_cta_click";

export interface CookieConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

const CONSENT_STORAGE_KEY = "primetax_cookie_consent_v1";

export function getCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentState;
  } catch {
    return null;
  }
}

export function setCookieConsent(consent: Omit<CookieConsentState, "necessary" | "updatedAt">) {
  if (typeof window === "undefined") return;
  const fullState: CookieConsentState = {
    necessary: true,
    analytics: consent.analytics,
    marketing: consent.marketing,
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(fullState));
    window.dispatchEvent(new CustomEvent("cookie-consent-updated", { detail: fullState }));
  } catch {
    // ignore storage errors
  }
}

/**
 * Melacak event analytics sesuai §10.7.
 * Hanya mengirim ke layer analitik eksternal jika pengguna telah menyetujui cookie analitik (§11.4).
 */
export function trackEvent(
  event: AnalyticsEventName,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return;

  const consent = getCookieConsent();
  const payload = {
    event,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname,
    ...params,
  };

  // Debug log untuk inspeksi E2E / development
  if (process.env.NODE_ENV !== "production") {
    console.debug("[Analytics Event]", payload, { analyticsConsent: Boolean(consent?.analytics) });
  }

  // Simpan di buffer debug window agar dapat diverifikasi di E2E test
  const w = window as unknown as { __primetaxEvents?: Array<Record<string, unknown>> };
  w.__primetaxEvents = w.__primetaxEvents || [];
  w.__primetaxEvents.push(payload);

  if (!consent?.analytics) {
    return;
  }

  const winWithDataLayer = window as unknown as {
    dataLayer?: Array<Record<string, unknown>>;
  };
  if (Array.isArray(winWithDataLayer.dataLayer)) {
    winWithDataLayer.dataLayer.push(payload);
  }
}
