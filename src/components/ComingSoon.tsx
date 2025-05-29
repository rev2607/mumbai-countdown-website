
import React from 'react';

const ComingSoon = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8">
            <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-3xl">🍛</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Launching Soon in Navi Mumbai
            </h2>
            <p className="text-lg text-gray-600">
              We're working hard to bring you the most authentic home-cooked meals. 
              Our kitchen is being set up with love and care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-500 mb-2">Fresh</div>
              <div className="text-sm text-gray-600">Daily preparation with fresh ingredients</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-500 mb-2">Hygienic</div>
              <div className="text-sm text-gray-600">Sanitized cooking practices</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-orange-500 mb-2">Affordable</div>
              <div className="text-sm text-gray-600">Quality meals at reasonable prices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
