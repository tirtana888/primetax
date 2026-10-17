/**
 * Foto suasana (stok) dari Unsplash — lisensi Unsplash: bebas dipakai komersial, atribusi dianjurkan.
 * ATURAN: hanya untuk suasana (kota, ruang kerja, konsultasi). JANGAN dipakai sebagai foto tim,
 * klien, atau testimoni — itu wajib foto asli (lihat PhotoPlaceholder).
 * Sebelum produksi, pertimbangkan mengganti dengan foto kantor/tim asli PrimeTax.
 */
export interface StockPhoto {
  src: string;
  alt: string;
  source: string;
}

export const photos = {
  jakartaNight: {
    src: "https://images.unsplash.com/photo-1649416097303-ddf0c8a68fc3",
    alt: "Panorama gedung perkantoran Jakarta di malam hari",
    source: "https://unsplash.com/photos/V7iMLpenocw",
  },
  businessMeeting: {
    src: "https://images.unsplash.com/photo-1672917187338-7f81ecac3d3f",
    alt: "Diskusi tim finance perusahaan di ruang rapat",
    source: "https://unsplash.com/photos/Mq4wJuX1-OQ",
  },
  smeConsultation: {
    src: "https://images.unsplash.com/photo-1582601231162-132ca60713d6",
    alt: "Konsultasi empat mata bersama pemilik usaha",
    source: "https://unsplash.com/photos/Rf6lwwbsZB4",
  },
} satisfies Record<string, StockPhoto>;
