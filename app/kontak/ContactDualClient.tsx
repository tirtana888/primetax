"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { Button, WaButton } from "@/components/ui/Button";
import { SmeConsultationForm } from "@/components/blocks/SmeConsultationForm";
import { BookingFacade } from "@/components/blocks/BookingFacade";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export function ContactDualClient() {
  const searchParams = useSearchParams();
  const initialSegment =
    searchParams.get("segmen") === "korporasi" ? "korporasi" : "ukm";

  const [segment, setSegment] = React.useState<"ukm" | "korporasi">(
    initialSegment
  );
  const [showMapIframe, setShowMapIframe] = React.useState(false);

  React.useEffect(() => {
    const q = searchParams.get("segmen");
    if (q === "korporasi" || q === "ukm") {
      setSegment(q);
    }
  }, [searchParams]);

  return (
    <div className="space-y-12">
      {/* Pemilih Jalur Wajib di Atas (§8.14 #2) */}
      <div>
        <p className="mb-3 font-heading text-label font-semibold text-ink-700">
          Pilih jalur layanan yang sesuai dengan bisnis Anda:
        </p>
        <div
          role="tablist"
          aria-label="Pilih segmen kontak"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          <button
            type="button"
            role="tab"
            aria-selected={segment === "ukm"}
            onClick={() => setSegment("ukm")}
            className={cn(
              "cursor-pointer rounded-xl border-2 p-5 text-left transition-all",
              segment === "ukm"
                ? "border-emerald-700 bg-emerald-50/70 shadow-sm"
                : "border-ink-300 bg-white hover:border-navy-200"
            )}
          >
            <span className="font-heading text-eyebrow uppercase text-emerald-700">
              Jalur 1 — Konversi Cepat
            </span>
            <span className="mt-1 block font-heading text-h4 font-bold text-navy-900">
              Saya UKM / Startup
            </span>
            <span className="mt-1 block text-body-sm text-ink-600">
              Konsultasi gratis 30 menit via WhatsApp, paket bulanan harga
              jelas, Coretax, &amp; SPT.
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={segment === "korporasi"}
            onClick={() => setSegment("korporasi")}
            className={cn(
              "cursor-pointer rounded-xl border-2 p-5 text-left transition-all",
              segment === "korporasi"
                ? "border-navy-900 bg-navy-50 shadow-sm"
                : "border-ink-300 bg-white hover:border-navy-200"
            )}
          >
            <span className="font-heading text-eyebrow uppercase text-navy-700">
              Jalur 2 — Berbasis Proposal &amp; NDA
            </span>
            <span className="mt-1 block font-heading text-h4 font-bold text-navy-900">
              Saya Korporasi / PMA
            </span>
            <span className="mt-1 block text-body-sm text-ink-600">
              Permintaan proposal (RFP), scoping call 45–60 menit bersama
              Partner, &amp; Company Profile.
            </span>
          </button>
        </div>
      </div>

      {/* Isi Tab UKM (§8.14) */}
      {segment === "ukm" ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-6">
              <h2 className="font-heading text-h3 font-bold text-navy-900">
                Ingin respons paling cepat? Chat langsung via WhatsApp
              </h2>
              <p className="mt-2 text-body-sm text-ink-700">
                Klik tombol di bawah ini untuk langsung terhubung dengan
                konsultan UKM kami (balasan di jam kerja &lt;{" "}
                {site.contact.responseMinutesSme} menit).
              </p>
              <div className="mt-5">
                <WaButton
                  waContext={{ type: "sme" }}
                  ctaLocation="hero"
                  segment="ukm"
                  size="lg"
                >
                  Konsultasi Gratis 30 Menit via WhatsApp
                </WaButton>
              </div>
            </div>

            <SmeConsultationForm />
          </div>

          <div className="space-y-6 lg:col-span-5">
            <BookingFacade segment="ukm" />
          </div>
        </div>
      ) : (
        /* Isi Tab Korporasi (§8.14) */
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8">
              <span className="font-heading text-eyebrow uppercase text-emerald-700">
                Alur Layanan Korporasi &amp; PMA
              </span>
              <h2 className="mt-2 font-heading text-h3 font-bold text-navy-900">
                Ajukan Request for Proposal (RFP) atau jadwalkan scoping call
              </h2>
              <p className="mt-3 text-body text-ink-700">
                Untuk kebutuhan korporasi, grup usaha, dan PMA, kami menyusun
                proposal teknis dan penawaran tertulis setelah memahami lingkup
                transaksi dan tahun pajak yang akan ditangani.
              </p>

              <ol className="mt-6 space-y-3 rounded-lg bg-navy-50 p-5 text-body-sm text-ink-900">
                <li>
                  <strong className="font-semibold text-navy-900">
                    1. Kirim ringkasan kebutuhan (RFP):
                  </strong>{" "}
                  Ditinjau oleh Partner dalam ≤ 1 hari kerja (siap dengan NDA).
                </li>
                <li>
                  <strong className="font-semibold text-navy-900">
                    2. Scoping call 45–60 menit:
                  </strong>{" "}
                  Diskusi lingkup teknis bersama Partner &amp; Senior Manager.
                </li>
                <li>
                  <strong className="font-semibold text-navy-900 tabular">
                    3. Proposal tertulis (≤{" "}
                    {site.contact.proposalDaysAfterScoping} hari kerja):
                  </strong>{" "}
                  Berisi metodologi kerja, timeline deliverables, PIC, dan
                  struktur biaya.
                </li>
              </ol>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" size="lg" href="/minta-proposal">
                  Isi Form Proposal (RFP) →
                </Button>
                <Button variant="secondary" size="lg" href="/company-profile">
                  Unduh Company Profile (PDF)
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <BookingFacade segment="korporasi" />
          </div>
        </div>
      )}

      {/* Info Kantor + Peta Lazy Facade (§8.14 #3) */}
      <div className="grid grid-cols-1 gap-8 rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          <h2 className="font-heading text-h3 font-bold text-navy-900">
            Informasi Kantor Resmi
          </h2>
          <dl className="space-y-3 text-body-sm text-ink-700">
            <div className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-900">Alamat Kantor</dt>
                <dd>
                  {site.contact.address}, {site.contact.city}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-900">
                  Telepon &amp; WhatsApp Business
                </dt>
                <dd className="tabular">
                  {site.contact.phone} / {site.contact.whatsapp}
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-900">Email Resmi</dt>
                <dd>{site.contact.email}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-900">Jam Operasional</dt>
                <dd className="tabular">
                  {site.contact.hours.days}, {site.contact.hours.label} WIB
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                aria-hidden="true"
              />
              <div>
                <dt className="font-semibold text-navy-900">
                  Jaminan Kerahasiaan
                </dt>
                <dd>
                  Seluruh informasi yang Anda sampaikan dilindungi kerahasiaan
                  profesi dan UU PDP.
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-7">
          {!showMapIframe ? (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-lg border border-navy-200 bg-navy-50 p-6 text-center">
              <MapPin
                className="mb-2 h-8 w-8 text-emerald-700"
                aria-hidden="true"
              />
              <p className="font-heading text-h5 font-semibold text-navy-900">
                Peta Lokasi Kantor {site.brandName} ({site.contact.city})
              </p>
              <p className="mt-1 max-w-md text-caption text-ink-600">
                Peta interaktif dimuat sesuai permintaan untuk menjaga kecepatan
                halaman dan privasi Anda.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowMapIframe(true)}
                >
                  Tampilkan Peta Interaktif
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  href={site.contact.mapsUrl}
                  external
                >
                  Buka di Google Maps →
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-64 flex-col items-center justify-center rounded-lg border border-ink-300 bg-ink-100 p-6 text-center">
              <p className="font-heading text-body-sm font-semibold text-navy-900">
                Embed Google Maps: {site.contact.mapsUrl}
              </p>
              <p className="mt-1 text-caption text-ink-600">
                ({site.contact.address}, {site.contact.city})
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
