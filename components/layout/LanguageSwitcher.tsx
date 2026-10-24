"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { FlagGB, FlagID } from "@/components/ui/Flags";
import { localeFromPath, localeMeta, localizePath, stripLocale, t, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const flags: Record<Locale, React.ComponentType<{ className?: string }>> = { id: FlagID, en: FlagGB };
const order: Locale[] = ["id", "en"];

/** ID | EN switch with flags. Keeps the visitor on the same page. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() ?? "/";
  const current = localeFromPath(pathname);
  const basePath = stripLocale(pathname);

  const hrefFor = (locale: Locale) => localizePath(basePath, locale);

  return (
    <div role="group" aria-label={t(current).common.language} className={cn("flex items-center", className)}>
      {order.map((locale, i) => {
        const Flag = flags[locale];
        const active = locale === current;
        return (
          <span key={locale} className="flex items-center">
            {i > 0 && <span className="mx-1 h-4 w-px bg-border" aria-hidden="true" />}
            <NextLink
              href={hrefFor(locale)}
              hrefLang={locale}
              lang={locale}
              aria-current={active ? "true" : undefined}
              aria-label={localeMeta[locale].label}
              title={localeMeta[locale].label}
              onClick={() => {
                try {
                  window.localStorage.setItem("primetax_locale", locale);
                } catch {
                  // Preference is a convenience only.
                }
              }}
              className={cn(
                "inline-flex h-8 items-center gap-1.5 rounded-button px-1.5 text-xs font-medium tracking-wide transition-colors",
                active ? "text-charcoal" : "text-graphite opacity-70 hover:text-charcoal hover:opacity-100"
              )}
            >
              <Flag className="h-3 w-[18px]" />
              {localeMeta[locale].short}
            </NextLink>
          </span>
        );
      })}
    </div>
  );
}
