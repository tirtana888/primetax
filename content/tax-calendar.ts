/**
 * Indonesian tax calendar (recurring statutory deadlines), generated rather
 * than hand-entered so it never runs out.
 *
 * Rules (Coretax era, PMK-81/2024; cross-checked against the Ortax 2026 calendar):
 * - Monthly PPh payment: 15th of the following month
 * - Monthly PPh returns (SPT Masa PPh 21/26 and Unifikasi): 20th of the following month
 * - VAT payment and SPT Masa PPN: last day of the following month
 * - Annual returns: individuals 31 March, corporate 30 April (calendar-year taxpayers)
 * - Transfer pricing documentation available: 4 months after year-end
 * - Country-by-Country Report notification/report: 12 months after year-end
 * Deadlines on a weekend or fixed national holiday move to the next working
 * day. Moving holidays and cuti bersama are NOT applied automatically; the
 * page tells readers to check DJP announcements. One-off relaxations go in
 * `notes` below.
 */

export type DeadlineCategory = "pph" | "ppn" | "annual" | "tp";

export interface Deadline {
  id: string;
  date: string; // YYYY-MM-DD, after weekend/holiday adjustment
  dueDate: string; // unadjusted statutory date
  category: DeadlineCategory;
  title: { en: string; id: string };
  period: { en: string; id: string };
  note?: { en: string; id: string };
}

// Fixed-date national holidays only (moving holidays vary by year).
const FIXED_HOLIDAYS = ["01-01", "05-01", "06-01", "08-17", "12-25"];

const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const MONTHS_ID = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

// One-off announced relaxations, keyed by deadline id.
const notes: Record<string, { en: string; id: string }> = {
  "annual-op-2025": {
    en: "A relaxation was announced for tax year 2025: returns accepted until 30 April 2026.",
    id: "Relaksasi diumumkan untuk tahun pajak 2025: penyampaian SPT diterima hingga 30 April 2026.",
  },
  "annual-badan-2025": {
    en: "A relaxation was announced for tax year 2025: returns accepted until 31 May 2026.",
    id: "Relaksasi diumumkan untuk tahun pajak 2025: penyampaian SPT diterima hingga 31 Mei 2026.",
  },
};

const iso = (d: Date) =>
  `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, "0")}-${String(d.getUTCDate()).padStart(2, "0")}`;

function nextWorkingDay(d: Date) {
  const out = new Date(d);
  while (out.getUTCDay() === 0 || out.getUTCDay() === 6 || FIXED_HOLIDAYS.includes(iso(out).slice(5))) {
    out.setUTCDate(out.getUTCDate() + 1);
  }
  return out;
}

function entry(
  id: string,
  due: Date,
  category: DeadlineCategory,
  title: Deadline["title"],
  period: Deadline["period"]
): Deadline {
  return { id, dueDate: iso(due), date: iso(nextWorkingDay(due)), category, title, period, note: notes[id] };
}

/** All deadlines falling between two ISO dates (inclusive). */
export function getDeadlines(from: string, to: string): Deadline[] {
  const start = new Date(`${from}T00:00:00Z`);
  const end = new Date(`${to}T00:00:00Z`);
  const items: Deadline[] = [];

  // Iterate over tax periods from January of the previous year, so annual
  // items due late in the year (e.g. CbCR in December) are always generated.
  for (
    let p = new Date(Date.UTC(start.getUTCFullYear() - 1, 0, 1));
    p <= end;
    p = new Date(Date.UTC(p.getUTCFullYear(), p.getUTCMonth() + 1, 1))
  ) {
    const y = p.getUTCFullYear();
    const m = p.getUTCMonth();
    const period = { en: `${MONTHS_EN[m]} ${y}`, id: `${MONTHS_ID[m]} ${y}` };
    const key = `${y}-${String(m + 1).padStart(2, "0")}`;

    items.push(
      entry(`pph-pay-${key}`, new Date(Date.UTC(y, m + 1, 15)), "pph", {
        en: "Payment of monthly income tax (PPh 21/26, Unifikasi, 25)",
        id: "Batas setor PPh Masa (PPh 21/26, Unifikasi, 25)",
      }, period),
      entry(`pph-file-${key}`, new Date(Date.UTC(y, m + 1, 20)), "pph", {
        en: "Filing of monthly income tax returns (SPT Masa PPh 21/26 and Unifikasi)",
        id: "Batas lapor SPT Masa PPh 21/26 dan PPh Unifikasi",
      }, period),
      entry(`ppn-${key}`, new Date(Date.UTC(y, m + 2, 0)), "ppn", {
        en: "Payment and filing of the monthly VAT return (SPT Masa PPN)",
        id: "Batas setor dan lapor SPT Masa PPN",
      }, period)
    );

    // Annual items, attached to the January period of the following year.
    if (m === 0) {
      const ty = y - 1;
      const year = { en: `Tax year ${ty}`, id: `Tahun pajak ${ty}` };
      items.push(
        entry(`annual-op-${ty}`, new Date(Date.UTC(y, 2, 31)), "annual", {
          en: "Annual individual income tax return (SPT Tahunan PPh Orang Pribadi)",
          id: "Batas lapor SPT Tahunan PPh Orang Pribadi",
        }, year),
        entry(`annual-badan-${ty}`, new Date(Date.UTC(y, 3, 30)), "annual", {
          en: "Annual corporate income tax return (SPT Tahunan PPh Badan); PPh 29 paid before filing",
          id: "Batas lapor SPT Tahunan PPh Badan; PPh 29 disetor sebelum SPT disampaikan",
        }, year),
        entry(`tp-doc-${ty}`, new Date(Date.UTC(y, 3, 30)), "tp", {
          en: "Transfer pricing documentation (Master File and Local File) to be available",
          id: "Dokumen transfer pricing (Dokumen Induk dan Dokumen Lokal) wajib tersedia",
        }, year),
        entry(`cbcr-${ty}`, new Date(Date.UTC(y, 11, 31)), "tp", {
          en: "Country-by-Country Report notification / report",
          id: "Penyampaian notifikasi / laporan per negara (CbCR)",
        }, year)
      );
    }
  }

  return items
    .filter((d) => d.date >= from && d.date <= to)
    .sort((a, b) => a.date.localeCompare(b.date) || a.category.localeCompare(b.category));
}
