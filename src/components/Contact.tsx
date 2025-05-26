
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 text-sm">
              Shop 2, Plot Y5, Sector 19,<br />
              Shahbaaz Gaon, CBD Belapur,<br />
              Navi Mumbai 400614
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">
              +91 8108-325-444
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">
              info@neelamghar.com
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
            <p className="text-gray-600 text-sm">
              Monday to Saturday<br />
              Day Delivery: 11AM - 1:30PM<br />
              Night Delivery: 7PM - 9:30PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
