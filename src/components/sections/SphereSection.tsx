import React, { useState } from 'react';
import { SPHERE_ELEMENTS, SPHERE_FORMULAS } from '../../data/curriculumData';
import { ThreeCanvas } from '../ThreeCanvas';
import { SphereArchimedesVisualizer } from '../animations/SphereArchimedesVisualizer';
import { Volume2, Sparkles, Layers, ChevronRight, CircleDot } from 'lucide-react';
import { tts } from '../../services/tts';

export const SphereSection: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [showCrossSection3D, setShowCrossSection3D] = useState<boolean>(false);

  const speakSphereOverview = () => {
    tts.speak(
      'Bab tiga: Materi Bola. Bola adalah bangun ruang sisi lengkung berdimensi tiga yang dibentuk oleh sekumpulan titik-titik yang memiliki jarak sama persis ke sebuah titik pusat tertentu. Jarak tersebut dinamakan jari-jari bola r.',
      'Bab tiga: Materi Bola. Bola adalah bangun ruang sisi lengkung berdimensi tiga yang dibentuk oleh sekumpulan titik-titik yang memiliki jarak sama persis ke sebuah titik pusat tertentu. Jarak tersebut dinamakan jari-jari bola r.'
    );
  };

  const speakFormula = (f: { formula: string; spokenFormula: string; description: string }) => {
    tts.speak(`${f.spokenFormula}. ${f.description}`);
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Chapter Title Card */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-pink-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="px-3.5 py-1.5 bg-pink-100 text-pink-800 font-extrabold rounded-xl text-sm">
            BAB 3 • MATERI LENGKAP
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Bangun Ruang Bola (Sphere)
          </h2>
          <p className="text-xl text-slate-600 mt-2">
            Mempelajari struktur simetri sempurna, penampang irisan, pembuktian faktor 4 Archimedes, dan rumus volume.
          </p>
        </div>

        <button
          onClick={speakSphereOverview}
          className="flex items-center gap-2.5 px-5 py-3 bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold rounded-2xl border border-pink-200 transition active:scale-95 text-base shrink-0"
        >
          <Volume2 className="w-5 h-5 text-pink-600" />
          Dengarkan Bab Bola
        </button>
      </div>

      {/* Definition & 3D Interactive Model with Pointers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 3D Model with Pointers */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white rounded-3xl p-6 border border-pink-100 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                Model Bola 3D Realistis
              </h3>
              <button
                onClick={() => setShowCrossSection3D(!showCrossSection3D)}
                className={`text-xs px-3 py-1 rounded-full font-bold transition border ${
                  showCrossSection3D
                    ? 'bg-pink-600 text-white border-pink-600 shadow-sm'
                    : 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100'
                }`}
              >
                {showCrossSection3D ? 'Lihat Bola Utuh' : 'Tampilkan Belahan Irisan'}
              </button>
            </div>

            <ThreeCanvas mode="sphere" height="h-80 md:h-96" showCrossSection={showCrossSection3D} />

            {/* Pointers Legend */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold">
              <div className="flex items-center gap-2 p-2 bg-pink-50 rounded-lg text-pink-800">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <span>Permukaan / Kulit Bola</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg text-blue-800">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Lingkaran Besar (Equator)</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-emerald-50 rounded-lg text-emerald-800">
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span>Jari-jari (r) dari Pusat</span>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-100 rounded-lg text-slate-800">
                <span className="w-3 h-3 rounded-full bg-white border border-slate-400"></span>
                <span>Diameter (d = 2r)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Definition & Elements */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-pink-100 shadow-sm space-y-4">
            <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
              1. Pengertian Bola
            </h3>
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Bola</strong> adalah bangun ruang sisi lengkung beraturan yang dibentuk oleh tak terhingga banyaknya lingkaran berjari-jari sama yang berpusat pada satu titik yang sama (titik pusat bola).
            </p>
            <p className="text-xl text-slate-700 leading-relaxed">
              Bola juga dapat dipandang sebagai bangun ruang yang terbentuk dari hasil <strong>perputaran (rotasi) setengah lingkaran sebesar 360 derajat</strong> mengelilingi garis diameternya.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 lg:p-8 border border-pink-100 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 font-heading">
                2. Unsur-unsur Bola
              </h3>
              <span className="text-sm font-bold text-slate-500">Klik unsur untuk suara</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SPHERE_ELEMENTS.map((elem) => {
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
                        ? 'bg-pink-50 border-pink-400 shadow-md ring-2 ring-pink-300'
                        : 'bg-slate-50/80 hover:bg-pink-50/40 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-lg text-slate-900 font-heading flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: elem.color }}></span>
                        {elem.name}
                      </span>
                      {elem.symbol && (
                        <span className="px-2 py-0.5 bg-white rounded-md text-xs font-mono font-bold text-pink-700 border border-slate-200">
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

      {/* Mandatory Animation: Archimedes 4 Circles & Cross Section */}
      <SphereArchimedesVisualizer />

      {/* Formulas Section with Large Font Sizes (30-38px) */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-pink-100 shadow-md space-y-8">
        <div>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 font-bold rounded-lg text-sm">
            Kumpulan Rumus Resmi
          </span>
          <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mt-2 font-heading">
            Rumus-Rumus Matematika Bola
          </h3>
          <p className="text-xl text-slate-600 mt-1">
            Penjelasan arti rumus, simbol variabel, satuan standar, dan makna geometrisnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SPHERE_FORMULAS.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-gradient-to-br from-pink-50/50 via-white to-blue-50/20 border border-pink-200/80 shadow-sm hover:shadow-md transition space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-extrabold text-pink-900 font-heading">{f.name}</span>
                  <button
                    onClick={() => speakFormula(f)}
                    className="p-2 bg-pink-100/70 hover:bg-pink-200 text-pink-700 rounded-xl transition"
                    title="Dengarkan Cara Membaca Rumus"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                </div>

                {/* Big Math Formula (30-38px) */}
                <div className="p-4 bg-white rounded-2xl border border-pink-200 text-center shadow-inner">
                  <div className="text-3xl sm:text-4xl font-black text-pink-700 font-math tracking-wide">
                    {f.formula}
                  </div>
                </div>

                <p className="text-lg text-slate-700 leading-relaxed">{f.description}</p>

                {f.breakdown && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-sm space-y-1 font-medium text-slate-700">
                    <span className="font-bold text-slate-900 block">Penjelasan Logika:</span>
                    {f.breakdown.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-pink-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-sm font-semibold text-slate-500 pt-2 border-t border-slate-100">
                Satuan: <span className="font-mono text-pink-800 font-bold">{f.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
