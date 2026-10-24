import type { Insight } from "@/content/insights";

/**
 * Indonesian versions of the insights. Slugs must match content/insights.ts.
 * The same editorial rules apply: review against current official
 * regulations before publishing, and name only verified reviewers.
 */
export const insightsId: Insight[] = [
  {
    slug: "responding-to-an-sp2dk",
    title: "Menerima SP2DK? Pendekatan Terstruktur untuk Tanggapan Pertama",
    excerpt:
      "SP2DK adalah permintaan penjelasan, bukan ketetapan pajak. Cara tanggapan pertama disusun dapat menentukan langkah selanjutnya.",
    type: "Executive Briefing",
    topic: "Sengketa Pajak",
    author: "Tim Redaksi PrimeTax",
    reviewer: "",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-12",
    readingMinutes: 5,
    status: "published",
    keyPoints: [
      "SP2DK meminta penjelasan atas data; SP2DK bukan ketetapan pajak.",
      "Pahami sumber data sebelum menyusun tanggapan.",
      "Tanggapan harus akurat, konsisten, dan didukung dokumen.",
    ],
    body: [
      {
        type: "p",
        text: "Surat Permintaan Penjelasan atas Data dan/atau Keterangan (SP2DK) adalah surat dari kantor pajak yang meminta wajib pajak menjelaskan data atau keterangan yang dimiliki kantor pajak. Bagi manajemen, hal terpenting adalah bahwa SP2DK merupakan permintaan penjelasan. SP2DK bukan ketetapan pajak dan tidak dengan sendirinya berarti ada pajak tambahan yang terutang.",
      },
      {
        type: "p",
        text: "Meski demikian, tanggapan tetap penting. Penjelasan yang jelas dan didukung bukti dapat menyelesaikan persoalan. Tanggapan yang tidak lengkap atau tidak konsisten dapat memicu permintaan lanjutan atau pemeriksaan.",
      },
      { type: "h2", text: "1. Identifikasi data yang sebenarnya dipersoalkan" },
      {
        type: "p",
        text: "SP2DK kerap merujuk pada perbedaan antara yang dilaporkan perusahaan dan data yang dimiliki kantor pajak — misalnya bukti potong pihak ketiga, Faktur Pajak dari lawan transaksi, atau data kepabeanan. Sebelum menyusun apa pun, tim keuangan perlu mengidentifikasi sumber data dan merekonsiliasinya dengan catatan internal.",
      },
      { type: "h2", text: "2. Pisahkan penjelasan dari pembetulan" },
      {
        type: "p",
        text: "Sebagian perbedaan memiliki penjelasan yang sah, misalnya perbedaan waktu atau klasifikasi. Sebagian lainnya mungkin menunjukkan kesalahan pelaporan. Membedakan keduanya sejak awal memungkinkan manajemen memutuskan apakah pembetulan diperlukan dan menyajikan penjelasan secara konsisten.",
      },
      { type: "h2", text: "3. Susun tanggapan yang dapat diandalkan di kemudian hari" },
      {
        type: "ul",
        items: [
          "Tanggapi dalam jangka waktu yang tercantum dalam surat.",
          "Jawab setiap butir yang diajukan, sesuai urutannya.",
          "Lampirkan atau indeks dokumen pendukung, bukan pernyataan tanpa bukti.",
          "Jaga konsistensi tanggapan dengan SPT yang telah disampaikan dan posisi yang mungkin perlu diambil kemudian.",
        ],
      },
      { type: "h2", text: "4. Rencanakan langkah berikutnya" },
      {
        type: "p",
        text: "Bila penjelasan tidak diterima, persoalan dapat berlanjut ke pemeriksaan. Posisi yang diambil pada tahap SP2DK dapat memengaruhi tahap selanjutnya, sehingga tanggapan sebaiknya diperlakukan sebagai bagian dari strategi yang lebih luas, bukan sekadar tugas administratif.",
      },
    ],
    sources: [
      "Undang-Undang Nomor 6 Tahun 1983 tentang Ketentuan Umum dan Tata Cara Perpajakan (KUP) beserta perubahannya",
      "Panduan Direktorat Jenderal Pajak tentang pengawasan kepatuhan, termasuk SE-05/PJ/2022",
    ],
    relatedServices: ["tax-controversy"],
  },
  {
    slug: "cross-border-payments-pma-withholding-tax",
    title: "Pembayaran Lintas Negara oleh Perusahaan PMA: Persoalan PPh Potong yang Perlu Diselesaikan Sejak Awal",
    excerpt:
      "Imbalan jasa, royalti, dan bunga yang dibayarkan ke afiliasi luar negeri menimbulkan persoalan PPh potong, PPN, dan pembebanan biaya yang lebih mudah diselesaikan sebelum pembayaran dimulai.",
    type: "Article",
    topic: "International Tax & PMA",
    author: "Tim Redaksi PrimeTax",
    reviewer: "",
    publishedAt: "2026-10-05",
    updatedAt: "2026-10-05",
    readingMinutes: 6,
    status: "published",
    keyPoints: [
      "Karakterisasi setiap jenis pembayaran sebelum menyepakati klausul kontrak.",
      "Manfaat P3B bergantung pada prosedur dan substansi penerima penghasilan.",
      "PPh potong, PPN, dan pembebanan biaya perlu dipertimbangkan bersama.",
    ],
    body: [
      {
        type: "p",
        text: "Perusahaan penanaman modal asing (PMA) di Indonesia lazim melakukan pembayaran ke afiliasi di luar negeri: imbalan jasa manajemen dan teknis, royalti atas merek atau teknologi, bunga pinjaman pemegang saham, dan dividen. Setiap jenis pembayaran menimbulkan persoalan pajak tersendiri, dan jawabannya sering lebih mudah ditetapkan sebelum pembayaran pertama dilakukan.",
      },
      { type: "h2", text: "Karakterisasi adalah langkah pertama" },
      {
        type: "p",
        text: "Apakah suatu pembayaran diperlakukan sebagai imbalan jasa, royalti, atau lainnya akan memengaruhi tarif PPh potong dan pasal P3B yang mungkin berlaku. Karakterisasi harus mengikuti substansi dari apa yang diberikan, dan perjanjian harus menggambarkannya secara akurat.",
      },
      { type: "h2", text: "Manfaat P3B bersifat bersyarat" },
      {
        type: "p",
        text: "P3B yang dimiliki Indonesia dapat menurunkan tarif PPh potong atas pembayaran kepada penduduk negara mitra. Akses terhadap tarif tersebut bergantung pada persyaratan prosedural — termasuk Surat Keterangan Domisili dalam bentuk yang ditetapkan Direktorat Jenderal Pajak — serta pemenuhan syarat beneficial owner dan ketentuan anti-penyalahgunaan oleh penerima penghasilan.",
      },
      { type: "h2", text: "Tiga pertanyaan yang perlu dijawab bersama" },
      {
        type: "ul",
        items: [
          "PPh potong: tarif apa yang berlaku, dan apakah dokumen P3B sudah tersedia sebelum pembayaran?",
          "PPN: apakah PPN terutang atas pemanfaatan jasa atau barang tidak berwujud dari luar negeri di Indonesia?",
          "Pembebanan biaya: apakah perusahaan dapat membuktikan manfaat yang diterima dan kewajaran harganya?",
        ],
      },
      {
        type: "p",
        text: "Ketiga pertanyaan ini saling terkait. Pembayaran yang telah dipotong dengan benar tetapi tidak dapat dibuktikan manfaatnya tetap dapat dipersoalkan dari sisi pembebanan biaya. Mempertimbangkannya bersama mengurangi risiko posisi yang tidak konsisten.",
      },
    ],
    sources: [
      "Undang-Undang Nomor 7 Tahun 1983 tentang Pajak Penghasilan sebagaimana terakhir diubah dengan UU Nomor 7 Tahun 2021 (UU HPP) — Pasal 26",
      "PER-25/PJ/2018 tentang Tata Cara Penerapan Persetujuan Penghindaran Pajak Berganda",
      "PMK-172/PMK.03/2023 tentang Penerapan Prinsip Kewajaran dan Kelaziman Usaha",
    ],
    relatedServices: ["international-tax-pma", "transfer-pricing"],
  },
  {
    slug: "transfer-pricing-documentation-indonesia",
    title: "Dokumentasi Transfer Pricing di Indonesia: Pertanyaan yang Perlu Diajukan Manajemen",
    excerpt:
      "Dokumentasi bukan sekadar berkas kepatuhan. Dokumentasi harus menjelaskan bagaimana bisnis menciptakan nilai dan mengapa harga afiliasi wajar.",
    type: "Article",
    topic: "Transfer Pricing",
    author: "Tim Redaksi PrimeTax",
    reviewer: "",
    publishedAt: "2026-09-28",
    updatedAt: "2026-09-28",
    readingMinutes: 6,
    status: "published",
    keyPoints: [
      "Pastikan kewajiban dokumentasi yang berlaku untuk tahun berjalan.",
      "Dokumentasi harus mencerminkan cara bisnis benar-benar beroperasi.",
      "Local File harus konsisten dengan kebijakan global grup.",
    ],
    body: [
      {
        type: "p",
        text: "Ketentuan transfer pricing Indonesia dikonsolidasikan dalam PMK-172/PMK.03/2023. Bagi perusahaan dengan transaksi afiliasi, peraturan ini mengatur prinsip kewajaran dan kelaziman usaha, kewajiban dokumentasi, serta prosedur terkait. Bagi manajemen, pertanyaan praktisnya adalah apa yang harus disiapkan, kapan, dan apakah dokumentasi tersebut dapat dipertahankan bila diperiksa.",
      },
      { type: "h2", text: "Pertanyaan untuk tim keuangan" },
      {
        type: "ul",
        items: [
          "Kewajiban dokumentasi apa yang berlaku bagi kami tahun ini, berdasarkan ambang batas yang berlaku?",
          "Apakah analisis fungsional kami menggambarkan apa yang benar-benar dilakukan karyawan kami?",
          "Apakah perjanjian intragrup konsisten dengan cara transaksi dijalankan?",
          "Apakah kami dapat membuktikan manfaat jasa dan pemanfaatan barang tidak berwujud yang kami bayar?",
          "Apakah dokumentasi lokal kami konsisten dengan Master File dan kebijakan global grup?",
        ],
      },
      { type: "h2", text: "Mengapa konsistensi penting" },
      {
        type: "p",
        text: "Otoritas pajak semakin sering membandingkan informasi lintas dokumen dan yurisdiksi. Perbedaan antara Local File, Master File, laporan keuangan, dan SPT kerap menjadi titik awal pertanyaan dalam pemeriksaan.",
      },
      { type: "quote", text: "Dokumentasi yang baik menjelaskan bisnisnya terlebih dahulu, baru kemudian angkanya." },
    ],
    sources: ["PMK-172/PMK.03/2023 tentang Penerapan Prinsip Kewajaran dan Kelaziman Usaha dalam Transaksi yang Dipengaruhi Hubungan Istimewa"],
    relatedServices: ["transfer-pricing"],
  },
  {
    slug: "preparing-for-a-tax-audit-in-indonesia",
    title: "Bersiap Menghadapi Pemeriksaan Pajak: Daftar Periksa Kesiapan bagi Pimpinan Keuangan",
    excerpt:
      "Kesiapan pemeriksaan bukan soal mengantisipasi setiap pertanyaan, melainkan mengetahui kondisi catatan, rekonsiliasi, dan posisi pajak Anda.",
    type: "Article",
    topic: "Sengketa Pajak",
    author: "Tim Redaksi PrimeTax",
    reviewer: "",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    readingMinutes: 5,
    status: "published",
    keyPoints: [
      "Permohonan restitusi dan transaksi signifikan kerap berujung pemeriksaan.",
      "Rekonsiliasi laporan keuangan dan SPT adalah inti persiapan.",
      "Tunjuk satu narahubung dan pelihara log permintaan.",
    ],
    body: [
      {
        type: "p",
        text: "Pemeriksaan pajak di Indonesia dapat dipicu oleh permohonan restitusi, analisis risiko, atau data tertentu. Apa pun pemicunya, proses akan lebih lancar bagi perusahaan yang mengetahui kondisi catatan dan posisinya sebelum permintaan pertama datang.",
      },
      { type: "h2", text: "Daftar periksa kesiapan" },
      {
        type: "ul",
        items: [
          "Rekonsiliasi laporan keuangan komersial dengan SPT PPh Badan.",
          "Rekonsiliasi peredaran usaha dengan SPT Masa PPN dan catatan PPh potong.",
          "Indeks kontrak utama, terutama dengan pihak afiliasi dan lawan transaksi luar negeri.",
          "Pastikan posisi yang bergantung pada interpretasi telah terdokumentasi.",
          "Tunjuk satu narahubung dan catat setiap permintaan serta tanggapan.",
        ],
      },
      { type: "h2", text: "Selama pemeriksaan" },
      {
        type: "p",
        text: "Tanggapi sesuai tenggat yang diberikan, serahkan yang diminta, dan jaga konsistensi penjelasan dengan posisi yang telah dilaporkan. Bila suatu temuan disengketakan, catat dasar ketidaksetujuan secara tertulis agar dapat digunakan pada tahap keberatan bila diperlukan.",
      },
    ],
    sources: [
      "Undang-Undang Nomor 6 Tahun 1983 tentang Ketentuan Umum dan Tata Cara Perpajakan (KUP) beserta perubahannya",
      "Peraturan Menteri Keuangan tentang tata cara pemeriksaan pajak yang berlaku",
    ],
    relatedServices: ["tax-controversy", "tax-advisory"],
  },
  {
    slug: "tax-governance-framework-large-companies",
    title: "Tax Governance bagi Perusahaan Besar: Membuat Risiko Pajak Terlihat oleh Direksi",
    excerpt:
      "Kerangka tax governance memperjelas siapa yang mengidentifikasi risiko pajak, siapa yang memutuskan, dan bagaimana keputusan didokumentasikan.",
    type: "Executive Briefing",
    topic: "Tax Governance",
    author: "Tim Redaksi PrimeTax",
    reviewer: "",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-08",
    readingMinutes: 4,
    status: "published",
    keyPoints: [
      "Tetapkan peran, toleransi risiko, dan ambang eskalasi.",
      "Gunakan register risiko yang benar-benar dapat dibaca manajemen.",
      "Dokumentasikan keputusan signifikan beserta dasarnya.",
    ],
    body: [
      {
        type: "p",
        text: "Bagi wajib pajak besar dan grup korporasi, risiko pajak jarang muncul dari satu kesalahan. Risiko lebih sering timbul dari kepemilikan tanggung jawab yang tidak jelas, proses yang tidak seragam antarentitas, atau keputusan signifikan yang diambil tanpa pandangan pajak yang terdokumentasi. Kerangka tata kelola menjawab akar persoalan tersebut.",
      },
      { type: "h2", text: "Empat elemen kerangka yang praktis" },
      {
        type: "ul",
        items: [
          "Kebijakan: pernyataan singkat tentang pendekatan perusahaan terhadap pajak dan toleransi risikonya.",
          "Peran: tanggung jawab yang jelas atas kepatuhan, advis, dan keputusan pajak.",
          "Kontrol: pemeriksaan utama atas SPT, pembayaran, dan rekonsiliasi.",
          "Eskalasi: ambang yang menentukan kapan persoalan dibawa ke CFO atau direksi.",
        ],
      },
      {
        type: "p",
        text: "Hasilnya harus praktis. Register risiko yang menilai persoalan berdasarkan kemungkinan dan dampak, serta ditinjau manajemen secara berkala, sering kali lebih bermanfaat bagi tata kelola dibandingkan buku pedoman kebijakan yang panjang.",
      },
    ],
    sources: [],
    relatedServices: ["tax-advisory"],
  },
];
