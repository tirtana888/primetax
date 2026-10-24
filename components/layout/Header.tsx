"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
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

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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
        Skip to content
      </a>
      <div className="container-content flex h-[72px] items-center justify-between gap-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
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
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={site.primaryCta.href} track="header" className="h-10 px-5 text-sm">
            {site.primaryCta.label}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-content py-6">
            <ul>
              <li>
                <Link href="/" className="block border-b border-border py-4 text-lg">
                  Home
                </Link>
              </li>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="flex items-center justify-between border-b border-border py-4 text-lg"
                  >
                    {item.label}
                    {isActive(item.href) && <span className="h-px w-6 bg-gold" aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href={site.primaryCta.href} track="mobile_menu" arrow className="mt-8 w-full">
              {site.primaryCta.label}
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
