import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PlatformShowcase from './components/PlatformShowcase';
import FeatureBlog from './components/FeatureBlog';
import AllInOneSection from './components/AllInOneSection';
import FeatureVideoMonetization from './components/FeatureVideoMonetization';
import PricingSection from './components/PricingSection';

const App: React.FC = () => {
  return (
    <div className="bg-dark-bg min-h-screen text-white selection:bg-brand-500 selection:text-white">
      <Navbar />
      
      {/* 
        Removed specific scroll snap classes to allow for smooth, 
        Apple-style sticky animations powered by Framer Motion 
      */}
      <main className="w-full relative">
        <HeroSection />
        
        {/* 
          Consolidated Section: 
          Combines the Vision/Philosophy text with the Platform Features (Cards).
          Replaces the old TextRevealSection.
        */}
        <PlatformShowcase />
        
        {/* Sticky Blog Features (Detailed Steps) */}
        <FeatureBlog />

        {/* New All-in-One & Media Section */}
        <AllInOneSection />
        
        {/* Video & Money */}
        <FeatureVideoMonetization />
        
        <PricingSection />
        
        {/* Simple Footer */}
        <section className="w-full h-auto bg-black border-t border-dark-border flex flex-col items-center justify-center text-center p-12 md:p-20">
           <div className="mb-8">
              <span className="text-3xl font-bold tracking-tight text-white">AutoAgent</span>
           </div>
           <p className="text-gray-500 text-sm max-w-md mb-12 leading-relaxed">
              서울특별시 강남구 테헤란로 123 • contact@therich.ai.kr<br/>
              © 2024 AutoAgent. All rights reserved.
           </p>
           <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
           </div>
        </section>
      </main>
    </div>
  );
};

export default App;