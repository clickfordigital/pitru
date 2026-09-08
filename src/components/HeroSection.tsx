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
    <section id="hero" className="relative pt-1.5 sm:pt-2 pb-2 sm:pb-3 px-2.5 sm:px-5 lg:px-6 max-w-7xl mx-auto">
      {/* Background Decorative Vedic Subtle Accents & Golden Radiant Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-orange-500/10 blur-3xl rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-amber-400/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Main Hero Card Container - Perfectly calibrated to show completely in first view without scrolling */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] border border-amber-300/80 p-3 sm:p-4 lg:p-4.5 xl:p-5 shadow-xl shadow-amber-950/10 overflow-hidden">
        
        {/* Subtle Top & Bottom Metallic Gold Accent Lines */}
        <div className="absolute top-0 inset-x-10 sm:inset-x-24 h-[2px] bg-gradient-to-r from-transparent via-amber-400/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 inset-x-16 sm:inset-x-32 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent pointer-events-none" />

        {/* Sacred Smoothly Rolling Vedic Mandala (Top-Right Background) */}
        <div 
          className="absolute -right-20 -top-20 w-88 sm:w-[26rem] h-88 sm:h-[26rem] pointer-events-none select-none -z-0"
          style={{ animation: 'spin 50s linear infinite' }}
        >
          <svg 
            className="w-full h-full text-amber-600/18" 
            viewBox="0 0 200 200" 
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 4"/>
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="100" cy="100" r="62" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="100" cy="100" r="42" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="100" cy="100" r="22" fill="none" stroke="currentColor" strokeWidth="1.2"/>
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line key={deg} x1="100" y1="8" x2="100" y2="192" stroke="currentColor" strokeWidth="0.8" transform={`rotate(${deg} 100 100)`}/>
            ))}
            {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((deg) => (
              <circle key={deg} cx="100" cy="20" r="3.5" fill="currentColor" transform={`rotate(${deg} 100 100)`}/>
            ))}
          </svg>
        </div>

        {/* Bottom Left Secondary Smoothly Rolling Geometric Yantra */}
        <div 
          className="absolute -left-20 -bottom-20 w-72 sm:w-80 h-72 sm:h-80 pointer-events-none select-none -z-0"
          style={{ animation: 'spin 65s linear infinite reverse' }}
        >
          <svg 
            className="w-full h-full text-amber-600/14" 
            viewBox="0 0 200 200" 
            fill="currentColor"
            aria-hidden="true"
          >
            <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <line key={deg} x1="100" y1="15" x2="100" y2="185" stroke="currentColor" strokeWidth="0.8" transform={`rotate(${deg} 100 100)`}/>
            ))}
            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
              <circle key={deg} cx="100" cy="40" r="3" fill="currentColor" transform={`rotate(${deg} 100 100)`}/>
            ))}
          </svg>
        </div>

        {/* Sacred Ornamental Vedic Corner Accents with Center Bindu */}
        <div className="absolute top-2.5 left-2.5 flex items-center justify-center pointer-events-none">
          <div className="w-5 h-5 border-t-2 border-l-2 border-amber-600/50 rounded-tl" />
          <div className="absolute top-1 left-1 w-1 h-1 bg-amber-600/50 rounded-full" />
        </div>
        <div className="absolute top-2.5 right-2.5 flex items-center justify-center pointer-events-none">
          <div className="w-5 h-5 border-t-2 border-r-2 border-amber-600/50 rounded-tr" />
          <div className="absolute top-1 right-1 w-1 h-1 bg-amber-600/50 rounded-full" />
        </div>
        <div className="absolute bottom-2.5 left-2.5 flex items-center justify-center pointer-events-none">
          <div className="w-5 h-5 border-b-2 border-l-2 border-amber-600/50 rounded-bl" />
          <div className="absolute bottom-1 left-1 w-1 h-1 bg-amber-600/50 rounded-full" />
        </div>
        <div className="absolute bottom-2.5 right-2.5 flex items-center justify-center pointer-events-none">
          <div className="w-5 h-5 border-b-2 border-r-2 border-amber-600/50 rounded-br" />
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-amber-600/50 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
          
          {/* Left Column: Course Value Proposition */}
          <div className="lg:col-span-7 space-y-2 sm:space-y-2.5">
            
            {/* H1 SEO Main Headline */}
            <div>
              <h1 className="font-serif text-lg sm:text-xl lg:text-[1.45rem] xl:text-[1.65rem] font-bold text-gray-900 leading-snug tracking-tight">
                Pitru Paksh Course — Ancestral Karma, Pitru Dosh Nivaran & Shradh Vidhi
              </h1>
            </div>

            {/* Price Row */}
            <div id="pricing" className="flex flex-wrap items-baseline gap-2 py-0">
              <span className="text-gray-400 line-through text-sm sm:text-base font-medium">
                ₹3,000
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-amber-800 tracking-tight font-serif">
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
            <div className="relative rounded-xl p-2.5 bg-white/95 backdrop-blur-xs border border-amber-200/90 shadow-xs space-y-1.5 text-[11px] sm:text-xs overflow-hidden">
              <div className="absolute top-0 inset-x-4 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/70 to-transparent pointer-events-none" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-3">
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
              <div className="pt-1 border-t border-amber-100 flex items-start gap-1.5 text-[10.5px] sm:text-[11px]">
                <span className="font-semibold text-gray-900 min-w-20 shrink-0">Includes:</span>
                <span className="text-gray-700">Downloadable Pind Daan Guidebook (PDF) + Remedial Mantras & Audio</span>
              </div>
            </div>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-1.5 pt-0">
              {[
                'Kundli Diagnosis',
                'Authentic Tarpan Vidhi',
                'Mantra Japa & Daan',
                '100% Shastric Remedies'
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-2 py-0.5 sm:py-1 rounded-md bg-gradient-to-b from-amber-50/90 to-amber-100/50 border border-amber-200/90 text-[10.5px] sm:text-[11px] font-semibold text-amber-950 shadow-2xs hover:border-amber-400/70 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="truncate">{badge}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Row */}
            <div className="pt-0.5 space-y-1.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={onEnrollClick}
                  id="hero-buy-now-btn"
                  className="cursor-pointer group flex-1 max-w-xs rounded-xl bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 p-[1px] shadow-lg shadow-amber-900/20 active:scale-98 transition-all hover:shadow-amber-800/30"
                >
                  <div className="flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-100 font-bold text-xs sm:text-sm uppercase tracking-wider group-hover:from-amber-600 group-hover:to-amber-800 transition-all">
                    <span>BUY NOW • ₹1,500</span>
                    <ArrowRight className="w-4 h-4 text-amber-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={onOpenVideoModal}
                  className="cursor-pointer flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl border border-amber-300 bg-white/85 hover:bg-white text-gray-800 font-semibold text-xs sm:text-sm shadow-xs transition-all"
                >
                  <PlayCircle className="w-4 h-4 text-amber-700" />
                  <span>Curriculum Preview</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-600">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Instant Access • 1 Year Access • 100% Authentic Shastric Content</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instructor & Sacred Book Photo */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[230px] sm:max-w-[260px] lg:max-w-[285px] xl:max-w-[315px]">
              
              {/* Visible Smoothly Rolling Sacred Golden Chakra Halo */}
              <div 
                className="absolute -inset-8 sm:-inset-10 pointer-events-none flex items-center justify-center -z-10"
                style={{ animation: 'spin 35s linear infinite' }}
              >
                <svg 
                  className="w-full h-full text-amber-500/40 drop-shadow-[0_0_12px_rgba(245,158,11,0.35)]" 
                  viewBox="0 0 400 400" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <circle cx="200" cy="200" r="190" strokeWidth="1.5" strokeDasharray="6 6" />
                  <circle cx="200" cy="200" r="175" strokeWidth="1.2" />
                  <circle cx="200" cy="200" r="160" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="200" cy="200" r="142" strokeWidth="1" />
                  {/* 24 Radiant Sunbeam Rays */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24;
                    return (
                      <line
                        key={i}
                        x1="200"
                        y1="12"
                        x2="200"
                        y2="52"
                        strokeWidth="2"
                        strokeLinecap="round"
                        transform={`rotate(${angle} 200 200)`}
                      />
                    );
                  })}
                  {/* 24 Golden Bindus */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const angle = (i * 360) / 24 + 7.5;
                    return (
                      <circle
                        key={i}
                        cx="200"
                        cy="36"
                        r="4"
                        fill="currentColor"
                        stroke="none"
                        transform={`rotate(${angle} 200 200)`}
                      />
                    );
                  })}
                  {/* 12 Sacred Petal Arcs */}
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 360) / 12;
                    return (
                      <path
                        key={i}
                        d="M 182 85 Q 200 52 218 85"
                        strokeWidth="1.8"
                        fill="none"
                        transform={`rotate(${angle} 200 200)`}
                      />
                    );
                  })}
                </svg>
              </div>

              {/* Outer Radiant Sacred Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-amber-500/35 via-yellow-400/30 to-orange-500/30 blur-xl -z-10" />
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400/50 via-yellow-500/40 to-amber-700/50 blur-xs -z-10" />

              {/* Multi-layered Ornate Golden Frame */}
              <div className="relative rounded-2xl p-[3px] bg-gradient-to-b from-amber-300 via-amber-500 to-yellow-700 shadow-2xl shadow-amber-950/25">
                <div className="rounded-[13px] bg-gradient-to-b from-[#1C150C] via-[#100C06] to-[#080502] p-2 sm:p-2.5">
                  {/* Clean Photo of Acharya Ganesh with Pitru Paksh Book */}
                  <div className="relative rounded-xl overflow-hidden aspect-square shadow-inner border border-amber-400/40 group">
                    <img 
                      src="/acharya-ganesh-pitru-paksh.jpg" 
                      alt="Acharya Ganesh with Pitru Paksh Book"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
