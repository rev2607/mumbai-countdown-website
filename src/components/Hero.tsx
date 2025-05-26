
import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 py-20 px-4 overflow-hidden">
      {/* Background decorative circles */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-orange-300/20 rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-400/20 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/354b9008-2638-45cf-b01b-2b0ff8ede7aa.png" 
            alt="Ghar-Ka-Khana Neelam's" 
            className="mx-auto mb-4 max-w-md w-full h-auto"
          />
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
      </div>
    </section>
  );
};

export default Hero;
