
import React from 'react';
import { Heart, Truck, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Home Style Cooking",
      description: "Our meals are prepared with love and care, just like you would make at home.",
      color: "text-green-500"
    },
    {
      icon: Truck,
      title: "Free Home Delivery",
      description: "We provide free Home Delivery within CBD Belapur Sector 11 to 15, 19 to 23, 29 to 31.",
      color: "text-orange-500"
    },
    {
      icon: Sparkles,
      title: "Guaranteed Fresh Food",
      description: "We ensure that all our meals are freshly prepared and delivered to you.",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Neelam's Ghar-Ka-Khana?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another food delivery service. We bring home-cooked meals made with 
            love and care directly to your doorstep.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <IconComponent className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
