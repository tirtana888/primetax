import { IndustryCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { getIndustries } from "@/content/industries";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaTitle: "Industries",
    metaDescription:
      "Tax issues PrimeTax addresses across manufacturing, energy and infrastructure, trading, technology, financial services, and consumer businesses in Indonesia.",
    eyebrow: "Industries",
    title: "Tax Issues Shaped by How Your Industry Operates",
    intro:
      "Business models create recurring tax questions. These are the issues we commonly see in each sector, and the practices that address them.",
    ctaTitle: "Discuss the Issues in Your Sector.",
    ctaText: "Tell us about your business model and the tax questions it raises. We will suggest a focused starting point.",
  },
  id: {
    metaTitle: "Industri",
    metaDescription:
      "Persoalan pajak yang ditangani PrimeTax di sektor manufaktur, energi dan infrastruktur, perdagangan, teknologi, jasa keuangan, dan barang konsumsi di Indonesia.",
    eyebrow: "Industri",
    title: "Persoalan Pajak yang Dibentuk oleh Cara Industri Anda Beroperasi",
    intro:
      "Model bisnis menimbulkan persoalan pajak yang berulang. Berikut persoalan yang umum kami temui di setiap sektor, beserta praktik yang menanganinya.",
    ctaTitle: "Diskusikan Persoalan di Sektor Anda.",
    ctaText: "Ceritakan model bisnis Anda dan persoalan pajak yang ditimbulkannya. Kami akan menyarankan titik awal yang terfokus.",
  },
};

export function industriesMetadata(locale: Locale) {
  const c = copy[locale];
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: "/industries", locale });
}

export function IndustriesView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label: t(locale).nav.industries, href: "/industries" }]}
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
      />
      <Section tone="warm">
        <div data-stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {getIndustries(locale).map((industry, i) => (
            <IndustryCard key={industry.slug} industry={industry} index={i} locale={locale} />
          ))}
        </div>
      </Section>
      <CtaPanel locale={locale} title={c.ctaTitle} text={c.ctaText} track="industries_final" />
    </>
  );
}
