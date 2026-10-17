"use client";

import * as React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { TeamGrid } from "@/components/blocks/TeamGrid";
import { CtaBand } from "@/components/blocks/CtaBand";
import { teamMembers } from "@/content/team";
import { cn } from "@/lib/utils";

export default function TeamIndexPage() {
  const [levelFilter, setLevelFilter] = React.useState<string>("ALL");

  const filtered = teamMembers.filter(
    (m) => levelFilter === "ALL" || m.level === levelFilter
  );

  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Tim Kami" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Identitas &amp; Kredensial Nyata
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Tim konsultan pajak bersertifikat kami
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Setiap penugasan dipimpin oleh Partner dan Manager pemegang
              sertifikasi resmi Konsultan Pajak (BKP A/B/C) serta Izin Kuasa
              Hukum Pengadilan Pajak.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["ALL", "Partner", "Manager", "Konsultan"].map((lvl) => (
              <button
                key={lvl}
                type="button"
                onClick={() => setLevelFilter(lvl)}
                className={cn(
                  "cursor-pointer rounded-md px-4 py-2 font-heading text-btn-sm font-semibold transition-colors",
                  levelFilter === lvl
                    ? "bg-navy-900 text-white"
                    : "border border-ink-300 bg-white text-ink-700 hover:bg-navy-50"
                )}
              >
                {lvl === "ALL" ? "Semua Tim" : lvl}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <TeamGrid members={filtered} />
          </div>
        </div>
      </section>

      <CtaBand mode="dual" />
    </>
  );
}
