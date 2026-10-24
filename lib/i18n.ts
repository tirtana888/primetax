/**
 * Locales and shared UI strings.
 *
 * Routing: English lives at the root (/services), Indonesian under /id
 * (/id/services). Slugs are identical in both languages, so switching
 * language only adds or removes the /id prefix.
 */

export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeMeta: Record<Locale, { label: string; short: string; ogLocale: string; dateLocale: string }> = {
  en: { label: "English", short: "EN", ogLocale: "en_US", dateLocale: "en-GB" },
  id: { label: "Bahasa Indonesia", short: "ID", ogLocale: "id_ID", dateLocale: "id-ID" },
};

export function localeFromPath(pathname: string): Locale {
  return pathname === "/id" || pathname.startsWith("/id/") ? "id" : "en";
}

/** Path without the locale prefix, e.g. /id/services → /services. */
export function stripLocale(pathname: string) {
  if (pathname === "/id") return "/";
  return pathname.startsWith("/id/") ? pathname.slice(3) : pathname;
}

/** Add the locale prefix to an internal, locale-neutral path. */
export function localizePath(path: string, locale: Locale) {
  if (locale === "en" || !path.startsWith("/") || path.startsWith("/brand/") || path.startsWith("/downloads/")) {
    return path;
  }
  if (path === "/id" || path.startsWith("/id/") || path.startsWith("/id?")) return path;
  return path === "/" ? "/id" : `/id${path}`;
}

export function formatDate(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString(localeMeta[locale].dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const en = {
  statement:
    "Strategic Indonesian tax advisory for foreign-invested companies, large taxpayers, and businesses navigating complex tax matters.",
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    industries: "Industries",
    insights: "Insights",
    team: "Our Team",
    contact: "Contact",
    events: "Events & Briefings",
  },
  cta: {
    book: "Book a Consultation",
    explore: "Explore Our Expertise",
    allServices: "All services",
    allInsights: "View all insights",
    allEvents: "All events",
    readInsights: "Read our latest insights",
    exploreServices: "Explore our services",
    meetTeam: "Meet the team",
    returnHome: "Return home",
    viewServices: "View services",
    requestBriefing: "Request a Briefing",
  },
  ctaPanel: {
    title: "Let's Discuss Your Tax Priorities.",
    text: "Start with a focused discussion of your business context, tax concerns, and advisory needs.",
    matterText: "Share the context of your matter. We will propose a scope and approach for an initial discussion.",
  },
  common: {
    explore: "Explore",
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    breadcrumb: "Breadcrumb",
    language: "Language",
    illustrative: "Illustrative framework. Actual ratings depend on the facts of each engagement.",
    likelihood: "Likelihood",
    impact: "Impact",
    low: "Low",
    medium: "Medium",
    high: "High",
    riskMatrixLabel: "Illustrative tax risk matrix of likelihood against impact",
    riskExamples: {
      intragroup: "Intragroup charges",
      treaty: "Treaty documents",
      reconciliations: "Reconciliations",
      timing: "Filing timing",
    },
    figuresAsOf: "Figures as of",
    figuresLabel: "About PrimeTax in figures",
    downloadProfile: "Download Company Profile",
    companyProfilePdf: "Company Profile (PDF)",
    pauseVideo: "Pause background video",
    playVideo: "Play background video",
    faq: "Frequently Asked Questions",
    deliverablesNote: "Deliverables are confirmed in each engagement letter and depend on the agreed scope.",
    considerationsNote:
      "Summary for general information only. Regulations are applied to the specific facts of each engagement.",
  },
  insight: {
    published: "Published",
    lastReviewed: "Last reviewed",
    author: "Author",
    reviewedBy: "Reviewed by",
    readingTime: "Reading time",
    minutes: "min",
    keyPoints: "Key points",
    sources: "Official sources",
    relatedServices: "Related services",
    more: "More insights",
    all: "All",
    filterLabel: "Filter insights by type",
    disclaimerA:
      "This article is general information based on regulations in force at the date of last review. It is not tax or legal advice and should not be relied on for any specific matter. See our",
    disclaimerLink: "professional disclaimer",
    types: {
      "Tax Bulletin": "Tax Bulletin",
      "Regulatory Update": "Regulatory Update",
      Article: "Article",
      "Executive Briefing": "Executive Briefing",
    } as Record<string, string>,
  },
  events: {
    register: "Register",
    recording: "Watch recording",
    with: "with",
  },
  footer: {
    services: "Services",
    firm: "Firm",
    contact: "Contact",
    aboutFirm: "About PrimeTax",
    rights: "All rights reserved.",
    privacy: "Privacy Policy",
    terms: "Website Terms",
    disclaimer: "Professional Disclaimer",
    cookies: "Cookie Settings",
    note: "Information on this website is general in nature and does not constitute tax or legal advice. Advice is provided only under an agreed engagement and based on the specific facts of each matter.",
  },
  consent: {
    title: "Cookie preferences",
    textA:
      "We use essential storage to run this site. With your permission we also use analytics cookies to understand how the site is used. See our",
    privacy: "Privacy Policy",
    essential: "Essential only",
    accept: "Accept analytics",
  },
  form: {
    name: "Name",
    email: "Business email",
    company: "Company",
    jobTitle: "Job title",
    area: "Area of interest",
    selectArea: "Select an area",
    otherArea: "Other / not sure yet",
    message: "Brief description of the issue",
    messageNote:
      "Please do not include tax returns, taxpayer identification numbers, financial statements, or other confidential documents. We will arrange a secure channel once an engagement is agreed.",
    method: "Preferred contact method",
    methods: { email: "Email", phone: "Phone call", video: "Video meeting" },
    phone: "Phone number",
    consentA: "I agree that PrimeTax may use these details to respond to my enquiry, as described in the",
    consentLink: "Privacy Policy",
    submit: "Submit Request",
    sending: "Sending…",
    freeMail: "A company email helps us respond faster.",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid business email.",
      company: "Please enter your company name.",
      jobTitle: "Please enter your job title.",
      area: "Please select an area of interest.",
      message: "Please describe the matter in a few sentences.",
      consent: "Please confirm you have read the Privacy Policy.",
      network: "Something went wrong while sending your request. Please try again or email",
    },
    sentTitle: "Thank you. Your request has been received.",
    sentText:
      "A member of our team will review your enquiry and contact you using your preferred method to arrange an initial discussion.",
    mailtoTitle: "Your email is ready to send.",
    mailtoText: (email: string) =>
      `Your email application should have opened with your enquiry pre-filled. Please send it to ${email}. If nothing opened, you can email us directly.`,
    mailSubject: "Consultation request",
  },
  notFound: {
    title: "This page could not be found.",
    text: "The page may have moved, or the address may be incorrect.",
  },
  legal: {
    lastUpdated: "Last updated",
  },
};

