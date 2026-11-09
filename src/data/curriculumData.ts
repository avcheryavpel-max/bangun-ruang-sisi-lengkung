import { ExampleProblem, FormulaItem, QuizQuestion, SolidElement } from '../types';

export const TEACHER_INFO = {
  name: 'Mister Jo',
  title: 'Pengajar Matematika SMP & SMA',
  subject: 'Bangun Ruang Sisi Lengkung',
  subtopics: 'Tabung • Bola • Kerucut',
  welcomeSpeech:
    'Halo siswa-siswi hebat! Selamat datang di aplikasi pembelajaran interaktif Bangun Ruang Sisi Lengkung bersama Mister Jo. Di sini kita akan mempelajari konsep tabung, bola, dan kerucut secara mendalam, visual, dan menyenangkan.',
};

export const REAL_LIFE_EXAMPLES = [
  {
    solid: 'Tabung',
    items: ['Kaleng biskuit & susu kental manis', 'Drum minyak industri', 'Baterai silinder jam dinding', 'Pipa air & tabung pemadam api'],
    icon: 'cylinder',
    color: 'from-blue-500 to-cyan-500',
    description: 'Benda dengan alas dan tutup lingkaran sejajar yang dihubungkan oleh selimut lengkung tegak.',
  },
  {
    solid: 'Bola',
    items: ['Bola sepak & bola basket', 'Globe tiruan bola bumi', 'Kelereng kaca permainan', 'Kubah masjid setengah lingkaran'],
    icon: 'sphere',
    color: 'from-pink-500 to-rose-500',
    description: 'Benda bulat sempurna di mana seluruh titik permukaannya berjarak sama persis ke satu titik pusat.',
  },
  {
    solid: 'Kerucut',
    items: ['Topi pesta ulang tahun', 'Cone renyah es krim', 'Traffic cone pembatas jalan', 'Tumpeng nasi kuning tradisi'],
    icon: 'cone',
    color: 'from-amber-500 to-orange-500',
    description: 'Benda beralas lingkaran yang menyempit secara teratur menuju satu titik puncak runcing.',
  },
];

export const COMPARISON_FLAT_VS_CURVED = [
  {
    kategori: 'Bentuk Bidang Sisi',
    sisiDatar: 'Seluruh sisi dibatasi oleh bidang datar (segitiga, persegi, segi-n).',
    sisiLengkung: 'Memiliki minimal satu bidang sisi yang melengkung (kurva halus).',
  },
  {
    kategori: 'Rusuk & Sudut',
    sisiDatar: 'Memiliki rusuk-rusuk lurus dan titik-titik sudut lancip/tumpul.',
    sisiLengkung: 'Rusuk berbentuk lingkaran lengkung dan umumnya tidak memiliki titik sudut (kecuali titik puncak kerucut).',
  },
  {
    kategori: 'Contoh Bangun',
    sisiDatar: 'Kubus, Balok, Prisma, Limas.',
    sisiLengkung: 'Tabung (Silinder), Bola, Kerucut.',
  },
  {
    kategori: 'Sifat Menggelinding',
    sisiDatar: 'Hanya bisa digeser, tidak dapat menggelinding lancar.',
    sisiLengkung: 'Dapat menggelinding pada bidang miring karena permukaan sisi lengkungnya.',
  },
];

export const CYLINDER_ELEMENTS: SolidElement[] = [
  {
    name: 'Alas Tabung',
    symbol: 'Lingkaran Bawah',
    description: 'Daerah lingkaran di bagian dasar tabung dengan jari-jari r.',
    color: '#3B82F6',
  },
  {
    name: 'Tutup Tabung',
    symbol: 'Lingkaran Atas',
    description: 'Daerah lingkaran di bagian atas tabung yang kongruen (sama bentuk & ukuran) serta sejajar dengan alas.',
    color: '#60A5FA',
  },
  {
    name: 'Selimut Tabung',
    symbol: 'Bidang Lengkung',
    description: 'Bidang lengkung yang menghubungkan alas dan tutup. Jika dibentangkan, menjadi persegi panjang berukuran (2 × π × r) × t.',
    color: '#EC4899',
  },
  {
    name: 'Jari-jari (r)',
    symbol: 'r',
    description: 'Jarak dari pusat lingkaran alas/tutup ke tepi lingkaran kelilingnya.',
    color: '#10B981',
  },
  {
    name: 'Diameter (d)',
    symbol: 'd = 2r',
    description: 'Garis lurus yang menghubungkan dua titik pada lingkaran dan melewati titik pusat (dua kali jari-jari).',
    color: '#8B5CF6',
  },
  {
    name: 'Tinggi Tabung (t)',
    symbol: 't',
    description: 'Jarak tegak lurus antara bidang alas dan bidang tutup tabung.',
    color: '#F59E0B',
  },
];

export const CYLINDER_FORMULAS: FormulaItem[] = [
  {
    name: 'Luas Alas (L)',
    formula: 'L = π × r²',
    spokenFormula: 'Luas alas sama dengan pi dikali jari-jari kuadrat.',
    description: 'Karena alas berbentuk lingkaran murni berpusat di tengah dengan jari-jari r.',
    unit: 'cm² atau m²',
  },
  {
    name: 'Keliling Alas (K)',
    formula: 'K = 2 × π × r',
    spokenFormula: 'Keliling alas sama dengan dua dikali pi dikali jari-jari.',
    description: 'Panjang garis tepi lingkaran alas, yang kelak menjadi panjang sisi selimut tabung.',
    unit: 'cm atau m',
  },
  {
    name: 'Luas Selimut (Ls)',
    formula: 'Ls = 2 × π × r × t',
    spokenFormula: 'Luas selimut sama dengan dua dikali pi dikali jari-jari dikali tinggi.',
    description: 'Luas persegi panjang pembungkus tabung: Panjang selimut = Keliling lingkaran (2πr) dikali Lebar = Tinggi tabung (t).',
    unit: 'cm² atau m²',
    breakdown: [
      'Panjang selimut = Keliling alas = 2 × π × r',
      'Lebar selimut = Tinggi tabung = t',
      'Luas selimut = Panjang × Lebar = 2 × π × r × t',
    ],
  },
  {
    name: 'Luas Permukaan Total (Lp)',
    formula: 'Lp = 2 × π × r² + 2 × π × r × t = 2 × π × r × (r + t)',
    spokenFormula: 'Luas permukaan sama dengan dua dikali pi dikali jari-jari dikali dalam kurung jari-jari ditambah tinggi.',
    description: 'Penjumlahan dari 2 luas lingkaran (alas + tutup) dan 1 luas selimut persegi panjang.',
    unit: 'cm² atau m²',
    breakdown: [
      'Luas 2 tutup/alas = 2 × (π × r²)',
      'Luas selimut = 2 × π × r × t',
      'Difaktorkan: Lp = 2 × π × r × (r + t)',
    ],
  },
  {
    name: 'Volume Tabung (V)',
    formula: 'V = π × r² × t',
    spokenFormula: 'Volume sama dengan pi dikali jari-jari kuadrat dikali tinggi.',
    description: 'Ruang yang terisi didapat dari menumpuk lingkaran alas seluas πr² setinggi t secara tegak beraturan.',
    unit: 'cm³ atau m³ atau Liter',
  },
];

