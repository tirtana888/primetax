"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "@/components/ui/Link";
import type { Deadline, DeadlineCategory } from "@/content/tax-calendar";
import { localeMeta, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const labels = {
  en: {
    upcoming: "Next 12 months",
    past: "Past 12 months",
    period: "Period",
    today: "Today",
    moved: (d: string) => `Moved from ${d} (weekend or public holiday)`,
    categories: { pph: "Income tax", ppn: "VAT", annual: "Annual return", tp: "Transfer pricing" },
    filter: "Filter by type",
    all: "All",
    next: "Upcoming deadlines",
    viewCalendar: "View full tax calendar",
  },
  id: {
    upcoming: "12 bulan ke depan",
    past: "12 bulan terakhir",
    period: "Masa",
    today: "Hari ini",
    moved: (d: string) => `Bergeser dari ${d} (akhir pekan atau hari libur)`,
    categories: { pph: "PPh", ppn: "PPN", annual: "SPT Tahunan", tp: "Transfer pricing" },
    filter: "Saring berdasarkan jenis",
    all: "Semua",
    next: "Tenggat terdekat",
    viewCalendar: "Lihat kalender pajak lengkap",
  },
};

const categoryDot: Record<DeadlineCategory, string> = {
  pph: "bg-charcoal",
  ppn: "bg-graphite",
  annual: "bg-gold",
  tp: "border border-charcoal bg-white",
};

const todayIso = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const shiftMonths = (isoDate: string, months: number) => {
  const d = new Date(`${isoDate}T00:00:00Z`);
  d.setUTCMonth(d.getUTCMonth() + months);
  return d.toISOString().slice(0, 10);
};

/**
 * `today` is the build date during prerendering and the visitor's date after
 * hydration, so the 12-month windows stay current between rebuilds.
 */
function useToday(buildDate: string) {
  const [today, setToday] = useState(buildDate);
  useEffect(() => setToday(todayIso()), []);
  return today;
}

function fmt(isoDate: string, locale: Locale, opts: Intl.DateTimeFormatOptions) {
  return new Date(`${isoDate}T00:00:00`).toLocaleDateString(localeMeta[locale].dateLocale, opts);
}

export function TaxCalendar({
  deadlines,
  buildDate,
  locale,
}: {
  deadlines: Deadline[];
  buildDate: string;
  locale: Locale;
}) {
  const l = labels[locale];
  const today = useToday(buildDate);
  const [view, setView] = useState<"upcoming" | "past">("upcoming");
  const [category, setCategory] = useState<DeadlineCategory | "all">("all");

  const items = useMemo(() => {
    const inWindow =
      view === "upcoming"
        ? deadlines.filter((d) => d.date >= today && d.date <= shiftMonths(today, 12))
        : deadlines.filter((d) => d.date < today && d.date >= shiftMonths(today, -12)).reverse();
    return category === "all" ? inWindow : inWindow.filter((d) => d.category === category);
  }, [deadlines, today, view, category]);

  const months = useMemo(() => {
    const groups = new Map<string, Deadline[]>();
    for (const d of items) {
      const key = d.date.slice(0, 7);
      groups.set(key, [...(groups.get(key) ?? []), d]);
    }
    return [...groups.entries()];
  }, [items]);

  return (
    <div>
      <div className="flex flex-col gap-6 border-b border-border md:flex-row md:items-end md:justify-between">
        <div role="tablist" className="flex gap-6">
          {(["upcoming", "past"] as const).map((v) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={cn(
                "-mb-px border-b pb-4 text-[0.9375rem] transition-colors",
                view === v ? "border-gold text-charcoal" : "border-transparent text-graphite hover:text-charcoal"
              )}
            >
              {l[v]}
            </button>
          ))}
        </div>
        <div role="group" aria-label={l.filter} className="flex flex-wrap gap-2 pb-4">
          {(["all", "pph", "ppn", "annual", "tp"] as const).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "inline-flex h-8 items-center gap-2 rounded-button border px-3 text-xs transition-colors",
                category === c ? "border-charcoal bg-charcoal text-white" : "border-border hover:border-charcoal"
              )}
            >
              {c !== "all" && <span className={cn("h-2 w-2 rounded-full", categoryDot[c])} aria-hidden="true" />}
              {c === "all" ? l.all : l.categories[c]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        {months.map(([month, list]) => (
          <section key={month} className="grid gap-4 border-b border-border py-8 md:grid-cols-12">
            <h2 className="text-h3 md:col-span-3">
              {fmt(`${month}-01`, locale, { month: "long", year: "numeric" })}
            </h2>
            <ol className="space-y-5 md:col-span-9">
              {list.map((d) => {
                const isToday = d.date === today;
                return (
                  <li key={d.id} className={cn("grid grid-cols-[4.5rem_1fr] gap-4", view === "past" && "opacity-70")}>
                    <div>
                      <span className="block text-h3 font-semibold leading-none tabular-nums">
                        {fmt(d.date, locale, { day: "2-digit" })}
                      </span>
                      <span className="mt-1 block text-xs text-graphite">
                        {isToday ? l.today : fmt(d.date, locale, { weekday: "short" })}
                      </span>
                    </div>
                    <div>
                      <p className="flex items-center gap-2 text-label font-medium uppercase text-graphite">
                        <span className={cn("h-2 w-2 rounded-full", categoryDot[d.category])} aria-hidden="true" />
                        {l.categories[d.category]}
                        <span className="text-gold">·</span>
                        {l.period} {d.period[locale]}
                      </p>
                      <p className="mt-1.5 font-medium">{d.title[locale]}</p>
                      {d.dueDate !== d.date && (
                        <p className="mt-1 text-xs text-graphite">
                          {l.moved(fmt(d.dueDate, locale, { day: "numeric", month: "long" }))}
                        </p>
                      )}
                      {d.note && <p className="mt-1 text-xs text-graphite">{d.note[locale]}</p>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}

/** Compact list of the next few deadlines, for the homepage. */
export function NextDeadlines({
  deadlines,
  buildDate,
  locale,
  count = 4,
}: {
  deadlines: Deadline[];
  buildDate: string;
  locale: Locale;
  count?: number;
}) {
  const l = labels[locale];
  const today = useToday(buildDate);
  const next = deadlines.filter((d) => d.date >= today).slice(0, count);

  return (
    <div>
      <ol data-stagger className="grid gap-px overflow-hidden rounded-card border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {next.map((d) => (
          <li key={d.id} className="flex flex-col bg-white p-6">
            <span className="text-h2 font-semibold leading-none tabular-nums">{fmt(d.date, locale, { day: "2-digit" })}</span>
            <span className="mt-2 text-label uppercase text-graphite">
              {fmt(d.date, locale, { month: "short", year: "numeric" })}
            </span>
            <p className="mt-6 flex items-center gap-2 text-label font-medium uppercase text-graphite">
              <span className={cn("h-2 w-2 rounded-full", categoryDot[d.category])} aria-hidden="true" />
              {l.categories[d.category]}
            </p>
            <p className="mt-2 text-small">{d.title[locale]}</p>
            <p className="mt-auto pt-4 text-xs text-graphite">
              {l.period} {d.period[locale]}
            </p>
          </li>
        ))}
      </ol>
      <Link href="/tax-calendar" className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium">
        {l.viewCalendar} <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
      </Link>
    </div>
  );
}
