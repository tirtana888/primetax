import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InsightCard, ServiceCard } from "@/components/blocks/Cards";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { RiskMatrix } from "@/components/blocks/RiskMatrix";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { site } from "@/config/site";
import { getPublishedInsights } from "@/content/insights";
import { services } from "@/content/services";

const challenges = [
  {
    title: "Cross-border tax complexity",
    text: "Payments to affiliates, treaty conditions, and permanent establishment questions that span more than one jurisdiction.",
  },
  {
    title: "Tax exposure and compliance risk",
    text: "Differences between commercial reporting and tax filings, and positions that rely on interpretation.",
  },
  {
    title: "Transfer pricing requirements",
    text: "Documentation, benchmarking, and evidence for related-party transactions under current rules.",
  },
  {
    title: "Tax audits and disputes",
    text: "SP2DK letters, audits, objections, and appeals that require a consistent strategy from the first response.",
  },
  {
    title: "Regulatory change",
    text: "New regulations and administrative systems that change how existing decisions should be evaluated.",
  },
];

const audiences = [
  {
    title: "Foreign-invested companies (PMA)",
    text: "Owners, directors, and CFOs who need Indonesian tax obligations and cross-border implications explained clearly — locally and to regional headquarters.",
  },
  {
    title: "Multinational companies",
    text: "Indonesian entities of international groups managing related-party transactions, treaty questions, and alignment with global policy.",
  },
  {
    title: "Large taxpayers and corporate groups",
    text: "Companies of significant size and complexity that need governance, risk visibility, and support with audits — whether or not they are formally administered by a Large Taxpayer Office.",
  },
  {
    title: "Growing companies with complex needs",
    text: "Indonesian businesses preparing for expansion, foreign investment, restructuring, or acquisition.",
  },
];

export default function HomePage() {
  const latest = getPublishedInsights().slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-white">
        <HeroLines />
        <div className="container-content relative grid gap-16 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:py-32">
          <div className="lg:col-span-7">
            <p className="eyebrow">Strategic Tax Advisory · Indonesia</p>
            <h1 className="mt-6 text-display font-semibold">
              Complex Tax.
              <br />
              Clear Decisions.
            </h1>
            <p className="mt-8 max-w-xl text-lead text-graphite">{site.statement}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={site.primaryCta.href} arrow track="hero_primary">
                {site.primaryCta.label}
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" track="hero_secondary">
                Explore Our Expertise
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-card border border-border bg-white p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4 border-b border-border pb-5">
                <p className="text-sm font-medium">Tax exposure, structured</p>
                <p className="text-xs text-graphite">Likelihood × impact</p>
              </div>
              <RiskMatrix compact className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      {/* Business challenges */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader
            className="lg:col-span-5"
            eyebrow="The challenge"
            title="Clarity for Complex Tax Matters"
            intro="PrimeTax helps businesses understand tax exposure, evaluate their options, and make informed decisions."
          />
          <ol className="lg:col-span-7">
            {challenges.map((c, i) => (
              <li key={c.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-7 last:border-b">
                <span className="text-small tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[1.1875rem] font-semibold">{c.title}</h3>
                  <p className="mt-2 text-graphite">{c.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Core expertise */}
      <Section tone="warm">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Core expertise"
            title="Four Practices, One Standard of Analysis"
            intro="Each engagement begins with the business question, then works through the technical tax issues that affect it."
          />
          <ButtonLink href="/services" variant="text" arrow className="shrink-0">
            All services
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </Section>

      {/* Who we serve */}
      <Section>
        <SectionHeader eyebrow="Who we serve" title="Built for Executive Decision-Makers" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2">
          {audiences.map((a) => (
            <div key={a.title} className="bg-white p-8 md:p-10">
              <span className="block h-px w-8 bg-gold" aria-hidden="true" />
              <h3 className="mt-6 text-h3">{a.title}</h3>
              <p className="mt-3 text-graphite">{a.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs text-graphite">
          &ldquo;Large taxpayers&rdquo; describes companies of significant size and complexity. It is distinct from
          formal registration at a Large Taxpayer Office (KPP Wajib Pajak Besar), which is an administrative
          classification by the Directorate General of Taxes.
        </p>
      </Section>

      {/* Approach */}
      <Section tone="warm">
        <SectionHeader
          eyebrow="Our approach"
          title="A Disciplined Four-Step Process"
          intro="Scope, assumptions, and deliverables are agreed at the outset, so management knows what to expect at each stage."
        />
        <div className="mt-12">
          <ProcessSteps />
        </div>
      </Section>

      {/* Insights */}
      {latest.length > 0 && (
        <Section>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow="Insights" title="Analysis for Finance Leaders" />
            <Link href="/insights" className="inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium">
              View all insights <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {latest.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} />
            ))}
          </div>
        </Section>
      )}

      <CtaPanel track="home_final" />
    </>
  );
}

/** Subtle geometric line pattern behind the hero. */
function HeroLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full text-border"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="hero-grid" width="96" height="96" patternUnits="userSpaceOnUse">
          <path d="M96 0V96M0 96H96" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <linearGradient id="hero-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0.35" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="1" />
        </linearGradient>
        <mask id="hero-mask">
          <rect width="100%" height="100%" fill="url(#hero-fade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" mask="url(#hero-mask)" opacity="0.6" />
    </svg>
  );
}
