import React, { useState } from 'react';
import { CONE_ELEMENTS, CONE_FORMULAS } from '../../data/curriculumData';
import { ThreeCanvas } from '../ThreeCanvas';
import { ConeUnrollVisualizer } from '../animations/ConeUnrollVisualizer';
import { WaterPouringVisualizer } from '../animations/WaterPouringVisualizer';
import { Volume2, Sparkles, ChevronRight, Triangle } from 'lucide-react';
import { tts } from '../../services/tts';

export const ConeSection: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  const speakConeOverview = () => {
    tts.speak(
      'Bab empat: Materi Kerucut. Kerucut adalah bangun ruang sisi lengkung beraturan yang dibatasi oleh sebuah alas datar berbentuk lingkaran dan diselimuti oleh bidang lengkung juring lingkaran yang mengerucut pada satu titik puncak runcing.',
      'Bab empat: Materi Kerucut. Kerucut adalah bangun ruang sisi lengkung beraturan yang dibatasi oleh sebuah alas datar berbentuk lingkaran dan diselimuti oleh bidang lengkung juring lingkaran yang mengerucut pada satu titik puncak runcing.'
    );
  };

  const speakFormula = (f: { formula: string; spokenFormula: string; description: string }) => {
    tts.speak(`${f.spokenFormula}. ${f.description}`);
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Chapter Title Card */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-amber-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="px-3.5 py-1.5 bg-amber-100 text-amber-800 font-extrabold rounded-xl text-sm">
            BAB 4 • MATERI LENGKAP
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Bangun Ruang Kerucut (Cone)
          </h2>
          <p className="text-xl text-slate-600 mt-2">
            Mempelajari garis pelukis Pythagoras, selimut juring lingkaran, dan pembuktian volume sepertiga tabung.
          </p>
        </div>

        <button
          onClick={speakConeOverview}
          className="flex items-center gap-2.5 px-5 py-3 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold rounded-2xl border border-amber-200 transition active:scale-95 text-base shrink-0"
        >
          <Volume2 className="w-5 h-5 text-amber-600" />
          Dengarkan Bab Kerucut
        </button>
      </div>

      {/* Definition & 3D Interactive Model with Pointers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 3D Model with Pointers */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-amber-100 shadow-md">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-3 font-heading flex items-center justify-between">
              <span>Model Kerucut 3D Realistis</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full font-bold">Interaktif</span>
            </h3>
            <ThreeCanvas mode="cone" height="h-80 md:h-96" />

            {/* Pointers Legend */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold">
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-blue-800">
                <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                <span>Alas Lingkaran (r)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-red-50 rounded-lg text-red-800">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span>Titik Puncak & Tinggi (t)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg text-purple-800">
                <span className="w-3 h-3 rounded-full bg-purple-600"></span>
                <span>Garis Pelukis (s) Miring</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-amber-50 rounded-lg text-amber-800">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span>Selimut Kerucut</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Definition & Elements */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-amber-100 shadow-sm space-y-4">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
              1. Pengertian Kerucut
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Kerucut</strong> adalah bangun ruang sisi lengkung yang dapat dipandang sebagai <strong>limas beraturan</strong> yang alasnya berbentuk lingkaran tak terhingga rusuk.
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Kerucut juga dapat dibentuk melalui perputaran 360 derajat dari <strong>segitiga siku-siku</strong> dengan salah satu sisi siku-sikunya sebagai sumbu putar poros tegak.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-amber-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
                2. Unsur-unsur Kerucut
              </h3>
              <span className="text-sm font-bold text-slate-500">Klik unsur untuk audio</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONE_ELEMENTS.map((elem) => {
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
                        ? 'bg-amber-50 border-amber-400 shadow-md ring-2 ring-amber-300'
                        : 'bg-slate-50/80 hover:bg-amber-50/40 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-lg text-slate-900 font-heading flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: elem.color }}></span>
                        {elem.name}
                      </span>
                      {elem.symbol && (
                        <span className="px-2 py-0.5 bg-white rounded-md text-xs font-mono font-bold text-amber-800 border border-slate-200">
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

      {/* Mandatory Animation 1: Selimut Dibuka Menjadi Juring Lingkaran */}
      <ConeUnrollVisualizer />

      {/* Mandatory Animation 2: Perbandingan Pengisian Tabung & Kerucut (Air/Pasir 3x Tuang) */}
      <WaterPouringVisualizer />

      {/* Formulas Section with Large Font Sizes (30-38px) */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-amber-100 shadow-md space-y-8">
        <div>
          <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-sm">
            Kumpulan Rumus Resmi
          </span>
          <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 font-heading">
            Rumus-Rumus Matematika Kerucut
          </h3>
          <p className="text-xl text-slate-600 mt-1">
            Penjelasan arti rumus, hubungan Pythagoras garis pelukis s, dan satuan standar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CONE_FORMULAS.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-br from-amber-50/40 via-white to-pink-50/20 border border-amber-200/80 shadow-sm hover:shadow-md transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-amber-950 font-heading">{f.name}</span>
                  <button
                    onClick={() => speakFormula(f)}
                    className="p-2 bg-amber-100/70 hover:bg-amber-200 text-amber-800 rounded-xl transition"
                    title="Dengarkan Cara Membaca Rumus"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Big Math Formula (30-38px) */}
                <div className="p-4 bg-white rounded-2xl border border-amber-200 text-center shadow-inner">
                  <div className="text-3xl sm:text-4xl font-black text-amber-700 font-math tracking-wide">
                    {f.formula}
                  </div>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed">{f.description}</p>

                {f.breakdown && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm space-y-1 font-medium text-slate-700">
                    <span className="font-bold text-slate-900 block">Langkah Penurunan:</span>
                    {f.breakdown.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-sm font-semibold text-slate-500 pt-2 border-t border-slate-100">
                Satuan: <span className="font-mono text-amber-800 font-bold">{f.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
