import { ArrowRight } from "lucide-react";
import { InsightCard, ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { FaqSection } from "@/components/blocks/FaqSection";
import { PageHero } from "@/components/blocks/PageHero";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getIndustries, type Industry } from "@/content/industries";
import type { IndustryDetail } from "@/content/industry-details";
import { getIndustryDetail } from "@/content/industry-details";
import { getInsight } from "@/content/insights";
import { getService } from "@/content/services";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    context: "Industry context",
    atGlance: "Common issues at a glance",
    issues: { eyebrow: "Key tax issues", title: "Where Tax Exposure Usually Sits" },
    scenarios: {
      eyebrow: "Typical situations",
      title: "Situations We Commonly See",
      note: "Illustrative scenarios based on common patterns in this industry. They are not client case studies.",
      situation: "Situation",
      questions: "Questions we examine",
      approach: "How we typically approach it",
    },
    regulations: {
      eyebrow: "Regulatory framework",
      title: "Relevant Regulations",
      note: "Indicative references only. Applicable rules are confirmed against current official texts for each engagement.",
    },
    related: { eyebrow: "Related", title: "Relevant Services and Insights" },
    others: "Other industries",
  },
  id: {
    context: "Konteks industri",
    atGlance: "Persoalan umum secara ringkas",
    issues: { eyebrow: "Persoalan pajak utama", title: "Di Mana Eksposur Pajak Biasanya Berada" },
    scenarios: {
      eyebrow: "Situasi umum",
      title: "Situasi yang Sering Kami Temui",
      note: "Skenario ilustratif berdasarkan pola umum di industri ini. Skenario ini bukan studi kasus klien.",
      situation: "Situasi",
      questions: "Pertanyaan yang kami telaah",
      approach: "Pendekatan yang umumnya kami ambil",
    },
    regulations: {
      eyebrow: "Kerangka regulasi",
      title: "Ketentuan yang Relevan",
      note: "Rujukan bersifat indikatif. Ketentuan yang berlaku dipastikan terhadap naskah resmi terkini pada setiap penugasan.",
    },
    related: { eyebrow: "Terkait", title: "Layanan dan Insights yang Relevan" },
    others: "Industri lainnya",
  },
};

export function industryMetadata(slug: string, locale: Locale) {
  const detail = getIndustryDetail(slug, locale);
  if (!detail) return {};
  return pageMetadata({ ...detail.seo, path: `/industries/${slug}`, locale });
}

export function IndustryView({
  industry,
  detail,
  locale,
}: {
  industry: Industry;
  detail: IndustryDetail;
  locale: Locale;
}) {
  const c = copy[locale];
  const d = t(locale);
  const path = `/industries/${industry.slug}`;
  const consultHref = `/book-consultation?topic=${industry.services[0]}`;
  const services = industry.services.map((s) => getService(s, locale)).filter((s) => s !== undefined);
  const insights = detail.insights.map((s) => getInsight(s, locale)).filter((i) => i !== undefined);
  const others = getIndustries(locale).filter((i) => i.slug !== industry.slug);

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[
          { label: d.nav.industries, href: "/industries" },
          { label: industry.name, href: path },
        ]}
        eyebrow={industry.name}
        title={detail.headline}
        intro={detail.intro}
      >
        <ButtonLink href={consultHref} arrow track={`industry_hero_${industry.slug}`}>
          {detail.ctaLabel}
        </ButtonLink>
      </PageHero>

      {/* Context */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">{c.context}</p>
            <div className="mt-6 space-y-6 text-lead text-graphite">
              {detail.context.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-card bg-warm p-8">
              <p className="text-sm font-medium">{c.atGlance}</p>
              <ul className="mt-5 space-y-3 text-small">
                {industry.issues.map((issue) => (
                  <li key={issue} className="flex gap-3">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      {/* Key tax issues */}
      <Section tone="warm">
        <SectionHeader eyebrow={c.issues.eyebrow} title={c.issues.title} />
        <div
          data-stagger
          className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2"
        >
          {detail.issues.map((issue, i) => (
            <div key={issue.title} className="bg-white p-8 md:p-10">
              <span className="text-small tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 text-h3">{issue.title}</h3>
              <p className="mt-3 text-graphite">{issue.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Illustrative scenarios */}
      <Section>
        <SectionHeader eyebrow={c.scenarios.eyebrow} title={c.scenarios.title} />
        <p className="mt-4 max-w-3xl text-small text-graphite">{c.scenarios.note}</p>
        <div data-stagger className="mt-12 grid gap-6 lg:grid-cols-2">
          {detail.scenarios.map((s, i) => (
            <article key={s.title} className="flex flex-col rounded-card border border-border bg-white p-8 md:p-10">
              <div className="flex items-center gap-4">
                <span className="text-small font-medium tabular-nums text-graphite">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-h3">{s.title}</h3>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-label font-medium uppercase text-graphite">{c.scenarios.situation}</dt>
                  <dd className="mt-2">{s.situation}</dd>
                </div>
                <div>
                  <dt className="text-label font-medium uppercase text-graphite">{c.scenarios.questions}</dt>
                  <dd className="mt-2">
                    <ul className="space-y-2 text-graphite">
                      {s.questions.map((q) => (
                        <li key={q} className="flex gap-3">
                          <span className="mt-[0.75em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
                          {q}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
                <div className="border-l border-gold pl-5">
                  <dt className="text-label font-medium uppercase text-graphite">{c.scenarios.approach}</dt>
                  <dd className="mt-2">{s.approach}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      {/* Regulations */}
      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader className="lg:col-span-5" eyebrow={c.regulations.eyebrow} title={c.regulations.title} />
          <div className="lg:col-span-7">
            <ul className="border-t border-border">
              {detail.regulations.map((r) => (
                <li key={r} className="border-b border-border py-5">
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-graphite">{c.regulations.note}</p>
          </div>
        </div>
      </Section>

      {/* Related services and insights */}
      <Section>
        <SectionHeader eyebrow={c.related.eyebrow} title={c.related.title} />
        <div data-stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
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

      <FaqSection items={detail.faqs} locale={locale} />

      {/* Other industries */}
      <Section tone="warm">
        <p className="eyebrow">{c.others}</p>
        <ul className="mt-8 grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug} className="border-b border-border md:pr-8">
              <Link
                href={`/industries/${o.slug}`}
                className="group flex items-center justify-between gap-6 py-5 text-[1.0625rem] font-medium"
              >
                {o.name}
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

      <CtaPanel
        locale={locale}
        title={`${detail.ctaLabel}.`}
        text={d.ctaPanel.matterText}
        ctaLabel={detail.ctaLabel}
        href={consultHref}
        track={`industry_final_${industry.slug}`}
      />
    </>
  );
}
