import type { LandingPage } from "@/content/landing-pages";

/** Indonesian landing pages. Slugs must match content/landing-pages.ts. */
export const landingPagesId: LandingPage[] = [
  {
    slug: "tax-consultant-pma-indonesia",
    eyebrow: "Advisory Pajak PMA",
    headline: "Konsultan Pajak untuk Perusahaan PMA di Indonesia",
    intro:
      "Advisory pajak Indonesia yang terstruktur bagi perusahaan penanaman modal asing — mencakup kewajiban pajak korporasi, pembayaran lintas negara, penerapan P3B, dan transfer pricing, dijelaskan dengan jelas bagi manajemen lokal maupun kantor pusat regional.",
    ctaLabel: "Diskusikan Persoalan Pajak PMA Anda",
    audience: [
      { title: "Direksi dan CFO PT PMA", description: "Pimpinan yang bertanggung jawab atas kepatuhan dan eksposur pajak di Indonesia." },
      { title: "Tim keuangan dan pajak regional", description: "Tim yang membutuhkan penjelasan persoalan pajak Indonesia dalam bahasa Inggris dengan format yang konsisten." },
      { title: "Investor asing yang masuk ke Indonesia", description: "Investor yang mengevaluasi struktur, pembiayaan, dan model operasional." },
    ],
    issues: [
      { title: "Pembayaran ke afiliasi luar negeri", description: "PPh potong, PPN atas jasa luar negeri, dan pembebanan imbalan jasa, royalti, serta bunga." },
      { title: "Penerapan P3B", description: "Persyaratan prosedural dan syarat substansi untuk tarif P3B yang lebih rendah." },
      { title: "Transaksi afiliasi", description: "Dokumentasi transfer pricing dan kewajaran harga atas transaksi intragrup." },
      { title: "SP2DK dan pemeriksaan", description: "SP2DK dan pemeriksaan yang berfokus pada transaksi lintas negara dan afiliasi." },
    ],
    scope: [
      "Advisory PPh Badan, PPN, dan PPh potong/pungut",
      "Review pembayaran dan kontrak lintas negara",
      "Kelayakan dan dokumentasi P3B",
      "Review pinjaman pemegang saham dan struktur pembiayaan",
      "Penilaian risiko dan dokumentasi transfer pricing",
      "Pendampingan SP2DK dan pemeriksaan pajak",
    ],
    checklist: [
      "Apakah pembayaran ke afiliasi luar negeri dikarakterisasi sesuai perjanjian yang mendasarinya?",
      "Apakah dokumen P3B sudah tersedia sebelum pemotongan dilakukan?",
      "Apakah perusahaan dapat membuktikan manfaat jasa intragrup yang dibayarnya?",
      "Apakah transaksi afiliasi telah diperiksa terhadap kewajiban dokumentasi yang berlaku?",
      "Apakah laporan keuangan komersial telah direkonsiliasi dengan SPT PPh Badan?",
    ],
    serviceSlug: "international-tax-pma",
    insightSlugs: ["cross-border-payments-pma-withholding-tax", "transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "Apakah Anda bekerja dalam bahasa Inggris?",
        answer:
          "Ya. Rapat dan deliverable dapat disampaikan dalam bahasa Inggris atau Indonesia, sesuai kebutuhan pemangku kepentingan lokal dan regional.",
      },
      {
        question: "Apakah Anda dapat mendampingi PMA yang masih dalam proses pendirian?",
        answer:
          "Ya. Advis awal tentang struktur, pembiayaan, dan perjanjian intragrup umumnya lebih efisien dibandingkan memperbaiki posisi di kemudian hari.",
      },
    ],
    seo: {
      title: "Konsultan Pajak PMA Indonesia — Advisory untuk Perusahaan Penanaman Modal Asing",
      description:
        "Konsultan pajak untuk perusahaan PMA di Indonesia: pembayaran lintas negara, P3B, PPh Pasal 26, transfer pricing, serta pendampingan SP2DK dan pemeriksaan.",
    },
  },
  {
    slug: "large-taxpayer-tax-advisory",
    eyebrow: "Advisory Wajib Pajak Besar",
    headline: "Advisory Pajak untuk Wajib Pajak Besar dan Grup Korporasi",
    intro:
      "Advisory pajak tingkat eksekutif bagi perusahaan besar dan grup multi-entitas — berfokus pada tata kelola, visibilitas risiko, dan posisi yang terdokumentasi dengan baik atas persoalan material.",
    ctaLabel: "Ajukan Diagnostik Risiko Pajak",
    audience: [
      { title: "CFO dan Finance Director", description: "Pimpinan yang membutuhkan risiko pajak tersaji jelas untuk keputusan tingkat direksi." },
      { title: "Tax Director dan tax manager", description: "Tim yang membutuhkan second opinion atau kapasitas tambahan untuk persoalan kompleks." },
      { title: "Grup korporasi", description: "Grup dengan beberapa entitas di Indonesia dan proses yang belum seragam." },
    ],
    issues: [
      { title: "Visibilitas risiko pajak", description: "Manajemen membutuhkan gambaran eksposur yang terkonsolidasi lintas entitas dan jenis pajak." },
      { title: "Transaksi material", description: "Restrukturisasi, akuisisi, dan lini bisnis baru memerlukan analisis pajak sebelum dieksekusi." },
      { title: "Intensitas pemeriksaan", description: "Perusahaan besar diawasi lebih ketat dan lebih sering menerima permintaan data." },
      { title: "Posisi berbasis interpretasi", description: "Posisi yang bergantung pada interpretasi memerlukan dokumentasi yang dapat diandalkan kemudian." },
    ],
    scope: [
      "Tax risk assessment dan register risiko",
      "Perancangan atau review kerangka tax governance",
      "Corporate tax review dan second opinion",
      "Opini pajak tertulis atas persoalan material",
      "Advisory pajak transaksi dan restrukturisasi",
      "Kesiapan pemeriksaan dan strategi sengketa",
    ],
    checklist: [
      "Apakah manajemen menerima gambaran risiko pajak yang terkonsolidasi secara berkala?",
      "Apakah ambang eskalasi persoalan pajak telah ditetapkan?",
      "Apakah posisi pajak yang signifikan terdokumentasi beserta dasar dan asumsinya?",
      "Apakah proses telah seragam di seluruh entitas grup?",
      "Apakah grup siap menghadapi pemeriksaan atas posisinya yang paling signifikan?",
    ],
    serviceSlug: "tax-advisory",
    insightSlugs: ["tax-governance-framework-large-companies", "preparing-for-a-tax-audit-in-indonesia"],
    faqs: [
      {
        question: "Apakah layanan ini hanya untuk perusahaan yang terdaftar di KPP Wajib Pajak Besar?",
        answer:
          "Tidak. 'Wajib pajak besar' di sini menggambarkan perusahaan dengan skala dan kompleksitas yang signifikan. Pendaftaran di KPP Wajib Pajak Besar merupakan klasifikasi administratif oleh Direktorat Jenderal Pajak dan bukan syarat untuk layanan ini.",
      },
      {
        question: "Apakah Anda dapat bekerja bersama tim pajak internal kami?",
        answer:
          "Ya. Penugasan umumnya dirancang untuk melengkapi tim internal — misalnya second opinion, review tertentu, atau kapasitas tambahan selama pemeriksaan.",
      },
    ],
    seo: {
      title: "Advisory Pajak Wajib Pajak Besar — Tax Governance & Risiko Pajak",
      description:
        "Advisory pajak bagi wajib pajak besar dan grup korporasi di Indonesia: tax risk assessment, tax governance, second opinion, dan kesiapan pemeriksaan.",
    },
  },
  {
    slug: "international-tax-consultant-indonesia",
    eyebrow: "International Tax",
    headline: "Konsultan Pajak Internasional di Indonesia",
    intro:
      "Advisory atas transaksi lintas negara, P3B, PPh potong, dan risiko Bentuk Usaha Tetap bagi grup multinasional yang beroperasi di Indonesia.",
    ctaLabel: "Diskusikan Transaksi Lintas Negara Anda",
    audience: [
      { title: "Anak perusahaan multinasional", description: "Entitas Indonesia dari grup internasional." },
      { title: "Perusahaan asing", description: "Subjek pajak luar negeri yang memberikan jasa atau memperoleh penghasilan di Indonesia." },
      { title: "Kantor pusat regional", description: "Tim yang mengawasi operasional Indonesia dari luar negeri." },
    ],
    issues: [
      { title: "PPh potong", description: "PPh Pasal 26 dan fasilitas P3B atas pembayaran ke luar negeri." },
      { title: "Bentuk Usaha Tetap", description: "Kegiatan yang dapat menimbulkan kehadiran kena pajak di Indonesia." },
      { title: "Jasa dari luar negeri", description: "PPN atas pemanfaatan jasa dan barang tidak berwujud dari luar negeri." },
      { title: "Struktur", description: "Struktur investasi, pembiayaan, dan repatriasi." },
    ],
    scope: [
      "Review transaksi lintas negara",
      "Analisis P3B",
      "Withholding tax advisory",
      "Review risiko Bentuk Usaha Tetap",
      "International tax structuring",
    ],
    checklist: [
      "Apakah kontrak dengan pihak asing menjelaskan jasa dan lokasinya dengan akurat?",
      "Apakah dokumen P3B diperoleh sebelum pembayaran dilakukan?",
      "Apakah kegiatan personel asing di Indonesia dipantau terkait risiko BUT?",
      "Apakah PPN atas jasa luar negeri telah disetor sendiri bila diwajibkan?",
    ],
    serviceSlug: "international-tax-pma",
    insightSlugs: ["cross-border-payments-pma-withholding-tax"],
    faqs: [
      {
        question: "Apakah Anda dapat memberikan advis kepada pihak asing sekaligus entitas Indonesia?",
        answer:
          "Kami memberikan advis atas implikasi pajak Indonesia. Bila diperlukan advis pajak negara lain, kami dapat berkoordinasi dengan konsultan grup di yurisdiksi tersebut.",
      },
    ],
    seo: {
      title: "Konsultan Pajak Internasional Indonesia — P3B & Pajak Lintas Negara",
      description:
        "Konsultan pajak internasional di Indonesia: analisis P3B, PPh Pasal 26, risiko Bentuk Usaha Tetap, dan struktur pajak lintas negara.",
    },
  },
  {
    slug: "transfer-pricing-consultant-indonesia",
    eyebrow: "Transfer Pricing",
    headline: "Konsultan Transfer Pricing di Indonesia",
    intro:
      "Penilaian risiko, dokumentasi, dan benchmarking transfer pricing yang mencerminkan cara bisnis Anda benar-benar beroperasi.",
    ctaLabel: "Tinjau Risiko Transfer Pricing Anda",
    audience: [
      { title: "Perusahaan dengan transaksi afiliasi", description: "Entitas lokal dari grup domestik maupun asing." },
      { title: "Tim pajak grup", description: "Tim yang menyelaraskan dokumentasi Indonesia dengan kebijakan global." },
      { title: "Pimpinan keuangan", description: "Eksekutif yang bertanggung jawab atas hasil harga intragrup." },
    ],
    issues: [
      { title: "Dokumentasi", description: "Kewajiban Master File dan Local File beserta isinya." },
      { title: "Jasa intragrup", description: "Bukti manfaat dan harga atas biaya jasa intragrup." },
      { title: "Profitabilitas", description: "Margin yang berbeda dari yang diharapkan berdasarkan peran entitas." },
      { title: "Konsistensi", description: "Keselarasan Local File, kebijakan global, dan SPT." },
    ],
    scope: [
      "Transfer pricing risk assessment",
      "Master File dan Local File",
      "Analisis benchmarking",
      "Review transaksi afiliasi",
      "Intercompany pricing review",
    ],
    checklist: [
      "Apakah ambang batas dokumentasi telah diperiksa untuk tahun berjalan?",
      "Apakah analisis fungsional mencerminkan kondisi sebenarnya?",
      "Apakah perjanjian intragrup sudah diperbarui?",
      "Apakah tersedia bukti manfaat atas jasa intragrup?",
    ],
    serviceSlug: "transfer-pricing",
    insightSlugs: ["transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "Berapa lama penyusunan Local File?",
        answer:
          "Bergantung pada jumlah dan kompleksitas transaksi serta ketersediaan data. Linimasa kami sepakati pada tahap penetapan ruang lingkup.",
      },
    ],
    seo: {
      title: "Konsultan Transfer Pricing Indonesia — Dokumentasi & Benchmarking",
      description:
        "Konsultan transfer pricing di Indonesia: penilaian risiko, Master File dan Local File, benchmarking, dan review transaksi afiliasi.",
    },
  },
  {
    slug: "tax-audit-consultant-indonesia",
    eyebrow: "Pemeriksaan Pajak",
    headline: "Konsultan Pemeriksaan Pajak di Indonesia",
    intro:
      "Review kesiapan pemeriksaan dan pendampingan terstruktur selama pemeriksaan pajak, dengan strategi yang konsisten dari permintaan pertama hingga penutupan.",
    ctaLabel: "Bersiap Menghadapi Pemeriksaan",
    audience: [
      { title: "Perusahaan yang sedang diperiksa", description: "Usaha yang telah menerima surat pemberitahuan pemeriksaan." },
      { title: "Pemohon restitusi", description: "Perusahaan yang merencanakan atau sedang mengajukan restitusi." },
      { title: "Tim keuangan", description: "Tim yang bersiap menghadapi pengawasan yang lebih ketat." },
    ],
    issues: [
      { title: "Permintaan dokumen", description: "Volume dan waktu permintaan data." },
      { title: "Rekonsiliasi", description: "Perbedaan antara laporan keuangan dan SPT." },
      { title: "Temuan", description: "Koreksi yang disengketakan dan catatan yang diperlukan untuk tahap berikutnya." },
      { title: "Tenggat", description: "Batas waktu sesuai ketentuan sepanjang proses." },
    ],
    scope: [
      "Review kesiapan pemeriksaan",
      "Penyiapan dan pengindeksan dokumen",
      "Pendampingan saat pembahasan pemeriksaan",
      "Analisis temuan pemeriksaan",
      "Strategi keberatan bila relevan",
    ],
    checklist: [
      "Apakah rekonsiliasi utama telah selesai?",
      "Apakah ada satu narahubung untuk pemeriksaan?",
      "Apakah posisi yang signifikan telah terdokumentasi?",
      "Apakah log permintaan dan tanggapan dipelihara?",
    ],
    serviceSlug: "tax-controversy",
    insightSlugs: ["preparing-for-a-tax-audit-in-indonesia", "responding-to-an-sp2dk"],
    faqs: [
      {
        question: "Apakah Anda dapat bergabung dalam pemeriksaan yang sedang berjalan?",
        answer: "Ya. Kami akan terlebih dahulu menelaah status, tenggat, dan korespondensi yang telah ada.",
      },
    ],
    seo: {
      title: "Konsultan Pemeriksaan Pajak Indonesia — Kesiapan & Pendampingan",
      description:
        "Konsultan pemeriksaan pajak di Indonesia: review kesiapan, penyiapan dokumen, pendampingan pembahasan, dan analisis temuan pemeriksaan.",
    },
  },
  {
    slug: "sp2dk-assistance-indonesia",
    eyebrow: "Pendampingan SP2DK",
    headline: "Pendampingan SP2DK di Indonesia",
    intro:
      "Analisis dan penyusunan tanggapan SP2DK yang terstruktur — akurat, didukung bukti, dan konsisten dengan posisi yang mungkin diperlukan perusahaan Anda di kemudian hari.",
    ctaLabel: "Diskusikan SP2DK Anda",
    audience: [
      { title: "Perusahaan yang menerima SP2DK", description: "Usaha yang diminta menjelaskan data yang dimiliki kantor pajak." },
      { title: "Manajer keuangan", description: "Tim yang bertanggung jawab atas tanggapan dan dokumen pendukungnya." },
      { title: "CFO grup", description: "Pimpinan yang membutuhkan gambaran eksposur dan langkah berikutnya." },
    ],
    issues: [
      { title: "Perbedaan data", description: "Data pihak ketiga yang tidak sesuai dengan angka yang dilaporkan." },
      { title: "Jangka waktu", description: "Jangka waktu tanggapan yang tercantum dalam surat." },
      { title: "Konsistensi", description: "Penjelasan yang tetap dapat dipertahankan pada tahap selanjutnya." },
      { title: "Risiko eskalasi", description: "Kemungkinan pemeriksaan bila penjelasan tidak diterima." },
    ],
    scope: [
      "Analisis data yang dipersoalkan",
      "Dukungan rekonsiliasi",
      "Penyusunan penjelasan tertulis",
      "Pengindeksan dokumen",
      "Strategi untuk kemungkinan tindak lanjut",
    ],
    checklist: [
      "Apakah sumber data telah diidentifikasi?",
      "Apakah perbedaan telah direkonsiliasi dengan catatan internal?",
      "Apakah penjelasan telah dipisahkan dari pembetulan?",
      "Apakah tanggapan konsisten dengan SPT yang telah disampaikan?",
    ],
    serviceSlug: "tax-controversy",
    insightSlugs: ["responding-to-an-sp2dk"],
    faqs: [
      {
        question: "Apakah SP2DK berarti kami terutang pajak tambahan?",
        answer:
          "Belum tentu. SP2DK adalah permintaan penjelasan. Ada atau tidaknya pajak tambahan bergantung pada fakta dan apakah penjelasan diterima.",
      },
    ],
    seo: {
      title: "Pendampingan SP2DK — Tanggapan yang Terstruktur | Konsultan Pajak",
      description:
        "Pendampingan SP2DK di Indonesia: analisis data yang dipersoalkan, rekonsiliasi, penjelasan tertulis, dan strategi untuk kemungkinan tindak lanjut.",
    },
  },
  {
    slug: "corporate-tax-planning-indonesia",
    eyebrow: "Perencanaan Pajak Korporasi",
    headline: "Perencanaan Pajak Perusahaan di Indonesia",
    intro:
      "Evaluasi opsi yang sah untuk transaksi dan operasional, dengan risiko, asumsi, dan persyaratan substansi setiap opsi dijelaskan secara jelas.",
    ctaLabel: "Jadwalkan Konsultasi",
    audience: [
      { title: "CFO yang merencanakan keputusan material", description: "Pimpinan yang mengevaluasi transaksi, pembiayaan, atau restrukturisasi." },
      { title: "Perusahaan yang bertumbuh", description: "Usaha yang bersiap untuk ekspansi atau investasi asing." },
      { title: "Grup korporasi", description: "Grup yang meninjau struktur dan pengaturan intragrup." },
    ],
    issues: [
      { title: "Struktur transaksi", description: "Konsekuensi pajak dari alternatif struktur." },
      { title: "Pembiayaan", description: "Utang, modal, dan pembiayaan afiliasi." },
      { title: "Substansi", description: "Tujuan komersial di balik suatu pengaturan." },
      { title: "Perubahan regulasi", description: "Dampak ketentuan baru terhadap struktur yang ada." },
    ],
    scope: [
      "Analisis opsi untuk keputusan material",
      "Advisory restrukturisasi dan reorganisasi",
      "Review struktur pembiayaan",
      "Opini tertulis atas posisi tertentu",
    ],
    checklist: [
      "Apakah tujuan komersial pengaturan telah didokumentasikan?",
      "Apakah opsi alternatif telah dibandingkan?",
      "Apakah risiko dan asumsi opsi yang dipilih sudah jelas?",
      "Apakah dampak perubahan regulasi terbaru telah dipertimbangkan?",
    ],
    serviceSlug: "tax-advisory",
    insightSlugs: ["tax-governance-framework-large-companies"],
    faqs: [
      {
        question: "Apakah perencanaan pajak sama dengan penghindaran pajak?",
        answer:
          "Tidak. Kami mengevaluasi opsi yang sah dan memiliki substansi komersial, serta menjelaskan risikonya. Kami tidak merekomendasikan pengaturan yang tujuan utamanya semata-mata memperoleh manfaat pajak.",
      },
    ],
    seo: {
      title: "Perencanaan Pajak Perusahaan Indonesia — Opsi, Risiko & Substansi",
      description:
        "Perencanaan pajak perusahaan di Indonesia: analisis opsi, advisory restrukturisasi, review pembiayaan, dan opini tertulis dengan risiko dan asumsi yang jelas.",
    },
  },
];
