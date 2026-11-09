import React, { useState } from 'react';
import { Play, RotateCcw, Volume2, Sparkles } from 'lucide-react';
import { tts } from '../../services/tts';

export const ConeUnrollVisualizer: React.FC = () => {
  const [unrollProgress, setUnrollProgress] = useState(0); // 0 to 100
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAuto = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    setIsPlaying(true);
    let p = unrollProgress >= 100 ? 0 : unrollProgress;
    const interval = setInterval(() => {
      p += 2;
      if (p >= 100) {
        p = 100;
        setUnrollProgress(100);
        setIsPlaying(false);
        clearInterval(interval);
      } else {
        setUnrollProgress(p);
      }
    }, 25);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setUnrollProgress(0);
  };

  const speakConcept = () => {
    tts.speak(
      'Konsep jaring-jaring kerucut. Jika selimut kerucut dibelah sepanjang garis pelukis s lalu dibuka mendatar, selimut tersebut akan membentuk juring lingkaran dengan jari-jari s. Panjang busur juring tersebut sama dengan keliling lingkaran alas kerucut, yaitu dua kali pi kali r. Dari perbandingan sudut juring, diperoleh rumus luas selimut kerucut adalah pi kali r kali s.',
      'Konsep jaring-jaring kerucut. Jika selimut kerucut dibelah sepanjang garis pelukis s lalu dibuka mendatar, selimut tersebut akan membentuk juring lingkaran dengan jari-jari s. Panjang busur juring tersebut sama dengan keliling lingkaran alas kerucut, yaitu dua kali pi dikali r. Dari perbandingan sudut juring, diperoleh rumus luas selimut kerucut adalah pi dikali r dikali s.'
    );
  };

  const p = unrollProgress / 100;

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-amber-100 shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-sm">
              Visualisasi Edukatif
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 font-bold rounded-lg text-sm">
              Jaring-jaring Kerucut
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mt-2 font-heading">
            Proses Membuka Selimut Kerucut Menjadi Juring Lingkaran
          </h3>
        </div>

        <button
          onClick={speakConcept}
          className="flex items-center gap-2 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold rounded-xl border border-amber-200 transition active:scale-95 text-base"
        >
          <Volume2 className="w-5 h-5 text-amber-600" />
          Dengarkan Penjelasan
        </button>
      </div>

      {/* SVG Canvas for Unrolling Animation */}
      <div className="relative bg-gradient-to-b from-amber-50/50 via-slate-50 to-pink-50/30 rounded-2xl p-6 border border-slate-200/80 min-h-[380px] flex flex-col items-center justify-center">
        <svg viewBox="0 0 740 340" className="w-full max-w-3xl h-auto overflow-visible select-none">
          {p < 0.35 ? (
            // 3D/Isometric Cone
            <g transform="translate(370, 70)">
              {/* Cone body triangle */}
              <path d="M 0 0 L -120 180 L 120 180 Z" fill="#f59e0b" opacity="0.9" />
              {/* Base ellipse */}
              <ellipse cx="0" cy="180" rx="120" ry="32" fill="#d97706" />
              {/* Radius line */}
              <line x1="0" y1="180" x2="120" y2="180" stroke="#ffffff" strokeWidth="3" />
              <circle cx="0" cy="180" r="4.5" fill="#ffffff" />
              <text x="60" y="172" fill="#ffffff" fontSize="16" fontWeight="bold">r</text>

              {/* Height line */}
              <line x1="0" y1="0" x2="0" y2="180" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6 4" />
              <text x="12" y="90" fill="#dc2626" fontSize="16" fontWeight="bold">t</text>

              {/* Slant height s */}
              <text x="75" y="75" fill="#7c3aed" fontSize="18" fontWeight="bold">s (garis pelukis)</text>

              {/* Apex */}
              <circle cx="0" cy="0" r="5" fill="#ef4444" />
              <text x="0" y="-12" fill="#ef4444" fontSize="16" fontWeight="bold" textAnchor="middle">
                Titik Puncak (T)
              </text>
            </g>
          ) : (
            // Unrolled Net: Circular Sector + Base Circle
            <g transform="translate(370, 60)">
              {/* Circular Sector (Selimut) with radius s */}
              <g transform="translate(-60, 40)">
                {/* Sector wedge */}
                <path
                  d={`M 0 0 L 170 0 A 170 170 0 0 1 ${170 * Math.cos(2.4)} ${170 * Math.sin(2.4)} Z`}
                  fill="#fbbf24"
                  stroke="#d97706"
                  strokeWidth="3"
                  opacity="0.95"
                />
                {/* Apex T */}
                <circle cx="0" cy="0" r="5" fill="#ef4444" />
                <text x="-15" y="-10" fill="#ef4444" fontSize="15" fontWeight="bold">Puncak (T)</text>

                {/* Radius s labels on both straight edges */}
                <text x="85" y="-10" fill="#7c3aed" fontSize="16" fontWeight="extrabold">Jari-jari = s</text>
                <text x="-10" y="95" fill="#7c3aed" fontSize="16" fontWeight="extrabold">s</text>

                {/* Arc description */}
                <path
                  d={`M 180 0 A 180 180 0 0 1 ${180 * Math.cos(2.4)} ${180 * Math.sin(2.4)}`}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeDasharray="6 4"
                />
                <text x="70" y="195" fill="#1d4ed8" fontSize="16" fontWeight="extrabold">
                  Panjang Busur = Keliling Alas = 2 × π × r
                </text>

                {/* Central sector label */}
                <text x="60" y="85" fill="#78350f" fontSize="18" fontWeight="900">
                  Selimut = Juring Lingkaran
                </text>
                <text x="60" y="112" fill="#92400e" fontSize="15" fontWeight="bold">
                  Luas Selimut (Ls) = π × r × s
                </text>
              </g>

              {/* Detached base circle */}
              <g transform="translate(190, 160)">
                <circle cx="0" cy="0" r="48" fill="#93c5fd" stroke="#2563eb" strokeWidth="3" />
                <line x1="0" y1="0" x2="48" y2="0" stroke="#ef4444" strokeWidth="2.5" />
                <circle cx="0" cy="0" r="4" fill="#1e3a8a" />
                <text x="24" y="-8" fill="#1e3a8a" fontSize="15" fontWeight="bold">r</text>
                <text x="0" y="65" fill="#1e3a8a" fontSize="15" fontWeight="bold" textAnchor="middle">
                  Alas Kerucut (La = πr²)
                </text>
              </g>
            </g>
          )}
        </svg>

        {/* Status Indicator */}
        <div className="mt-4 flex items-center justify-between w-full max-w-xl bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl border border-amber-200/60 shadow-sm text-sm lg:text-base font-semibold text-slate-700">
          <span>Keadaan Kerucut:</span>
          <span className="text-amber-800 font-extrabold">
            {unrollProgress === 0
              ? 'Kerucut Utuh 3D (0%)'
              : unrollProgress === 100
              ? 'Jaring-jaring Selimut Juring Terbuka Penuh (100%)'
              : `Sedang Membuka Selimut (${unrollProgress}%)`}
          </span>
        </div>
      </div>

      {/* Slider & Action Buttons */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <div className="flex items-center gap-3 w-full md:w-2/3">
          <span className="text-base font-bold text-slate-700 shrink-0">Buka Selimut:</span>
          <input
            type="range"
            min="0"
            max="100"
            value={unrollProgress}
            onChange={(e) => {
              setIsPlaying(false);
              setUnrollProgress(Number(e.target.value));
            }}
            className="w-full accent-amber-600 h-2 bg-amber-100 rounded-lg cursor-pointer"
          />
          <span className="font-mono font-bold text-amber-700 shrink-0 w-12 text-right">{unrollProgress}%</span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleAuto}
            className="flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md transition active:scale-95 text-base"
          >
            {isPlaying ? <RotateCcw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
            {isPlaying ? 'Hentikan' : unrollProgress >= 100 ? 'Ulangi Buka' : 'Buka Otomatis'}
          </button>
          <button
            onClick={handleReset}
            className="p-2.5 bg-white hover:bg-slate-100 text-slate-600 font-bold rounded-xl border border-slate-300 transition"
            title="Kembali ke Bentuk Kerucut Awal"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Explanation Cards */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200">
          <h4 className="text-xl font-bold text-amber-900 mb-2 font-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-600" />
            Mengapa Rumus Luas Selimut = π × r × s?
          </h4>
          <p className="text-lg text-slate-700 leading-relaxed">
            Selimut kerucut merupakan <strong>juring lingkaran besar</strong> yang memiliki jari-jari sebesar garis pelukis <strong>s</strong>.
            Panjang busur juringnya sama dengan keliling alas kerucut yaitu <strong>2πr</strong>.
            Rasio porsi juring terhadap satu lingkaran penuh berjari-jari s adalah <span className="font-math font-bold">(2πr)/(2πs) = r/s</span>.
            Maka luas selimut = (r/s) × (πs²) = <strong>π × r × s</strong>.
          </p>
        </div>

        <div className="bg-purple-50/70 p-5 rounded-2xl border border-purple-200">
          <h4 className="text-xl font-bold text-purple-900 mb-2 font-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            Luas Permukaan Total Kerucut (Lp)
          </h4>
          <p className="text-lg text-slate-700 leading-relaxed font-math">
            Lp = Luas Alas + Luas Selimut
            <br />
            Lp = πr² + πrs
            <br />
            Difaktorkan menjadi: <strong className="text-purple-700">πr(r + s)</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
