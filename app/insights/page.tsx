import { InsightCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { getPublishedInsights } from "@/content/insights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insights — Indonesian Tax Analysis and Briefings",
  description:
    "Articles, regulatory updates, and executive briefings on Indonesian corporate tax, international tax, transfer pricing, and tax controversy.",
  path: "/insights",
});

export default function InsightsPage() {
  const [featured, ...rest] = getPublishedInsights();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights", href: "/insights" }]}
        eyebrow="Insights"
        title="Analysis for Finance Leaders"
        intro="Articles, regulatory updates, and executive briefings on Indonesian tax matters — written for decision-makers and reviewed against official sources."
      />

      {featured && (
        <Section>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <InsightCard insight={featured} className="[&_h3]:text-h2" />
            </div>
            <div className="lg:col-span-4">
              <div className="rounded-card bg-warm p-8">
                <p className="text-sm font-medium">Key points</p>
                <ul className="mt-5 space-y-3 text-small text-graphite">
                  {featured.keyPoints.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-[0.7em] h-px w-3 shrink-0 bg-gold" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {rest.length > 0 && (
            <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((insight) => (
                <InsightCard key={insight.slug} insight={insight} />
              ))}
            </div>
          )}
        </Section>
      )}

      <CtaPanel track="insights_final" />
    </>
  );
}
