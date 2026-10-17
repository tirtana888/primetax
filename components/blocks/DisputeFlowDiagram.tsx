/**
 * Diagram Alur Sengketa Pajak sesuai spesifikasi §7.2:
 * Gaya flat line diagram: garis 2px navy-900 (#0B2545), aksen isi emerald-500 (#0FA37F) & navy-100 (#E6ECF4),
 * sudut membulat, SVG inline dengan <title> dan <desc> untuk screen reader.
 */
export function DisputeFlowDiagram({ isEn = false }: { isEn?: boolean }) {
  const steps = isEn
    ? [
        {
          no: "01",
          title: "SP2DK Inquiry",
          sub: "14-day response window",
          note: "Clarification & equalization",
        },
        {
          no: "02",
          title: "Tax Audit & SPHP",
          sub: "Up to 12 months",
          note: "Audit findings & rebuttal",
        },
        {
          no: "03",
          title: "Closing (PHP) & SKP",
          sub: "Assessment issued",
          note: "Agreed vs. disputed tax",
        },
        {
          no: "04",
          title: "Tax Objection (DJP)",
          sub: "File within 3 months",
          note: "Max 12-month review",
        },
        {
          no: "05",
          title: "Tax Court Appeal",
          sub: "File within 3 months",
          note: "Licensed Tax Court Counsel",
        },
      ]
    : [
        {
          no: "01",
          title: "Klarifikasi SP2DK",
          sub: "Tenggat ±14 hari",
          note: "Ekualisasi & penjelasan",
        },
        {
          no: "02",
          title: "Pemeriksaan & SPHP",
          sub: "Maks. 12 bulan",
          note: "Uji bukti & tanggapan SPHP",
        },
        {
          no: "03",
          title: "PHP & Terbit SKP",
          sub: "Pembahasan Akhir",
          note: "Pemisahan setuju/sengketa",
        },
        {
          no: "04",
          title: "Keberatan ke DJP",
          sub: "Batas pengajuan 3 bulan",
          note: "Keputusan maks. 12 bulan",
        },
        {
          no: "05",
          title: "Banding Pengadilan Pajak",
          sub: "Batas pengajuan 3 bulan",
          note: "Kuasa Hukum berizin",
        },
      ];

  return (
    <div className="rounded-xl border border-ink-300 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-heading text-h4 font-semibold text-navy-900">
          {isEn
            ? "Indonesian tax controversy & dispute resolution pathway"
            : "Alur tahapan pengawasan, pemeriksaan, hingga sengketa pajak"}
        </h3>
        <span className="text-caption font-medium text-ink-600">
          {isEn
            ? "Representation at any stage"
            : "Pendampingan dapat dimulai pada tahapan mana pun"}
        </span>
      </div>

      {/* SVG Flat Line Diagram untuk Desktop */}
      <div className="hidden overflow-x-auto lg:block">
        <svg
          viewBox="0 0 1060 150"
          className="w-full min-w-230"
          role="img"
          aria-labelledby="dispute-diagram-title dispute-diagram-desc"
        >
          <title id="dispute-diagram-title">
            {isEn
              ? "Tax Dispute Resolution Flowchart: SP2DK, Tax Audit, SKP, Objection, Tax Court Appeal"
              : "Diagram Alur Penyelesaian Sengketa Pajak: SP2DK, Pemeriksaan, SKP, Keberatan, hingga Banding Pengadilan Pajak"}
          </title>
          <desc id="dispute-diagram-desc">
            {isEn
              ? "Five sequential stages starting from SP2DK 14-day clarification, Tax Audit and SPHP, Final Closing Conference and SKP issuance, Tax Objection within 3 months, to Tax Court Appeal within 3 months."
              : "Lima tahapan berurutan mulai dari Klarifikasi SP2DK (14 hari), Pemeriksaan Pajak & SPHP, Pembahasan Akhir (PHP) & penerbitan SKP, Pengajuan Keberatan ke DJP (batas 3 bulan), hingga Banding di Pengadilan Pajak (batas 3 bulan)."}
          </desc>

          {steps.map((step, idx) => {
            const x = 10 + idx * 212;
            const isHighlight = idx === 0 || idx === 4;
            return (
              <g key={step.no} transform={`translate(${x}, 12)`}>
                <rect
                  x="0"
                  y="0"
                  width="184"
                  height="124"
                  rx="12"
                  fill={isHighlight ? "#E6ECF4" : "#FFFFFF"}
                  stroke="#0B2545"
                  strokeWidth="2"
                />
                <rect
                  x="14"
                  y="14"
                  width="32"
                  height="24"
                  rx="6"
                  fill="#0FA37F"
                />
                <text
                  x="30"
                  y="30"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontWeight="700"
                  fontSize="12"
                >
                  {step.no}
                </text>
                <text
                  x="14"
                  y="60"
                  fill="#0B2545"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                  fontWeight="700"
                  fontSize="14"
                >
                  {step.title}
                </text>
                <text
                  x="14"
                  y="82"
                  fill="#087A5F"
                  fontFamily="Inter, sans-serif"
                  fontWeight="600"
                  fontSize="12"
                >
                  {step.sub}
                </text>
                <text
                  x="14"
                  y="104"
                  fill="#52606D"
                  fontFamily="Inter, sans-serif"
                  fontWeight="400"
                  fontSize="12"
                >
                  {step.note}
                </text>

                {idx < steps.length - 1 && (
                  <g transform="translate(184, 62)">
                    <line
                      x1="2"
                      y1="0"
                      x2="24"
                      y2="0"
                      stroke="#0B2545"
                      strokeWidth="2"
                    />
                    <polyline
                      points="18,-6 25,0 18,6"
                      fill="none"
                      stroke="#0B2545"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Tampilan Vertikal Mobile/Tablet */}
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
        {steps.map((s) => (
          <li
            key={s.no}
            className="rounded-lg border-2 border-navy-900 bg-navy-50/60 p-4"
          >
            <div className="mb-2 inline-flex h-6 items-center rounded-sm bg-emerald-700 px-2 font-heading text-caption font-bold text-white tabular">
              Tahap {s.no}
            </div>
            <p className="font-heading text-h5 font-semibold text-navy-900">
              {s.title}
            </p>
            <p className="mt-0.5 text-caption font-semibold text-emerald-700 tabular">
              {s.sub}
            </p>
            <p className="mt-1 text-body-sm text-ink-600">{s.note}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
