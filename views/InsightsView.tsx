import { CtaPanel } from "@/components/blocks/CtaPanel";
import { InsightsBrowser } from "@/components/blocks/InsightsBrowser";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { getPublishedInsights } from "@/content/insights";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaTitle: "Insights — Indonesian Tax Analysis and Briefings",
    metaDescription:
      "Tax bulletins, regulatory updates, articles, and executive briefings on Indonesian corporate tax, international tax, transfer pricing, and tax controversy.",
    title: "Analysis for Finance Leaders",
    intro:
      "Tax bulletins, regulatory updates, articles, and executive briefings on Indonesian tax matters — written for decision-makers and reviewed against official sources.",
  },
  id: {
    metaTitle: "Insights — Analisis dan Briefing Pajak Indonesia",
    metaDescription:
      "Tax bulletin, update regulasi, artikel, dan executive briefing tentang pajak korporasi, pajak internasional, transfer pricing, dan sengketa pajak di Indonesia.",
    title: "Analisis untuk Pimpinan Keuangan",
    intro:
      "Tax bulletin, update regulasi, artikel, dan executive briefing tentang persoalan pajak Indonesia — ditulis untuk pengambil keputusan dan ditinjau terhadap sumber resmi.",
  },
};

export function insightsMetadata(locale: Locale) {
  const c = copy[locale];
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: "/insights", locale });
}

export function InsightsView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label: t(locale).nav.insights, href: "/insights" }]}
        eyebrow="Insights"
        title={c.title}
        intro={c.intro}
      />
      <Section>
        <InsightsBrowser insights={getPublishedInsights(locale)} />
      </Section>
      <CtaPanel locale={locale} track="insights_final" />
    </>
  );
}