export const SPHERE_ELEMENTS: SolidElement[] = [
  {
    name: 'Titik Pusat Bola',
    symbol: 'Titik O',
    description: 'Titik tepat di tengah bola yang memiliki jarak sama ke semua titik pada permukaan bola.',
    color: '#EF4444',
  },
  {
    name: 'Jari-jari Bola (r)',
    symbol: 'r',
    description: 'Garis lurus yang menghubungkan titik pusat O ke sembarang titik pada permukaan lengkung bola.',
    color: '#3B82F6',
  },
  {
    name: 'Diameter Bola (d)',
    symbol: 'd = 2r',
    description: 'Ruas garis lurus yang menghubungkan dua titik pada kulit bola dan melalui titik pusat bola.',
    color: '#8B5CF6',
  },
  {
    name: 'Permukaan / Kulit Bola',
    symbol: 'Sisi Lengkung',
    description: 'Himpunan seluruh titik berjarak r dari pusat bola yang membentuk satu-satunya bidang sisi tertutup tanpa rusuk.',
    color: '#EC4899',
  },
];

export const SPHERE_FORMULAS: FormulaItem[] = [
  {
    name: 'Luas Lingkaran Besar',
    formula: 'L = π × r²',
    spokenFormula: 'Luas lingkaran besar sama dengan pi dikali jari-jari kuadrat.',
    description: 'Luas penampang irisan terbesar bola jika dibelah tepat melewati titik pusat O.',
    unit: 'cm² atau m²',
  },
  {
    name: 'Luas Permukaan Bola (Lp)',
    formula: 'Lp = 4 × π × r²',
    spokenFormula: 'Luas permukaan bola sama dengan empat dikali pi dikali jari-jari kuadrat.',
    description: 'Archimedes membuktikan bahwa luas kulit luar bola tepat sama dengan 4 kali luas lingkaran besarnya.',
    unit: 'cm² atau m²',
    breakdown: [
      'Kulit bola dapat menutupi tepat 4 lingkaran datar ber-jari-jari sama r.',
      'Lp = 4 × Luas Lingkaran Besar = 4 × (π × r²).',
    ],
  },
  {
    name: 'Volume Bola (V)',
    formula: 'V = 4/3 × π × r³',
    spokenFormula: 'Volume bola sama dengan empat per tiga dikali pi dikali jari-jari pangkat tiga.',
    description: 'Kapasitas isi ruang bola tiga dimensi. Diturunkan dari batas piramida-piramida mini menuju pusat bola atau perbandingan Archimedes.',
    unit: 'cm³ atau m³ atau Liter',
    breakdown: [
      'Archimedes menemukan: Sebuah bola yang pas berada di dalam tabung (jari-jari r dan tinggi tabung t = 2r) memiliki volume tepat 2/3 dari volume tabung tersebut.',
      'V tabung = π × r² × (2r) = 2π × r³.',
      'V bola = (2/3) × 2π × r³ = 4/3 × π × r³.',
    ],
  },
];

export const CONE_ELEMENTS: SolidElement[] = [
  {
    name: 'Alas Kerucut',
    symbol: 'Lingkaran Alas',
    description: 'Bidang datar berbentuk lingkaran di bagian bawah kerucut dengan jari-jari r.',
    color: '#3B82F6',
  },
  {
    name: 'Titik Puncak',
    symbol: 'Titik T',
    description: 'Titik tertinggi kerucut tempat ujung selimut meruncing bertemu.',
    color: '#EF4444',
  },
  {
    name: 'Tinggi Kerucut (t)',
    symbol: 't',
    description: 'Jarak tegak lurus (membentuk sudut siku-siku 90°) dari titik puncak ke pusat lingkaran alas.',
    color: '#F59E0B',
  },
  {
    name: 'Jari-jari Alas (r)',
    symbol: 'r',
    description: 'Jarak mendatar dari pusat lingkaran alas ke tepi keliling alas.',
    color: '#10B981',
  },
  {
    name: 'Garis Pelukis (s)',
    symbol: 's = √(r² + t²)',
    description: 'Garis miring pada sisi luar selimut yang menghubungkan titik puncak ke sembarang titik pada keliling alas.',
    color: '#EC4899',
  },
  {
    name: 'Selimut Kerucut',
    symbol: 'Juring Lingkaran',
    description: 'Bidang lengkung pembungkus kerucut. Jika dibuka mendatar, selimut berbentuk juring lingkaran dengan jari-jari s.',
    color: '#8B5CF6',
  },
];

export const CONE_FORMULAS: FormulaItem[] = [
  {
    name: 'Luas Alas (La)',
    formula: 'La = π × r²',
    spokenFormula: 'Luas alas sama dengan pi dikali jari-jari kuadrat.',
    description: 'Luas penampang lingkaran di bagian bawah kerucut.',
    unit: 'cm² atau m²',
  },
  {
    name: 'Garis Pelukis (s)',
    formula: 's = √(r² + t²)',
    spokenFormula: 's sama dengan akar dari jari-jari kuadrat ditambah tinggi kuadrat.',
    description: 'Diperoleh melalui Teorema Pythagoras dari segitiga siku-siku antara jari-jari (r), tinggi (t), dan garis pelukis (s).',
    unit: 'cm atau m',
  },
  {
    name: 'Luas Selimut Kerucut (Ls)',
    formula: 'Ls = π × r × s',
    spokenFormula: 'Luas selimut sama dengan pi dikali jari-jari dikali garis pelukis s.',
    description: 'Selimut kerucut yang dibentangkan membentuk juring lingkaran besar ber-jari-jari s dengan panjang busur 2πr.',
    unit: 'cm² atau m²',
    breakdown: [
      'Keliling lingkaran besar berjari-jari s = 2 × π × s',
      'Panjang busur juring = Keliling alas kerucut = 2 × π × r',
      'Porsi juring = (2πr) / (2πs) = r / s',
      'Luas selimut = (r / s) × (π × s²) = π × r × s',
    ],
  },
  {
    name: 'Luas Permukaan Total (Lp)',
    formula: 'Lp = π × r² + π × r × s = π × r × (r + s)',
    spokenFormula: 'Luas permukaan sama dengan pi dikali jari-jari dikali dalam kurung jari-jari ditambah s.',
    description: 'Penjumlahan dari 1 luas alas lingkaran dan 1 luas selimut juring.',
    unit: 'cm² atau m²',
  },
  {
    name: 'Volume Kerucut (V)',
    formula: 'V = 1/3 × π × r² × t',
    spokenFormula: 'Volume sama dengan satu per tiga dikali pi dikali jari-jari kuadrat dikali tinggi.',
    description: 'Eksperimen membuktikan bahwa volume kerucut tepat sepertiga (1/3) dari volume tabung dengan jari-jari dan tinggi yang sama.',
    unit: 'cm³ atau m³ atau Liter',
    breakdown: [
      'Dibutuhkan tepat 3 kali pengisian air penuh dari kerucut untuk memenuhi sebuah tabung dengan ukuran alas dan tinggi yang sama.',
      'V kerucut = (1/3) × V tabung = (1/3) × π × r² × t',
    ],
  },
];

