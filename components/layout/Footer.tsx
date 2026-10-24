"use client";

import { Logo } from "@/components/brand/Logo";
import { ConsentSettingsLink } from "@/components/layout/ConsentBanner";
import { Link, useLocale } from "@/components/ui/Link";
import { site } from "@/config/site";
import { events } from "@/content/events";
import { getServices } from "@/content/services";
import { t } from "@/lib/i18n";

export function Footer() {
  const locale = useLocale();
  const d = t(locale);
  const { contact } = site;
  const year = new Date().getFullYear();
  const hasEvents = events.length > 0;

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="inverse" withDescriptor />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">{d.statement}</p>
            <p className="mt-6 text-sm font-medium tracking-wide text-gold">{site.tagline}</p>
          </div>

          <FooterColumn title={d.footer.services} className="md:col-span-3">
            {getServices(locale).map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={d.footer.firm} className="md:col-span-2">
            <FooterLink href="/about">{d.footer.aboutFirm}</FooterLink>
            <FooterLink href="/industries">{d.nav.industries}</FooterLink>
            <FooterLink href="/insights">{d.nav.insights}</FooterLink>
            <FooterLink href="/team">{d.nav.team}</FooterLink>
            {hasEvents && <FooterLink href="/events">{d.nav.events}</FooterLink>}
            <FooterLink href="/contact">{d.nav.contact}</FooterLink>
            {site.companyProfile.href && (
              <li>
                <a
                  href={site.companyProfile.href}
                  download
                  className="text-sm text-white/80 transition-colors hover:text-white"
                >
                  {d.common.companyProfilePdf}
                </a>
              </li>
            )}
          </FooterColumn>

          <FooterColumn title={d.footer.contact} className="md:col-span-3">
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className="text-sm text-white/80 transition-colors hover:text-white">
                  {contact.email}
                </a>
              </li>
            )}
            {contact.phone && (
              <li>
                <a href={contact.phoneHref} className="text-sm text-white/80 transition-colors hover:text-white">
                  {contact.phone}
                </a>
              </li>
            )}
            <li className="text-sm text-white/65">
              {contact.addressLines.length > 0
                ? contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))
                : contact.city}
            </li>
            <li className="text-sm text-white/65">{contact.hours[locale]}</li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. {d.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                {d.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                {d.footer.terms}
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-white">
                {d.footer.disclaimer}
              </Link>
            </li>
            <li>
              <ConsentSettingsLink label={d.footer.cookies} />
            </li>
          </ul>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/45">{d.footer.note}</p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <p className="text-label font-medium uppercase text-white/50">{title}</p>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-white/80 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  );
}
