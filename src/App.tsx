import HeroSection from './components/Home/HeroSection';
import Navbar from './components/Navbar';
import { useState } from 'react';
import PatinentScreenModal from './components/PatinentScreenModal';
import Main from './components/Home/Main';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f7f5ff' }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection setIsModalOpen={setIsModalOpen} />

      {/* Main Content */}
      <Main />

      {/* Patient Screening Modal */}
      {isModalOpen && <PatinentScreenModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}
