"use client";

import { Link } from "@/components/ui/Link";
import { ArrowRight, Download } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse" | "outlineInverse" | "text";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-white hover:bg-charcoal-soft border border-charcoal",
  secondary: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  inverse: "bg-white text-charcoal border border-white hover:bg-warm",
  outlineInverse: "border border-white/60 text-white hover:border-white hover:bg-white/10",
  text: "text-charcoal px-0! py-0! h-auto! gap-2 hover:gap-3",
};

export interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  /** Analytics label; when set, clicks are tracked as `cta_click`. */
  track?: string;
  /** Render a plain download link (e.g. a PDF) instead of client-side navigation. */
  download?: boolean;
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", arrow, track, download, className }: ButtonLinkProps) {
  const props = {
    onClick: track ? () => trackEvent("cta_click", { cta: track, href }) : undefined,
    className: cn(
      "inline-flex h-12 items-center justify-center gap-2.5 rounded-button px-6 text-[0.9375rem] font-medium transition-all duration-200",
      variants[variant],
      className
    ),
  };
  const content = (
    <>
      {download && <Download className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
      {children}
      {arrow && <ArrowRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />}
    </>
  );

  return download ? (
    <a href={href} download {...props}>
      {content}
    </a>
  ) : (
    <Link href={href} {...props}>
      {content}
    </Link>
  );
}
