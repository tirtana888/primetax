import type { Locale } from "@/lib/i18n";

const defaultProcess: Record<Locale, { title: string; description: string }[]> = {
  en: [
    { title: "Understand", description: "Clarify business context and scope." },
    { title: "Assess", description: "Review facts, documentation, and relevant regulations." },
    { title: "Advise", description: "Evaluate options, risks, and recommendations." },
    { title: "Support", description: "Assist with agreed implementation or ongoing advisory." },
  ],
  id: [
    { title: "Memahami", description: "Memperjelas konteks bisnis dan ruang lingkup." },
    { title: "Menilai", description: "Menelaah fakta, dokumen, dan ketentuan yang relevan." },
    { title: "Memberi Advis", description: "Mengevaluasi opsi, risiko, dan rekomendasi." },
    { title: "Mendampingi", description: "Membantu implementasi yang disepakati atau advisory berkelanjutan." },
  ],
};

export function ProcessSteps({
  locale,
  steps = defaultProcess[locale],
}: {
  locale: Locale;
  steps?: { title: string; description: string }[];
}) {
  return (
    <ol data-stagger className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <li key={step.title} className="relative bg-white p-8">
          <div className="flex items-center gap-4">
            <span className="text-small font-medium tabular-nums text-graphite">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden="true" />
          </div>
          <h3 className="mt-8 text-h3">{step.title}</h3>
          <p className="mt-3 text-graphite">{step.description}</p>
          {i === 0 && <span className="absolute left-0 top-0 h-full w-px bg-gold" aria-hidden="true" />}
        </li>
      ))}
    </ol>
  );
}
