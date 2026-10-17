/**
 * "Rail" mobile: deret kartu yang digeser horizontal (scroll-snap) di < 768px,
 * kembali menjadi grid biasa mulai md. Memangkas panjang halaman di HP.
 * Pakai `railContainer` pada pembungkus (bersama kelas grid md:/lg: milik komponen)
 * dan `railItem` pada setiap kartu.
 */
export const railContainer =
  "-mx-(--container-padding) flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-(--container-padding) px-(--container-padding) pb-3 [scrollbar-width:none] md:mx-0 md:grid md:snap-none md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden";

export const railItem = "w-[84%] shrink-0 snap-start md:w-auto";
