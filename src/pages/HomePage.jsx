import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import VisionSection from '@/components/sections/VisionSection';
import DronesSection from '@/components/sections/DronesSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TeamSection from '@/components/sections/TeamSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import SwarmAnimation from '@/components/SwarmAnimation';

const HomePage = () => {
  return (
    <div className="relative">
      <SwarmAnimation />
      <HeroSection />
      <div className="section-divider" />
      <VisionSection />
      <div className="section-divider" />
      <DronesSection />
      <div className="section-divider" />
      <AchievementsSection />
      <div className="section-divider" />
      <TeamSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;