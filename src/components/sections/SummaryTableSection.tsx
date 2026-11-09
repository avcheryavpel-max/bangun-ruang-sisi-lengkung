import React from 'react';
import { ParameterPlayground } from '../animations/ParameterPlayground';
import { Volume2, Sparkles, Printer, BookmarkCheck, CheckCircle2 } from 'lucide-react';
import { tts } from '../../services/tts';

export const SummaryTableSection: React.FC = () => {
  const speakTableOverview = () => {
    tts.speak(
      'Bab lima: Tabel Ringkasan Rumus Bangun Ruang Sisi Lengkung. Pertama, tabung memiliki luas alas pi kali r kuadrat, luas selimut dua kali pi kali r kali t, luas permukaan dua kali pi kali r kali dalam kurung r tambah t, dan volume pi kali r kuadrat kali t. Kedua, bola tidak memiliki selimut atau alas terpisah, memiliki luas permukaan empat kali pi kali r kuadrat, dan volume empat per tiga kali pi kali r pangkat tiga. Ketiga, kerucut memiliki luas alas pi kali r kuadrat, luas selimut pi kali r kali s, luas permukaan pi kali r kali dalam kurung r tambah s, dan volume sepertiga kali pi kali r kuadrat kali t.',
      'Bab lima: Tabel Ringkasan Rumus Bangun Ruang Sisi Lengkung. Pertama, tabung memiliki luas alas pi dikali r kuadrat, luas selimut dua dikali pi dikali r dikali t, luas permukaan dua dikali pi dikali r dikali dalam kurung r ditambah t, dan volume pi dikali r kuadrat dikali t. Kedua, bola tidak memiliki selimut atau alas terpisah, memiliki luas permukaan empat dikali pi dikali r kuadrat, dan volume empat per tiga dikali pi dikali r pangkat tiga. Ketiga, kerucut memiliki luas alas pi dikali r kuadrat, luas selimut pi dikali r dikali s, luas permukaan pi dikali r dikali dalam kurung r ditambah s, dan volume sepertiga dikali pi dikali r kuadrat dikali t.'
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Chapter Title Card */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="px-3.5 py-1.5 bg-blue-100 text-blue-800 font-extrabold rounded-xl text-sm">
            BAB 5 • RANGKUMAN BELAJAR
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Tabel Ringkasan Rumus Bangun Ruang Sisi Lengkung
          </h2>
          <p className="text-xl text-slate-600 mt-2">
            Matriks perbandingan komparatif lengkap antara Tabung, Bola, dan Kerucut untuk memudahkan hafalan dan pemahaman konsep.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 no-print">
          <button
            onClick={speakTableOverview}
            className="flex items-center gap-2 px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-2xl border border-blue-200 transition active:scale-95 text-base"
          >
            <Volume2 className="w-5 h-5 text-blue-600" />
            Dengarkan Rangkuman
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-2xl border border-slate-300 transition active:scale-95 text-base"
            title="Cetak Rangkuman untuk Siswa"
          >
            <Printer className="w-5 h-5" />
            Cetak
          </button>
        </div>
      </div>

      {/* Main Comparative Table */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 text-white">
                <th className="py-5 px-6 text-xl font-black font-heading rounded-tl-2xl">
                  Nama Bangun Ruang
                </th>
                <th className="py-5 px-6 text-xl font-black font-heading">
                  Luas Alas (La)
                </th>
                <th className="py-5 px-6 text-xl font-black font-heading">
                  Luas Selimut (Ls)
                </th>
                <th className="py-5 px-6 text-xl font-black font-heading">
                  Luas Permukaan (Lp)
                </th>
                <th className="py-5 px-6 text-xl font-black font-heading rounded-tr-2xl">
                  Volume (V)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-slate-100 text-lg">
              {/* Row 1: Tabung */}
              <tr className="hover:bg-blue-50/40 transition">
                <td className="py-6 px-6 font-extrabold text-blue-900 bg-blue-50/30 align-middle">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-blue-600"></span>
                    <div>
                      <div className="text-2xl font-black font-heading">TABUNG</div>
                      <span className="text-xs text-slate-500 font-semibold">(Silinder)</span>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-blue-700 font-black">π × r²</span>
                  <span className="text-xs block text-slate-500 mt-1">Berbentuk lingkaran</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-pink-700 font-black">2 × π × r × t</span>
                  <span className="text-xs block text-slate-500 mt-1">Persegi panjang bentang</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-indigo-700 font-black">2πr(r + t)</span>
                  <span className="text-xs block text-slate-500 mt-1">2 lingkaran + 1 selimut</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-emerald-700 font-black">π × r² × t</span>
                  <span className="text-xs block text-slate-500 mt-1">Luas alas dikali tinggi</span>
                </td>
              </tr>

              {/* Row 2: Bola */}
              <tr className="hover:bg-pink-50/40 transition">
                <td className="py-6 px-6 font-extrabold text-pink-900 bg-pink-50/30 align-middle">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-pink-600"></span>
                    <div>
                      <div className="text-2xl font-black font-heading">BOLA</div>
                      <span className="text-xs text-slate-500 font-semibold">(Sphere)</span>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-6 align-middle font-math text-slate-500 italic">
                  <span className="text-xl text-slate-400 font-medium">— (Tidak ada)</span>
                  <span className="text-xs block text-pink-600 font-bold mt-1">Lingkaran Besar = πr²</span>
                </td>
                <td className="py-6 px-6 align-middle font-math text-slate-500 italic">
                  <span className="text-xl text-slate-400 font-medium">— (Tidak ada)</span>
                  <span className="text-xs block text-slate-400 mt-1">Satu sisi kulit utuh</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-pink-700 font-black">4 × π × r²</span>
                  <span className="text-xs block text-slate-500 mt-1">4 kali lingkaran besar</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-emerald-700 font-black">⁴⁄₃ × π × r³</span>
                  <span className="text-xs block text-slate-500 mt-1">⅔ dari volume tabung</span>
                </td>
              </tr>

              {/* Row 3: Kerucut */}
              <tr className="hover:bg-amber-50/40 transition">
                <td className="py-6 px-6 font-extrabold text-amber-950 bg-amber-50/30 align-middle">
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 rounded-full bg-amber-600"></span>
                    <div>
                      <div className="text-2xl font-black font-heading">KERUCUT</div>
                      <span className="text-xs text-slate-500 font-semibold">(Cone)</span>
                    </div>
                  </div>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-blue-700 font-black">π × r²</span>
                  <span className="text-xs block text-slate-500 mt-1">1 lingkaran dasar</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-amber-700 font-black">π × r × s</span>
                  <span className="text-xs block text-purple-700 font-bold mt-1">s = √(r² + t²)</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-indigo-700 font-black">πr(r + s)</span>
                  <span className="text-xs block text-slate-500 mt-1">Alas + Juring selimut</span>
                </td>
                <td className="py-6 px-6 align-middle font-math font-bold text-slate-800">
                  <span className="text-2xl text-emerald-700 font-black">⅓ × π × r² × t</span>
                  <span className="text-xs block text-slate-500 mt-1">⅓ dari volume tabung</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mandatory Educational Footnotes & Standards */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">Kaidah Nilai Pi (π)</span>
            <div className="text-xl font-black text-blue-950 mt-1 font-math">
              π = 22/7 atau 3,14
            </div>
            <p className="text-sm text-slate-600 mt-1 leading-snug">
              Gunakan <strong>22/7</strong> jika r kelipatan 7; gunakan <strong>3,14</strong> jika r bukan kelipatan 7.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-pink-50/80 border border-pink-200">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 block">Hubungan Diameter & Jari-jari</span>
            <div className="text-xl font-black text-pink-950 mt-1 font-math">
              d = 2r &nbsp;⟺&nbsp; r = ½d
            </div>
            <p className="text-sm text-slate-600 mt-1 leading-snug">
              Diameter selalu dua kali jari-jari; jari-jari selalu setengah dari diameter.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">Standar Satuan Luas</span>
            <div className="text-xl font-black text-amber-950 mt-1 font-math">
              cm² &nbsp;atau&nbsp; m²
            </div>
            <p className="text-sm text-slate-600 mt-1 leading-snug">
              Selalu menggunakan satuan persegi. Catatan: <strong>1 m² = 10.000 cm²</strong>.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">Standar Satuan Volume</span>
            <div className="text-xl font-black text-emerald-950 mt-1 font-math">
              cm³, m³, Liter
            </div>
            <p className="text-sm text-slate-600 mt-1 leading-snug">
              Menggunakan satuan kubik. Catatan: <strong>1 Liter = 1 dm³ = 1.000 cm³</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Dynamic Parameter Simulator for Interactive Whiteboard Exploration */}
      <ParameterPlayground />
    </div>
  );
};
