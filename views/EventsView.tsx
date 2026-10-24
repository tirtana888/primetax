import { CtaPanel } from "@/components/blocks/CtaPanel";
import { EventCard } from "@/components/blocks/EventCard";
import { PageHero } from "@/components/blocks/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { events, splitEvents } from "@/content/events";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    metaDescription: "Webinars, executive briefings, and roundtables by PrimeTax on Indonesian tax developments.",
    title: "Briefings on What Is Changing",
    intro:
      "Webinars, executive briefings, and roundtables on regulatory developments and their practical implications for finance leaders.",
    upcoming: { eyebrow: "Upcoming", title: "Upcoming Sessions" },
    past: { eyebrow: "Archive", title: "Past Sessions" },
    emptyTitle: "No sessions are scheduled at the moment.",
    emptyText:
      "Upcoming webinars and briefings will be listed here. For an in-house briefing for your finance team, please contact us.",
    ctaTitle: "Arrange a Briefing for Your Team.",
    ctaText: "We can prepare a focused session on recent regulatory changes and what they mean for your business.",
  },
  id: {
    metaDescription: "Webinar, executive briefing, dan diskusi meja bundar PrimeTax tentang perkembangan pajak di Indonesia.",
    title: "Briefing tentang Apa yang Sedang Berubah",
    intro:
      "Webinar, executive briefing, dan diskusi meja bundar tentang perkembangan regulasi serta implikasi praktisnya bagi pimpinan keuangan.",
    upcoming: { eyebrow: "Mendatang", title: "Sesi Mendatang" },
    past: { eyebrow: "Arsip", title: "Sesi Sebelumnya" },
    emptyTitle: "Belum ada sesi yang dijadwalkan saat ini.",
    emptyText:
      "Webinar dan briefing mendatang akan ditampilkan di sini. Untuk briefing internal bagi tim keuangan Anda, silakan hubungi kami.",
    ctaTitle: "Atur Briefing untuk Tim Anda.",
    ctaText: "Kami dapat menyiapkan sesi terfokus tentang perubahan regulasi terbaru dan dampaknya bagi bisnis Anda.",
  },
};

export function eventsMetadata(locale: Locale) {
  return {
    ...pageMetadata({ title: t(locale).nav.events, description: copy[locale].metaDescription, path: "/events", locale }),
    // Keep the empty holding page out of search results until events are published.
    ...(events.length === 0 ? { robots: { index: false, follow: true } } : {}),
  };
}

export function EventsView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const d = t(locale);
  const { upcoming, past } = splitEvents();

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[{ label: d.nav.events, href: "/events" }]}
        eyebrow={d.nav.events}
        title={c.title}
        intro={c.intro}
      />

      {upcoming.length > 0 && (
        <Section>
          <SectionHeader eyebrow={c.upcoming.eyebrow} title={c.upcoming.title} />
          <div className="mt-10 border-b border-border">
            {upcoming.map((e) => (
              <EventCard key={e.slug} event={e} locale={locale} />
            ))}
          </div>
        </Section>
      )}

      {past.length > 0 && (
        <Section tone={upcoming.length > 0 ? "warm" : "white"}>
          <SectionHeader eyebrow={c.past.eyebrow} title={c.past.title} />
          <div className="mt-10 border-b border-border">
            {past.map((e) => (
              <EventCard key={e.slug} event={e} past locale={locale} />
            ))}
          </div>
        </Section>
      )}

      {events.length === 0 && (
        <Section tone="warm">
          <div className="mx-auto max-w-2xl rounded-card border border-border bg-white p-10 text-center md:p-14">
            <span className="mx-auto block h-px w-12 bg-gold" aria-hidden="true" />
            <h2 className="mt-8 text-h3">{c.emptyTitle}</h2>
            <p className="mt-4 text-graphite">{c.emptyText}</p>
          </div>
        </Section>
      )}

      <CtaPanel
        locale={locale}
        title={c.ctaTitle}
        text={c.ctaText}
        ctaLabel={d.cta.requestBriefing}
        track="events_final"
      />
    </>
  );
}
