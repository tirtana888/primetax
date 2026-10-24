/**
 * Events & Briefings (webinars, executive briefings, roundtables).
 * The /events page, footer link, and homepage block appear only once this
 * list has entries. Upcoming vs. past is decided at build time, so rebuild
 * after an event date passes. Name partners only with their written consent.
 */
export interface PrimeTaxEvent {
  slug: string;
  title: string;
  format: "Webinar" | "Executive Briefing" | "Seminar" | "Roundtable" | "Training";
  date: string; // YYYY-MM-DD
  time?: string; // e.g. "14:00 – 15:30 WIB"
  location: string; // e.g. "Online (Zoom)" or venue name
  summary: string;
  partner?: string;
  registrationUrl?: string;
  recordingUrl?: string;
}

export const events: PrimeTaxEvent[] = [];

export function splitEvents(today = new Date().toISOString().slice(0, 10)) {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return {
    upcoming: sorted.filter((e) => e.date >= today),
    past: sorted.filter((e) => e.date < today).reverse(),
  };
}
