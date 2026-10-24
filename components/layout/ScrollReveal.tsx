"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Section entrance effect: content below the fold fades and rises into place
 * as it scrolls into view. Targets, inside every <section> in <main>:
 *   - the direct children of `.container-content` (headings, grids, panels)
 *   - the children of any element marked `data-stagger` (card grids), with a
 *     short delay between items
 * Content is visible without JavaScript; the hidden state is only applied by
 * this script, and never to elements already on screen or scrolled past.
 *
 * Uses a throttled scroll check rather than IntersectionObserver so the
 * reveal can never get stuck if observer callbacks are delayed.
 */
const STAGGER_MS = 90;
const TRIGGER = 0.9; // reveal when the element's top passes 90% of the viewport height

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.getElementById("main");
    if (!main) return;

    const targets = new Set<HTMLElement>();
    main.querySelectorAll<HTMLElement>("section .container-content > *").forEach((el) => targets.add(el));
    main.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
      Array.from(group.children).forEach((child, i) => {
        const el = child as HTMLElement;
        el.style.setProperty("--reveal-delay", `${Math.min(i, 6) * STAGGER_MS}ms`);
        targets.add(el);
      });
    });

    let pending = Array.from(targets).filter((el) => el.getBoundingClientRect().top >= window.innerHeight);
    pending.forEach((el) => el.setAttribute("data-reveal", "hidden"));

    let timer: ReturnType<typeof setTimeout> | undefined;
    const check = () => {
      timer = undefined;
      const line = window.innerHeight * TRIGGER;
      pending = pending.filter((el) => {
        if (el.getBoundingClientRect().top > line) return true;
        el.setAttribute("data-reveal", "shown");
        return false;
      });
      if (pending.length === 0) detach();
    };
    const onScroll = () => {
      if (!timer) timer = setTimeout(check, 50);
    };
    const detach = () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      detach();
      clearTimeout(timer);
      // Leaving the page: make sure nothing stays hidden.
      pending.forEach((el) => el.removeAttribute("data-reveal"));
    };
  }, [pathname]);

  return null;
}
