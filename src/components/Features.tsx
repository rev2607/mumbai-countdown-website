
import React from 'react';
import { Heart, Truck, Sparkles, Shield, Droplets } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We ensure all our meals are freshly prepared with the highest quality ingredients.",
      color: "text-green-500"
    },
    {
      icon: Heart,
      title: "Sanitized Cooking Practices",
      description: "Our meals are prepared with strict hygiene and sanitization protocols.",
      color: "text-red-500"
    },
    {
      icon: Droplets,
      title: "Quality Oil Used",
      description: "We use only the finest quality oil in all our cooking preparations.",
      color: "text-blue-500"
    },
    {
      icon: Truck,
      title: "Affordable meals at reasonable prices",
      description: "Introductory offer price 59/- only",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
