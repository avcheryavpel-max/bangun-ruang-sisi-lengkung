import React, { useState } from 'react';
import { SectionId } from './types';
import { Navbar } from './components/Navbar';
import { AudioNarrationBar } from './components/AudioNarrationBar';
import { HeroSection } from './components/sections/HeroSection';
import { IntroSection } from './components/sections/IntroSection';
import { CylinderSection } from './components/sections/CylinderSection';
import { SphereSection } from './components/sections/SphereSection';
import { ConeSection } from './components/sections/ConeSection';
import { SummaryTableSection } from './components/sections/SummaryTableSection';
import { ExamplesSection } from './components/sections/ExamplesSection';
import { QuizSection } from './components/sections/QuizSection';
import { TEACHER_INFO } from './data/curriculumData';
import { GraduationCap, BookOpen, Heart, Sparkles, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('pembuka');
  const [fontSizeLevel, setFontSizeLevel] = useState<'normal' | 'large' | 'xlarge'>('large');

  // Font size multiplier class for IFP readability
  const fontClass =
    fontSizeLevel === 'xlarge'
      ? 'text-[24px] leading-relaxed'
      : fontSizeLevel === 'large'
      ? 'text-[22px] leading-relaxed'
      : 'text-[20px] leading-relaxed';

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 ${fontClass} flex flex-col font-sans pb-28`}>
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onSelectSection={(sec) => {
          setActiveSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        fontSizeLevel={fontSizeLevel}
        onChangeFontSize={setFontSizeLevel}
      />

      {/* Main Content Stage */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {activeSection === 'pembuka' && (
          <HeroSection
            onStartLearning={() => {
              setActiveSection('pengenalan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={(sec) => {
              setActiveSection(sec);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeSection === 'pengenalan' && <IntroSection />}
        {activeSection === 'tabung' && <CylinderSection />}
        {activeSection === 'bola' && <SphereSection />}
        {activeSection === 'kerucut' && <ConeSection />}
        {activeSection === 'ringkasan' && <SummaryTableSection />}
        {activeSection === 'contoh-soal' && <ExamplesSection />}
        {activeSection === 'latihan-hots' && <QuizSection />}
      </main>

      {/* Modern Textbook Footer */}
      <footer className="mt-16 bg-white border-t border-blue-100 py-8 px-4 text-center text-slate-600 no-print">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center font-bold">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="text-left">
              <span className="font-extrabold text-slate-900 block font-heading text-base">
                Bangun Ruang Sisi Lengkung
              </span>
              <span className="text-xs text-slate-500">
                Pengajar: {TEACHER_INFO.name} • Matematika Digital IFP
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 text-sm font-semibold text-slate-500">
            <span>Dirancang dengan standar buku teks matematika digital modern</span>
            <Sparkles className="w-4 h-4 text-pink-500 inline" />
          </div>

          <div className="text-xs text-slate-400">
            Tabung • Bola • Kerucut &copy; {new Date().getFullYear()}
          </div>
        </div>
      </footer>

      {/* Floating Audio Narration Bar for IFP */}
      <AudioNarrationBar />
    </div>
  );
}
