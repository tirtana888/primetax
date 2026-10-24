"use client";

import { useEffect, useState } from "react";
import { InsightCard } from "@/components/blocks/Cards";
import { useLocale } from "@/components/ui/Link";
import { insightTypes, type Insight, type InsightType } from "@/content/insights";
import { t } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type Filter = "All" | InsightType;

/** Insight list with type filter. The selection is mirrored in ?type= so filtered views can be shared. */
export function InsightsBrowser({ insights }: { insights: Insight[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const locale = useLocale();
  const d = t(locale).insight;

  // Only offer types that have at least one published item.
  const available = insightTypes.filter((t) => insights.some((i) => i.type === t));
  const filters: Filter[] = ["All", ...available];

  useEffect(() => {
    const type = new URLSearchParams(window.location.search).get("type");
    const match = available.find((t) => slug(t) === type);
    if (match) setFilter(match);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const select = (f: Filter) => {
    setFilter(f);
    const url = new URL(window.location.href);
    if (f === "All") url.searchParams.delete("type");
    else url.searchParams.set("type", slug(f));
    window.history.replaceState(null, "", url);
  };

  const shown = filter === "All" ? insights : insights.filter((i) => i.type === filter);
  const count = (f: Filter) => (f === "All" ? insights.length : insights.filter((i) => i.type === f).length);

  return (
    <>
      <div role="group" aria-label={d.filterLabel} className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
        <div className="flex min-w-max gap-2 border-b border-border">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => select(f)}
              className={cn(
                "relative -mb-px whitespace-nowrap border-b px-1 pb-4 mr-6 text-[0.9375rem] transition-colors",
                filter === f ? "border-gold text-charcoal" : "border-transparent text-graphite hover:text-charcoal"
              )}
            >
              {f === "All" ? d.all : d.types[f]}
              <span className="ml-2 text-xs tabular-nums text-graphite">{count(f)}</span>
            </button>
          ))}
        </div>
      </div>

      <div data-stagger className="mt-12 grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((insight) => (
          <InsightCard key={insight.slug} insight={insight} locale={locale} />
        ))}
      </div>
    </>
  );
}

function slug(type: string) {
  return type.toLowerCase().replace(/\s+/g, "-");
}
