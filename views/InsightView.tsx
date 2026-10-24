import { InsightCard, ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/layout/JsonLd";
import { Link } from "@/components/ui/Link";
import { Section } from "@/components/ui/Section";
import { getInsight, getPublishedInsights, type Insight, type InsightBlock } from "@/content/insights";
import { getService } from "@/content/services";
import { formatDate, localizePath, t, type Locale } from "@/lib/i18n";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function insightMetadata(slug: string, locale: Locale) {
  const insight = getInsight(slug, locale);
  if (!insight) return {};
  return pageMetadata({
    title: insight.title,
    description: insight.excerpt,
    path: `/insights/${insight.slug}`,
    locale,
    type: "article",
  });
}

export function InsightView({ insight, locale }: { insight: Insight; locale: Locale }) {
  const d = t(locale);
  const path = `/insights/${insight.slug}`;
  const services = insight.relatedServices.map((s) => getService(s, locale)).filter((s) => s !== undefined);
  const more = getPublishedInsights(locale)
    .filter((i) => i.slug !== insight.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: insight.title,
          description: insight.excerpt,
          path: localizePath(path, locale),
          publishedAt: insight.publishedAt,
          updatedAt: insight.updatedAt,
          author: insight.author,
        })}
      />

      <article>
        <header className="border-b border-border">
          <div className="container-content pt-10 pb-14 md:pt-12 md:pb-20">
            <Breadcrumbs
              locale={locale}
              items={[
                { label: d.nav.insights, href: "/insights" },
                { label: insight.title, href: path },
              ]}
            />
            <div className="mt-12 max-w-4xl md:mt-16">
              <p className="eyebrow">
                {d.insight.types[insight.type] ?? insight.type} · {insight.topic}
              </p>
              <h1 className="mt-5 text-h1">{insight.title}</h1>
              <p className="mt-6 max-w-3xl text-lead text-graphite">{insight.excerpt}</p>
            </div>
            <dl className="mt-12 grid max-w-4xl grid-cols-2 gap-6 border-t border-border pt-6 text-small md:grid-cols-4">
              <Meta label={d.insight.published}>
                <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt, locale)}</time>
              </Meta>
              <Meta label={d.insight.lastReviewed}>
                <time dateTime={insight.updatedAt}>{formatDate(insight.updatedAt, locale)}</time>
              </Meta>
              <Meta label={d.insight.author}>{insight.author}</Meta>
              {insight.reviewer ? (
                <Meta label={d.insight.reviewedBy}>{insight.reviewer}</Meta>
              ) : (
                <Meta label={d.insight.readingTime}>
                  {insight.readingMinutes} {d.insight.minutes}
                </Meta>
              )}
            </dl>
          </div>
        </header>

        <div className="container-content grid gap-16 py-16 md:py-20 lg:grid-cols-12">
          {insight.keyPoints.length > 0 && (
            <aside className="lg:col-span-4 lg:order-2">
              <div className="rounded-card bg-warm p-8 lg:sticky lg:top-28">
                <p className="text-sm font-medium">{d.insight.keyPoints}</p>
                <ul className="mt-5 space-y-3 text-small text-graphite">
                  {insight.keyPoints.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          )}

          <div className="lg:col-span-8 lg:order-1">
            <div className="prose-primetax max-w-[44rem]">
              {insight.body.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {insight.sources.length > 0 && (
              <section className="mt-16 max-w-[44rem] border-t border-border pt-8">
                <h2 className="text-sm font-medium">{d.insight.sources}</h2>
                <ul className="mt-4 space-y-2 text-small text-graphite">
                  {insight.sources.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </section>
            )}

            <p className="mt-10 max-w-[44rem] rounded-card border border-border p-6 text-xs leading-relaxed text-graphite">
              {d.insight.disclaimerA}{" "}
              <Link href="/disclaimer" className="underline decoration-gold underline-offset-2">
                {d.insight.disclaimerLink}
              </Link>
              .
            </p>
          </div>
        </div>
      </article>

      {services.length > 0 && (
        <Section tone="warm">
          <p className="eyebrow">{d.insight.relatedServices}</p>
          <div data-stagger className="mt-8 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} locale={locale} />
            ))}
          </div>
        </Section>
      )}

      {more.length > 0 && (
        <Section>
          <p className="eyebrow">{d.insight.more}</p>
          <div data-stagger className="mt-8 grid gap-10 md:grid-cols-3">
            {more.map((i) => (
              <InsightCard key={i.slug} insight={i} locale={locale} />
            ))}
          </div>
        </Section>
      )}

      <CtaPanel locale={locale} track="insight_final" />
    </>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="text-graphite">{label}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

function Block({ block }: { block: InsightBlock }) {
  switch (block.type) {
    case "h2":
      return <h2>{block.text}</h2>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l border-gold py-2 pl-6 font-serif text-[1.375rem] italic leading-snug">
          {block.text}
        </blockquote>
      );
    default:
      return <p>{block.text}</p>;
  }
}
