"use client";

import * as React from "react";
import pph21Rules from "@/content/tax-rules/pph21.json";
import { Input, Select, FieldWrapper } from "@/components/ui/FormFields";
import { WaButton } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";

export function formatRupiah(amount: number): string {
  return `Rp ${Math.round(amount).toLocaleString("id-ID")}`;
}

export function Pph21Calculator() {
  const [grossMonthly, setGrossMonthly] = React.useState<string>("15000000");
  const [ptkpStatus, setPtkpStatus] = React.useState<keyof typeof pph21Rules.ptkpAnnual>("TK/0");
  const [method, setMethod] = React.useState<"ter" | "annual">("ter");

  const numericGross = Math.max(0, Number(grossMonthly.replace(/\D/g, "")) || 0);
  const terCategory = pph21Rules.terCategoryMapping[ptkpStatus] || "TER A";

  // Cari tarif TER berdasarkan pita sampel di konfigurasi pph21.json
  const bands = pph21Rules.terSampleBands["TER A"];
  const matchedBand =
    bands.find((b) => numericGross <= b.maxGross) || bands[bands.length - 1];
  const terRatePercent = matchedBand.ratePercent;
  const monthlyTaxTer = (numericGross * terRatePercent) / 100;

  // Simulasi disetahunkan (Pasal 17) untuk rekonsiliasi Desember
  const annualGross = numericGross * 12;
  const biayaJabatan = Math.min(annualGross * 0.05, 6000000);
  const annualNet = Math.max(0, annualGross - biayaJabatan);
  const ptkp = pph21Rules.ptkpAnnual[ptkpStatus] || 54000000;
  const pkp = Math.max(0, Math.floor((annualNet - ptkp) / 1000) * 1000);

  let annualTaxPasal17 = 0;
  let remainingPkp = pkp;
  let prevLimit = 0;
  for (const bracket of pph21Rules.pasal17Brackets) {
    if (remainingPkp <= 0) break;
    const bandSize = bracket.upTo - prevLimit;
    const taxableInBand = Math.min(remainingPkp, bandSize);
    annualTaxPasal17 += (taxableInBand * bracket.ratePercent) / 100;
    remainingPkp -= taxableInBand;
    prevLimit = bracket.upTo;
  }

  const janToNovTerTotal = monthlyTaxTer * 11;
  const decemberTax = Math.max(0, annualTaxPasal17 - janToNovTerTotal);

  return (
    <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-6">
          <FieldWrapper
            id="pph21-gross"
            label="Penghasilan bruto sebulan (Gaji + Tunjangan)"
            required
            hint="Masukkan angka dalam Rupiah"
          >
            <Input
              id="pph21-gross"
              type="text"
              inputMode="numeric"
              value={numericGross.toLocaleString("id-ID")}
              onChange={(e) => {
                setGrossMonthly(e.target.value);
                trackEvent("tool_used", { tool: "kalkulator-pph-21" });
              }}
              className="tabular"
            />
          </FieldWrapper>

          <FieldWrapper
            id="pph21-ptkp"
            label="Status PTKP Pegawai"
            required
          >
            <Select
              id="pph21-ptkp"
              value={ptkpStatus}
              onChange={(e) =>
                setPtkpStatus(
                  e.target.value as keyof typeof pph21Rules.ptkpAnnual
                )
              }
            >
              <option value="TK/0">TK/0 — Tidak Kawin, 0 tanggungan (TER A)</option>
              <option value="TK/1">TK/1 — Tidak Kawin, 1 tanggungan (TER A)</option>
              <option value="K/0">K/0 — Kawin, 0 tanggungan (TER A)</option>
              <option value="TK/2">TK/2 — Tidak Kawin, 2 tanggungan (TER B)</option>
              <option value="TK/3">TK/3 — Tidak Kawin, 3 tanggungan (TER B)</option>
              <option value="K/1">K/1 — Kawin, 1 tanggungan (TER B)</option>
              <option value="K/2">K/2 — Kawin, 2 tanggungan (TER B)</option>
              <option value="K/3">K/3 — Kawin, 3 tanggungan (TER C)</option>
            </Select>
          </FieldWrapper>

          <FieldWrapper
            id="pph21-method"
            label="Metode tampilan hasil"
            required
          >
            <Select
              id="pph21-method"
              value={method}
              onChange={(e) => setMethod(e.target.value as "ter" | "annual")}
            >
              <option value="ter">
                TER Bulanan (Januari–November) + Simulasi Desember
              </option>
              <option value="annual">
                Rincian Perhitungan Setahun (Pasal 17 UU PPh)
              </option>
            </Select>
          </FieldWrapper>
        </div>

        <div
          aria-live="polite"
          className="flex flex-col justify-between rounded-xl bg-navy-50 p-6 lg:col-span-6"
        >
          <div>
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Hasil Estimasi PPh Pasal 21 ({terCategory})
            </p>
            <p className="mt-2 font-heading text-stat font-extrabold text-navy-900 tabular">
              {formatRupiah(monthlyTaxTer)}
              <span className="ml-1.5 font-body text-body-sm font-normal text-ink-600">
                / bulan (Jan–Nov)
              </span>
            </p>

            <dl className="mt-6 space-y-2.5 border-t border-navy-200 pt-4 text-body-sm">
              <div className="flex justify-between">
                <dt className="text-ink-600">Kategori & Tarif Efektif (TER):</dt>
                <dd className="font-semibold text-navy-900 tabular">
                  {terCategory} ({terRatePercent}%)
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-600">PTKP Setahun ({ptkpStatus}):</dt>
                <dd className="font-semibold text-navy-900 tabular">
                  {formatRupiah(ptkp)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-600">
                  Penghasilan Kena Pajak (PKP) Setahun:
                </dt>
                <dd className="font-semibold text-navy-900 tabular">
                  {formatRupiah(pkp)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-600">Total PPh 21 Setahun (Pasal 17):</dt>
                <dd className="font-semibold text-navy-900 tabular">
                  {formatRupiah(annualTaxPasal17)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-navy-200 pt-2">
                <dt className="font-semibold text-navy-900">
                  Estimasi PPh 21 Masa Desember:
                </dt>
                <dd className="font-bold text-emerald-700 tabular">
                  {formatRupiah(decemberTax)}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 border-t border-navy-200 pt-4">
            <p className="mb-3 text-caption text-ink-600">
              Sumber: {pph21Rules.source}. Hasil bersifat estimasi. Konsultasikan
              untuk kepastian perhitungan payroll perusahaan Anda.
            </p>
            <WaButton
              waContext={{ type: "tool", toolName: "Kalkulator PPh 21" }}
              ctaLocation="card"
              size="md"
              fullWidth
            >
              Konsultasikan Perhitungan PPh 21 via WhatsApp
            </WaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
