import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getLandingPages } from "@/content/landing-pages";
import { getServices, getSupportingServices } from "@/content/services";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaTitle: "Tax Advisory Services in Indonesia",
    metaDescription:
      "PrimeTax services: tax advisory, international tax and PMA, transfer pricing, and tax controversy for foreign-invested companies, large taxpayers, and corporate groups.",
    eyebrow: "Services",
    title: "Advisory Built Around the Decisions You Face",
    intro: "Four core practices, each with a clearly defined scope, deliverables, and engagement process.",
    focusEyebrow: "Focus areas",
    focusTitle: "Specific Matters We Advise On",
    supportEyebrow: "Supporting services",
    supportTitle: "Related Advisory Support",
    supportIntro: "Available alongside the core practices, scoped to each engagement.",
  },
  id: {
    metaTitle: "Layanan Konsultan Pajak di Indonesia",
    metaDescription:
      "Layanan PrimeTax: tax advisory, international tax dan PMA, transfer pricing, serta sengketa pajak bagi perusahaan PMA, wajib pajak besar, dan grup korporasi.",
    eyebrow: "Layanan",
    title: "Advisory yang Dirancang untuk Keputusan yang Anda Hadapi",
    intro: "Empat praktik utama, masing-masing dengan ruang lingkup, deliverable, dan proses penugasan yang jelas.",
    focusEyebrow: "Fokus layanan",
    focusTitle: "Persoalan Spesifik yang Kami Tangani",
    supportEyebrow: "Layanan pendukung",
    supportTitle: "Dukungan Advisory Terkait",
    supportIntro: "Tersedia bersama praktik utama, dengan ruang lingkup yang disesuaikan setiap penugasan.",
  },
};

export function servicesMetadata(locale: Locale) {
  const c = copy[locale];
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: "/services", locale });
}

export function ServicesView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const d = t(locale);

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label: d.nav.services, href: "/services" }]}
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
      >
        <ButtonLink href="/book-consultation" arrow track="services_hero">
          {d.cta.book}
        </ButtonLink>
      </PageHero>

      <Section>
        <div data-stagger className="grid gap-6 md:grid-cols-2">
          {getServices(locale).map((s) => (
            <ServiceCard key={s.slug} service={s} locale={locale} />
          ))}
        </div>
      </Section>

      <Section bordered>
        <SectionHeader eyebrow={c.focusEyebrow} title={c.focusTitle} />
        <ul className="mt-10 grid border-t border-border md:grid-cols-2">
          {getLandingPages(locale).map((p) => (
            <li key={p.slug} className="border-b border-border md:odd:pr-10 md:even:pl-10">
              <Link
                href={`/solutions/${p.slug}`}
                className="group flex items-center justify-between gap-6 py-5 text-[1.0625rem] font-medium"
              >
                {p.headline}
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-graphite transition-transform group-hover:translate-x-1 group-hover:text-charcoal"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="warm">
        <SectionHeader eyebrow={c.supportEyebrow} title={c.supportTitle} intro={c.supportIntro} />
        <ul
          data-stagger
          className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
        >
          {getSupportingServices(locale).map((s) => (
            <li key={s.title} className="bg-white p-8">
              <h3 className="text-[1.125rem] font-semibold">{s.title}</h3>
              <p className="mt-2 text-small text-graphite">{s.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaPanel locale={locale} track="services_final" />
    </>
  );
}
