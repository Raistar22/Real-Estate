import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    // Show success message
    alert('Thank you for your message. We will contact you shortly!');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reach out to our team of experts to discuss your real estate needs or schedule a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-medium text-navy-900 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Inquiry Type*
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  >
                    <option value="">Select an option</option>
                    <option value="buy">Buying Property</option>
                    <option value="sell">Selling Property</option>
                    <option value="rent">Renting Property</option>
                    <option value="investment">Investment Advice</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-medium py-3 px-6 rounded transition-colors flex items-center justify-center"
              >
                Send Message <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-navy-900 rounded-lg shadow-lg p-8 text-white mb-8">
              <h3 className="text-2xl font-medium text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy-700 rounded-full p-3 mr-4">
                    <MapPin size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-gray-300">
                      Downtown Dubai, Sheikh Mohammed bin Rashid Blvd, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-700 rounded-full p-3 mr-4">
                    <Mail size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Address</h4>
                    <p className="text-gray-300">info@luxeestate.ae</p>
                    <p className="text-gray-300">sales@luxeestate.ae</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-700 rounded-full p-3 mr-4">
                    <Phone size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone Number</h4>
                    <p className="text-gray-300">+971 4 123 4567</p>
                    <p className="text-gray-300">+971 50 987 6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-700 rounded-full p-3 mr-4">
                    <Clock size={20} className="text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-64 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3856635/pexels-photo-3856635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Dubai Map"
                className="w-full h-full object-cover"
              />
              {/* A real map integration would go here instead of an image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;