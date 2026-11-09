import React from 'react';

interface QuestionDiagramProps {
  type: string;
}

export const QuestionDiagram: React.FC<QuestionDiagramProps> = ({ type }) => {
  switch (type) {
    case 'tank':
      return (
        <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-4 rounded-2xl border border-blue-200 flex flex-col items-center">
          <svg viewBox="0 0 440 200" className="w-full max-w-sm h-auto select-none">
            {/* Old Tank */}
            <g transform="translate(90, 30)">
              <rect x="0" y="20" width="70" height="120" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" rx="4" />
              <ellipse cx="35" cy="20" rx="35" ry="10" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
              <ellipse cx="35" cy="140" rx="35" ry="10" fill="#60a5fa" stroke="#2563eb" strokeWidth="2" />
              <text x="35" y="80" fill="#1e3a8a" fontSize="13" fontWeight="bold" textAnchor="middle">Tangki Awal</text>
              <text x="35" y="100" fill="#1e40af" fontSize="11" textAnchor="middle">r = 70, t = 200</text>
              <text x="35" y="165" fill="#334155" fontSize="13" fontWeight="bold" textAnchor="middle">Volume = V</text>
            </g>

            {/* Arrow */}
            <path d="M 195 90 L 225 90 M 215 80 L 225 90 L 215 100" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
            <text x="210" y="70" fill="#be123c" fontSize="12" fontWeight="bold" textAnchor="middle">r digandakan</text>

            {/* New Tank (Wider, same height) */}
            <g transform="translate(260, 30)">
              <rect x="0" y="20" width="130" height="120" fill="#38bdf8" stroke="#0284c7" strokeWidth="2.5" rx="6" />
              <ellipse cx="65" cy="20" rx="65" ry="15" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2.5" />
              <ellipse cx="65" cy="140" rx="65" ry="15" fill="#0284c7" stroke="#0284c7" strokeWidth="2" />
              <text x="65" y="80" fill="#0c4a6e" fontSize="14" fontWeight="extrabold" textAnchor="middle">Tangki Baru</text>
              <text x="65" y="100" fill="#0369a1" fontSize="12" textAnchor="middle">r' = 140, t = 200</text>
              <text x="65" y="165" fill="#0369a1" fontSize="13" fontWeight="bold" textAnchor="middle">Volume = 4V</text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Ilustrasi Perbandingan Ukuran Tangki Silinder</span>
        </div>
      );

    case 'biscuit':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-blue-50 p-4 rounded-2xl border border-amber-200 flex flex-col items-center">
          <svg viewBox="0 0 380 180" className="w-full max-w-sm h-auto select-none">
            {/* Metal Sheet */}
            <rect x="20" y="30" width="120" height="110" fill="#e2e8f0" stroke="#64748b" strokeWidth="2" rx="4" />
            <text x="80" y="85" fill="#475569" fontSize="12" fontWeight="bold" textAnchor="middle">Lembaran Seng</text>
            <text x="80" y="105" fill="#64748b" fontSize="11" textAnchor="middle">37,4 m²</text>

            {/* Plus Arrow */}
            <path d="M 160 85 L 190 85" stroke="#3b82f6" strokeWidth="2.5" />

            {/* Biscuit Cans Stacking */}
            <g transform="translate(220, 20)">
              <rect x="0" y="20" width="70" height="90" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" rx="4" />
              <ellipse cx="35" cy="20" rx="35" ry="10" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
              <ellipse cx="35" cy="110" rx="35" ry="10" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
              <text x="35" y="65" fill="#854d0e" fontSize="12" fontWeight="bold" textAnchor="middle">Biskuit</text>
              <text x="35" y="80" fill="#713f12" fontSize="10" textAnchor="middle">r=7, t=10</text>
            </g>
            <g transform="translate(295, 40)">
              <rect x="0" y="20" width="60" height="70" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" rx="4" />
              <ellipse cx="30" cy="20" rx="30" ry="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2" />
              <text x="30" y="55" fill="#854d0e" fontSize="11" fontWeight="bold" textAnchor="middle">× 500 pcs</text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Produksi 500 Kaleng Biskuit Bertutup</span>
        </div>
      );

    case 'party-hat':
      return (
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-2xl border border-pink-200 flex flex-col items-center">
          <svg viewBox="0 0 380 180" className="w-full max-w-sm h-auto select-none">
            {/* Hat Cone */}
            <g transform="translate(190, 15)">
              <path d="M 0 0 L -70 120 L 70 120 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2.5" />
              {/* Hollow bottom (no base!) */}
              <ellipse cx="0" cy="120" rx="70" ry="16" fill="#fdf2f8" stroke="#db2777" strokeWidth="2" strokeDasharray="4 2" />

              {/* Dimension lines */}
              <line x1="0" y1="0" x2="0" y2="120" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 2" />
              <text x="-12" y="65" fill="#dc2626" fontSize="13" fontWeight="bold">t=24</text>

              <line x1="0" y1="120" x2="70" y2="120" stroke="#2563eb" strokeWidth="2.5" />
              <text x="35" y="115" fill="#1d4ed8" fontSize="12" fontWeight="bold">r=7</text>

              <text x="45" y="55" fill="#7c3aed" fontSize="13" fontWeight="bold">s = 25</text>
              <text x="0" y="155" fill="#9d174d" fontSize="13" fontWeight="extrabold" textAnchor="middle">
                Topi Tanpa Alas (Hanya Selimut)
              </text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">20 Buah Topi Kerucut Karton</span>
        </div>
      );

    case 'ice-cream':
      return (
        <div className="bg-gradient-to-br from-cyan-50 to-amber-50 p-4 rounded-2xl border border-cyan-200 flex flex-col items-center">
          <svg viewBox="0 0 400 180" className="w-full max-w-sm h-auto select-none">
            {/* Wadah A Kerucut */}
            <g transform="translate(110, 15)">
              <path d="M 0 125 L -50 0 L 50 0 Z" fill="#fef08a" stroke="#d97706" strokeWidth="2" />
              <ellipse cx="0" cy="0" rx="50" ry="12" fill="#fed7aa" stroke="#d97706" strokeWidth="2" />
              <text x="0" y="45" fill="#92400e" fontSize="13" fontWeight="extrabold" textAnchor="middle">Wadah A (Kerucut)</text>
              <text x="0" y="65" fill="#78350f" fontSize="11" textAnchor="middle">r = 7 cm, t = 18 cm</text>
              <text x="0" y="155" fill="#d97706" fontSize="13" fontWeight="bold" textAnchor="middle">V = 924 cm³</text>
            </g>

            {/* VS */}
            <text x="210" y="75" fill="#64748b" fontSize="20" fontWeight="black" textAnchor="middle">VS</text>

            {/* Wadah B Tabung */}
            <g transform="translate(290, 45)">
              <rect x="-45" y="10" width="90" height="60" fill="#bae6fd" stroke="#0284c7" strokeWidth="2" rx="4" />
              <ellipse cx="0" cy="10" rx="45" ry="12" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
              <ellipse cx="0" cy="70" rx="45" ry="12" fill="#7dd3fc" stroke="#0284c7" strokeWidth="2" />
              <text x="0" y="40" fill="#0369a1" fontSize="13" fontWeight="extrabold" textAnchor="middle">Wadah B (Tabung)</text>
              <text x="0" y="55" fill="#075985" fontSize="11" textAnchor="middle">r = 7 cm, t = 7 cm</text>
              <text x="0" y="125" fill="#0284c7" fontSize="13" fontWeight="bold" textAnchor="middle">V = 1.078 cm³</text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Perbandingan Wadah Gelato Kerucut vs Tabung</span>
        </div>
      );

    case 'dome':
      return (
        <div className="bg-gradient-to-br from-teal-50 to-pink-50 p-4 rounded-2xl border border-teal-200 flex flex-col items-center">
          <svg viewBox="0 0 380 180" className="w-full max-w-sm h-auto select-none">
            {/* Half sphere dome */}
            <g transform="translate(190, 120)">
              <path d="M -90 0 A 90 90 0 0 1 90 0 Z" fill="#2dd4bf" stroke="#0f766e" strokeWidth="3" />
              <ellipse cx="0" cy="0" rx="90" ry="16" fill="#99f6e4" stroke="#0f766e" strokeWidth="2" />
              <line x1="0" y1="0" x2="90" y2="0" stroke="#b91c1c" strokeWidth="2.5" />
              <circle cx="0" cy="0" r="4" fill="#b91c1c" />
              <text x="45" y="-8" fill="#b91c1c" fontSize="13" fontWeight="bold">r = 7 m</text>
              <text x="0" y="40" fill="#0f766e" fontSize="14" fontWeight="extrabold" textAnchor="middle">
                Kubah Setengah Bola (d = 14 m)
              </text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Pengecatan Permukaan Luar Kubah Masjid</span>
        </div>
      );

    case 'spheres-compare':
      return (
        <div className="bg-gradient-to-br from-amber-50 to-rose-50 p-4 rounded-2xl border border-amber-200 flex flex-col items-center">
          <svg viewBox="0 0 400 180" className="w-full max-w-sm h-auto select-none">
            {/* Sphere 1 */}
            <g transform="translate(110, 85)">
              <circle cx="0" cy="0" r="45" fill="#fb7185" stroke="#be123c" strokeWidth="2" />
              <ellipse cx="0" cy="0" rx="45" ry="12" fill="none" stroke="#ffe4e6" strokeWidth="1.5" />
              <text x="0" y="5" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">r₁ (skala 2)</text>
              <text x="0" y="65" fill="#9f1239" fontSize="13" fontWeight="bold" textAnchor="middle">V₁ = 400 cm³</text>
            </g>

            {/* Ratio arrow */}
            <text x="210" y="90" fill="#475569" fontSize="18" fontWeight="bold" textAnchor="middle">r₁:r₂ = 2:3</text>

            {/* Sphere 2 */}
            <g transform="translate(310, 85)">
              <circle cx="0" cy="0" r="65" fill="#f43f5e" stroke="#9f1239" strokeWidth="2.5" />
              <ellipse cx="0" cy="0" rx="65" ry="18" fill="none" stroke="#ffe4e6" strokeWidth="2" />
              <text x="0" y="5" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">r₂ (skala 3)</text>
              <text x="0" y="85" fill="#881337" fontSize="14" fontWeight="extrabold" textAnchor="middle">V₂ = 1.350 cm³</text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Perbandingan Volume Dua Bola Logam (r³)</span>
        </div>
      );

    case 'funnel-drum':
      return (
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-2xl border border-blue-200 flex flex-col items-center">
          <svg viewBox="0 0 400 180" className="w-full max-w-sm h-auto select-none">
            {/* Small Funnel Cone */}
            <g transform="translate(90, 40)">
              <path d="M 0 50 L -30 0 L 30 0 Z" fill="#fef08a" stroke="#ca8a04" strokeWidth="2" />
              <text x="0" y="-10" fill="#854d0e" fontSize="12" fontWeight="bold" textAnchor="middle">Gayung Kerucut</text>
              <text x="0" y="70" fill="#713f12" fontSize="11" textAnchor="middle">r = 7, t = 15</text>
              <text x="0" y="88" fill="#ca8a04" fontSize="12" fontWeight="bold" textAnchor="middle">V = 245π cm³</text>
            </g>

            <path d="M 145 60 L 195 60 M 185 50 L 195 60 L 185 70" stroke="#0284c7" strokeWidth="3" />
            <text x="170" y="45" fill="#0369a1" fontSize="13" fontWeight="bold" textAnchor="middle">48 Kali</text>

            {/* Big Cylinder Drum */}
            <g transform="translate(280, 20)">
              <rect x="-45" y="15" width="90" height="110" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" rx="4" />
              <ellipse cx="0" cy="15" rx="45" ry="12" fill="#bfdbfe" stroke="#1d4ed8" strokeWidth="2" />
              <ellipse cx="0" cy="125" rx="45" ry="12" fill="#60a5fa" stroke="#1d4ed8" strokeWidth="2" />
              <text x="0" y="65" fill="#1e3a8a" fontSize="13" fontWeight="bold" textAnchor="middle">Drum Tabung</text>
              <text x="0" y="82" fill="#1e40af" fontSize="11" textAnchor="middle">r = 14, t = 60</text>
              <text x="0" y="150" fill="#1d4ed8" fontSize="13" fontWeight="bold" textAnchor="middle">V = 11.760π cm³</text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Pengisian Minyak dengan Gayung Kerucut</span>
        </div>
      );

    case 'error-analysis':
      return (
        <div className="bg-gradient-to-br from-red-50 to-emerald-50 p-4 rounded-2xl border border-slate-300 flex flex-col items-center">
          <svg viewBox="0 0 420 180" className="w-full max-w-sm h-auto select-none">
            {/* Blackboard / comparison */}
            <rect x="20" y="15" width="180" height="135" rx="8" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
            <text x="110" y="40" fill="#991b1b" fontSize="13" fontWeight="extrabold" textAnchor="middle">Langkah Doni (Salah)</text>
            <text x="30" y="65" fill="#b91c1c" fontSize="11">Ls = 942 cm²</text>
            <text x="30" y="85" fill="#b91c1c" fontSize="11">Alas = 314 cm² (1 saja!)</text>
            <text x="30" y="105" fill="#991b1b" fontSize="12" fontWeight="bold">Lp = 1.256 cm²</text>
            <text x="110" y="135" fill="#dc2626" fontSize="11" fontWeight="bold" textAnchor="middle">Lupa Tutup Tabung!</text>

            <rect x="220" y="15" width="180" height="135" rx="8" fill="#f0fdf4" stroke="#22c55e" strokeWidth="2" />
            <text x="310" y="40" fill="#166534" fontSize="13" fontWeight="extrabold" textAnchor="middle">Kaidah Benar</text>
            <text x="230" y="65" fill="#15803d" fontSize="11">Ls = 942 cm²</text>
            <text x="230" y="85" fill="#15803d" fontSize="11">2 × Lingkaran = 628 cm²</text>
            <text x="230" y="105" fill="#166534" fontSize="12" fontWeight="bold">Lp = 1.570 cm²</text>
            <text x="310" y="135" fill="#15803d" fontSize="11" fontWeight="bold" textAnchor="middle">Alas + Tutup Lengkap</text>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Evaluasi Kesalahan Unsur Tabung Tertutup</span>
        </div>
      );

    case 'beverage-can':
      return (
        <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-4 rounded-2xl border border-blue-200 flex flex-col items-center">
          <svg viewBox="0 0 420 180" className="w-full max-w-sm h-auto select-none">
            {/* Design 1 (Chubby) */}
            <g transform="translate(110, 30)">
              <rect x="-40" y="20" width="80" height="70" fill="#a7f3d0" stroke="#059669" strokeWidth="2.5" rx="4" />
              <ellipse cx="0" cy="20" rx="40" ry="12" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
              <ellipse cx="0" cy="90" rx="40" ry="12" fill="#34d399" stroke="#059669" strokeWidth="2" />
              <text x="0" y="55" fill="#065f46" fontSize="12" fontWeight="extrabold" textAnchor="middle">Desain 1 (Gemuk)</text>
              <text x="0" y="70" fill="#047857" fontSize="10" textAnchor="middle">r=7, t=10</text>
              <text x="0" y="125" fill="#065f46" fontSize="13" fontWeight="black" textAnchor="middle">Lp = 748 cm²</text>
              <text x="0" y="142" fill="#059669" fontSize="11" fontWeight="bold" textAnchor="middle">Hemat 209 cm²!</text>
            </g>

            {/* Design 2 (Slim) */}
            <g transform="translate(310, 20)">
              <rect x="-22" y="10" width="44" height="100" fill="#fecdd3" stroke="#e11d48" strokeWidth="2" rx="3" />
              <ellipse cx="0" cy="10" rx="22" ry="7" fill="#ffe4e6" stroke="#e11d48" strokeWidth="1.5" />
              <ellipse cx="0" cy="110" rx="22" ry="7" fill="#fda4af" stroke="#e11d48" strokeWidth="1.5" />
              <text x="0" y="55" fill="#9f1239" fontSize="11" fontWeight="bold" textAnchor="middle">Desain 2 (Ramping)</text>
              <text x="0" y="70" fill="#9f1239" fontSize="10" textAnchor="middle">r=3.5, t=40</text>
              <text x="0" y="135" fill="#9f1239" fontSize="13" fontWeight="bold" textAnchor="middle">Lp = 957 cm²</text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Perbandingan Luas Bahan Dua Desain Kaleng Susu</span>
        </div>
      );

    case 'capsule-tank':
      return (
        <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-4 rounded-2xl border border-indigo-200 flex flex-col items-center">
          <svg viewBox="0 0 420 180" className="w-full max-w-sm h-auto select-none">
            <g transform="translate(210, 80)">
              {/* Left hemisphere */}
              <path d="M -90 -45 A 45 45 0 0 0 -90 45 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2.5" />
              {/* Central cylinder */}
              <rect x="-90" y="-45" width="180" height="90" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />
              {/* Right hemisphere */}
              <path d="M 90 -45 A 45 45 0 0 1 90 45 Z" fill="#f472b6" stroke="#db2777" strokeWidth="2.5" />

              {/* Labels */}
              <text x="0" y="-5" fill="#1e3a8a" fontSize="13" fontWeight="extrabold" textAnchor="middle">Badan Tabung (t=100)</text>
              <text x="0" y="15" fill="#1e40af" fontSize="11" textAnchor="middle">V = 138.600 cm³</text>

              <text x="-120" y="0" fill="#9d174d" fontSize="10" fontWeight="bold" textAnchor="middle">½ Bola</text>
              <text x="120" y="0" fill="#9d174d" fontSize="10" fontWeight="bold" textAnchor="middle">½ Bola</text>

              <text x="0" y="70" fill="#4338ca" fontSize="13" fontWeight="black" textAnchor="middle">
                Total Volume = 177.408 cm³ (177,4 Liter)
              </text>
            </g>
          </svg>
          <span className="text-xs font-semibold text-slate-500 mt-1">Tangki Kapsul Gas (Tabung + 2 Setengah Bola)</span>
        </div>
      );

    default:
      return null;
  }
};
