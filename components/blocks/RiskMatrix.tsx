import { t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Illustrative likelihood × impact matrix showing how tax exposure is framed
 * for management. It contains no client data and is labelled as illustrative.
 */

// Shading by combined score: 0–1 low, 2 medium, 3–4 high.
function shade(likelihood: number, impact: number) {
  const score = likelihood + impact;
  if (score >= 3) return "bg-charcoal text-white";
  if (score === 2) return "bg-graphite/25";
  return "bg-warm";
}

export function RiskMatrix({ locale, className, compact }: { locale: Locale; className?: string; compact?: boolean }) {
  const c = t(locale).common;
  const examples: Record<string, string> = {
    "2-2": c.riskExamples.intragroup,
    "1-2": c.riskExamples.treaty,
    "2-1": c.riskExamples.reconciliations,
    "0-1": c.riskExamples.timing,
  };

  return (
    <figure className={cn("w-full", className)}>
      <div className="flex gap-3">
        <div className="flex w-5 items-center justify-center">
          <span className="-rotate-90 whitespace-nowrap text-label uppercase text-graphite">{c.likelihood}</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-3 gap-1.5" role="img" aria-label={c.riskMatrixLabel}>
            {[2, 1, 0].map((likelihood) =>
              [0, 1, 2].map((impact) => (
                <div
                  key={`${likelihood}-${impact}`}
                  className={cn(
                    "flex min-w-0 items-end rounded-[3px] p-2 text-[0.625rem] leading-tight sm:p-2.5 sm:text-[0.6875rem]",
                    compact ? "aspect-[4/3]" : "aspect-[5/4] md:p-3 md:text-xs",
                    shade(likelihood, impact)
                  )}
                >
                  {examples[`${likelihood}-${impact}`]}
                </div>
              ))
            )}
          </div>
          <div className="mt-2 grid grid-cols-3 text-center text-[0.6875rem] text-graphite">
            {[c.low, c.medium, c.high].map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <p className="mt-1 text-center text-label uppercase text-graphite">{c.impact}</p>
        </div>
      </div>
      <figcaption className="mt-4 text-xs text-graphite">{c.illustrative}</figcaption>
    </figure>
  );
}
