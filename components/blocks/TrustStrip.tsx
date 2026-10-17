import Image from "next/image";
import statsData from "@/content/stats.json";
import { photos } from "@/content/photos";
import awardsData from "@/content/awards.json";
import { filterReady } from "@/lib/content";

export interface TrustStripProps {
  variant?: "general" | "corporate";
  currentYear?: number;
}

/**
 * Komponen TrustStrip sesuai §9.1 & §9.3 — gaya editorial:
 * - Section navy-900, angka besar dipisah garis tipis (2x2 mobile, 4 kolom desktop)
 * - Setiap angka dirender hanya jika memiliki field asOf (dan bukan placeholder di production)
 * - Penghargaan otomatis difilter: hanya year >= currentYear - 3 (mis. di 2026 -> 2023..2026).
 */
export function TrustStrip({
  variant = "general",
  currentYear = 2026,
}: TrustStripProps) {
  const stats = filterReady(
    (variant === "corporate" ? statsData.corporate : statsData.general).filter(
      (item) => Boolean(item.asOf)
    ),
    (item) => [item.value, item.asOf]
  );

  const recentAwards = filterReady(
    awardsData.filter((award) => award.year >= currentYear - 3),
    (award) => [award.title]
  );

  if (stats.length === 0 && recentAwards.length === 0) return null;

  return (
    <section
      aria-label="Bukti kepercayaan dan kredensial"
      className="relative isolate overflow-hidden bg-navy-900 py-16 text-white lg:py-20"
    >
      <Image
        src={`${photos.jakartaNight.src}?w=2000&q=70&fit=crop`}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-900/75"
      />
      <div className="container-site">
        {stats.length > 0 && (
          <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col border-l border-white/15 pl-5 lg:pl-8"
              >
                <dt className="order-2 mt-2 font-body text-body-sm font-medium text-navy-100">
                  {stat.label}
                </dt>
                <dd className="order-1 m-0 font-display text-[clamp(2.5rem,1.9rem+2.2vw,3.5rem)] leading-none text-white tabular">
                  {stat.value}
                </dd>
                <dd className="order-3 m-0 mt-1 text-caption text-navy-200 tabular">
                  {stat.asOf}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {recentAwards.length > 0 && (
          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
            <span className="font-heading text-eyebrow uppercase text-emerald-300">
              Pengakuan &amp; Afiliasi ({currentYear - 3}–{currentYear})
            </span>
            <ul className="flex flex-wrap items-center gap-3">
              {recentAwards.slice(0, 6).map((award, idx) => (
                <li
                  key={idx}
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3.5 py-2 text-caption text-navy-100"
                >
                  <span className="font-semibold text-white">{award.title}</span>
                  <span aria-hidden="true" className="text-navy-200">·</span>
                  <span className="tabular">{award.year}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
