
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
              Coming Soon to<br />
              Mumbai, Maharashtra
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">
              +91 XXX-XXX-XXXX<br />
              (Available Soon)
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">
              info@gharkakhana.com<br />
              (Coming Soon)
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Business Hours</h3>
            <p className="text-gray-600 text-sm">
              Mon - Sat: 11AM - 9PM<br />
              (When We Launch)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
