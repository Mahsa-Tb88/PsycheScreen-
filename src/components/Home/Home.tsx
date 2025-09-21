import AccessibleEffectiveSupport from './AccessibleEffectiveSupport';
import HeroSection from './HeroSection';
import Main from './Main';
import PatinentScreenModal from './PatinentScreenModal';
import { useState } from 'react';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection setIsModalOpen={setIsModalOpen} />

      {/* Main Content */}
      <Main />
      <AccessibleEffectiveSupport />

      {/* Patient Screening Modal */}
      {isModalOpen && <PatinentScreenModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
