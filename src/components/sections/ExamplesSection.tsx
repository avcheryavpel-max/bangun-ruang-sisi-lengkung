import React, { useState } from 'react';
import { WORKED_EXAMPLES } from '../../data/curriculumData';
import { ExampleProblem } from '../../types';
import { Volume2, Sparkles, CheckCircle, ChevronRight, HelpCircle, ArrowRight, Lightbulb } from 'lucide-react';
import { tts } from '../../services/tts';

export const ExamplesSection: React.FC = () => {
  const [selectedSolid, setSelectedSolid] = useState<'tabung' | 'bola' | 'kerucut'>('tabung');

  const currentExample = WORKED_EXAMPLES.find((e) => e.solidType === selectedSolid) || WORKED_EXAMPLES[0];

  const speakExample = (example: ExampleProblem) => {
    const textToSpeak = `${example.title}. Soal: ${example.context}. Yang diketahui: ${example.known.map((k) => k.spoken).join(', ')}. Yang ditanyakan: ${example.spokenAsked}. Rumus yang digunakan: ${example.spokenFormulaUsed}. Alasan logika: ${example.logicReason}. Pembahasan bertahap: ${example.steps.map((s) => `${s.title}: ${s.spoken}`).join(' ')} ${example.spokenFinalAnswer}`;
    tts.speak(textToSpeak);
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Chapter Title Card */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-blue-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <span className="px-3.5 py-1.5 bg-blue-100 text-blue-800 font-extrabold rounded-xl text-sm">
            BAB 6 • TELAAH CONTOH SOAL
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 font-heading">
            Contoh Soal Kontekstual & Pembahasan Lengkap
          </h2>
          <p className="text-xl text-slate-600 mt-2">
            Pelajari logika pemilihan rumus, langkah substitusi angka matematis, dan perhitungan bertahap sebelum mengerjakan latihan mandiri.
          </p>
        </div>

        <button
          onClick={() => speakExample(currentExample)}
          className="flex items-center gap-2.5 px-5 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-2xl border border-blue-200 transition active:scale-95 text-base shrink-0"
        >
          <Volume2 className="w-5 h-5 text-blue-600" />
          Dengarkan Contoh & Solusi
        </button>
      </div>

      {/* Solid Selector Tabs */}
      <div className="flex gap-2 p-1.5 bg-slate-100 rounded-2xl">
        <button
          onClick={() => setSelectedSolid('tabung')}
          className={`flex-1 py-3.5 px-4 rounded-xl font-extrabold text-lg transition flex items-center justify-center gap-2 ${
            selectedSolid === 'tabung'
              ? 'bg-blue-600 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="w-3 h-3 rounded-full bg-blue-200"></span>
          Contoh 1: Tabung (Drum Minyak)
        </button>

        <button
          onClick={() => setSelectedSolid('bola')}
          className={`flex-1 py-3.5 px-4 rounded-xl font-extrabold text-lg transition flex items-center justify-center gap-2 ${
            selectedSolid === 'bola'
              ? 'bg-pink-600 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="w-3 h-3 rounded-full bg-pink-200"></span>
          Contoh 2: Bola (Bola Basket)
        </button>

        <button
          onClick={() => setSelectedSolid('kerucut')}
          className={`flex-1 py-3.5 px-4 rounded-xl font-extrabold text-lg transition flex items-center justify-center gap-2 ${
            selectedSolid === 'kerucut'
              ? 'bg-amber-600 text-white shadow-md'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <span className="w-3 h-3 rounded-full bg-amber-200"></span>
          Contoh 3: Kerucut (Nasi Tumpeng)
        </button>
      </div>

      {/* Worked Example Detail Card */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-md space-y-8">
        {/* Title & Context */}
        <div className="space-y-4">
          <h3 className="text-2xl lg:text-3xl font-black text-slate-900 font-heading">
            {currentExample.title}
          </h3>

          <div className="flex flex-col lg:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-50 via-blue-50/30 to-pink-50/20 border border-slate-200">
            {/* SVG Illustration */}
            <div className="w-48 h-40 bg-white rounded-2xl border border-slate-200 flex items-center justify-center p-3 shrink-0 shadow-sm">
              {currentExample.illustrationType === 'drum' && (
                <svg viewBox="0 0 160 140" className="h-full w-auto">
                  <rect x="40" y="25" width="80" height="90" fill="#3b82f6" rx="4" />
                  <ellipse cx="80" cy="25" rx="40" ry="12" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="2" />
                  <ellipse cx="80" cy="115" rx="40" ry="12" fill="#1d4ed8" />
                  <text x="80" y="70" fill="#ffffff" fontSize="13" fontWeight="black" textAnchor="middle">DRUM</text>
                  <text x="80" y="88" fill="#dbeafe" fontSize="11" textAnchor="middle">r=7, t=20</text>
                </svg>
              )}
              {currentExample.illustrationType === 'ball' && (
                <svg viewBox="0 0 160 140" className="h-full w-auto">
                  <circle cx="80" cy="70" r="50" fill="#f97316" stroke="#c2410c" strokeWidth="2.5" />
                  <line x1="80" y1="20" x2="80" y2="120" stroke="#7c2d12" strokeWidth="2" />
                  <line x1="30" y1="70" x2="130" y2="70" stroke="#7c2d12" strokeWidth="2" />
                  <ellipse cx="80" cy="70" rx="35" ry="50" fill="none" stroke="#7c2d12" strokeWidth="2" />
                  <text x="80" y="75" fill="#ffffff" fontSize="12" fontWeight="extrabold" textAnchor="middle">d = 20 cm</text>
                </svg>
              )}
              {currentExample.illustrationType === 'tumpeng' && (
                <svg viewBox="0 0 160 140" className="h-full w-auto">
                  <path d="M 80 15 L 35 110 L 125 110 Z" fill="#eab308" stroke="#a16207" strokeWidth="2.5" />
                  <ellipse cx="80" cy="110" rx="45" ry="14" fill="#fef08a" stroke="#a16207" strokeWidth="2" />
                  <text x="80" y="75" fill="#713f12" fontSize="12" fontWeight="black" textAnchor="middle">TUMPENG</text>
                  <text x="80" y="92" fill="#854d0e" fontSize="10" textAnchor="middle">r=7, t=24</text>
                </svg>
              )}
            </div>

            <p className="text-xl text-slate-800 leading-relaxed font-medium">
              {currentExample.context}
            </p>
          </div>
        </div>

        {/* Known & Asked Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diketahui */}
          <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-3">
            <span className="text-sm font-black uppercase tracking-wider text-blue-700 block">
              1. Informasi yang Diketahui:
            </span>
            <ul className="space-y-2 text-lg text-slate-800">
              {currentExample.known.map((k, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>
                    <strong>{k.label}:</strong> {k.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ditanyakan */}
          <div className="p-6 rounded-2xl bg-pink-50/70 border border-pink-200 space-y-3">
            <span className="text-sm font-black uppercase tracking-wider text-pink-700 block">
              2. Hal yang Ditanyakan:
            </span>
            <div className="text-xl font-bold text-slate-900 leading-relaxed">
              {currentExample.asked}
            </div>
            <div className="pt-2 text-sm text-slate-600">
              Rumus utama: <span className="font-mono font-bold text-pink-700">{currentExample.formulaUsed}</span>
            </div>
          </div>
        </div>

        {/* Logic Reasoning Card */}
        <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-lg font-heading">
            <Lightbulb className="w-6 h-6 text-amber-600" />
            Logika Pemilihan Rumus (Mengapa rumus ini digunakan?)
          </div>
          <p className="text-lg text-slate-800 leading-relaxed">
            {currentExample.logicReason}
          </p>
        </div>

        {/* Step-by-Step Calculation */}
        <div className="space-y-4">
          <h4 className="text-2xl font-black text-slate-900 font-heading">
            Langkah Substitusi Angka & Perhitungan Bertahap:
          </h4>

          <div className="space-y-4">
            {currentExample.steps.map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-xl font-bold text-slate-900 font-heading">{s.title}</span>
                </div>
                <p className="text-lg text-slate-600">{s.detail}</p>
                {/* Big Calculation Box */}
                <div className="p-4 bg-white rounded-xl border border-slate-300 font-math text-xl lg:text-2xl font-black text-blue-900 overflow-x-auto">
                  {s.calculation}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Conclusion Box */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg space-y-2">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-100 block">
            Jawaban Akhir & Satuan
          </span>
          <div className="text-2xl lg:text-3xl font-black font-heading">
            {currentExample.finalAnswer}
          </div>
        </div>
      </div>
    </div>
  );
};
