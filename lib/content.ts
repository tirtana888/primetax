/**
 * Guard konten placeholder.
 * Teks berformat "[...]" (mis. "[X]+", "[NAMA KLIEN]") adalah isian yang belum final.
 * - Development: tetap dirender agar tim tahu apa yang perlu diisi.
 * - Production: item yang masih mengandung placeholder disembunyikan,
 *   sehingga situs tidak pernah tampil dengan data kosong/karangan.
 */
const PLACEHOLDER_PATTERN = /\[[^\]]+\]/;

export const showPlaceholders = process.env.NODE_ENV !== "production";

export function hasPlaceholder(...values: Array<string | undefined | null>) {
  return values.some((v) => typeof v === "string" && PLACEHOLDER_PATTERN.test(v));
}

/** True jika nilai boleh ditampilkan di lingkungan saat ini. */
export function isReady(...values: Array<string | undefined | null>) {
  return showPlaceholders || !hasPlaceholder(...values);
}

/** Saring daftar item; `pick` mengembalikan field yang wajib sudah final. */
export function filterReady<T>(
  items: T[],
  pick: (item: T) => Array<string | undefined | null>
) {
  return items.filter((item) => isReady(...pick(item)));
}

const ID_MONTHS = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember",
];

/** "2026-10-20" -> "20 Oktober 2026" (tanpa bergantung zona waktu runtime). */
export function formatDateId(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${ID_MONTHS[m - 1]} ${y}`;
}
