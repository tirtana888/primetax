import { InsightCard, ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { FaqSection } from "@/components/blocks/FaqSection";
import { PageHero } from "@/components/blocks/PageHero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { JsonLd } from "@/components/layout/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getInsight } from "@/content/insights";
import { getLandingPage, type LandingPage } from "@/content/landing-pages";
import { getService } from "@/content/services";
import { localizePath, t, type Locale } from "@/lib/i18n";
import { serviceSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    audience: { eyebrow: "Who this is for", title: "Typical Clients" },
    issues: { eyebrow: "Common issues", title: "What Typically Needs Attention" },
    scope: "Scope of assistance",
    checklist: {
      eyebrow: "Self-assessment",
      title: "Questions for Your Finance Team",
      intro: "If any answer is uncertain, it may be worth a focused review.",
    },
    process: { eyebrow: "Engagement process", title: "How We Work" },
    related: { eyebrow: "Related", title: "Related Services and Insights" },
    viewService: (title: string) => `View ${title} services`,
  },
  id: {
    audience: { eyebrow: "Untuk siapa", title: "Klien yang Kami Dampingi" },
    issues: { eyebrow: "Persoalan umum", title: "Hal yang Umumnya Perlu Diperhatikan" },
    scope: "Ruang lingkup pendampingan",
    checklist: {
      eyebrow: "Penilaian mandiri",
      title: "Pertanyaan untuk Tim Keuangan Anda",
      intro: "Bila ada jawaban yang belum pasti, review terfokus mungkin bermanfaat.",
    },
    process: { eyebrow: "Proses penugasan", title: "Cara Kami Bekerja" },
    related: { eyebrow: "Terkait", title: "Layanan dan Insights Terkait" },
    viewService: (title: string) => `Lihat layanan ${title}`,
  },
};

export function landingMetadata(slug: string, locale: Locale) {
  const page = getLandingPage(slug, locale);
  if (!page) return {};
  return pageMetadata({ ...page.seo, path: `/solutions/${page.slug}`, locale, absoluteTitle: false });
}

export function LandingView({ page, locale }: { page: LandingPage; locale: Locale }) {
  const c = copy[locale];
  const d = t(locale);
  const path = `/solutions/${page.slug}`;
  const service = getService(page.serviceSlug, locale);
  const consultHref = `/book-consultation?topic=${page.serviceSlug}`;
  const insights = page.insightSlugs.map((s) => getInsight(s, locale)).filter((i) => i !== undefined);

  return (
    <>
      <JsonLd data={serviceSchema({ name: page.headline, description: page.intro, path: localizePath(path, locale) })} />

      <PageHero
        locale={locale}
        breadcrumbs={[
          { label: d.nav.services, href: "/services" },
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
            {c.viewService(service.title)}
          </ButtonLink>
        )}
      </PageHero>

      <Section>
        <SectionHeader eyebrow={c.audience.eyebrow} title={c.audience.title} />
        <div
          data-stagger
          className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-3"
        >
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
            <SectionHeader eyebrow={c.issues.eyebrow} title={c.issues.title} />
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
              <p className="eyebrow">{c.scope}</p>
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
            eyebrow={c.checklist.eyebrow}
            title={c.checklist.title}
            intro={c.checklist.intro}
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
        <SectionHeader eyebrow={c.process.eyebrow} title={c.process.title} />
        <div className="mt-12">
          <ProcessSteps locale={locale} steps={service?.process} />
        </div>
      </Section>

      <FaqSection items={page.faqs} locale={locale} />

      {(service || insights.length > 0) && (
        <Section tone="warm">
          <SectionHeader eyebrow={c.related.eyebrow} title={c.related.title} />
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {service && <ServiceCard service={service} locale={locale} />}
            <div className="grid gap-10">
              {insights.map((i) => (
                <InsightCard key={i.slug} insight={i} locale={locale} />
              ))}
            </div>
          </div>
        </Section>
      )}

      <CtaPanel
        locale={locale}
        title={`${page.ctaLabel}.`}
        text={d.ctaPanel.matterText}
        ctaLabel={page.ctaLabel}
        href={consultHref}
        track={`landing_final_${page.slug}`}
      />
    </>
  );
}
