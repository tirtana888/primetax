export type InsightCategory = "Update Regulasi" | "Panduan Praktis" | "Buletin";

export interface InsightSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  segment: "korporasi" | "ukm" | "both";
  authorSlug: string;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  featured?: boolean;
  quickSummary: string[];
  regulationBasis: string[];
  sections: InsightSection[];
  tags: string[];
}

export const insightArticles: InsightArticle[] = [
  {
    slug: "panduan-lengkap-menjawab-sp2dk-14-hari",
    title: "Panduan praktis menyusun tanggapan SP2DK dalam tenggat 14 hari",
    excerpt:
      "Langkah demi langkah memetakan selisih data, menyiapkan kertas kerja ekualisasi, dan menyusun surat penjelasan SP2DK yang terukur.",
    category: "Panduan Praktis",
    segment: "both",
    authorSlug: "managing-partner",
    publishedAt: "2026-10-12",
    updatedAt: "2026-10-15",
    readingTimeMinutes: 6,
    featured: true,
    quickSummary: [
      "SP2DK adalah surat permintaan penjelasan atas data dan/atau keterangan dari KPP—bukan surat perintah pemeriksaan pajak.",
      "Wajib pajak umumnya memiliki waktu 14 hari kalender untuk menyampaikan penjelasan tertulis beserta dokumen pendukung.",
      "Kunci penyelesaian SP2DK adalah kertas kerja ekualisasi (omzet PPh Badan vs PPN, serta akun biaya vs objek PPh potong/pungut) yang didukung bukti transaksi.",
    ],
    regulationBasis: [
      "UU Ketentuan Umum dan Tata Cara Perpajakan (UU KUP) sebagaimana diubah terakhir dengan UU HPP",
      "SE-05/PJ/2022 & ketentuan terbaru terkait Pengawasan Kepatuhan Wajib Pajak (P2DK)",
    ],
    sections: [
      {
        id: "memahami-tujuan-sp2dk",
        heading: "Memahami tujuan diterbitkannya SP2DK",
        paragraphs: [
          "SP2DK (Surat Permintaan Penjelasan atas Data dan/atau Keterangan) diterbitkan oleh Kepala Kantor Pelayanan Pajak (KPP) ketika sistem pengawasan menemukan selisih antara data SPT wajib pajak dengan data pihak ketiga, lawan transaksi, atau ekualisasi antar-jenis pajak.",
          "Pada tahap ini, kantor pajak memberikan kesempatan kepada wajib pajak untuk memberikan klarifikasi faktual ataupun melakukan pembetulan SPT secara sukarela apabila memang terdapat kekeliruan.",
        ],
      },
      {
        id: "tiga-pemicu-utama",
        heading: "Tiga pemicu SP2DK yang paling sering terjadi",
        paragraphs: [
          "Berdasarkan pengalaman pendampingan kami baik untuk korporasi maupun UKM, sebagian besar SP2DK berakar dari tiga kelompok selisih data berikut:",
        ],
        bullets: [
          "Selisih peredaran usaha di SPT Tahunan PPh Badan dengan total penyerahan pada SPT Masa PPN selama 12 masa pajak.",
          "Selisih akun biaya gaji/tunjangan, jasa profesional, sewa, atau bunga di laporan laba rugi dengan dasar pengenaan pajak pada SPT Masa PPh 21 dan PPh Unifikasi.",
          "Transaksi dengan pihak berelasi (afiliasi) atau selisih arus kas/kekayaan bersih dengan profil penghasilan yang dilaporkan.",
        ],
      },
      {
        id: "langkah-menyusun-tanggapan",
        heading: "Langkah menyusun tanggapan tertulis yang sistematis",
        paragraphs: [
          "Hindari menghadiri pembahasan tanpa kertas kerja tertulis. Susun tanggapan Anda secara berurutan: mulai dari tabel ringkasan angka menurut SP2DK vs menurut wajib pajak, penjelasan penyebab selisih (misalnya beda waktu pengakuan akrual, uang muka, atau retur), hingga indeks bukti lampiran.",
          "Pastikan surat penjelasan disampaikan secara resmi sebelum tenggat waktu berakhir dan simpan tanda terima penyampaian serta Berita Acara pelaksanaan P2DK.",
        ],
      },
    ],
    tags: ["sp2dk", "pemeriksaan", "kepatuhan"],
  },
  {
    slug: "checklist-migrasi-dan-rekonsiliasi-coretax-untuk-finance",
    title: "Checklist kesiapan Coretax untuk tim finance UKM dan korporasi",
    excerpt:
      "Hal-hal teknis yang wajib dicek pada akun Coretax perusahaan: penunjukan wakil/kuasa (impersonate), e-Faktur, e-Bupot, dan Taxpayer Ledger.",
    category: "Panduan Praktis",
    segment: "both",
    authorSlug: "manager-kepatuhan-korporasi",
    publishedAt: "2026-10-08",
    updatedAt: "2026-10-14",
    readingTimeMinutes: 5,
    quickSummary: [
      "Coretax menggabungkan seluruh layanan administrasi perpajakan (pendaftaran, e-Faktur, e-Bupot, SPT, pembayaran, dan buku besar pajak) dalam satu portal terintegrasi.",
      "Pengurus wajib menunjuk PIC/drafter/signer melalui mekanisme role & impersonating dari akun pribadi yang telah tervalidasi NIK/NPWP 16 digit.",
      "Lakukan rekonsiliasi berkala antara saldo Taxpayer Ledger di Coretax dengan buku besar akuntansi perusahaan.",
    ],
    regulationBasis: [
      "PMK Nomor 81 Tahun 2024 tentang Ketentuan Perpajakan dalam Rangka Pelaksanaan Sistem Inti Administrasi Perpajakan (Coretax)",
      "Peraturan pelaksanaan DJP terkait e-Faktur dan SPT Masa di Coretax",
    ],
    sections: [
      {
        id: "mengatur-akses-impersonate",
        heading: "Mengatur akses pengurus, staf finance, dan konsultan (impersonating)",
        paragraphs: [
          "Berbeda dengan sistem lama yang menggunakan satu akun login bersama untuk perusahaan, Coretax memisahkan identitas wajib pajak badan dengan akun individu pengurus atau kuasa yang bertindak mewakili badan tersebut.",
          "Pastikan Direktur utama telah mengaktifkan akun dan sertifikat elektronik/kode otorisasi DJP, lalu menetapkan peran (role) yang tepat bagi staf pembuat draf (drafter) dan penandatangan (signer).",
        ],
      },
      {
        id: "penyatuan-batas-setor-dan-lapor",
        heading: "Memperhatikan keseragaman tenggat setor dan lapor",
        paragraphs: [
          "Di bawah rezim PMK 81/2024, tanggal jatuh tempo penyetoran dan pelaporan pajak masa diselaraskan untuk memudahkan administrasi wajib pajak. Tim finance perlu memperbarui kalender kerja bulanan agar pembuatan bukti potong dan faktur pajak selesai sebelum penutupan buku bulanan.",
        ],
      },
      {
        id: "rekonsiliasi-taxpayer-ledger",
        heading: "Memantau buku besar wajib pajak (Taxpayer Ledger)",
        paragraphs: [
          "Setiap kewajiban SPT, pembayaran deposit pajak, pengkreditan, hingga ketetapan pajak tercatat langsung sebagai debit dan kredit di Taxpayer Ledger. Biasakan memeriksa kesesuaian saldo ledger ini setiap akhir bulan.",
        ],
      },
    ],
    tags: ["coretax", "e-faktur", "kepatuhan", "ukm", "korporasi"],
  },
  {
    slug: "aturan-transfer-pricing-pmk-172-2023-poin-kritis",
    title: "Evaluasi kepatuhan Transfer Pricing PMK 172/2023: Pengujian pendahuluan & tenggat 4 bulan",
    excerpt:
      "Mengapa pengujian manfaat (benefit test) atas jasa manajemen, royalti, dan pinjaman afiliasi menjadi titik krusial dalam pemeriksaan TP.",
    category: "Update Regulasi",
    segment: "korporasi",
    authorSlug: "partner-transfer-pricing",
    publishedAt: "2026-10-03",
    updatedAt: "2026-10-03",
    readingTimeMinutes: 7,
    quickSummary: [
      "PMK 172/2023 menyatukan ketentuan penyusunan TP Doc, penerapan Prinsip Kewajaran dan Kelaziman Usaha (PKKU), hingga prosedur MAP dan APA.",
      "Transaksi tertentu (jasa intragrup, harta tak berwujud/royalti, biaya pinjaman, restrukturisasi usaha) wajib melewati pengujian pendahuluan (preliminary steps) sebelum analisis harga pembanding.",
      "Master File dan Local File wajib tersedia paling lama 4 bulan setelah akhir tahun pajak dan diserahkan maksimal 1 bulan sejak diminta DJP.",
    ],
    regulationBasis: [
      "PMK Nomor 172 Tahun 2023 tentang Penerapan Prinsip Kewajaran dan Kelaziman Usaha dalam Transaksi yang Dipengaruhi Hubungan Istimewa",
      "Pasal 18 ayat (3) UU Pajak Penghasilan",
    ],
    sections: [
      {
        id: "ambang-batas-wajib-tp-doc",
        heading: "Ambang batas wajib pajak yang harus menyusun TP Doc",
        paragraphs: [
          "Wajib pajak yang melakukan transaksi hubungan istimewa wajib menyelenggarakan dan menyimpan Dokumen Induk (Master File) dan Dokumen Lokal (Local File) apabila peredaran bruto tahun pajak sebelumnya lebih dari Rp 50 miliar, atau nilai transaksi afiliasi melampaui Rp 20 miliar (barang berwujud) atau Rp 5 miliar (jasa, bunga, royalti, atau transaksi lainnya).",
        ],
      },
      {
        id: "pentingnya-pengujian-pendahuluan",
        heading: "Pengujian pendahuluan (benefit test) sebagai benteng pertama",
        paragraphs: [
          "Dalam pemeriksaan Transfer Pricing, pemeriksa tidak langsung melihat persentase mark-up atau margin laba. Untuk pembayaran jasa manajemen atau royalti ke induk perusahaan, pemeriksa akan menguji apakah jasa tersebut benar-benar telah diberikan, memberikan manfaat ekonomi nyata bagi anak perusahaan di Indonesia, dan bukan merupakan duplikasi kegiatan maupun shareholder activity.",
          "Karena itu, dokumentasi bukti kerja (deliverables, korespondensi teknis, timesheet, dan kalkulasi alokasi biaya) harus dikumpulkan sepanjang tahun berjalan.",
        ],
      },
    ],
    tags: ["transfer-pricing", "pmk-172", "korporasi", "pma"],
  },
  {
    slug: "persiapan-restitusi-ppn-agar-pencairan-lancar",
    title: "5 persiapan wajib sebelum mengajukan restitusi PPN agar proses pemeriksaan lancar",
    excerpt:
      "Apa saja yang diuji pemeriksa pajak saat permohonan lebih bayar PPN diajukan, dan bagaimana memilih antara pengembalian pendahuluan vs pemeriksaan normal.",
    category: "Panduan Praktis",
    segment: "both",
    authorSlug: "partner-sengketa-restitusi",
    publishedAt: "2026-09-25",
    updatedAt: "2026-09-25",
    readingTimeMinutes: 6,
    quickSummary: [
      "Restitusi PPN bukan hal yang perlu ditakuti apabila Faktur Pajak Masukan, arus uang, dan arus barang telah teruji sebelum pengajuan.",
      "Cek apakah perusahaan Anda memenuhi syarat Pengembalian Pendahuluan (PKP Berisiko Rendah atau ambang nilai tertentu) yang prosesnya jauh lebih cepat.",
      "Siapkan rekonsiliasi ekspor (PEB vs Faktur/Invoice) dan bukti pembayaran rekening koran atas seluruh kredit pajak masukan.",
    ],
    regulationBasis: [
      "Pasal 9, Pasal 17B, Pasal 17C, dan Pasal 17D UU KUP",
      "Ketentuan PMK terkait Pengembalian Pendahuluan Kelebihan Pembayaran Pajak",
    ],
    sections: [
      {
        id: "uji-arus-uang-dan-barang",
        heading: "Menguji kesesuaian arus uang dan arus barang sejak awal",
        paragraphs: [
          "Fokus utama pemeriksaan lebih bayar PPN adalah memastikan kebenaran materiil dari Faktur Pajak Masukan yang dikreditkan serta kelengkapan bukti atas penyerahan ekspor atau penyerahan kepada Pemungut PPN.",
          "Sebelum memilih opsi 'Restitusi' pada SPT Masa PPN, pastikan setiap faktur masukan bernilai besar telah dilengkapi dengan PO, surat jalan/berita acara serah terima, invoice, dan bukti transfer bank dari rekening perusahaan.",
        ],
      },
      {
        id: "memilih-jalur-pengembalian",
        heading: "Pengembalian pendahuluan vs pemeriksaan normal",
        paragraphs: [
          "Wajib pajak yang memenuhi kriteria tertentu atau persyaratan PKP Berisiko Rendah dapat memperoleh SKPPKP dalam waktu sekitar 1 bulan melalui penelitian administrasi. Namun, pastikan tetap menjaga kerapian dokumen karena DJP tetap memiliki wewenang melakukan pemeriksaan pasca-pengembalian pendahuluan.",
        ],
      },
    ],
    tags: ["restitusi", "ppn", "pemeriksaan"],
  },
  {
    slug: "pajak-minimum-global-pilar-dua-indonesia-panduan-cfo",
    title: "Pajak Minimum Global (GMT / Pilar Dua) di Indonesia: Apa yang perlu disiapkan CFO?",
    excerpt:
      "Memahami mekanisme Income Inclusion Rule (IIR), Domestic Minimum Top-up Tax (QDMTT), dan dampaknya terhadap grup multinasional di Indonesia.",
    category: "Update Regulasi",
    segment: "korporasi",
    authorSlug: "partner-transfer-pricing",
    publishedAt: "2026-09-18",
    updatedAt: "2026-10-01",
    readingTimeMinutes: 8,
    quickSummary: [
      "Aturan Pajak Minimum Global menetapkan tarif pajak efektif (Effective Tax Rate / ETR) minimum sebesar 15% bagi grup MNE dengan pendapatan konsolidasi ≥ EUR 750 juta.",
      "Kehadiran QDMTT (Qualified Domestic Minimum Top-up Tax) di Indonesia memastikan potensi pajak tambahan (top-up tax) atas laba di Indonesia dipungut di dalam negeri.",
      "Perusahaan penerima fasilitas tax holiday atau berada di KEK perlu mengevaluasi dampak ETR GloBE dan kelayakan Transitional CbCR Safe Harbour.",
    ],
    regulationBasis: [
      "PMK Nomor 136 Tahun 2024 tentang Pengenaan Pajak Minimum Global Berdasarkan Kesepakatan Internasional",
      "OECD/G20 Inclusive Framework on BEPS — Pillar Two Global Anti-Base Erosion (GloBE) Rules",
    ],
    sections: [
      {
        id: "cakupan-dan-ambang-batas",
        heading: "Cakupan entitas yang terdampak di Indonesia",
        paragraphs: [
          "Meskipun induk utama (Ultimate Parent Entity) berada di luar negeri, anak perusahaan di Indonesia tetap merupakan Entitas Konstituen yang wajib menyediakan data akuntansi dan perpajakan untuk perhitungan ETR yurisdiksi Indonesia serta memenuhi kewajiban pelaporan domestik.",
        ],
      },
      {
        id: "dampak-terhadap-insentif-fiskal",
        heading: "Evaluasi ulang manfaat insentif fiskal (Tax Holiday & Tax Allowance)",
        paragraphs: [
          "Apabila fasilitas pembebasan atau pengurangan PPh Badan menurunkan ETR GloBE entitas di bawah 15% setelah memperhitungkan Substance-Based Income Exclusion (SBIE), maka selisih tarif tersebut dapat dikenakan Top-up Tax.",
        ],
      },
    ],
    tags: ["gmt", "pilar-dua", "pajak-internasional", "korporasi"],
  },
  {
    slug: "cara-hitung-pph-21-ter-dan-rekonsiliasi-desember",
    title: "Cara menghitung PPh 21 skema TER bulanan dan rekonsiliasi masa pajak Desember",
    excerpt:
      "Panduan sederhana bagi HR dan tim finance untuk menerapkan Tarif Efektif Rata-rata (TER A/B/C) dari Januari–November dan perhitungan Pasal 17 di bulan Desember.",
    category: "Panduan Praktis",
    segment: "ukm",
    authorSlug: "manager-ukm-startup",
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-10",
    readingTimeMinutes: 5,
    quickSummary: [
      "Masa pajak Januari s.d. November menggunakan Tarif Efektif Bulanan (TER Kategori A, B, atau C) dikalikan penghasilan bruto sebulan.",
      "Masa pajak Desember (atau masa pajak terakhir pegawai bekerja) tetap menggunakan tarif progresif Pasal 17 UU PPh dikurangi total PPh 21 yang sudah dipotong pada Januari–November.",
      "Waspadai lonjakan potongan di bulan Desember apabila pada pertengahan tahun terdapat pembayaran THR atau bonus besar.",
    ],
    regulationBasis: [
      "PP Nomor 58 Tahun 2023",
      "PMK Nomor 168 Tahun 2023 tentang Petunjuk Pelaksanaan Pemotongan Pajak atas Penghasilan Sehubungan dengan Pekerjaan, Jasa, atau Kegiatan Orang Pribadi",
    ],
    sections: [
      {
        id: "perbedaan-januari-november-dan-desember",
        heading: "Cara kerja TER bulanan vs perhitungan akhir tahun",
        paragraphs: [
          "Skema TER dirancang untuk menyederhanakan perhitungan bulanan: HR cukup menjumlahkan penghasilan bruto teratur dan tidak teratur dalam satu bulan, lalu mengalikan dengan satu tarif persentase sesuai status PTKP pegawai.",
          "Namun, total beban pajak setahun penuh tidak berubah dibanding aturan lama karena pada masa Desember dilakukan perhitungan ulang menggunakan penghasilan neto disetahunkan dikurangi PTKP dan dikalikan tarif Pasal 17.",
        ],
      },
    ],
    tags: ["pph-21", "ukm", "kepatuhan"],
  },
  {
    slug: "kapan-ukm-wajib-pkp-dan-tips-kelola-ppn",
    title: "Kapan UKM wajib dikukuhkan sebagai PKP dan bagaimana cara mengelola PPN tanpa mengganggu kas?",
    excerpt:
      "Memahami batas omzet Rp 4,8 miliar, untung-rugi menjadi PKP sukarela untuk proyek B2B, serta cara memisahkan uang PPN dari kas operasional.",
    category: "Panduan Praktis",
    segment: "ukm",
    authorSlug: "manager-ukm-startup",
    publishedAt: "2026-08-29",
    updatedAt: "2026-08-29",
    readingTimeMinutes: 5,
    quickSummary: [
      "Pengusaha wajib melaporkan usahanya untuk dikukuhkan sebagai PKP paling lambat akhir bulan berikutnya setelah omzet dalam satu tahun buku melampaui Rp 4,8 miliar.",
      "Usaha dengan omzet di bawah Rp 4,8 miliar dapat memilih menjadi PKP sukarela jika mayoritas pelanggannya adalah perusahaan korporasi atau instansi pemerintah.",
      "Selalu pisahkan rekening penampungan PPN Keluaran agar dana pajak tidak terpakai untuk modal kerja.",
    ],
    regulationBasis: [
      "UU PPN sebagaimana diubah terakhir dengan UU HPP",
      "PMK Nomor 197/PMK.03/2013 tentang Batasan Pengusaha Kecil PPN",
    ],
    sections: [
      {
        id: "batas-waktu-pengukuhan-pkp",
        heading: "Memantau ambang omzet Rp 4,8 miliar secara bulanan",
        paragraphs: [
          "Jangan menunggu tutup buku Desember untuk menghitung total penjualan. Jika pada bulan Agustus akumulasi omzet kotor sejak Januari sudah menembus Rp 4,8 miliar, maka pengajuan PKP wajib dilakukan paling lambat akhir bulan September.",
        ],
      },
    ],
    tags: ["pkp", "ppn", "ukm", "pendirian-pt"],
  },
  {
    slug: "alur-keberatan-dan-banding-pengadilan-pajak",
    title: "Memahami alur keberatan hingga banding di Pengadilan Pajak beserta mitigasi risiko sanksi",
    excerpt:
      "Tenggat waktu, syarat formal pelunasan pajak yang disetujui saat PHP, dan strategi menyusun matriks pembuktian yang efektif.",
    category: "Update Regulasi",
    segment: "korporasi",
    authorSlug: "partner-sengketa-restitusi",
    publishedAt: "2026-08-19",
    updatedAt: "2026-08-19",
    readingTimeMinutes: 7,
    quickSummary: [
      "Keberatan diajukan ke DJP paling lama 3 bulan sejak tanggal pengiriman SKP, setelah wajib pajak melunasi minimal sebesar jumlah yang disetujui dalam pembahasan akhir (PHP).",
      "Banding diajukan ke Pengadilan Pajak paling lama 3 bulan sejak tanggal diterima Keputusan Keberatan.",
      "Keputusan di tahap Pembahasan Akhir (PHP) sangat menentukan: angka yang tidak disetujui di PHP tertangguh pembayarannya, namun memiliki konsekuensi sanksi administrasi jika upaya hukum ditolak.",
    ],
    regulationBasis: [
      "Pasal 25, Pasal 26, dan Pasal 27 UU KUP jo. UU HPP",
      "UU Nomor 14 Tahun 2002 tentang Pengadilan Pajak",
    ],
    sections: [
      {
        id: "pentingnya-tahap-php",
        heading: "Mengapa keputusan di tahap Pembahasan Akhir (PHP) krusial",
        paragraphs: [
          "Strategi sengketa pajak yang baik sebenarnya dimulai sebelum SKP diterbitkan, yakni pada saat menanggapi SPHP dan menghadiri Pembahasan Akhir Hasil Pemeriksaan (PHP). Di tahap inilah wajib pajak memisahkan mana koreksi yang disetujui dan mana yang akan dibawa ke tahap Keberatan.",
        ],
      },
    ],
    tags: ["keberatan", "banding", "pengadilan-pajak", "sengketa"],
  },
];

