export interface ProcessStepItem {
  title: string;
  duration?: string;
  description: string;
}

/**
 * Komponen Stepper / Timeline Proses sesuai §6.8:
 * Lingkaran nomor 40px (bg navy-900, angka putih) dihubungkan garis 2px navy-200;
 * horizontal di desktop, vertikal di mobile.
 */
export function ProcessTimeline({ steps }: { steps: ProcessStepItem[] }) {
  return (
    <ol className="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-8">
      {steps.map((step, idx) => {
        const isLast = idx === steps.length - 1;
        return (
          <li key={idx} className="relative flex gap-5 pb-10 last:pb-0 lg:flex-col lg:gap-0 lg:pb-0">
            {!isLast && (
              <span
                aria-hidden="true"
                className="absolute top-10 bottom-0 left-5 w-0.5 bg-navy-200 lg:top-5 lg:right-[-2rem] lg:bottom-auto lg:left-12 lg:h-0.5 lg:w-auto"
              />
            )}
            <span className="relative z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-body font-bold text-white ring-4 ring-ink-100 tabular">
              {idx + 1}
            </span>
            <div className="lg:mt-6 lg:pr-2">
              {step.duration && (
                <span className="inline-block rounded-sm bg-emerald-50 px-2.5 py-1 font-body text-caption font-semibold text-emerald-700 tabular">
                  {step.duration}
                </span>
              )}
              <h3 className="mt-3 font-heading text-h5 font-semibold text-navy-900">
                {step.title}
              </h3>
              <p className="mt-2 text-body-sm text-ink-600">{step.description}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