export type Dictionary = typeof en;

const id: Dictionary = {
  statement:
    "Advisory pajak Indonesia yang strategis bagi perusahaan PMA, wajib pajak besar, dan perusahaan yang menghadapi persoalan pajak yang kompleks.",
  nav: {
    home: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    industries: "Industri",
    insights: "Insights",
    team: "Tim Kami",
    contact: "Kontak",
    events: "Acara & Briefing",
  },
  cta: {
    book: "Jadwalkan Konsultasi",
    explore: "Lihat Keahlian Kami",
    allServices: "Semua layanan",
    allInsights: "Lihat semua insights",
    allEvents: "Semua acara",
    readInsights: "Baca insights terbaru kami",
    exploreServices: "Lihat layanan kami",
    meetTeam: "Kenali tim kami",
    returnHome: "Kembali ke beranda",
    viewServices: "Lihat layanan",
    requestBriefing: "Ajukan Briefing",
  },
  ctaPanel: {
    title: "Mari Diskusikan Prioritas Pajak Anda.",
    text: "Mulailah dengan diskusi terfokus mengenai konteks bisnis, persoalan pajak, dan kebutuhan advisory perusahaan Anda.",
    matterText:
      "Sampaikan konteks persoalan Anda. Kami akan mengusulkan ruang lingkup dan pendekatan untuk diskusi awal.",
  },
  common: {
    explore: "Lihat",
    skip: "Langsung ke konten",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    breadcrumb: "Navigasi halaman",
    language: "Bahasa",
    illustrative: "Kerangka ilustratif. Penilaian aktual bergantung pada fakta setiap penugasan.",
    likelihood: "Kemungkinan",
    impact: "Dampak",
    low: "Rendah",
    medium: "Sedang",
    high: "Tinggi",
    riskMatrixLabel: "Matriks risiko pajak ilustratif: kemungkinan terhadap dampak",
    riskExamples: {
      intragroup: "Biaya intragrup",
      treaty: "Dokumen P3B",
      reconciliations: "Rekonsiliasi",
      timing: "Waktu pelaporan",
    },
    figuresAsOf: "Data per",
    figuresLabel: "PrimeTax dalam angka",
    downloadProfile: "Unduh Company Profile",
    companyProfilePdf: "Company Profile (PDF)",
    pauseVideo: "Jeda video latar",
    playVideo: "Putar video latar",
    faq: "Pertanyaan yang Sering Diajukan",
    deliverablesNote: "Deliverable ditetapkan dalam setiap surat penugasan dan bergantung pada ruang lingkup yang disepakati.",
    considerationsNote:
      "Ringkasan untuk informasi umum. Ketentuan diterapkan sesuai fakta spesifik setiap penugasan.",
  },
  insight: {
    published: "Diterbitkan",
    lastReviewed: "Terakhir ditinjau",
    author: "Penulis",
    reviewedBy: "Ditinjau oleh",
    readingTime: "Waktu baca",
    minutes: "menit",
    keyPoints: "Poin utama",
    sources: "Sumber resmi",
    relatedServices: "Layanan terkait",
    more: "Insights lainnya",
    all: "Semua",
    filterLabel: "Saring insights berdasarkan jenis",
    disclaimerA:
      "Artikel ini merupakan informasi umum berdasarkan ketentuan yang berlaku pada tanggal tinjauan terakhir. Artikel ini bukan nasihat pajak atau hukum dan tidak dapat dijadikan dasar untuk persoalan tertentu. Lihat",
    disclaimerLink: "disclaimer profesional kami",
    types: {
      "Tax Bulletin": "Tax Bulletin",
      "Regulatory Update": "Update Regulasi",
      Article: "Artikel",
      "Executive Briefing": "Executive Briefing",
    },
  },
  events: {
    register: "Daftar",
    recording: "Tonton rekaman",
    with: "bersama",
  },
  footer: {
    services: "Layanan",
    firm: "Perusahaan",
    contact: "Kontak",
    aboutFirm: "Tentang PrimeTax",
    rights: "Hak cipta dilindungi.",
    privacy: "Kebijakan Privasi",
    terms: "Ketentuan Situs",
    disclaimer: "Disclaimer Profesional",
    cookies: "Pengaturan Cookie",
    note: "Informasi di situs ini bersifat umum dan bukan merupakan nasihat pajak atau hukum. Nasihat hanya diberikan berdasarkan penugasan yang disepakati dan fakta spesifik setiap persoalan.",
  },
  consent: {
    title: "Preferensi cookie",
    textA:
      "Kami menggunakan penyimpanan esensial untuk menjalankan situs ini. Dengan izin Anda, kami juga menggunakan cookie analitik untuk memahami cara situs digunakan. Lihat",
    privacy: "Kebijakan Privasi",
    essential: "Esensial saja",
    accept: "Izinkan analitik",
  },
  form: {
    name: "Nama",
    email: "Email perusahaan",
    company: "Perusahaan",
    jobTitle: "Jabatan",
    area: "Bidang yang dibutuhkan",
    selectArea: "Pilih bidang",
    otherArea: "Lainnya / belum yakin",
    message: "Uraian singkat persoalan",
    messageNote:
      "Mohon tidak menyertakan SPT, NPWP, laporan keuangan, atau dokumen rahasia lainnya. Kami akan menyiapkan saluran aman setelah penugasan disepakati.",
    method: "Metode kontak yang diinginkan",
    methods: { email: "Email", phone: "Telepon", video: "Rapat video" },
    phone: "Nomor telepon",
    consentA: "Saya setuju PrimeTax menggunakan data ini untuk menanggapi permintaan saya, sebagaimana dijelaskan dalam",
    consentLink: "Kebijakan Privasi",
    submit: "Kirim Permintaan",
    sending: "Mengirim…",
    freeMail: "Email perusahaan membantu kami merespons lebih cepat.",
    errors: {
      name: "Mohon isi nama Anda.",
      email: "Mohon isi email perusahaan yang valid.",
      company: "Mohon isi nama perusahaan.",
      jobTitle: "Mohon isi jabatan Anda.",
      area: "Mohon pilih bidang yang dibutuhkan.",
      message: "Mohon uraikan persoalan dalam beberapa kalimat.",
      consent: "Mohon konfirmasi bahwa Anda telah membaca Kebijakan Privasi.",
      network: "Terjadi kendala saat mengirim permintaan Anda. Silakan coba lagi atau kirim email ke",
    },
    sentTitle: "Terima kasih. Permintaan Anda telah kami terima.",
    sentText:
      "Tim kami akan meninjau permintaan Anda dan menghubungi Anda melalui metode yang dipilih untuk mengatur diskusi awal.",
    mailtoTitle: "Email Anda siap dikirim.",
    mailtoText: (email: string) =>
      `Aplikasi email Anda seharusnya terbuka dengan isi permintaan yang sudah terisi. Silakan kirim ke ${email}. Jika tidak terbuka, Anda dapat mengirim email langsung.`,
    mailSubject: "Permintaan konsultasi",
  },
  notFound: {
    title: "Halaman tidak ditemukan.",
    text: "Halaman mungkin telah dipindahkan, atau alamat yang dimasukkan kurang tepat.",
  },
  legal: {
    lastUpdated: "Terakhir diperbarui",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function t(locale: Locale): Dictionary {
  return dictionaries[locale];
}
