import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Daftarkan token ukuran teks custom (styles/globals.css) sebagai font-size.
 * Tanpa ini tailwind-merge mengira `text-btn-lg` dkk. adalah warna dan
 * membuang `text-white` pada kelas yang sama (teks tombol jadi tak terlihat).
 */
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display", "h1", "h2", "h3", "h4", "h5", "h6",
        "eyebrow", "lead", "body", "body-sm", "caption", "label",
        "btn-lg", "btn-md", "btn-sm", "stat", "price",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
