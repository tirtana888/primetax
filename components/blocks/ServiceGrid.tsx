import Link from "next/link";
import {
  CalendarCheck,
  FileSearch,
  Scale,
  Receipt,
  ArrowLeftRight,
  Globe2,
  ClipboardList,
  ShieldCheck,
  Building2,
  MonitorCheck,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { ServiceItem } from "@/content/services";
import { cn } from "@/lib/utils";
import { railContainer, railItem } from "@/components/ui/rail";

export function ServiceIcon({
  name,
  className = "h-8 w-8 text-emerald-700",
}: {
  name: ServiceItem["icon"];
  className?: string;
}) {
  switch (name) {
    case "calendar-check":
      return <CalendarCheck className={className} aria-hidden="true" />;
    case "file-search":
      return <FileSearch className={className} aria-hidden="true" />;
    case "scale":
      return <Scale className={className} aria-hidden="true" />;
    case "receipt":
      return <Receipt className={className} aria-hidden="true" />;
    case "arrow-left-right":
      return <ArrowLeftRight className={className} aria-hidden="true" />;
    case "globe-2":
      return <Globe2 className={className} aria-hidden="true" />;
    case "clipboard-list":
      return <ClipboardList className={className} aria-hidden="true" />;
    case "shield-check":
      return <ShieldCheck className={className} aria-hidden="true" />;
    case "building-2":
      return <Building2 className={className} aria-hidden="true" />;
    case "monitor-check":
      return <MonitorCheck className={className} aria-hidden="true" />;
  }
}

export function ServiceGrid({
  items,
  isEn = false,
  featuredFirst = false,
  mobileRail = false,
}: {
  items: ServiceItem[];
  isEn?: boolean;
  /** Layout bento: kartu pertama 2x2 di desktop sebagai layanan unggulan. */
  featuredFirst?: boolean;
  /** Mobile: deret geser horizontal alih-alih kartu bertumpuk. */
  mobileRail?: boolean;
}) {
  return (
    <div
      className={cn(
        mobileRail ? railContainer : "grid grid-cols-1 gap-4",
        "md:grid-cols-2 md:gap-6 lg:grid-cols-3"
      )}
    >
      {items.map((svc, idx) => {
        const featured = featuredFirst && idx === 0;
        const href = isEn
          ? `/en/services/${svc.enSlug}`
          : `/layanan/${svc.slug}`;
        const segmentLabel =
          svc.segment === "korporasi"
            ? isEn
              ? "Corporate"
              : "Korporasi"
            : svc.segment === "ukm"
            ? isEn
              ? "SME"
              : "UKM"
            : isEn
            ? "Corporate & SME"
            : "Korporasi & UKM";

        return (
          <article
            key={svc.slug}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-xl border border-ink-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-200 hover:shadow-md md:p-6",
              "before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-emerald-500 before:transition-transform before:duration-300 hover:before:scale-x-100",
              mobileRail && railItem,
              featured &&
                "bg-navy-50 md:col-span-2 lg:row-span-2 lg:p-10"
            )}
          >
            <div>
              <div className="mb-4 flex items-center justify-between gap-2">
                <div
                  className={cn(
                    "inline-flex h-14 w-14 items-center justify-center rounded-lg",
                    featured ? "bg-white shadow-xs" : "bg-navy-50"
                  )}
                >
                  <ServiceIcon name={svc.icon} />
                </div>
                <Badge
                  variant={svc.segment === "ukm" ? "brand" : "neutral"}
                  size="sm"
                >
                  {segmentLabel}
                </Badge>
              </div>
              <h3
                className={cn(
                  "font-heading font-semibold text-navy-900",
                  featured ? "text-h4 md:text-h3 lg:mt-6" : "text-h4"
                )}
              >
                <Link
                  href={href}
                  className="text-navy-900 no-underline after:absolute after:inset-0 hover:text-emerald-700"
                >
                  {isEn ? svc.enTitle : svc.title}
                </Link>
              </h3>
              <p
                className={cn(
                  "mt-2 text-ink-600",
                  featured
                    ? "line-clamp-3 max-w-xl text-body-sm md:line-clamp-none md:text-lead"
                    : "line-clamp-3 text-body-sm"
                )}
              >
                {isEn ? svc.enShortDescription : svc.shortDescription}
              </p>
            </div>
            <div className="mt-5 inline-flex items-center gap-1 font-heading text-btn-sm font-semibold text-emerald-700 group-hover:text-emerald-800">
              <span>{isEn ? "Learn more" : "Pelajari"}</span>
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
}
