import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Video, 
  Globe, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  Users, 
  FileText,
  PlayCircle
} from 'lucide-react';

interface HeroSectionProps {
  onEnrollClick: () => void;
  onOpenVideoModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onEnrollClick, onOpenVideoModal }) => {
  return (
    <section id="hero" className="relative pt-3 sm:pt-4 pb-4 sm:pb-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Vedic Subtle Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-72 bg-amber-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Main Hero Card Container - Perfectly balanced for first-screen viewport */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] border border-amber-300/70 p-4 sm:p-5 lg:p-6 shadow-xl shadow-amber-900/5">
        
        {/* Subtle Ornamental Vedic Corner Accents */}
        <div className="absolute top-2.5 left-2.5 w-5 h-5 border-t-2 border-l-2 border-amber-600/40 rounded-tl pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-5 h-5 border-t-2 border-r-2 border-amber-600/40 rounded-tr pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-5 h-5 border-b-2 border-l-2 border-amber-600/40 rounded-bl pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-5 h-5 border-b-2 border-r-2 border-amber-600/40 rounded-br pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center">
          
          {/* Left Column: Course Value Proposition */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-3.5">
            
            {/* H1 SEO Main Headline */}
            <div className="space-y-1.5">
              <h1 className="font-serif text-xl sm:text-2xl lg:text-[1.85rem] xl:text-[2.15rem] font-bold text-gray-900 leading-tight tracking-tight">
                Pitru Paksh Course — Ancestral Karma, Pitru Dosh Nivaran & Shradh Vidhi
              </h1>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl">
                Dissolve unexplainable life blockages, invoke divine ancestral blessings (<span className="font-semibold text-amber-950">Pitru Ashirwad</span>), and master authentic Shradh, Tarpan, and Pind Daan rituals at home with complete Shastric precision.
              </p>
            </div>

            {/* Price Row */}
            <div id="pricing" className="flex flex-wrap items-baseline gap-2.5 py-0.5">
              <span className="text-gray-400 line-through text-base sm:text-lg font-medium">
                ₹3,000
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-amber-800 tracking-tight font-serif">
                ₹1,500
              </span>
              <span className="bg-gradient-to-r from-red-600 to-amber-600 text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded shadow-xs">
                50% OFF SPECIAL
              </span>
              <span className="text-xs text-gray-600 font-medium">
                • 1-Time Payment
              </span>
            </div>

            {/* Course Specifications Card */}
            <div className="bg-white/90 rounded-xl p-3 border border-amber-200/90 shadow-xs space-y-2 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-3">
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-gray-900 min-w-20">Instructor:</span>
                  <span className="text-gray-700">Acharya Ganesh & Senior Faculty</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-gray-900 min-w-20">Coverage:</span>
                  <span className="text-gray-700">Tarpan, Shradh & Pitru Dosh</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-gray-900 min-w-20">Course Mode:</span>
                  <span className="text-gray-700">Video Lessons + Live Q&A</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="font-semibold text-gray-900 min-w-20">Language:</span>
                  <span className="text-gray-700">Easy Hindi & English</span>
                </div>
              </div>
              <div className="pt-1.5 border-t border-amber-100 flex items-start gap-1.5 text-[11px] sm:text-xs">
                <span className="font-semibold text-gray-900 min-w-20 shrink-0">Includes:</span>
                <span className="text-gray-700">Downloadable Pind Daan Guidebook (PDF) + Remedial Mantras & Audio</span>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-0.5">
              {[
                'Kundli Diagnosis',
                'Authentic Tarpan Vidhi',
                'Mantra Japa & Daan',
                '100% Shastric Remedies'
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-amber-50/80 border border-amber-200/80 text-[11px] font-semibold text-amber-950"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="truncate">{badge}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Row */}
            <div className="pt-1 space-y-2">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={onEnrollClick}
                  id="hero-buy-now-btn"
                  className="cursor-pointer group flex-1 max-w-xs rounded-xl bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 p-[1px] shadow-md shadow-amber-900/15 active:scale-98 transition-transform"
                >
                  <div className="flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-100 font-bold text-sm sm:text-base uppercase tracking-wider group-hover:from-amber-600 group-hover:to-amber-800 transition-all">
                    <span>BUY NOW • ₹1,500</span>
                    <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={onOpenVideoModal}
                  className="cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-amber-300 bg-white/80 hover:bg-white text-gray-800 font-semibold text-xs sm:text-sm transition-all"
                >
                  <PlayCircle className="w-4 h-4 text-amber-700" />
                  <span>Curriculum Preview</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex items-center gap-2 text-[11px] text-gray-600">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant Access • 1 Year Access • 100% Authentic Shastric Content</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instructor & Sacred Book Photo */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[270px] sm:max-w-[310px] lg:max-w-[340px] xl:max-w-[365px]">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-amber-500/25 to-yellow-400/30 blur-lg -z-10" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#18130B] to-[#0A0704] border-2 border-amber-400/60 p-2 shadow-xl">
                {/* Clean Photo of Acharya Ganesh with Pitru Paksh Book */}
                <div className="relative rounded-xl overflow-hidden aspect-square shadow-inner border border-amber-500/40">
                  <img 
                    src="/acharya-ganesh-pitru-paksh.jpg" 
                    alt="Acharya Ganesh with Pitru Paksh Book"
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
