"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWaLink, type WaContext } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-heading font-semibold no-underline transition-colors duration-150 cursor-pointer disabled:bg-ink-200 disabled:text-ink-500 disabled:cursor-not-allowed disabled:border-transparent",
  {
    variants: {
      variant: {
        primary:
          "bg-emerald-700 text-white hover:bg-emerald-800 hover:text-white hover:shadow-sm active:translate-y-px",
        secondary:
          "bg-navy-900 text-white hover:bg-navy-800 hover:text-white active:bg-navy-950",
        outline:
          "border border-navy-900 text-navy-900 bg-transparent hover:bg-navy-50 hover:text-navy-900 active:bg-navy-100",
        "outline-inverse":
          "border border-white text-white bg-transparent hover:bg-white/10 hover:text-white active:bg-white/15",
        ghost:
          "text-emerald-700 hover:underline hover:text-emerald-800 px-0 bg-transparent",
        whatsapp:
          "bg-emerald-700 text-white hover:bg-emerald-800 hover:text-white hover:shadow-sm active:translate-y-px",
        danger:
          "bg-danger-fg text-white hover:bg-danger-hover hover:text-white",
      },
      size: {
        sm: "h-9 px-3.5 text-btn-sm",
        md: "h-11 px-5 text-btn-md",
        lg: "h-13 px-6 text-btn-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <path d="M12.031 2.002c-5.514 0-9.998 4.48-9.998 9.991 0 1.763.46 3.485 1.334 5.004L2 22l5.133-1.346a9.978 9.978 0 0 0 4.896 1.289h.004c5.513 0 9.997-4.48 9.997-9.991a9.93 9.93 0 0 0-2.927-7.065 9.937 9.937 0 0 0-7.072-2.885Zm0 18.299h-.003a8.29 8.29 0 0 1-4.228-1.158l-.303-.18-3.046.799.813-2.968-.198-.314a8.273 8.273 0 0 1-1.274-4.426c0-4.577 3.727-8.301 8.309-8.301 2.219 0 4.304.864 5.873 2.432a8.25 8.25 0 0 1 2.431 5.87c0 4.578-3.727 8.246-8.374 8.246Zm4.557-6.212c-.25-.125-1.477-.729-1.706-.812-.229-.083-.395-.125-.562.125-.166.25-.645.812-.791.978-.145.167-.291.188-.541.063-.25-.125-1.055-.389-2.009-1.239-.743-.662-1.244-1.48-1.39-1.73-.145-.25-.015-.385.11-.509.112-.112.25-.292.375-.438.124-.146.166-.25.25-.416.083-.167.041-.312-.021-.438-.063-.125-.562-1.353-.77-1.853-.203-.487-.409-.421-.562-.429l-.479-.008c-.166 0-.437.062-.666.312-.229.25-.874.854-.874 2.082s.895 2.415 1.02 2.582c.125.166 1.761 2.689 4.267 3.77.596.258 1.061.412 1.424.527.598.19 1.143.163 1.573.099.48-.072 1.477-.604 1.685-1.187.208-.583.208-1.083.146-1.187-.063-.104-.229-.166-.479-.291Z" />
    </svg>
  );
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  loadingText?: string;
  href?: string;
  external?: boolean;
}

export function Button({
  className,
  variant,
  size,
  fullWidth,
  isLoading = false,
  loadingText = "Mengirim…",
  href,
  external,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {variant === "whatsapp" && <WhatsAppIcon />}
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {variant === "whatsapp" && <WhatsAppIcon />}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      aria-busy={isLoading ? "true" : undefined}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          {variant === "whatsapp" && <WhatsAppIcon />}
          {children}
        </>
      )}
    </button>
  );
}

export interface WaButtonProps extends Omit<ButtonProps, "href" | "variant"> {
  waContext?: WaContext;
  ctaLocation: "hero" | "fab" | "sticky" | "card" | "cta_band" | "article" | "header";
  segment?: "ukm" | "korporasi" | "both";
  packageName?: string;
}

/**
 * Tombol CTA WhatsApp yang otomatis memanggil buildWaLink(waContext) dan mengirim event analytics whatsapp_click (§10.1).
 * Menggunakan varian 'whatsapp' (emerald-700 + ikon WhatsApp putih, kontras 5.30:1 AA).
 */
export function WaButton({
  waContext = { type: "general" },
  ctaLocation,
  segment = "ukm",
  packageName,
  size = "md",
  fullWidth,
  className,
  children,
  ...props
}: WaButtonProps) {
  const href = buildWaLink(waContext);

  const handleClick = () => {
    trackEvent("whatsapp_click", {
      cta_location: ctaLocation,
      segment,
      package: packageName,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        buttonVariants({ variant: "whatsapp", size, fullWidth }),
        className
      )}
      {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      <WhatsAppIcon className={size === "sm" ? "h-4 w-4" : "h-5 w-5"} />
      {children}
    </a>
  );
}
