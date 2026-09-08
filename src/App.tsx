import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { CurriculumTable } from './components/CurriculumTable';
import { WhyLearnSection } from './components/WhyLearnSection';
import { PitruDoshQuiz } from './components/PitruDoshQuiz';
import { LearningJourney } from './components/LearningJourney';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CertificateSection } from './components/CertificateSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';
import { Footer } from './components/Footer';

// Interactive Overlays
import { EnrollmentModal } from './components/EnrollmentModal';
import { SeoAdsInspectorModal } from './components/SeoAdsInspectorModal';
import { VideoPreviewModal } from './components/VideoPreviewModal';
import { ConsultationModal } from './components/ConsultationModal';
import { LoginModal } from './components/LoginModal';
import { StickyEnrollBar } from './components/StickyEnrollBar';

export default function App() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [isSeoOpen, setIsSeoOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [loginModalState, setLoginModalState] = useState<{ isOpen: boolean; tab: 'course' | 'client' }>({
    isOpen: false,
    tab: 'course',
  });

  const handleEnrollClick = () => setIsEnrollOpen(true);
  const handleSeoClick = () => setIsSeoOpen(true);
  const handleVideoClick = () => setIsVideoOpen(true);
  const handleConsultationClick = () => setIsConsultationOpen(true);
  const handleLoginClick = (tab: 'course' | 'client' = 'course') => {
    setLoginModalState({ isOpen: true, tab });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-900 font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* 1. Header with Logo, Phone Numbers, Login Buttons & Centered Navigation */}
      <Header 
        onEnrollClick={handleEnrollClick}
        onOpenSeoScorecard={handleSeoClick}
        onOpenLoginModal={handleLoginClick}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection 
          onEnrollClick={handleEnrollClick}
          onOpenVideoModal={handleVideoClick}
        />

        {/* 3. 5-Column Stats Row */}
        <StatsBar />

        {/* 4. Course Curriculum - 20-Part Syllabus */}
        <CurriculumTable 
          onEnrollClick={handleEnrollClick}
        />

        {/* 5. Why Learn From Acharya Ganesh & Guidance Card */}
        <WhyLearnSection 
          onConsultationClick={handleConsultationClick}
          onTalkToTeamClick={handleConsultationClick}
        />

        {/* 6. Interactive 60-Second Pitru Dosh & Ancestral Rin Assessment Tool */}
        <PitruDoshQuiz 
          onEnrollClick={handleEnrollClick}
        />

        {/* 7. 7-Step Learning Journey Flow */}
        <LearningJourney />

        {/* 8. Student Testimonials */}
        <TestimonialsSection />

        {/* 9. Certificate Preview & FAQ Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
          {/* Certificate Showcase */}
          <CertificateSection onEnrollClick={handleEnrollClick} />

          {/* Searchable FAQ Accordion */}
          <FaqSection />
        </section>

        {/* 12. Final High-Conversion Golden CTA Banner */}
        <FinalCtaBanner 
          onEnrollClick={handleEnrollClick}
          onConsultationClick={handleConsultationClick}
        />
      </main>

      {/* 13. Comprehensive Academy Footer */}
      <Footer onEnrollClick={handleEnrollClick} />

      {/* 14. Floating Sticky Bottom Bar on Scroll */}
      <StickyEnrollBar onEnrollClick={handleEnrollClick} />

      {/* Modals & Popups */}
      <EnrollmentModal 
        isOpen={isEnrollOpen}
        onClose={() => setIsEnrollOpen(false)}
      />

      <SeoAdsInspectorModal 
        isOpen={isSeoOpen}
        onClose={() => setIsSeoOpen(false)}
      />

      <VideoPreviewModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onEnrollClick={handleEnrollClick}
      />

      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <LoginModal 
        isOpen={loginModalState.isOpen}
        onClose={() => setLoginModalState(prev => ({ ...prev, isOpen: false }))}
        defaultTab={loginModalState.tab}
      />

    </div>
  );
}
