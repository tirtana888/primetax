/**
 * Video latar hero (rekaman udara Bundaran HI, Jakarta) dari Cloudinary.
 * - Transformasi Cloudinary: q_auto + vc_auto + lebar sesuai layar, jadi HP mengunduh file kecil.
 * - Poster = frame video (tampil instan sebelum video siap & untuk prefers-reduced-motion).
 * - Dekoratif: muted, tanpa kontrol, aria-hidden.
 */
const BASE = "https://res.cloudinary.com/enppvihs/video/upload";
const ID = "v1792217349/videoplayback_2";

export const heroVideo = {
  mobile: `${BASE}/q_auto,vc_auto,w_720/${ID}.mp4`,
  desktop: `${BASE}/q_auto,vc_auto,w_1920/${ID}.mp4`,
  poster: `${BASE}/so_2,q_auto,f_auto,w_1600/${ID}.jpg`,
};

export function HeroVideo() {
  return (
    <>
      {/* Poster statis: selalu ada di belakang video, dan satu-satunya visual bila pengguna memilih kurangi gerakan */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroVideo.poster})` }}
      />
      <video
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroVideo.poster}
      >
        <source src={heroVideo.mobile} type="video/mp4" media="(max-width: 767px)" />
        <source src={heroVideo.desktop} type="video/mp4" />
      </video>
    </>
  );
}
