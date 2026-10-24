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
import { getService, type ServiceCategory } from "@/content/services";
import { localizePath, t, type Locale } from "@/lib/i18n";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    situations: { eyebrow: "Client situations", title: "When Companies Engage Us" },
    scope: { eyebrow: "Scope of assistance", title: "What We Cover" },
    deliverables: "Typical deliverables",
    process: { eyebrow: "Engagement process", title: "How the Work Is Structured" },
    considerations: { eyebrow: "Considerations", title: "Regulatory and Technical Context" },
    matrixTitle: "How we present exposure to management",
    related: { eyebrow: "Related", title: "Related Services and Insights" },
  },
  id: {
    situations: { eyebrow: "Situasi klien", title: "Kapan Perusahaan Melibatkan Kami" },
    scope: { eyebrow: "Ruang lingkup", title: "Cakupan Pendampingan" },
    deliverables: "Deliverable umum",
    process: { eyebrow: "Proses penugasan", title: "Bagaimana Pekerjaan Disusun" },
    considerations: { eyebrow: "Pertimbangan", title: "Konteks Regulasi dan Teknis" },
    matrixTitle: "Cara kami menyajikan eksposur kepada manajemen",
    related: { eyebrow: "Terkait", title: "Layanan dan Insights Terkait" },
  },
};

export function serviceMetadata(slug: string, locale: Locale) {
  const service = getService(slug, locale);
  if (!service) return {};
  return pageMetadata({ ...service.seo, path: `/services/${service.slug}`, locale });
}

export function ServiceView({ service, locale }: { service: ServiceCategory; locale: Locale }) {
  const c = copy[locale];
  const d = t(locale);
  const path = `/services/${service.slug}`;
  const consultHref = `/book-consultation?topic=${service.slug}`;
  const scope = service.scope.filter((s) => !s.confirm);
  const related = service.relatedServices.map((s) => getService(s, locale)).filter((s) => s !== undefined);
  const insights = service.relatedInsights.map((i) => getInsight(i, locale)).filter((i) => i !== undefined);

  return (
    <>
      <JsonLd
        data={serviceSchema({ name: service.title, description: service.valueProposition, path: localizePath(path, locale) })}
      />

      {/* 1. Title and value proposition */}
      <PageHero
        locale={locale}
        breadcrumbs={[
          { label: d.nav.services, href: "/services" },
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
        <SectionHeader eyebrow={c.situations.eyebrow} title={c.situations.title} />
        <div
          data-stagger
          className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2"
        >
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
            <SectionHeader eyebrow={c.scope.eyebrow} title={c.scope.title} />
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
              <p className="eyebrow">{c.deliverables}</p>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-[0.75em] h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-border pt-6 text-xs text-graphite">{d.common.deliverablesNote}</p>
            </div>
          </aside>
        </div>
      </Section>

      {/* 5. Engagement process */}
      <Section>
        <SectionHeader eyebrow={c.process.eyebrow} title={c.process.title} />
        <div className="mt-12">
          <ProcessSteps locale={locale} steps={service.process} />
        </div>
      </Section>

      {/* 6. Regulatory and technical considerations */}
      <Section tone="warm">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader eyebrow={c.considerations.eyebrow} title={c.considerations.title} />
            <div className="mt-10 space-y-8">
              {service.considerations.map((item) => (
                <div key={item.title} className="border-l border-gold pl-6">
                  <h3 className="text-[1.125rem] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-graphite">{item.description}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-xs text-graphite">{d.common.considerationsNote}</p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-card border border-border bg-white p-8">
              <p className="text-sm font-medium">{c.matrixTitle}</p>
              <RiskMatrix locale={locale} className="mt-6" />
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <FaqSection items={service.faqs} locale={locale} />

      {/* 8. Related services and insights */}
      <Section tone="warm">
        <SectionHeader eyebrow={c.related.eyebrow} title={c.related.title} />
        <div data-stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} locale={locale} />
          ))}
        </div>
        {insights.length > 0 && (
          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {insights.map((i) => (
              <InsightCard key={i.slug} insight={i} locale={locale} />
            ))}
          </div>
        )}
      </Section>

      {/* 9. CTA */}
      <CtaPanel
        locale={locale}
        title={`${service.ctaLabel}.`}
        text={d.ctaPanel.matterText}
        ctaLabel={service.ctaLabel}
        href={consultHref}
        track={`service_final_${service.slug}`}
      />
    </>
  );
}
