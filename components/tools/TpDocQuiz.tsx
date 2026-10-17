"use client";

import * as React from "react";
import tpRules from "@/content/tax-rules/tp-thresholds.json";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { trackEvent } from "@/lib/analytics";

export function TpDocQuiz() {
  const [hasAffiliatedTx, setHasAffiliatedTx] = React.useState<boolean | null>(null);
  const [grossOver50B, setGrossOver50B] = React.useState<boolean | null>(null);
  const [goodsOver20B, setGoodsOver20B] = React.useState<boolean | null>(null);
  const [servicesOver5B, setServicesOver5B] = React.useState<boolean | null>(null);
  const [lowTaxJurisdiction, setLowTaxJurisdiction] = React.useState<boolean | null>(null);

  const isCompleted =
    hasAffiliatedTx === false ||
    (hasAffiliatedTx === true &&
      grossOver50B !== null &&
      goodsOver20B !== null &&
      servicesOver5B !== null &&
      lowTaxJurisdiction !== null);

  let status: "wajib" | "perlu-dicek" | "tidak-wajib" | null = null;
  if (isCompleted) {
    if (hasAffiliatedTx === false) {
      status = "tidak-wajib";
    } else if (
      grossOver50B ||
      goodsOver20B ||
      servicesOver5B ||
      lowTaxJurisdiction
    ) {
      status = "wajib";
    } else {
      status = "perlu-dicek";
    }
  }

  return (
    <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8">
      <div className="space-y-6">
        {/* Pertanyaan 1 */}
        <div className="rounded-lg border border-ink-200 p-4">
          <p className="font-heading text-h5 font-semibold text-navy-900">
            1. Apakah perusahaan Anda memiliki transaksi dengan pihak berelasi /
            afiliasi (di dalam maupun luar negeri)?
          </p>
          <p className="mt-1 text-caption text-ink-600">
            Termasuk penjualan/pembelian barang, jasa manajemen, peminjaman
            uang, royalti, atau penggantian biaya (reimbursement) antargrup.
          </p>
          <div className="mt-3 flex gap-3">
            <Button
              type="button"
              variant={hasAffiliatedTx === true ? "secondary" : "outline"}
              size="sm"
              onClick={() => {
                setHasAffiliatedTx(true);
                trackEvent("tool_used", { tool: "cek-wajib-tp-doc" });
              }}
            >
              Ya, ada transaksi afiliasi
            </Button>
            <Button
              type="button"
              variant={hasAffiliatedTx === false ? "secondary" : "outline"}
              size="sm"
              onClick={() => {
                setHasAffiliatedTx(false);
                trackEvent("tool_used", { tool: "cek-wajib-tp-doc" });
              }}
            >
              Tidak ada
            </Button>
          </div>
        </div>

        {hasAffiliatedTx === true && (
          <>
            {/* Pertanyaan 2 */}
            <div className="rounded-lg border border-ink-200 p-4">
              <p className="font-heading text-h5 font-semibold text-navy-900 tabular">
                2. Apakah nilai peredaran bruto (omzet) tahun pajak sebelumnya
                lebih dari Rp{" "}
                {(tpRules.thresholds.previousYearGrossRevenue / 1e9).toLocaleString(
                  "id-ID"
                )}{" "}
                miliar?
              </p>
              <div className="mt-3 flex gap-3">
                <Button
                  type="button"
                  variant={grossOver50B === true ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setGrossOver50B(true)}
                >
                  Ya (&gt; Rp 50 M)
                </Button>
                <Button
                  type="button"
                  variant={grossOver50B === false ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setGrossOver50B(false)}
                >
                  Tidak
                </Button>
              </div>
            </div>

            {/* Pertanyaan 3 */}
            <div className="rounded-lg border border-ink-200 p-4">
              <p className="font-heading text-h5 font-semibold text-navy-900 tabular">
                3. Apakah nilai transaksi barang berwujud dengan pihak afiliasi
                tahun sebelumnya lebih dari Rp{" "}
                {(
                  tpRules.thresholds.affiliatedTangibleGoodsTransaction / 1e9
                ).toLocaleString("id-ID")}{" "}
                miliar?
              </p>
              <div className="mt-3 flex gap-3">
                <Button
                  type="button"
                  variant={goodsOver20B === true ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setGoodsOver20B(true)}
                >
                  Ya (&gt; Rp 20 M)
                </Button>
                <Button
                  type="button"
                  variant={goodsOver20B === false ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setGoodsOver20B(false)}
                >
                  Tidak
                </Button>
              </div>
            </div>

            {/* Pertanyaan 4 */}
            <div className="rounded-lg border border-ink-200 p-4">
              <p className="font-heading text-h5 font-semibold text-navy-900 tabular">
                4. Apakah nilai masing-masing transaksi jasa, bunga pinjaman,
                royalti, atau transaksi afiliasi lainnya lebih dari Rp{" "}
                {(
                  tpRules.thresholds.affiliatedServicesInterestRoyaltyOther /
                  1e9
                ).toLocaleString("id-ID")}{" "}
                miliar?
              </p>
              <div className="mt-3 flex gap-3">
                <Button
                  type="button"
                  variant={servicesOver5B === true ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setServicesOver5B(true)}
                >
                  Ya (&gt; Rp 5 M)
                </Button>
                <Button
                  type="button"
                  variant={servicesOver5B === false ? "secondary" : "outline"}
                  size="sm"
                  onClick={() => setServicesOver5B(false)}
                >
                  Tidak
                </Button>
              </div>
            </div>

            {/* Pertanyaan 5 */}
            <div className="rounded-lg border border-ink-200 p-4">
              <p className="font-heading text-h5 font-semibold text-navy-900">
                5. Apakah lawan transaksi afiliasi berada di negara/yurisdiksi
                dengan tarif PPh Badan lebih rendah dari tarif Indonesia (22%)?
              </p>
              <div className="mt-3 flex gap-3">
                <Button
                  type="button"
                  variant={
                    lowTaxJurisdiction === true ? "secondary" : "outline"
                  }
                  size="sm"
                  onClick={() => setLowTaxJurisdiction(true)}
                >
                  Ya / Termasuk Singapura, Hong Kong, dll.
                </Button>
                <Button
                  type="button"
                  variant={
                    lowTaxJurisdiction === false ? "secondary" : "outline"
                  }
                  size="sm"
                  onClick={() => setLowTaxJurisdiction(false)}
                >
                  Tidak
                </Button>
              </div>
            </div>
          </>
        )}

        {/* Hasil Diagnostik */}
        {status && (
          <div
            aria-live="polite"
            className="rounded-xl border border-navy-200 bg-navy-50 p-6"
          >
            <div className="mb-3">
              {status === "wajib" && (
                <Badge variant="warning">
                  Kemungkinan Wajib Menyusun Master File & Local File (TP Doc)
                </Badge>
              )}
              {status === "perlu-dicek" && (
                <Badge variant="info">
                  Tidak Melampaui Ambang TP Doc, Namun Tetap Wajib Prinsip
                  Kewajaran (PKKU)
                </Badge>
              )}
              {status === "tidak-wajib" && (
                <Badge variant="success">
                  Kemungkinan Tidak Wajib Menyusun TP Doc
                </Badge>
              )}
            </div>

            <h3 className="font-heading text-h4 font-semibold text-navy-900">
              {status === "wajib"
                ? "Perusahaan Anda memenuhi kriteria wajib menyelenggarakan Dokumen Induk & Dokumen Lokal sesuai PMK 172/2023."
                : status === "perlu-dicek"
                ? "Meskipun di bawah ambang dokumen TP formal, setiap transaksi afiliasi tetap wajib memenuhi Prinsip Kewajaran dan Kelaziman Usaha (PKKU) saat diperiksa."
                : "Tanpa transaksi hubungan istimewa, perusahaan Anda tidak diwajibkan menyusun TP Documentation."}
            </h3>

            <p className="mt-2 text-body-sm text-ink-700">
              Batas waktu ketersediaan Dokumen Induk dan Dokumen Lokal adalah{" "}
              <strong className="tabular">
                {tpRules.availabilityDeadlineMonthsAfterFiscalYearEnd} bulan
              </strong>{" "}
              setelah akhir tahun pajak (30 April untuk tahun buku Jan–Des).
              Sumber: {tpRules.source}.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="primary" size="md" href="/minta-proposal">
                Minta Proposal Penyusunan TP Doc
              </Button>
              <Button
                variant="outline"
                size="md"
                href="/layanan/transfer-pricing"
              >
                Pelajari Layanan Transfer Pricing
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
