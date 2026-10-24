import { LegalPage } from "@/components/blocks/LegalPage";
import { Link } from "@/components/ui/Link";
import { site } from "@/config/site";
import { t, type Locale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/seo";

/*
 * DRAFT legal texts — to be reviewed by legal counsel before launch,
 * including against Law No. 27 of 2022 on Personal Data Protection (UU PDP).
 */

const UPDATED = "2026-10-24";

export function privacyMetadata(locale: Locale) {
  return pageMetadata({
    title: t(locale).footer.privacy,
    description:
      locale === "id"
        ? "Cara PrimeTax mengumpulkan, menggunakan, dan melindungi data pribadi yang dikirim melalui situs ini."
        : "How PrimeTax collects, uses, and protects personal data submitted through this website.",
    path: "/privacy-policy",
    locale,
  });
}

export function PrivacyView({ locale }: { locale: Locale }) {
  const email = <a href={`mailto:${site.contact.privacyEmail}`}>{site.contact.privacyEmail}</a>;
  const title = t(locale).footer.privacy;

  if (locale === "id") {
    return (
      <LegalPage
        locale={locale}
        title={title}
        path="/privacy-policy"
        updated={UPDATED}
        intro="Cara kami menangani data pribadi yang dikirim melalui situs ini."
      >
        <h2>1. Tentang kami</h2>
        <p>
          Situs ini dikelola oleh {site.legalName} (&ldquo;PrimeTax&rdquo;, &ldquo;kami&rdquo;). Kami bertanggung jawab
          atas data pribadi yang dikumpulkan melalui situs ini.
        </p>
        <h2>2. Data yang kami kumpulkan</h2>
        <ul>
          <li>
            Data permintaan yang Anda kirim: nama, email perusahaan, nama perusahaan, jabatan, bidang yang dibutuhkan,
            metode kontak, nomor telepon (opsional), dan uraian persoalan.
          </li>
          <li>
            Data teknis dan penggunaan, seperti halaman yang dikunjungi dan jenis perangkat, yang dikumpulkan melalui
            cookie analitik hanya jika Anda menyetujuinya.
          </li>
        </ul>
        <p>
          Mohon tidak mengirim SPT, NPWP, laporan keuangan, atau dokumen rahasia lainnya melalui formulir di situs ini.
        </p>
        <h2>3. Penggunaan data</h2>
        <ul>
          <li>Untuk menanggapi permintaan Anda dan mengatur diskusi.</li>
          <li>Untuk menilai apakah dan bagaimana kami dapat membantu, termasuk pemeriksaan benturan kepentingan.</li>
          <li>Untuk memahami dan meningkatkan penggunaan situs, bila Anda menyetujui analitik.</li>
        </ul>
        <h2>4. Dasar pemrosesan</h2>
        <p>
          Kami memproses data permintaan berdasarkan persetujuan Anda dan untuk menindaklanjuti permintaan Anda sebelum
          terjadinya penugasan, sesuai ketentuan pelindungan data pribadi yang berlaku di Indonesia.
        </p>
        <h2>5. Pengungkapan</h2>
        <p>
          Kami tidak menjual data pribadi. Kami dapat menggunakan penyedia layanan (misalnya layanan formulir, email, dan
          analitik) yang memproses data atas nama kami dengan pengamanan yang memadai.
        </p>
        <h2>6. Penyimpanan</h2>
        <p>
          Data permintaan disimpan hanya selama diperlukan untuk tujuan di atas atau sebagaimana diwajibkan hukum,
          kemudian dihapus atau dianonimkan.
        </p>
        <h2>7. Hak Anda</h2>
        <p>
          Anda dapat meminta akses, perbaikan, atau penghapusan data pribadi Anda, atau menarik persetujuan, dengan
          menghubungi {email}. Anda dapat mengubah pilihan cookie kapan saja melalui &ldquo;Pengaturan Cookie&rdquo; di
          bagian bawah situs.
        </p>
        <h2>8. Cookie</h2>
        <p>
          Kami menggunakan penyimpanan browser esensial untuk mengingat pilihan cookie Anda. Cookie analitik hanya
          dipasang setelah Anda menyetujuinya.
        </p>
        <h2>9. Perubahan</h2>
        <p>Kami dapat memperbarui kebijakan ini. Tanggal di bagian atas halaman menunjukkan revisi terakhir.</p>
      </LegalPage>
    );
  }

  return (
    <LegalPage
      locale={locale}
      title={title}
      path="/privacy-policy"
      updated={UPDATED}
      intro="How we handle personal data submitted through this website."
    >
      <h2>1. Who we are</h2>
      <p>
        This website is operated by {site.legalName} (&ldquo;PrimeTax&rdquo;, &ldquo;we&rdquo;). We are responsible
        for personal data collected through this website.
      </p>
      <h2>2. Data we collect</h2>
      <ul>
        <li>
          Enquiry details you submit: name, business email, company, job title, area of interest, preferred contact
          method, optional phone number, and a description of your matter.
        </li>
        <li>
          Technical and usage data, such as pages visited and device type, collected through analytics cookies only if
          you consent.
        </li>
      </ul>
      <p>
        Please do not submit tax returns, taxpayer identification numbers, financial statements, or other confidential
        documents through website forms.
      </p>
      <h2>3. How we use it</h2>
      <ul>
        <li>To respond to your enquiry and arrange a discussion.</li>
        <li>To evaluate whether and how we can assist, including conflict checks before an engagement.</li>
        <li>To understand and improve how the website is used, where you have consented to analytics.</li>
      </ul>
      <h2>4. Legal basis</h2>
      <p>
        We process enquiry data on the basis of your consent and to take steps at your request before entering into an
        engagement, in accordance with applicable Indonesian personal data protection law.
      </p>
      <h2>5. Sharing</h2>
      <p>
        We do not sell personal data. We may use service providers (for example, form handling, email, and analytics
        providers) who process data on our behalf under appropriate safeguards.
      </p>
      <h2>6. Retention</h2>
      <p>
        We keep enquiry data only for as long as needed for the purposes above, or as required by law, and then delete
        or anonymise it.
      </p>
      <h2>7. Your rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data, or withdraw consent, by contacting{" "}
        {email}. You can change your cookie choice at any time using &ldquo;Cookie Settings&rdquo; in the website
        footer.
      </p>
      <h2>8. Cookies</h2>
      <p>
        We use essential browser storage to remember your cookie choice. Analytics cookies are set only after you
        accept them.
      </p>
      <h2>9. Changes</h2>
      <p>We may update this policy. The date at the top of this page shows when it was last revised.</p>
    </LegalPage>
  );
}

export function termsMetadata(locale: Locale) {
  return pageMetadata({
    title: t(locale).footer.terms,
    description:
      locale === "id" ? "Ketentuan penggunaan situs PrimeTax." : "Terms governing the use of the PrimeTax website.",
    path: "/terms",
    locale,
  });
}

export function TermsView({ locale }: { locale: Locale }) {
  const title = t(locale).footer.terms;

  if (locale === "id") {
    return (
      <LegalPage locale={locale} title={title} path="/terms" updated={UPDATED}>
        <h2>1. Penggunaan situs</h2>
        <p>
          Situs ini disediakan oleh {site.legalName} sebagai informasi umum tentang firma dan layanan kami. Dengan
          menggunakannya, Anda menyetujui ketentuan ini.
        </p>
        <h2>2. Tidak ada hubungan advisory</h2>
        <p>
          Konten di situs ini merupakan informasi umum dan bukan nasihat pajak, hukum, atau profesional lainnya.
          Penggunaan situs atau pengiriman permintaan tidak menimbulkan hubungan advisory. Advis hanya diberikan
          berdasarkan surat penugasan yang ditandatangani. Lihat <Link href="/disclaimer">disclaimer profesional</Link>{" "}
          kami.
        </p>
        <h2>3. Akurasi</h2>
        <p>
          Kami berupaya menjaga keakuratan konten sesuai tanggal yang tercantum, namun ketentuan pajak sering berubah.
          Kami tidak menjamin konten lengkap atau mutakhir pada saat Anda membacanya.
        </p>
        <h2>4. Hak kekayaan intelektual</h2>
        <p>
          Konten, desain, dan aset merek di situs ini milik PrimeTax atau pemberi lisensinya. Anda dapat membagikan
          tautan konten kami dan mengutip bagian singkat dengan menyebut sumber, tetapi tidak boleh memperbanyak bagian
          substansial tanpa izin.
        </p>
        <h2>5. Tautan eksternal</h2>
        <p>Kami tidak bertanggung jawab atas konten situs eksternal yang ditautkan dari situs ini.</p>
        <h2>6. Tanggung jawab</h2>
        <p>
          Sepanjang diizinkan hukum, PrimeTax tidak bertanggung jawab atas kerugian yang timbul dari penggunaan konten
          situs sebagai dasar keputusan.
        </p>
        <h2>7. Hukum yang berlaku</h2>
        <p>Ketentuan ini tunduk pada hukum Republik Indonesia.</p>
      </LegalPage>
    );
  }

  return (
    <LegalPage locale={locale} title={title} path="/terms" updated={UPDATED}>
      <h2>1. Use of this website</h2>
      <p>
        This website is provided by {site.legalName} for general information about our firm and services. By using
        it, you agree to these terms.
      </p>
      <h2>2. No advisory relationship</h2>
      <p>
        Content on this website is general information and is not tax, legal, or other professional advice. Using the
        website or submitting an enquiry does not create an advisory relationship. Advice is provided only under a
        signed engagement letter. See our <Link href="/disclaimer">professional disclaimer</Link>.
      </p>
      <h2>3. Accuracy</h2>
      <p>
        We aim to keep content accurate as at the date shown, but tax regulations change frequently. We do not warrant
        that content is complete or current at the time you read it.
      </p>
      <h2>4. Intellectual property</h2>
      <p>
        Content, design, and brand assets on this website belong to PrimeTax or its licensors. You may share links to
        our content and quote brief extracts with attribution, but may not reproduce substantial parts without
        permission.
      </p>
      <h2>5. External links</h2>
      <p>We are not responsible for the content of external websites linked from this site.</p>
      <h2>6. Liability</h2>
      <p>To the extent permitted by law, PrimeTax is not liable for any loss arising from reliance on website content.</p>
      <h2>7. Governing law</h2>
      <p>These terms are governed by the laws of the Republic of Indonesia.</p>
    </LegalPage>
  );
}

export function disclaimerMetadata(locale: Locale) {
  return pageMetadata({
    title: t(locale).footer.disclaimer,
    description:
      locale === "id"
        ? "Disclaimer profesional atas informasi yang dipublikasikan di situs PrimeTax."
        : "Professional disclaimer for information published on the PrimeTax website.",
    path: "/disclaimer",
    locale,
  });
}

export function DisclaimerView({ locale }: { locale: Locale }) {
  const title = t(locale).footer.disclaimer;

  if (locale === "id") {
    return (
      <LegalPage locale={locale} title={title} path="/disclaimer" updated={UPDATED}>
        <p>
          Artikel, insights, dan konten lain di situs ini dipublikasikan sebagai informasi umum. Konten mencerminkan
          pemahaman kami atas ketentuan yang berlaku pada tanggal tinjauan terakhir dan mungkin belum mencerminkan
          perubahan setelahnya.
        </p>
        <p>
          Konten bukan merupakan nasihat pajak, hukum, akuntansi, atau investasi dan tidak boleh dijadikan dasar untuk
          persoalan tertentu. Hasil perpajakan bergantung pada fakta spesifik, dokumentasi, implementasi, dan posisi
          yang diambil otoritas pajak atau pengadilan.
        </p>
        <p>
          PrimeTax tidak menjamin penghematan pajak, ketiadaan risiko pajak, atau hasil pemeriksaan, keberatan, banding,
          maupun sengketa lainnya. Advis profesional hanya diberikan berdasarkan surat penugasan yang ditandatangani dan
          memuat ruang lingkup, asumsi, serta batasan yang disepakati.
        </p>
        <p>
          Rujukan peraturan merupakan ringkasan. Silakan merujuk pada naskah resmi yang diterbitkan otoritas Indonesia
          terkait.
        </p>
        <p>
          PrimeTax adalah firma advisory independen dan tidak berafiliasi dengan, atau didukung oleh, Direktorat Jenderal
          Pajak maupun instansi pemerintah lainnya.
        </p>
      </LegalPage>
    );
  }

  return (
    <LegalPage locale={locale} title={title} path="/disclaimer" updated={UPDATED}>
      <p>
        Articles, insights, and other content on this website are published for general information only. They reflect
        our understanding of regulations in force at the date of last review and may not reflect later changes.
      </p>
      <p>
        Content is not tax, legal, accounting, or investment advice and must not be relied on for any specific matter.
        Tax outcomes depend on specific facts, documentation, implementation, and the position taken by the tax
        authority or court.
      </p>
      <p>
        PrimeTax does not guarantee tax savings, the absence of tax risk, or the outcome of any audit, objection,
        appeal, or other dispute. Professional advice is provided only under a signed engagement letter that sets out
        the agreed scope, assumptions, and limitations.
      </p>
      <p>
        References to regulations are summaries. Please refer to the official texts published by the relevant Indonesian
        authorities.
      </p>
      <p>
        PrimeTax is an independent advisory firm and is not affiliated with, or endorsed by, the Directorate General of
        Taxes or any other government authority.
      </p>
    </LegalPage>
  );
}