export const WORKED_EXAMPLES: ExampleProblem[] = [
  {
    id: 'contoh-tabung-1',
    solidType: 'tabung',
    title: 'Contoh 1: Menghitung Kapasitas & Kebutuhan Bahan Drum Minyak',
    context:
      'Sebuah drum minyak berbentuk tabung tertutup memiliki jari-jari alas 7 cm dan tinggi 20 cm. Pabrik ingin mengetahui: (a) berapa volume minyak maksimal yang dapat ditampung drum tersebut, dan (b) berapa luas lembaran seng yang dibutuhkan untuk membuat satu buah drum utuh.',
    illustrationType: 'drum',
    known: [
      { label: 'Bentuk bangun', value: 'Tabung tertutup (ada alas dan tutup)', spoken: 'Bangun ruang tabung tertutup' },
      { label: 'Jari-jari (r)', value: '7 cm', spoken: 'jari-jari r sama dengan tujuh sentimeter' },
      { label: 'Tinggi (t)', value: '20 cm', spoken: 'tinggi t sama dengan dua puluh sentimeter' },
      { label: 'Nilai pi (π)', value: '22/7 (karena r kelipatan 7)', spoken: 'pi sama dengan dua puluh dua per tujuh' },
    ],
    asked: 'a) Volume tabung (V) dan b) Luas permukaan tabung utuh (Lp)',
    spokenAsked: 'Volume tabung dan luas permukaan tabung utuh',
    formulaUsed: 'V = π × r² × t  dan  Lp = 2 × π × r × (r + t)',
    spokenFormulaUsed: 'Volume sama dengan pi kali jari-jari kuadrat kali tinggi, dan luas permukaan sama dengan dua kali pi kali jari-jari kali dalam kurung jari-jari ditambah tinggi',
    logicReason:
      'Karena drum tertutup, drum memiliki alas lingkaran, tutup lingkaran, dan selimut tabung. Rumus luas permukaan utuh menggabungkan ketiganya sekaligus. Volume adalah hasil perkalian luas alas lingkaran dengan tingginya.',
    steps: [
      {
        title: 'Langkah 1: Menghitung Volume Tabung (V)',
        detail: 'Masukkan nilai r = 7 cm dan t = 20 cm ke rumus volume tabung.',
        calculation: 'V = (22/7) × 7² × 20 = (22/7) × 49 × 20 = 22 × 7 × 20 = 154 × 20 = 3.080 cm³',
        spoken: 'Volume sama dengan dua puluh dua per tujuh dikali empat puluh sembilan dikali dua puluh, menghasilkan tiga ribu delapan puluh sentimeter kubik.',
      },
      {
        title: 'Langkah 2: Menghitung Luas Permukaan Utuh (Lp)',
        detail: 'Gunakan bentuk faktorisasi Lp = 2 × π × r × (r + t) untuk mempermudah perhitungan aljabar.',
        calculation: 'Lp = 2 × (22/7) × 7 × (7 + 20) = 44 × 27 = 1.188 cm²',
        spoken: 'Luas permukaan sama dengan dua dikali dua puluh dua per tujuh dikali tujuh dikali dua puluh tujuh, menghasilkan seribu seratus delapan puluh delapan sentimeter persegi.',
      },
    ],
    finalAnswer: 'Volume drum = 3.080 cm³ (3,08 Liter) dan Luas seng yang dibutuhkan = 1.188 cm²',
    spokenFinalAnswer: 'Jadi, volume drum adalah tiga ribu delapan puluh sentimeter kubik dan luas seng yang dibutuhkan adalah seribu seratus delapan puluh delapan sentimeter persegi.',
  },
  {
    id: 'contoh-bola-1',
    solidType: 'bola',
    title: 'Contoh 2: Luas Kulit dan Volume Bola Basket',
    context:
      'Sebuah bola basket resmi memiliki diameter 20 cm. Hitunglah: (a) luas bahan kulit sintetis minimal untuk membuat permukaan luar bola tersebut, dan (b) volume ruang udara di dalam bola basket. Gunakan pendekatan π = 3,14.',
    illustrationType: 'ball',
    known: [
      { label: 'Bentuk bangun', value: 'Bola bulat sempurna', spoken: 'Bola bulat sempurna' },
      { label: 'Diameter (d)', value: '20 cm', spoken: 'diameter d sama dengan dua puluh sentimeter' },
      { label: 'Jari-jari (r)', value: 'r = d / 2 = 20 / 2 = 10 cm', spoken: 'jari-jari r sama dengan sepuluh sentimeter' },
      { label: 'Nilai pi (π)', value: '3,14 (karena r = 10 bukan kelipatan 7)', spoken: 'pi sama dengan tiga koma satu empat' },
    ],
    asked: 'a) Luas permukaan bola (Lp) dan b) Volume bola basket (V)',
    spokenAsked: 'Luas permukaan bola dan volume bola basket',
    formulaUsed: 'Lp = 4 × π × r²  dan  V = 4/3 × π × r³',
    spokenFormulaUsed: 'Luas permukaan sama dengan empat kali pi kali jari-jari kuadrat, dan volume sama dengan empat per tiga kali pi kali jari-jari pangkat tiga',
    logicReason:
      'Bola tidak memiliki alas maupun tutup, seluruh sisi luarnya berupa kulit lengkung seluas 4 kali luas lingkaran besar. Volume bola memanfaatkan pangkat tiga jari-jari dengan faktor pengali empat per tiga.',
    steps: [
      {
        title: 'Langkah 1: Menghitung Luas Permukaan Bola (Lp)',
        detail: 'Masukkan r = 10 cm ke dalam rumus luas permukaan bola.',
        calculation: 'Lp = 4 × 3,14 × 10² = 4 × 3,14 × 100 = 4 × 314 = 1.256 cm²',
        spoken: 'Luas permukaan sama dengan empat dikali tiga koma satu empat dikali seratus, menghasilkan seribu dua ratus lima puluh enam sentimeter persegi.',
      },
      {
        title: 'Langkah 2: Menghitung Volume Bola Basket (V)',
        detail: 'Masukkan r = 10 cm ke dalam rumus volume bola.',
        calculation: 'V = (4/3) × 3,14 × 10³ = (4/3) × 3,14 × 1.000 = (4/3) × 3.140 = 12.560 / 3 ≈ 4.186,67 cm³',
        spoken: 'Volume sama dengan empat per tiga dikali tiga koma satu empat dikali seribu, menghasilkan kira-kira empat ribu seratus delapan puluh enam koma enam tujuh sentimeter kubik.',
      },
    ],
    finalAnswer: 'Luas kulit bola = 1.256 cm² dan Volume udara di dalam bola ≈ 4.186,67 cm³',
    spokenFinalAnswer: 'Jadi, luas kulit bola adalah seribu dua ratus lima puluh enam sentimeter persegi dan volume udara kira-kira empat ribu seratus delapan puluh enam koma enam tujuh sentimeter kubik.',
  },
  {
    id: 'contoh-kerucut-1',
    solidType: 'kerucut',
    title: 'Contoh 3: Cetakan Nasi Tumpeng Kerucut',
    context:
      'Ibu membuat cetakan nasi tumpeng aluminium berbentuk kerucut tanpa alas dengan jari-jari alas 7 cm dan tinggi tumpeng 24 cm. Tentukan: (a) panjang garis pelukis cetakan, (b) luas lembaran aluminium yang dipakai membuat selimut cetakan, dan (c) volume nasi kuning padat yang muat dalam cetakan.',
    illustrationType: 'tumpeng',
    known: [
      { label: 'Bentuk bangun', value: 'Kerucut tanpa alas (hanya selimut)', spoken: 'Kerucut tanpa alas' },
      { label: 'Jari-jari (r)', value: '7 cm', spoken: 'jari-jari r sama dengan tujuh sentimeter' },
      { label: 'Tinggi (t)', value: '24 cm', spoken: 'tinggi t sama dengan dua puluh empat sentimeter' },
      { label: 'Nilai pi (π)', value: '22/7', spoken: 'pi sama dengan dua puluh dua per tujuh' },
    ],
    asked: 'a) Garis pelukis (s), b) Luas selimut kerucut (Ls), c) Volume cetakan (V)',
    spokenAsked: 'Panjang garis pelukis s, luas selimut kerucut, dan volume cetakan',
    formulaUsed: 's = √(r² + t²), Ls = π × r × s, dan V = 1/3 × π × r² × t',
    spokenFormulaUsed: 's sama dengan akar jari-jari kuadrat tambah tinggi kuadrat, luas selimut sama dengan pi kali r kali s, dan volume sama dengan sepertiga kali pi kali r kuadrat kali tinggi',
    logicReason:
      'Karena cetakan tumpeng berlubang di bagian bawahnya (tempat memasukkan nasi), maka hanya selimut kerucut yang dihitung luasnya. Garis pelukis s harus dicari terlebih dahulu menggunakan tripel Pythagoras 7, 24, 25.',
    steps: [
      {
        title: 'Langkah 1: Menentukan Garis Pelukis (s)',
        detail: 'Gunakan Teorema Pythagoras dari r = 7 cm dan t = 24 cm.',
        calculation: 's = √(7² + 24²) = √(49 + 576) = √625 = 25 cm',
        spoken: 's sama dengan akar dari empat puluh sembilan ditambah lima ratus tujuh puluh enam, yaitu akar enam ratus dua puluh lima yang sama dengan dua puluh lima sentimeter.',
      },
      {
        title: 'Langkah 2: Menghitung Luas Selimut Cetakan (Ls)',
        detail: 'Karena tidak ada alas, luas lembaran aluminium hanyalah luas selimut kerucut.',
        calculation: 'Ls = π × r × s = (22/7) × 7 × 25 = 22 × 25 = 550 cm²',
        spoken: 'Luas selimut sama dengan dua puluh dua per tujuh dikali tujuh dikali dua puluh lima, menghasilkan lima ratus lima puluh sentimeter persegi.',
      },
      {
        title: 'Langkah 3: Menghitung Volume Nasi Tumpeng (V)',
        detail: 'Gunakan rumus volume kerucut dengan t = 24 cm.',
        calculation: 'V = (1/3) × π × r² × t = (1/3) × (22/7) × 49 × 24 = (1/3) × 154 × 24 = 154 × 8 = 1.232 cm³',
        spoken: 'Volume sama dengan sepertiga dikali seratus lima puluh empat dikali dua puluh empat, yaitu seratus lima puluh empat dikali delapan, menghasilkan seribu dua ratus tiga puluh dua sentimeter kubik.',
      },
    ],
    finalAnswer: 'Garis pelukis s = 25 cm, Luas aluminium = 550 cm², Volume nasi = 1.232 cm³',
    spokenFinalAnswer: 'Jadi, panjang garis pelukis adalah dua puluh lima sentimeter, luas lembaran aluminium adalah lima ratus lima puluh sentimeter persegi, dan volume cetakan adalah seribu dua ratus tiga puluh dua sentimeter kubik.',
  },
];

