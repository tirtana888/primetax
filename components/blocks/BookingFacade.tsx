"use client";

import * as React from "react";
import { Calendar, Clock, ExternalLink, CheckCircle2 } from "lucide-react";
import { site } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export interface BookingFacadeProps {
  segment: "ukm" | "korporasi";
}

/**
 * Widget Booking Konsultasi (Lazy Facade) sesuai §10.4:
 * - Zona waktu default Asia/Jakarta (WIB)
 * - Tidak memuat iframe berat saat awal halaman agar LCP tetap hijau
 * - Menyediakan fallback tautan langsung tanpa JS.
 */
export function BookingFacade({ segment }: BookingFacadeProps) {
  const [selectedSlot, setSelectedSlot] = React.useState<string | null>(null);
  const [booked, setBooked] = React.useState(false);

  const isCorporate = segment === "korporasi";
  const bookingUrl = isCorporate
    ? site.booking.corporateUrl
    : site.booking.smeUrl;

  const sampleSlots = [
    "Besok, 10.00 WIB",
    "Besok, 14.00 WIB",
    "Lusa, 09.30 WIB",
    "Lusa, 15.00 WIB",
  ];

  const handleConfirmSlot = () => {
    if (!selectedSlot) return;
    trackEvent("booking_scheduled", {
      segment,
      slot: selectedSlot,
    });
    setBooked(true);
  };

  return (
    <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-200 pb-4">
        <div className="flex items-center gap-2.5">
          <Calendar className="h-5 w-5 text-emerald-700" aria-hidden="true" />
          <h3 className="font-heading text-h5 font-semibold text-navy-900">
            {isCorporate
              ? "Jadwalkan Scoping Call Korporasi (45–60 menit)"
              : "Jadwalkan Konsultasi Gratis UKM (30 menit)"}
          </h3>
        </div>
        <span className="inline-flex items-center gap-1 rounded-sm bg-navy-50 px-2.5 py-1 text-caption font-semibold text-navy-800">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Zona Waktu: Asia/Jakarta (WIB)</span>
        </span>
      </div>

      {!booked ? (
        <div className="mt-5">
          <p className="text-body-sm text-ink-600">
            {isCorporate
              ? "Pilih slot diskusi awal (online via Google Meet/Microsoft Teams atau tatap muka di kantor) bersama Partner/Senior Manager kami:"
              : "Pilih slot waktu konsultasi online 30 menit (Google Meet / Zoom / WhatsApp Call):"}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {sampleSlots.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                aria-pressed={selectedSlot === slot}
                className={`cursor-pointer rounded-md border px-3 py-2.5 font-body text-body-sm font-medium transition-colors tabular ${
                  selectedSlot === slot
                    ? "border-emerald-700 bg-emerald-50 text-emerald-800"
                    : "border-ink-400 bg-white text-ink-800 hover:bg-navy-50"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <Button
              type="button"
              variant="secondary"
              size="md"
              disabled={!selectedSlot}
              onClick={handleConfirmSlot}
            >
              Konfirmasi Jadwal {selectedSlot ? `(${selectedSlot})` : ""}
            </Button>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-body text-caption font-medium text-emerald-700 underline"
            >
              <span>Buka kalender eksternal ({bookingUrl})</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      ) : (
        <div
          role="status"
          className="mt-5 flex items-start gap-3 rounded-lg border border-success-border bg-success-bg p-4 text-success-fg"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-heading text-body-sm font-semibold">
              Slot preferensi {selectedSlot} telah dicatat.
            </p>
            <p className="mt-1 text-caption">
              Silakan lengkapi form di samping atau hubungi kami agar undangan
              kalender resmi dikirimkan ke email Anda.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
