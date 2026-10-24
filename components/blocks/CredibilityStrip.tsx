import { site } from "@/config/site";
import { t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Verified credibility signals from config/site.ts. Renders nothing until
 * at least one stat or the background statement has been filled in. Values
 * are rendered as plain text (no count-up animation) so they never show "0+".
 */
export function CredibilityStrip({ locale, className }: { locale: Locale; className?: string }) {
  const c = t(locale).common;
  const { stats } = site.credibility;
  const background = site.credibility.background[locale];
  if (stats.length === 0 && !background) return null;

  const asOf = [...new Set(stats.map((s) => s.asOf))].join(", ");

  return (
    <section className={cn("border-b border-border bg-white", className)} aria-label={c.figuresLabel}>
      <div className="container-content py-12 md:py-16">
        {stats.length > 0 && (
          <dl
            className={cn(
              "grid gap-px overflow-hidden rounded-card border border-border bg-border",
              stats.length >= 4 ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3"
            )}
          >
            {stats.map((s) => (
              <div key={s.value + s.label.en} className="flex flex-col-reverse bg-white p-6 md:p-8">
                <dt className="mt-2 text-small text-graphite">{s.label[locale]}</dt>
                <dd className="text-h2 font-semibold tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
        {(background || asOf) && (
          <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-12">
            {background && <p className="max-w-3xl text-graphite">{background}</p>}
            {asOf && <p className="shrink-0 text-xs text-graphite">{c.figuresAsOf} {asOf}.</p>}
          </div>
        )}
      </div>
    </section>
  );
}
