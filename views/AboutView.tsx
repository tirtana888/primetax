import { CredibilityStrip } from "@/components/blocks/CredibilityStrip";
import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { site } from "@/config/site";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaTitle: "About PrimeTax",
    metaDescription:
      "PrimeTax is a strategic Indonesian tax advisory firm for foreign-invested companies, large taxpayers, and businesses navigating complex tax matters.",
    eyebrow: "About PrimeTax",
    title: "Strategic Indonesian Tax Advisory for Complex Businesses",
    intro:
      "PrimeTax helps companies understand tax exposure, navigate regulatory complexity, and make better-informed business decisions through structured tax analysis and strategic advisory.",
    promiseEyebrow: "Our promise",
    essence: "Clarity in complexity.",
    story: [
      "PrimeTax translates complex tax matters into clear analysis, practical recommendations, and structured action plans. Our work starts from the business implications and the decision management needs to make, and then explains the technical tax issues behind it.",
      "We work with foreign-invested companies, multinational groups, large taxpayers, and growing Indonesian companies whose tax questions have become more complex — through cross-border activity, related-party transactions, scrutiny from the tax office, or significant business change.",
    ],
    philosophyEyebrow: "Philosophy",
    philosophy:
      "We believe authority is communicated through precision, clarity, discipline, and integrity — not through decoration or exaggerated claims. The credibility of our advice should come from the quality of the analysis and the transparency of its assumptions.",
    valuesEyebrow: "Values",
    valuesTitle: "What Guides Our Work",
    values: [
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
    ],
    approachEyebrow: "How we work",
    approachTitle: "Our Approach",
    commitmentsEyebrow: "Commitments",
    commitmentsTitle: "What Clients Can Expect",
    commitments: [
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
    ],
  },
  id: {
    metaTitle: "Tentang PrimeTax",
    metaDescription:
      "PrimeTax adalah firma advisory pajak Indonesia yang strategis bagi perusahaan PMA, wajib pajak besar, dan perusahaan yang menghadapi persoalan pajak yang kompleks.",
    eyebrow: "Tentang PrimeTax",
    title: "Advisory Pajak Indonesia yang Strategis untuk Bisnis yang Kompleks",
    intro:
      "PrimeTax membantu perusahaan memahami eksposur pajak, menghadapi kompleksitas regulasi, dan mengambil keputusan bisnis yang lebih tepat melalui analisis pajak yang terstruktur dan advisory strategis.",
    promiseEyebrow: "Janji kami",
    essence: "Kejelasan di tengah kompleksitas.",
    story: [
      "PrimeTax menerjemahkan persoalan pajak yang kompleks menjadi analisis yang jelas, rekomendasi yang praktis, dan rencana tindak yang terstruktur. Pekerjaan kami dimulai dari implikasi bisnis dan keputusan yang perlu diambil manajemen, kemudian menjelaskan persoalan teknis pajak di baliknya.",
      "Kami mendampingi perusahaan PMA, grup multinasional, wajib pajak besar, dan perusahaan Indonesia yang bertumbuh dengan persoalan pajak yang semakin kompleks — karena kegiatan lintas negara, transaksi afiliasi, pengawasan kantor pajak, atau perubahan bisnis yang signifikan.",
    ],
    philosophyEyebrow: "Filosofi",
    philosophy:
      "Kami meyakini bahwa otoritas ditunjukkan melalui presisi, kejelasan, disiplin, dan integritas — bukan melalui hiasan atau klaim yang berlebihan. Kredibilitas advis kami harus lahir dari kualitas analisis dan keterbukaan asumsinya.",
    valuesEyebrow: "Nilai",
    valuesTitle: "Yang Menuntun Pekerjaan Kami",
    values: [
      { title: "Presisi", text: "Analisis yang akurat dan rekomendasi yang disusun dengan cermat." },
      { title: "Keandalan", text: "Layanan profesional yang konsisten, transparan, dan dapat diandalkan." },
      {
        title: "Integritas",
        text: "Praktik yang etis, kerahasiaan, serta kepatuhan pada hukum dan standar profesi yang berlaku.",
      },
      { title: "Penguasaan", text: "Pengetahuan teknis yang kuat dan pemahaman atas konteks bisnis." },
      {
        title: "Kejelasan Eksekutif",
        text: "Menerjemahkan persoalan teknis pajak menjadi keputusan yang dapat dipahami dan dievaluasi manajemen.",
      },
    ],
    approachEyebrow: "Cara kami bekerja",
    approachTitle: "Pendekatan Kami",
    commitmentsEyebrow: "Komitmen",
    commitmentsTitle: "Yang Dapat Diharapkan Klien",
    commitments: [
      {
        title: "Ruang lingkup yang transparan",
        text: "Setiap penugasan dimulai dengan ruang lingkup, asumsi, deliverable, dan linimasa yang disepakati.",
      },
      {
        title: "Kerahasiaan",
        text: "Informasi klien ditangani secara rahasia, dan dokumen hanya dipertukarkan melalui saluran aman yang disepakati.",
      },
      {
        title: "Advis yang realistis",
        text: "Kami menjelaskan risiko dan batasan secara terbuka. Kami tidak menjanjikan penghematan pajak atau hasil sengketa.",
      },
      {
        title: "Perencanaan yang sah",
        text: "Kami mengevaluasi opsi yang memiliki substansi komersial dan sesuai ketentuan yang berlaku.",
      },
    ],
  },
};

