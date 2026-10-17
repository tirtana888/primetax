"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button, WaButton } from "@/components/ui/Button";
import { site } from "@/config/site";
import { services } from "@/content/services";
import calendarData from "@/content/tax-calendar.json";
import { formatDateId } from "@/lib/content";
import { cn } from "@/lib/utils";

function getNextDeadline() {
  const today = new Date().toISOString().slice(0, 10);
  return calendarData.deadlines.find((d) => d.date >= today);
}

/**
 * Memetakan path Bahasa Indonesia ke padanan Bahasa Inggris dan sebaliknya (§6.4, §11.3)
 */
export function getEquivalentLocalePath(
  pathname: string,
  targetLocale: "id" | "en"
): string {
  const isCurrentlyEn = pathname === "/en" || pathname.startsWith("/en/");

  if (targetLocale === "en") {
    if (isCurrentlyEn) return pathname;
    if (pathname === "/") return "/en";
    if (pathname === "/korporasi") return "/en/corporate";
    if (pathname === "/layanan") return "/en/services";
    if (pathname.startsWith("/layanan/")) {
      const slug = pathname.replace("/layanan/", "");
      const svc = services.find((s) => s.slug === slug);
      return svc ? `/en/services/${svc.enSlug}` : "/en/services";
    }
    if (pathname === "/minta-proposal") return "/en/request-proposal";
    if (pathname === "/kontak") return "/en/contact";
    return "/en";
  } else {
    if (!isCurrentlyEn) return pathname;
    if (pathname === "/en") return "/";
    if (pathname === "/en/corporate") return "/korporasi";
    if (pathname === "/en/services") return "/layanan";
    if (pathname.startsWith("/en/services/")) {
      const enSlug = pathname.replace("/en/services/", "");
      const svc = services.find((s) => s.enSlug === enSlug);
      return svc ? `/layanan/${svc.slug}` : "/layanan";
    }
    if (pathname === "/en/request-proposal") return "/minta-proposal";
    if (pathname === "/en/contact") return "/kontak";
    return "/";
  }
}

type NavLink = { label: string; href: string; desc?: string };
type NavGroup = { title: string; links: NavLink[] };
type NavItem = {
  key: string;
  label: string;
  href?: string;
  groups?: NavGroup[];
  match: (path: string) => boolean;
};

const NAV_ID: NavItem[] = [
  {
    key: "layanan",
    label: "Layanan",
    match: (p) => p.startsWith("/layanan") || p === "/korporasi" || p === "/ukm",
    groups: [
      {
        title: "Untuk siapa",
        links: [
          { label: "Korporasi & PMA", href: "/korporasi", desc: "TP Doc, SP2DK, pemeriksaan & sengketa" },
          { label: "UKM & Startup", href: "/ukm", desc: "Kepatuhan bulanan dengan paket jelas" },
        ],
      },
      {
        title: "Layanan",
        links: [
          ...services.map((s) => ({ label: s.title, href: `/layanan/${s.slug}` })),
          { label: "Semua layanan →", href: "/layanan" },
        ],
      },
    ],
  },
  { key: "harga", label: "Harga", href: "/harga", match: (p) => p === "/harga" },
  {
    key: "studi-kasus",
    label: "Studi Kasus",
    href: "/studi-kasus",
    match: (p) => p.startsWith("/studi-kasus"),
  },
  {
    key: "sumber",
    label: "Insight",
    match: (p) => p.startsWith("/insight") || p.startsWith("/tools"),
    groups: [
      {
        title: "Insight",
        links: [
          { label: "Semua artikel", href: "/insight" },
          { label: "Update regulasi", href: "/insight/kategori/update-regulasi" },
          { label: "Panduan praktis", href: "/insight/kategori/panduan-praktis" },
          { label: "Buletin bulanan", href: "/insight/buletin" },
        ],
      },
      {
        title: "Tools gratis",
        links: [
          { label: "Kalender pajak", href: "/tools/kalender-pajak" },
          { label: "Kalkulator PPh 21", href: "/tools/kalkulator-pph-21" },
          { label: "Kalkulator PPN", href: "/tools/kalkulator-ppn" },
          { label: "Cek wajib TP Doc", href: "/tools/cek-wajib-tp-doc" },
        ],
      },
    ],
  },
  {
    key: "tentang",
    label: "Tentang",
    match: (p) => p === "/tentang" || p.startsWith("/tim") || p === "/karier" || p === "/kontak",
    groups: [
      {
        title: site.brandName,
        links: [
          { label: "Tentang kami", href: "/tentang" },
          { label: "Tim & kredensial", href: "/tim" },
          { label: "Karier", href: "/karier" },
          { label: "Kontak & lokasi", href: "/kontak" },
        ],
      },
    ],
  },
];

