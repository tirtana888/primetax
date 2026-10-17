import { IBM_Plex_Sans, Plus_Jakarta_Sans, Source_Serif_4 } from "next/font/google";

/**
 * Sistem tipografi:
 * - IBM Plex Sans: body, navigasi, tombol, label, heading kecil (H4–H6).
 *   Dipakai untuk --font-heading & --font-body agar UI konsisten.
 * - Source Serif 4: headline (display, H1–H3) & angka statistik — kesan firma profesional.
 */
export const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

/** Khusus wordmark logo (huruf geometris tebal sesuai logo resmi). */
export const brandFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-jakarta",
  display: "swap",
});
