export type ServiceSegment = "ukm" | "korporasi" | "both";
export type ServiceCtaMode = "sme" | "dual" | "corporate";

export interface ServiceItem {
  slug: string;
  enSlug: string;
  title: string;
  enTitle: string;
  shortDescription: string;
  enShortDescription: string;
  lead: string;
  enLead: string;
  icon:
    | "calendar-check"
    | "file-search"
    | "scale"
    | "receipt"
    | "arrow-left-right"
    | "globe-2"
    | "clipboard-list"
    | "shield-check"
    | "building-2"
    | "monitor-check";
  segment: ServiceSegment;
  ctaMode: ServiceCtaMode;
  isMvpCore: boolean;
  whoFor: string[];
  enWhoFor: string[];
  commonProblems: Array<{ title: string; description: string }>;
  deliverables: string[];
  enDeliverables: string[];
  processSteps: Array<{ step: string; duration: string; description: string }>;
  showDisputeDiagram?: boolean;
  faqs: Array<{ question: string; answer: string }>;
  tags: string[];
}

export const services: ServiceItem[] = [
  {
    slug: "kepatuhan-pajak",
    enSlug: "tax-compliance",
    title: "Kepatuhan pajak bulanan & tahunan",
    enTitle: "Monthly & annual tax compliance",
    shortDescription:
      "Penyusunan dan pelaporan SPT Masa PPh 21/23/4(2), PPN, e-Faktur Coretax, hingga SPT Tahunan badan dan orang pribadi tepat waktu.",
    enShortDescription:
      "Timely preparation and filing of monthly withholding taxes, VAT/Coretax e-Invoices, and annual corporate & individual tax returns.",
    lead: "Pastikan seluruh kewajiban SPT Masa dan SPT Tahunan perusahaan Anda dihitung dengan teliti, direkonsiliasi dengan laporan keuangan, dan dilaporkan tepat waktu di sistem Coretax.",
    enLead:
      "Ensure all monthly and annual tax obligations are accurately calculated, reconciled with financial statements, and filed on time via the Coretax administration system.",
    icon: "calendar-check",
    segment: "both",
    ctaMode: "sme",
    isMvpCore: true,
    whoFor: [
      "UKM dan startup yang ingin urusan pajak bulanan beres tanpa harus merekrut staf pajak penuh waktu",
      "Perusahaan menengah dan korporasi yang membutuhkan review kepatuhan senior sebelum SPT dilaporkan",
      "Wajib pajak PKP yang membutuhkan pengelolaan e-Faktur dan rekonsiliasi PPN rutin di Coretax",
      "Pemilik usaha dan direksi yang membutuhkan penyusunan SPT Tahunan Badan & OP yang rapi",
    ],
    enWhoFor: [
      "SMEs and startups seeking reliable monthly tax compliance without hiring a full-time tax team",
      "Mid-sized and corporate entities requiring senior review prior to monthly and annual tax filings",
      "VAT-registered businesses (PKP) managing high-volume Coretax e-Invoices and reconciliations",
      "Business owners and directors needing accurate Corporate and Individual Annual Tax Returns",
    ],
    commonProblems: [
      {
        title: "Sering terlambat setor atau lapor karena tenggat terlewat",
        description:
          "Keterlambatan pelaporan SPT Masa maupun Tahunan menimbulkan sanksi administrasi denda dan bunga yang seharusnya bisa dicegah.",
      },
      {
        title: "Selisih omzet laporan laba rugi dengan SPT Masa PPN",
        description:
          "Ketidakcocokan antara peredaran usaha di SPT PPh Badan dan penyerahan PPN menjadi pemicu utama diterbitkannya SP2DK oleh kantor pajak.",
      },
      {
        title: "Kendala teknis saat beralih ke sistem Coretax & perhitungan TER PPh 21",
        description:
          "Perubahan skema pemotongan PPh 21 TER dan administrasi bukti potong unifikasi di Coretax sering membuat tim finance kewalahan.",
      },
    ],
    deliverables: [
      "Perhitungan dan draf SPT Masa PPh Pasal 21/26 (skema TER & rekonsiliasi masa Desember)",
      "Perhitungan dan draf SPT Masa PPh Unifikasi (Pasal 23, 4 ayat 2, 15, 26)",
      "Administrasi e-Faktur Keluaran/Masukan dan pelaporan SPT Masa PPN di Coretax",
      "Kertas kerja ekualisasi fiskal bulanan (peredaran usaha vs PPN vs objek PPh potong/pungut)",
      "Kertas kerja rekonsiliasi fiskal tahunan dan penyusunan SPT Tahunan PPh Badan / OP",
      "Pembuatan kode billing resmi dan pengingat tenggat pembayaran setiap bulan",
    ],
    enDeliverables: [
      "Monthly Article 21/26 employee withholding tax calculation (TER & December reconciliation)",
      "Unified monthly withholding tax returns (Articles 23, 4(2), 15, 26)",
      "Coretax e-Invoice administration and monthly VAT return preparation",
      "Monthly fiscal equalization working papers (revenue vs. VAT vs. withholding objects)",
      "Annual corporate fiscal reconciliation and Corporate/Individual Annual Tax Return filing",
      "Official tax billing code generation and proactive deadline reminders",
    ],
    processSteps: [
      {
        step: "Tanggal 1–5 setiap bulan: Pengumpulan data",
        duration: "3–5 hari kerja",
        description:
          "Tim kami mengingatkan dan menerima rekap transaksi, invoice, mutasi bank, dan daftar gaji melalui folder kerja aman atau WhatsApp.",
      },
      {
        step: "Tanggal 6–12: Perhitungan, rekonsiliasi & kode billing",
        duration: "4–5 hari kerja",
        description:
          "Kami menyusun kertas kerja perhitungan pajak, melakukan pengecekan silang dua lapis, dan mengirimkan rekap pajak terutang beserta kode billing untuk Anda setorkan sebelum tanggal 15.",
      },
      {
        step: "Tanggal 15–20 (dan akhir bulan untuk PPN): Pelaporan SPT",
        duration: "Tepat sebelum tenggat",
        description:
          "Setelah bukti setor diterima, kami menyelesaikan pelaporan SPT Masa di Coretax dan mengirimkan arsip BPE (Bukti Penerimaan Elektronik) lengkap.",
      },
      {
        step: "Kuartal I setiap tahun: Penyusunan SPT Tahunan",
        duration: "2–4 minggu",
        description:
          "Menyusun koreksi fiskal atas laporan keuangan tahunan dan melaporkan SPT Tahunan sebelum 31 Maret (OP) atau 30 April (Badan).",
      },
    ],
    faqs: [
      {
        question: "Apakah pembayaran pajak dilakukan lewat rekening PrimeTax?",
        answer:
          "Tidak. Demi keamanan dan tata kelola yang benar, kami hanya menerbitkan kode billing resmi DJP. Penyetoran pajak dilakukan langsung dari rekening perusahaan Anda ke kas negara.",
      },
      {
        question: "Bagaimana jika laporan keuangan bulanan usaha saya belum rapi?",
        answer:
          "Tim kami dapat membantu merapikan rekapitulasi omzet dan biaya dasar untuk keperluan perhitungan pajak, atau berkoordinasi langsung dengan staf pembukuan Anda.",
      },
      {
        question: "Apakah layanan ini sudah mendukung sistem Coretax terbaru?",
        answer:
          "Ya, seluruh alur administrasi bukti potong, e-Faktur, hingga pelaporan SPT Masa dan Tahunan kami jalankan sesuai ketentuan Coretax DJP terbaru.",
      },
      {
        question: "Berapa biaya untuk layanan kepatuhan bulanan?",
        answer:
          "Untuk UKM, tersedia paket transparan mulai Rp [HARGA STARTER]/bulan. Untuk korporasi dengan volume transaksi tinggi, kami menyusun proposal sesuai lingkup kerja.",
      },
    ],
    tags: ["kepatuhan", "spt", "pph-21", "ppn", "coretax"],
  },
  {
    slug: "pendampingan-sp2dk-pemeriksaan",
    enSlug: "sp2dk-tax-audit-assistance",
    title: "Pendampingan SP2DK & pemeriksaan",
    enTitle: "SP2DK & tax audit assistance",
    shortDescription:
      "Analisis risiko, penyusunan tanggapan tertulis SP2DK (surat permintaan penjelasan dari kantor pajak), dan pendampingan pemeriksaan hingga pembahasan akhir (PHP).",
    enShortDescription:
      "Risk assessment, formal written responses to SP2DK tax office inquiries, and end-to-end tax audit representation through final closing conference.",
    lead: "Menerima SP2DK atau Surat Perintah Pemeriksaan (SP2) membutuhkan respons yang tenang, terukur, dan didukung bukti dokumen serta dasar hukum yang tepat. Kami mendampingi Anda di setiap tahapan.",
    enLead:
      "Receiving an SP2DK inquiry or a formal Tax Audit notice requires a calm, structured response backed by solid documentation and legal basis. Our senior advisors represent you at every stage.",
    icon: "file-search",
    segment: "both",
    ctaMode: "dual",
    isMvpCore: true,
    showDisputeDiagram: true,
    whoFor: [
      "Perusahaan atau pemilik usaha yang baru menerima surat SP2DK dengan tenggat tanggapan 14 hari",
      "Wajib pajak yang sedang menjalani Pemeriksaan Pajak (rutin maupun khusus) dan menerima SPHP",
      "CFO dan tim finance yang ingin memastikan ekualisasi data siap sebelum menghadiri konseling dengan Account Representative (AR)",
      "Korporasi PMA/PMDN yang membutuhkan kuasa/pendamping bersertifikat saat pembahasan akhir pemeriksaan",
    ],
    enWhoFor: [
      "Companies or business owners who received an SP2DK letter with a 14-day response window",
      "Taxpayers undergoing routine or special Tax Audits and responding to SPHP audit findings",
      "CFOs and finance teams needing thorough data equalization before meeting with the Tax Office",
      "Corporate and PMA entities requiring certified representation during closing conferences",
    ],
    commonProblems: [
      {
        title: "Tenggat 14 hari SP2DK yang sempit sementara dokumen belum terkumpul",
        description:
          "Menjawab SP2DK secara terburu-buru tanpa rekonsiliasi yang utuh berisiko meningkatkan tindak lanjut menjadi pemeriksaan pajak.",
      },
      {
        title: "Koreksi pemeriksa dalam SPHP yang bernilai material",
        description:
          "Ketika Surat Pemberitahuan Hasil Pemeriksaan (SPHP) terbit, wajib pajak memiliki waktu terbatas untuk menyusun tanggapan tertulis dan argumen di Pembahasan Akhir (PHP).",
      },
      {
        title: "Perbedaan interpretasi regulasi atas biaya dan transaksi afiliasi",
        description:
          "Tanpa rujukan PMK/SE dan yurisprudensi yang tepat, argumen bisnis sering kali tidak diterima oleh tim pemeriksa.",
      },
    ],
    deliverables: [
      "Matriks pemetaan isu dalam SP2DK atau SPHP beserta estimasi eksposur risiko pajak",
      "Kertas kerja rekonsiliasi & ekualisasi lengkap beserta daftar bukti pendukung yang relevan",
      "Draf surat penjelasan tertulis atas SP2DK atau surat tanggapan SPHP dengan dasar regulasi",
      "Pendampingan langsung saat konseling/tatap muka dengan AR atau tim Pemeriksa Pajak",
      "Pendampingan pada tahapan Pembahasan Akhir Hasil Pemeriksaan (PHP) dan Tim Quality Assurance (QA)",
      "Laporan evaluasi pasca-SP2DK/pemeriksaan untuk perbaikan kontrol internal ke depan",
    ],
    enDeliverables: [
      "Issue mapping matrix for SP2DK or SPHP findings with quantified tax exposure analysis",
      "Comprehensive reconciliation working papers and indexed supporting evidence",
      "Formal written SP2DK explanation letter or SPHP rebuttal grounded in prevailing regulations",
      "Direct representation in meetings with Account Representatives or Tax Auditors",
      "Representation during Final Closing Conference (PHP) and Quality Assurance (QA) review",
      "Post-audit evaluation report to strengthen future internal tax controls",
    ],
    processSteps: [
      {
        step: "Hari 1–2: Telaah surat & pemetaan tenggat",
        duration: "1–2 hari kerja",
        description:
          "Membedah poin pertanyaan dalam SP2DK/SP2, mengidentifikasi tenggat resmi, dan menyusun daftar dokumen prioritas.",
      },
      {
        step: "Hari 3–8: Rekonsiliasi data & pengujian bukti",
        duration: "4–6 hari kerja",
        description:
          "Mencocokkan angka SPT, laporan keuangan, mutasi rekening, dan invoice untuk menemukan penjelasan faktual atas selisih data DJP.",
      },
      {
        step: "Hari 9–12: Penyusunan draf tanggapan tertulis",
        duration: "2–3 hari kerja",
        description:
          "Menyusun surat penjelasan yang sistematis, sopan, dan berdasar regulasi, lalu mereview bersama manajemen Anda.",
      },
      {
        step: "Hari 13–selesai: Penyampaian & pendampingan pembahasan",
        duration: "Sesuai jadwal KPP",
        description:
          "Mendampingi penyampaian surat, menghadiri berita acara permintaan penjelasan atau pembahasan akhir hingga proses selesai.",
      },
    ],
    faqs: [
      {
        question: "Apa itu SP2DK dan apakah berarti perusahaan saya sedang diperiksa?",
        answer:
          "SP2DK (Surat Permintaan Penjelasan atas Data dan/atau Keterangan) belum merupakan pemeriksaan pajak, melainkan tahap klarifikasi dari kantor pajak atas data yang belum cocok. Jika dijawab dengan bukti yang memadai dan tepat waktu, proses dapat selesai tanpa berlanjut ke pemeriksaan.",
      },
      {
        question: "Apakah PrimeTax bisa menjamin SP2DK pasti ditutup tanpa bayar pajak?",
        answer:
          "Kami tidak pernah menjanjikan hasil yang tidak dapat dijamin karena hasil akhir bergantung pada fakta transaksi dan kelengkapan dokumen. Yang kami jamin adalah ketelitian rekonsiliasi, ketepatan argumen regulasi, dan kepatuhan pada seluruh prosedur resmi.",
      },
      {
        question: "Bagaimana jika tenggat 14 hari SP2DK saya tinggal beberapa hari lagi?",
        answer:
          "Segera hubungi kami. Kami akan melakukan triase cepat atas poin paling material dan, bila diizinkan ketentuan di KPP terkait, membantu mengomunikasikan jadwal penyampaian data secara bertahap.",
      },
      {
        question: "Apakah konsultan Anda dapat hadir mendampingi kami di kantor pajak?",
        answer:
          "Ya. Konsultan kami yang memiliki izin praktik dan sertifikasi BKP dapat mendampingi atau mewakili perusahaan Anda sesuai surat kuasa khusus.",
      },
    ],
    tags: ["sp2dk", "pemeriksaan", "sengketa", "kepatuhan"],
  },
  {
    slug: "keberatan-banding",
    enSlug: "tax-objection-appeal-litigation",
    title: "Keberatan, banding & Pengadilan Pajak",
    enTitle: "Tax objection, appeal & Tax Court litigation",
    shortDescription:
      "Penyusunan surat keberatan, memori banding, kontra memori, serta pendampingan persidangan oleh Kuasa Hukum Pengadilan Pajak berizin.",
    enShortDescription:
      "Preparation of formal tax objections, appeal briefs, and full representation in the Indonesian Tax Court by licensed Tax Court attorneys.",
    lead: "Ketika Surat Ketetapan Pajak (SKP) atau Keputusan Keberatan belum mencerminkan substansi transaksi Anda, tim konsultan dan Kuasa Hukum Pengadilan Pajak kami mendampingi upaya hukum secara objektif dan terukur.",
    enLead:
      "When a Tax Assessment Letter (SKP) or Objection Decision does not reflect the true substance of your transactions, our licensed Tax Court attorneys provide rigorous, objective representation.",
    icon: "scale",
    segment: "korporasi",
    ctaMode: "corporate",
    isMvpCore: true,
    showDisputeDiagram: true,
    whoFor: [
      "Korporasi yang menerima SKPKB/SKPLB dengan koreksi pemeriksa yang tidak disetujui",
      "Perusahaan yang akan mengajukan Keberatan ke DJP dalam batas waktu 3 bulan sejak SKP dikirim",
      "Wajib pajak yang pengajuan keberatannya ditolak/dikabulkan sebagian dan akan menempuh Banding ke Pengadilan Pajak",
      "Grup usaha yang menghadapi Gugatan pajak atau Peninjauan Kembali (PK) ke Mahkamah Agung",
    ],
    enWhoFor: [
      "Corporations receiving disputed Tax Assessment Letters (SKPKB/SKPLB)",
      "Taxpayers preparing formal Objections within the strict 3-month statutory deadline",
      "Entities filing Appeals or Lawsuits before the Indonesian Tax Court",
      "Corporate groups handling Judicial Review (Peninjauan Kembali) filings",
    ],
    commonProblems: [
      {
        title: "Syarat formal pengajuan keberatan atau banding yang ketat",
        description:
          "Kesalahan perhitungan tenggat waktu 3 bulan atau syarat pembayaran pajak yang disetujui dalam PHP dapat menyebabkan permohonan tidak dapat dipertimbangkan secara formal.",
      },
      {
        title: "Risiko sanksi denda 30% (keberatan) atau 60% (banding) jika permohonan ditolak",
        description:
          "Sebelum melangkah ke upaya hukum, manajemen memerlukan penilaian objektif atas kekuatan bukti dan peluang argumen agar keputusan bisnis terukur.",
      },
      {
        title: "Pembuktian di persidangan Pengadilan Pajak yang membutuhkan matriks alat bukti",
        description:
          "Majelis Hakim menilai kebenaran materiil berdasarkan kesesuaian argumen hukum dengan bukti transaksi yang terorganisasi rapi.",
      },
    ],
    deliverables: [
      "Tax dispute feasibility memo (analisis kekuatan hukum, kelengkapan bukti, dan simulasi eksposur sanksi)",
      "Penyusunan Surat Keberatan dan tanggapan atas Surat Pemberitahuan Untuk Hadir (SPUH)",
      "Penyusunan Surat Banding, Surat Gugatan, dan Surat Bantahan di Pengadilan Pajak",
      "Penyusunan matriks alat bukti dan penjelasan tertulis selama proses persidangan",
      "Pendampingan langsung di persidangan Pengadilan Pajak oleh Kuasa Hukum berizin resmi",
      "Pendampingan administrasi pelaksanaan Putusan Pengadilan Pajak (pencairan kelebihan bayar / imbalan bunga)",
    ],
    enDeliverables: [
      "Tax dispute feasibility & risk exposure memo prior to filing",
      "Formal Tax Objection brief and SPUH response documentation",
      "Tax Court Appeal brief (Surat Banding), Rebuttal (Surat Bantahan), and closing arguments",
      "Comprehensive evidentiary matrix and written hearing explanations",
      "Direct courtroom representation by licensed Tax Court attorneys",
      "Post-decision execution and tax refund/interest claim administration",
    ],
    processSteps: [
      {
        step: "Minggu 1–2: Feasibility review & verifikasi syarat formal",
        duration: "5–10 hari kerja",
        description:
          "Menelaah SKP/Keputusan Keberatan, kertas kerja pemeriksa, tenggat waktu, dan memberikan rekomendasi objektif mengenai kelayakan sengketa.",
      },
      {
        step: "Minggu 3–6: Penyusunan argumen hukum & matriks bukti",
        duration: "3–4 minggu",
        description:
          "Menyusun argumen materiil berdasarkan peraturan perpajakan, prinsip akuntansi, dan putusan pengadilan sejenis, serta menyusun indeks bukti.",
      },
      {
        step: "Pengajuan resmi sebelum tenggat",
        duration: "Tepat waktu (< 3 bulan)",
        description:
          "Menyampaikan berkas Keberatan atau Banding secara lengkap dan memastikan seluruh syarat formal terpenuhi.",
      },
      {
        step: "Pendampingan pembahasan / persidangan",
        duration: "9–12 bulan (sesuai tahapan)",
        description:
          "Mewakili perusahaan dalam pembahasan dengan Penelaah Keberatan atau menghadiri persidangan reguler di Pengadilan Pajak hingga putusan.",
      },
    ],
    faqs: [
      {
        question: "Apakah kami harus membayar seluruh nilai SKPKB sebelum mengajukan keberatan?",
        answer:
          "Sesuai UU KUP, wajib pajak hanya wajib melunasi pajak yang telah disetujui dalam Pembahasan Akhir Hasil Pemeriksaan (PHP) sebelum mengajukan keberatan. Jumlah yang tidak disetujui tertangguh pembayarannya sampai ada keputusan.",
      },
      {
        question: "Apakah tim PrimeTax memiliki Izin Kuasa Hukum Pengadilan Pajak?",
        answer:
          "Ya. Pendampingan di Pengadilan Pajak ditangani oleh tim kami yang memegang Izin Kuasa Hukum bidang perpajakan resmi dari Sekretariat Pengadilan Pajak.",
      },
      {
        question: "Apakah kalian menerima skema success fee yang menjanjikan kemenangan?",
        answer:
          "Kami mematuhi kode etik profesi dan ketentuan Pengadilan Pajak. Kami tidak pernah menjanjikan kemenangan sengketa. Struktur fee kami disusun secara transparan dan profesional di dalam proposal tertulis.",
      },
      {
        question: "Bagaimana jika kami ingin meminta pendapat kedua (second opinion) dulu atas SKP kami?",
        answer:
          "Sangat bisa. Kami menyediakan layanan diagnostic/feasibility review singkat atas SKP dan SPHP Anda sebelum manajemen memutuskan untuk mengajukan keberatan atau banding.",
      },
    ],
    tags: ["keberatan", "banding", "pengadilan-pajak", "sengketa"],
  },
  {
    slug: "restitusi",
    enSlug: "tax-refund-assistance",
    title: "Restitusi PPN & PPh",
    enTitle: "VAT & corporate tax refund assistance",
    shortDescription:
      "Pra-audit kesiapan dokumen, pengajuan pengembalian pendahuluan atau restitusi normal, dan pendampingan pemeriksaan lebih bayar hingga dana cair.",
    enShortDescription:
      "Pre-filing document readiness review, preliminary or standard tax refund applications, and overpayment audit representation until disbursement.",
    lead: "Restitusi PPN atau PPh yang sah adalah hak arus kas perusahaan Anda. Kami melakukan pra-verifikasi dokumen sebelum pengajuan agar risiko koreksi dan denda selama pemeriksaan lebih bayar dapat diminimalkan.",
    enLead:
      "Legitimate VAT and corporate tax refunds belong in your working capital. We conduct rigorous pre-filing verification to minimize audit adjustments and accelerate disbursement.",
    icon: "receipt",
    segment: "both",
    ctaMode: "dual",
    isMvpCore: true,
    whoFor: [
      "Eksportir barang/jasa, perusahaan di Kawasan Berikat/KEK, dan rekanan pemungut PPN (BUMN/pemerintah) yang rutin mengalami lebih bayar PPN",
      "Perusahaan manufaktur atau properti yang sedang dalam fase investasi modal besar (capex) dengan PPN Masukan signifikan",
      "Wajib pajak yang memenuhi kriteria Pengembalian Pendahuluan (Pasal 17C/17D UU KUP atau PKP Berisiko Rendah)",
      "Perusahaan dengan SPT Tahunan PPh Badan Lebih Bayar akibat kredit pajak PPh 22/23/25 yang lebih besar dari pajak terutang",
    ],
    enWhoFor: [
      "Exporters, Bonded Zone/SEZ companies, and government/SOE vendors with recurring VAT overpayments",
      "Manufacturing or property companies in heavy capex phases accumulating significant input VAT",
      "Eligible taxpayers seeking fast-track Preliminary Tax Refunds (Low-Risk PKP)",
      "Corporations with Corporate Income Tax overpayments due to prepaid Article 22/23/25 tax credits",
    ],
    commonProblems: [
      {
        title: "Khawatir mengajukan restitusi karena takut dokumen belum siap diperiksa",
        description:
          "Pengajuan restitusi normal memicu pemeriksaan pajak. Tanpa pra-audit atas faktur pajak masukan dan arus uang/barang, risiko koreksi dapat menggerus nilai restitusi.",
      },
      {
        title: "Arus kas tertahan berbulan-bulan karena proses kelengkapan dokumen lambat",
        description:
          "Keterlambatan memenuhi permintaan peminjaman dokumen dari pemeriksa membuat pencairan SKPLB berlarut-larut.",
      },
      {
        title: "Belum memanfaatkan jalur Pengembalian Pendahuluan yang jauh lebih singkat",
        description:
          "Banyak wajib pajak yang sebenarnya memenuhi syarat pengembalian pendahuluan (1–3 bulan) namun tetap mengajukan lewat jalur pemeriksaan 12 bulan.",
      },
    ],
    deliverables: [
      "Pre-refund diagnostic report (uji validitas Faktur Pajak Masukan, arus uang, arus barang, dan ekualisasi)",
      "Rekomendasi jalur restitusi paling optimal (Pengembalian Pendahuluan vs Pemeriksaan Normal)",
      "Penyusunan berkas permohonan restitusi/pengembalian pendahuluan di Coretax",
      "Kertas kerja pengujian arus kas, arus piutang/utang, dan arus persediaan siap-periksa",
      "Pendampingan penuh selama pemeriksaan restitusi hingga terbitnya SKPLB / SKPPKP",
      "Pendampingan administrasi SPMKP hingga dana restitusi masuk ke rekening perusahaan",
    ],
    enDeliverables: [
      "Pre-refund diagnostic report (input VAT validity, cash flow, goods flow, and equalization test)",
      "Optimal refund pathway recommendation (Preliminary Fast-Track vs. Standard Audit)",
      "Preparation and filing of refund applications via Coretax",
      "Audit-ready working papers for cash flow, receivables/payables, and inventory flow",
      "Full representation during the overpayment tax audit through SKPLB/SKPPKP issuance",
      "Disbursement administration (SPMKP) until funds reach the corporate bank account",
    ],
    processSteps: [
      {
        step: "Tahap 1: Pra-audit kesiapan dokumen (Pre-refund review)",
        duration: "2–3 minggu",
        description:
          "Memeriksa kelengkapan faktur pajak masukan, bukti pembayaran, dokumen pengiriman/ekspor (PEB/PIB), dan menghitung estimasi nilai restitusi bersih yang aman.",
      },
      {
        step: "Tahap 2: Perbaikan & pengajuan permohonan",
        duration: "1 minggu",
        description:
          "Melakukan pembetulan bila diperlukan dan mengajukan permohonan restitusi melalui Coretax dengan indeks dokumen yang sudah tertata.",
      },
      {
        step: "Tahap 3: Pendampingan penelitian / pemeriksaan",
        duration: "1 bulan (pendahuluan) / s.d. 12 bulan (normal)",
        description:
          "Memenuhi permintaan dokumen tepat waktu, menjawab kuesioner/konfirmasi, dan mendampingi pembahasan SPHP atas lebih bayar.",
      },
      {
        step: "Tahap 4: Penerbitan SKPLB & pencairan rekening",
        duration: "2–4 minggu pasca-SKPLB",
        description:
          "Memastikan surat penunjukan rekening di Coretax sesuai hingga dana restitusi cair.",
      },
    ],
    faqs: [
      {
        question: "Berapa lama proses pencairan restitusi PPN?",
        answer:
          "Untuk jalur Pengembalian Pendahuluan (PKP Berisiko Rendah atau nilai tertentu sesuai PMK terbaru), proses penelitian berlangsung sekitar 1 bulan. Untuk jalur pemeriksaan normal, batas waktu pemeriksaan adalah maksimal 12 bulan sejak permohonan lengkap diterima.",
      },
      {
        question: "Apakah kami boleh melakukan pra-cek dulu sebelum memutuskan kompensasi atau restitusi?",
        answer:
          "Sangat disarankan. Kami selalu memulai dengan pre-refund diagnostic review agar Anda mengetahui berapa porsi Faktur Masukan yang 100% didukung arus uang dan barang sebelum menekan tombol restitusi.",
      },
      {
        question: "Bagaimana jika ada lawan transaksi kami yang belum melaporkan PPN-nya?",
        answer:
          "Dalam tahap pra-audit, kami menguji bukti pembayaran dari rekening perusahaan Anda ke vendor sehingga hak pengkreditan PPN Masukan tetap terlindungi sesuai ketentuan tanggung renteng di UU PPN.",
      },
    ],
    tags: ["restitusi", "ppn", "pemeriksaan", "arus-kas"],
  },
  {
    slug: "transfer-pricing",
    enSlug: "transfer-pricing",
    title: "Transfer pricing (Master File, Local File & CbCR)",
    enTitle: "Transfer pricing documentation & advisory",
    shortDescription:
      "Penyusunan TP Documentation sesuai PMK 172/2023, benchmarking analisis kesebandingan, perencanaan kebijakan harga transfer, dan pendampingan sengketa TP.",
    enShortDescription:
      "Preparation of Master File, Local File, and CbCR under PMK 172/2023, benchmarking studies, intercompany pricing policies, and TP dispute defense.",
    lead: "Transaksi afiliasi menjadi salah satu fokus utama pengawasan DJP. Kami menyusun dokumentasi Transfer Pricing (TP Doc) yang memenuhi ketentuan PMK 172/2023 secara tepat waktu sekaligus siap dipertahankan saat pemeriksaan.",
    enLead:
      "Intercompany transactions remain a primary focus of Indonesian tax audits. We prepare robust Transfer Pricing Documentation compliant with PMK 172/2023—delivered on time and built to withstand audit scrutiny.",
    icon: "arrow-left-right",
    segment: "korporasi",
    ctaMode: "corporate",
    isMvpCore: true,
    whoFor: [
      "Perusahaan PMA maupun grup PMDN yang memiliki transaksi hubungan istimewa (barang, jasa manajemen, royalti, pinjaman afiliasi)",
      "Wajib pajak yang melampaui ambang batas peredaran bruto atau nilai transaksi afiliasi wajib TP Doc sesuai PMK 172/2023",
      "Grup usaha yang sedang merancang kebijakan harga transfer (ex-ante) sebelum tahun buku berjalan",
      "Korporasi yang sedang menghadapi koreksi positif Transfer Pricing dalam SP2DK, Pemeriksaan, atau MAP/APA",
    ],
    enWhoFor: [
      "Foreign-owned (PMA) and domestic corporate groups with intercompany goods, services, royalty, or loan transactions",
      "Taxpayers meeting the statutory revenue or transaction thresholds under PMK 172/2023",
      "Groups designing ex-ante intercompany pricing policies and agreements",
      "Corporations defending Transfer Pricing adjustments in SP2DK, Tax Audits, MAP, or APA",
    ],
    commonProblems: [
      {
        title: "TP Doc baru disusun setelah diminta pemeriksa (melewati tenggat 4 bulan)",
        description:
          "Sesuai PMK 172/2023, Dokumen Induk dan Dokumen Lokal wajib tersedia paling lama 4 bulan setelah akhir tahun pajak. Keterlambatan membuat dokumen tidak diakui sebagai TP Doc melainkan hanya data biasa.",
      },
      {
        title: "Transaksi jasa manajemen & royalti dikoreksi karena kurangnya bukti manfaat (benefit test)",
        description:
          "Pengujian pendahuluan (preliminary steps) atas jasa intragrup dan lisensi intangibles menuntut bukti eksistensi dan manfaat ekonomi yang nyata.",
      },
      {
        title: "Pembanding (benchmarking) ditolak pemeriksa karena kriteria seleksi kurang tajam",
        description:
          "Analisis kesebandingan dan pemilihan metode TP membutuhkan penyaringan pembanding independen yang dapat dipertanggungjawabkan.",
      },
    ],
    deliverables: [
      "Dokumen Lokal (Local File) berbahasa Indonesia sesuai format dan lampiran PMK 172/2023",
      "Dokumen Induk (Master File) dan lokalisasi Master File grup multinasional",
      "Notifikasi dan Laporan Per Negara (CbCR) serta Ikhtisar Dokumen Induk & Lokal untuk lampiran SPT Tahunan",
      "Studi benchmarking pembanding independen (perdagangan, manufaktur, jasa, tingkat bunga pinjaman, royalti)",
      "Kertas kerja pengujian pendahuluan (benefit test) untuk jasa intragrup, royalti, dan pinjaman pemegang saham",
      "Pendampingan pertahanan TP Doc saat SP2DK/Pemeriksaan serta pengajuan APA/MAP",
    ],
    enDeliverables: [
      "Indonesian-language Local File fully compliant with PMK 172/2023 requirements",
      "Master File preparation or localization of global group Master Files",
      "CbCR Notification/Filing and Summary Form (Ikhtisar) for Corporate Annual Tax Return",
      "Independent benchmarking studies (distribution, manufacturing, services, intercompany loans, royalties)",
      "Preliminary benefit test working papers for intra-group services and intangibles",
      "TP audit defense representation and APA/MAP application support",
    ],
    processSteps: [
      {
        step: "Minggu 1–2: Pemetaan transaksi afiliasi & analisis fungsi (FAR)",
        duration: "2 minggu",
        description:
          "Mengidentifikasi seluruh pihak berelasi, mengumpulkan kontrak intragrup, dan melakukan wawancara analisis Fungsi, Aset, dan Risiko (FAR).",
      },
      {
        step: "Minggu 3–5: Pemilihan metode & studi benchmarking",
        duration: "2–3 minggu",
        description:
          "Menentukan metode harga transfer paling tepat, melakukan pencarian perusahaan pembanding independen, dan menghitung rentang kewajaran.",
      },
      {
        step: "Minggu 6–7: Penyusunan draf Master File & Local File",
        duration: "2 minggu",
        description:
          "Menulis narasi analisis industri, pengujian pendahuluan, dan analisis penerapan PKKU dalam Bahasa Indonesia baku.",
      },
      {
        step: "Minggu 8 (sebelum 30 April): Finalisasi & Ikhtisar SPT",
        duration: "Sebelum tenggat 4 bulan",
        description:
          "Memastikan dokumen bertanggal tersedia tepat waktu beserta lampiran Ikhtisar untuk SPT Tahunan PPh Badan.",
      },
    ],
    faqs: [
      {
        question: "Bagaimana cara mengetahui apakah perusahaan kami wajib menyusun TP Doc?",
        answer:
          "Anda dapat menggunakan tool gratis 'Cek Wajib TP Doc' di situs kami. Secara ringkas, kewajiban timbul jika ada transaksi afiliasi dan peredaran bruto tahun sebelumnya > Rp 50 miliar, atau transaksi barang afiliasi > Rp 20 miliar, atau transaksi jasa/bunga/royalti afiliasi > Rp 5 miliar (atau transaksi dengan pihak di yurisdiksi tarif pajak lebih rendah).",
      },
      {
        question: "Apakah Master File dari kantor pusat luar negeri bisa langsung dipakai di Indonesia?",
        answer:
          "Master File harus tersedia dalam Bahasa Indonesia dan memenuhi seluruh elemen rincian informasi yang dipersyaratkan dalam PMK 172/2023. Kami membantu menerjemahkan sekaligus menyesuaikan (lokalisasi) Master File global grup Anda.",
      },
      {
        question: "Kapan batas waktu ketersediaan TP Doc setiap tahunnya?",
        answer:
          "Paling lama 4 bulan setelah akhir tahun pajak (30 April untuk tahun buku Januari–Desember), dan harus diserahkan dalam waktu 1 bulan sejak diminta oleh DJP.",
      },
    ],
    tags: ["transfer-pricing", "pmk-172", "korporasi", "pma"],
  },
  {
    slug: "pajak-internasional-gmt",
    enSlug: "international-tax-gmt",
    title: "Pajak internasional & Pajak Minimum Global (GMT)",
    enTitle: "International tax & Global Minimum Tax (Pillar Two)",
    shortDescription:
      "Analisis penerapan P3B (Tax Treaty), pemotongan PPh Pasal 26 lintas negara, kesiapan Pajak Minimum Global (GloBE / Pilar Dua), dan struktur investasi PMA.",
    enShortDescription:
      "Tax treaty (DTA) relief analysis, cross-border Article 26 withholding, Pillar Two Global Minimum Tax (GloBE) readiness, and inbound/outbound structuring.",
    lead: "Transaksi lintas yurisdiksi menuntut kepatuhan atas Perjanjian Penghindaran Pajak Berganda (P3B), administrasi DGT Form, serta kesiapan atas aturan Pajak Minimum Global (Pilar Dua / GloBE) di Indonesia.",
    enLead:
      "Cross-border operations require strict compliance with Double Tax Agreements (DTA), DGT Form administration, and readiness for Indonesia's Global Minimum Tax (Pillar Two / GloBE) rules.",
    icon: "globe-2",
    segment: "korporasi",
    ctaMode: "corporate",
    isMvpCore: false,
    whoFor: [
      "Anak perusahaan grup multinasional (MNE) dengan pendapatan konsolidasi global ≥ EUR 750 juta yang terdampak aturan GMT / Pilar Dua",
      "Perusahaan Indonesia yang melakukan pembayaran dividen, bunga, royalti, atau jasa teknis ke luar negeri",
      "Investor asing (PMA) yang membutuhkan struktur kepemilikan dan pembiayaan lintas negara yang efisien dan patuh",
    ],
    enWhoFor: [
      "Indonesian subsidiaries of MNE groups with consolidated revenue ≥ EUR 750M subject to Pillar Two / GMT",
      "Companies making cross-border payments for dividends, interest, royalties, or technical services",
      "Foreign investors structuring inbound investments or regional holding operations",
    ],
    commonProblems: [
      {
        title: "Penerapan tarif P3B ditolak karena ketidaksesuaian DGT Form atau uji Beneficial Owner",
        description:
          "Kesalahan pengisian Surat Keterangan Domisili (SKD/DGT) atau gagalnya pengujian substansi ekonomi menyebabkan koreksi PPh Pasal 26 menjadi tarif 20%.",
      },
      {
        title: "Kewajiban pelaporan dan perhitungan Tarif Pajak Efektif (ETR) GloBE / QDMTT",
        description:
          "Grup multinasional yang memanfaatkan fasilitas tax holiday atau tax allowance di Indonesia perlu menilai dampak Top-up Tax dari aturan Pajak Minimum Global 15%.",
      },
    ],
    deliverables: [
      "Kajian penerapan P3B (Tax Treaty), uji Beneficial Owner, dan verifikasi kelengkapan SKD/DGT Form",
      "Penilaian dampak (impact assessment) Pajak Minimum Global (Pilar Dua / IIR / UTPR / QDMTT) untuk entitas Indonesia",
      "Analisis risiko Bentuk Usaha Tetap (BUT / Permanent Establishment) atas aktivitas bisnis lintas batas",
      "Pendampingan kepatuhan pelaporan GIR (GloBE Information Return) dan SPT terkait GMT",
    ],
    enDeliverables: [
      "Tax Treaty eligibility review, Beneficial Ownership testing, and DGT Form verification",
      "Pillar Two / Global Minimum Tax (IIR, UTPR, QDMTT) impact assessment for Indonesian constituent entities",
      "Permanent Establishment (PE) risk assessment for cross-border operations",
      "GloBE Information Return (GIR) and domestic GMT compliance support",
    ],
    processSteps: [
      {
        step: "Tahap 1: Pemetaan struktur grup & transaksi lintas negara",
        duration: "1–2 minggu",
        description: "Menginventarisasi arus pembayaran lintas yurisdiksi, entitas konstituen grup, dan fasilitas pajak yang dimiliki.",
      },
      {
        step: "Tahap 2: Analisis teknis & simulasi perhitungan",
        duration: "2–3 minggu",
        description: "Menyusun analisis P3B/BUT atau simulasi Transitional SafeHarbour & perhitungan ETR GloBE.",
      },
      {
        step: "Tahap 3: Rekomendasi & implementasi kepatuhan",
        duration: "1–2 minggu",
        description: "Menyampaikan laporan rekomendasi tertulis, checklist dokumen DGT, dan panduan pelaporan kepada manajemen.",
      },
    ],
    faqs: [
      {
        question: "Siapa saja yang terkena ketentuan Pajak Minimum Global (GMT) di Indonesia?",
        answer:
          "Ketentuan Pajak Minimum Global (15%) berlaku bagi entitas konstituen dari Grup Perusahaan Multinasional (MNE) yang memiliki peredaran bruto konsolidasi tahunan minimal EUR 750 juta dalam sedikitnya 2 dari 4 tahun pajak sebelum tahun pajak yang diuji.",
      },
      {
        question: "Bagaimana jika lawan transaksi luar negeri terlambat memberikan DGT Form?",
        answer:
          "Untuk dapat menerapkan tarif P3B pada saat pemotongan, tanda terima SKD WPLN harus sudah tersedia sebelum batas penyampaian SPT Masa masa pajak terutangnya penghasilan. Kami membantu menyusun SOP verifikasi vendor asing agar hal ini tidak terlewat.",
      },
    ],
    tags: ["pajak-internasional", "gmt", "pilar-dua", "pma"],
  },
  {
    slug: "tax-planning-due-diligence",
    enSlug: "tax-planning-due-diligence",
    title: "Tax planning, restrukturisasi & due diligence",
    enTitle: "Tax planning, restructuring & M&A due diligence",
    shortDescription:
      "Perencanaan pajak korporasi sesuai koridor regulasi, kajian pajak atas merger/akuisisi/spin-off, serta Tax Due Diligence untuk aksi korporasi.",
    enShortDescription:
      "Regulatory-compliant tax planning, merger/acquisition/spin-off structuring, and comprehensive Tax Due Diligence for corporate transactions.",
    lead: "Setiap aksi korporasi—mulai dari ekspansi, pendanaan, restrukturisasi grup, hingga akuisisi—memiliki konsekuensi pajak yang material. Kami membantu manajemen memetakan eksposur dan struktur transaksi yang efisien serta patuh.",
    enLead:
      "Every corporate action—from expansion and fundraising to group restructuring and M&A—carries material tax implications. We help leadership quantify exposures and structure compliant transactions.",
    icon: "clipboard-list",
    segment: "korporasi",
    ctaMode: "corporate",
    isMvpCore: false,
    whoFor: [
      "Investor, private equity, atau korporasi yang akan mengakuisisi saham/aset perusahaan target (Buy-side / Vendor Tax Due Diligence)",
      "Grup usaha yang merencanakan penggabungan (merger), peleburan, pemekaran (spin-off), atau pengambilalihan dengan nilai buku",
      "CFO yang membutuhkan opini pajak tertulis (tax opinion) sebelum mengeksekusi kontrak komersial strategis",
    ],
    enWhoFor: [
      "Investors, private equity funds, and corporations conducting Buy-side or Vendor Tax Due Diligence",
      "Corporate groups planning mergers, spin-offs, or tax-neutral book-value restructurings",
      "CFOs seeking formal written tax opinions prior to executing major commercial agreements",
    ],
    commonProblems: [
      {
        title: "Eksposur pajak historis perusahaan target baru ketahuan setelah akuisisi selesai",
        description:
          "Tanpa Tax Due Diligence yang mendalam atas 5 tahun pajak terakhir, pembeli menanggung risiko SKPKB historis perusahaan yang diakuisisi.",
      },
      {
        title: "Restrukturisasi grup memicu PPh pengalihan harta dan PPN karena tidak memenuhi syarat nilai buku",
        description:
          "Penggunaan nilai buku dalam merger atau spin-off membutuhkan persetujuan DJP dan pemenuhan uji tujuan bisnis (business purpose test).",
      },
    ],
    deliverables: [
      "Laporan Tax Due Diligence (Red Flag Report & Full Report) lengkap dengan kuantifikasi eksposur historis",
      "Rekomendasi klausul proteksi pajak (tax indemnity & warranty) dalam Perjanjian Jual Beli Saham (SPA)",
      "Kajian struktur transaksi (tax structuring paper) beserta perbandingan beban pajak tiap opsi",
      "Pendampingan permohonan penggunaan nilai buku untuk merger/spin-off ke DJP",
    ],
    enDeliverables: [
      "Tax Due Diligence Report (Red Flag & Full Report) with quantified historical tax exposures",
      "Tax indemnity and warranty clause recommendations for Share Purchase Agreements (SPA)",
      "Transaction structuring paper comparing tax implications across commercial options",
      "Filing and representation for tax-neutral book-value restructuring approvals",
    ],
    processSteps: [
      {
        step: "Minggu 1: Penandatanganan NDA & pembukaan Data Room",
        duration: "3–5 hari kerja",
        description: "Menyepakati lingkup tahun pajak, menandatangani NDA, dan mengirimkan daftar permintaan dokumen (Information Request List).",
      },
      {
        step: "Minggu 2–3: Pengujian kepatuhan historis & wawancara manajemen",
        duration: "1–2 minggu",
        description: "Menelaah SPT, laporan audit, rekonsiliasi fiskal, dan riwayat SP2DK/pemeriksaan serta tanya jawab dengan tim finance target.",
      },
      {
        step: "Minggu 4: Penyampaian Red Flag / Full TDD Report",
        duration: "1 minggu",
        description: "Mempresentasikan temuan eksposur risiko rendah/sedang/tinggi dan rekomendasi mitigasi dalam dokumen transaksi.",
      },
    ],
    faqs: [
      {
        question: "Berapa tahun buku yang biasanya diperiksa dalam Tax Due Diligence?",
        answer:
          "Umumnya mencakup 3 hingga 5 tahun pajak terakhir yang belum daluwarsa penetapan pajak sesuai UU KUP, ditambah tahun berjalan.",
      },
      {
        question: "Apakah PrimeTax bersedia menandatangani NDA sebelum kami membagikan ringkasan transaksi?",
        answer:
          "Tentu. Untuk seluruh diskusi transaksi korporasi dan M&A, kami siap menandatangani Non-Disclosure Agreement (NDA) sebelum pertukaran informasi.",
      },
    ],
    tags: ["tax-planning", "due-diligence", "korporasi", "m-and-a"],
  },
  {
    slug: "tax-health-check",
    enSlug: "tax-health-check",
    title: "Tax health check / diagnostic review",
    enTitle: "Tax health check & diagnostic review",
    shortDescription:
      "Simulasi pemeriksaan internal atas kepatuhan PPh Badan, PPh Potput, dan PPN untuk menemukan serta memperbaiki celah risiko sebelum diperiksa DJP.",
    enShortDescription:
      "Internal mock-audit of corporate income tax, withholding taxes, and VAT to identify and remediate compliance gaps before a tax office audit.",
    lead: "Jangan menunggu datangnya SP2DK atau pemeriksaan untuk mengetahui posisi risiko pajak perusahaan Anda. Layanan Tax Health Check kami menguji ekualisasi dan kepatuhan dokumen Anda sebagaimana pemeriksa pajak mengujinya.",
    enLead:
      "Don't wait for an SP2DK inquiry or tax audit notice to discover compliance gaps. Our Tax Health Check tests your fiscal equalizations and documentation using the same methodology applied by tax auditors.",
    icon: "shield-check",
    segment: "both",
    ctaMode: "dual",
    isMvpCore: false,
    whoFor: [
      "Perusahaan yang tumbuh pesat dan ingin memastikan administrasi pajaknya siap menghadapi pemeriksaan",
      "CFO atau Direktur baru yang ingin mengetahui potret kepatuhan pajak historis perusahaan yang dipimpinnya",
      "Wajib pajak yang akan mengajukan restitusi atau sedang bersiap menutup buku tahunan",
    ],
    enWhoFor: [
      "Fast-growing companies ensuring their tax administration is audit-ready",
      "Incoming CFOs or Directors seeking an objective baseline of historical tax compliance",
      "Taxpayers preparing for a major refund claim or annual book closing",
    ],
    commonProblems: [
      {
        title: "Selisih ekualisasi antara laporan keuangan dan SPT Masa belum pernah diuji",
        description:
          "Sistem DJP secara otomatis membandingkan akun biaya di SPT Tahunan dengan objek PPh 21/23/4(2) serta omzet dengan PPN.",
      },
      {
        title: "Biaya dikoreksi fiskal karena bukti potong atau daftar nominatif belum lengkap",
        description:
          "Pengeluaran promosi, entertainment, dan reimbursement sering tidak dapat dibiayakan secara fiskal hanya karena lampiran formalnya kurang.",
      },
    ],
    deliverables: [
      "Kertas kerja ekualisasi menyeluruh (Peredaran Usaha vs PPN; Biaya Gaji vs PPh 21; Biaya Jasa/Sewa vs PPh 23/4(2))",
      "Laporan temuan risiko (High / Medium / Low) beserta estimasi potensi eksposur pajak dan sanksi",
      "Rencana aksi perbaikan (remediation plan), termasuk draf pembetulan SPT bila diperlukan",
      "Sesi presentasi temuan kepada manajemen dan tim finance/akuntansi",
    ],
    enDeliverables: [
      "Comprehensive fiscal equalization working papers across CIT, VAT, and Withholding Taxes",
      "Risk-ranked diagnostic report (High / Medium / Low) with quantified exposure estimates",
      "Actionable remediation plan, including amended return drafts where required",
      "Executive readout session with management and the finance team",
    ],
    processSteps: [
      {
        step: "Minggu 1: Pengumpulan buku besar, laporan keuangan & SPT",
        duration: "5 hari kerja",
        description: "Menerima general ledger (GL), trial balance, SPT Tahunan, dan SPT Masa untuk periode yang diuji.",
      },
      {
        step: "Minggu 2–3: Pengujian ekualisasi & uji petik dokumen (sampling)",
        duration: "10 hari kerja",
        description: "Menjalankan pengujian ekualisasi per akun dan memeriksa sampel kontrak/faktur bernilai material.",
      },
      {
        step: "Minggu 4: Laporan diagnostik & pendampingan perbaikan",
        duration: "5 hari kerja",
        description: "Menyerahkan laporan lengkap dan memandu tim internal memperbaiki administrasi atau melakukan pembetulan SPT.",
      },
    ],
    faqs: [
      {
        question: "Berapa lama pengerjaan Tax Health Check untuk 1 tahun pajak?",
        answer:
          "Rata-rata 3 hingga 4 minggu kerja sejak data general ledger (GL) dan SPT diterima lengkap.",
      },
      {
        question: "Apakah untuk UKM tersedia versi Tax Health Check yang lebih ringkas?",
        answer:
          "Ya. Untuk klien UKM pada Paket Audit Ready, Tax Health Check tahunan sudah termasuk di dalam paket.",
      },
    ],
    tags: ["health-check", "diagnostik", "sp2dk", "kepatuhan"],
  },
  {
    slug: "pendirian-usaha",
    enSlug: "company-incorporation-tax-registration",
    title: "Pendirian usaha & perizinan pajak (PT, PT Perorangan, CV, NPWP & PKP)",
    enTitle: "Company incorporation & tax registration (PT, CV, NPWP & PKP)",
    shortDescription:
      "Pendirian PT Umum, PT Perorangan, atau CV lengkap dengan NIB OSS, pendaftaran NPWP Badan, aktivasi Coretax, dan pengukuhan PKP.",
    enShortDescription:
      "Incorporation of standard PT, single-member PT, or CV complete with OSS NIB licensing, Corporate NPWP, Coretax activation, and PKP VAT registration.",
    lead: "Mulai usaha dengan struktur badan hukum dan administrasi pajak yang benar sejak hari pertama. Kami membantu pemilihan bentuk usaha, pemilihan KBLI yang tepat, hingga aktivasi akun Coretax dan pengukuhan PKP.",
    enLead:
      "Start your business with the right legal structure and tax setup from day one. We guide you through entity selection, KBLI classification, Coretax activation, and VAT (PKP) registration.",
    icon: "building-2",
    segment: "ukm",
    ctaMode: "sme",
    isMvpCore: false,
    whoFor: [
      "Founder startup dan pemilik usaha yang ingin meningkatkan status usaha dari perorangan ke PT atau PT Perorangan",
      "Usaha yang membutuhkan status PKP (Pengusaha Kena Pajak) untuk mengikuti tender korporasi/pemerintah",
      "Pengusaha yang ingin memastikan pemilihan kode KBLI sesuai dengan rezim perpajakan usahanya",
    ],
    enWhoFor: [
      "Founders and business owners upgrading from sole proprietorship to a PT or Single-Member PT",
      "Businesses requiring PKP (VAT-registered) status to onboard with corporate or government clients",
      "Entrepreneurs needing proper KBLI business classification aligned with tax regulations",
    ],
    commonProblems: [
      {
        title: "Salah memilih KBLI sehingga terkendala saat pengukuhan PKP atau perizinan",
        description:
          "Ketidaksesuaian kode KBLI di akta dan NIB dengan kegiatan usaha riil sering menghambat verifikasi lapangan kantor pajak.",
      },
      {
        title: "Sudah punya akta PT dan NPWP tetapi bingung kewajiban pajak bulan pertama",
        description:
          "Begitu NPWP Badan terbit, kewajiban administrasi pajak mulai berjalan meskipun perusahaan belum mencatatkan penjualan.",
      },
    ],
    deliverables: [
      "Konsultasi pemilihan bentuk badan usaha (PT Umum vs PT Perorangan vs CV) dan simulasi beban pajak",
      "Pengurusan Akta Notaris & SK Kemenkumham (melalui rekanan notaris resmi) serta NIB OSS RBA",
      "Pendaftaran NPWP Badan, aktivasi akun Coretax perusahaan, dan pengaturan kuasa/PIC pajak",
      "Pengajuan Pengukuhan PKP dan pendampingan verifikasi kantor pajak",
      "Panduan onboarding kewajiban pajak bulan pertama untuk tim Anda",
    ],
    enDeliverables: [
      "Entity structure consultation (PT vs. Single-Member PT vs. CV) and tax burden simulation",
      "Notarial Deed, Ministry of Law approval, and OSS RBA Business Identification Number (NIB)",
      "Corporate NPWP registration, Coretax account activation, and PIC role configuration",
      "PKP (VAT) registration filing and tax office verification support",
      "First-month tax compliance onboarding guide for your team",
    ],
    processSteps: [
      {
        step: "Hari 1–2: Konsultasi struktur, KBLI & pengecekan nama",
        duration: "1–2 hari kerja",
        description: "Menentukan bentuk usaha, modal dasar/disetor, susunan pengurus, dan kode KBLI yang tepat.",
      },
      {
        step: "Hari 3–7: Penerbitan Akta, SK, NPWP & NIB",
        duration: "3–5 hari kerja",
        description: "Penandatanganan akta, pengesahan SK Kemenkumham, penerbitan NPWP Badan, dan NIB OSS.",
      },
      {
        step: "Minggu 2–3: Aktivasi Coretax & Pengukuhan PKP",
        duration: "5–10 hari kerja",
        description: "Mengatur akses Coretax perusahaan dan mendampingi proses pengukuhan PKP hingga siap menerbitkan faktur.",
      },
    ],
    faqs: [
      {
        question: "Apa bedanya PT Perorangan dengan PT biasa dari sisi pajak?",
        answer:
          "PT Perorangan didirikan oleh 1 orang dan memenuhi kriteria usaha mikro dan kecil. Dari sisi pajak, PT Perorangan tetap merupakan subjek pajak badan yang berhak memanfaatkan tarif PPh Final UMKM 0,5% (selama memenuhi syarat omzet ≤ Rp 4,8 miliar dan jangka waktu tertentu) atau fasilitas pengurangan tarif PPh Badan Pasal 31E.",
      },
      {
        question: "Apakah usaha baru dengan omzet di bawah Rp 4,8 miliar boleh langsung mengajukan PKP?",
        answer:
          "Boleh. Pengusaha dengan omzet di bawah Rp 4,8 miliar dapat memilih untuk dikukuhkan sebagai PKP secara sukarela, misalnya karena syarat dari pelanggan korporasi.",
      },
    ],
    tags: ["pendirian-pt", "ukm", "pkp", "coretax"],
  },
  {
    slug: "coretax",
    enSlug: "coretax-readiness-migration",
    title: "Kesiapan & pendampingan Coretax DJP",
    enTitle: "Coretax DJP readiness & migration support",
    shortDescription:
      "Pendampingan pengaturan akses role/impersonate Coretax, integrasi e-Faktur & e-Bupot Unifikasi, pelatihan staf finance, dan rekonsiliasi buku besar pajak (Taxpayer Ledger).",
    enShortDescription:
      "Coretax role/impersonation setup, e-Invoice & unified e-Bupot workflow integration, finance team training, and Taxpayer Ledger reconciliation.",
    lead: "Sistem Coretax mengintegrasikan seluruh administrasi pendaftaran, e-Faktur, e-Bupot, SPT, dan buku besar wajib pajak (Taxpayer Ledger) dalam satu portal. Kami membantu tim finance Anda bertransisi tanpa gangguan operasional.",
    enLead:
      "Indonesia's Coretax system unifies tax registration, e-Invoicing, withholding slips, tax returns, and the Taxpayer Ledger into a single portal. We help your finance team transition smoothly without operational disruption.",
    icon: "monitor-check",
    segment: "both",
    ctaMode: "sme",
    isMvpCore: false,
    whoFor: [
      "Tim finance dan pajak perusahaan yang mengalami kendala teknis atau selisih saldo di Taxpayer Ledger Coretax",
      "PKP dengan volume faktur tinggi yang perlu menyiapkan format XML/upload massal e-Faktur dan bukti potong di Coretax",
      "Pemilik UKM yang ingin pengaturan akses wakil/kuasa (impersonate) dan sertifikat elektronik Coretax beres dengan cepat",
    ],
    enWhoFor: [
      "Corporate finance and tax teams resolving discrepancies in the Coretax Taxpayer Ledger",
      "High-volume PKP businesses configuring bulk XML uploads for Coretax e-Invoices and withholding slips",
      "SME owners needing streamlined role delegation (impersonation) and digital certificate setup",
    ],
    commonProblems: [
      {
        title: "Pengaturan otorisasi pengurus & staf (impersonating) belum tepat",
        description:
          "Di Coretax, setiap penandatangan dan drafter harus memiliki akun pribadi yang ditautkan dengan peran (role) yang sesuai pada akun badan.",
      },
      {
        title: "Data invoice dan bukti potong dari ERP/software akuntansi gagal terunggah",
        description:
          "Perubahan skema XML, kode objek pajak, dan validasi NIK/NPWP 16 digit membutuhkan penyesuaian template kerja.",
      },
    ],
    deliverables: [
      "Audit kesiapan akun Coretax Badan, pengaturan role pengurus/drafter/signer, dan sertifikat digital",
      "Template konversi Excel/XML siap pakai untuk unggah massal e-Faktur dan e-Bupot di Coretax",
      "Rekonsiliasi saldo buku besar pajak (Taxpayer Ledger) dengan catatan akuntansi perusahaan",
      "Pelatihan praktik langsung (hands-on workshop) untuk staf finance dan pajak Anda",
    ],
    enDeliverables: [
      "Coretax corporate account readiness review, role/impersonation mapping, and digital certificate setup",
      "Ready-to-use Excel/XML templates for bulk e-Invoice and e-Bupot uploads",
      "Taxpayer Ledger balance reconciliation against internal accounting records",
      "Hands-on Coretax operational training workshop for your finance and tax staff",
    ],
    processSteps: [
      {
        step: "Hari 1–3: Diagnostik akun & pemetaan alur transaksi",
        duration: "2–3 hari kerja",
        description: "Memeriksa status akses pengurus, sertifikat elektronik, dan memetakan jenis faktur serta bukti potong rutin perusahaan.",
      },
      {
        step: "Hari 4–10: Penyiapan template, SOP & rekonsiliasi ledger",
        duration: "5–7 hari kerja",
        description: "Menyesuaikan template unggah data dari sistem akuntansi Anda dan menyamakan saldo Taxpayer Ledger.",
      },
      {
        step: "Pelatihan tim & pendampingan siklus pelaporan pertama",
        duration: "1 siklus masa pajak",
        description: "Mendampingi tim Anda secara langsung saat penerbitan faktur, pembuatan kode deposit/billing, dan pelaporan SPT Masa.",
      },
    ],
    faqs: [
      {
        question: "Apakah konsultan pajak bisa diberikan akses khusus di dalam Coretax?",
        answer:
          "Ya. Sistem Coretax menyediakan fitur penunjukan kuasa/wakil resmi sehingga konsultan yang ditunjuk dapat menyusun draf SPT atau bukti potong, sementara persetujuan akhir dan pembayaran tetap di bawah kendali pengurus perusahaan Anda.",
      },
      {
        question: "Apakah tersedia pelatihan Coretax khusus untuk tim internal perusahaan kami?",
        answer:
          "Tersedia. Kami menyelenggarakan pelatihan in-house (online maupun tatap muka) yang langsung menggunakan studi kasus transaksi riil perusahaan Anda.",
      },
    ],
    tags: ["coretax", "e-faktur", "kepatuhan", "ukm", "korporasi"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug || s.enSlug === slug);
}
