import { IndustryCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { industries } from "@/content/industries";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Industries",
  description:
    "Tax issues PrimeTax addresses across manufacturing, energy and infrastructure, trading, technology, financial services, and consumer businesses in Indonesia.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
        eyebrow="Industries"
        title="Tax Issues Shaped by How Your Industry Operates"
        intro="Business models create recurring tax questions. These are the issues we commonly see in each sector, and the practices that address them."
      />
      <Section tone="warm">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <IndustryCard key={industry.slug} industry={industry} index={i} />
          ))}
        </div>
      </Section>
      <CtaPanel
        title="Discuss the Issues in Your Sector."
        text="Tell us about your business model and the tax questions it raises. We will suggest a focused starting point."
        track="industries_final"
      />
    </>
  );
}
