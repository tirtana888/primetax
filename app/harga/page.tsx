import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { PricingTable } from "@/components/blocks/PricingTable";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { CtaBand } from "@/components/blocks/CtaBand";
import pricingData from "@/content/pricing.json";

export const metadata: Metadata = {
  title: "Harga & Paket Konsultan Pajak UKM — Transparan per Bulan",
  description:
    "Paket berlangganan konsultan pajak UKM dan startup di Indonesia: Starter, Growth, dan Audit Ready. Harga jelas mulai dari Rp [HARGA STARTER]/bulan.",
  alternates: {
    canonical: "/harga",
  },
};

/**
 * Halaman Harga & Paket UKM /harga sesuai spesifikasi §8.8:
 * 1. Hero: H1 "Paket pajak UKM dengan harga jelas" + lead + toggle Bulanan/Tahunan
 * 2. 3 kartu paket (data dari content/pricing.json)
 * 3. Tabel perbandingan fitur lengkap
 * 4. Add-on (harga mulai dari, placeholder)
 * 5. Blok "Korporasi atau grup usaha?" (navy kecil -> Minta Proposal)
 * 6. FAQ harga
 * 7. Garansi proses [KEBIJAKAN GARANSI — KONFIRMASI]
 */
export default function PricingPage() {
  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Harga & Paket UKM" },
            ]}
          />

          <div className="mx-auto mt-6 max-w-3xl text-center">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Transparansi Harga UKM
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Paket pajak UKM dengan harga jelas
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Pilih paket sesuai kebutuhan. Semua harga belum termasuk PPN,
              dapat berubah sesuai volume transaksi.
            </p>
          </div>

          <div className="mt-10">
            <PricingTable />
          </div>
        </div>
      </section>

      {/* 4. Add-on Layanan (§8.8 #4) */}
      <section className="section bg-ink-100">
        <div className="container-site">
          <div className="max-w-2xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Layanan Tambahan (Add-On)
            </p>
            <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
              Kebutuhan satu kali (one-off) di luar paket bulanan
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pricingData.addons.map((addon, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-lg border border-ink-300 bg-white p-5 shadow-sm"
              >
                <h3 className="font-heading text-h5 font-semibold text-navy-900">
                  {addon.name}
                </h3>
                <div className="mt-4 border-t border-ink-200 pt-3">
                  <span className="font-heading text-body font-bold text-emerald-700 tabular">
                    {addon.priceFrom}
                  </span>
                  <span className="ml-1.5 text-caption text-ink-500">
                    ({addon.unit})
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 7. Garansi Proses (§8.8 #7) */}
          <div className="mt-10 flex items-start gap-3.5 rounded-xl border border-emerald-100 bg-emerald-50 p-6">
            <ShieldCheck
              className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-heading text-h5 font-semibold text-navy-900">
                Garansi Ketepatan Proses (Bukan Janji Hasil Sengketa)
              </h3>
              <p className="mt-1 text-body-sm text-ink-700">
                {pricingData.warrantyNote}
              </p>
            </div>
          </div>

          {/* 5. Blok "Korporasi atau grup usaha?" (§8.8 #5) */}
          <div className="mt-10 rounded-xl bg-navy-900 p-6 text-white md:flex md:items-center md:justify-between md:p-8">
            <div>
              <h3 className="font-heading text-h3 font-bold text-white">
                Korporasi, PMA, atau grup usaha?
              </h3>
              <p className="mt-1.5 text-body text-navy-200">
                Kebutuhan Anda perlu proposal sesuai lingkup transaksi,
                dokumentasi <em lang="en">transfer pricing</em>, dan SLA
                khusus.
              </p>
            </div>
            <div className="mt-5 shrink-0 md:mt-0">
              <Button variant="primary" size="lg" href="/minta-proposal">
                Minta Proposal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Harga (§8.8 #6) */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="mb-8 text-center">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              FAQ Harga &amp; Paket
            </p>
            <h2 className="mt-2 font-heading text-h2 font-bold text-navy-900">
              Pertanyaan seputar biaya, kontrak, dan pembayaran
            </h2>
          </div>

          <Accordion items={pricingData.faqs} />
        </div>
      </section>

      <CtaBand mode="sme" />
    </>
  );
}
