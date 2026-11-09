import React, { useState } from 'react';
import { Volume2, Sparkles, TrendingUp, SlidersHorizontal, Calculator } from 'lucide-react';
import { tts } from '../../services/tts';

export const ParameterPlayground: React.FC = () => {
  const [shape, setShape] = useState<'tabung' | 'bola' | 'kerucut'>('tabung');
  const [r, setR] = useState<number>(7);
  const [t, setT] = useState<number>(10);
  const [showDoubleComparison, setShowDoubleComparison] = useState<boolean>(true);

  // Calculations for base values
  const pi = 22 / 7;

  // Cylinder:
  const cylLa = pi * r * r;
  const cylLs = 2 * pi * r * t;
  const cylLp = 2 * cylLa + cylLs;
  const cylV = cylLa * t;

  // Sphere:
  const sphereLp = 4 * pi * r * r;
  const sphereV = (4 / 3) * pi * r * r * r;

  // Cone:
  const coneS = Math.sqrt(r * r + t * t);
  const coneLa = pi * r * r;
  const coneLs = pi * r * coneS;
  const coneLp = coneLa + coneLs;
  const coneV = (1 / 3) * pi * r * r * t;

  // Doubled radius (2r):
  const r2 = r * 2;
  const cylV_double = pi * r2 * r2 * t; // 4x
  const sphereV_double = (4 / 3) * pi * r2 * r2 * r2; // 8x
  const coneV_double = (1 / 3) * pi * r2 * r2 * t; // 4x

  const speakScalingPrinciple = () => {
    let text = '';
    if (shape === 'tabung') {
      text = `Pada tabung, jika jari-jari digandakan menjadi dua kali semula dengan tinggi tetap, maka luas lingkaran alasnya meningkat empat kali lipat, dan volume tabung juga meningkat empat kali lipat dari volume awal.`;
    } else if (shape === 'bola') {
      text = `Pada bola, jika jari-jari digandakan menjadi dua kali semula, luas permukaannya meningkat dua kuadrat yaitu empat kali lipat, sedangkan volumenya meningkat dua pangkat tiga yaitu delapan kali lipat.`;
    } else {
      text = `Pada kerucut, jika jari-jari digandakan menjadi dua kali semula dengan tinggi tetap, volume kerucut meningkat dua kuadrat yaitu empat kali lipat dari semula.`;
    }
    tts.speak(text);
  };

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-8 border border-blue-100 shadow-md">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 font-bold rounded-lg text-sm">
              Eksplorasi Parameter Dinamis
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm">
              Analisis Perubahan Jari-jari
            </span>
          </div>
          <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-800 mt-2 font-heading">
            Simulator Hubungan Skala Ukuran (r & t) terhadap Volume
          </h3>
        </div>

        <button
          onClick={speakScalingPrinciple}
          className="flex items-center gap-2 px-4 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold rounded-xl border border-purple-200 transition active:scale-95 text-base"
        >
          <Volume2 className="w-5 h-5 text-purple-600" />
          Dengarkan Analisis
        </button>
      </div>

      {/* Shape Selector Buttons */}
      <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl mb-6">
        {(['tabung', 'bola', 'kerucut'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setShape(s)}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-base capitalize transition ${
              shape === s ? 'bg-white text-blue-700 shadow-sm border border-blue-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Sliders Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-base font-bold text-slate-700">Jari-jari (r):</label>
            <span className="font-mono text-xl font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
              {r} cm
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="21"
            step="1"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            className="w-full accent-blue-600 h-2.5 bg-blue-100 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1 cm</span>
            <span>7 cm</span>
            <span>14 cm</span>
            <span>21 cm</span>
          </div>
        </div>

        {shape !== 'bola' ? (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-base font-bold text-slate-700">Tinggi (t):</label>
              <span className="font-mono text-xl font-black text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                {t} cm
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="40"
              step="1"
              value={t}
              onChange={(e) => setT(Number(e.target.value))}
              className="w-full accent-amber-600 h-2.5 bg-amber-100 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>5 cm</span>
              <span>20 cm</span>
              <span>40 cm</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center p-4 bg-pink-50/70 rounded-xl border border-pink-200 text-pink-800 text-sm font-semibold">
            Bola tidak memiliki parameter tinggi (t). Seluruh dimensi bola ditentukan oleh jari-jari r saja.
          </div>
        )}
      </div>

      {/* Calculated Results */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {shape === 'tabung' && (
          <>
            <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Luas Alas (La)</span>
              <div className="text-xl lg:text-2xl font-black text-blue-900 mt-1 font-math">
                {cylLa.toFixed(1)} <span className="text-sm font-normal">cm²</span>
              </div>
            </div>
            <div className="bg-blue-50/80 p-4 rounded-2xl border border-blue-200">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Luas Selimut (Ls)</span>
              <div className="text-xl lg:text-2xl font-black text-blue-900 mt-1 font-math">
                {cylLs.toFixed(1)} <span className="text-sm font-normal">cm²</span>
              </div>
            </div>
            <div className="bg-pink-50/80 p-4 rounded-2xl border border-pink-200">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Luas Permukaan (Lp)</span>
              <div className="text-xl lg:text-2xl font-black text-pink-900 mt-1 font-math">
                {cylLp.toFixed(1)} <span className="text-sm font-normal">cm²</span>
              </div>
            </div>
            <div className="bg-cyan-50/80 p-4 rounded-2xl border border-cyan-200">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Volume (V)</span>
              <div className="text-xl lg:text-2xl font-black text-cyan-900 mt-1 font-math">
                {cylV.toFixed(1)} <span className="text-sm font-normal">cm³</span>
              </div>
            </div>
          </>
        )}

        {shape === 'bola' && (
          <>
            <div className="bg-pink-50/80 p-4 rounded-2xl border border-pink-200">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Diameter (d)</span>
              <div className="text-xl lg:text-2xl font-black text-pink-900 mt-1 font-math">
                {r * 2} <span className="text-sm font-normal">cm</span>
              </div>
            </div>
            <div className="bg-pink-50/80 p-4 rounded-2xl border border-pink-200">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Luas Lingkaran Besar</span>
              <div className="text-xl lg:text-2xl font-black text-pink-900 mt-1 font-math">
                {(pi * r * r).toFixed(1)} <span className="text-sm font-normal">cm²</span>
              </div>
            </div>
            <div className="bg-pink-100/80 p-4 rounded-2xl border border-pink-300">
              <span className="text-xs font-bold text-pink-700 uppercase tracking-wider">Luas Permukaan (4πr²)</span>
              <div className="text-xl lg:text-2xl font-black text-pink-900 mt-1 font-math">
                {sphereLp.toFixed(1)} <span className="text-sm font-normal">cm²</span>
              </div>
            </div>
            <div className="bg-purple-50/80 p-4 rounded-2xl border border-purple-200">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Volume (4/3 πr³)</span>
              <div className="text-xl lg:text-2xl font-black text-purple-900 mt-1 font-math">
                {sphereV.toFixed(1)} <span className="text-sm font-normal">cm³</span>
              </div>
            </div>
          </>
        )}

        {shape === 'kerucut' && (
          <>
            <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Garis Pelukis (s)</span>
              <div className="text-xl lg:text-2xl font-black text-amber-900 mt-1 font-math">
                {coneS.toFixed(2)} <span className="text-sm font-normal">cm</span>
              </div>
            </div>
            <div className="bg-amber-50/80 p-4 rounded-2xl border border-amber-200">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Luas Selimut (Ls)</span>
              <div className="text-xl lg:text-2xl font-black text-amber-900 mt-1 font-math">
                {coneLs.toFixed(1)} <span className="text-sm font-normal">cm²</span>
              </div>
            </div>
            <div className="bg-pink-50/80 p-4 rounded-2xl border border-pink-200">
              <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Luas Permukaan (Lp)</span>
              <div className="text-xl lg:text-2xl font-black text-pink-900 mt-1 font-math">
                {coneLp.toFixed(1)} <span className="text-sm font-normal">cm²</span>
              </div>
            </div>
            <div className="bg-cyan-50/80 p-4 rounded-2xl border border-cyan-200">
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-wider">Volume (V)</span>
              <div className="text-xl lg:text-2xl font-black text-cyan-900 mt-1 font-math">
                {coneV.toFixed(1)} <span className="text-sm font-normal">cm³</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Comparison: Doubling Radius (r -> 2r) */}
      <div className="bg-gradient-to-r from-blue-50/80 via-white to-purple-50/80 p-6 rounded-2xl border border-purple-200">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-6 h-6 text-purple-600" />
          <h4 className="text-xl font-bold text-slate-900 font-heading">
            Dampak Penggandaan Jari-jari: Jika r Diperbesar Menjadi 2r ({r} cm → {r2} cm)
          </h4>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200">
            <span className="text-sm font-bold text-slate-500">Kondisi Awal (r = {r} cm)</span>
            <div className="text-xl font-black text-slate-800 mt-1 font-math">
              V₁ = {shape === 'tabung' ? cylV.toFixed(1) : shape === 'bola' ? sphereV.toFixed(1) : coneV.toFixed(1)} cm³
            </div>
            <span className="text-xs text-slate-400">Dasar pembanding = 1×</span>
          </div>

          <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
            <span className="text-sm font-bold text-purple-700">Kondisi Baru (r' = 2r = {r2} cm)</span>
            <div className="text-xl font-black text-purple-900 mt-1 font-math">
              V₂ = {shape === 'tabung' ? cylV_double.toFixed(1) : shape === 'bola' ? sphereV_double.toFixed(1) : coneV_double.toFixed(1)} cm³
            </div>
            <span className="text-sm font-black text-pink-600">
              {shape === 'bola' ? 'Tepat 8× lipat lebih besar! (2³ = 8)' : 'Tepat 4× lipat lebih besar! (2² = 4)'}
            </span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-white/90 rounded-xl border border-purple-100 text-sm text-slate-700 font-medium">
          <strong>Kaidah HOTS Penting:</strong> Karena jari-jari berderajat 2 (kuadrat) pada rumus volume tabung dan kerucut (<span className="font-mono">V ∝ r²</span>), pelipatgandaan jari-jari sebesar <span className="font-mono">k</span> kali akan melipatgandakan volume sebesar <span className="font-mono">k²</span> kali. Sedangkan pada bola (<span className="font-mono">V ∝ r³</span>), pelipatgandaan volume adalah sebesar <span className="font-mono">k³</span> kali.
        </div>
      </div>
    </div>
  );
};
