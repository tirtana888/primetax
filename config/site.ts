export const site = {
  brandName: "PrimeTax",
  brandMarkInitial: "P",
  legalName: "PT. PrimeTax Infinity Berjaya",
  practiceLicenseNumber: "[NOMOR IZIN PRAKTIK]",
  tagline: "Tepercaya seperti firma besar, jelas dan mudah seperti fintech",
  url: "https://[DOMAIN]",
  contact: {
    whatsapp: "[NOMOR WA]", // format internasional tanpa '+', mis. 62XXXXXXXXXX
    phone: "[NOMOR TELEPON]",
    email: "[EMAIL]",
    businessEmail: "[EMAIL BISNIS]", // penerima notifikasi RFP
    privacyEmail: "[EMAIL DPO/PRIVASI]",
    address: "[ALAMAT KANTOR]",
    city: "[KOTA]",
    mapsUrl: "[URL GOOGLE MAPS]",
    hours: {
      days: "Senin–Jumat",
      open: "[JAM BUKA]",
      close: "[JAM TUTUP]",
      label: "[JAM OPERASIONAL]",
      tz: "Asia/Jakarta",
    },
    responseMinutesSme: "[X]",
    proposalDaysAfterScoping: "[X]",
  },
  social: {
    linkedin: "[URL LINKEDIN]",
    instagram: "[URL INSTAGRAM]",
    youtube: "[URL YOUTUBE]",
  },
  pricing: {
    starterFrom: "[HARGA STARTER]",
    growthFrom: "[HARGA GROWTH]",
    auditReadyFrom: "[HARGA AUDIT READY]",
    annualDiscountPercent: "[X]",
    currency: "IDR",
    warrantyPolicy: "[KEBIJAKAN GARANSI — KONFIRMASI]",
  },
  about: {
    vision: "[VISI]",
    mission: "[MISI]",
    seniorBackground: "[DJP/Big Four — isi sesuai fakta]",
    googleRating: "[RATING GOOGLE]",
  },
  booking: {
    smeUrl: "[URL BOOKING UKM 30 MENIT]",
    corporateUrl: "[URL BOOKING KORPORASI 45-60 MENIT]",
  },
  downloads: {
    companyProfileId: "/downloads/[company-profile-id].pdf",
    companyProfileEn: "/downloads/[company-profile-en].pdf",
  },
  flags: {
    companyProfileGate: "light" as "light" | "none",
    showPricing: true,
    mobilePathOrder: ["korporasi", "ukm"] as const,
    announcementBar: true,
    liveChat: false,
  },
} as const;
