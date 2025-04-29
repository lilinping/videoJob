import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import VideoSection from '../components/VideoSection';
import HRVideoSection from '../components/HRVideoSection';
import Partners from '../components/Partners';
import DownloadSection from '../components/DownloadSection';
import Testimonials from '../components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <Banner />
      <VideoSection />
      {/* <BuildingVideoSection /> */}
      <HRVideoSection />
      <Partners />
      <DownloadSection />
      <Testimonials />
    </div>
  );
};

export default HomePage;