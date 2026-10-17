import { useId } from "react";
import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export interface LogoProps {
  variant?: "full" | "mark";
  tone?: "default" | "inverse";
  showLegalSub?: boolean;
  href?: string;
  className?: string;
}

/**
 * Logomark PrimeTax: huruf "P" navy dengan panah emerald yang naik ke dalam lengkung P
 * (simbol pertumbuhan & kepatuhan). Versi inverse mengganti P navy menjadi putih
 * agar tetap terbaca di atas latar navy.
 */
export function LogoMark({
  tone = "default",
  className,
}: {
  tone?: "default" | "inverse";
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  const inverse = tone === "inverse";

  return (
    <svg
      viewBox="0 0 98 104"
      className={cn("shrink-0", className)}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-p`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={inverse ? "#FFFFFF" : "#1D4270"} />
          <stop offset="1" stopColor={inverse ? "#E6ECF4" : "#0B2545"} />
        </linearGradient>
        <linearGradient id={`${id}-a`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#087A5F" />
          <stop offset="1" stopColor="#34C79E" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id}-p)`}
        d="M0 8A8 8 0 0 1 8 0H58A39 39 0 0 1 58 78H47V55H62A16 16 0 0 0 62 23H34L0 56Z"
      />
      <path
        fill={`url(#${id}-a)`}
        d="M0 68L42 39.5C43.5 38.5 45 39.3 45 41V48.5C45 49.6 44.5 50.5 43.6 51.1L34 58V82L4 101.5C2 102.8 0 101.7 0 99.4Z"
      />
    </svg>
  );
}

/**
 * Komponen Logo untuk PrimeTax (PT. PrimeTax Infinity Berjaya)
 */
export function Logo({
  variant = "full",
  tone = "default",
  showLegalSub = true,
  href = "/",
  className,
}: LogoProps) {
  const inverse = tone === "inverse";

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 select-none",
        variant === "full" ? "min-w-30" : "min-w-6",
        className
      )}
      aria-label={`${site.brandName} — ${site.legalName}`}
    >
      <LogoMark tone={tone} className="h-9 w-auto" />
      {variant === "full" && (
        <span className="flex flex-col leading-none">
          <span className="font-brand text-[1.375rem] leading-none font-extrabold tracking-tight">
            <span className={inverse ? "text-white" : "text-navy-900"}>Prime</span>
            <span className={inverse ? "text-emerald-300" : "text-emerald-500"}>Tax</span>
          </span>
          {showLegalSub && (
            <span
              className={cn(
                "mt-1 text-[10.5px] font-medium tracking-wide",
                inverse ? "text-navy-200" : "text-ink-600"
              )}
            >
              {site.legalName}
            </span>
          )}
        </span>
      )}
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link
      href={href}
      aria-label={`${site.brandName} — ${site.legalName}`}
      className="inline-flex items-center rounded-md no-underline hover:no-underline"
    >
      {content}
    </Link>
  );
}
