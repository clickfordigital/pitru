import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Zap, Lock, CreditCard, Sparkles, Award } from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [paymentStep, setPaymentStep] = useState<'form' | 'success'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('success');
  };

  const handleReset = () => {
    setPaymentStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-amber-300 shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-[#1C1206] via-[#2D1B06] to-[#1C1206] text-white p-5 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-sm font-serif font-bold">
              ॐ
            </span>
            <div>
              <h3 className="font-serif text-base font-bold text-amber-100">
                Instant Shradh Masterclass Admission
              </h3>
              <p className="text-[11px] text-amber-300/80">
                Acharya Ganesh Academy of Vedic Astrology
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {paymentStep === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Price & Discount Banner */}
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-500 line-through">Regular: ₹3,000</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-amber-900 font-serif">₹1,500</span>
                  <span className="text-[10px] font-bold bg-amber-600 text-white px-2 py-0.5 rounded">
                    Coupon SHRADH50 Applied
                  </span>
                </div>
              </div>
              <div className="text-right text-[11px] text-gray-600">
                <span className="text-emerald-700 font-bold block">✓ You Save ₹1,500</span>
                <span>Lifetime Access</span>
              </div>
            </div>

            {/* Bonuses Included */}
            <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/60 text-xs space-y-1.5 text-gray-700">
              <span className="font-bold text-amber-950 block text-[11px] uppercase tracking-wider">
                🎁 Exclusive Free Bonuses with Enrollment:
              </span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Downloadable Pind Daan & Tarpan Practical Guidebook PDF (₹1,200 value)</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>High-frequency Pitru Suktam & Gayatri Mantra Audio MP3s</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px]">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>16-Day Kutup Muhurta & Shradh Tithi Calculator</span>
              </div>
            </div>

            {/* Contact Details Inputs */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ramesh@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  City / State
                </label>
                <input
                  type="text"
                  placeholder="e.g. Delhi, Lucknow, Mumbai"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-2 pt-1">
              <label className="block text-xs font-bold text-gray-700">
                Payment Option
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'upi', label: 'UPI / GPay / Paytm' },
                  { id: 'card', label: 'Debit / Credit Card' },
                  { id: 'netbanking', label: 'Net Banking' }
                ].map((pm) => (
                  <button
                    type="button"
                    key={pm.id}
                    onClick={() => setPaymentMethod(pm.id as any)}
                    className={`py-2 px-2 text-xs font-semibold rounded-xl border text-center transition-all ${
                      paymentMethod === pm.id
                        ? 'border-amber-600 bg-amber-50 text-amber-950 ring-1 ring-amber-500'
                        : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pm.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="cursor-pointer w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-600 hover:to-amber-800 text-amber-100 font-bold text-sm uppercase tracking-wider shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4 text-amber-300" />
                <span>PAY SECURELY • ₹1,500</span>
              </button>

              <div className="flex items-center justify-center gap-3 text-[11px] text-gray-500">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 256-Bit SSL Encrypted
                </span>
                <span>•</span>
                <span>Instant Video Access on WhatsApp & Email</span>
              </div>
            </div>
          </form>
        ) : (
          /* Enrollment Success State */
          <div className="p-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-2xl font-bold text-gray-900">
                Jai Shri Krishna! Enrollment Successful
              </h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Welcome to the Pitru Paksh Masterclass, <span className="font-bold text-amber-900">{name || 'Seeker'}</span>!
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-left text-xs space-y-2 text-gray-700">
              <div className="font-bold text-amber-950 uppercase tracking-wider text-[11px]">
                Your Access Credentials:
              </div>
              <div>• Access Link & Portal Password sent to: <span className="font-semibold">{email || 'your email'}</span></div>
              <div>• WhatsApp Study Group invitation sent to: <span className="font-semibold">{phone || 'your phone'}</span></div>
              <div>• Downloadable Pind Daan & Tarpan Guidebook unlocked.</div>
            </div>

            <button
              onClick={handleReset}
              className="cursor-pointer w-full py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider"
            >
              Close & Enter Learning Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
