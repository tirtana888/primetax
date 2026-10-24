"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse" | "text";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-white hover:bg-charcoal-soft border border-charcoal",
  secondary: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  inverse: "bg-white text-charcoal border border-white hover:bg-warm",
  text: "text-charcoal px-0! py-0! h-auto! gap-2 hover:gap-3",
};

export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  /** Analytics label; when set, clicks are tracked as `cta_click`. */
  track?: string;
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", arrow, track, className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={track ? () => trackEvent("cta_click", { cta: track, href }) : undefined}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2.5 rounded-button px-6 text-[0.9375rem] font-medium transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
      {arrow && <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
    </Link>
  );
}
