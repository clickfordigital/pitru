import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';

interface FooterProps {
  onEnrollClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onEnrollClick }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0A0D12] text-white border-t border-amber-500/20 pt-10 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 border-b border-gray-800">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[2px] shadow">
                <div className="w-full h-full bg-[#12161F] rounded-full flex items-center justify-center text-amber-400 font-serif font-bold text-lg">
                  ॐ
                </div>
              </div>
              <div>
                <span className="font-serif tracking-widest text-base font-bold text-amber-100 uppercase block leading-none">
                  ACHARYA GANESH
                </span>
                <span className="text-[10px] text-amber-400 tracking-wider font-medium uppercase mt-0.5 block">
                  ACADEMY OF VEDIC ASTROLOGY
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Dedicated to preserving and transmitting authentic Vedic astrological wisdom through practical, scientific, and ethical chart interpretation.
            </p>

            {/* Social Icons (Matches Screenshot F, I, Y, L) */}
            <div className="flex items-center gap-2 pt-2">
              {['F', 'I', 'Y', 'L'].map((s, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 hover:border-amber-400/50 hover:text-amber-400 text-gray-400 flex items-center justify-center font-bold text-xs cursor-pointer transition-colors"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-200 tracking-wider uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#hero" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#curriculum" className="hover:text-amber-400 transition-colors">Curriculum</a></li>
              <li>
                <button
                  onClick={onEnrollClick}
                  className="cursor-pointer inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300"
                >
                  <span>Pitru Paksh Course</span>
                  <span className="bg-amber-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded">
                    ₹1,500
                  </span>
                </button>
              </li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold text-amber-200 tracking-wider uppercase">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li className="hover:text-amber-400 cursor-pointer">Career Astrology</li>
              <li className="hover:text-amber-400 cursor-pointer">Marriage Astrology</li>
              <li className="hover:text-amber-400 cursor-pointer">Business Astrology</li>
              <li className="hover:text-amber-400 cursor-pointer">Vastu Consultation</li>
              <li className="hover:text-amber-400 cursor-pointer">Numerology & Gemstones</li>
            </ul>
          </div>

          {/* Column 4: Contact Us & Newsletter */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-amber-200 tracking-wider uppercase">
              CONTACT US
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+919896043710" className="hover:text-white">+91 98960 43710</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:info@acharyaganesh.com" className="hover:text-white">info@acharyaganesh.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Delhi, India</span>
              </div>
            </div>

            {/* Newsletter Subscription (Matches Screenshot) */}
            <div className="pt-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 mb-2">
                SUBSCRIBE FOR ASTROLOGICAL UPDATES:
              </div>
              <form onSubmit={handleSubscribe} className="flex items-center gap-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="cursor-pointer bg-amber-600 hover:bg-amber-500 text-black px-3 py-2 rounded-lg transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <div className="text-[11px] text-amber-300 mt-1">
                  Thank you! You will receive our free Shradh Muhurta calendar.
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Acharya Ganesh. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
