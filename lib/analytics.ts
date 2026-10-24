/**
 * Consent-aware analytics helpers.
 *
 * Events are always queued on window.__primetaxEvents (useful in development)
 * and forwarded to GA4 / dataLayer only after the visitor has accepted
 * analytics cookies. See components/layout/ConsentBanner.tsx.
 */

export type AnalyticsEventName = "cta_click" | "form_start" | "form_submit" | "form_error";

export interface CookieConsent {
  analytics: boolean;
  updatedAt: string;
}

const CONSENT_KEY = "primetax_consent_v2";
export const CONSENT_EVENT = "primetax-consent-updated";

export function getConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean) {
  if (typeof window === "undefined") return;
  const state: CookieConsent = { analytics, updatedAt: new Date().toISOString() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable (private mode); consent then lasts for the page view.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: state }));
}

type AnalyticsWindow = Window & {
  __primetaxEvents?: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
};

export function trackEvent(
  event: AnalyticsEventName,
  params: Record<string, string | number | boolean | undefined> = {}
) {
  if (typeof window === "undefined") return;
  const w = window as AnalyticsWindow;
  const payload = { event, page_path: window.location.pathname, ...params };

  w.__primetaxEvents = w.__primetaxEvents || [];
  w.__primetaxEvents.push(payload);
  if (process.env.NODE_ENV !== "production") console.debug("[analytics]", payload);

  if (!getConsent()?.analytics) return;
  w.gtag?.("event", event, params);
}
