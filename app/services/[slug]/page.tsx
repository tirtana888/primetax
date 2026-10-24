import { notFound } from "next/navigation";
import { InsightCard, ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { FaqSection } from "@/components/blocks/FaqSection";
import { PageHero } from "@/components/blocks/PageHero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { RiskMatrix } from "@/components/blocks/RiskMatrix";
import { JsonLd } from "@/components/layout/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { ServiceGlyph } from "@/components/ui/Icon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getInsight } from "@/content/insights";
import { getService, services } from "@/content/services";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMetadata({ ...service.seo, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: Params) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const consultHref = `/book-consultation?topic=${service.slug}`;
  const scope = service.scope.filter((s) => !s.confirm);
  const related = service.relatedServices.map(getService).filter((s) => s !== undefined);
  const insights = service.relatedInsights.map(getInsight).filter((i) => i !== undefined);

  return (
    <>
      <JsonLd data={serviceSchema({ name: service.title, description: service.valueProposition, path })} />

      {/* 1. Title and value proposition */}
      <PageHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title, href: path },
        ]}
        eyebrow={`${service.number} — ${service.title}`}
        title={service.headline}
        intro={service.valueProposition}
        aside={
          <div className="hidden justify-end lg:flex">
            <span className="inline-flex h-28 w-28 items-center justify-center rounded-full border border-border">
              <ServiceGlyph icon={service.icon} className="h-10 w-10" />
            </span>
          </div>
        }
      >
        <ButtonLink href={consultHref} arrow track={`service_hero_${service.slug}`}>
          {service.ctaLabel}
        </ButtonLink>
      </PageHero>

      {/* 2. Client situations */}
      <Section>
        <SectionHeader eyebrow="Client situations" title="When Companies Engage Us" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2">
          {service.situations.map((s) => (
            <div key={s.title} className="bg-white p-8 md:p-10">
              <h3 className="text-h3">{s.title}</h3>
              <p className="mt-3 text-graphite">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 3. Scope + 4. Deliverables */}
      <Section tone="warm">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Scope of assistance" title="What We Cover" />
            <dl className="mt-10">
              {scope.map((item) => (
                <div key={item.title} className="border-t border-border py-6">
                  <dt className="text-[1.125rem] font-semibold">{item.title}</dt>
                  <dd className="mt-2 text-graphite">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card border border-border bg-white p-8 lg:sticky lg:top-28">
              <p className="eyebrow">Typical deliverables</p>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex gap-4">
                    <span className="mt-[0.75em] h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-6 text-xs text-graphite">
                Deliverables are confirmed in each engagement letter and depend on the agreed scope.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      {/* 5. Engagement process */}
      <Section>
        <SectionHeader eyebrow="Engagement process" title="How the Work Is Structured" />
        <div className="mt-12">
          <ProcessSteps steps={service.process} />
        </div>
      </Section>

      {/* 6. Regulatory and technical considerations */}
      <Section tone="warm">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Considerations" title="Regulatory and Technical Context" />
            <div className="mt-10 space-y-8">
              {service.considerations.map((c) => (
                <div key={c.title} className="border-l border-gold pl-6">
                  <h3 className="text-[1.125rem] font-semibold">{c.title}</h3>
                  <p className="mt-2 text-graphite">{c.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-xs text-graphite">
              Summary for general information only. Regulations are applied to the specific facts of each engagement.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-card border border-border bg-white p-8">
              <p className="text-sm font-medium">How we present exposure to management</p>
              <RiskMatrix className="mt-6" />
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <FaqSection items={service.faqs} />

      {/* 8. Related services and insights */}
      <Section tone="warm">
        <SectionHeader eyebrow="Related" title="Related Services and Insights" />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        {insights.length > 0 && (
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {insights.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        )}
      </Section>

      {/* 9. CTA */}
      <CtaPanel
        title={`${service.ctaLabel}.`}
        text="Share the context of your matter. We will propose a scope and approach for an initial discussion."
        ctaLabel={service.ctaLabel}
        href={consultHref}
        track={`service_final_${service.slug}`}
      />
    </>
  );
}
