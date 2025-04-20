import React, { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Property {
  id: number;
  title: string;
  type: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
  featured: boolean;
  forSale: boolean;
}

// Sample property data
const properties: Property[] = [
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
    forSale: true
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
    forSale: true
  },
  {
    id: 3,
    title: "Modern Apartment in the Heart of the City",
    type: "Apartment",
    price: 3500000,
    location: "Dubai Marina",
    beds: 3,
    baths: 3.5,
    area: 2200,
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    forSale: true
  },
  {
    id: 4,
    title: "Elegant Townhouse with Garden",
    type: "Townhouse",
    price: 7800000,
    location: "Jumeirah",
    beds: 4,
    baths: 4.5,
    area: 4500,
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    forSale: true
  },
  {
    id: 5,
    title: "Premium Waterfront Apartment",
    type: "Apartment",
    price: 120000,
    location: "Dubai Marina",
    beds: 2,
    baths: 2.5,
    area: 1800,
    image: "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    forSale: false
  },
  {
    id: 6,
    title: "Spacious Family Villa with Garden",
    type: "Villa",
    price: 180000,
    location: "Dubai Hills",
    beds: 5,
    baths: 6,
    area: 6500,
    image: "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true,
    forSale: false
  }
];

const FeaturedProperties = () => {
  const [activeTab, setActiveTab] = useState('buy');
  
  const filteredProperties = properties.filter(property => 
    (activeTab === 'buy' && property.forSale) || 
    (activeTab === 'rent' && !property.forSale)
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of Dubai's most exceptional properties, 
            offering unparalleled luxury, prime locations, and exceptional value.
          </p>
          <div className="mt-8 inline-flex border border-gray-300 rounded-lg overflow-hidden">
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'buy'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('buy')}
            >
              For Sale
            </button>
            <button
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === 'rent'
                  ? 'bg-navy-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('rent')}
            >
              For Rent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-flex items-center px-6 py-3 border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white transition-colors rounded font-medium"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

const PropertyCard = ({ property }: { property: Property }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    if (property.forSale) {
      // For sale, format in millions/thousands
      return price >= 1000000
        ? `AED ${(price / 1000000).toFixed(1)}M`
        : `AED ${(price / 1000).toFixed(0)}K`;
    } else {
      // For rent, show per year
      return `AED ${(price).toLocaleString()}/yr`;
    }
  };

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Property Image */}
        <Link to={`/properties/${property.id}`}>
          <div 
            className="h-64 bg-cover bg-center transition-transform duration-700 ease-in-out"
            style={{ 
              backgroundImage: `url(${property.image})`,
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          ></div>
        </Link>
        
        {/* Sale/Rent Tag */}
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded ${
            property.forSale ? 'bg-blue-600 text-white' : 'bg-amber-500 text-white'
          }`}>
            {property.forSale ? 'FOR SALE' : 'FOR RENT'}
          </span>
        </div>
        
        {/* Favorite Button */}
        <button 
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gold-500 transition-colors"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            size={18} 
            className={isFavorite ? 'fill-gold-500 text-gold-500' : 'text-gray-600'} 
          />
        </button>
        
        {/* Property Price */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <div className="text-white font-semibold text-xl">
            {formatPrice(property.price)}
          </div>
        </div>
      </div>
      
      {/* Property Details */}
      <div className="p-5">
        <Link to={`/properties/${property.id}`} className="block">
          <h3 className="text-lg font-medium text-navy-900 hover:text-gold-500 transition-colors line-clamp-1 mb-1">
            {property.title}
          </h3>
        </Link>
        
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex justify-between text-sm text-gray-600 pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{property.area.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;