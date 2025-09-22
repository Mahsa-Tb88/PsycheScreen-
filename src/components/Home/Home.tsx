import AccessibleEffectiveSupport from './AccessibleEffectiveSupport';
import HeroSection from './HeroSection';
import PatinentScreenModal from './PatinentScreenModal';
import { useState } from 'react';
import WhyChoosePsych from './WhyChoosePsych';
import HowPsycheScreenWork from './HowPsycheScreenWork';
import HowAiCallsWork from './HowAiCallsWork';
import AI from './AI';
import HealthCare from './HealthCare';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <HeroSection setIsModalOpen={setIsModalOpen} />
      <HowPsycheScreenWork />
      <AccessibleEffectiveSupport />

      <HowAiCallsWork />
      <AI />

      <HealthCare />
      <WhyChoosePsych />
      {/* Patient Screening Modal */}
      {isModalOpen && <PatinentScreenModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
