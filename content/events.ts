/**
 * Events & Briefings (webinars, executive briefings, roundtables).
 *
 * Only events with status "confirmed" are published. "proposed" entries are a
 * draft schedule for PrimeTax to approve: set status to "confirmed" (and add a
 * registrationUrl) only once the session will genuinely take place.
 *
 * The /events page, footer link, and homepage block appear once at least one
 * event is confirmed. Upcoming vs. past is decided at build time, so rebuild
 * after an event date passes. Name partners only with their written consent.
 * Never add past events that did not happen.
 */
type Localized = { en: string; id: string };

export interface PrimeTaxEvent {
  slug: string;
  status: "proposed" | "confirmed";
  title: Localized;
  format: "Webinar" | "Executive Briefing" | "Seminar" | "Roundtable" | "Training";
  date: string; // YYYY-MM-DD
  time?: string; // e.g. "14:00 – 15:30 WIB"
  location: Localized;
  summary: Localized;
  partner?: string;
  registrationUrl?: string;
  recordingUrl?: string;
}

const online = { en: "Online (Zoom)", id: "Online (Zoom)" };

export const allEvents: PrimeTaxEvent[] = [
  {
    slug: "year-end-tax-review-2026",
    status: "proposed",
    format: "Webinar",
    date: "2026-11-26",
    time: "14:00 – 15:30 WIB",
    location: online,
    title: {
      en: "Year-End Tax Review: What to Check Before Closing 2026",
      id: "Review Pajak Akhir Tahun: Hal yang Perlu Diperiksa Sebelum Tutup Buku 2026",
    },
    summary: {
      en: "Reconciliations, accruals, withholding, and documentation to put in order before the books close.",
      id: "Rekonsiliasi, akrual, PPh potong, dan dokumentasi yang perlu dirapikan sebelum tutup buku.",
    },
  },
  {
    slug: "annual-corporate-return-coretax-2027",
    status: "proposed",
    format: "Webinar",
    date: "2027-02-25",
    time: "14:00 – 15:30 WIB",
    location: online,
    title: {
      en: "Corporate Annual Return 2026 in Coretax: Readiness Briefing",
      id: "SPT Tahunan PPh Badan 2026 di Coretax: Briefing Kesiapan",
    },
    summary: {
      en: "Fiscal reconciliation, common corrections, and attachments to prepare ahead of the 30 April deadline.",
      id: "Rekonsiliasi fiskal, koreksi yang sering muncul, dan lampiran yang perlu disiapkan sebelum tenggat 30 April.",
    },
  },
  {
    slug: "transfer-pricing-documentation-2027",
    status: "proposed",
    format: "Webinar",
    date: "2027-03-25",
    time: "14:00 – 15:30 WIB",
    location: online,
    title: {
      en: "Transfer Pricing Documentation for Tax Year 2026: A Practical Checklist",
      id: "Dokumentasi Transfer Pricing Tahun Pajak 2026: Daftar Periksa Praktis",
    },
    summary: {
      en: "Master File and Local File obligations, benchmarking updates, and consistency checks under PMK-172/2023.",
      id: "Kewajiban Dokumen Induk dan Dokumen Lokal, pembaruan benchmarking, dan uji konsistensi berdasarkan PMK-172/2023.",
    },
  },
  {
    slug: "sp2dk-audit-readiness-2027",
    status: "proposed",
    format: "Executive Briefing",
    date: "2027-05-27",
    time: "09:30 – 11:30 WIB",
    location: online,
    title: {
      en: "SP2DK and Tax Audits: Preparing a Consistent Response",
      id: "SP2DK dan Pemeriksaan Pajak: Menyiapkan Tanggapan yang Konsisten",
    },
    summary: {
      en: "How data-driven supervision works in the Coretax era and how to structure responses from the first letter onward.",
      id: "Cara kerja pengawasan berbasis data di era Coretax dan cara menyusun tanggapan sejak surat pertama.",
    },
  },
  {
    slug: "mid-year-update-pma-2027",
    status: "proposed",
    format: "Webinar",
    date: "2027-07-29",
    time: "14:00 – 15:30 WIB",
    location: online,
    title: {
      en: "Mid-Year Regulatory Update for PMA Companies",
      id: "Update Regulasi Tengah Tahun untuk Perusahaan PMA",
    },
    summary: {
      en: "New regulations in the first half of the year and their practical implications for foreign-invested companies.",
      id: "Regulasi baru semester pertama dan implikasi praktisnya bagi perusahaan penanaman modal asing.",
    },
  },
  {
    slug: "tax-governance-roundtable-2027",
    status: "proposed",
    format: "Roundtable",
    date: "2027-09-23",
    time: "08:30 – 11:00 WIB",
    location: { en: "Jakarta (venue to be confirmed)", id: "Jakarta (lokasi akan dikonfirmasi)" },
    title: {
      en: "CFO Roundtable: Tax Governance for Large Taxpayers",
      id: "Roundtable CFO: Tax Governance bagi Wajib Pajak Besar",
    },
    summary: {
      en: "A closed-door discussion on risk registers, escalation thresholds, and board reporting on tax.",
      id: "Diskusi tertutup tentang register risiko, ambang eskalasi, dan pelaporan pajak kepada direksi.",
    },
  },
];

/** Published events only. */
export const events = allEvents.filter((e) => e.status === "confirmed");

export function splitEvents(today = new Date().toISOString().slice(0, 10)) {
  const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));
  return {
    upcoming: sorted.filter((e) => e.date >= today),
    past: sorted.filter((e) => e.date < today).reverse(),
  };
}
