"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, WaButton, WhatsAppIcon } from "@/components/ui/Button";
import { site } from "@/config/site";
import {
  buildWaLink,
  isWithinOperationalHours,
  type WaContext,
} from "@/lib/whatsapp";
import {
  getCookieConsent,
  setCookieConsent,
  trackEvent,
} from "@/lib/analytics";
import { captureUtmParams } from "@/lib/utm";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";
import { hasPlaceholder } from "@/lib/content";

/**
 * Menentukan apakah FAB WhatsApp dan Sticky CTA Bar Mobile ditampilkan pada rute saat ini (§6.1, §6.4):
 * - Disembunyikan di /korporasi, /minta-proposal, dan semua halaman /en/*
 * - Sticky CTA bar mobile (<768px) tampil di halaman UKM, layanan, harga, dan tools setelah scroll melewati hero.
 */
export function FloatingLeadGen() {
  const pathname = usePathname() || "/";
  const [scrolledPastHero, setScrolledPastHero] = React.useState(false);
  const [isOpenHours, setIsOpenHours] = React.useState(true);
  const [consentChecked, setConsentChecked] = React.useState(true);

  React.useEffect(() => {
    captureUtmParams();
    setIsOpenHours(isWithinOperationalHours());
    const existingConsent = getCookieConsent();
    setConsentChecked(Boolean(existingConsent));

    const onScroll = () => {
      setScrolledPastHero(window.scrollY > 360);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const isHiddenRoute =
    pathname === "/korporasi" ||
    pathname === "/minta-proposal" ||
    pathname === "/en" ||
    pathname.startsWith("/en/");

  const showMobileStickyBar =
    !isHiddenRoute &&
    (pathname === "/ukm" ||
      pathname === "/harga" ||
      pathname.startsWith("/layanan") ||
      pathname.startsWith("/tools"));

  // Konteks pesan WA otomatis berdasarkan halaman
  const waContext: WaContext = React.useMemo(() => {
    if (pathname === "/ukm") return { type: "sme" };
    if (pathname.startsWith("/layanan/")) {
      const slug = pathname.replace("/layanan/", "");
      const svc = services.find((s) => s.slug === slug);
      if (svc) return { type: "service", serviceName: svc.title };
    }
    if (pathname.startsWith("/tools/")) {
      const slug = pathname.replace("/tools/", "");
      return { type: "tool", toolName: slug.replace(/-/g, " ") };
    }
    return { type: "general" };
  }, [pathname]);

  const handleAcceptAllCookies = () => {
    setCookieConsent({ analytics: true, marketing: true });
    setConsentChecked(true);
    captureUtmParams();
  };

  const handleAcceptNecessaryOnly = () => {
    setCookieConsent({ analytics: false, marketing: false });
    setConsentChecked(true);
  };

  return (
    <>
      {/* FAB WhatsApp (§6.1): Lingkaran 56x56px, emerald-700, ikon WhatsApp putih 28px */}
      {!isHiddenRoute && (
        <div
          className={cn(
            "fixed right-5 z-70 flex items-center gap-3 transition-all duration-200 md:right-6 md:bottom-6",
            showMobileStickyBar && scrolledPastHero ? "bottom-20" : "bottom-5"
          )}
        >
          {/* Label jam kerja hanya tampil bila jam operasional sudah diisi (bukan placeholder) */}
          {!hasPlaceholder(site.contact.hours.label, site.contact.hours.open) && (
              <span className="hidden rounded-md border border-ink-200 bg-white px-3 py-1.5 font-body text-caption font-medium text-ink-700 shadow-md xl:inline-block">
                {isOpenHours
                  ? `Tanya via WhatsApp (${site.contact.hours.label} WIB)`
                  : `Kami balas mulai pukul ${site.contact.hours.open} WIB`}
              </span>
            )}
          <a
            href={buildWaLink(waContext)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat via WhatsApp"
            onClick={() =>
              trackEvent("whatsapp_click", {
                cta_location: "fab",
                segment: "ukm",
              })
            }
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg transition-colors hover:bg-emerald-800"
          >
            <WhatsAppIcon className="h-7 w-7" />
          </a>
        </div>
      )}

      {/* Sticky CTA Bar Mobile (< 768px, muncul setelah scroll melewati hero di halaman UKM/layanan/harga/tools, §6.4) */}
      {showMobileStickyBar && scrolledPastHero && (
        <div className="fixed inset-x-0 bottom-0 z-70 border-t border-ink-200 bg-white px-4 py-2.5 shadow-lg md:hidden">
          <div className="flex items-center gap-2.5">
            <WaButton
              waContext={waContext}
              ctaLocation="sticky"
              size="md"
              className="flex-1"
            >
              Chat WhatsApp
            </WaButton>
            <Button variant="outline" size="md" href="/harga">
              Lihat Paket
            </Button>
          </div>
        </div>
      )}

      {/* Banner Persetujuan Cookie sesuai UU PDP (§11.4) */}
      {!consentChecked && (
        <div
          role="region"
          aria-label="Persetujuan penggunaan cookie"
          className="fixed bottom-4 left-4 z-90 max-w-md rounded-xl border border-ink-300 bg-white p-5 shadow-lg"
        >
          <p className="font-heading text-body-sm font-semibold text-navy-900">
            Privasi & Penggunaan Cookie (UU PDP)
          </p>
          <p className="mt-1.5 text-caption text-ink-600">
            Kami menggunakan cookie wajib untuk fungsi situs dan cookie analitik
            (hanya dengan persetujuan Anda) untuk meningkatkan layanan. Baca{" "}
            <Link href="/kebijakan-privasi" className="font-medium underline">
              Kebijakan Privasi
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <Button
              type="button"
              variant="primary"
              size="sm"
              onClick={handleAcceptAllCookies}
            >
              Setuju Semua
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={handleAcceptNecessaryOnly}
            >
              Hanya Cookie Wajib
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
