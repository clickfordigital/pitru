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
    <section id="hero" className="relative pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background Decorative Vedic Subtle Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-amber-500/5 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Main Hero Card Container - matches screenshot layout */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF5EC] to-[#F5ECE0] border border-amber-300/70 p-6 sm:p-8 lg:p-10 shadow-xl shadow-amber-900/5">
        
        {/* Subtle Ornamental Vedic Corner Accents */}
        <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-600/40 rounded-tl pointer-events-none" />
        <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-600/40 rounded-tr pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-600/40 rounded-bl pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-600/40 rounded-br pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Course Value Proposition (High Quality Score SEO Match) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Badges / Pill Banner */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                PITRU PAKSH SPECIAL MASTERCLASS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-100/80 text-red-900 border border-red-200">
                ⌛ Limited Period Shradh Season Access
              </span>
            </div>

            {/* H1 SEO Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-bold text-gray-900 leading-tight tracking-tight">
                Pitru Paksh Course — Ancestral Karma, Pitru Dosh Nivaran & Shradh Vidhi
              </h1>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl">
                Dissolve unexplainable life blockages, invoke divine ancestral blessings (<span className="font-semibold text-amber-950">Pitru Ashirwad</span>), and master authentic Shradh, Tarpan, and Pind Daan rituals at home with complete Shastric precision.
              </p>
            </div>

            {/* Price Row (Matches Screenshot: ₹3,000 crossed out, ₹1,500 gold, 50% OFF) */}
            <div id="pricing" className="flex flex-wrap items-baseline gap-3 py-1">
              <span className="text-gray-400 line-through text-lg sm:text-xl font-medium">
                ₹3,000
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-amber-800 tracking-tight font-serif">
                ₹1,500
              </span>
              <span className="bg-gradient-to-r from-red-600 to-amber-600 text-white text-xs sm:text-sm font-bold px-2.5 py-0.5 rounded shadow-sm">
                50% OFF SPECIAL
              </span>
              <span className="text-xs sm:text-sm text-gray-600 font-medium">
                • 1-Time Payment
              </span>
            </div>

            {/* Course Specifications Card (Grid from screenshot) */}
            <div className="bg-white/85 rounded-xl p-4 sm:p-5 border border-amber-200/90 shadow-sm space-y-3 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-gray-900 min-w-24">Instructor:</span>
                  <span className="text-gray-700">Acharya Ganesh & Senior Vedic Faculty</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-gray-900 min-w-24">Coverage:</span>
                  <span className="text-gray-700">Tarpan, Shradh Vidhi & Pitru Dosh</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-gray-900 min-w-24">Course Mode:</span>
                  <span className="text-gray-700">Video Lessons + Live Q&A + Calendar</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-gray-900 min-w-24">Language:</span>
                  <span className="text-gray-700">Easy-to-understand Hindi & English</span>
                </div>
              </div>
              <div className="pt-2 border-t border-amber-100 flex items-start gap-2">
                <span className="font-semibold text-gray-900 min-w-24 shrink-0">Includes:</span>
                <span className="text-gray-700">Downloadable Pind Daan & Tarpan Guidebook (PDF) + Remedial Mantras & Audio Pronunciations</span>
              </div>
            </div>

            {/* 4 Feature Badges (Matches screenshot) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              {[
                'Kundli Diagnosis',
                'Authentic Tarpan Vidhi',
                'Mantra Japa & Daan',
                '100% Shastric Remedies'
              ].map((badge, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50/80 border border-amber-200/80 text-[11px] sm:text-xs font-semibold text-amber-950"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span className="truncate">{badge}</span>
                </div>
              ))}
            </div>

            {/* Call to Action Row */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={onEnrollClick}
                  id="hero-buy-now-btn"
                  className="cursor-pointer group flex-1 max-w-sm rounded-xl bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 p-[1px] shadow-lg shadow-amber-900/20 active:scale-98 transition-transform"
                >
                  <div className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-amber-100 font-bold text-base uppercase tracking-wider group-hover:from-amber-600 group-hover:to-amber-800 transition-all">
                    <span>BUY NOW • ₹1,500</span>
                    <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={onOpenVideoModal}
                  className="cursor-pointer flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-amber-300 bg-white/70 hover:bg-white text-gray-800 font-semibold text-sm transition-all"
                >
                  <PlayCircle className="w-4 h-4 text-amber-700" />
                  <span>Watch Curriculum Preview</span>
                </button>
              </div>

              {/* Trust Subtext */}
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant Access • Lifetime Validity • 100% Authentic Shastric Content</span>
              </div>
            </div>

          </div>

          {/* Right Column: Instructor & Book Visual Card (Exact match to screenshot) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-yellow-400/30 blur-lg -z-10" />

              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#18130B] to-[#0A0704] border-2 border-amber-400/60 p-4 shadow-2xl text-center space-y-3">
                
                {/* Visual Representation of Acharya Ganesh holding the Pitru Paksh book */}
                <div className="relative rounded-xl overflow-hidden bg-[#100C07] border border-amber-500/30 aspect-[4/5] flex flex-col items-center justify-end p-4 group">
                  
                  {/* Background Aura / Vedic Halo */}
                  <div className="absolute inset-0 bg-radial-gradient from-amber-500/15 via-transparent to-transparent pointer-events-none" />

                  {/* Instructor Visual Rendering */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full flex flex-col items-center justify-center p-3">
                      
                      {/* Vedic Astrologer Portrait & Book Visual */}
                      <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-amber-600 via-amber-300 to-yellow-500 p-[3px] shadow-lg shadow-amber-500/30 mb-2 relative">
                        <img 
                          src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80" 
                          alt="Acharya Ganesh - Renowned Vedic Astrologer"
                          className="w-full h-full object-cover rounded-full filter saturate-110"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-black shadow">
                          TV GURU
                        </div>
                      </div>

                      {/* Course Book Mockup (पितृ पक्ष) */}
                      <div className="w-52 bg-gradient-to-r from-[#2F1D0A] via-[#432A10] to-[#2F1D0A] border-2 border-amber-400/70 rounded-lg p-3 shadow-xl transform rotate-[-2deg] transition-transform group-hover:rotate-0">
                        <div className="border border-amber-500/40 rounded p-2 text-center bg-black/40">
                          <div className="text-amber-400 font-serif font-bold text-xs tracking-widest uppercase">
                            ACHARYA GANESH
                          </div>
                          <div className="text-xl sm:text-2xl font-serif font-extrabold text-amber-200 my-0.5">
                            पितृ पक्ष
                          </div>
                          <div className="text-[10px] text-amber-300/80 font-medium">
                            Ancestral Karma & Shradh Vidhi Manual
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Rating / Enrollment overlay pill at bottom */}
                  <div className="relative z-10 w-full bg-black/80 backdrop-blur-md border border-amber-500/40 rounded-xl py-2 px-3 flex items-center justify-between text-left">
                    <div>
                      <div className="text-amber-200 font-serif font-bold text-xs">ACHARYA GANESH</div>
                      <div className="text-[10px] text-amber-400/90">Celebrity Vedic Astrologer</div>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-500/20 px-2 py-1 rounded border border-amber-400/30">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-amber-300">4.9/5</span>
                    </div>
                  </div>

                </div>

                {/* Additional Quick Highlights */}
                <div className="grid grid-cols-2 gap-2 text-[11px] text-amber-200/90 pt-1">
                  <div className="bg-amber-950/40 border border-amber-500/20 rounded-lg p-2 text-center">
                    <span className="block font-bold text-amber-300">Garuda Purana</span>
                    <span>100% Shastric Vidhi</span>
                  </div>
                  <div className="bg-amber-950/40 border border-amber-500/20 rounded-lg p-2 text-center">
                    <span className="block font-bold text-amber-300">Complete DIY</span>
                    <span>No Expensive Priests</span>
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
