"use client";

import { useEffect } from "react";
import { useLocale } from "@/components/ui/Link";

/**
 * Keeps <html lang> in sync after client-side navigation between languages.
 * Static HTML gets the right value at build time from scripts/set-html-lang.mjs.
 */
export function HtmlLang() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
