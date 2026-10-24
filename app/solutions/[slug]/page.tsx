import { notFound } from "next/navigation";
import { InsightCard, ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { FaqSection } from "@/components/blocks/FaqSection";
import { PageHero } from "@/components/blocks/PageHero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { JsonLd } from "@/components/layout/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getInsight } from "@/content/insights";
import { getLandingPage, landingPages } from "@/content/landing-pages";
import { getService } from "@/content/services";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return landingPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params) {
  const page = getLandingPage((await params).slug);
  if (!page) return {};
  return pageMetadata({ ...page.seo, path: `/solutions/${page.slug}` });
}

export default async function LandingPage({ params }: Params) {
  const page = getLandingPage((await params).slug);
  if (!page) notFound();

  const path = `/solutions/${page.slug}`;
  const service = getService(page.serviceSlug);
  const consultHref = `/book-consultation?topic=${page.serviceSlug}`;
  const insights = page.insightSlugs.map(getInsight).filter((i) => i !== undefined);

  return (
    <>
      <JsonLd data={serviceSchema({ name: page.headline, description: page.intro, path })} />

      <PageHero
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: page.eyebrow, href: path },
        ]}
        eyebrow={page.eyebrow}
        title={page.headline}
        intro={page.intro}
      >
        <ButtonLink href={consultHref} arrow track={`landing_hero_${page.slug}`}>
          {page.ctaLabel}
        </ButtonLink>
        {service && (
          <ButtonLink href={`/services/${service.slug}`} variant="secondary">
            View {service.title} services
          </ButtonLink>
        )}
      </PageHero>

      <Section>
        <SectionHeader eyebrow="Who this is for" title="Typical Clients" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3">
          {page.audience.map((a) => (
            <div key={a.title} className="bg-white p-8">
              <span className="block h-px w-8 bg-gold" aria-hidden="true" />
              <h3 className="mt-6 text-[1.1875rem] font-semibold">{a.title}</h3>
              <p className="mt-2 text-graphite">{a.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="warm">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow="Common issues" title="What Typically Needs Attention" />
            <dl className="mt-10">
              {page.issues.map((issue) => (
                <div key={issue.title} className="border-t border-border py-6">
                  <dt className="text-[1.125rem] font-semibold">{issue.title}</dt>
                  <dd className="mt-2 text-graphite">{issue.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card border border-border bg-white p-8">
              <p className="eyebrow">Scope of assistance</p>
              <ul className="mt-6 space-y-4">
                {page.scope.map((s) => (
                  <li key={s} className="flex gap-4">
                    <span className="mt-[0.75em] h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader
            className="lg:col-span-5"
            eyebrow="Self-assessment"
            title="Questions for Your Finance Team"
            intro="If any answer is uncertain, it may be worth a focused review."
          />
          <ol className="lg:col-span-7">
            {page.checklist.map((q, i) => (
              <li key={q} className="grid grid-cols-[3rem_1fr] border-t border-border py-6 last:border-b">
                <span className="text-small tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
                <p>{q}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="warm">
        <SectionHeader eyebrow="Engagement process" title="How We Work" />
        <div className="mt-12">
          <ProcessSteps steps={service?.process} />
        </div>
      </Section>

      <FaqSection items={page.faqs} />

      {(service || insights.length > 0) && (
        <Section tone="warm">
          <SectionHeader eyebrow="Related" title="Related Services and Insights" />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {service && <ServiceCard service={service} />}
            <div className="grid gap-10">
              {insights.map((i) => (
                <InsightCard key={i.slug} insight={i} />
              ))}
            </div>
          </div>
        </Section>
      )}

      <CtaPanel
        title={`${page.ctaLabel}.`}
        text="Share the context of your matter. We will propose a scope and approach for an initial discussion."
        ctaLabel={page.ctaLabel}
        href={consultHref}
        track={`landing_final_${page.slug}`}
      />
    </>
  );
}
