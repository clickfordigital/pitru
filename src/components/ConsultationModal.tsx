import React, { useState } from 'react';
import { X, CheckCircle, PhoneCall, Calendar, Lock, User, Clock } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultType?: 'consultation' | 'team';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ 
  isOpen, 
  onClose,
  defaultType = 'consultation'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('Pitru Dosh / Ancestral Obstacles');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-amber-300 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1C1206] via-[#2A1A07] to-[#1C1206] text-white p-5 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center text-sm font-serif font-bold">
              ॐ
            </span>
            <div>
              <h3 className="font-serif text-base font-bold text-amber-100">
                Personal Astrology Guidance
              </h3>
              <p className="text-[11px] text-amber-300/80">
                Acharya Ganesh Senior Mentorship Desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              Connect with Acharya Ganesh's senior consultation counselors to understand whether your Kundli requires specific Shradh remedies or personal horoscope analysis.
            </p>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alok Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  WhatsApp Number <span className="text-red-500">*</span>
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
                  Primary Life Concern
                </label>
                <select
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 bg-white"
                >
                  <option value="Pitru Dosh / Ancestral Obstacles">Pitru Dosh / Ancestral Obstacles</option>
                  <option value="Career & Financial Blockages">Career & Financial Blockages</option>
                  <option value="Marriage / Progeny Delay">Marriage / Progeny Delay</option>
                  <option value="Home Tarpan Ritual Guidance">Home Tarpan Ritual Guidance</option>
                  <option value="Complete Kundli Consultation">Complete Kundli Consultation</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 flex items-center gap-2 text-xs text-amber-950 font-medium">
              <Lock className="w-3.5 h-3.5 text-amber-800 shrink-0" />
              <span>100% Confidential. Our team contacts you within 30 minutes.</span>
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full py-3 rounded-xl bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs uppercase tracking-wider shadow transition-all"
            >
              Request Callback & Guidance
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-xl font-bold text-gray-900">
              Guidance Request Received
            </h4>
            <p className="text-xs text-gray-600">
              Thank you, <span className="font-bold text-gray-900">{name}</span>. Our senior Vedic counseling coordinator will connect via WhatsApp/call at <span className="font-semibold">{phone}</span> shortly.
            </p>
            <button
              onClick={handleReset}
              className="cursor-pointer w-full py-2.5 rounded-xl bg-amber-800 text-white font-bold text-xs uppercase tracking-wider"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
