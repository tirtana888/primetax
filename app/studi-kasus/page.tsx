"use client";

import * as React from "react";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { CaseStudyGrid } from "@/components/blocks/CaseStudyGrid";
import { CtaBand } from "@/components/blocks/CtaBand";
import { Select } from "@/components/ui/FormFields";
import { caseStudies } from "@/content/case-studies";

export default function CaseStudiesIndexPage() {
  const [segmentFilter, setSegmentFilter] = React.useState<string>("ALL");
  const [industryFilter, setIndustryFilter] = React.useState<string>("ALL");

  const industries = Array.from(new Set(caseStudies.map((c) => c.industry)));

  const filtered = caseStudies.filter((c) => {
    const matchSeg = segmentFilter === "ALL" || c.segment === segmentFilter;
    const matchInd = industryFilter === "ALL" || c.industry === industryFilter;
    return matchSeg && matchInd;
  });

  return (
    <>
      <section className="bg-white pt-6 pb-16 lg:pb-24">
        <div className="container-site">
          <Breadcrumb
            items={[
              { label: "Beranda", href: "/" },
              { label: "Studi Kasus" },
            ]}
          />

          <div className="mt-6 max-w-3xl">
            <p className="font-heading text-eyebrow uppercase text-emerald-700">
              Bukti Hasil Nyata
            </p>
            <h1 className="mt-3 font-heading text-h1 font-bold text-navy-900">
              Studi kasus pendampingan pajak
            </h1>
            <p className="mt-4 text-lead text-ink-600">
              Setiap studi kasus menampilkan konteks tantangan, pendekatan
              teknis yang ditempuh, serta hasil terukur. Identitas klien
              dianonimkan demi menjaga kerahasiaan kecuali terdapat izin
              tertulis.
            </p>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="cs-filter-segment"
                className="mb-1.5 block font-body text-label font-semibold text-ink-700"
              >
                Segmen Bisnis
              </label>
              <Select
                id="cs-filter-segment"
                value={segmentFilter}
                onChange={(e) => setSegmentFilter(e.target.value)}
              >
                <option value="ALL">Semua Segmen (Korporasi &amp; UKM)</option>
                <option value="korporasi">Korporasi &amp; PMA</option>
                <option value="ukm">UKM &amp; Startup</option>
              </Select>
            </div>

            <div>
              <label
                htmlFor="cs-filter-industry"
                className="mb-1.5 block font-body text-label font-semibold text-ink-700"
              >
                Industri
              </label>
              <Select
                id="cs-filter-industry"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
              >
                <option value="ALL">Semua Industri</option>
                {industries.map((ind) => (
                  <option key={ind} value={ind}>
                    {ind}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          <div className="mt-10">
            <CaseStudyGrid items={filtered} />
          </div>
        </div>
      </section>

      <CtaBand mode="dual" />
    </>
  );
}
