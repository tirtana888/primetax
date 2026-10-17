"use client";

import * as React from "react";
import { Calendar, Download, ExternalLink } from "lucide-react";
import calendarData from "@/content/tax-calendar.json";
import { Badge } from "@/components/ui/Badge";
import { Select } from "@/components/ui/FormFields";
import { trackEvent } from "@/lib/analytics";

export function getDeadlineStatus(
  isoDate: string,
  referenceDate: Date = new Date("2026-10-17T12:00:00+07:00")
): {
  label: string;
  variant: "danger" | "warning" | "success" | "neutral";
  daysDiff: number;
} {
  const target = new Date(`${isoDate}T23:59:59+07:00`);
  const diffMs = target.getTime() - referenceDate.getTime();
  const daysDiff = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (daysDiff < 0) {
    return {
      label: `Terlewat (${Math.abs(daysDiff)} hari lalu)`,
      variant: "danger",
      daysDiff,
    };
  }
  if (daysDiff <= 7) {
    return {
      label: `Tenggat ${daysDiff} hari lagi`,
      variant: "warning",
      daysDiff,
    };
  }
  if (daysDiff <= 30) {
    return {
      label: `${daysDiff} hari lagi`,
      variant: "success",
      daysDiff,
    };
  }
  return {
    label: "Terjadwal",
    variant: "neutral",
    daysDiff,
  };
}

export function buildGoogleCalendarUrl(item: {
  title: string;
  date: string;
  legalBasis: string;
}) {
  const cleanDate = item.date.replace(/-/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `[Tenggat Pajak] ${item.title}`,
    dates: `${cleanDate}/${cleanDate}`,
    details: `Dasar hukum: ${item.legalBasis}. Pengingat dari Kalender Pajak.`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function TaxCalendarWidget() {
  const [taxpayerFilter, setTaxpayerFilter] = React.useState<string>("ALL");
  const [obligationFilter, setObligationFilter] = React.useState<string>("ALL");

  const filtered = calendarData.deadlines.filter((d) => {
    const matchWp =
      taxpayerFilter === "ALL" || d.taxpayerType.includes(taxpayerFilter);
    const matchObligation =
      obligationFilter === "ALL" || d.obligationType === obligationFilter;
    return matchWp && matchObligation;
  });

  const handleDownloadIcs = () => {
    trackEvent("tool_used", { tool: "tax-calendar-ics" });
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Kalender Pajak Indonesia//ID",
    ];
    for (const item of filtered) {
      const dt = item.date.replace(/-/g, "");
      lines.push(
        "BEGIN:VEVENT",
        `UID:${item.id}@primetax`,
        `DTSTART;VALUE=DATE:${dt}`,
        `DTEND;VALUE=DATE:${dt}`,
        `SUMMARY:${item.title}`,
        `DESCRIPTION:Dasar hukum: ${item.legalBasis}`,
        "END:VEVENT"
      );
    }
    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "kalender-pajak-2026.ics";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
      <div className="mb-6 flex flex-col justify-between gap-4 border-b border-ink-200 pb-5 md:flex-row md:items-end">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="filter-wp"
              className="mb-1.5 block font-body text-label font-semibold text-ink-700"
            >
              Filter Jenis Wajib Pajak
            </label>
            <Select
              id="filter-wp"
              value={taxpayerFilter}
              onChange={(e) => {
                setTaxpayerFilter(e.target.value);
                trackEvent("tool_used", {
                  tool: "tax-calendar",
                  filter_wp: e.target.value,
                });
              }}
            >
              <option value="ALL">Semua Wajib Pajak (Badan, OP, PKP)</option>
              <option value="Badan">Wajib Pajak Badan</option>
              <option value="OP">Wajib Pajak Orang Pribadi (OP)</option>
              <option value="PKP">Pengusaha Kena Pajak (PKP)</option>
            </Select>
          </div>

          <div>
            <label
              htmlFor="filter-kewajiban"
              className="mb-1.5 block font-body text-label font-semibold text-ink-700"
            >
              Filter Jenis Kewajiban
            </label>
            <Select
              id="filter-kewajiban"
              value={obligationFilter}
              onChange={(e) => {
                setObligationFilter(e.target.value);
                trackEvent("tool_used", {
                  tool: "tax-calendar",
                  filter_obligation: e.target.value,
                });
              }}
            >
              <option value="ALL">Semua Kewajiban</option>
              <option value="Penyetoran">Penyetoran Masa</option>
              <option value="Pelaporan">Pelaporan SPT Masa</option>
              <option value="Setor & Lapor">Setor & Lapor PPN</option>
              <option value="SPT Tahunan">SPT Tahunan & TP Doc</option>
            </Select>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDownloadIcs}
          className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-navy-900 bg-transparent px-4 font-heading text-btn-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
        >
          <Download className="h-4 w-4" aria-hidden="true" />
          <span>Unduh Kalender (.ics)</span>
        </button>
      </div>

      {/* Tabel Kalender Pajak (§6.7) */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Jadwal tenggat penyetoran dan pelaporan pajak
          </caption>
          <thead>
            <tr className="border-b border-navy-200 bg-navy-50 font-body text-label font-semibold text-navy-900">
              <th scope="col" className="px-4 py-3">
                Tanggal Tenggat
              </th>
              <th scope="col" className="px-4 py-3">
                Kewajiban Pajak
              </th>
              <th scope="col" className="px-4 py-3">
                Wajib Pajak
              </th>
              <th scope="col" className="px-4 py-3">
                Dasar Hukum
              </th>
              <th scope="col" className="px-4 py-3">
                Status
              </th>
              <th scope="col" className="px-4 py-3 text-right">
                Pengingat
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-200 text-body-sm">
            {filtered.map((item) => {
              const status = getDeadlineStatus(item.date);
              return (
                <tr
                  key={item.id}
                  className="transition-colors hover:bg-navy-50/60"
                >
                  <td className="whitespace-nowrap px-4 py-3.5 font-semibold text-navy-900 tabular">
                    {item.date}
                  </td>
                  <td className="px-4 py-3.5 font-medium text-ink-900">
                    {item.title}
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex flex-wrap gap-1">
                      {item.taxpayerType.map((wp) => (
                        <Badge key={wp} variant="neutral" size="sm">
                          {wp}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-ink-600">
                    {item.legalBasis}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5">
                    <Badge variant={status.variant} size="sm" className="tabular">
                      {status.label}
                    </Badge>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3.5 text-right">
                    <a
                      href={buildGoogleCalendarUrl(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackEvent("tool_used", {
                          tool: "tax-calendar-gcal",
                          deadline_id: item.id,
                        })
                      }
                      className="inline-flex items-center gap-1 font-heading text-caption font-semibold text-emerald-700 no-underline hover:underline"
                    >
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Google Calendar</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-ink-200 pt-3 text-caption text-ink-500">
        <span>Sumber regulasi: {calendarData.source}</span>
        <span>Direview oleh: {calendarData.reviewedBy}</span>
      </div>
    </div>
  );
}
