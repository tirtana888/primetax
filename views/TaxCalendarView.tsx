import { CtaPanel } from "@/components/blocks/CtaPanel";
import { PageHero } from "@/components/blocks/PageHero";
import { TaxCalendar } from "@/components/blocks/TaxCalendar";
import { Section } from "@/components/ui/Section";
import { getDeadlines } from "@/content/tax-calendar";
import type { Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

const copy = {
  en: {
    label: "Tax Calendar",
    metaTitle: "Indonesian Tax Calendar — Payment and Filing Deadlines",
    metaDescription:
      "Indonesian tax deadlines for the past and coming 12 months: monthly PPh payments and returns, VAT returns, annual returns, and transfer pricing documentation.",
    title: "Indonesian Tax Calendar",
    intro:
      "Key payment and filing deadlines for companies, for the past and coming 12 months. Deadlines that fall on a weekend or fixed public holiday are shown on the next working day.",
    note: "General reference based on PMK-81/2024 and PMK-172/2023. Moving public holidays, collective leave (cuti bersama), and special relaxations announced by the Directorate General of Taxes may change individual dates — always confirm against official DJP announcements. Annual deadlines assume a calendar financial year.",
    ctaTitle: "Need Help Preparing for a Deadline?",
    ctaText: "From annual returns to transfer pricing documentation, we can review your readiness before the due date.",
  },
  id: {
    label: "Kalender Pajak",
    metaTitle: "Kalender Pajak Indonesia — Batas Setor dan Lapor",
    metaDescription:
      "Tenggat pajak Indonesia 12 bulan terakhir dan 12 bulan ke depan: setor dan lapor PPh Masa, SPT Masa PPN, SPT Tahunan, dan dokumentasi transfer pricing.",
    title: "Kalender Pajak Indonesia",
    intro:
      "Tenggat setor dan lapor utama bagi perusahaan, untuk 12 bulan terakhir dan 12 bulan ke depan. Tenggat yang jatuh pada akhir pekan atau hari libur nasional tetap ditampilkan pada hari kerja berikutnya.",
    note: "Rujukan umum berdasarkan PMK-81/2024 dan PMK-172/2023. Hari libur yang tanggalnya berubah setiap tahun, cuti bersama, dan relaksasi khusus yang diumumkan Direktorat Jenderal Pajak dapat mengubah tanggal tertentu — selalu pastikan dengan pengumuman resmi DJP. Tenggat tahunan mengasumsikan tahun buku kalender.",
    ctaTitle: "Butuh Bantuan Menyiapkan Tenggat?",
    ctaText: "Dari SPT Tahunan hingga dokumentasi transfer pricing, kami dapat meninjau kesiapan Anda sebelum jatuh tempo.",
  },
};

export function taxCalendarMetadata(locale: Locale) {
  const c = copy[locale];
  return pageMetadata({ title: c.metaTitle, description: c.metaDescription, path: "/tax-calendar", locale });
}

/** Wide range so the client-side 12-month windows stay valid between rebuilds. */
export function calendarRange() {
  const year = new Date().getFullYear();
  return {
    deadlines: getDeadlines(`${year - 2}-01-01`, `${year + 2}-12-31`),
    buildDate: new Date().toISOString().slice(0, 10),
  };
}

export function TaxCalendarView({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const { deadlines, buildDate } = calendarRange();

  return (
    <>
      <PageHero
        locale={locale}
        breadcrumbs={[
          { label: "Insights", href: "/insights" },
          { label: c.label, href: "/tax-calendar" },
        ]}
        eyebrow={c.label}
        title={c.title}
        intro={c.intro}
      />
      <Section>
        <TaxCalendar deadlines={deadlines} buildDate={buildDate} locale={locale} />
        <p className="mt-10 max-w-3xl rounded-card border border-border p-6 text-xs leading-relaxed text-graphite">
          {c.note}
        </p>
      </Section>
      <CtaPanel locale={locale} title={c.ctaTitle} text={c.ctaText} track="tax_calendar_final" />
    </>
  );
}
