import React from 'react';
import { SectionId } from '../../types';
import { TEACHER_INFO } from '../../data/curriculumData';
import { ThreeCanvas } from '../ThreeCanvas';
import { Play, Volume2, Sparkles, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import { tts } from '../../services/tts';

interface HeroSectionProps {
  onStartLearning: () => void;
  onNavigate: (section: SectionId) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStartLearning, onNavigate }) => {
  const handleSpeakWelcome = () => {
    tts.speak(
      `${TEACHER_INFO.welcomeSpeech} Mari kita mulai perjalanan belajar geometri bangun ruang sisi lengkung hari ini!`,
      `${TEACHER_INFO.welcomeSpeech} Mari kita mulai perjalanan belajar geometri bangun ruang sisi lengkung hari ini!`
    );
  };

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Hero Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/40 to-pink-50/50 rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-xl">
        {/* Soft Decorative Ambient Background Blurs */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-pink-300/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Column */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            {/* Teacher Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur border border-blue-200/80 shadow-sm text-slate-800">
              <div className="w-8 h-8 rounded-xl bg-pink-500 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-xs uppercase tracking-wider text-slate-500 font-bold block">
                  Pengajar Matematika
                </span>
                <span className="text-base font-extrabold text-blue-900 font-heading">
                  {TEACHER_INFO.name}
                </span>
              </div>
            </div>

            {/* Main App Title (36-44px) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight font-heading">
              BANGUN RUANG <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent">
                SISI LENGKUNG
              </span>
            </h1>

            {/* Subtitle (28-32px) */}
            <p className="text-2xl sm:text-3xl font-extrabold text-slate-700 font-heading">
              Mengenal Tabung, Bola, dan Kerucut
            </p>

            <p className="text-xl text-slate-600 leading-relaxed font-normal">
              Buku teks digital interaktif modern untuk <strong>Interactive Flat Panel (IFP)</strong> dan komputer. Dilengkapi visualisasi 3D realistis, animasi pembuktian jaring-jaring rumus, simulator eksperimen, narator suara bahasa Indonesia, serta 10 latihan soal HOTS berbobot tinggi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onStartLearning}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-blue-700 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-500/25 transition transform active:scale-95 text-xl font-heading group"
              >
                <span>MULAI BELAJAR</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleSpeakWelcome}
                className="flex items-center gap-2.5 px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-300/80 shadow-md transition active:scale-95 text-lg"
              >
                <Volume2 className="w-6 h-6 text-pink-600" />
                <span>Dengarkan Sambutan</span>
              </button>
            </div>

            {/* Key Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 text-sm font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Huruf Besar Khusus IFP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Animasi 3D Realistis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-pink-600 shrink-0" />
                <span>10 Soal HOTS Teruji</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stage with Cylinder, Sphere, and Cone */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="w-full max-w-lg">
              <ThreeCanvas mode="hero" height="h-96 lg:h-[430px]" />
            </div>
            <div className="mt-3 flex items-center justify-center gap-4 text-sm font-bold text-slate-500">
              <span className="flex items-center gap-1.5 text-blue-600">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span> Tabung (Silinder)
              </span>
              <span className="flex items-center gap-1.5 text-pink-600">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span> Bola
              </span>
              <span className="flex items-center gap-1.5 text-amber-600">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span> Kerucut
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <div>
        <h3 className="text-2xl font-extrabold text-slate-800 mb-4 font-heading flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-pink-500" />
          Pilihan Bab Pembelajaran
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            onClick={() => onNavigate('pengenalan')}
            className="cursor-pointer group p-6 rounded-3xl bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 shadow-sm transition hover:shadow-md"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Bab 1</span>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-heading group-hover:text-blue-600 transition">
              Pengenalan
            </h4>
            <p className="text-base text-slate-600 mt-2">
              Pengertian, ciri-ciri sisi lengkung, perbandingan dengan sisi datar, dan benda nyata sehari-hari.
            </p>
          </div>

          <div
            onClick={() => onNavigate('tabung')}
            className="cursor-pointer group p-6 rounded-3xl bg-white hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 shadow-sm transition hover:shadow-md"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Bab 2</span>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-heading group-hover:text-blue-600 transition">
              Materi Tabung
            </h4>
            <p className="text-base text-slate-600 mt-2">
              Unsur-unsur lengkap, rumus luas & volume, animasi pembukaan selimut menjadi persegi panjang.
            </p>
          </div>

          <div
            onClick={() => onNavigate('bola')}
            className="cursor-pointer group p-6 rounded-3xl bg-white hover:bg-pink-50/50 border border-slate-200 hover:border-pink-300 shadow-sm transition hover:shadow-md"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600">Bab 3</span>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-heading group-hover:text-pink-600 transition">
              Materi Bola
            </h4>
            <p className="text-base text-slate-600 mt-2">
              Pusat & diameter, penampang irisan lingkaran, pembuktian 4 kali luas lingkaran Archimedes.
            </p>
          </div>

          <div
            onClick={() => onNavigate('kerucut')}
            className="cursor-pointer group p-6 rounded-3xl bg-white hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 shadow-sm transition hover:shadow-md"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Bab 4</span>
            <h4 className="text-2xl font-extrabold text-slate-900 mt-1 font-heading group-hover:text-amber-600 transition">
              Materi Kerucut
            </h4>
            <p className="text-base text-slate-600 mt-2">
              Garis pelukis (s), juring selimut, dan animasi 3 kali penuangan air memenuhi tabung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
