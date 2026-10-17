export type CaseStudy = {
  slug: string;
  title: string;
  segment: "korporasi" | "ukm";
  industry: string;
  services: string[];
  clientLabel: string;
  clientNamePublic: boolean;
  clientLogo?: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
  duration: string;
  quote?: { text: string; name: string; role: string };
  team: string[];
  publishedAt: string;
  disclaimer?: string;
};

export const DEFAULT_CASE_STUDY_DISCLAIMER =
  "Hasil setiap kasus bergantung pada fakta dan dokumen masing-masing; studi kasus ini bukan jaminan hasil serupa.";

export const caseStudies: CaseStudy[] = [
  {
    slug: "restitusi-ppn-manufaktur-komponen-otomotif",
    title: "Restitusi PPN Rp [X] M cair dalam [Y] bulan untuk produsen komponen otomotif",
    segment: "korporasi",
    industry: "Manufaktur & Kawasan Berikat",
    services: ["restitusi", "pendampingan-sp2dk-pemeriksaan"],
    clientLabel: "Perusahaan manufaktur PMA, Cikarang",
    clientNamePublic: false,
    challenge:
      "Klien mengalami akumulasi lebih bayar PPN yang signifikan akibat orientasi penjualan ekspor dan transaksi ke Kawasan Berikat. Manajemen sempat menunda pengajuan restitusi karena khawatir ratusan dokumen Faktur Pajak Masukan dan PIB/PEB belum terekonsiliasi penuh dengan arus uang dan persediaan.",
    approach: [
      "Melakukan pre-refund diagnostic review selama 3 minggu atas seluruh Faktur Pajak Masukan, dokumen PEB/PIB, dan mutasi rekening bank.",
      "Menyusun kertas kerja pengujian arus uang, arus utang/piutang, dan arus barang yang terindeks rapi sebelum SPT Masa PPN Lebih Bayar diajukan.",
      "Memisahkan faktur masukan yang belum memenuhi syarat formal agar tidak memicu sanksi koreksi selama pemeriksaan.",
      "Mendampingi tim pemeriksa secara proaktif dengan pemenuhan dokumen < 3 hari kerja sejak surat peminjaman diterima.",
    ],
    results: [
      { value: "Rp [X] M", label: "restitusi PPN cair ke rekening" },
      { value: "[Y] bulan", label: "durasi sejak pengajuan hingga SPMKP" },
      { value: "[X]%", label: "rasio pencairan dari nilai yang diajukan" },
    ],
    duration: "[Y] bulan",
    quote: {
      text: "Pra-audit sebelum pengajuan membuat proses pemeriksaan berjalan sangat tertib. Tim pemeriksa mendapatkan kertas kerja arus barang dan arus uang yang sudah siap sejak minggu pertama.",
      name: "[NAMA CFO KLIEN]",
      role: "Chief Financial Officer, Perusahaan Manufaktur PMA",
    },
    team: ["partner-sengketa-restitusi", "manager-kepatuhan-korporasi"],
    publishedAt: "2026-08-14",
    disclaimer: DEFAULT_CASE_STUDY_DISCLAIMER,
  },
  {
    slug: "sp2dk-ditutup-tanpa-skpkb-perdagangan-distribusi",
    title: "SP2DK senilai Rp [X] M ditutup tanpa SKPKB dalam [Y] minggu",
    segment: "korporasi",
    industry: "Perdagangan & E-commerce",
    services: ["pendampingan-sp2dk-pemeriksaan", "tax-health-check"],
    clientLabel: "Perusahaan distribusi nasional, Jakarta",
    clientNamePublic: false,
    challenge:
      "Klien menerima SP2DK atas dua tahun pajak sekaligus yang mempertanyakan selisih peredaran usaha antara SPT Tahunan PPh Badan dan SPT Masa PPN, serta dugaan kurang potong PPh Pasal 23 atas biaya promosi dan rabat distributor.",
    approach: [
      "Melakukan pemetaan 12 poin pertanyaan dalam SP2DK dan menyusun matriks ekualisasi omzet per cabang.",
      "Menelusuri perbedaan waktu pengakuan pendapatan komersial (akrual pengiriman) dengan saat pembuatan Faktur Pajak serta transaksi retur penjualan.",
      "Memilah kontrak program insentif distributor untuk membedakan diskon dagang (bukan objek PPh 23) dan imbalan jasa/hadiah sesuai regulasi yang berlaku.",
      "Menyusun surat tanggapan tertulis setebal [X] halaman beserta bundel bukti pendukung yang terverifikasi dan mendampingi 2 sesi pembahasan bersama AR.",
    ],
    results: [
      { value: "Rp [X] M", label: "selisih data berhasil dijelaskan dengan bukti" },
      { value: "0 SKPKB", label: "SP2DK selesai tanpa berlanjut ke pemeriksaan" },
      { value: "[Y] minggu", label: "penyelesaian sejak surat diterima" },
    ],
    duration: "[Y] minggu",
    quote: {
      text: "Awalnya tim finance kami panik karena nilai selisih di surat cukup besar. Setelah dibedah per akun dan direkonsiliasi oleh PrimeTax, ternyata seluruh selisih berasal dari beda waktu dan retur yang bisa dibuktikan.",
      name: "[NAMA HEAD OF FINANCE]",
      role: "Head of Finance & Accounting, Perusahaan Distribusi",
    },
    team: ["managing-partner", "partner-sengketa-restitusi"],
    publishedAt: "2026-09-05",
    disclaimer: DEFAULT_CASE_STUDY_DISCLAIMER,
  },
  {
    slug: "dokumentasi-transfer-pricing-grup-pma-tepat-waktu",
    title: "Dokumentasi Master File & Local File 4 entitas PMA selesai [X] hari sebelum tenggat",
    segment: "korporasi",
    industry: "Manufaktur & Kawasan Berikat",
    services: ["transfer-pricing", "pajak-internasional-gmt"],
    clientLabel: "Grup industri kimia PMA (4 entitas di Indonesia)",
    clientNamePublic: false,
    challenge:
      "Grup usaha memiliki transaksi pembelian bahan baku, royalti lisensi teknologi, dan management fee lintas negara. Pada tahun sebelumnya, penyusunan TP Doc terlambat melewati 30 April sehingga berisiko tidak diakui sebagai dokumentasi ex-ante saat pemeriksaan.",
    approach: [
      "Memulai wawancara analisis Fungsi, Aset, dan Risiko (FAR) serta pengumpulan data segmentasi laporan keuangan pada kuartal I sebelum audit laporan keuangan rampung.",
      "Menyusun kertas kerja pengujian pendahuluan (benefit test) dan dokumentasi bukti manfaat nyata atas jasa manajemen intragrup sesuai PMK 172/2023.",
      "Melakukan benchmarking pembanding independen regional dan melokalisasi Master File grup ke dalam Bahasa Indonesia.",
      "Menyerahkan paket lengkap Master File, Local File, dan Ikhtisar lampiran SPT Tahunan dengan tanda terima bertanggal sebelum tenggat.",
    ],
    results: [
      { value: "4 entitas", label: "Master File & Local File sesuai PMK 172/2023" },
      { value: "H-[X] hari", label: "selesai sebelum batas waktu 30 April" },
      { value: "100%", label: "transaksi afiliasi memiliki dokumentasi benefit test" },
    ],
    duration: "[Y] minggu",
    team: ["partner-transfer-pricing", "manager-transfer-pricing"],
    publishedAt: "2026-06-20",
    disclaimer: DEFAULT_CASE_STUDY_DISCLAIMER,
  },
  {
    slug: "transformasi-kepatuhan-bulanan-dan-coretax-ukm-ritel",
    title: "Perapihan pajak bulanan & migrasi Coretax untuk brand ritel multi-marketplace ([X]+ transaksi/bulan)",
    segment: "ukm",
    industry: "Perdagangan & E-commerce",
    services: ["kepatuhan-pajak", "coretax"],
    clientLabel: "Perusahaan UKM ritel & e-commerce, Jakarta Selatan",
    clientNamePublic: false,
    challenge:
      "Klien tumbuh cepat dari usaha perorangan menjadi PT PKP dengan ribuan pesanan per bulan di beberapa marketplace. Staf admin sering terlambat membuat bukti potong PPh 23 atas biaya platform/endorsement dan kesulitan menyamakan omzet kotor marketplace dengan dasar pengenaan PPN di Coretax.",
    approach: [
      "Menyusun SOP penarikan laporan settlement bulanan dari seluruh marketplace dan memisahkan omzet barang, komisi platform, serta biaya promosi.",
      "Mengatur akses role pengurus dan drafter di akun Coretax perusahaan serta menyediakan template rekonsiliasi bulanan otomatis.",
      "Mengambil alih perhitungan dan pelaporan rutin PPh 21 karyawan, PPh 23 vendor/KOL, dan SPT Masa PPN melalui Paket Growth UKM.",
    ],
    results: [
      { value: "100%", label: "SPT Masa & Tahunan terlapor tepat waktu selama [X] bulan" },
      { value: "[X] jam/bln", label: "waktu pemilik usaha yang dihemat tiap bulan" },
      { value: "Rp 0", label: "denda keterlambatan lapor sejak berlangganan" },
    ],
    duration: "Berjalan ([X] bulan)",
    quote: {
      text: "Dulu setiap tanggal 15 sampai akhir bulan saya selalu stres urus rekap pajak. Sekarang cukup kirim data penjualan dan rekening, tim PrimeTax yang hitung dan laporkan tepat waktu.",
      name: "[NAMA FOUNDER UKM]",
      role: "Founder, Brand Ritel & E-Commerce",
    },
    team: ["manager-ukm-startup"],
    publishedAt: "2026-09-28",
    disclaimer: DEFAULT_CASE_STUDY_DISCLAIMER,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