export function aboutMetadata(locale: Locale) {
  const c = copy[locale];
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: "/about", locale });
}

export function AboutView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const d = t(locale);

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label: c.eyebrow, href: "/about" }]}
        eyebrow={c.eyebrow}
        title={c.title}
        intro={c.intro}
      >
        {site.companyProfile.href && (
          <ButtonLink href={site.companyProfile.href} variant="secondary" track="company_profile_about" download>
            {d.common.downloadProfile}
          </ButtonLink>
        )}
      </PageHero>

      <CredibilityStrip locale={locale} />

      <Section>
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">{c.promiseEyebrow}</p>
            <p className="mt-6 font-serif text-[2rem] leading-tight md:text-[2.5rem]">{c.essence}</p>
          </div>
          <div className="space-y-6 text-lead text-graphite lg:col-span-7">
            {c.story.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="charcoal">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow text-white/60">{c.philosophyEyebrow}</p>
            <h2 className="mt-4 text-h2 text-white">Quiet Authority</h2>
          </div>
          <p className="text-lead text-white/75 lg:col-span-7">{c.philosophy}</p>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={c.valuesEyebrow} title={c.valuesTitle} />
        <div
          data-stagger
          className="mt-12 grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-5"
        >
          {c.values.map((v, i) => (
            <div key={v.title} className="bg-white p-8">
              <span className="text-small tabular-nums text-graphite">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-[1.1875rem] font-semibold">{v.title}</h3>
              <p className="mt-3 text-small text-graphite">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="warm">
        <SectionHeader eyebrow={c.approachEyebrow} title={c.approachTitle} />
        <div className="mt-12">
          <ProcessSteps locale={locale} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <SectionHeader className="lg:col-span-4" eyebrow={c.commitmentsEyebrow} title={c.commitmentsTitle} />
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {c.commitments.map((item) => (
              <div key={item.title} className="border-t border-border py-6">
                <dt className="font-semibold">{item.title}</dt>
                <dd className="mt-2 text-graphite">{item.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/services" variant="secondary">
            {d.cta.exploreServices}
          </ButtonLink>
          <ButtonLink href="/team" variant="text" arrow>
            {d.cta.meetTeam}
          </ButtonLink>
        </div>
      </Section>

      <CtaPanel locale={locale} track="about_final" />
    </>
  );
}
