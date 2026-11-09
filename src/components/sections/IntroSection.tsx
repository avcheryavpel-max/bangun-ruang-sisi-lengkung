import React from 'react';
import { REAL_LIFE_EXAMPLES, COMPARISON_FLAT_VS_CURVED } from '../../data/curriculumData';
import { Volume2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { tts } from '../../services/tts';

export const IntroSection: React.FC = () => {
  const speakIntro = () => {
    tts.speak(
      'Bab satu: Pengenalan Bangun Ruang Sisi Lengkung. Bangun ruang sisi lengkung adalah bangun ruang tiga dimensi yang dibatasi oleh minimal satu bidang melengkung halus. Contoh utamanya adalah tabung, bola, dan kerucut. Berbeda dengan bangun ruang sisi datar seperti kubus atau balok, bangun sisi lengkung umumnya dapat menggelinding dan tidak memiliki sudut runcing kecuali pada puncak kerucut.',
      'Bab satu: Pengenalan Bangun Ruang Sisi Lengkung. Bangun ruang sisi lengkung adalah bangun ruang tiga dimensi yang dibatasi oleh minimal satu bidang melengkung halus. Contoh utamanya adalah tabung, bola, dan kerucut. Berbeda dengan bangun ruang sisi datar seperti kubus atau balok, bangun sisi lengkung umumnya dapat menggelinding dan tidak memiliki sudut runcing kecuali pada puncak kerucut.'
    );
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Chapter Header */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="px-3.5 py-1.5 bg-blue-100 text-blue-800 font-extrabold rounded-xl text-sm">
            BAB 1 • PENGENALAN
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Pengenalan Bangun Ruang Sisi Lengkung
          </h2>
          <p className="text-xl text-slate-600 mt-2">
            Mengenal hakikat, ciri-ciri khas, dan penerapan nyata dalam kehidupan sehari-hari.
          </p>
        </div>

        <button
          onClick={speakIntro}
          className="flex items-center gap-2.5 px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-2xl border border-blue-200 transition active:scale-95 text-base shrink-0"
        >
          <Volume2 className="w-5 h-5 text-blue-600" />
          Dengarkan Penjelasan Bab 1
        </button>
      </div>

      {/* Definition & Characteristics Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500"></span>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
              Pengertian Bangun Ruang Sisi Lengkung
            </h3>
          </div>
          <p className="text-xl text-slate-700 leading-relaxed">
            <strong>Bangun Ruang Sisi Lengkung (BRSL)</strong> adalah kelompok bangun ruang berdimensi tiga yang diselimuti atau dibatasi oleh sekurang-kurangnya satu buah <strong>bidang permukaan melengkung</strong> (kurva halus 3 dimensi), bukan melulu bidang datar segibanyak.
          </p>
          <p className="text-xl text-slate-700 leading-relaxed">
            Tiga bangun ruang sisi lengkung utama yang dipelajari dalam kurikulum matematika adalah:
          </p>
          <ul className="space-y-2 text-lg font-bold text-blue-900">
            <li className="flex items-center gap-2 bg-blue-50/70 p-3 rounded-xl border border-blue-100">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span>1. Tabung (Silinder) — Memiliki 2 lingkaran sejajar dan 1 selimut lengkung tegak.</span>
            </li>
            <li className="flex items-center gap-2 bg-pink-50/70 p-3 rounded-xl border border-pink-100">
              <CheckCircle2 className="w-5 h-5 text-pink-600 shrink-0" />
              <span>2. Bola (Sphere) — Bulat penuh berpusat tunggal tanpa rusuk maupun sudut.</span>
            </li>
            <li className="flex items-center gap-2 bg-amber-50/70 p-3 rounded-xl border border-amber-100">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
              <span>3. Kerucut (Cone) — Beralas lingkaran yang meruncing pada satu titik puncak.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-blue-100 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-pink-500"></span>
            <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
              Ciri-Ciri Khas Bangun Sisi Lengkung
            </h3>
          </div>
          <div className="space-y-3 text-lg text-slate-700 leading-relaxed">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block text-xl mb-1">1. Keberadaan Bidang Lengkung</strong>
              Selalu memiliki selimut melengkung yang menghubungkan bagian alas dan tutup, atau kulit bulat yang menyelubungi seluruh ruang.
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block text-xl mb-1">2. Tidak Memiliki Sudut Lancip Segibanyak</strong>
              Berbeda dengan kubus atau limas yang memiliki titik-titik sudut tajam persekutuan rusuk datar, bangun sisi lengkung tidak memiliki sudut tajam (kecuali satu titik puncak pada kerucut).
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <strong className="text-slate-900 block text-xl mb-1">3. Mampu Menggelinding Halus</strong>
              Permukaannya yang aerodinamis dan melengkung memungkinkan benda sisi lengkung berputar atau menggelinding dengan gesekan minim.
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table: Sisi Datar vs Sisi Lengkung */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-md">
        <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-6 font-heading flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-blue-600" />
          Perbandingan: Bangun Ruang Sisi Datar vs Sisi Lengkung
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200 bg-slate-50">
                <th className="py-4 px-6 text-lg font-extrabold text-slate-700">Kategori Pembanding</th>
                <th className="py-4 px-6 text-lg font-extrabold text-blue-800 bg-blue-50/50">Bangun Ruang Sisi Datar</th>
                <th className="py-4 px-6 text-lg font-extrabold text-pink-800 bg-pink-50/50">Bangun Ruang Sisi Lengkung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-lg text-slate-700">
              {COMPARISON_FLAT_VS_CURVED.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition">
                  <td className="py-4 px-6 font-bold text-slate-900 align-top">{item.kategori}</td>
                  <td className="py-4 px-6 align-top bg-blue-50/20">{item.sisiDatar}</td>
                  <td className="py-4 px-6 align-top bg-pink-50/20 font-medium text-slate-800">{item.sisiLengkung}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Real Life Objects Gallery with Realistic Diagrams */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-md">
        <div className="mb-8">
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold rounded-lg text-sm">
            Konteks Nyata Kehidupan
          </span>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
            Contoh Benda Nyata di Kehidupan Sehari-hari
          </h3>
          <p className="text-xl text-slate-600 mt-1">
            Benda-benda yang selalu kita jumpai dan gunakan setiap hari memanfaatkan sifat aerodinamis dan kekuatan struktural bangun sisi lengkung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Tabung / Kaleng Minuman */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-blue-50/60 via-white to-blue-50/30 border border-blue-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-full h-48 bg-white rounded-2xl border border-blue-100 flex items-center justify-center p-3 mb-4 shadow-inner">
                {/* SVG Real-life Can */}
                <svg viewBox="0 0 200 160" className="h-full w-auto">
                  <rect x="60" y="30" width="80" height="100" fill="#3b82f6" rx="6" />
                  <ellipse cx="100" cy="30" rx="40" ry="14" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
                  <ellipse cx="100" cy="130" rx="40" ry="14" fill="#1d4ed8" />
                  {/* Soda label */}
                  <rect x="60" y="60" width="80" height="40" fill="#ef4444" />
                  <text x="100" y="85" fill="#ffffff" fontSize="14" fontWeight="black" textAnchor="middle">SODA</text>
                  {/* Highlight */}
                  <line x1="72" y1="35" x2="72" y2="125" stroke="#ffffff" strokeWidth="3" opacity="0.6" strokeLinecap="round" />
                </svg>
              </div>
              <h4 className="text-2xl font-extrabold text-blue-900 font-heading">1. Tabung (Kaleng Minuman & Drum)</h4>
              <p className="text-base text-slate-600 mt-2">
                Kaleng susu kental manis, drum minyak, baterai jam, dan botol minum silindris.
              </p>
            </div>
            <div className="mt-4 p-3 bg-blue-100/70 rounded-xl text-sm font-bold text-blue-900">
              Alasan Desain: Menahan tekanan isi merata tanpa sudut yang mudah robek.
            </div>
          </div>

          {/* Card 2: Bola / Bola Sepak */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-pink-50/60 via-white to-pink-50/30 border border-pink-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-full h-48 bg-white rounded-2xl border border-pink-100 flex items-center justify-center p-3 mb-4 shadow-inner">
                {/* SVG Soccer Ball */}
                <svg viewBox="0 0 200 160" className="h-full w-auto">
                  <circle cx="100" cy="80" r="55" fill="#f8fafc" stroke="#334155" strokeWidth="3" />
                  {/* Pentagons */}
                  <polygon points="100,65 115,75 110,92 90,92 85,75" fill="#1e293b" />
                  <polygon points="100,30 112,38 108,50 92,50 88,38" fill="#1e293b" />
                  <line x1="100" y1="65" x2="100" y2="50" stroke="#334155" strokeWidth="2.5" />
                  <line x1="85" y1="75" x2="65" y2="75" stroke="#334155" strokeWidth="2" />
                  <line x1="115" y1="75" x2="135" y2="75" stroke="#334155" strokeWidth="2" />
                  {/* Highlight */}
                  <ellipse cx="80" cy="55" rx="14" ry="7" fill="#ffffff" opacity="0.6" transform="rotate(-30 80 55)" />
                </svg>
              </div>
              <h4 className="text-2xl font-extrabold text-pink-900 font-heading">2. Bola (Bola Sepak & Globe)</h4>
              <p className="text-base text-slate-600 mt-2">
                Bola sepak, bola basket, kelereng kaca, globe bumi, dan kubah pelindung teleskop.
              </p>
            </div>
            <div className="mt-4 p-3 bg-pink-100/70 rounded-xl text-sm font-bold text-pink-900">
              Alasan Desain: Memiliki aerodinamika maksimal sehingga memantul dan melayang seimbang ke segala arah.
            </div>
          </div>

          {/* Card 3: Kerucut / Topi Ulang Tahun & Cone Es Krim */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-amber-50/60 via-white to-amber-50/30 border border-amber-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-full h-48 bg-white rounded-2xl border border-amber-100 flex items-center justify-center p-3 mb-4 shadow-inner">
                {/* SVG Party Hat & Ice Cream */}
                <svg viewBox="0 0 200 160" className="h-full w-auto">
                  {/* Party Hat */}
                  <path d="M 80 130 L 100 25 L 120 130 Z" fill="#ec4899" stroke="#be185d" strokeWidth="2" />
                  <ellipse cx="100" cy="130" rx="20" ry="7" fill="#fda4af" stroke="#be185d" strokeWidth="1.5" />
                  <circle cx="100" cy="23" r="7" fill="#facc15" />
                  {/* Stripes */}
                  <line x1="86" y1="100" x2="114" y2="100" stroke="#facc15" strokeWidth="4" />
                  <line x1="91" y1="70" x2="109" y2="70" stroke="#38bdf8" strokeWidth="3" />
                  {/* Confetti dots */}
                  <circle cx="50" cy="50" r="4" fill="#3b82f6" />
                  <circle cx="150" cy="65" r="5" fill="#10b981" />
                  <circle cx="60" cy="110" r="3" fill="#f43f5e" />
                </svg>
              </div>
              <h4 className="text-2xl font-extrabold text-amber-900 font-heading">3. Kerucut (Topi Pesta & Cone)</h4>
              <p className="text-base text-slate-600 mt-2">
                Topi ulang tahun anak, cone es krim renyah, corong bensin, dan traffic cone penanda jalan.
              </p>
            </div>
            <div className="mt-4 p-3 bg-amber-100/70 rounded-xl text-sm font-bold text-amber-900">
              Alasan Desain: Memusatkan aliran cairan (corong) atau pas di kepala manusia tanpa penutup bawah.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
