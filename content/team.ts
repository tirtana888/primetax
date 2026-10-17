export type CertificationCode =
  | "BKP_A"
  | "BKP_B"
  | "BKP_C"
  | "KUASA_HUKUM_PP"
  | "IZIN_PRAKTIK"
  | "IKPI"
  | "CPA"
  | "CA"
  | "TP_CERT"
  | "OTHER";

export const CERTIFICATION_LABELS: Record<CertificationCode, string> = {
  BKP_A: "Bersertifikat BKP A",
  BKP_B: "Bersertifikat BKP B",
  BKP_C: "Bersertifikat BKP C",
  KUASA_HUKUM_PP: "Kuasa Hukum Pengadilan Pajak",
  IZIN_PRAKTIK: "Izin Praktik DJP",
  IKPI: "Anggota Asosiasi Konsultan Pajak",
  CPA: "CPA",
  CA: "Chartered Accountant (CA)",
  TP_CERT: "Transfer Pricing Specialist",
  OTHER: "Sertifikasi Pajak",
};

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  enRole: string;
  level: "Partner" | "Manager" | "Konsultan";
  photoPlaceholder: string;
  certifications: CertificationCode[];
  backgroundSummary: string;
  bio: string;
  expertise: string[];
  education: string[];
  linkedinUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    slug: "managing-partner",
    name: "[NAMA MANAGING PARTNER]",
    role: "Managing Partner — Tax Advisory & Controversy",
    enRole: "Managing Partner — Tax Advisory & Controversy",
    level: "Partner",
    photoPlaceholder: "[FOTO TIM: Managing Partner]",
    certifications: ["BKP_C", "KUASA_HUKUM_PP", "IZIN_PRAKTIK", "CA"],
    backgroundSummary:
      "Berpengalaman [X]+ tahun di bidang perpajakan korporasi dan penyelesaian sengketa ([DJP/Big Four — isi sesuai fakta]).",
    bio: "[NAMA MANAGING PARTNER] memimpin praktik konsultasi pajak strategis dan penyelesaian sengketa di PrimeTax. Selama lebih dari [X] tahun ([DJP/Big Four — isi sesuai fakta]), beliau telah mendampingi berbagai perusahaan multinasional (PMA) dan grup usaha nasional dalam menghadapi pemeriksaan pajak, keberatan, hingga persidangan banding di Pengadilan Pajak. Beliau memegang Sertifikat Konsultan Pajak tingkat C (BKP C) dan Izin Kuasa Hukum Pengadilan Pajak.",
    expertise: [
      "Sengketa & Pengadilan Pajak",
      "Pendampingan SP2DK & Pemeriksaan",
      "Tax Planning & Restrukturisasi",
      "Pajak Korporasi & PMA",
    ],
    education: [
      "[GELAR S2/S1 PERPAJAKAN / AKUNTANSI / HUKUM — UNIVERSITAS]",
      "Brevet Pajak A, B & C",
    ],
    linkedinUrl: "[URL LINKEDIN PARTNER 1]",
  },
  {
    slug: "partner-transfer-pricing",
    name: "[NAMA PARTNER TRANSFER PRICING]",
    role: "Partner — Transfer Pricing & International Tax",
    enRole: "Partner — Transfer Pricing & International Tax",
    level: "Partner",
    photoPlaceholder: "[FOTO TIM: Partner Transfer Pricing]",
    certifications: ["BKP_C", "IZIN_PRAKTIK", "TP_CERT"],
    backgroundSummary:
      "Spesialis Transfer Pricing, P3B (Tax Treaty), dan Pajak Minimum Global (GMT/Pilar Dua) dengan pengalaman [DJP/Big Four — isi sesuai fakta].",
    bio: "[NAMA PARTNER TRANSFER PRICING] memimpin divisi Transfer Pricing dan Pajak Internasional di PrimeTax. Beliau berfokus pada penyusunan dokumentasi harga transfer (Master File, Local File, CbCR) sesuai PMK 172/2023, kajian perjanjian penghindaran pajak berganda (P3B), serta penilaian dampak Pajak Minimum Global (Pilar Dua / GloBE) bagi entitas grup multinasional di Indonesia.",
    expertise: [
      "Transfer Pricing (PMK 172/2023)",
      "Pajak Internasional & P3B",
      "Pajak Minimum Global (GMT / Pilar Dua)",
      "Sengketa Transfer Pricing & MAP/APA",
    ],
    education: [
      "[GELAR S2/S1 FISKAL / EKONOMI — UNIVERSITAS]",
      "Sertifikasi Konsultan Pajak Tingkat C (BKP C)",
    ],
    linkedinUrl: "[URL LINKEDIN PARTNER 2]",
  },
  {
    slug: "partner-sengketa-restitusi",
    name: "[NAMA PARTNER RESTITUSI & LITIGASI]",
    role: "Partner — Tax Audit, Refund & Litigation",
    enRole: "Partner — Tax Audit, Refund & Litigation",
    level: "Partner",
    photoPlaceholder: "[FOTO TIM: Partner Restitusi & Litigasi]",
    certifications: ["BKP_B", "KUASA_HUKUM_PP", "IZIN_PRAKTIK"],
    backgroundSummary:
      "Fokus pada pendampingan restitusi PPN/PPh, pemeriksaan pajak manufaktur & eksportir, serta litigasi Pengadilan Pajak ([DJP/Big Four — isi sesuai fakta]).",
    bio: "[NAMA PARTNER RESTITUSI & LITIGASI] memiliki keahlian mendalam dalam pengujian arus kas, arus barang, dan ekualisasi fiskal untuk pendampingan restitusi PPN dan PPh Badan. Beliau mendampingi berbagai perusahaan di sektor manufaktur, Kawasan Berikat, perdagangan besar, dan sumber daya alam dalam proses pemeriksaan lebih bayar hingga penyelesaian sengketa.",
    expertise: [
      "Restitusi PPN & PPh Badan",
      "Pendampingan SP2DK & Pemeriksaan",
      "Tax Health Check / Diagnostic Review",
      "Kuasa Hukum Pengadilan Pajak",
    ],
    education: [
      "[GELAR S1 AKUNTANSI / PERPAJAKAN — UNIVERSITAS]",
      "Izin Kuasa Hukum Pengadilan Pajak",
    ],
    linkedinUrl: "[URL LINKEDIN PARTNER 3]",
  },
  {
    slug: "manager-kepatuhan-korporasi",
    name: "[NAMA SENIOR MANAGER KORPORASI]",
    role: "Senior Manager — Corporate Compliance & Coretax",
    enRole: "Senior Manager — Corporate Compliance & Coretax",
    level: "Manager",
    photoPlaceholder: "[FOTO TIM: Senior Manager Korporasi]",
    certifications: ["BKP_B", "IZIN_PRAKTIK", "CA"],
    backgroundSummary:
      "Mengelola kepatuhan pajak korporasi, rekonsiliasi fiskal tahunan, Tax Due Diligence, dan implementasi Coretax skala perusahaan.",
    bio: "[NAMA SENIOR MANAGER KORPORASI] memimpin tim kepatuhan korporasi dan diagnostik pajak. Beliau berpengalaman menangani rekonsiliasi fiskal kompleks, ekualisasi PPh Badan terhadap PPN dan PPh potong/pungut, serta membantu tim finance perusahaan menata alur kerja e-Faktur dan e-Bupot Unifikasi di sistem Coretax.",
    expertise: [
      "Kepatuhan Pajak Korporasi",
      "Implementasi & Rekonsiliasi Coretax",
      "Tax Due Diligence",
      "Ekualisasi Fiskal",
    ],
    education: ["[GELAR S1 AKUNTANSI — UNIVERSITAS]", "Chartered Accountant (CA)"],
    linkedinUrl: "[URL LINKEDIN MANAGER 1]",
  },
  {
    slug: "manager-ukm-startup",
    name: "[NAMA MANAGER UKM & STARTUP]",
    role: "Manager — SME & Startup Tax Services",
    enRole: "Manager — SME & Startup Tax Services",
    level: "Manager",
    photoPlaceholder: "[FOTO TIM: Manager UKM & Startup]",
    certifications: ["BKP_B", "IZIN_PRAKTIK"],
    backgroundSummary:
      "Mendampingi ratusan pemilik UKM, ritel e-commerce, dan startup teknologi dalam kepatuhan pajak bulanan dan perizinan PKP.",
    bio: "[NAMA MANAGER UKM & STARTUP] memimpin jalur layanan khusus UKM dan startup di PrimeTax. Beliau berfokus menerjemahkan aturan pajak yang teknis menjadi alur kerja bulanan yang sederhana, tepat waktu, dan bebas ribet bagi pemilik bisnis yang belum memiliki departemen pajak internal.",
    expertise: [
      "Kepatuhan Pajak Bulanan UKM",
      "PPN Marketplace & E-Commerce",
      "PPh 21 TER Karyawan",
      "Pendirian Usaha, NPWP & Pengukuhan PKP",
    ],
    education: ["[GELAR S1/D4 PERPAJAKAN — UNIVERSITAS]", "Bersertifikat BKP B"],
    linkedinUrl: "[URL LINKEDIN MANAGER 2]",
  },
  {
    slug: "manager-transfer-pricing",
    name: "[NAMA MANAGER TRANSFER PRICING]",
    role: "Manager — Transfer Pricing & Benchmarking",
    enRole: "Manager — Transfer Pricing & Benchmarking",
    level: "Konsultan",
    photoPlaceholder: "[FOTO TIM: Manager Transfer Pricing]",
    certifications: ["BKP_A", "TP_CERT"],
    backgroundSummary:
      "Spesialis analisis ekonomi, benchmarking pembanding independen, dan penyusunan Local File/Master File.",
    bio: "[NAMA MANAGER TRANSFER PRICING] bertanggung jawab atas analisis Fungsi, Aset, dan Risiko (FAR), pencarian pembanding database komersial, serta penyusunan pengujian pendahuluan (benefit test) atas transaksi jasa manajemen, royalti, dan pinjaman intragrup.",
    expertise: [
      "Studi Benchmarking TP",
      "Penyusunan Local File & Master File",
      "Benefit Test Jasa Intragrup",
    ],
    education: ["[GELAR S1 ILMU ADMINISTRASI FISKAL / EKONOMI — UNIVERSITAS]"],
    linkedinUrl: "[URL LINKEDIN KONSULTAN 1]",
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug);
}
