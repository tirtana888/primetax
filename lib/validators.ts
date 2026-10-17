import { z } from "zod";

/**
 * Validasi nomor telepon/WA Indonesia setelah prefix +62:
 * Otomatis menghapus angka 0 atau 62 di depan dan memastikan 9-13 digit angka (§6.2).
 */
export function normalizeIndonesianPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("62")) {
    return digits.slice(2);
  }
  if (digits.startsWith("0")) {
    return digits.slice(1);
  }
  return digits;
}

export const indonesianPhoneSchema = z
  .string()
  .min(1, "Masukkan nomor WhatsApp/telepon Anda.")
  .transform((val) => normalizeIndonesianPhone(val))
  .refine((val) => /^\d{9,13}$/.test(val), {
    message: "Masukkan 9–13 digit nomor setelah +62, contoh: 81234567890.",
  });

/**
 * Skema Form Singkat UKM (§10.2)
 */
export const smeFormSchema = z.object({
  fullName: z.string().min(2, "Masukkan nama lengkap Anda (minimal 2 karakter)."),
  whatsapp: indonesianPhoneSchema,
  email: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: "Masukkan alamat email yang valid, contoh: nama@usaha.id.",
    }),
  businessName: z.string().trim().optional(),
  businessType: z.enum(
    [
      "Perdagangan / Toko Online",
      "Jasa",
      "F&B / Kuliner",
      "Manufaktur Kecil",
      "Startup Teknologi",
      "Lainnya",
    ],
    {
      errorMap: () => ({ message: "Pilih jenis usaha Anda." }),
    }
  ),
  annualRevenue: z.enum(
    ["< Rp 500 juta", "Rp 500 juta–4,8 miliar", "> Rp 4,8 miliar", "Belum tahu"],
    {
      errorMap: () => ({ message: "Pilih kisaran omzet tahunan usaha Anda." }),
    }
  ),
  currentNeed: z.enum(
    [
      "Lapor SPT",
      "PPh 21 karyawan",
      "PPN & e-Faktur/Coretax",
      "Dapat SP2DK",
      "Restitusi",
      "Pendirian PT/NPWP/PKP",
      "Lainnya",
    ],
    {
      errorMap: () => ({ message: "Pilih kebutuhan utama Anda saat ini." }),
    }
  ),
  message: z
    .string()
    .max(1000, "Cerita singkat maksimal 1.000 karakter.")
    .optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Anda wajib menyetujui pemrosesan data sesuai Kebijakan Privasi (UU PDP).",
    }),
  }),
  honeypot: z.string().max(0).optional(),
});

export type SmeFormValues = z.infer<typeof smeFormSchema>;

/**
 * Skema Form RFP / Minta Proposal Korporasi 3 Langkah (§10.3)
 */
export const rfpStep1Schema = z.object({
  companyName: z.string().min(2, "Masukkan nama resmi perusahaan Anda."),
  industry: z.string().min(1, "Pilih industri perusahaan Anda."),
  companyStatus: z.enum(["PMA", "PMDN", "BUMN/BUMD", "Tbk", "Lainnya"], {
    errorMap: () => ({ message: "Pilih status perusahaan." }),
  }),
  annualRevenue: z.string().optional(),
  picName: z.string().min(2, "Masukkan nama lengkap PIC."),
  picRole: z.string().min(2, "Masukkan jabatan PIC (mis. CFO, Tax Manager, Finance Head)."),
  workEmail: z
    .string()
    .min(1, "Masukkan alamat email kantor Anda.")
    .email("Masukkan email kantor yang valid, contoh: nama@perusahaan.co.id."),
  phone: indonesianPhoneSchema,
});

export const rfpStep2Schema = z.object({
  servicesNeeded: z
    .array(z.string())
    .min(1, "Pilih minimal satu layanan yang dibutuhkan."),
  description: z
    .string()
    .min(15, "Jelaskan singkat kebutuhan atau konteks kasus Anda (minimal 15 karakter).")
    .max(2000, "Deskripsi maksimal 2.000 karakter."),
  targetDeadline: z.string().optional(),
  djpLetterStatus: z
    .enum(["Tidak", "SP2DK", "Surat Pemeriksaan", "SKP", "Lainnya"])
    .optional(),
});

export const rfpStep3Schema = z.object({
  requireNda: z.enum(["Ya", "Tidak"]).optional(),
  contactPreference: z.enum(
    ["Email", "Telepon", "Meeting online", "Meeting di kantor"],
    {
      errorMap: () => ({ message: "Pilih preferensi cara kami menghubungi Anda." }),
    }
  ),
  preferredSchedule: z.string().optional(),
  referralSource: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Anda wajib menyetujui pemrosesan data sesuai Kebijakan Privasi (UU PDP).",
    }),
  }),
  honeypot: z.string().max(0).optional(),
});

export const rfpFullSchema = rfpStep1Schema.merge(rfpStep2Schema).merge(rfpStep3Schema);
export type RfpFormValues = z.infer<typeof rfpFullSchema>;

/**
 * Skema Gate Ringan Company Profile (§10.5)
 */
export const companyProfileGateSchema = z.object({
  fullName: z.string().min(2, "Masukkan nama lengkap Anda."),
  workEmail: z
    .string()
    .min(1, "Masukkan alamat email kantor Anda.")
    .email("Masukkan email kantor yang valid, contoh: nama@perusahaan.co.id."),
  companyName: z.string().min(2, "Masukkan nama perusahaan Anda."),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Anda wajib menyetujui Kebijakan Privasi.",
    }),
  }),
  honeypot: z.string().max(0).optional(),
});

export type CompanyProfileGateValues = z.infer<typeof companyProfileGateSchema>;

/**
 * Skema Berlangganan Buletin (§10.6)
 */
export const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Masukkan alamat email Anda.")
    .email("Masukkan alamat email yang valid."),
  honeypot: z.string().max(0).optional(),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

export function isFreeEmailDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase() ?? "";
  return ["gmail.com", "yahoo.com", "yahoo.co.id", "hotmail.com", "outlook.com", "icloud.com"].includes(
    domain
  );
}
