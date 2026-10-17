"use client";

import * as React from "react";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import type { ServiceItem } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServiceFilterClient({ items }: { items: ServiceItem[] }) {
  const [activeTab, setActiveTab] = React.useState<
    "all" | "korporasi" | "ukm"
  >("all");

  const filtered = items.filter((svc) => {
    if (activeTab === "all") return true;
    return svc.segment === activeTab || svc.segment === "both";
  });

  const tabs: Array<{ id: "all" | "korporasi" | "ukm"; label: string }> = [
    { id: "all", label: "Semua Layanan" },
    { id: "korporasi", label: "Untuk Korporasi & PMA" },
    { id: "ukm", label: "Untuk UKM & Startup" },
  ];

  return (
    <div>
      {/* Underline Tabs sesuai §6.8 */}
      <div
        role="tablist"
        aria-label="Filter segmen layanan"
        className="mb-8 flex flex-wrap gap-6 border-b border-ink-200"
      >
        {tabs.map((t) => {
          const isActive = activeTab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveTab(t.id)}
              className={cn(
                "cursor-pointer pb-3.5 font-heading text-body font-medium transition-colors",
                isActive
                  ? "border-b-2 border-emerald-500 font-semibold text-navy-900"
                  : "text-ink-600 hover:text-navy-900"
              )}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <ServiceGrid items={filtered} />
    </div>
  );
}
