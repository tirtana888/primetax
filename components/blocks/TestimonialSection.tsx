import testimonialsData from "@/content/testimonials.json";
import { Badge } from "@/components/ui/Badge";
import { filterReady } from "@/lib/content";
import { cn } from "@/lib/utils";
import { railContainer, railItem } from "@/components/ui/rail";

export interface TestimonialSectionProps {
  segment?: "korporasi" | "ukm" | "all";
  limit?: number;
  mobileRail?: boolean;
}

/** Testimoni yang boleh tampil: consent === true dan (di production) tanpa placeholder. */
export function getVisibleTestimonials(
  segment: TestimonialSectionProps["segment"] = "all",
  limit = 3
) {
  return filterReady(
    testimonialsData.filter(
      (t) => t.consent === true && (segment === "all" || t.segment === segment)
    ),
    (t) => [t.quote, t.name, t.company]
  ).slice(0, limit);
}

/**
 * Komponen Testimoni sesuai §9.5:
 * - Hanya merender item dengan consent === true
 * - Grid statis (bukan carousel otomatis)
 * - Kutipan memakai Source Serif 4 agar terasa editorial & formal (gaya firma profesional).
 */
export function TestimonialSection({
  segment = "all",
  limit = 3,
  mobileRail = false,
}: TestimonialSectionProps) {
  const visible = getVisibleTestimonials(segment, limit);

  if (visible.length === 0) return null;

  return (
    <div
      className={cn(
        mobileRail ? railContainer : "grid grid-cols-1",
        "gap-6 md:grid-cols-2 lg:grid-cols-3"
      )}
    >
      {visible.map((item, idx) => {
        const initials = item.name
          .replace(/[\[\]]/g, "")
          .split(" ")
          .slice(0, 2)
          .map((w) => w[0])
          .join("");

        return (
          <figure
            key={idx}
            className={cn(
              mobileRail && railItem,
              "relative m-0 flex flex-col justify-between rounded-xl border border-ink-200 bg-white p-6 shadow-xs md:p-8"
            )}
          >
            <div>
              <div className="mb-5 flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className="font-serif text-[4rem] leading-[0.6] text-emerald-500"
                >
                  “
                </span>
                <Badge
                  variant={item.segment === "ukm" ? "brand" : "neutral"}
                  size="sm"
                >
                  {item.segment === "ukm" ? "Klien UKM" : "Klien Korporasi"}
                  {item.industry ? ` · ${item.industry}` : ""}
                </Badge>
              </div>
              <blockquote className="m-0 font-serif text-[1.1875rem] leading-[1.6] text-navy-900">
                {item.quote}
              </blockquote>
            </div>

            <figcaption className="mt-8 flex items-center gap-3 border-t border-ink-200 pt-5">
              <div
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 font-heading text-body-sm font-bold text-white"
                aria-hidden="true"
              >
                {initials}
              </div>
              <div>
                <p className="font-heading text-body-sm font-semibold text-navy-900">
                  {item.name}
                </p>
                <p className="text-caption text-ink-600">
                  {item.role}
                  {item.company ? ` · ${item.company}` : ""}
                </p>
              </div>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
