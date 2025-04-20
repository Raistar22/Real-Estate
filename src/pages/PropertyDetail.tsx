import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Heart, 
  Share, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  Home,
  Phone,
  Mail,
  User,
  Maximize2
} from 'lucide-react';

// Sample property data (same as used in Properties.tsx)
const properties = [
  {
    id: 1,
    title: "Luxury Penthouse with Panoramic Views",
    type: "Penthouse",
    price: 15000000,
    location: "Downtown Dubai",
    beds: 4,
    baths: 5,
    area: 5200,
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    forSale: true,
    description: "This extraordinary penthouse offers unparalleled luxury living in the heart of Downtown Dubai. Featuring panoramic views of the Burj Khalifa and Dubai Fountain, this residence spans an entire floor with premium finishes throughout. The open-plan living space includes a gourmet kitchen with top-of-the-line appliances, a formal dining area, and multiple entertainment spaces. The primary suite boasts a private terrace, walk-in closets, and a spa-like bathroom. Additional amenities include a private pool, smart home technology, and premium building facilities.",
    amenities: [
      "Private Pool",
      "Home Automation",
      "Private Elevator",
      "Floor-to-ceiling Windows",
      "Multiple Terraces",
      "Maid's Quarters",
      "Premium Kitchen Appliances",
      "Walk-in Closets",
      "24/7 Security",
      "Concierge Service",
      "Gym Access",
      "Underground Parking"
    ],
    agent: {
      name: "Sarah Johnson",
      phone: "+971 50 123 4567",
      email: "sarah@luxeestate.ae",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  },
  {
    id: 2,
    title: "Beachfront Villa with Private Pool",
    type: "Villa",
    price: 25000000,
    location: "Palm Jumeirah",
    beds: 6,
    baths: 7,
    area: 10000,
    image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    forSale: true,
    description: "An exceptional beachfront villa located on Palm Jumeirah's prestigious fronds. This stunning residence offers direct beach access and uninterrupted sea views. The property features an infinity pool, landscaped gardens, and a private beach area. Inside, the villa boasts spacious living areas with high ceilings, a gourmet kitchen, formal and informal dining spaces, and a private cinema. The master suite includes a large terrace, walk-in wardrobes, and a luxurious en-suite bathroom. Additional features include staff accommodation, a home gym, and a four-car garage.",
    amenities: [
      "Private Beach Access",
      "Infinity Pool",
      "Landscaped Gardens",
      "Private Cinema",
      "Home Gym",
      "Smart Home System",
      "Staff Accommodation",
      "4-Car Garage",
      "Outdoor Kitchen",
      "Multiple Terraces",
      "High Ceilings",
      "Floor-to-ceiling Windows"
    ],
    agent: {
      name: "Mohammed Al-Farsi",
      phone: "+971 50 765 4321",
      email: "mohammed@luxeestate.ae",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    images: [
      "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ]
  }
];

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const propertyData = properties.find(p => p.id === parseInt(id || '0'));
    setProperty(propertyData);
    
    // Reset image index when property changes
    setCurrentImageIndex(0);
    
    // Scroll to top when property changes
    window.scrollTo(0, 0);
  }, [id]);

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! Our agent will contact you shortly.');
    setShowContactForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  if (!property) {
    return (
      <div className="pt-20 flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="text-4xl mb-4">🏠</div>
          <h2 className="text-2xl font-medium text-navy-900 mb-4">Property Not Found</h2>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties" className="px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800">
            View All Properties
          </Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    if (property.forSale) {
      // For sale, format in millions
      return price >= 1000000
        ? `AED ${(price / 1000000).toFixed(1)} Million`
        : `AED ${(price / 1000).toFixed(0)}K`;
    } else {
      // For rent, show per year
      return `AED ${(price).toLocaleString()} per year`;
    }
  };

  return (
    <div className="pt-20 pb-16">
      {/* Image Gallery */}
      <section className="relative">
        <div className="relative h-[60vh] overflow-hidden">
          {property.images.map((image: string, index: number) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${property.title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
          
          {/* Navigation Controls */}
          <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
            <button
              onClick={handlePrevImage}
              className="bg-white/70 hover:bg-white text-navy-900 rounded-full p-2 backdrop-blur-sm transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNextImage}
              className="bg-white/70 hover:bg-white text-navy-900 rounded-full p-2 backdrop-blur-sm transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {currentImageIndex + 1} / {property.images.length}
          </div>
          
          {/* Back Button */}
          <Link
            to="/properties"
            className="absolute top-4 left-4 bg-white/70 hover:bg-white text-navy-900 rounded-full p-2 flex items-center backdrop-blur-sm transition-colors"
          >
            <ChevronLeft size={18} className="mr-1" />
            <span>Back</span>
          </Link>
          
          {/* Actions */}
          <div className="absolute top-4 right-4 flex space-x-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="bg-white/70 hover:bg-white text-navy-900 rounded-full p-2 backdrop-blur-sm transition-colors"
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Heart 
                size={18} 
                className={isFavorite ? "fill-red-500 text-red-500" : ""} 
              />
            </button>
            <button
              className="bg-white/70 hover:bg-white text-navy-900 rounded-full p-2 backdrop-blur-sm transition-colors"
              aria-label="Share property"
            >
              <Share size={18} />
            </button>
            <button
              onClick={() => window.open(property.images[currentImageIndex], '_blank')}
              className="bg-white/70 hover:bg-white text-navy-900 rounded-full p-2 backdrop-blur-sm transition-colors"
              aria-label="View full size image"
            >
              <Maximize2 size={18} />
            </button>
          </div>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
          <div className="bg-white p-2 rounded-lg shadow-lg overflow-x-auto">
            <div className="flex space-x-2">
              {property.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-16 rounded overflow-hidden border-2 ${
                    index === currentImageIndex ? 'border-gold-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-serif font-bold text-navy-900 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-gold-500 mb-2">
                    <MapPin size={18} className="mr-1" />
                    <span>{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-navy-900 mb-1">
                    {formatPrice(property.price)}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded ${
                    property.forSale ? 'bg-blue-600 text-white' : 'bg-amber-500 text-white'
                  }`}>
                    {property.forSale ? 'FOR SALE' : 'FOR RENT'}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 mt-6 text-gray-700 border-t border-b border-gray-200 py-4">
                <div className="flex items-center">
                  <Home size={20} className="mr-2 text-gold-500" />
                  <span>{property.type}</span>
                </div>
                <div className="flex items-center">
                  <Bed size={20} className="mr-2 text-gold-500" />
                  <span>{property.beds} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath size={20} className="mr-2 text-gold-500" />
                  <span>{property.baths} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square size={20} className="mr-2 text-gold-500" />
                  <span>{property.area.toLocaleString()} sq ft</span>
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="mb-8">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setSelectedTab('overview')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      selectedTab === 'overview'
                        ? 'border-gold-500 text-gold-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setSelectedTab('amenities')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      selectedTab === 'amenities'
                        ? 'border-gold-500 text-gold-500'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Amenities
                  </button>
                </nav>
              </div>
              
              {/* Tab Content */}
              <div className="mt-8">
                {selectedTab === 'overview' && (
                  <div>
                    <h2 className="text-xl font-semibold text-navy-900 mb-4">Property Description</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {property.description}
                    </p>
                    
                    <div className="mt-8">
                      <h2 className="text-xl font-semibold text-navy-900 mb-4">Property Features</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {['Property Type', 'Location', 'Bedrooms', 'Bathrooms', 'Area', 'Year Built'].map((feature, index) => (
                          <div key={index} className="flex justify-between py-2 border-b border-gray-100">
                            <span className="text-gray-600">{feature}</span>
                            <span className="font-medium text-navy-900">
                              {feature === 'Property Type' && property.type}
                              {feature === 'Location' && property.location}
                              {feature === 'Bedrooms' && property.beds}
                              {feature === 'Bathrooms' && property.baths}
                              {feature === 'Area' && `${property.area.toLocaleString()} sq ft`}
                              {feature === 'Year Built' && '2022'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedTab === 'amenities' && (
                  <div>
                    <h2 className="text-xl font-semibold text-navy-900 mb-4">Amenities & Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {property.amenities.map((amenity: string, index: number) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-gold-500 rounded-full mr-2"></div>
                          <span className="text-gray-700">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Agent Info */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Property Agent</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={property.agent.image}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-medium text-navy-900">{property.agent.name}</div>
                    <div className="text-sm text-gray-500">Luxury Property Specialist</div>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Phone size={18} className="text-gold-500 mr-3" />
                    <span className="text-gray-700">{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-gold-500 mr-3" />
                    <span className="text-gray-700">{property.agent.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-navy-900 text-white py-3 rounded hover:bg-navy-800 transition-colors"
                >
                  Contact Agent
                </button>
              </div>
            </div>
            
            {/* Schedule Viewing */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Schedule a Viewing</h3>
                <div className="flex items-center text-gold-500 mb-4">
                  <Calendar size={18} className="mr-2" />
                  <span>Available for viewings</span>
                </div>
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-gold-500 text-navy-900 py-3 rounded hover:bg-gold-600 transition-colors font-medium"
                >
                  Schedule Viewing
                </button>
              </div>
            </div>
            
            {/* Similar Properties (placeholder) */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-navy-900 mb-4">Similar Properties</h3>
                <p className="text-gray-600 mb-4">Explore more properties like this one</p>
                <Link
                  to="/properties"
                  className="text-gold-500 font-medium hover:text-gold-600 flex items-center"
                >
                  View All Properties <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-navy-900">Contact Agent</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X size={24} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="Your name"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="pl-10 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                      placeholder="Your phone number"
                    />
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
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    placeholder={`I'm interested in ${property.title}...`}
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gold-500 text-navy-900 rounded hover:bg-gold-600 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;