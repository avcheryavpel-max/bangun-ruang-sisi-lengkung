import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Award, RotateCcw, CheckCircle2, XCircle, ArrowRight, Volume2, Sparkles, BookOpen } from 'lucide-react';
import { tts } from '../../services/tts';

interface QuizResultSectionProps {
  score: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  onRestart: () => void;
  onReviewQuestion: (questionIndex: number) => void;
}

export const QuizResultSection: React.FC<QuizResultSectionProps> = ({
  score,
  totalQuestions,
  correctCount,
  wrongCount,
  onRestart,
  onReviewQuestion,
}) => {
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  let feedbackMessage = '';
  let badgeColor = '';

  if (score >= 90) {
    feedbackMessage =
      'Luar Biasa Sempurna! Kamu telah menguasai penalaran HOTS Bangun Ruang Sisi Lengkung tingkat lanjut dengan sangat mendalam!';
    badgeColor = 'from-emerald-500 to-teal-600';
  } else if (score >= 70) {
    feedbackMessage =
      'Bagus Sekali! Pemahaman konsep dan analisis perhitunganmu sudah kuat. Tingkatkan ketelitian dalam membaca soal cerita kontekstual.';
    badgeColor = 'from-blue-600 to-cyan-600';
  } else if (score >= 50) {
    feedbackMessage =
      'Cukup Baik! Kamu sudah memahami konsep dasar. Buka kembali Bab Ringkasan Rumus dan Telaah Contoh Soal untuk memperkuat logika pemecahan masalah.';
    badgeColor = 'from-amber-500 to-orange-600';
  } else {
    feedbackMessage =
      'Tetap Semangat! Jangan berkecil hati. Pelajari kembali materi jaring-jaring selimut tabung dan kerucut serta rumus bola, lalu coba ulangi latihan kembali.';
    badgeColor = 'from-rose-500 to-pink-600';
  }

  useEffect(() => {
    // Fire confetti for high scores
    if (score >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [score]);

  const speakResult = () => {
    tts.speak(
      `Hasil latihan soal HOTS kamu: Skor akhir adalah ${score} dari 100. Jumlah jawaban benar adalah ${correctCount} soal, dan jumlah jawaban salah adalah ${wrongCount} soal. ${feedbackMessage}`
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Result Hero Card */}
      <div className="bg-white rounded-3xl p-8 lg:p-12 border border-blue-100 shadow-xl text-center space-y-6">
        <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-blue-50 to-pink-50 border border-blue-200">
          <Award className="w-16 h-16 text-pink-600" />
        </div>

        <div>
          <span className="text-sm font-extrabold uppercase tracking-widest text-slate-500 block">
            Hasil Akhir Evaluasi Mandiri
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mt-2 font-heading">
            Laporan Nilai Siswa
          </h2>
        </div>

        {/* Big Score Display */}
        <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-pink-50 border-2 border-blue-200 shadow-inner">
          <span className="text-sm font-bold text-slate-500 block uppercase">Nilai Akhir (Skor)</span>
          <div className="text-6xl sm:text-7xl font-black bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent font-heading mt-1">
            {score}
          </div>
          <span className="text-base font-bold text-slate-500">dari 100 poin maksimal</span>
        </div>

        {/* Statistics Bar */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200">
            <span className="text-xs font-bold text-emerald-700 block uppercase">Jawaban Benar</span>
            <span className="text-3xl font-black text-emerald-800 font-math mt-1 block">
              {correctCount}
            </span>
            <span className="text-xs text-slate-500">soal</span>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
            <span className="text-xs font-bold text-rose-700 block uppercase">Jawaban Salah</span>
            <span className="text-3xl font-black text-rose-800 font-math mt-1 block">
              {wrongCount}
            </span>
            <span className="text-xs text-slate-500">soal</span>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200">
            <span className="text-xs font-bold text-blue-700 block uppercase">Persentase</span>
            <span className="text-3xl font-black text-blue-800 font-math mt-1 block">
              {percentage}%
            </span>
            <span className="text-xs text-slate-500">keberhasilan</span>
          </div>
        </div>

        {/* Pedagogical Feedback */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-2xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 font-bold text-slate-900 text-lg font-heading">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Catatan Guru (Mister Jo):
          </div>
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            {feedbackMessage}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={speakResult}
            className="flex items-center gap-2 px-6 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-2xl transition active:scale-95 text-lg"
          >
            <Volume2 className="w-6 h-6 text-pink-600" />
            Dengarkan Hasil
          </button>

          <button
            onClick={onRestart}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-black rounded-2xl shadow-xl transition active:scale-95 text-lg font-heading"
          >
            <RotateCcw className="w-6 h-6" />
            ULANGI LATIHAN
          </button>
        </div>
      </div>

      {/* Review Questions Grid */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 shadow-md">
        <h3 className="text-2xl font-black text-slate-900 font-heading mb-4">
          Kilas Balik Jawaban 10 Soal HOTS
        </h3>
        <p className="text-base text-slate-600 mb-6">
          Klik tombol nomor di bawah ini untuk meninjau kembali soal beserta pembahasan lengkapnya:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((qNum) => (
            <button
              key={qNum}
              onClick={() => onReviewQuestion(qNum - 1)}
              className="p-3 rounded-2xl border-2 border-slate-200 hover:border-blue-400 bg-slate-50 hover:bg-blue-50 transition text-center group"
            >
              <span className="text-xs font-bold text-slate-500 block">Nomor</span>
              <span className="text-2xl font-black text-slate-800 group-hover:text-blue-700 font-heading">
                {qNum}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
