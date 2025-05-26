
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-4 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-orange-300/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-400/20 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
            Ghar-Ka-Khana
          </h1>
          <p className="text-orange-600 text-lg font-medium tracking-wide">
            Neelam's Restaurant
          </p>
        </div>
        
        <div className="bg-orange-500 text-white px-8 py-4 rounded-full inline-block mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl md:text-3xl font-bold">
            COMING SOON to Mumbai
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Home-Style Meals,{' '}
            <span className="text-orange-500">Delivered</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Experience the authentic taste of home with our tiffin service. Fresh, nutritious, 
            and made with love - just like your mother's cooking. Get ready for delicious 
            homemade meals delivered right to your doorstep in Mumbai.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Notify Me When We Launch
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 text-lg font-semibold rounded-full"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
