import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { landingPages } from "@/content/landing-pages";
import { services, supportingServices } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tax Advisory Services in Indonesia",
  description:
    "PrimeTax services: tax advisory, international tax and PMA, transfer pricing, and tax controversy for foreign-invested companies, large taxpayers, and corporate groups.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        eyebrow="Services"
        title="Advisory Built Around the Decisions You Face"
        intro="Four core practices, each with a clearly defined scope, deliverables, and engagement process."
      >
        <ButtonLink href="/book-consultation" arrow track="services_hero">
          Book a Consultation
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      <Section bordered>
        <SectionHeader eyebrow="Focus areas" title="Specific Matters We Advise On" />
        <ul className="mt-10 grid border-t border-border md:grid-cols-2">
          {landingPages.map((p) => (
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
        <SectionHeader
          eyebrow="Supporting services"
          title="Related Advisory Support"
          intro="Available alongside the core practices, scoped to each engagement."
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {supportingServices.map((s) => (
            <li key={s.title} className="bg-white p-8">
              <h3 className="text-[1.125rem] font-semibold">{s.title}</h3>
              <p className="mt-2 text-small text-graphite">{s.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaPanel track="services_final" />
    </>
  );
}
