import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award, Menu, X, BarChart3, PhoneCall } from 'lucide-react';

interface HeaderProps {
  onEnrollClick: () => void;
  onOpenSeoDrawer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onEnrollClick, onOpenSeoDrawer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full shadow-md backdrop-blur-md">
      {/* Top Notification / Urgency Bar for Google Ads Conversion */}
      <div className="bg-gradient-to-r from-[#1c1306] via-[#2d1b06] to-[#1c1306] text-amber-200 border-b border-amber-500/20 py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-400/30 text-xs animate-pulse">
              <Sparkles className="w-3 h-3 text-amber-400" /> Shradh Season Offer
            </span>
            <span className="text-amber-100 hidden sm:inline">
              Flat 50% Off + Free Downloadable Pind Daan & Tarpan Guidebook (Worth ₹1,200)
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-1 text-amber-200 bg-black/40 px-2 py-1 rounded border border-amber-500/30">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Offer Ends in:</span>
              <span className="font-mono font-bold text-amber-300">
                {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
            <button 
              onClick={onOpenSeoDrawer}
              className="hidden lg:flex items-center gap-1 text-amber-400 hover:text-amber-300 underline text-xs font-semibold cursor-pointer"
              title="Inspect Google Ads Quality Score, PPC Keywords & Schema"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>SEO & Ad Score (100/100)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-[#0C0F14] text-white border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo - Acharya Ganesh */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[2px] shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-[#12161F] rounded-full flex items-center justify-center text-amber-400 font-serif font-bold text-xl border border-amber-400/40">
                ॐ
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-base sm:text-lg font-bold text-amber-100 group-hover:text-amber-300 transition-colors uppercase leading-none">
                ACHARYA GANESH
              </span>
              <span className="text-[10px] sm:text-xs text-amber-400 tracking-wider font-medium uppercase mt-0.5">
                ACADEMY OF VEDIC ASTROLOGY
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-gray-300">
            <a href="#hero" className="hover:text-amber-300 transition-colors">Home</a>
            <a href="#curriculum" className="hover:text-amber-300 transition-colors">Curriculum</a>
            <a href="#pricing" className="inline-flex items-center gap-1.5 text-amber-300 font-semibold hover:text-amber-200 transition-colors">
              <span>Pitru Paksh Course</span>
              <span className="bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                ₹1,500
              </span>
            </a>
            <a href="#testimonials" className="hover:text-amber-300 transition-colors">Testimonials</a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">FAQ</a>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSeoDrawer}
              className="hidden sm:flex lg:hidden items-center gap-1 px-3 py-2 text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-500/30 rounded-lg hover:bg-amber-900/50"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>SEO Audit</span>
            </button>

            <button
              onClick={onEnrollClick}
              id="header-enroll-btn"
              className="cursor-pointer relative group overflow-hidden rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C59B27] p-[1px] shadow-lg shadow-amber-500/20 active:scale-95 transition-all duration-200"
            >
              <span className="flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-gray-950 font-bold text-xs sm:text-sm tracking-wider uppercase group-hover:brightness-110 transition-all">
                <span>ENROLL NOW</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#12161f] border-b border-amber-500/30 px-4 py-5 space-y-4">
            <a 
              href="#hero" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-amber-400 font-medium py-1"
            >
              Home
            </a>
            <a 
              href="#curriculum" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-amber-400 font-medium py-1"
            >
              Curriculum
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-amber-300 font-semibold py-1"
            >
              <span>Pitru Paksh Masterclass</span>
              <span className="bg-amber-500 text-black text-xs font-bold px-2 py-0.5 rounded-full">₹1,500</span>
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-amber-400 font-medium py-1"
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-200 hover:text-amber-400 font-medium py-1"
            >
              FAQ
            </a>
            <div className="pt-2 border-t border-amber-500/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSeoDrawer();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-amber-300 bg-amber-950/40 border border-amber-500/30 rounded-lg"
              >
                <BarChart3 className="w-4 h-4" />
                <span>View Google Ads & SEO Scorecard</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnrollClick();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold uppercase tracking-wider text-sm shadow-md"
              >
                Enroll Now • ₹1,500 Only
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
