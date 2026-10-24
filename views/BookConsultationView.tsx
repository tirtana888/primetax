import { ConsultationForm } from "@/components/blocks/ConsultationForm";
import { PageHero } from "@/components/blocks/PageHero";
import { Section } from "@/components/ui/Section";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaDescription:
      "Request an initial consultation with PrimeTax on corporate tax, PMA and international tax, transfer pricing, SP2DK, or tax audit matters.",
    expect: "What to expect",
    steps: [
      { title: "Share the context", text: "Submit a short description of your business and the matter." },
      { title: "Initial discussion", text: "We arrange a focused conversation to understand the issue and its urgency." },
      { title: "Proposed scope", text: "Where appropriate, we propose a scope, deliverables, timeline, and fees in writing." },
    ],
  },
  id: {
    metaDescription:
      "Ajukan konsultasi awal dengan PrimeTax terkait pajak korporasi, pajak PMA dan internasional, transfer pricing, SP2DK, atau pemeriksaan pajak.",
    expect: "Yang dapat Anda harapkan",
    steps: [
      { title: "Sampaikan konteksnya", text: "Kirim uraian singkat tentang bisnis dan persoalan Anda." },
      { title: "Diskusi awal", text: "Kami mengatur percakapan terfokus untuk memahami persoalan dan tingkat urgensinya." },
      { title: "Usulan ruang lingkup", text: "Bila sesuai, kami mengusulkan ruang lingkup, deliverable, linimasa, dan biaya secara tertulis." },
    ],
  },
};

export function bookMetadata(locale: Locale) {
  return pageMetadata({
    title: t(locale).cta.book,
    description: copy[locale].metaDescription,
    path: "/book-consultation",
    locale,
  });
}

export function BookConsultationView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const d = t(locale);

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label: d.cta.book, href: "/book-consultation" }]}
        eyebrow={d.cta.book}
        title={d.ctaPanel.title}
        intro={d.ctaPanel.text}
      />

      <Section tone="warm">
        <div className="grid gap-12 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <p className="eyebrow">{c.expect}</p>
            <ol className="mt-8">
              {c.steps.map((s, i) => (
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
