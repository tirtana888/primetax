import { ConsultationForm } from "@/components/blocks/ConsultationForm";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a Consultation",
  description:
    "Request an initial consultation with PrimeTax on corporate tax, PMA and international tax, transfer pricing, SP2DK, or tax audit matters.",
  path: "/book-consultation",
});

const steps = [
  { title: "Share the context", text: "Submit a short description of your business and the matter." },
  { title: "Initial discussion", text: "We arrange a focused conversation to understand the issue and its urgency." },
  { title: "Proposed scope", text: "Where appropriate, we propose a scope, deliverables, timeline, and fees in writing." },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Book a Consultation", href: "/book-consultation" }]}
        eyebrow="Book a Consultation"
        title="Let's Discuss Your Tax Priorities."
        intro="Start with a focused discussion of your business context, tax concerns, and advisory needs."
      />

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <p className="eyebrow">What to expect</p>
            <ol className="mt-8">
              {steps.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[2.5rem_1fr] border-t border-border py-6">
                  <span className="text-small tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="text-[1.0625rem] font-semibold">{s.title}</h2>
                    <p className="mt-1 text-small text-graphite">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
          <div className="lg:col-span-8">
            <ConsultationForm source="book_consultation" />
          </div>
        </div>
      </Section>
    </>
  );
}