const NAV_EN: NavItem[] = [
  { key: "corporate", label: "Corporate & PMA", href: "/en/corporate", match: (p) => p === "/en/corporate" },
  { key: "services", label: "Services", href: "/en/services", match: (p) => p.startsWith("/en/services") },
  { key: "contact", label: "Contact", href: "/en/contact", match: (p) => p === "/en/contact" },
];

const navTrigger =
  "inline-flex h-10 cursor-pointer items-center gap-1 whitespace-nowrap rounded-md px-2.5 font-body text-[0.875rem] font-medium text-navy-100 no-underline transition-colors hover:bg-white/5 hover:text-white";

export function Header() {
  const pathname = usePathname() || "/";
  const isEn = pathname === "/en" || pathname.startsWith("/en/");
  const nav = isEn ? NAV_EN : NAV_ID;

  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileAccordion, setMobileAccordion] = React.useState<string | null>(null);
  const [drawerTop, setDrawerTop] = React.useState(64);
  const [announcementDismissed, setAnnouncementDismissed] = React.useState(false);
  // Dihitung di browser: halaman di-prerender statis, jadi tanggal saat build bisa sudah lewat.
  const [nextDeadline, setNextDeadline] = React.useState<ReturnType<typeof getNextDeadline>>();
  React.useEffect(() => setNextDeadline(getNextDeadline()), []);
  const headerRef = React.useRef<HTMLElement>(null);
  const hoverTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    try {
      if (window.localStorage.getItem("primetax_announcement_dismissed") === "true") {
        setAnnouncementDismissed(true);
      }
    } catch {
      // ignore
    }
  }, []);

  // Tutup menu saat berpindah halaman
  React.useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Kunci body scroll & dukung tombol Esc saat drawer mobile atau dropdown terbuka
  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    if (!mobileMenuOpen && headerRef.current) {
      setDrawerTop(headerRef.current.getBoundingClientRect().bottom);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = (key: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setOpenDropdown(key), 120);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const dismissAnnouncement = () => {
    setAnnouncementDismissed(true);
    try {
      window.localStorage.setItem("primetax_announcement_dismissed", "true");
    } catch {
      // ignore
    }
  };

  const idEquivalent = getEquivalentLocalePath(pathname, "id");
  const enEquivalent = getEquivalentLocalePath(pathname, "en");
  const cta = isEn
    ? { label: "Request Proposal", href: "/en/request-proposal" }
    : { label: "Hubungi Kami", href: "/kontak" };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-90 focus:rounded-md focus:bg-emerald-700 focus:px-4 focus:py-2.5 focus:font-heading focus:text-btn-sm focus:text-white focus:shadow-lg"
      >
        {isEn ? "Skip to main content" : "Langsung ke konten"}
      </a>

      {/* Top bar pengumuman: satu baris di semua ukuran layar */}
      {site.flags.announcementBar && !announcementDismissed && !isEn && nextDeadline && (
        <div className="bg-navy-950 text-white">
          <div className="container-site flex h-9 items-center justify-between gap-3 text-caption">
            <p className="m-0 min-w-0 truncate text-navy-100">
              <span className="mr-2 hidden rounded-sm bg-emerald-700 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white sm:inline">
                Info Pajak
              </span>
              Tenggat berikutnya:{" "}
              <strong className="font-semibold text-white tabular">
                {formatDateId(nextDeadline.date)}
              </strong>
              <Link
                href="/tools/kalender-pajak"
                className="ml-2 font-semibold text-emerald-300 no-underline hover:text-white hover:underline"
              >
                Kalender →
              </Link>
            </p>
            <button
              type="button"
              onClick={dismissAnnouncement}
              aria-label="Tutup pengumuman"
              className="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-sm text-navy-200 hover:bg-navy-800 hover:text-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 border-b border-white/10 bg-navy-900 text-white transition-shadow duration-150",
          isScrolled && "shadow-lg",
          // Saat drawer terbuka, header (dan drawer di dalamnya) berada di atas FAB WhatsApp
          mobileMenuOpen && "z-85"
        )}
      >
        <div className="container-site flex h-16 items-center justify-between gap-4">
          <Logo tone="inverse" showLegalSub={false} href={isEn ? "/en" : "/"} />

          {/* Navigasi desktop (>= 1024px) */}
          <nav aria-label={isEn ? "Main" : "Utama"} className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = item.match(pathname);
              if (!item.groups) {
                return (
                  <Link
                    key={item.key}
                    href={item.href!}
                    aria-current={active ? "page" : undefined}
                    className={cn(navTrigger, active && "text-white")}
                  >
                    {item.label}
                  </Link>
                );
              }
              const open = openDropdown === item.key;
              const wide = item.groups.length > 1;
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpenDropdown(open ? null : item.key)}
                    className={cn(navTrigger, (active || open) && "text-white")}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn("h-3.5 w-3.5 opacity-70 transition-transform duration-200", open && "rotate-180")}
                      aria-hidden="true"
                    />
                  </button>
                  {open && (
                    <div
                      className={cn(
                        "absolute top-full left-0 z-60 mt-2 rounded-xl border border-ink-200 bg-white p-5 text-ink-900 shadow-lg",
                        wide
                          ? item.groups.some((g) => g.links.length > 6)
                            ? "grid w-[46rem] grid-cols-[13rem_1fr] gap-6"
                            : "grid w-[30rem] grid-cols-2 gap-6"
                          : "w-56"
                      )}
                    >
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="mb-2 px-2 font-heading text-eyebrow uppercase text-ink-500">
                            {group.title}
                          </p>
                          <ul
                            className={
                              group.links.length > 6
                                ? "grid grid-cols-2 gap-x-3 gap-y-0.5"
                                : "space-y-0.5"
                            }
                          >
                            {group.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="block rounded-md px-2 py-1.5 text-body-sm font-medium text-ink-900 no-underline transition-colors hover:bg-navy-50 hover:text-emerald-700"
                                >
                                  {link.label}
                                  {link.desc && (
                                    <span className="mt-0.5 block text-caption font-normal text-ink-500">
                                      {link.desc}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Kanan desktop: bahasa + satu CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href={isEn ? idEquivalent : enEquivalent}
              hrefLang={isEn ? "id" : "en"}
              aria-label={isEn ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
              className="text-caption font-semibold text-navy-200 no-underline hover:text-white"
            >
              {isEn ? "ID" : "EN"}
            </Link>
            <Button variant="primary" size="sm" href={cta.href}>
              {cta.label}
            </Button>
          </div>

          {/* Kanan mobile (< 1024px): bahasa + hamburger */}
          <div className="flex items-center gap-1 lg:hidden">
            <Link
              href={isEn ? idEquivalent : enEquivalent}
              aria-label={isEn ? "Ganti ke Bahasa Indonesia" : "Switch to English"}
              className="inline-flex h-11 w-11 items-center justify-center text-caption font-semibold text-navy-200 no-underline"
            >
              {isEn ? "ID" : "EN"}
            </Link>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={toggleMobileMenu}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Drawer mobile */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu navigasi"
            style={{ top: drawerTop }}
            className="fixed inset-x-0 bottom-0 z-80 flex flex-col overflow-y-auto bg-navy-950 px-5 pt-4 pb-8 text-white lg:hidden"
          >
            <ul className="divide-y divide-white/10">
              {nav.map((item) => {
                if (!item.groups) {
                  return (
                    <li key={item.key}>
                      <Link
                        href={item.href!}
                        className="flex min-h-13 items-center font-heading text-body font-semibold text-white no-underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                const open = mobileAccordion === item.key;
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setMobileAccordion(open ? null : item.key)}
                      className="flex min-h-13 w-full cursor-pointer items-center justify-between font-heading text-body font-semibold text-white"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn("h-5 w-5 text-navy-200 transition-transform", open && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>
                    {open && (
                      <div className="space-y-4 pb-4">
                        {item.groups.map((group) => (
                          <div key={group.title}>
                            {item.groups!.length > 1 && (
                              <p className="mb-1 font-heading text-eyebrow uppercase text-navy-200">
                                {group.title}
                              </p>
                            )}
                            {group.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block py-2 text-body-sm text-navy-100 no-underline hover:text-emerald-300"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-auto space-y-3 pt-8">
              {isEn ? (
                <Button variant="primary" size="lg" fullWidth href={cta.href}>
                  {cta.label}
                </Button>
              ) : (
                <>
                  <WaButton waContext={{ type: "general" }} ctaLocation="header" segment="both" size="lg" fullWidth>
                    Konsultasi via WhatsApp
                  </WaButton>
                  <Button variant="outline-inverse" size="lg" fullWidth href="/minta-proposal">
                    Minta Proposal Korporasi
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
