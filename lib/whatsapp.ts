import { site } from "@/config/site";

export type WaContext =
  | { type: "general" }
  | { type: "sme" }
  | { type: "package"; packageName: string }
  | { type: "service"; serviceName: string }
  | { type: "tool"; toolName: string }
  | { type: "article"; articleTitle: string }
  | { type: "custom"; message: string };

/**
 * Membangun tautan WhatsApp kontekstual sesuai spesifikasi §10.1.
 * Mengenkode pesan otomatis berdasarkan konteks halaman.
 */
export function buildWaLink(context: WaContext = { type: "general" }): string {
  const brand = site.brandName;
  let text = `Halo ${brand}, saya ingin konsultasi pajak untuk usaha saya.`;

  switch (context.type) {
    case "general":
      text = `Halo ${brand}, saya ingin konsultasi pajak untuk usaha saya.`;
      break;
    case "sme":
      text = `Halo ${brand}, saya pemilik UKM dan ingin konsultasi gratis 30 menit.`;
      break;
    case "package":
      text = `Halo ${brand}, saya tertarik dengan Paket ${context.packageName}. Boleh minta info lebih lanjut?`;
      break;
    case "service":
      text = `Halo ${brand}, saya ingin bertanya tentang layanan ${context.serviceName}.`;
      break;
    case "tool":
      text = `Halo ${brand}, saya baru memakai ${context.toolName} dan ingin konsultasi hasilnya.`;
      break;
    case "article":
      text = `Halo ${brand}, saya membaca artikel "${context.articleTitle}" dan ingin bertanya.`;
      break;
    case "custom":
      text = context.message;
      break;
  }

  const cleanNumber = site.contact.whatsapp.replace(/[\s+]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}

/**
 * Mengecek apakah waktu saat ini di zona Asia/Jakarta berada dalam jam operasional (Senin-Jumat 09.00-17.00 WIB default).
 */
export function isWithinOperationalHours(now: Date = new Date()): boolean {
  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Jakarta",
      weekday: "short",
      hour: "numeric",
      hour12: false,
    });
    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "10", 10);

    const isWeekend = weekday === "Sat" || weekday === "Sun";
    if (isWeekend) return false;
    return hour >= 9 && hour < 17;
  } catch {
    return true;
  }
}
