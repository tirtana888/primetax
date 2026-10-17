import { getCookieConsent } from "./analytics";

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
}

const UTM_STORAGE_KEY = "primetax_utm_v1";
const NINETY_DAYS_MS = 90 * 24 * 60 * 60 * 1000;

/**
 * Menangkap parameter UTM & referrer pada kunjungan pertama (disimpan 90 hari jika ada persetujuan analitik,
 * atau di sessionStorage untuk atribusi form sesi berjalan sesuai §10.7).
 */
export function captureUtmParams(): UtmData {
  if (typeof window === "undefined") return {};

  try {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    const currentUtm: UtmData = {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      utm_term: params.get("utm_term") || undefined,
      gclid: params.get("gclid") || undefined,
      fbclid: params.get("fbclid") || undefined,
      landing_page: window.location.pathname,
      referrer: document.referrer || undefined,
      captured_at: new Date().toISOString(),
    };

    const hasNewUtm = Boolean(
      currentUtm.utm_source ||
        currentUtm.utm_medium ||
        currentUtm.utm_campaign ||
        currentUtm.gclid ||
        currentUtm.fbclid
    );

    const existing = getStoredUtmParams();
    const toStore = hasNewUtm || !existing.landing_page ? { ...existing, ...currentUtm } : existing;

    const consent = getCookieConsent();
    if (consent?.analytics) {
      window.localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(toStore));
    } else {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(toStore));
    }

    return toStore;
  } catch {
    return {};
  }
}

export function getStoredUtmParams(): UtmData {
  if (typeof window === "undefined") return {};
  try {
    const raw =
      window.localStorage.getItem(UTM_STORAGE_KEY) ||
      window.sessionStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as UtmData;
    if (parsed.captured_at) {
      const age = Date.now() - new Date(parsed.captured_at).getTime();
      if (age > NINETY_DAYS_MS) {
        window.localStorage.removeItem(UTM_STORAGE_KEY);
        return {};
      }
    }
    return parsed;
  } catch {
    return {};
  }
}
