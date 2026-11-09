import React, { useEffect, useState } from 'react';
import { Play, Pause, Square, Volume2, VolumeX, Sparkles, FastForward } from 'lucide-react';
import { tts, TTSState } from '../services/tts';

export const AudioNarrationBar: React.FC = () => {
  const [ttsState, setTtsState] = useState<TTSState>(tts.getState());

  useEffect(() => {
    const unsubscribe = tts.subscribe((newState) => {
      setTtsState(newState);
    });
    return unsubscribe;
  }, []);

  const handleTogglePlay = () => {
    if (ttsState.isPlaying) {
      if (ttsState.isPaused) {
        tts.resume();
      } else {
        tts.pause();
      }
    } else {
      // Default speech if nothing is speaking
      tts.speak(
        'Selamat datang di aplikasi materi ajar Bangun Ruang Sisi Lengkung bersama Mister Jo. Silakan pilih bab materi atau klik tombol dengarkan pada bagian yang ingin dipelajari.'
      );
    }
  };

  const handleStop = () => {
    tts.stop();
  };

  const cycleRate = () => {
    if (ttsState.rate === 0.95) tts.setRate(1.15);
    else if (ttsState.rate === 1.15) tts.setRate(0.8);
    else tts.setRate(0.95);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl no-print">
      <div className="bg-slate-900/90 backdrop-blur-xl text-white rounded-2xl p-3 sm:px-5 border border-slate-700/80 shadow-2xl flex items-center justify-between gap-3">
        {/* Left: Indicator & Status */}
        <div className="flex items-center gap-3 overflow-hidden">
          <div className={`p-2.5 rounded-xl shrink-0 ${ttsState.isPlaying ? 'bg-pink-600 animate-pulse' : 'bg-slate-800'}`}>
            <Volume2 className="w-5 h-5 text-white" />
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                Narator Suara (id-ID)
              </span>
              {ttsState.isPlaying && !ttsState.isPaused && (
                <span className="flex gap-1 items-center">
                  <span className="w-1.5 h-3 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-4 bg-pink-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-3 bg-pink-400 rounded-full animate-bounce"></span>
                </span>
              )}
            </div>
            <p className="text-sm text-slate-300 truncate max-w-xs md:max-w-md">
              {ttsState.isPlaying
                ? ttsState.currentText
                  ? `Membaca: "${ttsState.currentText.slice(0, 70)}..."`
                  : 'Sedang membacakan materi...'
                : 'Klik tombol dengarkan pada materi atau tekan Putar'}
            </p>
          </div>
        </div>

        {/* Right: Controls for IFP (Large touch targets!) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={cycleRate}
            className="px-2.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl border border-slate-700 transition"
            title="Ubah Kecepatan Suara"
          >
            {ttsState.rate}x
          </button>

          <button
            onClick={handleTogglePlay}
            className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-500 hover:to-pink-500 font-bold text-white rounded-xl shadow-lg transition active:scale-95 text-sm md:text-base"
          >
            {ttsState.isPlaying && !ttsState.isPaused ? (
              <>
                <Pause className="w-5 h-5" />
                <span className="hidden sm:inline">Jeda</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span className="hidden sm:inline">
                  {ttsState.isPaused ? 'Lanjutkan' : 'Putar Suara'}
                </span>
              </>
            )}
          </button>

          <button
            onClick={handleStop}
            disabled={!ttsState.isPlaying}
            className={`p-2.5 rounded-xl border transition ${
              ttsState.isPlaying
                ? 'bg-red-500/20 text-red-400 border-red-500/40 hover:bg-red-500/30'
                : 'bg-slate-800/40 text-slate-600 border-slate-800 cursor-not-allowed'
            }`}
            title="Hentikan Narator"
          >
            <Square className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
