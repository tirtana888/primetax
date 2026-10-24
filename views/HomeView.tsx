import { ArrowRight } from "lucide-react";
import { InsightCard, ServiceCard } from "@/components/blocks/Cards";
import { CredibilityStrip } from "@/components/blocks/CredibilityStrip";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { EventCard } from "@/components/blocks/EventCard";
import { HeroVideo } from "@/components/blocks/HeroVideo";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { ButtonLink } from "@/components/ui/Button";
import { Link } from "@/components/ui/Link";
import { Section, SectionHeader } from "@/components/ui/Section";
import { site } from "@/config/site";
import { splitEvents } from "@/content/events";
import { getPublishedInsights } from "@/content/insights";
import { getServices } from "@/content/services";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaTitle: "PrimeTax — Complex Tax. Clear Decisions. | Strategic Tax Advisory Indonesia",
    metaDescription:
      "Strategic Indonesian tax advisory for foreign-invested companies, large taxpayers, and businesses navigating complex tax matters.",
    eyebrow: "Strategic Tax Advisory · Indonesia",
    challenge: {
      eyebrow: "The challenge",
      title: "Clarity for Complex Tax Matters",
      intro: "PrimeTax helps businesses understand tax exposure, evaluate their options, and make informed decisions.",
      items: [
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
      ],
    },
    expertise: {
      eyebrow: "Core expertise",
      title: "Four Practices, One Standard of Analysis",
      intro: "Each engagement begins with the business question, then works through the technical tax issues that affect it.",
    },
    serve: {
      eyebrow: "Who we serve",
      title: "Built for Executive Decision-Makers",
      items: [
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
      ],
      note: "“Large taxpayers” describes companies of significant size and complexity. It is distinct from formal registration at a Large Taxpayer Office (KPP Wajib Pajak Besar), which is an administrative classification by the Directorate General of Taxes.",
    },
    approach: {
      eyebrow: "Our approach",
      title: "A Disciplined Four-Step Process",
      intro: "Scope, assumptions, and deliverables are agreed at the outset, so management knows what to expect at each stage.",
    },
    insights: { eyebrow: "Insights", title: "Analysis for Finance Leaders" },
    events: { eyebrow: "Events & Briefings", title: "Upcoming Sessions" },
  },
  id: {
    metaTitle: "PrimeTax — Complex Tax. Clear Decisions. | Konsultan Pajak Strategis Indonesia",
    metaDescription:
      "Advisory pajak Indonesia yang strategis bagi perusahaan PMA, wajib pajak besar, dan perusahaan yang menghadapi persoalan pajak yang kompleks.",
    eyebrow: "Advisory Pajak Strategis · Indonesia",
    challenge: {
      eyebrow: "Tantangan",
      title: "Kejelasan untuk Persoalan Pajak yang Kompleks",
      intro:
        "PrimeTax membantu perusahaan memahami eksposur pajak, mengevaluasi opsi penanganan, dan mengambil keputusan berdasarkan analisis yang terstruktur.",
      items: [
        {
          title: "Kompleksitas pajak lintas negara",
          text: "Pembayaran ke afiliasi, persyaratan P3B, dan persoalan Bentuk Usaha Tetap yang melibatkan lebih dari satu yurisdiksi.",
        },
        {
          title: "Eksposur pajak dan risiko kepatuhan",
          text: "Perbedaan antara laporan komersial dan SPT, serta posisi yang bergantung pada interpretasi.",
        },
        {
          title: "Kewajiban transfer pricing",
          text: "Dokumentasi, benchmarking, dan bukti atas transaksi afiliasi berdasarkan ketentuan yang berlaku.",
        },
        {
          title: "Pemeriksaan dan sengketa pajak",
          text: "SP2DK, pemeriksaan, keberatan, dan banding yang membutuhkan strategi konsisten sejak tanggapan pertama.",
        },
        {
          title: "Perubahan regulasi",
          text: "Ketentuan dan sistem administrasi baru yang mengubah cara keputusan yang ada perlu dievaluasi.",
        },
      ],
    },
    expertise: {
      eyebrow: "Keahlian utama",
      title: "Empat Praktik, Satu Standar Analisis",
      intro: "Setiap penugasan dimulai dari pertanyaan bisnis, lalu menelaah persoalan teknis pajak yang memengaruhinya.",
    },
    serve: {
      eyebrow: "Klien kami",
      title: "Dirancang untuk Pengambil Keputusan Eksekutif",
      items: [
        {
          title: "Perusahaan Penanaman Modal Asing (PMA)",
          text: "Pemilik, direksi, dan CFO yang membutuhkan penjelasan jelas atas kewajiban pajak Indonesia dan implikasi lintas negara — bagi manajemen lokal maupun kantor pusat regional.",
        },
        {
          title: "Perusahaan multinasional",
          text: "Entitas Indonesia dari grup internasional yang mengelola transaksi afiliasi, persoalan P3B, dan keselarasan dengan kebijakan global.",
        },
        {
          title: "Wajib pajak besar dan grup korporasi",
          text: "Perusahaan dengan skala dan kompleksitas signifikan yang membutuhkan tata kelola, visibilitas risiko, dan pendampingan pemeriksaan — baik terdaftar di KPP Wajib Pajak Besar maupun tidak.",
        },
        {
          title: "Perusahaan bertumbuh dengan kebutuhan kompleks",
          text: "Perusahaan Indonesia yang bersiap untuk ekspansi, investasi asing, restrukturisasi, atau akuisisi.",
        },
      ],
      note: "“Wajib pajak besar” menggambarkan perusahaan dengan skala dan kompleksitas yang signifikan, dan berbeda dari pendaftaran formal di KPP Wajib Pajak Besar yang merupakan klasifikasi administratif oleh Direktorat Jenderal Pajak.",
    },
    approach: {
      eyebrow: "Pendekatan kami",
      title: "Proses Empat Tahap yang Disiplin",
      intro: "Ruang lingkup, asumsi, dan deliverable disepakati sejak awal, sehingga manajemen mengetahui apa yang diharapkan di setiap tahap.",
    },
    insights: { eyebrow: "Insights", title: "Analisis untuk Pimpinan Keuangan" },
    events: { eyebrow: "Acara & Briefing", title: "Sesi Mendatang" },
  },
};

