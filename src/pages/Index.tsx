
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ComingSoon from '@/components/ComingSoon';
import Newsletter from '@/components/Newsletter';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <ComingSoon />
      <Newsletter />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-orange-400">Ghar-Ka-Khana</h3>
            <p className="text-gray-400">from Neelam's</p>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Neelam Ghar Ka Khana. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Delicious home-cooked meals delivered to your doorstep daily. Taste the love in every bite.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
