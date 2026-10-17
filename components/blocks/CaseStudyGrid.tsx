import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { CaseStudy } from "@/content/case-studies";
import { isReady } from "@/lib/content";
import { cn } from "@/lib/utils";
import { railContainer, railItem } from "@/components/ui/rail";

/**
 * Kartu Studi Kasus sesuai §6.3 & §9.4:
 * Badge industri + layanan -> H4 judul berbentuk hasil -> angka hasil besar (Stat, emerald-700) + label -> link.
 */
export function CaseStudyGrid({
  items,
  mobileRail = false,
}: {
  items: CaseStudy[];
  mobileRail?: boolean;
}) {
  return (
    <div
      className={cn(
        mobileRail ? railContainer : "grid grid-cols-1",
        "gap-6 md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {items.map((cs) => {
        const primaryResult = cs.results.find((r) => isReady(r.value));
        return (
          <article
            key={cs.slug}
            className={cn(
              mobileRail && railItem,
              "group relative flex flex-col justify-between rounded-xl border border-ink-200 bg-white p-6 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-md md:p-7"
            )}
          >
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="neutral" size="sm">
                  {cs.industry}
                </Badge>
                <Badge
                  variant={cs.segment === "ukm" ? "brand" : "certification"}
                  size="sm"
                >
                  {cs.segment === "ukm" ? "UKM" : "Korporasi"}
                </Badge>
              </div>

              {primaryResult && (
                <div className="mb-5 border-l-4 border-emerald-500 pl-4">
                  <p className="font-heading text-stat font-extrabold text-navy-900 tabular">
                    {primaryResult.value}
                  </p>
                  <p className="mt-1 text-body-sm font-medium text-ink-600">
                    {primaryResult.label}
                  </p>
                </div>
              )}

              <h3 className="font-heading text-h4 font-semibold text-navy-900">
                <Link
                  href={`/studi-kasus/${cs.slug}`}
                  className="text-navy-900 no-underline after:absolute after:inset-0 hover:text-emerald-700"
                >
                  {cs.title}
                </Link>
              </h3>

              <p className="mt-2 line-clamp-3 text-body-sm text-ink-600">
                {cs.challenge}
              </p>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-ink-200 pt-4 text-caption text-ink-600">
              <span>Klien: {cs.clientLabel}</span>
              <span className="inline-flex items-center gap-1 font-heading text-btn-sm font-semibold text-emerald-700">
                <span>Baca</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
}
