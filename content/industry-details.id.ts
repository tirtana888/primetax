import type { IndustryDetail } from "@/content/industry-details";

/** Indonesian industry detail pages. Keys must match content/industry-details.ts. */
export const industryDetailsId: Record<string, IndustryDetail> = {
  manufacturing: {
    headline: "Advisory Pajak untuk Perusahaan Manufaktur di Indonesia",
    intro:
      "Perusahaan manufaktur memadukan bahan baku impor, produksi lokal, penjualan ekspor, dan teknologi yang dilisensikan dari afiliasi. Setiap mata rantai tersebut membawa persoalan pajaknya sendiri.",
    context: [
      "Bagi manufaktur PMA, sebagian besar eksposur pajak berada pada transaksi afiliasi: bahan baku yang dibeli dari pemasok grup, barang jadi yang dijual ke distributor grup, serta royalti atau imbalan teknis atas pengetahuan teknologi.",
      "Produsen berorientasi ekspor juga cenderung mengalami lebih bayar PPN, sehingga kesiapan restitusi dan pemeriksaan yang menyertainya menjadi perhatian manajemen secara berkelanjutan.",
    ],
    issues: [
      {
        title: "Harga barang dengan pihak afiliasi",
        text: "Harga pembelian bahan baku dan harga jual barang jadi harus konsisten dengan fungsi dan risiko perusahaan yang sebenarnya, baik sebagai full-fledged manufacturer maupun contract manufacturer.",
      },
      {
        title: "Royalti dan imbalan bantuan teknis",
        text: "Pembayaran atas teknologi dan pengetahuan memerlukan bukti manfaat, tarif yang wajar, pemotongan PPh yang benar, serta PPN atas pemanfaatan barang tidak berwujud dari luar negeri.",
      },
      {
        title: "Kesiapan restitusi PPN",
        text: "Eksportir dengan lebih bayar PPN berulang perlu menjaga kerapian Faktur Pajak, dokumen ekspor, dan rekonsiliasi sebelum permohonan restitusi memicu pemeriksaan.",
      },
      {
        title: "Konsistensi kepabeanan dan pajak",
        text: "Nilai pabean, fasilitas kawasan berikat, dan posisi pajak atas transaksi yang sama harus saling konsisten.",
      },
    ],
    scenarios: [
      {
        title: "Kerugian berulang pada contract manufacturer",
        situation:
          "Manufaktur PMA yang terutama memproduksi untuk grupnya melaporkan rugi selama beberapa tahun berturut-turut, sementara tetap membayar royalti kepada induknya.",
        questions: [
          "Apakah karakterisasi entitas mendukung imbal hasil rutin yang stabil?",
          "Apakah royalti konsisten dengan profil risiko entitas yang terbatas?",
          "Apakah perjanjian intragrup selaras dengan cara keputusan benar-benar diambil?",
        ],
        approach:
          "Menelaah profil fungsional dan kebijakan harga, menguji profitabilitas terhadap pembanding, serta menyusun opsi seperti penyesuaian model harga atau pengaturan royalti beserta risikonya.",
      },
      {
        title: "Persiapan restitusi PPN eksportir",
        situation: "Eksportir telah mengakumulasi lebih bayar PPN yang signifikan dan berencana mengajukan restitusi untuk tahun tersebut.",
        questions: [
          "Apakah Faktur Pajak Masukan dan dokumen ekspor telah direkonsiliasi dengan SPT Masa PPN?",
          "Adakah pembelian yang Pajak Masukannya berpotensi dikoreksi?",
          "Apakah perusahaan siap menghadapi pemeriksaan yang umumnya menyusul?",
        ],
        approach:
          "Melakukan review kesiapan sebelum pengajuan, menutup kekurangan dokumen, dan menyusun indeks bukti sebelum permohonan diajukan.",
      },
    ],
    regulations: [
      "PMK-172/PMK.03/2023 tentang penerapan prinsip kewajaran dan kelaziman usaha dalam transaksi yang dipengaruhi hubungan istimewa",
      "UU Nomor 8 Tahun 1983 tentang PPN sebagaimana terakhir diubah dengan UU Nomor 7 Tahun 2021 (UU HPP)",
      "Pasal 26 UU PPh dan PER-25/PJ/2018 tentang tata cara penerapan P3B",
    ],
    insights: ["transfer-pricing-documentation-indonesia", "cross-border-payments-pma-withholding-tax"],
    faqs: [
      {
        question: "Apakah Anda dapat mereview kebijakan transfer pricing global grup kami untuk Indonesia?",
        answer:
          "Ya. Kami menelaah apakah kebijakan grup menghasilkan hasil yang sesuai dengan fungsi entitas Indonesia dan kewajiban dokumentasi yang berlaku di dalam negeri.",
      },
      {
        question: "Kapan sebaiknya kami mulai bersiap menghadapi pemeriksaan restitusi PPN?",
        answer:
          "Sebelum permohonan diajukan. Rekonsiliasi dan dokumen pendukung jauh lebih mudah dilengkapi sebelum pemeriksaan dimulai.",
      },
    ],
    ctaLabel: "Diskusikan Persoalan Pajak Manufaktur Anda",
    seo: {
      title: "Konsultan Pajak untuk Perusahaan Manufaktur di Indonesia",
      description:
        "Advisory pajak bagi perusahaan manufaktur di Indonesia: harga transaksi afiliasi, royalti dan imbalan teknis, kesiapan restitusi PPN, serta konsistensi kepabeanan dan pajak.",
    },
  },
  "energy-resources-infrastructure": {
    headline: "Advisory Pajak untuk Energi, Sumber Daya & Infrastruktur",
    intro:
      "Proyek besar mempertemukan kontraktor asing, pembiayaan yang kompleks, dan perjanjian jangka panjang. Persoalan pajak paling baik ditangani saat kontrak dan struktur masih dirancang.",
    context: [
      "Proyek energi, sumber daya, dan infrastruktur umumnya melibatkan kontraktor engineering dan konstruksi dari luar negeri, personel yang bekerja di Indonesia dalam waktu lama, serta pembiayaan utang yang signifikan dari pihak afiliasi maupun pihak ketiga.",
      "Karakteristik tersebut menimbulkan persoalan Bentuk Usaha Tetap, PPh potong, dan pembebanan bunga yang mahal untuk diperbaiki setelah proyek berjalan.",
    ],
    issues: [
      {
        title: "Risiko Bentuk Usaha Tetap",
        text: "Kontraktor dan personel asing yang hadir di Indonesia dapat menimbulkan kehadiran kena pajak, bergantung pada P3B yang berlaku serta durasi dan sifat kegiatannya.",
      },
      {
        title: "Pembayaran jasa lintas negara",
        text: "Jasa engineering, pengadaan, dan teknis dari luar negeri memerlukan karakterisasi, pemotongan PPh, dan perlakuan PPN yang tepat.",
      },
      {
        title: "Struktur pembiayaan",
        text: "Pinjaman pemegang saham dan pembiayaan proyek tunduk pada batasan perbandingan utang dan modal serta prinsip kewajaran untuk bunga afiliasi.",
      },
      {
        title: "Akuisisi dan joint venture",
        text: "Masuk ke suatu proyek melalui akuisisi atau joint venture memerlukan tax due diligence atas eksposur historis.",
      },
    ],
    scenarios: [
      {
        title: "Memisahkan lingkup onshore dan offshore kontrak EPC",
        situation:
          "Perusahaan proyek sedang menegosiasikan kontrak engineering, procurement, and construction dengan kontraktor asing yang mengusulkan pemisahan lingkup onshore dan offshore.",
        questions: [
          "Apakah pemisahan tersebut mencerminkan lokasi pekerjaan yang sebenarnya?",
          "Apakah kegiatan kontraktor di Indonesia dapat menimbulkan BUT?",
          "Kewajiban PPh potong dan PPN apa yang timbul bagi perusahaan proyek?",
        ],
        approach:
          "Menelaah draf kontrak dan rencana kerja, memetakan kegiatan berdasarkan lokasi dan durasi terhadap P3B terkait, serta merekomendasikan perubahan kontrak dan dokumentasi sebelum penandatanganan.",
      },
      {
        title: "Pinjaman pemegang saham untuk entitas proyek baru",
        situation: "Entitas proyek baru akan didanai sebagian besar melalui pinjaman dari pemegang saham asingnya.",
        questions: [
          "Bagaimana batasan perbandingan utang dan modal memengaruhi pembebanan bunga?",
          "Apakah tingkat bunga dapat dipertahankan sebagai wajar?",
          "Apakah dokumen P3B tersedia sebelum bunga dibayarkan?",
        ],
        approach:
          "Memodelkan struktur permodalan terhadap batasan yang berlaku, menelaah syarat dan dukungan harga pinjaman, serta menyusun dokumen yang diperlukan sebelum pembayaran bunga pertama.",
      },
    ],
    regulations: [
      "PMK-35/PMK.03/2019 tentang penentuan Bentuk Usaha Tetap",
      "PMK-169/PMK.010/2015 tentang besarnya perbandingan antara utang dan modal untuk keperluan PPh",
      "PER-25/PJ/2018 tentang tata cara penerapan P3B",
    ],
    insights: ["cross-border-payments-pma-withholding-tax", "tax-governance-framework-large-companies"],
    faqs: [
      {
        question: "Apakah Anda dapat mereview kontrak sebelum ditandatangani?",
        answer:
          "Ya, dan umumnya itulah waktu yang paling efektif. Klausul kontrak dan rencana kerja sangat menentukan hasil BUT dan PPh potong.",
      },
      {
        question: "Apakah Anda memberikan advis atas rezim fiskal khusus sektor tertentu?",
        answer:
          "Sebagian sektor tunduk pada rezim atau ketentuan kontrak khusus. Pada tahap penetapan ruang lingkup, kami memastikan apakah persoalan tersebut termasuk dalam pendampingan kami atau perlu koordinasi dengan konsultan spesialis.",
      },
    ],
    ctaLabel: "Diskusikan Persoalan Pajak Proyek Anda",
    seo: {
      title: "Konsultan Pajak Energi, Sumber Daya & Infrastruktur di Indonesia",
      description:
        "Advisory pajak untuk proyek energi, sumber daya, dan infrastruktur di Indonesia: Bentuk Usaha Tetap, jasa lintas negara, pembiayaan, dan due diligence transaksi.",
    },
  },
  "trading-distribution": {
    headline: "Advisory Pajak untuk Usaha Perdagangan & Distribusi",
    intro:
      "Volume transaksi yang tinggi menjadikan rekonsiliasi sebagai disiplin pajak utama bagi pedagang dan distributor. Perbedaan kecil yang berulang cepat terlihat oleh kantor pajak.",
    context: [
      "Distributor menangani transaksi penjualan dan pembelian dalam jumlah besar, rabat, serta pengaturan promosi. Kantor pajak semakin sering membandingkan angka yang dilaporkan dengan data pihak ketiga, seperti Faktur Pajak dan bukti potong lawan transaksi.",
      "Bila distributor membeli dari prinsipal afiliasi, margin yang diharapkan juga menjadi persoalan transfer pricing.",
    ],
    issues: [
      {
        title: "Rekonsiliasi peredaran usaha, PPN, dan PPh potong",
        text: "Peredaran usaha di pembukuan, SPT Masa PPN, dan catatan PPh potong harus terekonsiliasi agar data pihak ketiga sesuai dengan yang dilaporkan.",
      },
      {
        title: "Rabat, diskon, dan promosi",
        text: "Perlakuan pajak atas rabat volume, diskon, dan biaya promosi bergantung pada struktur dan dokumentasinya.",
      },
      {
        title: "Karakterisasi distributor",
        text: "Status distributor sebagai limited-risk atau full-fledged memengaruhi margin yang diharapkan atas pembelian dari afiliasi.",
      },
      {
        title: "SP2DK berdasarkan data pihak ketiga",
        text: "Ketidaksesuaian dengan data lawan transaksi merupakan pemicu umum permintaan penjelasan.",
      },
    ],
    scenarios: [
      {
        title: "SP2DK atas selisih peredaran usaha",
        situation:
          "Distributor menerima SP2DK yang menunjukkan selisih antara peredaran usaha yang dilaporkan dan Faktur Pajak yang dicatat oleh pelanggannya.",
        questions: [
          "Apakah selisih berasal dari perbedaan waktu, retur, atau klasifikasi?",
          "Apakah ada selisih yang mencerminkan kesalahan pelaporan?",
          "Bagaimana penjelasan sebaiknya didokumentasikan untuk kemungkinan tindak lanjut?",
        ],
        approach:
          "Merekonsiliasi sumber data dengan catatan internal, memisahkan penjelasan dari pembetulan, dan menyusun tanggapan yang terstruktur dan didukung bukti.",
      },
      {
        title: "Margin distributor afiliasi",
        situation: "Distributor yang terutama membeli dari prinsipal afiliasi melaporkan margin usaha yang rendah.",
        questions: [
          "Apakah distributor bersifat limited-risk atau menanggung risiko pasar dan persediaan?",
          "Bagaimana marginnya dibandingkan distributor independen?",
          "Apakah perjanjian mencerminkan siapa yang menanggung biaya pemasaran dan persediaan?",
        ],
        approach:
          "Menganalisis fungsi dan risiko, melakukan benchmarking margin, serta merekomendasikan penyesuaian harga atau perjanjian bila diperlukan.",
      },
    ],
    regulations: [
      "UU Nomor 8 Tahun 1983 tentang PPN sebagaimana terakhir diubah dengan UU Nomor 7 Tahun 2021 (UU HPP)",
      "PMK-172/PMK.03/2023 tentang penerapan prinsip kewajaran dan kelaziman usaha dalam transaksi yang dipengaruhi hubungan istimewa",
      "UU Nomor 6 Tahun 1983 tentang Ketentuan Umum dan Tata Cara Perpajakan (KUP) beserta perubahannya",
    ],
    insights: ["responding-to-an-sp2dk", "transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "Apakah Anda dapat membantu menyusun rutinitas rekonsiliasi bulanan?",
        answer:
          "Ya. Review kepatuhan berkala dapat membentuk rutinitas rekonsiliasi yang menemukan selisih sebelum berujung pada permintaan penjelasan.",
      },
      {
        question: "Apakah semua rabat dapat dibebankan?",
        answer:
          "Belum tentu. Perlakuannya bergantung pada struktur dan dokumentasi setiap pengaturan. Kami menelaah ketentuan spesifiknya.",
      },
    ],
    ctaLabel: "Diskusikan Persoalan Pajak Distribusi Anda",
    seo: {
      title: "Konsultan Pajak untuk Perusahaan Perdagangan & Distribusi di Indonesia",
      description:
        "Advisory pajak bagi pedagang dan distributor di Indonesia: rekonsiliasi peredaran usaha dan PPN, rabat dan promosi, transfer pricing distributor, dan pendampingan SP2DK.",
    },
  },
  "technology-digital": {
    headline: "Advisory Pajak untuk Usaha Teknologi & Digital",
    intro:
      "Perangkat lunak, layanan cloud, dan platform digital memindahkan nilai lintas negara tanpa memindahkan barang. Karakterisasi menjadi titik awal sebagian besar persoalan pajak di sektor ini.",
    context: [
      "Usaha teknologi di Indonesia kerap melisensikan perangkat lunak dari luar negeri, membayar layanan cloud dan platform, serta menerima atau memberikan dukungan intragrup. Setiap pembayaran perlu dikarakterisasi sebelum perlakuan PPh potong dan PPN-nya dapat ditetapkan.",
      "Model bisnis yang berubah cepat juga berarti posisi yang diambil beberapa tahun lalu mungkin tidak lagi sesuai dengan cara bisnis beroperasi saat ini.",
    ],
    issues: [
      {
        title: "Karakterisasi pembayaran digital",
        text: "Apakah suatu pembayaran merupakan imbalan jasa, lisensi, atau penggunaan perangkat lunak akan memengaruhi perlakuan PPh potong dan P3B.",
      },
      {
        title: "PPN atas jasa dari luar negeri",
        text: "Jasa dan barang tidak berwujud dari luar negeri yang dimanfaatkan di Indonesia dapat menimbulkan PPN yang wajib dipenuhi penerimanya.",
      },
      {
        title: "Jasa intragrup dan alokasi biaya",
        text: "Biaya dari entitas regional atau global memerlukan bukti manfaat dan metode alokasi yang dapat dipertahankan.",
      },
      {
        title: "Akses P3B",
        text: "Tarif P3B yang lebih rendah bergantung pada dokumentasi dan pemenuhan syarat beneficial owner oleh penerima penghasilan.",
      },
    ],
    scenarios: [
      {
        title: "Biaya lisensi atau imbalan jasa?",
        situation:
          "Anak perusahaan di Indonesia membayar biaya bulanan kepada induk regional yang mencakup akses perangkat lunak, hosting, dan dukungan.",
        questions: [
          "Bagian mana dari biaya tersebut yang merupakan jasa dan mana yang terkait hak atas perangkat lunak?",
          "Perlakuan PPh potong dan PPN apa yang berlaku untuk setiap bagian?",
          "Apakah perjanjian menggambarkan apa yang benar-benar diberikan?",
        ],
        approach:
          "Menganalisis perjanjian dan jasa yang benar-benar diberikan, merekomendasikan karakterisasi setiap komponen, serta menyelaraskan redaksi kontrak dan dokumentasinya.",
      },
      {
        title: "Alokasi biaya regional",
        situation: "Kantor pusat regional mengalokasikan biaya bersama seperti TI, keuangan, dan SDM kepada entitas Indonesia.",
        questions: [
          "Apakah entitas Indonesia menerima manfaat yang dapat diidentifikasi?",
          "Apakah kunci alokasi wajar dan diterapkan secara konsisten?",
          "Apakah kegiatan duplikatif atau kegiatan pemegang saham telah dikecualikan?",
        ],
        approach:
          "Menelaah kelompok biaya dan kunci alokasi, menguji bukti manfaat, serta menyusun dokumentasi yang mendukung pembebanan biaya.",
      },
    ],
    regulations: [
      "Pasal 26 UU PPh dan PER-25/PJ/2018 tentang tata cara penerapan P3B",
      "UU Nomor 8 Tahun 1983 tentang PPN sebagaimana terakhir diubah dengan UU Nomor 7 Tahun 2021 (UU HPP)",
      "PMK-172/PMK.03/2023 tentang penerapan prinsip kewajaran dan kelaziman usaha dalam transaksi yang dipengaruhi hubungan istimewa",
    ],
    insights: ["cross-border-payments-pma-withholding-tax", "transfer-pricing-documentation-indonesia"],
    faqs: [
      {
        question: "Model bisnis kami baru berubah. Apakah posisi pajak perlu ditinjau ulang?",
        answer:
          "Ya. Perubahan atas apa yang dijual, dari mana, dan oleh siapa sering mengubah karakterisasi pembayaran dan profil transfer pricing.",
      },
      {
        question: "Apakah Anda dapat berkoordinasi dengan tim pajak regional kami?",
        answer: "Ya. Deliverable dapat disusun dalam bahasa Inggris dan diselaraskan dengan pelaporan regional grup.",
      },
    ],
    ctaLabel: "Diskusikan Persoalan Pajak Digital Anda",
    seo: {
      title: "Konsultan Pajak untuk Perusahaan Teknologi & Digital di Indonesia",
      description:
        "Advisory pajak bagi usaha teknologi dan digital di Indonesia: karakterisasi pembayaran perangkat lunak dan digital, PPN atas jasa luar negeri, dan biaya intragrup.",
    },
  },
  "financial-services": {
    headline: "Advisory Pajak untuk Jasa Keuangan & Perusahaan Induk",
    intro:
      "Struktur holding dan pembiayaan intragrup memusatkan arus penghasilan yang diperiksa secara cermat: bunga, dividen, dan keuntungan dari pengalihan saham.",
    context: [
      "Perusahaan induk dan grup keuangan mengelola modal lintas entitas, memberikan pinjaman di dalam grup, dan secara berkala menata ulang kepemilikan. Setiap langkah tersebut memiliki konsekuensi PPh dan PPh potong.",
      "Karena nilai transaksinya sering besar, satu posisi saja dapat bersifat material. Tata kelola dan dokumentasi sama pentingnya dengan jawaban teknisnya.",
    ],
    issues: [
      {
        title: "Pembebanan bunga",
        text: "Pembiayaan afiliasi tunduk pada batasan perbandingan utang dan modal serta prinsip kewajaran dan kelaziman usaha.",
      },
      {
        title: "Dividen dan repatriasi",
        text: "Perlakuan dividen bergantung pada penerimanya serta persyaratan dalam ketentuan PPh yang berlaku dan P3B terkait.",
      },
      {
        title: "Reorganisasi dan pengalihan saham",
        text: "Restrukturisasi dan pengalihan saham dapat menimbulkan pajak atas keuntungan dan memerlukan urutan langkah yang cermat.",
      },
      {
        title: "Tata kelola lintas entitas",
        text: "Banyak entitas memerlukan proses yang seragam dan gambaran risiko pajak grup yang jelas.",
      },
    ],
    scenarios: [
      {
        title: "Menyederhanakan struktur grup",
        situation:
          "Sebuah grup berencana menggabungkan beberapa anak perusahaan di Indonesia dan memindahkan kepemilikan ke satu perusahaan induk.",
        questions: [
          "Langkah mana yang dapat menimbulkan pajak atas keuntungan atau pengalihan?",
          "Apakah fasilitas penggabungan usaha tersedia dan persyaratan apa yang berlaku?",
          "Eksposur historis apa yang terbawa ke entitas yang menerima penggabungan?",
        ],
        approach:
          "Memetakan langkah-langkah, menilai konsekuensi pajak dari urutan alternatif, serta mengidentifikasi due diligence dan dokumentasi yang diperlukan sebelum implementasi.",
      },
      {
        title: "Cash pooling dan pinjaman intragrup",
        situation: "Sebuah grup memusatkan likuiditas melalui pinjaman intragrup dari dan kepada entitas-entitasnya di Indonesia.",
        questions: [
          "Apakah tingkat bunga dapat dipertahankan sebagai wajar di kedua arah?",
          "Bagaimana batasan perbandingan utang dan modal berlaku bagi setiap peminjam?",
          "Apakah PPh atas bunga yang dibayarkan telah dipotong dengan benar?",
        ],
        approach:
          "Menelaah kebijakan dan perjanjian pembiayaan, menguji harga, serta menyusun langkah kepatuhan untuk pembayaran bunga.",
      },
    ],
    regulations: [
      "PMK-169/PMK.010/2015 tentang besarnya perbandingan antara utang dan modal untuk keperluan PPh",
      "UU Nomor 7 Tahun 1983 tentang PPh sebagaimana terakhir diubah dengan UU Nomor 7 Tahun 2021 (UU HPP)",
      "PMK-172/PMK.03/2023 tentang penerapan prinsip kewajaran dan kelaziman usaha dalam transaksi yang dipengaruhi hubungan istimewa",
    ],
    insights: ["tax-governance-framework-large-companies", "cross-border-payments-pma-withholding-tax"],
    faqs: [
      {
        question: "Apakah Anda dapat mereview rencana restrukturisasi sebelum disetujui direksi?",
        answer:
          "Ya. Kami menguraikan konsekuensi pajak setiap langkah beserta alternatifnya, sehingga direksi dapat memutuskan dengan pandangan pajak yang jelas.",
      },
      {
        question: "Apakah Anda mendampingi lembaga keuangan yang diatur regulator?",
        answer:
          "Kami memberikan advis atas persoalan pajak. Persyaratan regulasi sektoral dipastikan pada tahap penetapan ruang lingkup dan dikoordinasikan dengan konsultan regulasi klien bila diperlukan.",
      },
    ],
    ctaLabel: "Diskusikan Persoalan Pajak Grup Anda",
    seo: {
      title: "Konsultan Pajak untuk Jasa Keuangan & Perusahaan Induk di Indonesia",
      description:
        "Advisory pajak bagi perusahaan induk dan grup keuangan di Indonesia: pembiayaan intragrup, dividen, reorganisasi, pengalihan saham, dan tata kelola pajak grup.",
    },
  },
  "consumer-healthcare": {
    headline: "Advisory Pajak untuk Barang Konsumsi & Kesehatan",
    intro:
      "Usaha berbasis merek mengeluarkan biaya pemasaran yang besar dan bergantung pada merek milik grup serta rantai pasok regional. Kombinasi ini menarik perhatian pada royalti, biaya promosi, dan margin.",
    context: [
      "Perusahaan barang konsumsi dan kesehatan sering membayar royalti atas merek yang dimiliki entitas grup lain, sekaligus menanggung biaya pemasaran lokal yang signifikan. Siapa yang memiliki dan mengembangkan nilai merek di Indonesia menjadi persoalan utama transfer pricing.",
      "Biaya promosi dan jamuan, insentif distributor, serta volume transaksi yang tinggi menambah persoalan pembebanan biaya dan rekonsiliasi yang kerap muncul dalam pemeriksaan.",
    ],
    issues: [
      {
        title: "Marketing intangibles dan royalti",
        text: "Bila entitas lokal menanggung biaya pemasaran yang besar, royalti yang dibayar dan imbal hasil yang diperoleh harus mencerminkan kontribusinya.",
      },
      {
        title: "Biaya promosi dan jamuan",
        text: "Pembebanan biaya bergantung pada pemenuhan persyaratan dokumentasi, termasuk daftar nominatif bila diwajibkan.",
      },
      {
        title: "Pengadaan regional dan struktur prinsipal",
        text: "Pengadaan terpusat atau model prinsipal mengalihkan fungsi dan risiko, yang harus tercermin dalam margin lokal.",
      },
      {
        title: "Eksposur pemeriksaan atas transaksi bervolume tinggi",
        text: "Jumlah transaksi yang besar menjadikan disiplin rekonsiliasi dan dokumentasi sangat penting.",
      },
    ],
    scenarios: [
      {
        title: "Royalti di samping biaya pemasaran lokal yang besar",
        situation:
          "Anak perusahaan barang konsumsi membayar royalti merek kepada induknya, sementara mendanai sebagian besar iklan merek tersebut di Indonesia.",
        questions: [
          "Apakah kegiatan pemasaran entitas lokal melebihi yang lazim ditanggung penerima lisensi independen?",
          "Apakah tarif royalti konsisten dengan kontribusi tersebut?",
          "Apakah dukungan pemasaran atau royalti perlu ditinjau ulang?",
        ],
        approach:
          "Menganalisis fungsi dan biaya pemasaran, melakukan benchmarking royalti dan imbal hasil entitas, serta menyusun opsi beserta kebutuhan dokumentasinya.",
      },
      {
        title: "Biaya promosi yang akan diperiksa",
        situation: "Perusahaan memperkirakan biaya promosi dan jamuannya akan diperiksa dalam pemeriksaan mendatang.",
        questions: [
          "Apakah daftar nominatif dan dokumen pendukung telah lengkap?",
          "Biaya mana yang memenuhi syarat untuk dibebankan?",
          "Adakah koreksi yang sebaiknya dilakukan secara sukarela?",
        ],
        approach:
          "Menelaah sampel terhadap persyaratan pembebanan biaya, menutup kekurangan dokumentasi, dan menyiapkan posisi untuk pembahasan pemeriksaan.",
      },
    ],
    regulations: [
      "PMK-172/PMK.03/2023 tentang penerapan prinsip kewajaran dan kelaziman usaha dalam transaksi yang dipengaruhi hubungan istimewa",
      "Pasal 6 dan Pasal 9 UU PPh tentang biaya yang dapat dan tidak dapat dikurangkan",
      "PMK-02/PMK.03/2010 tentang biaya promosi yang dapat dikurangkan dari penghasilan bruto",
    ],
    insights: ["transfer-pricing-documentation-indonesia", "preparing-for-a-tax-audit-in-indonesia"],
    faqs: [
      {
        question: "Bagaimana mendokumentasikan kontribusi pemasaran untuk transfer pricing?",
        answer:
          "Dengan mencatat siapa yang memutuskan, mendanai, dan mengendalikan kegiatan pemasaran, serta membandingkan biaya dan imbal hasil entitas dengan pembanding independen.",
      },
      {
        question: "Apakah Anda dapat mereview biaya promosi sebelum tutup tahun?",
        answer: "Ya. Review sebelum tutup buku memberi waktu untuk melengkapi dokumentasi sebelum SPT Tahunan disampaikan.",
      },
    ],
    ctaLabel: "Diskusikan Persoalan Pajak Sektor Konsumsi Anda",
    seo: {
      title: "Konsultan Pajak untuk Perusahaan Barang Konsumsi & Kesehatan di Indonesia",
      description:
        "Advisory pajak bagi perusahaan barang konsumsi dan kesehatan di Indonesia: royalti merek dan marketing intangibles, biaya promosi, dan rantai pasok regional.",
    },
  },
};
