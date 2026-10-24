import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About PrimeTax",
  description:
    "PrimeTax is a strategic Indonesian tax advisory firm for foreign-invested companies, large taxpayers, and businesses navigating complex tax matters.",
  path: "/about",
});

const values = [
  { title: "Precision", text: "Accurate analysis and carefully structured recommendations." },
  { title: "Reliability", text: "Consistent, transparent, and dependable professional service." },
  {
    title: "Integrity",
    text: "Ethical practice, confidentiality, and respect for applicable laws and professional standards.",
  },
  { title: "Mastery", text: "Strong technical knowledge and understanding of business context." },
  {
    title: "Executive Clarity",
    text: "Translating technical tax issues into decisions that management can understand and evaluate.",
  },
];

const commitments = [
  {
    title: "Transparent scope",
    text: "Every engagement begins with an agreed scope, assumptions, deliverables, and timeline.",
  },
  {
    title: "Confidentiality",
    text: "Client information is handled discreetly, and documents are exchanged only through agreed secure channels.",
  },
  {
    title: "Realistic advice",
    text: "We explain risks and limitations plainly. We do not promise tax savings or dispute outcomes.",
  },
  {
    title: "Lawful planning",
    text: "We evaluate options with genuine commercial substance and within applicable regulations.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About PrimeTax", href: "/about" }]}
        eyebrow="About PrimeTax"
        title="Strategic Indonesian Tax Advisory for Complex Businesses"
        intro="PrimeTax helps companies understand tax exposure, navigate regulatory complexity, and make better-informed business decisions through structured tax analysis and strategic advisory."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Our promise</p>
            <p className="mt-6 font-serif text-[2rem] leading-tight md:text-[2.5rem]">{site.essence}</p>
          </div>
          <div className="space-y-6 text-lead text-graphite lg:col-span-7">
            <p>
              PrimeTax translates complex tax matters into clear analysis, practical recommendations, and structured
              action plans. Our work starts from the business implications and the decision management needs to make,
              and then explains the technical tax issues behind it.
            </p>
            <p>
              We work with foreign-invested companies, multinational groups, large taxpayers, and growing Indonesian
              companies whose tax questions have become more complex — through cross-border activity, related-party
              transactions, scrutiny from the tax office, or significant business change.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow text-white/60">Philosophy</p>
            <h2 className="mt-4 text-h2 text-white">Quiet Authority</h2>
          </div>
          <p className="text-lead text-white/75 lg:col-span-7">
            We believe authority is communicated through precision, clarity, discipline, and integrity — not through
            decoration or exaggerated claims. The credibility of our advice should come from the quality of the
            analysis and the transparency of its assumptions.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Values" title="What Guides Our Work" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {values.map((v, i) => (
            <div key={v.title} className="bg-white p-8">
              <span className="text-small tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-[1.1875rem] font-semibold">{v.title}</h3>
              <p className="mt-3 text-small text-graphite">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="warm">
        <SectionHeader eyebrow="How we work" title="Our Approach" />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader className="lg:col-span-4" eyebrow="Commitments" title="What Clients Can Expect" />
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {commitments.map((c) => (
              <div key={c.title} className="border-t border-border py-6">
                <dt className="font-semibold">{c.title}</dt>
                <dd className="mt-2 text-graphite">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/services" variant="secondary">
            Explore our services
          </ButtonLink>
          <ButtonLink href="/team" variant="text" arrow>
            Meet the team
          </ButtonLink>
        </div>
      </Section>

      <CtaPanel track="about_final" />
    </>
  );
}
