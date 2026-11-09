import React, { useState } from 'react';
import { Play, RotateCcw, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { tts } from '../../services/tts';

export const WaterPouringVisualizer: React.FC = () => {
  const [pourCount, setPourCount] = useState<number>(0); // 0, 1, 2, 3
  const [isPouringAnim, setIsPouringAnim] = useState<boolean>(false);

  const handlePourNext = () => {
    if (pourCount >= 3 || isPouringAnim) return;
    setIsPouringAnim(true);
    setTimeout(() => {
      setPourCount((prev) => {
        const next = prev + 1;
        setIsPouringAnim(false);
        return next;
      });
    }, 1200);
  };

  const handleAutoRun = () => {
    setPourCount(0);
    setIsPouringAnim(true);

    setTimeout(() => {
      setPourCount(1);
      setTimeout(() => {
        setPourCount(2);
        setTimeout(() => {
          setPourCount(3);
          setIsPouringAnim(false);
        }, 1300);
      }, 1300);
    }, 1200);
  };

  const handleReset = () => {
    setIsPouringAnim(false);
    setPourCount(0);
  };

  const speakExperiment = () => {
    tts.speak(
      'Eksperimen pembuktian volume kerucut terhadap tabung. Jika sebuah kerucut dan sebuah tabung memiliki jari-jari alas r dan tinggi t yang sama persis, dibutuhkan tepat tiga kali pengisian air penuh dari kerucut untuk memenuhi tabung tersebut. Hal ini membuktikan secara nyata bahwa volume kerucut sama dengan sepertiga dari volume tabung, yaitu satu per tiga kali pi kali jari-jari kuadrat kali tinggi.',
      'Eksperimen pembuktian volume kerucut terhadap tabung. Jika sebuah kerucut dan sebuah tabung memiliki jari-jari alas r dan tinggi t yang sama persis, dibutuhkan tepat tiga kali pengisian air penuh dari kerucut untuk memenuhi tabung tersebut. Hal ini membuktikan secara nyata bahwa volume kerucut sama dengan sepertiga dari volume tabung, yaitu satu per tiga dikali pi dikali jari-jari kuadrat dikali tinggi.'
    );
  };

  // Water level percentage in cylinder
  const waterPercent = (pourCount / 3) * 100;
  const cylinderWaterHeight = (pourCount / 3) * 170; // cylinder max height is 170

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-blue-100 shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 font-bold rounded-lg text-sm">
              Laboratorium Sains Virtual
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm">
              Eksperimen 3 Kali Tuang
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mt-2 font-heading">
            Perbandingan Volume Tabung dan Kerucut (Air / Pasir)
          </h3>
        </div>

        <button
          onClick={speakExperiment}
          className="flex items-center gap-2 px-4 py-2.5 bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-bold rounded-xl border border-cyan-200 transition active:scale-95 text-base"
        >
          <Volume2 className="w-5 h-5 text-cyan-600" />
          Dengarkan Penjelasan
        </button>
      </div>

      {/* Animation Stage */}
      <div className="relative bg-gradient-to-b from-cyan-50/40 via-slate-50 to-blue-50/40 rounded-2xl p-6 border border-slate-200/80 min-h-[380px] flex flex-col items-center justify-center">
        <svg viewBox="0 0 740 330" className="w-full max-w-3xl h-auto select-none overflow-visible">
          <defs>
            <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="streamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Left: Pouring Cone */}
          <g
            transform={`translate(220, 130) rotate(${isPouringAnim ? -45 : 0})`}
            className="transition-transform duration-700 origin-[100px_80px]"
          >
            {/* Cone Body */}
            <path d="M 0 0 L -60 -120 L 60 -120 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2.5" opacity="0.9" />
            {/* Top base ellipse */}
            <ellipse cx="0" cy="-120" rx="60" ry="16" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2.5" />

            {/* Water inside cone before pouring */}
            {!isPouringAnim && pourCount < 3 && (
              <path d="M 0 0 L -50 -100 L 50 -100 Z" fill="url(#waterGrad)" opacity="0.8" />
            )}

            <text x="0" y="-140" fill="#854d0e" fontSize="15" fontWeight="bold" textAnchor="middle">
              Kerucut (r, t)
            </text>
            <text x="0" y="25" fill="#ca8a04" fontSize="14" fontWeight="bold" textAnchor="middle">
              V = ⅓ V_tabung
            </text>
          </g>

          {/* Pouring Water Stream (Active during animation) */}
          {isPouringAnim && (
            <path
              d="M 270 120 Q 350 140 430 200"
              fill="none"
              stroke="url(#streamGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              className="animate-pulse"
            />
          )}

          {/* Right: Receiving Cylinder */}
          <g transform="translate(450, 70)">
            {/* Glass Cylinder outline */}
            <rect x="0" y="0" width="160" height="180" fill="#f1f5f9" fillOpacity="0.3" stroke="#2563eb" strokeWidth="2.5" rx="4" />
            <ellipse cx="80" cy="0" rx="80" ry="20" fill="#dbeafe" fillOpacity="0.6" stroke="#2563eb" strokeWidth="2" />
            <ellipse cx="80" cy="180" rx="80" ry="20" fill="#bfdbfe" fillOpacity="0.8" stroke="#2563eb" strokeWidth="2" />

            {/* Graduated ruler marks (1/3, 2/3, 3/3) */}
            {/* 1/3 line */}
            <line x1="-10" y1="123" x2="20" y2="123" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="-16" y="128" fill="#dc2626" fontSize="14" fontWeight="bold" textAnchor="end">
              ⅓ Tinggi (1× Tuang)
            </text>

            {/* 2/3 line */}
            <line x1="-10" y1="63" x2="20" y2="63" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="-16" y="68" fill="#dc2626" fontSize="14" fontWeight="bold" textAnchor="end">
              ⅔ Tinggi (2× Tuang)
            </text>

            {/* 3/3 line */}
            <line x1="-10" y1="5" x2="20" y2="5" stroke="#16a34a" strokeWidth="2.5" strokeDasharray="4 2" />
            <text x="-16" y="10" fill="#15803d" fontSize="14" fontWeight="bold" textAnchor="end">
              Penuh 100% (3× Tuang)
            </text>

            {/* Rising Water inside Cylinder */}
            {cylinderWaterHeight > 0 && (
              <g>
                <rect
                  x="2"
                  y={180 - cylinderWaterHeight}
                  width="156"
                  height={cylinderWaterHeight}
                  fill="url(#waterGrad)"
                  opacity="0.85"
                  className="transition-all duration-700 ease-out"
                />
                <ellipse
                  cx="80"
                  cy={180 - cylinderWaterHeight}
                  rx="78"
                  ry="18"
                  fill="#7dd3fc"
                  className="transition-all duration-700 ease-out"
                />
              </g>
            )}

            <text x="80" y="215" fill="#1e3a8a" fontSize="16" fontWeight="extrabold" textAnchor="middle">
              Tabung (Ukuran r & t Sama)
            </text>
          </g>
        </svg>

        {/* Counter and Status */}
        <div className="mt-4 flex flex-wrap items-center justify-between w-full max-w-xl bg-white/95 backdrop-blur px-5 py-3 rounded-2xl border border-blue-200/80 shadow-sm text-base font-semibold text-slate-700">
          <div className="flex items-center gap-3">
            <span className="text-slate-600">Penuangan Air:</span>
            <div className="flex gap-1.5">
              {[1, 2, 3].map((step) => (
                <span
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    pourCount >= step
                      ? 'bg-blue-600 text-white scale-110 shadow-sm'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {pourCount >= step ? <CheckCircle2 className="w-5 h-5" /> : step}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right">
            <span className="text-sm text-slate-500 block">Kapasitas Tabung Terisi:</span>
            <span className="text-xl font-extrabold text-blue-700 font-math">
              {pourCount === 0 && '0% (Kosong)'}
              {pourCount === 1 && '⅓ Bagian (33,3%)'}
              {pourCount === 2 && '⅔ Bagian (66,7%)'}
              {pourCount === 3 && 'Penuh 100% (3/3 Bagian)'}
            </span>
          </div>
        </div>
      </div>

      {/* Control Actions */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={handlePourNext}
            disabled={pourCount >= 3 || isPouringAnim}
            className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl shadow-md transition active:scale-95 text-base ${
              pourCount >= 3 || isPouringAnim
                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                : 'bg-cyan-600 hover:bg-cyan-700 text-white'
            }`}
          >
            Tuang Kerucut ke-{pourCount + 1}
          </button>

          <button
            onClick={handleAutoRun}
            disabled={isPouringAnim}
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition active:scale-95 text-base"
          >
            <Play className="w-5 h-5" />
            Jalankan Otomatis (3× Tuang)
          </button>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-slate-300 transition"
        >
          <RotateCcw className="w-5 h-5" />
          Kosongkan Wadah
        </button>
      </div>

      {/* Conclusion Card */}
      <div className="mt-6 bg-gradient-to-r from-blue-50 via-white to-cyan-50 p-6 rounded-2xl border border-cyan-200 shadow-sm">
        <h4 className="text-xl font-extrabold text-blue-900 mb-2 font-heading flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-cyan-600" />
          Kesimpulan Matematis Nyata:
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
            <span className="text-sm font-bold text-slate-500">1 Kali Tuang Kerucut</span>
            <div className="text-2xl font-black text-cyan-600 mt-1 font-math">⅓ Volume Tabung</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
            <span className="text-sm font-bold text-slate-500">3 Kali Tuang Kerucut</span>
            <div className="text-2xl font-black text-blue-600 mt-1 font-math">1 Tabung Penuh</div>
          </div>
          <div className="p-4 bg-white rounded-xl border border-cyan-300 text-center shadow-sm">
            <span className="text-sm font-bold text-slate-500">Rumus Volume Kerucut</span>
            <div className="text-2xl font-black text-pink-600 mt-1 font-math">V = ⅓ × π × r² × t</div>
          </div>
        </div>
      </div>
    </div>
  );
};
