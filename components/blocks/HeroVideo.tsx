"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useLocale } from "@/components/ui/Link";
import { site } from "@/config/site";
import { t } from "@/lib/i18n";

/**
 * Muted, looping background video for the homepage hero.
 * - Desktop and mobile renditions (Cloudinary transformations in config/site.ts)
 * - Poster image shown until the video can play, and instead of it when the
 *   visitor prefers reduced motion or has Save-Data enabled
 * - Pause/play control, since the motion lasts longer than five seconds (WCAG 2.2.2)
 */
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);
  const [allowed, setAllowed] = useState(true);
  const { video, videoMobile, poster } = site.heroMedia;
  const c = t(useLocale()).common;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduced || saveData) {
      setAllowed(false);
      setPlaying(false);
      return;
    }
    // Pick the rendition once, by viewport width.
    const el = ref.current;
    if (!el) return;
    el.src = window.innerWidth < 768 ? videoMobile : video;
    el.play().catch(() => setPlaying(false));
  }, [video, videoMobile]);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="absolute inset-0" aria-hidden="true">
        {/* Poster as a plain image so the hero looks complete before the video loads. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
        {allowed && (
          <video
            ref={ref}
            className="absolute inset-0 h-full w-full object-cover"
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
          />
        )}
        {/* Charcoal overlay keeps white text readable (≥ 4.5:1) over every frame. */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/75 to-charcoal/45" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal/60 to-transparent" />
      </div>

      {allowed && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? c.pauseVideo : c.playVideo}
          className="absolute right-4 bottom-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-white hover:text-white md:right-8 md:bottom-8"
        >
          {playing ? (
            <Pause className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Play className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
          )}
        </button>
      )}
    </>
  );
}
