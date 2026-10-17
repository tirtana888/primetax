import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { CERTIFICATION_LABELS, type CertificationCode } from "@/content/team";

export type BadgeVariant =
  | "neutral"
  | "brand"
  | "certification"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "dark";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: "sm" | "md";
  pill?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-navy-100 text-navy-800 border-transparent",
  brand: "bg-emerald-50 text-emerald-700 border-emerald-100",
  certification: "bg-white text-navy-900 border-navy-200",
  success: "bg-success-bg text-success-fg border-success-border",
  warning: "bg-warning-bg text-warning-fg border-warning-border",
  danger: "bg-danger-bg text-danger-fg border-danger-border",
  info: "bg-info-bg text-info-fg border-info-border",
  dark: "bg-navy-900 text-white border-transparent",
};

export function Badge({
  variant = "neutral",
  size = "md",
  pill = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border font-body text-caption font-semibold",
        size === "sm" ? "h-6 px-2.5" : "h-7 px-2.5",
        pill ? "rounded-full" : "rounded-sm",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function CertificationBadge({
  code,
  className,
}: {
  code: CertificationCode;
  className?: string;
}) {
  return (
    <Badge variant="certification" size="sm" className={className}>
      <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-emerald-700" aria-hidden="true" />
      <span>{CERTIFICATION_LABELS[code] || code}</span>
    </Badge>
  );
}
