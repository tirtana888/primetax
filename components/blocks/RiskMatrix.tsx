import { cn } from "@/lib/utils";

/**
 * Illustrative likelihood × impact matrix showing how tax exposure is framed
 * for management. It contains no client data and is labelled as illustrative.
 */
const levels = ["Low", "Medium", "High"] as const;

// Shading by combined score: 0–1 low, 2 medium, 3–4 high.
function shade(likelihood: number, impact: number) {
  const score = likelihood + impact;
  if (score >= 3) return "bg-charcoal text-white";
  if (score === 2) return "bg-graphite/25";
  return "bg-warm";
}

const examples: Record<string, string> = {
  "2-2": "Intragroup charges",
  "1-2": "Treaty documents",
  "2-1": "Reconciliations",
  "0-1": "Filing timing",
};

export function RiskMatrix({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <figure className={cn("w-full", className)}>
      <div className="flex gap-3">
        <div className="flex w-5 items-center justify-center">
          <span className="-rotate-90 whitespace-nowrap text-label uppercase text-graphite">Likelihood</span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-3 gap-1.5" role="img" aria-label="Illustrative tax risk matrix of likelihood against impact">
            {[2, 1, 0].map((likelihood) =>
              [0, 1, 2].map((impact) => {
                const label = examples[`${likelihood}-${impact}`];
                return (
                  <div
                    key={`${likelihood}-${impact}`}
                    className={cn(
                      "flex min-w-0 items-end rounded-[3px] p-2 text-[0.625rem] leading-tight sm:p-2.5 sm:text-[0.6875rem]",
                      compact ? "aspect-[4/3]" : "aspect-[5/4] md:p-3 md:text-xs",
                      shade(likelihood, impact)
                    )}
                  >
                    {label}
                  </div>
                );
              })
            )}
          </div>
          <div className="mt-2 grid grid-cols-3 text-center text-[0.6875rem] text-graphite">
            {levels.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <p className="mt-1 text-center text-label uppercase text-graphite">Impact</p>
        </div>
      </div>
      <figcaption className="mt-4 text-xs text-graphite">
        Illustrative framework. Actual ratings depend on the facts of each engagement.
      </figcaption>
    </figure>
  );
}
