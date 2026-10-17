"use client";

import * as React from "react";
import { Check, Minus } from "lucide-react";
import pricingData from "@/content/pricing.json";
import { Badge } from "@/components/ui/Badge";
import { WaButton } from "@/components/ui/Button";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Komponen PricingTable sesuai §6.3, §6.7, & §8.8:
 * - Toggle Bulanan / Tahunan ("hemat [X]%" placeholder)
 * - 3 kartu paket (data dari content/pricing.json)
 * - Paket unggulan: border 2px emerald-500, badge "Paling populer" di atas, shadow-lg
 * - Tombol WhatsApp "Pilih [Nama Paket]" (pesan WA otomatis menyebut paket, §10.1)
 * - Tabel perbandingan fitur lengkap dengan kolom pertama sticky di mobile (§6.7).
 */
export function PricingTable({ previewOnly = false }: { previewOnly?: boolean }) {
  const [billingPeriod, setBillingPeriod] = React.useState<"monthly" | "annual">(
    "monthly"
  );

  const handleToggle = (period: "monthly" | "annual") => {
    setBillingPeriod(period);
    trackEvent("pricing_toggle", { period });
  };

  return (
    <div>
      {/* Toggle Bulanan / Tahunan */}
      <div className="mb-10 flex justify-center">
        <div
          role="group"
          aria-label="Pilih periode pembayaran"
          className="inline-flex items-center rounded-full border border-ink-300 bg-ink-100 p-1"
        >
          <button
            type="button"
            onClick={() => handleToggle("monthly")}
            aria-pressed={billingPeriod === "monthly"}
            className={cn(
              "cursor-pointer rounded-full px-5 py-2 font-heading text-btn-sm font-semibold transition-colors",
              billingPeriod === "monthly"
                ? "bg-navy-900 text-white shadow-xs"
                : "text-ink-700 hover:text-navy-900"
            )}
          >
            Bulanan
          </button>
          <button
            type="button"
            onClick={() => handleToggle("annual")}
            aria-pressed={billingPeriod === "annual"}
            className={cn(
              "inline-flex cursor-pointer items-center gap-2 rounded-full px-5 py-2 font-heading text-btn-sm font-semibold transition-colors",
              billingPeriod === "annual"
                ? "bg-navy-900 text-white shadow-xs"
                : "text-ink-700 hover:text-navy-900"
            )}
          >
            <span>Tahunan</span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-caption font-bold text-emerald-700 tabular">
              hemat {pricingData.annualDiscountPercent}%
            </span>
          </button>
        </div>
      </div>

      {/* 3 Kartu Paket */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricingData.packages.map((pkg) => {
          const priceLabel =
            billingPeriod === "monthly" ? pkg.monthlyPrice : pkg.annualPrice;

          return (
            <div
              key={pkg.id}
              className={cn(
                "relative flex flex-col justify-between rounded-xl bg-white p-6 md:p-8",
                pkg.popular
                  ? "border-2 border-emerald-500 shadow-lg"
                  : "border border-ink-300 shadow-sm"
              )}
            >
              {pkg.popular && pkg.badge && (
                <div className="mb-4">
                  <Badge variant="brand" pill>
                    ⭐ {pkg.badge}
                  </Badge>
                </div>
              )}

              <div>
                <h3 className="font-heading text-h4 font-semibold text-navy-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-caption font-semibold text-emerald-700">
                  Untuk: {pkg.target}
                </p>
                <p className="mt-2 text-body-sm text-ink-600">
                  {pkg.description}
                </p>

                <div className="mt-6 border-y border-ink-200 py-5">
                  <p className="text-caption font-medium text-ink-600">
                    Mulai dari
                  </p>
                  <div className="mt-1 flex items-baseline gap-1.5">
                    <span className="font-heading text-price font-bold text-navy-900 tabular">
                      Rp {priceLabel}
                    </span>
                    <span className="text-caption text-ink-600">
                      /bulan{" "}
                      {billingPeriod === "annual" ? "(dibayar tahunan)" : ""}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <WaButton
                    waContext={{ type: "package", packageName: pkg.name }}
                    ctaLocation="card"
                    segment="ukm"
                    packageName={pkg.name}
                    size="lg"
                    fullWidth
                    onClick={() =>
                      trackEvent("package_cta_click", {
                        package: pkg.name,
                        period: billingPeriod,
                      })
                    }
                  >
                    Pilih Paket {pkg.name}
                  </WaButton>
                </div>

                <ul className="mt-6 space-y-3 text-body-sm text-ink-900">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 border-t border-ink-200 pt-4 text-caption text-ink-500">
                {pkg.footnote}
              </p>
            </div>
          );
        })}
      </div>

      {/* Tabel Perbandingan Lengkap (§6.7) */}
      {!previewOnly && (
        <div className="mt-14">
          <h3 className="mb-4 font-heading text-h3 font-semibold text-navy-900">
            Perbandingan fitur lengkap
          </h3>
          <div className="overflow-x-auto rounded-lg border border-ink-300 bg-white shadow-xs">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Perbandingan fitur paket pajak UKM Starter, Growth, dan Audit
                Ready
              </caption>
              <thead>
                <tr className="border-b border-navy-200 bg-navy-50 font-body text-label font-semibold text-navy-900">
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-navy-50 px-4 py-3.5"
                  >
                    Fitur & Lingkup Layanan
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-center">
                    Starter
                  </th>
                  <th
                    scope="col"
                    className="bg-emerald-50/70 px-4 py-3.5 text-center text-emerald-800"
                  >
                    Growth (Populer)
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-center">
                    Audit Ready
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200 text-body-sm">
                {pricingData.comparison.map((row, idx) => (
                  <tr
                    key={idx}
                    className="transition-colors hover:bg-navy-50/60"
                  >
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-white px-4 py-3.5 font-medium text-ink-900"
                    >
                      {row.feature}
                    </th>
                    {[row.starter, row.growth, row.auditReady].map(
                      (cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={cn(
                            "px-4 py-3.5 text-center",
                            cIdx === 1 && "bg-emerald-50/30"
                          )}
                        >
                          {cell === true ? (
                            <span className="inline-flex items-center justify-center text-emerald-700">
                              <Check className="h-5 w-5" aria-hidden="true" />
                              <span className="sr-only">Termasuk</span>
                            </span>
                          ) : cell === false ? (
                            <span className="inline-flex items-center justify-center text-ink-400">
                              <Minus className="h-5 w-5" aria-hidden="true" />
                              <span className="sr-only">Tidak termasuk</span>
                            </span>
                          ) : (
                            <span className="font-medium text-ink-900">
                              {cell}
                            </span>
                          )}
                        </td>
                      )
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
