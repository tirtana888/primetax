import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { ConsentSettingsLink } from "@/components/layout/ConsentBanner";
import { site } from "@/config/site";
import { services } from "@/content/services";

export function Footer() {
  const { contact } = site;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-content py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="inverse" withDescriptor />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">{site.statement}</p>
            <p className="mt-6 text-sm font-medium tracking-wide text-gold">{site.tagline}</p>
          </div>

          <FooterColumn title="Services" className="md:col-span-3">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Firm" className="md:col-span-2">
            <FooterLink href="/about">About PrimeTax</FooterLink>
            <FooterLink href="/industries">Industries</FooterLink>
            <FooterLink href="/insights">Insights</FooterLink>
            <FooterLink href="/team">Our Team</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contact" className="md:col-span-3">
            {contact.email && <FooterLink href={`mailto:${contact.email}`}>{contact.email}</FooterLink>}
            {contact.phone && <FooterLink href={contact.phoneHref}>{contact.phone}</FooterLink>}
            <li className="text-sm text-white/65">
              {contact.addressLines.length > 0
                ? contact.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))
                : contact.city}
            </li>
            <li className="text-sm text-white/65">{contact.hours}</li>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/15 pt-8 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Website Terms
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-white">
                Professional Disclaimer
              </Link>
            </li>
            <li>
              <ConsentSettingsLink />
            </li>
          </ul>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-white/45">
          Information on this website is general in nature and does not constitute tax or legal advice. Advice is
          provided only under an agreed engagement and based on the specific facts of each matter.
        </p>
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
