"use client";

import * as React from "react";
import ppnRules from "@/content/tax-rules/ppn.json";
import { Input, Select, FieldWrapper } from "@/components/ui/FormFields";
import { WaButton } from "@/components/ui/Button";
import { formatRupiah } from "@/components/tools/Pph21Calculator";
import { trackEvent } from "@/lib/analytics";

export function PpnCalculator() {
  const [rawAmount, setRawAmount] = React.useState<string>("100000000");
  const [mode, setMode] = React.useState<"exclude" | "include">("exclude");
  const [schemeId, setSchemeId] = React.useState<string>(
    ppnRules.schemes[0].id
  );

  const amount = Math.max(0, Number(rawAmount.replace(/\D/g, "")) || 0);
  const scheme =
    ppnRules.schemes.find((s) => s.id === schemeId) || ppnRules.schemes[0];

  const effRate = scheme.effectiveRatePercent / 100;
  const priceBeforeVat =
    mode === "exclude" ? amount : amount / (1 + effRate);
  const dppNilaiLain =
    (priceBeforeVat * scheme.dppFactorNumerator) / scheme.dppFactorDenominator;
  const vatAmount = priceBeforeVat * effRate;
  const totalWithVat = priceBeforeVat + vatAmount;

  return (
    <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm md:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-6">
          <FieldWrapper
            id="ppn-amount"
            label="Nilai Transaksi (Rp)"
            required
          >
            <Input
              id="ppn-amount"
              type="text"
              inputMode="numeric"
              value={amount.toLocaleString("id-ID")}
              onChange={(e) => {
                setRawAmount(e.target.value);
                trackEvent("tool_used", { tool: "kalkulator-ppn" });
              }}
              className="tabular"
            />
          </FieldWrapper>

          <FieldWrapper
            id="ppn-mode"
            label="Status Harga yang Dimasukkan"
            required
          >
            <Select
              id="ppn-mode"
              value={mode}
              onChange={(e) => setMode(e.target.value as "exclude" | "include")}
            >
              <option value="exclude">Belum termasuk PPN (Exclude PPN)</option>
              <option value="include">Sudah termasuk PPN (Include PPN)</option>
            </Select>
          </FieldWrapper>

          <FieldWrapper
            id="ppn-scheme"
            label="Skema DPP & Tarif PPN"
            required
          >
            <Select
              id="ppn-scheme"
              value={schemeId}
              onChange={(e) => setSchemeId(e.target.value)}
            >
              {ppnRules.schemes.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </Select>
          </FieldWrapper>
        </div>

        <div
          aria-live="polite"
          className="flex flex-col justify-between rounded-xl bg-navy-50 p-6 lg:col-span-6"
        >
          <div>
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Rincian Dasar Pengenaan Pajak (DPP) & PPN
            </p>
            <p className="mt-2 font-heading text-stat font-extrabold text-navy-900 tabular">
              {formatRupiah(vatAmount)}
              <span className="ml-1.5 font-body text-body-sm font-normal text-ink-600">
                PPN Terutang
              </span>
            </p>

            <dl className="mt-6 space-y-2.5 border-t border-navy-200 pt-4 text-body-sm">
              <div className="flex justify-between">
                <dt className="text-ink-600">Harga Jual / Penggantian (Sebelum PPN):</dt>
                <dd className="font-semibold text-navy-900 tabular">
                  {formatRupiah(priceBeforeVat)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-600">
                  DPP Tercantum di Faktur ({scheme.dppFactorNumerator}/
                  {scheme.dppFactorDenominator}):
                </dt>
                <dd className="font-semibold text-navy-900 tabular">
                  {formatRupiah(dppNilaiLain)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink-600">PPN ({scheme.effectiveRatePercent}% efektif):</dt>
                <dd className="font-semibold text-navy-900 tabular">
                  {formatRupiah(vatAmount)}
                </dd>
              </div>
              <div className="flex justify-between border-t border-navy-200 pt-2">
                <dt className="font-semibold text-navy-900">
                  Total Tagihan (Harga + PPN):
                </dt>
                <dd className="font-bold text-emerald-700 tabular">
                  {formatRupiah(totalWithVat)}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-6 border-t border-navy-200 pt-4">
            <p className="mb-3 text-caption text-ink-600">
              Sumber: {ppnRules.source}. Hasil bersifat estimasi. Konsultasikan
              untuk kepastian.
            </p>
            <WaButton
              waContext={{ type: "tool", toolName: "Kalkulator PPN" }}
              ctaLocation="card"
              size="md"
              fullWidth
            >
              Konsultasikan PPN & e-Faktur Coretax via WhatsApp
            </WaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
