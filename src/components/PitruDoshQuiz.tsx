import React, { useState } from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';
import { PITRU_DOSH_QUIZ } from '../data/courseData';

interface PitruDoshQuizProps {
  onEnrollClick: () => void;
}

export const PitruDoshQuiz: React.FC<PitruDoshQuizProps> = ({ onEnrollClick }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (points: number) => {
    const updated = [...answers, points];
    setAnswers(updated);
    if (currentStep < PITRU_DOSH_QUIZ.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResults(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getResultAnalysis = () => {
    if (totalScore >= 7) {
      return {
        level: 'High Karmic Indicator (Acute Pitru Rin)',
        color: 'text-red-700 bg-red-50 border-red-200',
        badgeColor: 'bg-red-600',
        message: 'Your responses indicate recurring ancestral blockages commonly linked to 9th house afflictions, unperformed Shradh rites, or generational karmic debt. Performing authentic Tarpan and Sarva Pitru remedies is urgently recommended.',
        recommendation: 'Modules 2, 3, and 5 will give you immediate relief rituals.'
      };
    } else if (totalScore >= 4) {
      return {
        level: 'Moderate Indicator (Transitory Ancestral Need)',
        color: 'text-amber-800 bg-amber-50 border-amber-200',
        badgeColor: 'bg-amber-600',
        message: 'You exhibit noticeable symptoms of unsettled ancestral energies. Simple annual Shradh, Panchbali offerings, and Pitru Gayatri chanting will easily clear these pathways.',
        recommendation: 'Modules 1, 3, and 4 cover the exact domestic rituals you need.'
      };
    } else {
      return {
        level: 'Mild / Harmonious (Preventative Practice)',
        color: 'text-emerald-800 bg-emerald-50 border-emerald-200',
        badgeColor: 'bg-emerald-600',
        message: 'Your ancestral karmic balance appears relatively stable! Learning authentic Shradh Vidhi will help you preserve this ancestral grace (Pitru Ashirwad) and pass blessings onto your children.',
        recommendation: 'Modules 1 and 6 will strengthen your family lineage protection.'
      };
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-white via-[#FCF9F3] to-[#F8F1E5] rounded-3xl p-6 sm:p-10 border border-amber-300/80 shadow-lg relative overflow-hidden">
        
        {/* Glow Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            FREE 60-SECOND KUNDLI DIAGNOSTIC TOOL
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Check If You Have Pitru Dosh Symptoms
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Answer 4 simple questions grounded in Garuda Purana & Parashara principles to assess your ancestral karma status.
          </p>
        </div>

        {!showResults ? (
          <div className="max-w-xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                <span>Question {currentStep + 1} of {PITRU_DOSH_QUIZ.length}</span>
                <span>{Math.round(((currentStep + 1) / PITRU_DOSH_QUIZ.length) * 100)}% Completed</span>
              </div>
              <div className="w-full h-2 bg-amber-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / PITRU_DOSH_QUIZ.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white rounded-2xl p-6 border border-amber-200 shadow-sm space-y-4">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug">
                {PITRU_DOSH_QUIZ[currentStep].question}
              </h3>

              <div className="space-y-3 pt-2">
                {PITRU_DOSH_QUIZ[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(opt.points)}
                    className="cursor-pointer w-full text-left p-3.5 sm:p-4 rounded-xl border border-amber-200/80 hover:border-amber-400 bg-amber-50/30 hover:bg-amber-100/50 transition-all flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-amber-950">
                        {opt.text}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        {opt.description}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-amber-600 opacity-0 group-hover:opacity-100 shrink-0 mt-1 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="max-w-xl mx-auto space-y-6 animate-fadeIn">
            {(() => {
              const res = getResultAnalysis();
              return (
                <div className={`p-6 sm:p-7 rounded-2xl border ${res.color} space-y-4 shadow-sm`}>
                  <div className="flex items-center justify-between">
                    <span className={`text-white text-xs font-bold px-3 py-1 rounded-full ${res.badgeColor}`}>
                      ASSESSMENT RESULT
                    </span>
                    <span className="text-xs font-bold text-gray-700">
                      Score: {totalScore} / 12
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-950">
                    {res.level}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                    {res.message}
                  </p>

                  <div className="p-3 bg-white/80 rounded-xl border border-amber-200 text-xs font-semibold text-amber-950">
                    💡 <span className="font-bold">Course Fit:</span> {res.recommendation}
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                    <button
                      onClick={onEnrollClick}
                      className="cursor-pointer flex-1 py-3 px-5 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider text-center shadow"
                    >
                      Enroll in Pitru Paksh Course (₹1,500)
                    </button>
                    <button
                      onClick={handleReset}
                      className="cursor-pointer flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs border border-gray-300"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

      </div>
    </section>
  );
};
