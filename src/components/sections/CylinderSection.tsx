import React, { useState } from 'react';
import { CYLINDER_ELEMENTS, CYLINDER_FORMULAS } from '../../data/curriculumData';
import { ThreeCanvas } from '../ThreeCanvas';
import { CylinderUnrollVisualizer } from '../animations/CylinderUnrollVisualizer';
import { Volume2, Sparkles, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { tts } from '../../services/tts';

export const CylinderSection: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const speakCylinderOverview = () => {
    tts.speak(
      'Bab dua: Materi Tabung atau Silinder. Tabung adalah bangun ruang tiga dimensi yang dibatasi oleh dua lingkaran sejajar dan kongruen yang disebut alas dan tutup, serta dihubungkan oleh sebuah bidang lengkung yang disebut selimut tabung.',
      'Bab dua: Materi Tabung atau Silinder. Tabung adalah bangun ruang tiga dimensi yang dibatasi oleh dua lingkaran sejajar dan kongruen yang disebut alas dan tutup, serta dihubungkan oleh sebuah bidang lengkung yang disebut selimut tabung.'
    );
  };

  const speakFormula = (f: { formula: string; spokenFormula: string; description: string }) => {
    tts.speak(`${f.spokenFormula}. ${f.description}`);
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Chapter Title Card */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="px-3.5 py-1.5 bg-blue-100 text-blue-800 font-extrabold rounded-xl text-sm">
            BAB 2 • MATERI LENGKAP
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Bangun Ruang Tabung (Silinder)
          </h2>
          <p className="text-xl text-slate-600 mt-2">
            Mempelajari struktur geometri, unsur-unsur pembentuk, rumus luas selimut, luas permukaan, dan volume.
          </p>
        </div>

        <button
          onClick={speakCylinderOverview}
          className="flex items-center gap-2.5 px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-2xl border border-blue-200 transition active:scale-95 text-base shrink-0"
        >
          <Volume2 className="w-5 h-5 text-blue-600" />
          Dengarkan Bab Tabung
        </button>
      </div>

      {/* Definition & 3D Interactive Model with Pointers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 3D Model with Pointers */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-blue-100 shadow-md">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading flex items-center justify-between">
              <span>Model Tabung 3D Realistis</span>
              <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-bold">Interaktif</span>
            </h3>
            <ThreeCanvas mode="cylinder" height="h-80 md:h-96" />

            {/* Pointers Legend */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-blue-800">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span>Alas & Tutup Tabung</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg text-pink-800">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span>Selimut Tabung</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg text-red-800">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span>Jari-jari (r) & Diameter (d)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-amber-50 rounded-lg text-amber-800">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span>Tinggi Tabung (t)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Definition & Unsur-unsur Tabung */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-blue-100 shadow-sm space-y-4">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
              1. Pengertian Tabung
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Tabung (Silinder)</strong> adalah bangun ruang sisi lengkung beraturan yang dibentuk oleh dua buah lingkaran identik (kongruen) sejajar yang bertindak sebagai <strong>alas</strong> dan <strong>tutup</strong>, serta satu bidang lengkung persegi panjang yang diputar mengelilinginya yang disebut <strong>selimut tabung</strong>.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-blue-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
                2. Unsur-unsur Tabung
              </h3>
              <span className="text-sm font-bold text-slate-500">Klik unsur untuk melihat detail</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CYLINDER_ELEMENTS.map((elem) => {
                const isSelected = selectedElement === elem.name;
                return (
                  <div
                    key={elem.name}
                    onClick={() => {
                      setSelectedElement(elem.name);
                      tts.speak(`${elem.name}. ${elem.description}`);
                    }}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all text-left ${
                      isSelected
                        ? 'bg-blue-50 border-blue-400 shadow-md ring-2 ring-blue-300'
                        : 'bg-slate-50/80 hover:bg-blue-50/40 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-lg text-slate-900 font-heading flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: elem.color }}></span>
                        {elem.name}
                      </span>
                      {elem.symbol && (
                        <span className="px-2 py-0.5 bg-white rounded-md text-xs font-mono font-bold text-blue-700 border border-slate-200">
                          {elem.symbol}
                        </span>
                      )}
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed mt-1">{elem.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Animation: Selimut Tabung Dibuka Menjadi Persegi Panjang */}
      <CylinderUnrollVisualizer />

      {/* Formulas Section with Large Font Sizes (30-38px) */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-md space-y-8">
        <div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm">
            Kumpulan Rumus Resmi
          </span>
          <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 font-heading">
            Rumus-Rumus Matematika Tabung
          </h3>
          <p className="text-xl text-slate-600 mt-1">
            Penjelasan arti setiap rumus, simbol variabel, satuan standar, dan penurunan logisnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CYLINDER_FORMULAS.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-br from-blue-50/40 via-white to-pink-50/20 border border-blue-200/80 shadow-sm hover:shadow-md transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-extrabold text-blue-900 font-heading">{f.name}</span>
                <button
                  onClick={() => speakFormula(f)}
                  className="p-2 bg-blue-100/70 hover:bg-blue-200 text-blue-700 rounded-xl transition"
                  title="Dengarkan Cara Membaca Rumus"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {/* Big Math Formula (30-38px) */}
              <div className="p-4 bg-white rounded-2xl border border-blue-200 text-center shadow-inner">
                <div className="text-3xl sm:text-4xl font-black text-blue-700 font-math tracking-wide">
                  {f.formula}
                </div>
              </div>

              <p className="text-lg text-slate-700 leading-relaxed">{f.description}</p>

              {f.breakdown && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm space-y-1 font-medium text-slate-700">
                  <span className="font-bold text-slate-900 block">Langkah Penurunan:</span>
                  {f.breakdown.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-500 shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="text-sm font-semibold text-slate-500">
                Satuan: <span className="font-mono text-blue-800 font-bold">{f.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Volume Geometric Meaning */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-blue-950 font-heading flex items-center gap-2">
              <Layers className="w-6 h-6 text-blue-600" />
              Konsep Volume: Tumpukan Cakram Lingkaran Setinggi t
            </h4>
            <p className="text-lg text-slate-700 leading-relaxed">
              Bayangkan kamu memiliki keping koin lingkaran seluas <span className="font-mono font-bold text-blue-800">πr²</span>. Jika koin tersebut kamu tumpuk terus ke atas setinggi <span className="font-mono font-bold text-amber-800">t</span>, seluruh keping koin itu akan mengisi penuh ruang tabung.
              Inilah alasan mengapa <strong>Volume Tabung = Luas Alas × Tinggi = π × r² × t</strong>.
            </p>
          </div>
          <div className="shrink-0 text-center bg-white p-4 rounded-2xl border border-blue-200 shadow-sm">
            <span className="text-xs font-bold text-slate-500 block uppercase">Formula Volume</span>
            <span className="text-3xl font-black text-blue-700 font-math">V = π × r² × t</span>
          </div>
        </div>
      </div>
    </div>
  );
};
