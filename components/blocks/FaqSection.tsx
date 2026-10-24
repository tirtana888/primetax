import { JsonLd } from "@/components/layout/JsonLd";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { faqSchema } from "@/lib/schema";

export function FaqSection({
  items,
  title = "Frequently Asked Questions",
  tone = "white",
}: {
  items: { question: string; answer: string }[];
  title?: string;
  tone?: "white" | "warm";
}) {
  if (items.length === 0) return null;
  return (
    <Section tone={tone} bordered={tone === "white"}>
      <JsonLd data={faqSchema(items)} />
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-h2">{title}</h2>
        </div>
        <div className="lg:col-span-8">
          <Accordion items={items} />
        </div>
      </div>
    </Section>
  );
}
