import React from 'react';
import { ArrowRight, Quote, ShieldCheck, Clock, Sparkles } from 'lucide-react';

interface FinalCtaBannerProps {
  onEnrollClick: () => void;
  onConsultationClick: () => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ 
  onEnrollClick, 
  onConsultationClick 
}) => {
  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#EED5B3] via-[#F4E1C6] to-[#E3C59D] border border-amber-400/80 p-6 sm:p-9 lg:p-10 shadow-xl">
        
        {/* Subtle Om watermarks in background */}
        <div className="absolute -right-6 -bottom-8 text-amber-900/10 font-serif text-[180px] select-none pointer-events-none font-bold">
          ॐ
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Main Conversion CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-900/10 text-amber-950 border border-amber-900/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-800" />
              SPECIAL SHRADH SEASON ADMISSION OPEN
            </div>

            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 leading-tight">
                Start Your Sacred Journey with <br />
                <span className="text-amber-900">Acharya Ganesh</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-800 max-w-lg leading-relaxed">
                Clear ancestral debts, bring peace to your departed elders, and unlock generational harmony. Get instant 1 year access to the complete Pitru Paksh video course & guidebooks.
              </p>
            </div>

            {/* Price reminder */}
            <div className="flex items-center gap-3 text-sm">
              <span className="text-gray-500 line-through text-lg">₹3,000</span>
              <span className="text-3xl font-extrabold font-serif text-amber-950">₹1,500</span>
              <span className="bg-amber-900 text-amber-100 text-xs font-bold px-2.5 py-0.5 rounded">
                SAVE 50% TODAY
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onEnrollClick}
                className="cursor-pointer flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-900 hover:bg-black text-amber-100 font-bold text-sm tracking-wider uppercase shadow-lg transition-all active:scale-95"
              >
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onConsultationClick}
                className="cursor-pointer flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/80 hover:bg-white text-gray-900 font-semibold text-sm border border-amber-900/30 shadow-sm transition-all"
              >
                <span>Book Consultation</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-900 shrink-0" />
              <span>100% Shastric Authenticity • 1 Year Video Access • Verifiable Certificate</span>
            </div>
          </div>

          {/* Right Column: Quote Card (Matches Screenshot) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white/50 backdrop-blur-sm border border-amber-900/20 rounded-2xl p-6 sm:p-8 relative shadow-sm">
              <Quote className="w-8 h-8 text-amber-900/30 absolute top-4 right-4" />
              <p className="text-sm sm:text-base italic text-amber-950 font-serif leading-relaxed mb-4">
                "The ancestors are not lost in the void; they reside within your blood and lineage. Honoring them is honoring your own roots and future."
              </p>
              <div className="text-xs font-serif font-bold text-amber-900 uppercase tracking-wider">
                — ACHARYA GANESH
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
