"use client";

import { useEffect, useState } from "react";
import { Link, useLocale } from "@/components/ui/Link";
import { site } from "@/config/site";
import { CONSENT_EVENT, getConsent, setConsent, type CookieConsent } from "@/lib/analytics";
import { t } from "@/lib/i18n";

const OPEN_EVENT = "primetax-open-consent";

/**
 * Cookie consent + GA4 loader. Analytics scripts are injected only after the
 * visitor accepts, and only when NEXT_PUBLIC_GA4_ID is configured.
 */
export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const d = t(useLocale()).consent;

  useEffect(() => {
    const consent = getConsent();
    if (!consent) setVisible(true);
    else if (consent.analytics) loadGa4();

    const onUpdate = (e: Event) => {
      if ((e as CustomEvent<CookieConsent>).detail.analytics) loadGa4();
    };
    const onOpen = () => setVisible(true);
    window.addEventListener(CONSENT_EVENT, onUpdate);
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onUpdate);
      window.removeEventListener(OPEN_EVENT, onOpen);
    };
  }, []);

  if (!visible) return null;

  const choose = (analytics: boolean) => {
    setConsent(analytics);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={d.title}
      className="fixed inset-x-4 bottom-4 z-50 rounded-card border border-border bg-white p-6 shadow-[0_8px_30px_rgba(37,37,37,0.08)] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md"
    >
      <p className="text-sm font-medium">{d.title}</p>
      <p className="mt-2 text-sm text-graphite">
        {d.textA}{" "}
        <Link href="/privacy-policy" className="underline decoration-gold underline-offset-2">
          {d.privacy}
        </Link>
        .
      </p>
      <div className="mt-5 flex gap-3">
        <button
          type="button"
          onClick={() => choose(false)}
          className="h-10 flex-1 rounded-button border border-charcoal text-sm font-medium hover:bg-warm"
        >
          {d.essential}
        </button>
        <button
          type="button"
          onClick={() => choose(true)}
          className="h-10 flex-1 rounded-button bg-charcoal text-sm font-medium text-white hover:bg-charcoal-soft"
        >
          {d.accept}
        </button>
      </div>
    </div>
  );
}

export function ConsentSettingsLink({ label }: { label: string }) {
  return (
    <button type="button" className="hover:text-white" onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
      {label}
    </button>
  );
}

let ga4Loaded = false;

function loadGa4() {
  const id = site.analytics.ga4Id;
  if (!id || ga4Loaded) return;
  ga4Loaded = true;
  const w = window as Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag.js expects the `arguments` object itself.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", id, { anonymize_ip: true });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}
