import React, { useState } from 'react';
import { SectionId } from '../types';
import { BookOpen, GraduationCap, Maximize2, Minimize2, Type, Award, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  fontSizeLevel: 'normal' | 'large' | 'xlarge';
  onChangeFontSize: (level: 'normal' | 'large' | 'xlarge') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onSelectSection,
  fontSizeLevel,
  onChangeFontSize,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const navItems: { id: SectionId; label: string; number: string }[] = [
    { id: 'pembuka', label: 'Pembuka', number: '0' },
    { id: 'pengenalan', label: 'Pengenalan', number: '1' },
    { id: 'tabung', label: 'Tabung', number: '2' },
    { id: 'bola', label: 'Bola', number: '3' },
    { id: 'kerucut', label: 'Kerucut', number: '4' },
    { id: 'ringkasan', label: 'Tabel Rumus', number: '5' },
    { id: 'contoh-soal', label: 'Contoh Soal', number: '6' },
    { id: 'latihan-hots', label: 'Latihan HOTS (10 Soal)', number: '7' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-blue-100/80 shadow-sm no-print">
      {/* Top Banner with Teacher Identity & System Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4">
        {/* App Title & Teacher Branding */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-pink-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                BANGUN RUANG SISI LENGKUNG
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-pink-100 text-pink-700 border border-pink-200">
                <GraduationCap className="w-3.5 h-3.5 text-pink-600" />
                MISTER JO
              </span>
            </div>
            <p className="text-xs text-slate-500 hidden sm:block">
              Materi Ajar Matematika Interaktif • Tabung • Bola • Kerucut
            </p>
          </div>
        </div>

        {/* Right Controls: Font Sizer & Fullscreen for IFP */}
        <div className="flex items-center gap-2">
          {/* Font Size Selector */}
          <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 text-xs font-bold">
            <span className="px-2 text-slate-400 hidden md:inline flex items-center gap-1">
              <Type className="w-3.5 h-3.5" /> Teks:
            </span>
            <button
              onClick={() => onChangeFontSize('normal')}
              className={`px-2.5 py-1 rounded-lg transition ${
                fontSizeLevel === 'normal' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600'
              }`}
              title="Ukuran Tulisan Standar (22px)"
            >
              Sedang
            </button>
            <button
              onClick={() => onChangeFontSize('large')}
              className={`px-2.5 py-1 rounded-lg transition ${
                fontSizeLevel === 'large' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600'
              }`}
              title="Ukuran Tulisan Besar IFP (24px)"
            >
              Besar
            </button>
            <button
              onClick={() => onChangeFontSize('xlarge')}
              className={`px-2.5 py-1 rounded-lg transition ${
                fontSizeLevel === 'xlarge' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600'
              }`}
              title="Ukuran Tulisan Ekstra Besar IFP (26px)"
            >
              XL
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 transition"
            title="Tampilan Penuh (Fullscreen Layar Panel)"
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Chapter Navigation Tabs (Horizontal Scrollable for IFP & Desktops) */}
      <div className="border-t border-slate-100 bg-slate-50/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-sm md:text-base font-bold whitespace-nowrap transition flex items-center gap-2 shrink-0 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                      : 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/60'
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-md flex items-center justify-center text-xs font-black ${
                      isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.number}
                  </span>
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
