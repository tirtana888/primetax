import Link from "next/link";
import { buildBreadcrumbSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Komponen Breadcrumb sesuai §6.8:
 * Inter 14px ink-600, pemisah "/" ink-400, item terakhir ink-900 tanpa link,
 * disertai JSON-LD schema BreadcrumbList.
 */
export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("py-3", className)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(items)),
        }}
      />
      <ol className="flex flex-wrap items-center gap-2 font-body text-body-sm text-ink-600">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="inline-flex items-center gap-2">
              {idx > 0 && (
                <span className="text-ink-400 select-none" aria-hidden="true">
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span aria-current="page" className="font-medium text-ink-900">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-ink-600 no-underline transition-colors hover:text-emerald-700 hover:underline"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
