import Link from "next/link";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * TEMPORARY typographic logo (Brief §4.4).
 *
 * This is a placeholder, not the final production logo. When the approved
 * artwork is supplied, set `site.logo.src` / `site.logo.srcInverse` in
 * config/site.ts and this component renders the artwork instead.
 */

type Tone = "default" | "inverse";

export function Monogram({ tone = "default", className }: { tone?: Tone; className?: string }) {
  const ink = tone === "inverse" ? "#FFFFFF" : "#252525";
  return (
    <svg viewBox="0 0 32 32" className={cn("shrink-0", className)} aria-hidden="true" focusable="false">
      <path
        fill={ink}
        d="M9 7h8.5a6.5 6.5 0 0 1 0 13H12.5v5H9V7Zm3.5 3.25v6.5h5a3.25 3.25 0 0 0 0-6.5h-5Z"
      />
      <rect x="18" y="22.5" width="5" height="2.5" fill="#B79A62" />
    </svg>
  );
}

export function Logo({
  tone = "default",
  withDescriptor = false,
  className,
}: {
  tone?: Tone;
  withDescriptor?: boolean;
  className?: string;
}) {
  const inverse = tone === "inverse";
  const artwork = inverse ? site.logo.srcInverse : site.logo.src;

  const mark = artwork ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={artwork}
      alt={site.brandName}
      width={site.logo.width}
      height={site.logo.height}
      className="h-8 w-auto"
    />
  ) : (
    <span className="inline-flex items-center gap-2.5">
      <Monogram tone={tone} className="-ml-1 h-8 w-8" />
      <span className="flex flex-col">
        <span
          className={cn(
            "text-[1.0625rem] font-semibold leading-none tracking-[0.2em]",
            inverse ? "text-white" : "text-charcoal"
          )}
        >
          PRIMETAX
        </span>
        {withDescriptor && (
          <span
            className={cn(
              "mt-1.5 text-[0.5625rem] font-medium leading-none tracking-[0.24em]",
              inverse ? "text-white/60" : "text-graphite"
            )}
          >
            STRATEGIC TAX ADVISORY
          </span>
        )}
      </span>
    </span>
  );

  return (
    <Link href="/" aria-label={`${site.brandName} — home`} className={cn("inline-flex items-center", className)}>
      {mark}
    </Link>
  );
}
