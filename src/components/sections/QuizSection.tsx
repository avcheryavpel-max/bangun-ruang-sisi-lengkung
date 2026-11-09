import React, { useState, useEffect } from 'react';
import { HOTS_QUIZ_QUESTIONS } from '../../data/curriculumData';
import { QuizProgress, QuizQuestion } from '../../types';
import { QuestionDiagram } from '../diagrams/QuestionDiagram';
import { QuizResultSection } from './QuizResultSection';
import { Volume2, CheckCircle2, XCircle, ChevronRight, ChevronLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { tts } from '../../services/tts';

const LOCAL_STORAGE_KEY = 'misterjo_math_brsl_quiz_progress_v1';

export const QuizSection: React.FC = () => {
  // Load initial progress from localStorage if available
  const [progress, setProgress] = useState<QuizProgress>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Could not read localStorage progress', e);
    }
    return {
      currentIndex: 0,
      selectedAnswers: {},
      checkedQuestions: {},
      isCompleted: false,
      score: 0,
    };
  });

  // Local temporary choice for current question
  const currentQ: QuizQuestion = HOTS_QUIZ_QUESTIONS[progress.currentIndex];
  const isChecked = !!progress.checkedQuestions[currentQ.id];
  const selectedOption = progress.selectedAnswers[currentQ.id];

  // Save to localStorage whenever progress updates
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not save progress to localStorage', e);
    }
  }, [progress]);

  const handleSelectOption = (key: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (isChecked) return; // cannot change after checked
    setProgress((prev) => ({
      ...prev,
      selectedAnswers: {
        ...prev.selectedAnswers,
        [currentQ.id]: key,
      },
    }));
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isChecked) return;

    const isCorrect = selectedOption === currentQ.correctAnswer;
    const addedScore = isCorrect ? 10 : 0; // 10 questions = 100 points

    setProgress((prev) => {
      const newScore = prev.score + addedScore;
      const newChecked = {
        ...prev.checkedQuestions,
        [currentQ.id]: true,
      };

      return {
        ...prev,
        score: newScore,
        checkedQuestions: newChecked,
      };
    });

    // Speak immediate feedback and explanation
    const feedbackSpeech = isCorrect
      ? `Jawaban kamu BENAR! Pilihan ${selectedOption} tepat sekali. Mari dengarkan pembahasan: ${currentQ.explanation.spokenExplanation}`
      : `Jawaban kamu BELUM TEPAT. Kamu memilih opsi ${selectedOption}, sedangkan jawaban yang benar adalah opsi ${currentQ.correctAnswer}. Mari dengarkan pembahasan: ${currentQ.explanation.spokenExplanation}`;

    tts.speak(feedbackSpeech);
  };

  const handleNextQuestion = () => {
    if (progress.currentIndex < HOTS_QUIZ_QUESTIONS.length - 1) {
      setProgress((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
      }));
    } else {
      // Quiz finished
      setProgress((prev) => ({
        ...prev,
        isCompleted: true,
      }));
    }
  };

  const handlePrevQuestion = () => {
    if (progress.currentIndex > 0) {
      setProgress((prev) => ({
        ...prev,
        currentIndex: prev.currentIndex - 1,
      }));
    }
  };

  const handleRestartQuiz = () => {
    const emptyProgress: QuizProgress = {
      currentIndex: 0,
      selectedAnswers: {},
      checkedQuestions: {},
      isCompleted: false,
      score: 0,
    };
    setProgress(emptyProgress);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {}
  };

  const speakQuestionAndOptions = () => {
    const speech = `Soal nomor ${currentQ.id}. ${currentQ.contextTitle}. ${currentQ.story}. Pertanyaan: ${currentQ.spokenQuestion}. ${currentQ.options.map((o) => o.spoken).join(' ')}`;
    tts.speak(speech);
  };

  const speakExplanationOnly = () => {
    tts.speak(currentQ.explanation.spokenExplanation);
  };

  // If completed, show result report screen
  if (progress.isCompleted) {
    const correctCount = Object.keys(progress.checkedQuestions).filter(
      (qId) => progress.selectedAnswers[Number(qId)] === HOTS_QUIZ_QUESTIONS.find((q) => q.id === Number(qId))?.correctAnswer
    ).length;
    const wrongCount = HOTS_QUIZ_QUESTIONS.length - correctCount;

    return (
      <QuizResultSection
        score={progress.score}
        totalQuestions={HOTS_QUIZ_QUESTIONS.length}
        correctCount={correctCount}
        wrongCount={wrongCount}
        onRestart={handleRestartQuiz}
        onReviewQuestion={(qIndex) => {
          setProgress((prev) => ({
            ...prev,
            isCompleted: false,
            currentIndex: qIndex,
          }));
        }}
      />
    );
  }

  const isAnswerCorrect = selectedOption === currentQ.correctAnswer;

  return (
    <div className="space-y-8">
      {/* Quiz Header & Tracker */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 border border-blue-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-pink-100 text-pink-700 font-extrabold rounded-lg text-sm">
              LATIHAN SOAL HOTS
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 font-bold rounded-lg text-sm">
              Tingkat: {currentQ.level}
            </span>
            <span className="px-3 py-1 bg-slate-100 text-slate-700 font-bold rounded-lg text-sm">
              Bangun: {currentQ.solidType}
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
            Soal {currentQ.id} dari {HOTS_QUIZ_QUESTIONS.length}: {currentQ.contextTitle}
          </h2>
        </div>

        {/* Action Controls for IFP */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={speakQuestionAndOptions}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl border border-blue-200 transition active:scale-95 text-base"
          >
            <Volume2 className="w-5 h-5 text-blue-600" />
            Bacakan Soal
          </button>

          <button
            onClick={handleRestartQuiz}
            className="p-2.5 bg-white hover:bg-slate-100 text-slate-600 rounded-xl border border-slate-300 transition"
            title="Ulangi Latihan dari Awal"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Dots Bar */}
      <div className="flex items-center gap-2 overflow-x-auto p-2 bg-slate-100 rounded-2xl">
        {HOTS_QUIZ_QUESTIONS.map((q, idx) => {
          const isQChecked = !!progress.checkedQuestions[q.id];
          const isQCorrect = progress.selectedAnswers[q.id] === q.correctAnswer;
          const isCurrent = progress.currentIndex === idx;

          return (
            <button
              key={q.id}
              onClick={() =>
                setProgress((prev) => ({
                  ...prev,
                  currentIndex: idx,
                }))
              }
              className={`flex-1 min-w-[36px] py-2 rounded-xl font-black text-sm transition flex flex-col items-center justify-center ${
                isCurrent
                  ? 'ring-2 ring-blue-600 shadow-sm bg-white text-blue-700'
                  : isQChecked
                  ? isQCorrect
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-rose-100 text-rose-800'
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
            >
              <span>{q.id}</span>
              {isQChecked && (
                <span className="text-[10px]">
                  {isQCorrect ? '✓' : '✗'}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Main Question Card with Diagram */}
      <div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-md space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question Text */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xl lg:text-2xl text-slate-800 leading-relaxed font-normal whitespace-pre-line">
              {currentQ.story}
            </p>

            <div className="p-4 rounded-2xl bg-blue-50/70 border-l-4 border-blue-600 text-xl font-bold text-blue-950">
              {currentQ.question}
            </div>
          </div>

          {/* Diagram Supporting Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <QuestionDiagram type={currentQ.diagramType} />
          </div>
        </div>

        {/* 5 Multiple Choice Options (A, B, C, D, E) with Large Touch Targets for IFP */}
        <div className="space-y-3 pt-4 border-t border-slate-200">
          <span className="text-sm font-bold text-slate-500 block uppercase tracking-wider">
            Pilihlah salah satu jawaban yang paling tepat:
          </span>

          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOption === opt.key;
              const isCorrectOpt = opt.key === currentQ.correctAnswer;

              let buttonStyle = 'bg-slate-50/90 hover:bg-blue-50/50 border-slate-200 text-slate-800';

              if (isChecked) {
                if (isCorrectOpt) {
                  buttonStyle = 'bg-emerald-100 border-emerald-500 text-emerald-950 ring-2 ring-emerald-400 font-bold';
                } else if (isSelected && !isCorrectOpt) {
                  buttonStyle = 'bg-rose-100 border-rose-500 text-rose-950 ring-2 ring-rose-400 font-bold';
                } else {
                  buttonStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                }
              } else if (isSelected) {
                buttonStyle = 'bg-blue-100 border-blue-500 text-blue-950 ring-2 ring-blue-400 font-bold shadow-sm';
              }

              return (
                <button
                  key={opt.key}
                  onClick={() => handleSelectOption(opt.key)}
                  disabled={isChecked}
                  className={`w-full p-4 lg:p-5 rounded-2xl border-2 transition-all flex items-center justify-between gap-4 text-left ${buttonStyle}`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shrink-0 ${
                        isSelected
                          ? isChecked
                            ? isCorrectOpt
                              ? 'bg-emerald-600 text-white'
                              : 'bg-rose-600 text-white'
                            : 'bg-blue-600 text-white'
                          : 'bg-white border border-slate-300 text-slate-700'
                      }`}
                    >
                      {opt.key}
                    </span>
                    <span className="text-lg lg:text-xl font-medium leading-relaxed">
                      {opt.text}
                    </span>
                  </div>

                  {isChecked && (
                    <div className="shrink-0">
                      {isCorrectOpt && <CheckCircle2 className="w-7 h-7 text-emerald-600" />}
                      {isSelected && !isCorrectOpt && <XCircle className="w-7 h-7 text-rose-600" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Action Button: PERIKSA (Check Answer) */}
        {!isChecked && (
          <div className="pt-4 flex justify-end">
            <button
              onClick={handleCheckAnswer}
              disabled={!selectedOption}
              className={`px-8 py-4 font-black rounded-2xl text-xl shadow-lg transition active:scale-95 font-heading ${
                selectedOption
                  ? 'bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white shadow-blue-500/20'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              PERIKSA JAWABAN
            </button>
          </div>
        )}

        {/* Systematic Explanation Card after checking */}
        {isChecked && (
          <div className="mt-8 pt-6 border-t-2 border-slate-200 space-y-6">
            {/* Status Banner */}
            <div
              className={`p-6 rounded-2xl flex items-center justify-between gap-4 ${
                isAnswerCorrect
                  ? 'bg-emerald-50 border-2 border-emerald-300 text-emerald-950'
                  : 'bg-rose-50 border-2 border-rose-300 text-rose-950'
              }`}
            >
              <div className="flex items-center gap-3">
                {isAnswerCorrect ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                ) : (
                  <XCircle className="w-8 h-8 text-rose-600 shrink-0" />
                )}
                <div>
                  <h4 className="text-2xl font-black font-heading">
                    {isAnswerCorrect ? 'Hebat Sekali! Jawabanmu Tepat' : 'Belum Tepat, Pelajari Pembahasannya!'}
                  </h4>
                  <p className="text-base text-slate-700 mt-1">
                    Kunci Jawaban yang Benar: <strong className="text-emerald-700">Opsi {currentQ.correctAnswer}</strong>
                  </p>
                </div>
              </div>

              <button
                onClick={speakExplanationOnly}
                className="flex items-center gap-2 px-4 py-2 bg-white text-slate-800 font-bold rounded-xl border border-slate-300 shadow-sm text-sm shrink-0"
              >
                <Volume2 className="w-4 h-4 text-pink-600" />
                Dengarkan Pembahasan
              </button>
            </div>

            {/* Explanation Details */}
            <div className="bg-slate-50 p-6 lg:p-8 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-blue-600" />
                <h5 className="text-xl font-bold text-slate-900 font-heading">
                  Pembahasan Sistematis: {currentQ.explanation.concept}
                </h5>
              </div>

              {/* Known Information */}
              <div className="space-y-1 text-base text-slate-700">
                <strong className="block text-slate-900">Data Diketahui:</strong>
                <ul className="list-disc list-inside space-y-1">
                  {currentQ.explanation.known.map((k, i) => (
                    <li key={i}>{k}</li>
                  ))}
                </ul>
              </div>

              {/* Steps */}
              <div className="space-y-2 pt-2">
                <strong className="block text-slate-900 text-base">Langkah Perhitungan Bertahap:</strong>
                {currentQ.explanation.steps.map((st, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 text-lg font-math font-semibold text-blue-900 overflow-x-auto">
                    {st}
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div className="p-4 bg-blue-50/70 rounded-xl border border-blue-200 text-base text-slate-800 leading-relaxed font-medium">
                <strong>Logika Penyelesaian:</strong> {currentQ.explanation.conclusion}
              </div>
            </div>

            {/* Navigation Next Question Button */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={handlePrevQuestion}
                disabled={progress.currentIndex === 0}
                className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl border transition ${
                  progress.currentIndex === 0
                    ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Soal Sebelumnya
              </button>

              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-black rounded-2xl shadow-xl transition active:scale-95 text-xl font-heading"
              >
                <span>
                  {progress.currentIndex < HOTS_QUIZ_QUESTIONS.length - 1
                    ? 'SOAL BERIKUTNYA'
                    : 'LIHAT HASIL LATIHAN'}
                </span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
