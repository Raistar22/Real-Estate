import React from 'react';
import ContactSection from '../components/ContactSection';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navy-900 opacity-90"></div>
          <img 
            src="https://images.pexels.com/photos/36366/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Dubai Skyline" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our team of experts is ready to assist you with all your real estate needs.
            Reach out today to begin your luxury property journey.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Contact;