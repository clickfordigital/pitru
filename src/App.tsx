import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { CurriculumTable } from './components/CurriculumTable';
import { WhyLearnSection } from './components/WhyLearnSection';
import { LearningJourney } from './components/LearningJourney';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ConsultationSection } from './components/ConsultationSection';
import { CertificateSection } from './components/CertificateSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaBanner } from './components/FinalCtaBanner';

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

        {/* 5. Why Learn From Acharya Ganesh & YouTube Video Section */}
        <WhyLearnSection 
          onOpenVideoModal={handleVideoClick}
        />

        {/* 6. Course Deliverables Flow */}
        <LearningJourney />

        {/* 7. Student Testimonials */}
        <TestimonialsSection />

        {/* 8. Dedicated Consultation Section with Acharya Ganesh (Moved Further Down) */}
        <ConsultationSection 
          onConsultationClick={handleConsultationClick}
          onTalkToTeamClick={handleConsultationClick}
        />

        {/* 9. Official Certificate of Participation */}
        <CertificateSection onEnrollClick={handleEnrollClick} />

        {/* 10. Searchable FAQ Accordion */}
        <FaqSection />

        {/* 10. Final High-Conversion Golden CTA Banner */}
        <FinalCtaBanner 
          onEnrollClick={handleEnrollClick}
          onConsultationClick={handleConsultationClick}
        />
      </main>

      {/* Floating Sticky Bottom Bar on Scroll */}
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
