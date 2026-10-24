import type { ServiceCategory } from "@/content/services";

/** Indonesian versions of the core services. Slugs must match content/services.ts. */
export const servicesId: ServiceCategory[] = [
  {
    slug: "tax-advisory",
    number: "01",
    icon: "advisory",
    title: "Tax Advisory",
    cardSummary:
      "Review, perencanaan, dan opini tertulis yang terstruktur agar manajemen memahami posisi pajak sebelum keputusan material diambil.",
    headline: "Advisory Pajak Korporasi untuk Keputusan yang Penting",
    valueProposition:
      "Pahami implikasi pajak dari keputusan bisnis, evaluasi opsi yang tersedia, dan dokumentasikan dasar pertimbangan atas posisi pajak yang material.",
    ctaLabel: "Ajukan Diagnostik Risiko Pajak",
    situations: [
      {
        title: "Transaksi material sedang dinegosiasikan",
        description:
          "Klausul kontrak, alur pembayaran, dan pilihan entitas dapat mengubah konsekuensi pajak. Manajemen perlu memahami implikasinya sebelum menandatangani, bukan sesudahnya.",
      },
      {
        title: "Posisi pajak bergantung pada interpretasi",
        description:
          "Sebagian posisi bergantung pada cara ketentuan ditafsirkan. Tim keuangan membutuhkan dasar terdokumentasi yang dapat dijelaskan kepada auditor, direksi, dan kantor pajak.",
      },
      {
        title: "Ketidakpastian atas eksposur historis",
        description:
          "Perbedaan antara laporan komersial dan pelaporan pajak, atau perubahan model bisnis, dapat menimbulkan eksposur yang belum terukur.",
      },
      {
        title: "Tuntutan tata kelola meningkat",
        description:
          "Direksi dan kantor pusat regional semakin mengharapkan kerangka yang jelas tentang cara risiko pajak diidentifikasi, dieskalasi, dan diputuskan.",
      },
    ],
    scope: [
      {
        title: "Tax Health Check",
        description:
          "Diagnostik terfokus atas area pajak utama untuk mengidentifikasi potensi eksposur, kekurangan dokumentasi, dan prioritas penanganan.",
      },
      {
        title: "Corporate Tax Review",
        description:
          "Review posisi PPh Badan, PPN, dan PPh potong/pungut terhadap dokumen pendukung dan ketentuan yang berlaku.",
      },
      {
        title: "Tax Planning",
        description:
          "Evaluasi opsi yang sah untuk menstrukturkan transaksi dan operasional, dengan risiko dan asumsi setiap opsi dijelaskan secara jelas.",
      },
      {
        title: "Tax Opinion dan Second Opinion",
        description:
          "Analisis tertulis atas pertanyaan pajak tertentu, mencakup fakta yang digunakan, dasar ketentuan, interpretasi, dan batasannya.",
      },
      {
        title: "Tax Risk Assessment",
        description:
          "Identifikasi dan prioritisasi risiko pajak berdasarkan kemungkinan dan potensi dampak, disajikan dalam format yang dapat ditindaklanjuti manajemen.",
      },
      {
        title: "Tax Governance",
        description:
          "Perancangan atau review kebijakan, peran, kontrol, dan prosedur eskalasi pajak yang sesuai dengan skala dan kompleksitas grup.",
      },
    ],
    deliverables: [
      "Ringkasan eksekutif atas temuan utama dan keputusan yang diperlukan",
      "Register risiko pajak dengan peringkat prioritas",
      "Memorandum advisory atau opini pajak tertulis",
      "Analisis opsi beserta asumsi dan batasannya",
      "Rencana tindak lanjut dan penanggung jawab",
    ],
    process: [
      { title: "Memahami", description: "Memperjelas pertanyaan bisnis, linimasa keputusan, dan ruang lingkup review yang disepakati." },
      { title: "Menilai", description: "Menelaah fakta, kontrak, SPT, dan dokumen terhadap ketentuan yang berlaku." },
      { title: "Memberi Advis", description: "Menyampaikan temuan, opsi, dan risiko secara tertulis, disertai rekomendasi bila relevan." },
      { title: "Mendampingi", description: "Membantu langkah implementasi yang disepakati atau pertanyaan lanjutan dari manajemen dan auditor." },
    ],
    considerations: [
      {
        title: "Perubahan regulasi",
        description:
          "Ketentuan pajak Indonesia berubah signifikan sejak Undang-Undang Harmonisasi Peraturan Perpajakan (UU HPP, UU Nomor 7 Tahun 2021) dan penerapan sistem administrasi Coretax. Posisi yang diambil berdasarkan ketentuan lama mungkin perlu ditinjau ulang.",
      },
      {
        title: "Dokumentasi sama pentingnya dengan posisi",
        description:
          "Posisi yang dapat dipertahankan bergantung pada dokumentasi fakta dan pertimbangan yang dibuat pada saat itu, bukan hanya pada kesimpulannya.",
      },
      {
        title: "Perencanaan harus memiliki substansi komersial",
        description:
          "Perencanaan pajak dinilai berdasarkan tujuan komersial suatu skema. Opsi tanpa substansi memiliki risiko tinggi dan tidak kami rekomendasikan.",
      },
    ],
    faqs: [
      {
        question: "Apa perbedaan Tax Health Check dan Corporate Tax Review?",
        answer:
          "Tax Health Check adalah diagnostik terfokus untuk mengidentifikasi area prioritas dengan cepat. Corporate Tax Review menelaah lebih dalam jenis pajak dan periode tertentu, menguji posisi terhadap dokumen dan ketentuan. Banyak klien memulai dengan Health Check lalu menetapkan ruang lingkup review atas area yang disorotnya.",
      },
      {
        question: "Apakah PrimeTax dapat memberikan second opinion atas advis konsultan lain?",
        answer:
          "Ya. Second opinion menelaah fakta, asumsi, dan dasar ketentuan dari posisi yang ada, lalu menyatakan apakah kami sependapat, tidak sependapat, atau melihat risiko tambahan. Kami akan meminta analisis awal dan fakta pendukungnya.",
      },
      {
        question: "Apakah Anda menjamin penghematan pajak?",
        answer:
          "Tidak. Kami mengevaluasi opsi yang sah serta menjelaskan risiko dan asumsinya agar manajemen dapat mengambil keputusan berdasarkan informasi yang memadai. Hasil akhir bergantung pada fakta, implementasi, dan posisi yang diambil otoritas pajak.",
      },
    ],
    relatedServices: ["international-tax-pma", "tax-controversy"],
    relatedInsights: ["tax-governance-framework-large-companies", "preparing-for-a-tax-audit-in-indonesia"],
    seo: {
      title: "Konsultan Pajak Korporasi — Tax Review, Tax Planning & Tax Opinion",
      description:
        "Advisory pajak korporasi di Indonesia: tax health check, corporate tax review, tax planning, opini tertulis, tax risk assessment, dan tax governance.",
    },
  },
  {
    slug: "international-tax-pma",
    number: "02",
    icon: "international",
    title: "International Tax & PMA",
    cardSummary:
      "Advisory pajak Indonesia bagi perusahaan PMA dan transaksi lintas negara, termasuk P3B dan pemotongan PPh.",
    headline: "Advisory Pajak Indonesia untuk Perusahaan PMA",
    valueProposition:
      "Pahami kewajiban pajak Indonesia, implikasi lintas negara, dan potensi eksposur pajak melalui advisory terstruktur yang disesuaikan dengan konteks bisnis Anda.",
    ctaLabel: "Diskusikan Persoalan Pajak PMA Anda",
    situations: [
      {
        title: "Pembayaran ke afiliasi luar negeri",
        description:
          "Imbalan jasa, royalti, bunga, dan dividen yang dibayarkan ke luar negeri menimbulkan persoalan PPh potong, PPN, dan pembebanan biaya yang perlu diperlakukan secara konsisten.",
      },
      {
        title: "Penerapan P3B",
        description:
          "Tarif P3B yang lebih rendah bergantung pada persyaratan prosedural serta pemenuhan syarat substansi dan beneficial owner oleh penerima penghasilan.",
      },
      {
        title: "Masuk atau merestrukturisasi di Indonesia",
        description:
          "Pilihan struktur investasi, pembiayaan, dan model operasional berdampak pajak bagi entitas Indonesia maupun grup secara keseluruhan.",
      },
      {
        title: "Pelaporan ke tim regional atau global",
        description:
          "Kantor pusat membutuhkan penjelasan persoalan pajak Indonesia dalam bahasa Inggris, dengan eksposur dan opsi yang disajikan dalam format konsisten.",
      },
    ],
    scope: [
      {
        title: "PMA Tax Advisory",
        description:
          "Advisory berkelanjutan atau berbasis proyek atas kewajiban PPh Badan, PPN, dan PPh potong/pungut bagi perusahaan PMA.",
      },
      {
        title: "Cross-Border Tax Review",
        description:
          "Review alur pembayaran dan kontrak lintas negara untuk mengidentifikasi eksposur PPh potong, PPN, dan pembebanan biaya.",
      },
      {
        title: "Analisis P3B (Tax Treaty)",
        description:
          "Penilaian kelayakan dan persyaratan prosedural P3B, termasuk Surat Keterangan Domisili (SKD) dan ketentuan anti-penyalahgunaan.",
      },
      {
        title: "Withholding Tax Advisory",
        description: "Karakterisasi pembayaran serta perlakuan PPh Pasal 26 dan PPh potong domestik yang berlaku.",
      },
      {
        title: "International Tax Structuring",
        description:
          "Evaluasi struktur investasi, pembiayaan, dan operasional, termasuk pertimbangan Bentuk Usaha Tetap (BUT).",
      },
      {
        title: "Expatriate Tax Advisory",
        description: "Persoalan residensi pajak orang pribadi dan pajak ketenagakerjaan bagi tenaga kerja asing.",
        confirm: true,
      },
    ],
    deliverables: [
      "Peta transaksi lintas negara beserta perlakuan pajak per jenis pembayaran",
      "Daftar periksa kelayakan dan dokumentasi P3B",
      "Ringkasan eksposur PPh potong dan PPN",
      "Memorandum advisory berbahasa Inggris untuk pemangku kepentingan regional atau global",
      "Rekomendasi tindak lanjut dan dokumen yang perlu dipelihara",
    ],
    process: [
      { title: "Memahami", description: "Memetakan struktur grup, operasional di Indonesia, dan alur lintas negara dalam ruang lingkup." },
      { title: "Menilai", description: "Menelaah kontrak, catatan pembayaran, dokumen P3B, dan SPT terhadap ketentuan yang berlaku." },
      { title: "Memberi Advis", description: "Menjelaskan perlakuan, eksposur, dan opsi secara tertulis bagi pengambil keputusan lokal dan regional." },
      { title: "Mendampingi", description: "Membantu dokumentasi, perubahan yang disepakati, dan pertanyaan lanjutan seiring perkembangan transaksi." },
    ],
    considerations: [
      {
        title: "Prosedur P3B",
        description:
          "Manfaat P3B di Indonesia tunduk pada persyaratan prosedural yang ditetapkan Direktorat Jenderal Pajak (termasuk PER-25/PJ/2018) dan pada uji anti-penyalahgunaan. Dokumen yang tidak lengkap dapat berakibat diterapkannya tarif domestik.",
      },
      {
        title: "Bentuk Usaha Tetap",
        description:
          "Kegiatan personel atau agen asing di Indonesia dapat menimbulkan BUT. P3B terkait dan ketentuan domestik (termasuk PMK-35/PMK.03/2019) perlu dipertimbangkan sebelum kegiatan dimulai.",
      },
      {
        title: "Pembiayaan dan bunga",
        description:
          "Pinjaman pemegang saham tunduk pada batasan perbandingan utang dan modal (PMK-169/PMK.010/2015) serta prinsip kewajaran dan kelaziman usaha untuk bunga afiliasi.",
      },
    ],
    faqs: [
      {
        question: "Apakah Anda dapat berkomunikasi langsung dengan kantor pusat regional kami?",
        answer:
          "Ya. Deliverable dapat disusun dalam bahasa Inggris dan kami dapat mengikuti rapat dengan tim keuangan atau pajak regional, sesuai ruang lingkup penugasan.",
      },
      {
        question: "Kapan perusahaan PMA sebaiknya mereview pembayaran lintas negaranya?",
        answer:
          "Idealnya sebelum perjanjian intragrup baru ditandatangani atau jenis pembayaran baru dimulai, serta secara berkala sebagai bagian persiapan tutup tahun. Review lebih awal memungkinkan dokumen disiapkan sebelum pembayaran dilakukan.",
      },
      {
        question: "Apakah Anda juga menangani transfer pricing untuk perusahaan PMA?",
        answer:
          "Ya. Transfer pricing berkaitan erat dengan advisory lintas negara dan ditangani oleh praktik Transfer Pricing kami. Keduanya kami koordinasikan bila sama-sama termasuk dalam ruang lingkup.",
      },
    ],
    relatedServices: ["transfer-pricing", "tax-advisory"],
    relatedInsights: ["cross-border-payments-pma-withholding-tax", "transfer-pricing-documentation-indonesia"],
    seo: {
      title: "Konsultan Pajak PMA & International Tax Indonesia",
      description:
        "Advisory pajak untuk perusahaan PMA di Indonesia: review transaksi lintas negara, analisis P3B, PPh Pasal 26, dan struktur pajak internasional.",
    },
  },
  {
    slug: "transfer-pricing",
    number: "03",
    icon: "transfer-pricing",
    title: "Transfer Pricing",
    cardSummary:
      "Penilaian risiko, dokumentasi, dan benchmarking atas transaksi afiliasi berdasarkan ketentuan transfer pricing Indonesia.",
    headline: "Advisory dan Dokumentasi Transfer Pricing",
    valueProposition:
      "Nilai transaksi afiliasi, susun dokumentasi yang mencerminkan cara bisnis Anda benar-benar beroperasi, dan pahami di mana risiko transfer pricing berada.",
    ctaLabel: "Tinjau Risiko Transfer Pricing Anda",
    situations: [
      {
        title: "Kewajiban dokumentasi",
        description:
          "Perusahaan dengan transaksi afiliasi dapat diwajibkan menyusun Dokumen Induk (Master File) dan Dokumen Lokal (Local File), bergantung pada ambang batas yang berlaku.",
      },
      {
        title: "Jasa intragrup dan royalti",
        description:
          "Management fee dan royalti kerap diperiksa terkait bukti manfaat dan kewajaran harganya.",
      },
      {
        title: "Perubahan model bisnis",
        description:
          "Perubahan fungsi, aset, atau risiko — misalnya konversi distributor atau sentralisasi pengadaan — memengaruhi tingkat laba yang diharapkan.",
      },
      {
        title: "Profitabilitas disorot",
        description:
          "Kerugian berkelanjutan atau margin rendah pada entitas dengan transaksi afiliasi dapat memicu pertanyaan saat pemeriksaan.",
      },
    ],
    scope: [
      {
        title: "Transfer Pricing Risk Assessment",
        description:
          "Review transaksi afiliasi untuk mengidentifikasi di mana harga, dokumentasi, atau karakterisasi menimbulkan risiko.",
      },
      {
        title: "Master File dan Local File",
        description:
          "Penyusunan atau review dokumentasi transfer pricing yang konsisten dengan fungsi, aset, dan risiko grup yang sebenarnya.",
      },
      {
        title: "Analisis Benchmarking",
        description: "Pencarian dan analisis perusahaan atau transaksi pembanding untuk mendukung rentang kewajaran.",
      },
      {
        title: "Review Transaksi Afiliasi",
        description: "Review perjanjian, faktur, dan bukti pendukung atas transaksi afiliasi tertentu.",
      },
      {
        title: "Intercompany Pricing Review",
        description:
          "Evaluasi kebijakan harga dan penyesuaian akhir tahun terhadap metode transfer pricing yang dipilih.",
      },
      {
        title: "Advisory APA / MAP",
        description: "Advisory atas Advance Pricing Agreement dan Prosedur Persetujuan Bersama.",
        confirm: true,
      },
    ],
    deliverables: [
      "Inventaris transaksi afiliasi dan peta risiko",
      "Master File dan/atau Local File",
      "Laporan benchmarking beserta strategi pencarian dan pembanding",
      "Memorandum analisis fungsional dan karakterisasi",
      "Rekomendasi kebijakan harga dan bukti pendukung",
    ],
    process: [
      { title: "Memahami", description: "Mewawancarai manajemen untuk memahami rantai nilai, struktur grup, dan transaksi." },
      { title: "Menilai", description: "Menganalisis fungsi, aset, dan risiko; menguji harga dan dokumentasi terhadap persyaratan." },
      { title: "Memberi Advis", description: "Menyusun dokumentasi serta menjelaskan risiko, asumsi, dan perubahan yang direkomendasikan." },
      { title: "Mendampingi", description: "Membantu pembaruan, permintaan data, dan penyelarasan dengan kebijakan global grup." },
    ],
    considerations: [
      {
        title: "Kerangka yang berlaku",
        description:
          "Dokumentasi transfer pricing dan prinsip kewajaran dan kelaziman usaha di Indonesia diatur dalam PMK-172/PMK.03/2023 yang mengonsolidasikan ketentuan sebelumnya. Ambang batas dan tenggat perlu dikonfirmasi terhadap ketentuan untuk setiap tahun.",
      },
      {
        title: "Substansi di atas bentuk",
        description:
          "Dokumentasi harus mencerminkan kondisi sebenarnya. Perjanjian yang berbeda dengan cara bisnis berjalan hanya memberikan perlindungan terbatas.",
      },
      {
        title: "Konsistensi dengan grup",
        description:
          "Dokumentasi lokal harus konsisten dengan kebijakan transfer pricing global grup dan informasi yang dilaporkan di yurisdiksi lain.",
      },
    ],
    faqs: [
      {
        question: "Apakah setiap perusahaan dengan transaksi afiliasi wajib menyusun Local File?",
        answer:
          "Belum tentu. Kewajiban bergantung pada ambang batas dan sifat transaksinya. Kami menelaah fakta Anda terhadap ketentuan yang berlaku untuk memastikan kewajiban yang relevan.",
      },
      {
        question: "Apakah Anda dapat mereview dokumentasi yang disusun konsultan global grup kami?",
        answer:
          "Ya. Kami dapat mereview dokumentasi global agar konsisten dengan persyaratan Indonesia dan cara entitas lokal beroperasi, serta merekomendasikan tambahan lokal bila diperlukan.",
      },
      {
        question: "Apakah Anda membantu Advance Pricing Agreement?",
        answer:
          "Silakan diskusikan persoalan APA atau MAP langsung dengan kami. Kami akan mengonfirmasi ruang lingkup bantuan yang dapat kami berikan untuk situasi Anda.",
      },
    ],
    relatedServices: ["international-tax-pma", "tax-controversy"],
    relatedInsights: ["transfer-pricing-documentation-indonesia", "cross-border-payments-pma-withholding-tax"],
    seo: {
      title: "Konsultan Transfer Pricing Indonesia — Dokumentasi & Benchmarking",
      description:
        "Advisory transfer pricing di Indonesia: penilaian risiko, Master File dan Local File, benchmarking, dan review transaksi afiliasi.",
    },
  },
  {
    slug: "tax-controversy",
    number: "04",
    icon: "controversy",
    title: "Tax Controversy",
    cardSummary:
      "Pendampingan SP2DK, pemeriksaan pajak, keberatan, banding, dan restitusi — dari tanggapan pertama hingga strategi sengketa.",
    headline: "Pendampingan Sengketa dan Pemeriksaan Pajak",
    valueProposition:
      "Tanggapi permintaan kantor pajak dan pemeriksaan secara terstruktur, pahami posisi Anda, dan ambil keputusan yang tepat terkait keberatan dan banding.",
    ctaLabel: "Diskusikan SP2DK atau Pemeriksaan Anda",
    situations: [
      {
        title: "Menerima SP2DK",
        description:
          "Permintaan penjelasan atas data membutuhkan tanggapan yang tepat waktu dan akurat. Cara menjawabnya dapat memengaruhi apakah pemeriksaan akan menyusul.",
      },
      {
        title: "Pemeriksaan pajak dimulai",
        description:
          "Pemeriksaan melibatkan permintaan dokumen, pembahasan, dan tenggat waktu. Persiapan dan komunikasi yang konsisten membantu mengelola prosesnya.",
      },
      {
        title: "Ketetapan pajak diterbitkan",
        description:
          "Manajemen harus memutuskan untuk menerima, mengajukan keberatan, atau menempuh upaya hukum lain dalam batas waktu yang ditetapkan undang-undang.",
      },
      {
        title: "Restitusi sedang diproses",
        description:
          "Permohonan restitusi umumnya diikuti pemeriksaan. Dokumen sebaiknya siap sebelum permohonan diajukan.",
      },
    ],
    scope: [
      { title: "Pendampingan SP2DK", description: "Analisis data yang dipersoalkan, penyusunan penjelasan, dan dokumen pendukung." },
      {
        title: "Persiapan dan Pendampingan Pemeriksaan",
        description: "Review kesiapan, penyiapan dokumen, serta pendampingan saat pembahasan dan closing conference.",
      },
      { title: "Keberatan", description: "Analisis ketetapan dan penyusunan surat keberatan dalam batas waktu yang ditentukan." },
      {
        title: "Banding",
        description: "Pendampingan proses banding di Pengadilan Pajak, sesuai ketentuan kuasa yang berlaku.",
      },
      { title: "Pendampingan Restitusi", description: "Penyiapan permohonan restitusi dan pendampingan saat pemeriksaannya." },
      {
        title: "Strategi Sengketa Pajak",
        description: "Penilaian kekuatan posisi, biaya, dan linimasa setiap upaya hukum untuk mendukung keputusan manajemen.",
      },
    ],
    deliverables: [
      "Analisis persoalan dan penilaian posisi",
      "Draf tanggapan, penjelasan, dan surat",
      "Indeks dokumen dan rencana pembuktian",
      "Linimasa tenggat sesuai ketentuan dan langkah berikutnya",
      "Memorandum strategi sengketa untuk manajemen",
    ],
    process: [
      { title: "Memahami", description: "Menelaah surat atau ketetapan, tenggat, dan fakta di balik persoalan yang diangkat." },
      { title: "Menilai", description: "Menganalisis dasar ketentuan, bukti yang tersedia, dan kekuatan setiap posisi." },
      { title: "Memberi Advis", description: "Merekomendasikan strategi tanggapan dan menyiapkan dokumen untuk persetujuan manajemen." },
      { title: "Mendampingi", description: "Mendampingi pembahasan, permintaan lanjutan, dan tahapan berikutnya sesuai kesepakatan." },
    ],
    considerations: [
      {
        title: "Tenggat menurut undang-undang",
        description:
          "Keberatan dan banding tunduk pada batas waktu yang ketat menurut UU Ketentuan Umum dan Tata Cara Perpajakan (KUP) dan UU Pengadilan Pajak. Melewatkan tenggat dapat menghilangkan upaya hukum sama sekali.",
      },
      {
        title: "Konsistensi antartahap",
        description:
          "Posisi dan bukti yang disampaikan pada tahap SP2DK atau pemeriksaan dapat memengaruhi tahap berikutnya. Strategi yang konsisten sejak awal sangat penting.",
      },
      {
        title: "Kuasa",
        description:
          "Bertindak sebagai kuasa di hadapan kantor pajak dan Pengadilan Pajak tunduk pada persyaratan khusus. Ruang lingkup peran PrimeTax ditegaskan dalam setiap penugasan.",
      },
    ],
    faqs: [
      {
        question: "Seberapa cepat kami harus menanggapi SP2DK?",
        answer:
          "Tanggapan diharapkan dalam jangka waktu yang tercantum dalam surat. Hubungi kami segera setelah surat diterima agar tersedia waktu untuk menganalisis data dan menyusun tanggapan yang matang.",
      },
      {
        question: "Apakah Anda dapat menjamin hasil keberatan atau banding?",
        answer:
          "Tidak. Hasil bergantung pada fakta, bukti, dan keputusan otoritas pajak atau pengadilan. Kami memberikan penilaian atas kekuatan dan risiko posisi agar manajemen dapat memutuskan langkah selanjutnya.",
      },
      {
        question: "Apakah kami perlu bersiap sebelum pemeriksaan diumumkan?",
        answer:
          "Ya, terutama sebelum mengajukan restitusi atau setelah transaksi signifikan. Review kesiapan pemeriksaan membantu mengidentifikasi kekurangan selagi masih ada waktu untuk memperbaikinya.",
      },
    ],
    relatedServices: ["tax-advisory", "transfer-pricing"],
    relatedInsights: ["responding-to-an-sp2dk", "preparing-for-a-tax-audit-in-indonesia"],
    seo: {
      title: "Konsultan Sengketa Pajak — SP2DK, Pemeriksaan, Keberatan & Banding",
      description:
        "Pendampingan sengketa pajak di Indonesia: SP2DK, persiapan pemeriksaan pajak, keberatan, banding, restitusi, dan strategi sengketa.",
    },
  },
];

export const supportingServicesId = [
  {
    title: "Corporate Tax Compliance Review",
    description: "Review berkala atas SPT dan rekonsiliasi untuk menemukan kesalahan sebelum menjadi temuan pemeriksaan.",
  },
  {
    title: "Tax Due Diligence",
    description: "Identifikasi eksposur pajak historis dalam akuisisi, investasi, dan restrukturisasi.",
  },
  {
    title: "Transaction Tax Advisory",
    description: "Implikasi pajak atas akuisisi, divestasi, dan reorganisasi grup.",
  },
  {
    title: "Executive Tax Advisory",
    description: "Akses advisory berkelanjutan bagi CFO dan pimpinan keuangan atas persoalan pajak yang muncul.",
  },
  {
    title: "Tax Intelligence dan Pelatihan",
    description: "Briefing regulasi dan pelatihan terfokus bagi tim keuangan dan pajak.",
  },
];