export const bulletins = [
  {
    id: "buletin-oktober-2026",
    monthLabel: "Oktober 2026",
    title: "Buletin Pajak Bulanan — Edisi Oktober 2026: Evaluasi Kepatuhan Kuartal IV & Kesiapan Tutup Buku",
    highlights: [
      "Ringkasan tenggat pajak Oktober–November 2026 di sistem Coretax",
      "3 langkah pra-cek ekualisasi PPh Badan vs PPN sebelum akhir tahun buku",
      "Persiapan perhitungan PPh 21 masa pajak terakhir (Desember) untuk tim HR & Finance",
    ],
    pdfUrl: "/downloads/[buletin-pajak-oktober-2026].pdf",
  },
  {
    id: "buletin-september-2026",
    monthLabel: "September 2026",
    title: "Buletin Pajak Bulanan — Edisi September 2026: Mitigasi Risiko SP2DK & Dokumentasi Afiliasi",
    highlights: [
      "Pola pertanyaan SP2DK semester II dan cara menyiapkan kertas kerja rekonsiliasi",
      "Checklist dokumentasi benefit test jasa manajemen intragrup sesuai PMK 172/2023",
      "Panduan pengkreditan Faktur Pajak Masukan di Coretax",
    ],
    pdfUrl: "/downloads/[buletin-pajak-september-2026].pdf",
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug);
}
