import React, { useState } from 'react';
import { Phone, User, Menu, X } from 'lucide-react';
import { AcharyaGaneshLogo } from './AcharyaGaneshLogo';

interface HeaderProps {
  onEnrollClick: () => void;
  onOpenSeoScorecard?: () => void;
  onOpenLoginModal?: (tab?: 'course' | 'client') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onEnrollClick,
  onOpenLoginModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLoginClick = (tab: 'course' | 'client' = 'client') => {
    if (onOpenLoginModal) {
      onOpenLoginModal(tab);
    } else {
      onEnrollClick();
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Video Session', href: '#video-intro' },
    { label: 'About', href: '#whylearn' },
    { label: 'Courses', href: '#curriculum' },
    { label: 'Consultation', href: '#consultation' },
    { label: 'Certificate', href: '#certificate' },
    { label: 'FAQs', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-gray-200">
      {/* Top Tier: Logo on Left, Phone Numbers & Login Buttons on Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-1.5 flex items-center justify-between">
        
        {/* Left: Official Acharya Ganesh Logo */}
        <a href="#hero" className="flex items-center gap-2 group cursor-pointer" aria-label="Acharya Ganesh Home">
          <AcharyaGaneshLogo className="h-9 sm:h-10" />
        </a>

        {/* Right (Desktop): Phone 1, Phone 2, Log in, Course Login */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          
          {/* Phone Number 1 */}
          <a
            href="tel:+917300004325"
            className="flex items-center gap-2 text-gray-900 hover:text-amber-800 transition-colors group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-amber-800 transition-colors">
              <Phone className="w-3 h-3 fill-white" />
            </div>
            <span className="font-bold text-xs xl:text-sm tracking-tight">
              +91 73000-04325
            </span>
          </a>

          {/* Phone Number 2 */}
          <a
            href="tel:+917300004326"
            className="flex items-center gap-2 text-gray-900 hover:text-amber-800 transition-colors group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-sm group-hover:bg-amber-800 transition-colors">
              <Phone className="w-3 h-3 fill-white" />
            </div>
            <span className="font-bold text-xs xl:text-sm tracking-tight">
              +91 73000-04326
            </span>
          </a>

          {/* Log in Button */}
          <button
            type="button"
            onClick={() => handleLoginClick('client')}
            className="cursor-pointer border-2 border-black rounded-full px-3.5 xl:px-4 py-0.5 flex items-center gap-1.5 font-semibold text-xs xl:text-sm text-black hover:bg-black hover:text-white transition-all active:scale-95"
          >
            <User className="w-3.5 h-3.5 fill-current" />
            <span>Log in</span>
          </button>

          {/* Course Login Button */}
          <button
            type="button"
            onClick={() => handleLoginClick('course')}
            className="cursor-pointer border-2 border-black rounded-full px-3.5 xl:px-4 py-0.5 font-semibold text-xs xl:text-sm text-black hover:bg-black hover:text-white transition-all whitespace-nowrap active:scale-95"
          >
            Course Login
          </button>
        </div>

        {/* Right (Tablet / Mobile Controls) */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          {/* Quick Call Button */}
          <a
            href="tel:+917300004325"
            className="flex items-center gap-1.5 text-xs font-bold text-gray-900 bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-full border border-gray-300"
          >
            <Phone className="w-3 h-3 fill-black" />
            <span className="hidden sm:inline">+91 73000-04325</span>
          </a>

          {/* Course Login Mobile */}
          <button
            type="button"
            onClick={() => handleLoginClick('course')}
            className="cursor-pointer border-2 border-black rounded-full px-3 py-1 font-semibold text-xs text-black hover:bg-black hover:text-white transition-all whitespace-nowrap"
          >
            Course Login
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-gray-900 hover:bg-gray-100 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Horizontal Divider Line */}
      <div className="w-full border-b border-gray-200" />

      {/* Bottom Tier: Centered Navigation Links */}
      <div className="hidden lg:block bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-6 xl:gap-8 py-1 sm:py-1.5">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-bold text-gray-900 hover:text-amber-800 text-xs xl:text-[13px] tracking-wide transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-5 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {/* Phone numbers in mobile drawer */}
          <div className="space-y-2 pb-3 border-b border-gray-100">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Help & Admissions</div>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+917300004325"
                className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-amber-800"
              >
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
                  <Phone className="w-3 h-3 fill-white" />
                </div>
                <span>+91 73000-04325</span>
              </a>
              <a
                href="tel:+917300004326"
                className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-amber-800"
              >
                <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
                  <Phone className="w-3 h-3 fill-white" />
                </div>
                <span>+91 73000-04326</span>
              </a>
            </div>
          </div>

          {/* Navigation Links in mobile drawer */}
          <nav className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-bold text-gray-800 hover:bg-amber-50 hover:text-amber-900 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons in mobile drawer */}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLoginClick('client');
              }}
              className="w-full py-2.5 border-2 border-black rounded-full flex items-center justify-center gap-2 font-bold text-sm text-black hover:bg-black hover:text-white transition-all"
            >
              <User className="w-4 h-4 fill-current" />
              <span>Log in to Account</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLoginClick('course');
              }}
              className="w-full py-2.5 bg-black text-white rounded-full font-bold text-sm hover:bg-neutral-800 transition-all shadow"
            >
              Course Portal Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
