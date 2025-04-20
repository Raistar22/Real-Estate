import React, { useState, useEffect } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  location: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Luxury Penthouse',
    subtitle: 'Exclusive Sky-High Living',
    location: 'Downtown Dubai'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Elegant Villa',
    subtitle: 'Beachfront Serenity',
    location: 'Palm Jumeirah'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Modern Apartment',
    subtitle: 'Urban Sophistication',
    location: 'Dubai Marina'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [propertyType, setPropertyType] = useState('buy');
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/50 to-navy-900/70"></div>
            
            {/* Slide Content */}
            <div className="relative z-20 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center md:text-left md:max-w-2xl lg:max-w-3xl">
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-serif font-bold leading-tight mb-4 opacity-0 animate-fade-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
                  {slide.title}
                </h1>
                <p className="text-white/90 text-xl sm:text-2xl md:text-3xl font-light mb-8 opacity-0 animate-fade-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                  {slide.subtitle}
                </p>
                <div className="flex items-center mb-10 opacity-0 animate-fade-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                  <div className="w-10 h-0.5 bg-gold-500 mr-3"></div>
                  <p className="text-gold-500 font-medium">{slide.location}</p>
                </div>
                <div className="opacity-0 animate-fade-slide-up" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
                  <Link 
                    to="/properties" 
                    className="inline-flex items-center px-8 py-4 bg-gold-500 text-navy-900 rounded hover:bg-gold-600 transition-colors text-sm font-medium"
                  >
                    View Property <ChevronRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-gold-500 w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Property Search */}
      <div className="absolute bottom-0 left-0 right-0 z-20 transform translate-y-1/2">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex border-b">
              <button
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  propertyType === 'buy'
                    ? 'text-navy-900 border-b-2 border-gold-500'
                    : 'text-gray-500 hover:text-navy-900'
                }`}
                onClick={() => setPropertyType('buy')}
              >
                Buy
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  propertyType === 'rent'
                    ? 'text-navy-900 border-b-2 border-gold-500'
                    : 'text-gray-500 hover:text-navy-900'
                }`}
                onClick={() => setPropertyType('rent')}
              >
                Rent
              </button>
              <button
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  propertyType === 'offplan'
                    ? 'text-navy-900 border-b-2 border-gold-500'
                    : 'text-gray-500 hover:text-navy-900'
                }`}
                onClick={() => setPropertyType('offplan')}
              >
                Off-Plan
              </button>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    id="location"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                  >
                    <option value="">All Locations</option>
                    <option value="downtown-dubai">Downtown Dubai</option>
                    <option value="palm-jumeirah">Palm Jumeirah</option>
                    <option value="dubai-marina">Dubai Marina</option>
                    <option value="jumeirah">Jumeirah</option>
                    <option value="dubai-hills">Dubai Hills</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    id="property-type"
                    className="w-full p-3 border border-gray-300 rounded focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
                  >
                    <option value="">All Types</option>
                    <option value="apartment">Apartments</option>
                    <option value="villa">Villas</option>
                    <option value="penthouse">Penthouses</option>
                    <option value="townhouse">Townhouses</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    &nbsp;
                  </label>
                  <button className="w-full bg-navy-900 hover:bg-navy-800 text-white p-3 rounded flex items-center justify-center transition-colors">
                    <Search size={18} className="mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;