export function homeMetadata(locale: Locale) {
  const c = copy[locale];
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: "/", locale, absoluteTitle: true });
}

export function HomeView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const d = t(locale);
  const latest = getPublishedInsights(locale).slice(0, 3);
  const { upcoming } = splitEvents();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-charcoal text-white">
        <HeroVideo />
        <div className="container-content relative flex min-h-[calc(100svh-72px)] max-h-[860px] flex-col justify-center py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="eyebrow text-white/75">{c.eyebrow}</p>
            <h1 className="mt-6 text-display font-semibold text-white">
              Complex Tax.
              <br />
              Clear Decisions.
            </h1>
            <p className="mt-8 max-w-xl text-lead text-white/80">{d.statement}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href={site.primaryCta.href} variant="inverse" arrow track="hero_primary">
                {d.cta.book}
              </ButtonLink>
              <ButtonLink href="/services" variant="outlineInverse" track="hero_secondary">
                {d.cta.explore}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <CredibilityStrip locale={locale} />

      {/* Business challenges */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader
            className="lg:col-span-5"
            eyebrow={c.challenge.eyebrow}
            title={c.challenge.title}
            intro={c.challenge.intro}
          />
          <ol className="lg:col-span-7">
            {c.challenge.items.map((item, i) => (
              <li key={item.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-7 last:border-b">
                <span className="text-small tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[1.1875rem] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-graphite">{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Core expertise */}
      <Section tone="warm">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow={c.expertise.eyebrow} title={c.expertise.title} intro={c.expertise.intro} />
          <ButtonLink href="/services" variant="text" arrow className="shrink-0">
            {d.cta.allServices}
          </ButtonLink>
        </div>
        <div data-stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {getServices(locale).map((s) => (
            <ServiceCard key={s.slug} service={s} locale={locale} />
          ))}
        </div>
      </Section>

      {/* Who we serve */}
      <Section>
        <SectionHeader eyebrow={c.serve.eyebrow} title={c.serve.title} />
        <div
          data-stagger
          className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border md:grid-cols-2"
        >
          {c.serve.items.map((a) => (
            <div key={a.title} className="bg-white p-8 md:p-10">
              <span className="block h-px w-8 bg-gold" aria-hidden="true" />
              <h3 className="mt-6 text-h3">{a.title}</h3>
              <p className="mt-3 text-graphite">{a.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-xs text-graphite">{c.serve.note}</p>
      </Section>

      {/* Approach */}
      <Section tone="warm">
        <SectionHeader eyebrow={c.approach.eyebrow} title={c.approach.title} intro={c.approach.intro} />
        <div className="mt-12">
          <ProcessSteps locale={locale} />
        </div>
      </Section>

      {/* Insights */}
      {latest.length > 0 && (
        <Section>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow={c.insights.eyebrow} title={c.insights.title} />
            <Link href="/insights" className="inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium">
              {d.cta.allInsights} <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <div data-stagger className="mt-12 grid gap-10 md:grid-cols-3">
            {latest.map((insight) => (
              <InsightCard key={insight.slug} insight={insight} locale={locale} />
            ))}
          </div>
        </Section>
      )}

      {/* Upcoming briefings — shown only when events are scheduled */}
      {upcoming.length > 0 && (
        <Section tone="warm">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader eyebrow={c.events.eyebrow} title={c.events.title} />
            <Link href="/events" className="inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium">
              {d.cta.allEvents} <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 border-b border-border">
            {upcoming.slice(0, 2).map((e) => (
              <EventCard key={e.slug} event={e} locale={locale} />
            ))}
          </div>
        </Section>
      )}

      <CtaPanel locale={locale} track="home_final" />
    </>
  );
}
