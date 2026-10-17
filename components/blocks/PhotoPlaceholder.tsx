import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PhotoPlaceholderProps {
  label: string;
  ratio?: "4:5" | "16:9" | "5:4";
  caption?: string;
  className?: string;
}

/**
 * Placeholder fotografi resmi sesuai spesifikasi §7.1:
 * Menggunakan blok navy-50 dengan ikon kamera ink-400 dan teks [FOTO TIM: Nama] / [FOTO KANTOR] / [FOTO HERO].
 * Dilarang mengisi dengan foto stok acak atau gambar AI-generated.
 */
export function PhotoPlaceholder({
  label,
  ratio = "4:5",
  caption,
  className,
}: PhotoPlaceholderProps) {
  const ratioClass =
    ratio === "4:5"
      ? "aspect-[4/5]"
      : ratio === "16:9"
      ? "aspect-[16/9]"
      : "aspect-[5/4]";

  return (
    <figure className={cn("m-0", className)}>
      <div
        role="img"
        aria-label={label}
        className={cn(
          "flex w-full flex-col items-center justify-center gap-2.5 rounded-lg border border-navy-200 bg-navy-50 p-6 text-center",
          ratioClass
        )}
      >
        <Camera className="h-8 w-8 text-ink-400" aria-hidden="true" />
        <span className="font-heading text-body-sm font-semibold text-navy-800">
          {label}
        </span>
      </div>
      {caption && (
        <figcaption className="mt-2 text-caption text-ink-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
