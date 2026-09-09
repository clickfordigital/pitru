import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Clock } from 'lucide-react';

interface StickyEnrollBarProps {
  onEnrollClick: () => void;
}

export const StickyEnrollBar: React.FC<StickyEnrollBarProps> = ({ onEnrollClick }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px (past hero)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Quick Enrollment Bar" className="fixed bottom-0 left-0 right-0 z-40 bg-[#120F0B]/95 backdrop-blur-md border-t border-amber-500/40 text-white py-3 px-4 shadow-2xl animate-fadeIn">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: Thumbnail & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-700 to-amber-500 p-0.5 shrink-0 hidden sm:block">
            <div className="w-full h-full bg-black rounded-lg flex items-center justify-center font-serif text-amber-300 font-bold text-sm">
              ॐ
            </div>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-amber-100 truncate">
                Pitru Paksh Masterclass — Acharya Ganesh
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                <Sparkles className="w-3 h-3" /> 50% Off
              </span>
            </div>
            <div className="text-[11px] text-gray-400 truncate">
              Tarpan Vidhi • Pind Daan • Pitru Dosh Nivaran
            </div>
          </div>
        </div>

        {/* Right: Pricing & CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <div className="text-xs text-gray-400 line-through hidden sm:block">₹3,000</div>
            <div className="text-lg sm:text-xl font-serif font-extrabold text-amber-300 leading-none">
              ₹1,500
            </div>
          </div>

          <div className="relative group">
            {/* Ambient Animated Golden Aura Glow */}
            <div 
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 opacity-75 blur-md group-hover:opacity-100 animate-pulse transition duration-500"
              aria-hidden="true"
            />
            
            {/* Button with Sheen and Pulsating Shadow */}
            <button
              onClick={onEnrollClick}
              className="relative cursor-pointer flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-gray-950 font-black text-xs sm:text-sm uppercase tracking-wider active:scale-95 transition-all golden-glow-btn sheen-effect"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-950 shrink-0" />
              <span className="font-extrabold tracking-wide">ENROLL NOW</span>
              <ArrowRight className="w-4 h-4 text-gray-950 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </aside>
  );
};