export const HOTS_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    level: 'C4 (Menganalisis)',
    solidType: 'Tabung',
    contextTitle: 'Analisis Kapasitas Tangki Air Gedung',
    story:
      'Sebuah tangki penampungan air gedung berbentuk tabung memiliki jari-jari r = 70 cm dan tinggi t = 200 cm. Karena penambahan penghuni, pihak pengelola gedung berencana mengganti tangki tersebut dengan tangki baru berukuran tinggi yang sama (200 cm), namun jari-jarinya digandakan menjadi 2 kali jari-jari semula (r\' = 140 cm).',
    question:
      'Berdasarkan prinsip matematis bangun ruang tabung, bagaimanakah perbandingan volume kapasitas air tangki baru terhadap tangki lama?',
    spokenQuestion:
      'Berdasarkan prinsip matematis bangun ruang tabung, bagaimanakah perbandingan volume kapasitas air tangki baru terhadap tangki lama?',
    options: [
      { key: 'A', text: 'Kapasitas tangki baru menjadi 4 kali lipat dari kapasitas awal', spoken: 'Opsi A. Kapasitas tangki baru menjadi empat kali lipat dari kapasitas awal.' },
      { key: 'B', text: 'Kapasitas tangki baru menjadi 2 kali lipat dari kapasitas awal', spoken: 'Opsi B. Kapasitas tangki baru menjadi dua kali lipat dari kapasitas awal.' },
      { key: 'C', text: 'Kapasitas tangki baru menjadi 8 kali lipat dari kapasitas awal', spoken: 'Opsi C. Kapasitas tangki baru menjadi delapan kali lipat dari kapasitas awal.' },
      { key: 'D', text: 'Kapasitas tangki baru bertambah sebesar 50% dari kapasitas awal', spoken: 'Opsi D. Kapasitas tangki baru bertambah sebesar lima puluh persen dari kapasitas awal.' },
      { key: 'E', text: 'Kapasitas tangki baru tetap sama karena tingginya tidak berubah', spoken: 'Opsi E. Kapasitas tangki baru tetap sama karena tingginya tidak berubah.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Pengaruh Penggandaan Jari-jari pada Volume Tabung',
      known: [
        'Tinggi tangki tetap: t\' = t = 200 cm',
        'Jari-jari awal: r = 70 cm, Jari-jari baru: r\' = 2r = 140 cm',
        'Rumus Volume: V = π × r² × t',
      ],
      steps: [
        'Volume awal: V₁ = π × r² × t',
        'Volume baru: V₂ = π × (r\')² × t = π × (2r)² × t = π × 4r² × t = 4 × (π × r² × t) = 4 × V₁',
        'Secara angka: V₁ = (22/7) × 70² × 200 = 3.080.000 cm³ = 3.080 Liter',
        'V₂ = (22/7) × 140² × 200 = 12.320.000 cm³ = 12.320 Liter (tepat 4 kali lipat dari 3.080 Liter).',
      ],
      conclusion:
        'Karena jari-jari mengalami pengkuadratan pada rumus volume (r²), menggandakan jari-jari menjadi 2 kali akan melipatgandakan volume sebesar 2² = 4 kali lipat.',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Pada rumus volume tabung, jari-jari dikuadratkan. Jika jari-jari menjadi dua kali semula, maka volumenya menjadi dua kuadrat, yaitu empat kali lipat.',
    },
    diagramType: 'tank',
  },
  {
    id: 2,
    level: 'C5 (Mengevaluasi)',
    solidType: 'Tabung',
    contextTitle: 'Evaluasi Kebutuhan Lembaran Seng Kaleng Biskuit',
    story:
      'Sebuah industri UMKM biskuit memesan kaleng tabung tertutup rapat (berikut alas dan tutupnya) dengan jari-jari r = 7 cm dan tinggi t = 10 cm sebanyak 500 kaleng. Bagian pengadaan bahan harus memesan lembaran seng dalam satuan meter persegi (m²). Gunakan π = 22/7.',
    question:
      'Berapakah luas minimal lembaran seng yang harus disediakan perusahaan untuk memproduksi seluruh 500 kaleng tersebut?',
    spokenQuestion:
      'Berapakah luas minimal lembaran seng yang harus disediakan perusahaan untuk memproduksi seluruh lima ratus kaleng tersebut?',
    options: [
      { key: 'A', text: '37,4 m² (setara 374.000 cm²)', spoken: 'Opsi A. tiga puluh tujuh koma empat meter persegi.' },
      { key: 'B', text: '22,0 m² (setara 220.000 cm²)', spoken: 'Opsi B. dua puluh dua meter persegi.' },
      { key: 'C', text: '44,0 m² (setara 440.000 cm²)', spoken: 'Opsi C. empat puluh empat meter persegi.' },
      { key: 'D', text: '18,7 m² (setara 187.000 cm²)', spoken: 'Opsi D. delapan belas koma tujuh meter persegi.' },
      { key: 'E', text: '74,8 m² (setara 748.000 cm²)', spoken: 'Opsi E. tujuh puluh empat koma delapan meter persegi.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Luas Permukaan Tabung Utuh Tertutup dan Konversi Satuan Luas',
      known: [
        'Jari-jari kaleng: r = 7 cm',
        'Tinggi kaleng: t = 10 cm',
        'Jumlah kaleng: n = 500 buah',
        '1 m² = 10.000 cm²',
      ],
      steps: [
        'Luas permukaan 1 kaleng tabung utuh: Lp = 2 × π × r × (r + t)',
        'Lp = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm²',
        'Total luas seng untuk 500 kaleng = 500 × 748 cm² = 374.000 cm²',
        'Konversi ke meter persegi (m²): 374.000 ÷ 10.000 = 37,4 m²',
      ],
      conclusion:
        'Kebutuhan lembaran seng minimum untuk 500 kaleng utuh adalah 37,4 m².',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Luas satu kaleng utuh adalah tujuh ratus empat puluh delapan sentimeter persegi. Dikalikan lima ratus kaleng menghasilkan tiga ratus tujuh puluh empat ribu sentimeter persegi atau tiga puluh tujuh koma empat meter persegi.',
    },
    diagramType: 'biscuit',
  },
  {
    id: 3,
    level: 'C6 (Merancang Solusi)',
    solidType: 'Kerucut',
    contextTitle: 'Perancangan Bahan Topi Kerucut Ulang Tahun',
    story:
      'Panitia pentas seni ingin memproduksi 20 buah topi kerucut ulang tahun dari lembaran karton warna-warni. Setiap topi dirancang memiliki diameter alas d = 14 cm (jari-jari r = 7 cm) dan tinggi kerucut t = 24 cm. Perlu diingat bahwa topi ulang tahun dipakai di kepala sehingga bagian alasnya berlubang / terbuka (tanpa lingkaran alas). Gunakan π = 22/7.',
    question:
      'Berapakah luas karton minimal yang harus disiapkan untuk membuat seluruh 20 topi tersebut?',
    spokenQuestion:
      'Berapakah luas karton minimal yang harus disiapkan untuk membuat seluruh dua puluh topi tersebut?',
    options: [
      { key: 'A', text: '11.000 cm² (setara 1,1 m²)', spoken: 'Opsi A. sebelas ribu sentimeter persegi.' },
      { key: 'B', text: '14.080 cm² (setara 1,408 m²)', spoken: 'Opsi B. empat belas ribu delapan puluh sentimeter persegi.' },
      { key: 'C', text: '5.500 cm² (setara 0,55 m²)', spoken: 'Opsi C. lima ribu lima ratus sentimeter persegi.' },
      { key: 'D', text: '16.500 cm² (setara 1,65 m²)', spoken: 'Opsi D. enam belas ribu lima ratus sentimeter persegi.' },
      { key: 'E', text: '7.040 cm² (setara 0,704 m²)', spoken: 'Opsi E. tujuh ribu empat puluh sentimeter persegi.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Luas Selimut Kerucut dan Tripel Pythagoras',
      known: [
        'r = 7 cm, t = 24 cm',
        'Topi tidak memiliki alas (hanya luas selimut Ls = π × r × s)',
        'Jumlah topi = 20 buah',
      ],
      steps: [
        'Hitung garis pelukis s: s = √(r² + t²) = √(7² + 24²) = √(49 + 576) = √625 = 25 cm',
        'Luas selimut 1 topi: Ls = π × r × s = (22/7) × 7 × 25 = 22 × 25 = 550 cm²',
        'Total luas karton untuk 20 topi: 20 × 550 cm² = 11.000 cm² (1,1 m²)',
      ],
      conclusion:
        'Karena topi terbuka di bagian bawah, hanya selimut yang dihitung. Total karton yang dibutuhkan adalah 11.000 cm².',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Garis pelukis s adalah dua puluh lima sentimeter. Luas selimut satu topi adalah lima ratus lima puluh sentimeter persegi. Untuk dua puluh topi, luas karton yang diperlukan adalah sebelas ribu sentimeter persegi.',
    },
    diagramType: 'party-hat',
  },
  {
    id: 4,
    level: 'C4 (Menganalisis)',
    solidType: 'Kerucut',
    contextTitle: 'Analisis Perbandingan Wadah Es Krim',
    story:
      'Sebuah kedai gelato menawarkan dua pilihan kemasan dengan harga sama Rp 15.000. Wadah A berbentuk kerucut dengan jari-jari r = 7 cm dan tinggi t = 18 cm. Wadah B berbentuk tabung dengan jari-jari sama r = 7 cm, namun tingginya t = 7 cm. Kedua wadah diisi rata penuh dengan es krim. Gunakan π = 22/7.',
    question:
      'Wadah manakah yang memberikan isi es krim lebih banyak kepada pembeli dan berapakah selisih volumenya?',
    spokenQuestion:
      'Wadah manakah yang memberikan isi es krim lebih banyak kepada pembeli dan berapakah selisih volumenya?',
    options: [
      { key: 'A', text: 'Wadah B (Tabung) lebih banyak 154 cm³ dibanding wadah A', spoken: 'Opsi A. Wadah B tabung lebih banyak seratus lima puluh empat sentimeter kubik.' },
      { key: 'B', text: 'Wadah A (Kerucut) lebih banyak 154 cm³ dibanding wadah B', spoken: 'Opsi A. Wadah A kerucut lebih banyak seratus lima puluh empat sentimeter kubik.' },
      { key: 'C', text: 'Kedua wadah memberikan volume es krim yang persis sama', spoken: 'Opsi C. Kedua wadah memberikan volume es krim yang persis sama.' },
      { key: 'D', text: 'Wadah B (Tabung) lebih banyak 308 cm³ dibanding wadah A', spoken: 'Opsi D. Wadah B tabung lebih banyak tiga ratus delapan sentimeter kubik.' },
      { key: 'E', text: 'Wadah A (Kerucut) lebih banyak 231 cm³ dibanding wadah B', spoken: 'Opsi E. Wadah A kerucut lebih banyak dua ratus tiga puluh satu sentimeter kubik.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Perbandingan Volume Kerucut vs Volume Tabung',
      known: [
        'Wadah A (Kerucut): r = 7 cm, t = 18 cm',
        'Wadah B (Tabung): r = 7 cm, t = 7 cm',
        'π = 22/7',
      ],
      steps: [
        'Volume Wadah A (Kerucut): V_A = (1/3) × π × r² × t = (1/3) × (22/7) × 7² × 18 = (1/3) × 154 × 18 = 154 × 6 = 924 cm³',
        'Volume Wadah B (Tabung): V_B = π × r² × t = (22/7) × 7² × 7 = 154 × 7 = 1.078 cm³',
        'Selisih volume: V_B - V_A = 1.078 - 924 = 154 cm³',
      ],
      conclusion:
        'Wadah B (Tabung) menampung volume es krim 1.078 cm³, sedangkan wadah A hanya 924 cm³. Wadah B lebih menguntungkan pembeli dengan selisih 154 cm³.',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Volume kerucut adalah sembilan ratus dua puluh empat sentimeter kubik, sedangkan volume tabung adalah seribu tujuh puluh delapan sentimeter kubik. Selisihnya adalah seratus lima puluh empat sentimeter kubik lebih banyak untuk wadah B.',
    },
    diagramType: 'ice-cream',
  },
  {
    id: 5,
    level: 'C4 (Menganalisis)',
    solidType: 'Bola',
    contextTitle: 'Perhitungan Biaya Pengecatan Kubah Masjid Setengah Bola',
    story:
      'Kubah utama sebuah masjid raya dirancang berbentuk setengah bola dengan diameter d = 14 meter (jari-jari r = 7 meter). Seluruh permukaan lengkung luar kubah tersebut akan dicat dengan cat pelapis anti bocor. Berdasarkan spesifikasi teknis, 1 kaleng cat khusus mampu menutup area seluas 11 m². Harga per kaleng cat adalah Rp 120.000. Gunakan π = 22/7.',
    question:
      'Berapakah total biaya minimal yang harus disiapkan panitia untuk membeli cat kubah tersebut?',
    spokenQuestion:
      'Berapakah total biaya minimal yang harus disiapkan panitia untuk membeli cat kubah tersebut?',
    options: [
      { key: 'A', text: 'Rp 3.360.000 (membutuhkan 28 kaleng cat)', spoken: 'Opsi A. tiga juta tiga ratus enam puluh ribu rupiah.' },
      { key: 'B', text: 'Rp 6.720.000 (membutuhkan 56 kaleng cat)', spoken: 'Opsi B. enam juta tujuh ratus dua puluh ribu rupiah.' },
      { key: 'C', text: 'Rp 1.680.000 (membutuhkan 14 kaleng cat)', spoken: 'Opsi C. satu juta enam ratus delapan puluh ribu rupiah.' },
      { key: 'D', text: 'Rp 4.200.000 (membutuhkan 35 kaleng cat)', spoken: 'Opsi D. empat juta dua ratus ribu rupiah.' },
      { key: 'E', text: 'Rp 5.040.000 (membutuhkan 42 kaleng cat)', spoken: 'Opsi E. lima juta empat puluh ribu rupiah.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Luas Permukaan Setengah Bola Terbuka (Kubah Luar)',
      known: [
        'Diameter d = 14 m → Jari-jari r = 7 m',
        'Kubah luar masjid = setengah bola tanpa lantai bawah: L = (1/2) × 4πr² = 2πr²',
        'Daya sebar cat: 1 kaleng untuk 11 m²',
        'Harga cat = Rp 120.000 per kaleng',
      ],
      steps: [
        'Luas bidang kubah: L = 2 × π × r² = 2 × (22/7) × 7² = 2 × 22 × 7 = 308 m²',
        'Jumlah kaleng cat yang dibutuhkan: 308 m² ÷ 11 m²/kaleng = 28 kaleng pas',
        'Total biaya pembelian cat: 28 kaleng × Rp 120.000 = Rp 3.360.000',
      ],
      conclusion:
        'Luas bidang yang dicat adalah 308 m², membutuhkan 28 kaleng dengan total biaya Rp 3.360.000.',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Luas setengah bola luar adalah tiga ratus delapan meter persegi. Dibutuhkan dua puluh delapan kaleng cat dengan total biaya tiga juta tiga ratus enam puluh ribu rupiah.',
    },
    diagramType: 'dome',
  },
  {
    id: 6,
    level: 'C5 (Mengevaluasi)',
    solidType: 'Bola',
    contextTitle: 'Evaluasi Rasio Perubahan Skala Bola',
    story:
      'Dua buah bola pejal dari logam kuningan memiliki perbandingan jari-jari r₁ : r₂ = 2 : 3. Bola pertama yang berukuran lebih kecil memiliki volume tepat 400 cm³.',
    question:
      'Berdasarkan hubungan matematis dimensi bangun ruang tiga dimensi, berapakah volume bola kedua yang berukuran lebih besar?',
    spokenQuestion:
      'Berdasarkan hubungan matematis dimensi bangun ruang tiga dimensi, berapakah volume bola kedua yang berukuran lebih besar?',
    options: [
      { key: 'A', text: '1.350 cm³', spoken: 'Opsi A. seribu tiga ratus lima puluh sentimeter kubik.' },
      { key: 'B', text: '600 cm³', spoken: 'Opsi B. enam ratus sentimeter kubik.' },
      { key: 'C', text: '900 cm³', spoken: 'Opsi C. sembilan ratus sentimeter kubik.' },
      { key: 'D', text: '1.800 cm³', spoken: 'Opsi D. seribu delapan ratus sentimeter kubik.' },
      { key: 'E', text: '2.700 cm³', spoken: 'Opsi E. dua ribu tujuh ratus sentimeter kubik.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Rasio Perbandingan Volume Dua Bola (r³)',
      known: [
        'Perbandingan jari-jari: r₁ : r₂ = 2 : 3',
        'Volume bola pertama: V₁ = 400 cm³',
        'Rumus volume bola: V = (4/3) × π × r³',
      ],
      steps: [
        'Perbandingan volume dua bola: V₁ / V₂ = (r₁)³ / (r₂)³ = (2/3)³ = 8 / 27',
        'Substitusikan V₁ = 400 cm³: 400 / V₂ = 8 / 27',
        'V₂ = (27 × 400) / 8 = 27 × 50 = 1.350 cm³',
      ],
      conclusion:
        'Volume bertumbuh sebanding dengan pangkat tiga skala jari-jarinya (8 : 27). Maka volume bola kedua adalah 1.350 cm³.',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Perbandingan volume adalah perbandingan jari-jari dipangkatkan tiga, yaitu delapan berbanding dua puluh tujuh. Maka volume bola kedua adalah seribu tiga ratus lima puluh sentimeter kubik.',
    },
    diagramType: 'spheres-compare',
  },
  {
    id: 7,
    level: 'C4 (Menganalisis)',
    solidType: 'Gabungan',
    contextTitle: 'Analisis Pengisian Drum Menggunakan Corong Kerucut',
    story:
      'Seorang teknisi laboratorium ingin mengisi penuh sebuah drum tabung menggunakan gayung berbentuk kerucut. Drum tabung berdiameter d_tabung = 28 cm (jari-jari r_tabung = 14 cm) dan tinggi t_tabung = 60 cm. Gayung kerucut berdiameter d_kerucut = 14 cm (jari-jari r_kerucut = 7 cm) dan tinggi t_kerucut = 15 cm.',
    question:
      'Berapa kali gayung kerucut harus diisi air penuh dan dituangkan ke dalam drum tabung agar drum tersebut terisi tepat penuh?',
    spokenQuestion:
      'Berapa kali gayung kerucut harus diisi air penuh dan dituangkan ke dalam drum tabung agar drum tersebut terisi tepat penuh?',
    options: [
      { key: 'A', text: '48 kali penuangan', spoken: 'Opsi A. empat puluh delapan kali penuangan.' },
      { key: 'B', text: '16 kali penuangan', spoken: 'Opsi B. enam belas kali penuangan.' },
      { key: 'C', text: '24 kali penuangan', spoken: 'Opsi C. dua puluh empat kali penuangan.' },
      { key: 'D', text: '32 kali penuangan', spoken: 'Opsi D. tiga puluh dua kali penuangan.' },
      { key: 'E', text: '64 kali penuangan', spoken: 'Opsi E. enam puluh empat kali penuangan.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Rasio Perbandingan Kapasitas Isi (Volume Tabung ÷ Volume Kerucut)',
      known: [
        'Tabung: r_T = 14 cm, t_T = 60 cm',
        'Kerucut: r_K = 7 cm, t_K = 15 cm',
        'Frekuensi penuangan n = V_Tabung ÷ V_Kerucut',
      ],
      steps: [
        'Volume Tabung: V_T = π × (r_T)² × t_T = π × 14² × 60 = π × 196 × 60 = 11.760π cm³',
        'Volume Kerucut: V_K = (1/3) × π × (r_K)² × t_K = (1/3) × π × 7² × 15 = π × 49 × 5 = 245π cm³',
        'Frekuensi tuangan: n = (11.760π) / (245π) = 48 kali',
        'Cara Cepat Analisis: n = [π × r_T² × t_T] / [(1/3) × π × r_K² × t_K] = 3 × (r_T / r_K)² × (t_T / t_K) = 3 × (14/7)² × (60/15) = 3 × 2² × 4 = 3 × 4 × 4 = 48 kali!',
      ],
      conclusion:
        'Gayung kerucut harus dituangkan sebanyak 48 kali untuk memenuhi tabung secara sempurna.',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Volume tabung dibagi volume kerucut menghasilkan tepat empat puluh delapan kali penuangan.',
    },
    diagramType: 'funnel-drum',
  },
  {
    id: 8,
    level: 'C5 (Mengevaluasi)',
    solidType: 'Tabung',
    contextTitle: 'Evaluasi Kesalahan Hitung Luas Permukaan Kaleng',
    story:
      'Pada sebuah sesi penilaian matematika, Doni diminta menghitung luas permukaan seng untuk membuat satu kaleng biskuit tertutup berdiameter 20 cm (r = 10 cm) dan tinggi 15 cm dengan π = 3,14.\nBerikut langkah pengerjaan Doni:\n• Langkah 1: r = 10 cm, t = 15 cm.\n• Langkah 2: Luas selimut = 2 × 3,14 × 10 × 15 = 942 cm².\n• Langkah 3: Luas alas = 3,14 × 10² = 314 cm².\n• Langkah 4: Luas permukaan total = 942 + 314 = 1.256 cm².',
    question:
      'Berdasarkan kaidah matematika geometri ruang, evaluasilah langkah pengerjaan Doni di atas!',
    spokenQuestion:
      'Berdasarkan kaidah matematika geometri ruang, evaluasilah langkah pengerjaan Doni di atas!',
    options: [
      { key: 'A', text: 'Doni salah karena kaleng tertutup memiliki 2 lingkaran (alas dan tutup); hasil seharusnya 1.570 cm²', spoken: 'Opsi A. Doni salah karena kaleng tertutup memiliki dua lingkaran; hasil seharusnya seribu lima ratus tujuh puluh sentimeter persegi.' },
      { key: 'B', text: 'Pengerjaan Doni sudah benar 100% dan hasilnya 1.256 cm²', spoken: 'Opsi B. Pengerjaan Doni sudah benar seratus persen dan hasilnya seribu dua ratus lima puluh enam sentimeter persegi.' },
      { key: 'C', text: 'Doni salah dalam menghitung luas selimut yang seharusnya π × r × t', spoken: 'Opsi C. Doni salah dalam menghitung luas selimut.' },
      { key: 'D', text: 'Doni salah karena jari-jari kaleng seharusnya 20 cm bukan 10 cm', spoken: 'Opsi D. Doni salah karena jari-jari kaleng seharusnya dua puluh sentimeter.' },
      { key: 'E', text: 'Doni salah karena luas alas seharusnya dikalikan dengan tinggi tabung', spoken: 'Opsi E. Doni salah karena luas alas seharusnya dikalikan tinggi.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Identifikasi Unsur Lengkap Tabung Tertutup (2 Buah Lingkaran)',
      known: [
        'Kaleng tertutup memiliki: 1 alas lingkaran, 1 tutup lingkaran, dan 1 selimut tabung.',
        'Doni hanya menjumlahkan 1 luas alas (314 cm²) dengan selimut (942 cm²).',
      ],
      steps: [
        'Doni melupakan luas tutup tabung sebesar: Luas Tutup = π × r² = 3,14 × 10² = 314 cm²',
        'Luas permukaan tabung utuh yang benar: Lp = Luas Selimut + 2 × (Luas Alas)',
        'Lp = 942 + 2 × (314) = 942 + 628 = 1.570 cm²',
      ],
      conclusion:
        'Doni hanya menghitung tabung tanpa tutup. Untuk kaleng tertutup utuh, luas permukaannya adalah 1.570 cm².',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Doni lupa memperhitungkan luas tutup kaleng. Luas permukaan tabung tertutup harus mencakup dua lingkaran, sehingga hasil yang benar adalah seribu lima ratus tujuh puluh sentimeter persegi.',
    },
    diagramType: 'error-analysis',
  },
  {
    id: 9,
    level: 'C6 (Merancang Solusi)',
    solidType: 'Tabung',
    contextTitle: 'Perancangan Desain Kemasan Kaleng Paling Hemat Bahan',
    story:
      'Sebuah pabrik minuman berkarbonasi ingin mendesain kaleng aluminium berbentuk tabung tertutup dengan kapasitas volume tetap 1.540 cm³ (gunakan π = 22/7).\nTim teknik membandingkan dua opsi rancangan:\n• Desain 1 (Gemuk): r = 7 cm, t = 10 cm.\n• Desain 2 (Ramping): r = 3,5 cm, t = 40 cm.\nKeduanya sama-sama berkapasitas 1.540 cm³.',
    question:
      'Jika tujuan perusahaan adalah meminimalkan biaya bahan lembaran aluminium (luas permukaan kaleng terkecil), desain manakah yang lebih efisien dan berapakah penghematan luas bahannya?',
    spokenQuestion:
      'Desain manakah yang lebih efisien dan berapakah penghematan luas bahannya?',
    options: [
      { key: 'A', text: 'Desain 1 lebih hemat bahan sebesar 209 cm² per kaleng', spoken: 'Opsi A. Desain satu lebih hemat bahan sebesar dua ratus sembilan sentimeter persegi per kaleng.' },
      { key: 'B', text: 'Desain 2 lebih hemat bahan sebesar 209 cm² per kaleng', spoken: 'Opsi B. Desain dua lebih hemat bahan sebesar dua ratus sembilan sentimeter persegi per kaleng.' },
      { key: 'C', text: 'Kedua desain membutuhkan luas bahan yang sama karena volumenya sama', spoken: 'Opsi C. Kedua desain membutuhkan luas bahan yang sama karena volumenya sama.' },
      { key: 'D', text: 'Desain 1 lebih hemat bahan sebesar 308 cm² per kaleng', spoken: 'Opsi D. Desain satu lebih hemat bahan sebesar tiga ratus delapan sentimeter persegi per kaleng.' },
      { key: 'E', text: 'Desain 2 lebih hemat bahan sebesar 154 cm² per kaleng', spoken: 'Opsi E. Desain dua lebih hemat bahan sebesar seratus lima puluh empat sentimeter persegi per kaleng.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Optimasi Luas Permukaan Tabung Tertutup pada Volume Konstan',
      known: [
        'Desain 1: r = 7 cm, t = 10 cm, V = (22/7) × 49 × 10 = 1.540 cm³',
        'Desain 2: r = 3,5 cm, t = 40 cm, V = (22/7) × 12,25 × 40 = 1.540 cm³',
      ],
      steps: [
        'Hitung Luas Permukaan Desain 1: Lp₁ = 2 × π × r × (r + t) = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm²',
        'Hitung Luas Permukaan Desain 2: Lp₂ = 2 × π × r × (r + t) = 2 × (22/7) × 3,5 × (3,5 + 40) = 22 × 43,5 = 957 cm²',
        'Selisih penghematan bahan: Lp₂ - Lp₁ = 957 - 748 = 209 cm²',
      ],
      conclusion:
        'Desain 1 (748 cm²) jauh lebih hemat bahan seng dibanding Desain 2 (957 cm²), dengan selisih 209 cm² per kaleng.',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Luas permukaan desain satu adalah tujuh ratus empat puluh delapan sentimeter persegi, sedangkan desain dua sembilan ratus lima puluh tujuh sentimeter persegi. Desain satu lebih hemat dua ratus sembilan sentimeter persegi.',
    },
    diagramType: 'beverage-can',
  },
  {
    id: 10,
    level: 'C4 (Menganalisis)',
    solidType: 'Gabungan',
    contextTitle: 'Kapasitas Tangki Kimia Kapsul (Tabung + 2 Setengah Bola)',
    story:
      'Sebuah tangki penampung gas di pabrik pupuk dirancang berbentuk kapsul: bagian badan berupa silinder tabung horizontal dengan panjang t = 100 cm, sedangkan di ujung kiri dan kanannya ditutup oleh belahan setengah bola. Jari-jari penampang tabung dan kedua setengah bola tersebut identik, yaitu r = 21 cm. Gunakan π = 22/7.',
    question:
      'Berapakah kapasitas total volume gas yang dapat disimpan di dalam tangki kapsul tersebut?',
    spokenQuestion:
      'Berapakah kapasitas total volume gas yang dapat disimpan di dalam tangki kapsul tersebut?',
    options: [
      { key: 'A', text: '177.408 cm³ (setara 177,408 Liter)', spoken: 'Opsi A. seratus tujuh puluh tujuh ribu empat ratus delapan sentimeter kubik.' },
      { key: 'B', text: '138.600 cm³ (setara 138,6 Liter)', spoken: 'Opsi B. seratus tiga puluh delapan ribu enam ratus sentimeter kubik.' },
      { key: 'C', text: '157.900 cm³ (setara 157,9 Liter)', spoken: 'Opsi C. seratus lima puluh tujuh ribu sembilan ratus sentimeter kubik.' },
      { key: 'D', text: '216.216 cm³ (setara 216,216 Liter)', spoken: 'Opsi D. dua ratus enam belas ribu dua ratus enam belas sentimeter kubik.' },
      { key: 'E', text: '194.800 cm³ (setara 194,8 Liter)', spoken: 'Opsi E. seratus sembilan puluh empat ribu delapan ratus sentimeter kubik.' },
    ],
    correctAnswer: 'A',
    explanation: {
      concept: 'Volume Gabungan: Tabung + 1 Bola Utuh (2 × Setengah Bola)',
      known: [
        'r = 21 cm (untuk tabung dan kedua hemisfer bola)',
        'Panjang tabung: t = 100 cm',
        'Dua setengah bola di ujung kiri & kanan bergabung menjadi 1 bola utuh berjari-jari r = 21 cm.',
      ],
      steps: [
        'Volume 1 Bola Utuh: V_Bola = (4/3) × π × r³ = (4/3) × (22/7) × 21³ = (4/3) × (22/7) × 9.261 = (4/3) × 29.106 = 4 × 9.702 = 38.808 cm³',
        'Volume Badan Tabung: V_Tabung = π × r² × t = (22/7) × 21² × 100 = (22/7) × 441 × 100 = 1.386 × 100 = 138.600 cm³',
        'Volume Total Kapsul: V_Total = V_Tabung + V_Bola = 138.600 + 38.808 = 177.408 cm³ (177,408 Liter)',
      ],
      conclusion:
        'Volume gabungan tangki kapsul adalah 177.408 cm³ atau 177,408 liter gas.',
      spokenExplanation:
        'Jawaban yang tepat adalah A. Dua ujung setengah bola membentuk satu bola utuh bervolume tiga puluh delapan ribu delapan ratus delapan sentimeter kubik. Ditambah volume badan tabung seratus tiga puluh delapan ribu enam ratus sentimeter kubik, menghasilkan total seratus tujuh puluh tujuh ribu empat ratus delapan sentimeter kubik.',
    },
    diagramType: 'capsule-tank',
  },
];
