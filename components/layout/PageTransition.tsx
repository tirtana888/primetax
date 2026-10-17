"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Komponen PageTransition sesuai pedoman motion §5.7:
 * - Durasi: 300ms (--duration-slow) dengan easing cubic-bezier(0.2, 0, 0, 1) (--ease-standard)
 * - Translate vertikal halus (10px <= batas 12px §5.7) + fade-in saat berpindah rute
 * - Dilengkapi top navigation progress bar tipis berwarna emerald-500 saat navigasi antarhalaman
 * - Otomatis menghormati prefers-reduced-motion: reduce.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const [navigating, setNavigating] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  // Ketika pathname selesai berubah, tuntaskan progress bar
  React.useEffect(() => {
    setProgress(100);
    const doneTimer = setTimeout(() => {
      setNavigating(false);
      setProgress(0);
    }, 220);

    return () => clearTimeout(doneTimer);
  }, [pathname]);

  // Deteksi klik pada tautan internal untuk memicu indikator transisi seketika
  React.useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");
      if (
        !href ||
        target === "_blank" ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      try {
        const nextUrl = new URL(href, window.location.origin);
        if (nextUrl.origin !== window.location.origin) return;
        if (
          nextUrl.pathname === window.location.pathname &&
          nextUrl.search === window.location.search
        ) {
          return;
        }

        setNavigating(true);
        setProgress(35);
      } catch {
        // ignore invalid URLs
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <>
      {/* Top Progress Bar Halus (emerald-500) */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none fixed top-0 left-0 z-90 h-0.5 bg-emerald-500 transition-all duration-200",
          navigating ? "opacity-100" : "opacity-0"
        )}
        style={{ width: `${progress}%` }}
      />

      {/* Wrapper Transisi Halaman (Keyed by pathname agar animasi masuk berjalan mulus di setiap rute) */}
      <div key={pathname} className="animate-page-enter">
        {children}
      </div>
    </>
  );
}
