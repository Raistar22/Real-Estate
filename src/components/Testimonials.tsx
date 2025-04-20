import React, { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Investor, United Kingdom",
    quote: "LUXEESTATE exceeded all my expectations. Their market knowledge and attention to detail made my investment process smooth and profitable. I've acquired multiple properties through them and each transaction has been flawless.",
    rating: 5,
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Mohammed Al-Farsi",
    position: "Property Developer, UAE",
    quote: "As a developer, I value partners who understand luxury real estate. LUXEESTATE's marketing approach and client network have consistently delivered exceptional results for our premium projects across Dubai.",
    rating: 5,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Elena Petrov",
    position: "Homeowner, Russia",
    quote: "Finding our dream villa in Palm Jumeirah seemed impossible until we worked with LUXEESTATE. Their personalized approach and dedication to understanding our specific needs made all the difference.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const nextTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  const prevTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  useEffect(() => {
    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(transitionTimeout);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-navy-900 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500 opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 opacity-10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what our satisfied clients have to say about their experience working with LUXEESTATE.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Testimonial Image */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-500 opacity-20 rounded-full"></div>
              <div className="relative overflow-hidden rounded-lg aspect-square shadow-xl">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold-500 opacity-20 rounded-full"></div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="lg:w-2/3">
            <div className="bg-navy-800 rounded-lg p-8 lg:p-10 relative shadow-xl">
              <Quote size={40} className="absolute top-6 left-6 text-gold-500 opacity-20" />
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonial.rating ? "text-gold-500 fill-gold-500" : "text-gray-400"} 
                  />
                ))}
              </div>
              
              <blockquote className="text-xl text-white font-light italic mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white">{testimonial.name}</span>
                <span className="text-gold-500">{testimonial.position}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-navy-800 hover:bg-navy-700 text-white flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gold-500 hover:bg-gold-600 text-navy-900 flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-gold-500 w-8' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;