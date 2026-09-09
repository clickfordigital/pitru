import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Calendar, CheckCircle2 } from 'lucide-react';

interface FinalCtaBannerProps {
  onEnrollClick: () => void;
  onConsultationClick: () => void;
}

export const FinalCtaBanner: React.FC<FinalCtaBannerProps> = ({ 
  onEnrollClick, 
  onConsultationClick 
}) => {
  return (
    <section 
      id="sacred-journey"
      className="w-full relative overflow-hidden bg-gradient-to-r from-[#EED5B3] via-[#F4E1C6] to-[#E3C59D] border-y-2 border-amber-400/90 py-7 sm:py-9 lg:py-11 shadow-xl my-4 sm:my-6"
    >
      {/* Edge-to-Edge Golden Shimmer Accent Lines Touching Left to Right */}
      <div className="absolute top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-transparent via-amber-500 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-600/70 to-transparent pointer-events-none" />

      {/* Subtle Om Watermark in Background */}
      <div className="absolute -right-6 -bottom-10 text-amber-900/10 font-serif text-[220px] select-none pointer-events-none font-bold leading-none">
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: High-Conversion Vedic Copy & Actions (Sized to match image) */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-900/10 text-amber-950 border border-amber-900/20 shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-800" />
              <span className="tracking-wide">SPECIAL SHRADH SEASON ADMISSION OPEN</span>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-gray-950 leading-tight tracking-tight">
                Start Your Sacred Journey with <span className="text-amber-900">Acharya Ganesh</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-800 max-w-xl leading-relaxed">
                Clear ancestral debts, bring divine peace to your departed elders, and unlock generational harmony. Get instant 1-year access to the complete 20-part Pitru Paksh video masterclass, step-by-step PDF manuals, and Vedic remedy guides.
              </p>
            </div>

            {/* Price Reminder & Savings Banner */}
            <div className="flex flex-wrap items-baseline gap-3 pt-1">
              <span className="text-gray-500 line-through text-sm sm:text-base font-medium">₹3,000</span>
              <span className="text-3xl sm:text-4xl font-extrabold font-serif text-amber-950">₹1,500</span>
              <span className="bg-gradient-to-r from-red-600 to-amber-700 text-white text-xs font-bold px-3 py-0.5 rounded shadow-xs">
                SAVE 50% TODAY
              </span>
              <span className="text-xs text-amber-900 font-semibold">
                • Inclusive of all materials & certificate
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1.5">
              <button
                onClick={onEnrollClick}
                id="final-enroll-now-btn"
                className="cursor-pointer flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl bg-amber-900 hover:bg-black text-amber-100 font-bold text-sm sm:text-base tracking-wider uppercase shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"
              >
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={onConsultationClick}
                id="final-consultation-btn"
                className="cursor-pointer flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white/90 hover:bg-white text-gray-950 font-bold text-sm sm:text-base border-2 border-amber-900/30 shadow-xs hover:shadow-md transition-all duration-200"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-amber-800" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Shastric Trust Guarantees */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-2 text-xs sm:text-sm text-gray-800 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                <span>100% Shastric Authenticity</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0" />
                <span>1 Year Video Access</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-amber-800 shrink-0" />
                <span>Verifiable Certificate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Astrologer Portrait - Exactly Sized with the Section */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] aspect-square rounded-2xl overflow-hidden border-2 border-amber-500 shadow-xl shadow-amber-950/20 bg-stone-950 group shrink-0">
              <img
                src="/acharya-ganesh-pitru-paksh.jpg"
                alt="Astro Vastu Expert Hanish Bagga - Acharya Ganesh"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3.5 inset-x-3.5 text-white pointer-events-none space-y-0.5">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Lead Astrologer</span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-tight">
                  Mentor Hanish Bagga
                </h3>
                <p className="text-xs text-amber-200/90 font-medium">
                  Founder, Acharya Ganesh • 17+ Yrs Experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
