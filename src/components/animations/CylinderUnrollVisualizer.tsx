import React, { useState } from 'react';
import { Play, RotateCcw, Volume2, Sparkles, ArrowRight } from 'lucide-react';
import { tts } from '../../services/tts';

export const CylinderUnrollVisualizer: React.FC = () => {
  const [unrollProgress, setUnrollProgress] = useState(0); // 0 (rolled) to 100 (fully unrolled)
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
      'Konsep jaring-jaring tabung. Jika selimut tabung dipotong tegak sepanjang tingginya dan dibentangkan, selimut akan membentuk sebuah persegi panjang. Panjang persegi panjang tersebut sama dengan keliling lingkaran alas yaitu dua kali pi kali r, dan lebarnya sama dengan tinggi tabung t. Oleh karena itu, luas selimut tabung adalah dua kali pi kali r kali t.',
      'Konsep jaring-jaring tabung. Jika selimut tabung dipotong tegak sepanjang tingginya dan dibentangkan, selimut akan membentuk sebuah persegi panjang. Panjang persegi panjang tersebut sama dengan keliling lingkaran alas yaitu dua kali pi dikali r, dan lebarnya sama dengan tinggi tabung t. Oleh karena itu, luas selimut tabung adalah dua kali pi dikali r dikali t.'
    );
  };

  const p = unrollProgress / 100;
  // Visual metrics
  const rectWidth = 280 + p * 120;
  const rectHeight = 160;

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-blue-100 shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm">
              Visualisasi Edukatif
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 font-bold rounded-lg text-sm">
              Jaring-jaring Tabung
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mt-2 font-heading">
            Proses Membuka Selimut Tabung Menjadi Persegi Panjang
          </h3>
        </div>

        <button
          onClick={speakConcept}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl border border-blue-200 transition active:scale-95 text-base"
        >
          <Volume2 className="w-5 h-5 text-blue-600" />
          Dengarkan Penjelasan
        </button>
      </div>

      {/* Interactive Stage */}
      <div className="relative bg-gradient-to-b from-blue-50/50 via-slate-50 to-pink-50/40 rounded-2xl p-6 border border-slate-200/80 min-h-[360px] flex flex-col items-center justify-center">
        <svg viewBox="0 0 720 340" className="w-full max-w-3xl h-auto overflow-visible select-none">
          <defs>
            <linearGradient id="cylinderBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
            <linearGradient id="unrolledNetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>

          {/* Top circle / Tutup Tabung */}
          <g transform={`translate(${360 - (1 - p) * 160}, ${75 - p * 20})`}>
            <ellipse
              cx="0"
              cy="0"
              rx={55}
              ry={24 + p * 31} // transitions from 3D ellipse perspective to flat 2D circle
              fill="#93c5fd"
              stroke="#1d4ed8"
              strokeWidth="3"
            />
            <line x1="0" y1="0" x2={55} y2="0" stroke="#ef4444" strokeWidth="2.5" />
            <circle cx="0" cy="0" r="4" fill="#1d4ed8" />
            <text x="25" y="-8" fill="#1e3a8a" fontSize="16" fontWeight="bold" textAnchor="middle">
              r
            </text>
            <text x="0" y="32" fill="#1e3a8a" fontSize="14" fontWeight="bold" textAnchor="middle">
              Tutup (L = πr²)
            </text>
          </g>

          {/* Central Body: Rolls out from cylinder perspective into rectangle */}
          {p < 0.3 ? (
            // Rolled cylinder representation
            <g transform="translate(200, 100)">
              <rect x="0" y="0" width="160" height="150" fill="url(#cylinderBodyGrad)" rx="6" />
              {/* Perspective curve */}
              <path
                d="M 0 150 A 80 26 0 0 0 160 150"
                fill="none"
                stroke="#1e40af"
                strokeWidth="3"
              />
              <text x="80" y="75" fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle">
                Selimut Tabung
              </text>
            </g>
          ) : (
            // Unrolling transition
            <g transform={`translate(${360 - rectWidth / 2}, 90)`}>
              <rect
                x="0"
                y="0"
                width={rectWidth}
                height={rectHeight}
                fill="url(#unrolledNetGrad)"
                rx="12"
                stroke="#1d4ed8"
                strokeWidth="2.5"
                fillOpacity="0.88"
              />

              {/* Length indicator (Panjang = 2πr) */}
              <line x1="0" y1="-12" x2={rectWidth} y2="-12" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow)" />
              <text x={rectWidth / 2} y="-20" fill="#1e40af" fontSize="18" fontWeight="800" textAnchor="middle">
                Panjang = Keliling Alas = 2 × π × r
              </text>

              {/* Width/Height indicator (Lebar = t) */}
              <line x1={rectWidth + 14} y1="0" x2={rectWidth + 14} y2={rectHeight} stroke="#ea580c" strokeWidth="2.5" />
              <text
                x={rectWidth + 24}
                y={rectHeight / 2 + 5}
                fill="#c2410c"
                fontSize="18"
                fontWeight="800"
                textAnchor="start"
              >
                Lebar = t
              </text>

              <text x={rectWidth / 2} y={rectHeight / 2 - 5} fill="#ffffff" fontSize="22" fontWeight="800" textAnchor="middle">
                Selimut = Persegi Panjang
              </text>
              <text x={rectWidth / 2} y={rectHeight / 2 + 25} fill="#ffffff" fontSize="18" fontWeight="bold" textAnchor="middle">
                Luas Selimut (Ls) = Panjang × Lebar = 2 × π × r × t
              </text>
            </g>
          )}

          {/* Bottom circle / Alas Tabung */}
          <g transform={`translate(${360 - (1 - p) * 160}, ${285 + p * 15})`}>
            <ellipse
              cx="0"
              cy="0"
              rx={55}
              ry={24 + p * 31}
              fill="#93c5fd"
              stroke="#1d4ed8"
              strokeWidth="3"
            />
            <circle cx="0" cy="0" r="4" fill="#1d4ed8" />
            <line x1="0" y1="0" x2={55} y2="0" stroke="#ef4444" strokeWidth="2.5" />
            <text x="25" y="-8" fill="#1e3a8a" fontSize="16" fontWeight="bold" textAnchor="middle">
              r
            </text>
            <text x="0" y="32" fill="#1e3a8a" fontSize="14" fontWeight="bold" textAnchor="middle">
              Alas (L = πr²)
            </text>
          </g>
        </svg>

        {/* Current State Info */}
        <div className="mt-4 flex items-center justify-between w-full max-w-xl bg-white/90 backdrop-blur px-4 py-2.5 rounded-xl border border-blue-200/60 shadow-sm text-sm lg:text-base font-semibold text-slate-700">
          <span>Keadaan Tabung:</span>
          <span className="text-blue-700 font-extrabold">
            {unrollProgress === 0
              ? 'Tabung Tertutup Silindris (0%)'
              : unrollProgress === 100
              ? 'Jaring-jaring Terbuka Penuh (100%)'
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
            className="w-full accent-blue-600 h-2 bg-blue-100 rounded-lg cursor-pointer"
          />
          <span className="font-mono font-bold text-blue-700 shrink-0 w-12 text-right">{unrollProgress}%</span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleToggleAuto}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md transition active:scale-95 text-base"
          >
            {isPlaying ? <RotateCcw className="w-5 h-5 animate-spin" /> : <Play className="w-5 h-5" />}
            {isPlaying ? 'Hentikan' : unrollProgress >= 100 ? 'Ulangi Buka' : 'Buka Otomatis'}
          </button>
          <button
            onClick={handleReset}
            className="p-2.5 bg-white hover:bg-slate-100 text-slate-600 font-bold rounded-xl border border-slate-300 transition"
            title="Kembali ke Bentuk Silinder Awal"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Logical Conclusion Card */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50/70 p-5 rounded-2xl border border-blue-200">
          <h4 className="text-xl font-bold text-blue-900 mb-2 font-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-600" />
            Mengapa Rumus Luas Selimut 2 × π × r × t?
          </h4>
          <p className="text-lg text-slate-700 leading-relaxed">
            Karena selimut tabung jika dibuka mendatar menghasilkan <strong>persegi panjang</strong>.
            Panjang persegi panjang tersebut melingkari alasnya (Keliling lingkaran = <strong>2πr</strong>),
            dan lebarnya sama dengan tinggi tabung (<strong>t</strong>).
          </p>
        </div>

        <div className="bg-pink-50/70 p-5 rounded-2xl border border-pink-200">
          <h4 className="text-xl font-bold text-pink-900 mb-2 font-heading flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-600" />
            Luas Permukaan Total (Lp)
          </h4>
          <p className="text-lg text-slate-700 leading-relaxed font-math">
            Lp = Luas Alas + Luas Tutup + Luas Selimut
            <br />
            Lp = πr² + πr² + 2πrt = <strong>2πr² + 2πrt</strong>
            <br />
            Difaktorkan menjadi: <strong className="text-pink-700">2πr(r + t)</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
