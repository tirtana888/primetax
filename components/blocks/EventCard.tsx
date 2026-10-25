import { ArrowUpRight } from "lucide-react";
import type { PrimeTaxEvent } from "@/content/events";
import { localeMeta, t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function EventCard({ event, past, locale }: { event: PrimeTaxEvent; past?: boolean; locale: Locale }) {
  const d = t(locale).events;
  const dateLocale = localeMeta[locale].dateLocale;
  const date = new Date(`${event.date}T00:00:00`);
  const link = past ? event.recordingUrl : event.registrationUrl;

  return (
    <article className={cn("grid grid-cols-[4.5rem_1fr] gap-6 border-t border-border py-8 md:grid-cols-[6rem_1fr_auto] md:items-start", past && "text-graphite")}>
      <time dateTime={event.date} className="flex flex-col">
        <span className="text-h2 font-semibold leading-none tabular-nums text-charcoal">
          {date.toLocaleDateString(dateLocale, { day: "2-digit" })}
        </span>
        <span className="mt-2 text-label uppercase text-graphite">
          {date.toLocaleDateString(dateLocale, { month: "short", year: "numeric" })}
        </span>
      </time>
      <div>
        <p className="text-label font-medium uppercase text-graphite">
          {event.format}
          {event.partner && (
            <>
              <span className="mx-1.5 text-gold">·</span>{d.with} {event.partner}
            </>
          )}
        </p>
        <h3 className="mt-3 text-[1.25rem] font-semibold leading-snug text-charcoal">{event.title[locale]}</h3>
        <p className="mt-2 max-w-2xl text-small">{event.summary[locale]}</p>
        <p className="mt-3 text-small text-graphite">
          {[event.time, event.location[locale]].filter(Boolean).join(" · ")}
        </p>
      </div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-2 inline-flex items-center gap-2 text-sm font-medium text-charcoal md:col-start-3"
        >
          {past ? d.recording : d.register}
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
        </a>
      )}
    </article>
  );
}
