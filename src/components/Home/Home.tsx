import AccessibleEffectiveSupport from './AccessibleEffectiveSupport';
import HeroSection from './HeroSection';
import PatinentScreenModal from './PatinentScreenModal';
import { useState } from 'react';
import WhyChoosePsych from './WhyChoosePsych';
import HowPsycheScreenWork from './HowPsycheScreenWork';
import AI from './AI';
import Footer from './Footer';
import HealthCare from './HealthCare';
import { Outlet } from 'react-router-dom';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <HeroSection setIsModalOpen={setIsModalOpen} />
      <HowPsycheScreenWork />
      <AccessibleEffectiveSupport />

      {/* <HowAiCallsWork /> */}
      <AI />

      <HealthCare />
      <WhyChoosePsych />
      {/* Patient Screening Modal */}
      <Footer />
      {isModalOpen && <PatinentScreenModal setIsModalOpen={setIsModalOpen} />}
      <Outlet />
    </div>
  );
}
