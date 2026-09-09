import React, { useState } from 'react';
import { X, Lock, Mail, Phone, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { AcharyaGaneshLogo } from './AcharyaGaneshLogo';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'course' | 'client';
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'course'
}) => {
  const [activeTab, setActiveTab] = useState<'course' | 'client'>(defaultTab);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-4 text-center bg-[#FAF7F2] border-b border-amber-100">
          <div className="flex justify-center mb-2">
            <AcharyaGaneshLogo className="h-20" />
          </div>
          <h3 className="font-serif text-xl font-bold text-gray-900 mt-1">
            {activeTab === 'course' ? 'Course Portal Login' : 'Student & Client Login'}
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            {activeTab === 'course' 
              ? 'Access your enrolled Pitru Paksh lessons, notes & recordings' 
              : 'View your Kundli reports, appointments & Vedic consultations'}
          </p>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 p-1 mt-4 bg-white rounded-xl border border-gray-200 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab('course')}
              className={`cursor-pointer py-2 rounded-lg transition-all ${
                activeTab === 'course'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Course Portal
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('client')}
              className={`cursor-pointer py-2 rounded-lg transition-all ${
                activeTab === 'client'
                  ? 'bg-amber-900 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Account Login
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-gray-900 text-base">Logging into Portal...</h4>
              <p className="text-xs text-gray-500">
                Welcome back! Redirecting you to your Acharya Ganesh student dashboard.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Mobile Number / Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="e.g. 73000-04325 or email@domain.com"
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Password / Access PIN
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('OTP sent to your registered mobile number.'); }} className="text-xs text-amber-800 hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password or OTP"
                    className="w-full pl-9 pr-3 py-2.5 bg-gray-50 border border-gray-300 rounded-xl text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-800"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-800 focus:ring-amber-800" />
                  <span>Remember my device</span>
                </label>
                <span className="text-gray-400">256-Bit SSL Encrypted</span>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full py-3 bg-black hover:bg-neutral-800 text-white font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-2"
              >
                <span>{activeTab === 'course' ? 'Access Course Portal' : 'Log in to Account'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <p className="text-xs text-gray-500">
                  New to Acharya Ganesh?{' '}
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      const enrollBtn = document.getElementById('enroll-now-btn');
                      enrollBtn?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-amber-900 font-bold hover:underline"
                  >
                    Enroll in Pitru Paksh Course
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
