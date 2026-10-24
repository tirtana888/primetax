"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ButtonLink } from "@/components/ui/Button";
import { Link, useLocale } from "@/components/ui/Link";
import { site } from "@/config/site";
import { stripLocale, t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname() ?? "/";
  const locale = useLocale();
  const d = t(locale);
  const path = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => path === href || path.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white/95 backdrop-blur transition-colors duration-200",
        scrolled || open ? "border-border" : "border-transparent"
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-white focus:px-4 focus:py-2"
      >
        {d.common.skip}
      </a>
      <div className="container-content flex h-[72px] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[0.9375rem] transition-colors hover:text-charcoal",
                    isActive(item.href)
                      ? "text-charcoal after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-gold"
                      : "text-graphite"
                  )}
                >
                  {d.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher />
          <ButtonLink href={site.primaryCta.href} track="header" className="h-10 px-5 text-sm">
            {d.cta.book}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-1 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? d.common.closeMenu : d.common.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-white xl:hidden"
        >
          <nav aria-label="Mobile" className="container-content py-6">
            <ul>
              <li>
                <Link href="/" className="block border-b border-border py-4 text-lg">
                  {d.nav.home}
                </Link>
              </li>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="flex items-center justify-between border-b border-border py-4 text-lg"
                  >
                    {d.nav[item.key]}
                    {isActive(item.href) && <span className="h-px w-6 bg-gold" aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href={site.primaryCta.href} track="mobile_menu" arrow className="mt-8 w-full">
              {d.cta.book}
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
