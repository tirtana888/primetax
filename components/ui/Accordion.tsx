"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildFaqSchema } from "@/lib/schema";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: FaqItem[];
  includeSchema?: boolean;
  className?: string;
}

/**
 * Komponen Akordion / FAQ sesuai §6.8:
 * Header 56px+, H5, ikon chevron berputar 180°, aria-expanded,
 * serta markup JSON-LD schema FAQPage otomatis.
 */
export function Accordion({
  items,
  includeSchema = true,
  className,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = React.useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className={cn("divide-y divide-ink-300 rounded-lg border border-ink-300 bg-white", className)}>
      {includeSchema && items.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildFaqSchema(items)),
          }}
        />
      )}
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        const contentId = `faq-panel-${idx}`;
        const buttonId = `faq-btn-${idx}`;

        return (
          <div key={idx} className="px-5 md:px-6">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(idx)}
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-4 text-left font-heading text-h5 font-semibold text-navy-900 transition-colors hover:text-emerald-700"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-navy-900 transition-transform duration-200",
                    isOpen && "rotate-180 text-emerald-700"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={cn("pb-5 text-body text-ink-700", !isOpen && "hidden")}
            >
              <p className="max-w-[68ch]">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
