import React, { useState } from 'react';
import { Volume2, Sparkles, Layers, Scissors, HelpCircle } from 'lucide-react';
import { tts } from '../../services/tts';

export const SphereArchimedesVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'four-circles' | 'cross-section' | 'cylinder-compare'>('four-circles');
  const [isCrossCut, setIsCrossCut] = useState(false);
  const [circleHighlight, setCircleHighlight] = useState<number | null>(null);

  const speakArchimedesConcept = () => {
    tts.speak(
      'Pembuktian rumus luas permukaan dan volume bola oleh Archimedes. Luas kulit permukaan bola terbukti tepat sama dengan empat kali luas lingkaran besarnya, yaitu empat kali pi kali jari-jari kuadrat. Selain itu, Archimedes membuktikan bahwa bola yang dimasukkan tepat ke dalam tabung memiliki volume dua per tiga dari volume tabung tersebut, menghasilkan rumus empat per tiga kali pi kali jari-jari pangkat tiga.',
      'Pembuktian rumus luas permukaan dan volume bola oleh Archimedes. Luas kulit permukaan bola terbukti tepat sama dengan empat kali luas lingkaran besarnya, yaitu empat kali pi dikali jari-jari kuadrat. Selain itu, Archimedes membuktikan bahwa bola yang dimasukkan tepat ke dalam tabung memiliki volume dua per tiga dari volume tabung tersebut, menghasilkan rumus empat per tiga dikali pi dikali jari-jari pangkat tiga.'
    );
  };

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-pink-100 shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-pink-100 text-pink-700 font-bold rounded-lg text-sm">
              Eksplorasi Konsep Bola
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm">
              Penemuan Archimedes
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mt-2 font-heading">
            Mengapa Luas Permukaan Bola Menggunakan Faktor 4?
          </h3>
        </div>

        <button
          onClick={speakArchimedesConcept}
          className="flex items-center gap-2 px-4 py-2.5 bg-pink-50 hover:bg-pink-100 text-pink-700 font-bold rounded-xl border border-pink-200 transition active:scale-95 text-base"
        >
          <Volume2 className="w-5 h-5 text-pink-600" />
          Dengarkan Penjelasan
        </button>
      </div>

      {/* Mode Selector Tabs */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl mb-6">
        <button
          onClick={() => setActiveTab('four-circles')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl font-bold text-base transition flex items-center justify-center gap-2 ${
            activeTab === 'four-circles'
              ? 'bg-white text-pink-700 shadow-sm border border-pink-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Layers className="w-5 h-5" />
          1. Konsep 4 Lingkaran Besar (Lp = 4πr²)
        </button>

        <button
          onClick={() => setActiveTab('cross-section')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl font-bold text-base transition flex items-center justify-center gap-2 ${
            activeTab === 'cross-section'
              ? 'bg-white text-pink-700 shadow-sm border border-pink-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Scissors className="w-5 h-5" />
          2. Irisan Penampang Lingkaran
        </button>

        <button
          onClick={() => setActiveTab('cylinder-compare')}
          className={`flex-1 min-w-[200px] py-3 px-4 rounded-xl font-bold text-base transition flex items-center justify-center gap-2 ${
            activeTab === 'cylinder-compare'
              ? 'bg-white text-pink-700 shadow-sm border border-pink-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <HelpCircle className="w-5 h-5" />
          3. Hubungan Bola & Tabung (Volume 4/3 πr³)
        </button>
      </div>

      {/* Tab 1: 4 Circles Visual Proof */}
      {activeTab === 'four-circles' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-50/60 via-white to-blue-50/40 p-6 rounded-2xl border border-pink-200/70 flex flex-col items-center">
            <svg viewBox="0 0 760 280" className="w-full max-w-3xl h-auto select-none overflow-visible">
              <defs>
                <radialGradient id="ballShade" cx="40%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#f472b6" />
                  <stop offset="60%" stopColor="#db2777" />
                  <stop offset="100%" stopColor="#9d174d" />
                </radialGradient>
              </defs>

              {/* Sphere on the left */}
              <g transform="translate(130, 140)">
                <circle cx="0" cy="0" r="95" fill="url(#ballShade)" />
                {/* Equator */}
                <ellipse cx="0" cy="0" rx="95" ry="24" fill="none" stroke="#fbcfe8" strokeWidth="2.5" strokeDasharray="6 4" />
                <line x1="0" y1="0" x2="95" y2="0" stroke="#ffffff" strokeWidth="3" />
                <circle cx="0" cy="0" r="4.5" fill="#ffffff" />
                <text x="45" y="-10" fill="#ffffff" fontSize="16" fontWeight="bold">r</text>
                <text x="0" y="125" fill="#9d174d" fontSize="17" fontWeight="bold" textAnchor="middle">
                  1 Permukaan Bola Utuh
                </text>
                <text x="0" y="145" fill="#9d174d" fontSize="15" fontWeight="bold" textAnchor="middle">
                  Lp = 4 × (πr²)
                </text>
              </g>

              {/* Equal Sign */}
              <text x="270" y="150" fill="#db2777" fontSize="48" fontWeight="900" textAnchor="middle">=</text>

              {/* 4 Flat Circles on the right */}
              <g transform="translate(320, 25)">
                {[
                  { id: 1, x: 50, y: 55, label: 'Lingkaran 1' },
                  { id: 2, x: 190, y: 55, label: 'Lingkaran 2' },
                  { id: 3, x: 50, y: 185, label: 'Lingkaran 3' },
                  { id: 4, x: 190, y: 185, label: 'Lingkaran 4' },
                ].map((c) => (
                  <g
                    key={c.id}
                    className="cursor-pointer transition-transform hover:scale-105"
                    onClick={() => setCircleHighlight(c.id)}
                  >
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r="48"
                      fill={circleHighlight === c.id ? '#f472b6' : '#fce7f3'}
                      stroke="#db2777"
                      strokeWidth="3"
                    />
                    <line x1={c.x} y1={c.y} x2={c.x + 48} y2={c.y} stroke="#db2777" strokeWidth="2" />
                    <circle cx={c.x} cy={c.y} r="3" fill="#db2777" />
                    <text x={c.x + 22} y={c.y - 6} fill="#9d174d" fontSize="13" fontWeight="bold">r</text>
                    <text x={c.x} y={c.y + 6} fill="#9d174d" fontSize="15" fontWeight="extrabold" textAnchor="middle">
                      πr²
                    </text>
                    <text x={c.x} y={c.y + 62} fill="#64748b" fontSize="13" fontWeight="bold" textAnchor="middle">
                      {c.label}
                    </text>
                  </g>
                ))}

                {/* Big Plus Signs */}
                <text x="120" y="62" fill="#db2777" fontSize="24" fontWeight="bold" textAnchor="middle">+</text>
                <text x="260" y="125" fill="#db2777" fontSize="28" fontWeight="bold" textAnchor="middle">+</text>
                <text x="120" y="192" fill="#db2777" fontSize="24" fontWeight="bold" textAnchor="middle">+</text>
              </g>

              {/* Total label */}
              <g transform="translate(635, 140)">
                <rect x="-65" y="-50" width="130" height="100" rx="16" fill="#fdf2f8" stroke="#f472b6" strokeWidth="2" />
                <text x="0" y="-15" fill="#9d174d" fontSize="14" fontWeight="bold" textAnchor="middle">Total Luas</text>
                <text x="0" y="12" fill="#be185d" fontSize="20" fontWeight="900" textAnchor="middle">4 × πr²</text>
                <text x="0" y="32" fill="#64748b" fontSize="12" fontWeight="semibold" textAnchor="middle">4 Buah Lingkaran</text>
              </g>
            </svg>
          </div>

          <div className="bg-pink-50 p-5 rounded-2xl border border-pink-200 text-slate-700">
            <h4 className="text-xl font-bold text-pink-900 mb-2 font-heading flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-600" />
              Eksperimen Kulit Jeruk Klasik
            </h4>
            <p className="text-lg leading-relaxed">
              Jika kamu mengupas kulit sebuah jeruk bulat sempurna secara rapi, lalu menjiplak lingkar tengah jeruk (lingkaran besar) pada kertas sebanyak 4 kali, maka potongan seluruh kulit jeruk tersebut akan tepat memenuhi keempat lingkaran tersebut! Inilah sebabnya mengapa rumus luas permukaan bola memiliki angka pengali <strong>4</strong>:
            </p>
            <p className="text-2xl font-black text-pink-700 mt-2 font-math">
              Luas Permukaan Bola = 4 × (Luas Lingkaran Besar) = 4 × π × r²
            </p>
          </div>
        </div>
      )}

      {/* Tab 2: Cross Section */}
      {activeTab === 'cross-section' && (
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col items-center">
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setIsCrossCut(!isCrossCut)}
                className="flex items-center gap-2 px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition shadow"
              >
                <Scissors className="w-5 h-5" />
                {isCrossCut ? 'Satukan Kembali Bola' : 'Potong Belah Bola di Tengah'}
              </button>
            </div>

            <svg viewBox="0 0 600 280" className="w-full max-w-2xl h-auto select-none">
              {!isCrossCut ? (
                // Intact sphere with cut plane indicator
                <g transform="translate(300, 140)">
                  <circle cx="0" cy="0" r="95" fill="#f472b6" opacity="0.9" />
                  {/* Cutting plane line */}
                  <line x1="-130" y1="0" x2="130" y2="0" stroke="#dc2626" strokeWidth="3" strokeDasharray="8 4" />
                  <circle cx="0" cy="0" r="5" fill="#ffffff" />
                  <text x="0" y="-15" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">
                    Titik Pusat O
                  </text>
                  <text x="0" y="25" fill="#b91c1c" fontSize="15" fontWeight="extrabold" textAnchor="middle">
                    Bidang Irisan Tepat Melalui Pusat
                  </text>
                </g>
              ) : (
                // Hemispheres separated showing circular cross section
                <g transform="translate(300, 140)">
                  {/* Top Hemisphere */}
                  <g transform="translate(0, -35)">
                    <path d="M -90 0 A 90 90 0 0 1 90 0 Z" fill="#ec4899" />
                    <ellipse cx="0" cy="0" rx="90" ry="24" fill="#fb7185" stroke="#be123c" strokeWidth="2.5" />
                    <circle cx="0" cy="0" r="4" fill="#ffffff" />
                    <line x1="0" y1="0" x2="90" y2="0" stroke="#ffffff" strokeWidth="2.5" />
                    <text x="45" y="-8" fill="#ffffff" fontSize="14" fontWeight="bold">r</text>
                  </g>

                  {/* Bottom Hemisphere */}
                  <g transform="translate(0, 45)">
                    <path d="M -90 0 A 90 90 0 0 0 90 0 Z" fill="#ec4899" />
                    <ellipse cx="0" cy="0" rx="90" ry="24" fill="#fda4af" stroke="#be123c" strokeWidth="2.5" />
                    <circle cx="0" cy="0" r="4" fill="#ffffff" />
                    <text x="0" y="6" fill="#9f1239" fontSize="15" fontWeight="extrabold" textAnchor="middle">
                      Penampang Berbentuk Lingkaran (L = πr²)
                    </text>
                  </g>
                </g>
              )}
            </svg>
          </div>

          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 text-slate-700">
            <h4 className="text-xl font-bold text-blue-900 mb-2 font-heading">
              Sifat Irisan Penampang Bola
            </h4>
            <p className="text-lg leading-relaxed">
              Setiap irisan datar pada bola selalu menghasilkan bidang berbentuk <strong>lingkaran</strong>.
              Irisan paling luas terjadi jika bidang pemotong melewati <strong>titik pusat bola</strong>, yang dinamakan
              <strong> Lingkaran Besar (Great Circle)</strong> dengan jari-jari sama persis dengan jari-jari bola (<strong>r</strong>)
              dan luas <strong>L = π × r²</strong>.
            </p>
          </div>
        </div>
      )}

      {/* Tab 3: Sphere vs Cylinder Archimedes Volume */}
      {activeTab === 'cylinder-compare' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50/60 to-pink-50/60 p-6 rounded-2xl border border-slate-200 flex flex-col items-center">
            <svg viewBox="0 0 680 280" className="w-full max-w-3xl h-auto select-none">
              {/* Cylinder containing sphere */}
              <g transform="translate(200, 140)">
                {/* Cylinder bounds */}
                <rect x="-80" y="-90" width="160" height="180" fill="#dbeafe" opacity="0.6" stroke="#2563eb" strokeWidth="2.5" strokeDasharray="4 4" rx="4" />
                <ellipse cx="0" cy="-90" rx="80" ry="20" fill="#bfdbfe" stroke="#2563eb" strokeWidth="2" />
                <ellipse cx="0" cy="90" rx="80" ry="20" fill="#93c5fd" stroke="#2563eb" strokeWidth="2" />

                {/* Sphere inside */}
                <circle cx="0" cy="0" r="80" fill="#ec4899" opacity="0.85" />
                <ellipse cx="0" cy="0" rx="80" ry="20" fill="none" stroke="#fdf2f8" strokeWidth="2" />
                <circle cx="0" cy="0" r="4" fill="#ffffff" />

                {/* Height marker t = 2r */}
                <line x1="95" y1="-90" x2="95" y2="90" stroke="#ea580c" strokeWidth="2.5" />
                <text x="110" y="5" fill="#c2410c" fontSize="16" fontWeight="bold">t = 2r</text>

                {/* Radius marker */}
                <line x1="0" y1="0" x2="80" y2="0" stroke="#ffffff" strokeWidth="2.5" />
                <text x="40" y="-8" fill="#ffffff" fontSize="15" fontWeight="bold">r</text>

                <text x="0" y="130" fill="#1e3a8a" fontSize="16" fontWeight="bold" textAnchor="middle">
                  Bola Pas di Dalam Tabung
                </text>
              </g>

              {/* Mathematical Relationship */}
              <g transform="translate(460, 50)">
                <rect x="-10" y="0" width="220" height="185" rx="16" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                <text x="100" y="30" fill="#1e293b" fontSize="16" fontWeight="extrabold" textAnchor="middle">
                  Hubungan Volume
                </text>
                <text x="10" y="65" fill="#1d4ed8" fontSize="15" fontWeight="bold">
                  V Tabung = π × r² × (2r)
                </text>
                <text x="75" y="88" fill="#1d4ed8" fontSize="15" fontWeight="extrabold">
                  = 2πr³
                </text>
                <line x1="10" y1="102" x2="190" y2="102" stroke="#e2e8f0" strokeWidth="2" />
                <text x="10" y="125" fill="#be185d" fontSize="15" fontWeight="bold">
                  V Bola = ⅔ × V Tabung
                </text>
                <text x="10" y="150" fill="#be185d" fontSize="15" fontWeight="bold">
                  = ⅔ × (2πr³)
                </text>
                <text x="100" y="175" fill="#9d174d" fontSize="18" fontWeight="black" textAnchor="middle">
                  = ⁴⁄₃ × π × r³
                </text>
              </g>
            </svg>
          </div>

          <div className="bg-pink-50 p-5 rounded-2xl border border-pink-200 text-slate-700">
            <h4 className="text-xl font-bold text-pink-900 mb-2 font-heading">
              Karya Terbesar Archimedes
            </h4>
            <p className="text-lg leading-relaxed">
              Archimedes sangat bangga terhadap pembuktian bahwa perbandingan volume dan luas permukaan antara bola dan tabung yang melingkupinya selalu tepat <strong>2 : 3</strong>. Penemuan ini begitu ia cintai sehingga ia berpesan agar batu nisannya dipahat dengan gambar sebuah bola yang berada di dalam sebuah silinder tabung!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
