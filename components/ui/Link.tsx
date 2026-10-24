"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPath, localizePath, type Locale } from "@/lib/i18n";

/** Current locale, derived from the URL (/id/... → "id"). */
export function useLocale(): Locale {
  return localeFromPath(usePathname() ?? "/");
}

/**
 * Drop-in replacement for next/link that keeps visitors in their language:
 * internal hrefs such as "/services" become "/id/services" on Indonesian pages.
 */
export function Link({ href, ...props }: React.ComponentProps<typeof NextLink> & { href: string }) {
  const locale = useLocale();
  return <NextLink href={localizePath(href, locale)} {...props} />;
}
