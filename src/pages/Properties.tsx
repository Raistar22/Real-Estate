import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Search, X, Filter, ArrowDown, ArrowUp } from 'lucide-react';

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
  },
  {
    id: 7,
    title: "Contemporary Apartment with Sea View",
    type: "Apartment",
    price: 4200000,
    location: "Jumeirah Beach Residence",
    beds: 3,
    baths: 3,
    area: 2400,
    image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    forSale: true
  },
  {
    id: 8,
    title: "Luxury Villa with Private Beach Access",
    type: "Villa",
    price: 35000000,
    location: "Palm Jumeirah",
    beds: 7,
    baths: 8,
    area: 12000,
    image: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    forSale: true
  },
  {
    id: 9,
    title: "High-End Penthouse with Skyline Views",
    type: "Penthouse",
    price: 18500000,
    location: "Downtown Dubai",
    beds: 5,
    baths: 6,
    area: 6800,
    image: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false,
    forSale: true
  }
];

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

const Properties = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState('default');
  
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    minPrice: '',
    maxPrice: '',
    beds: '',
    baths: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      type: '',
      minPrice: '',
      maxPrice: '',
      beds: '',
      baths: ''
    });
  };

  // Filter properties based on activeTab and other filters
  const filteredProperties = properties.filter(property => {
    // First filter by buy/rent
    if ((activeTab === 'buy' && !property.forSale) || (activeTab === 'rent' && property.forSale)) {
      return false;
    }
    
    // Then apply additional filters
    if (filters.location && property.location !== filters.location) return false;
    if (filters.type && property.type !== filters.type) return false;
    if (filters.beds && property.beds < parseInt(filters.beds)) return false;
    if (filters.baths && property.baths < parseInt(filters.baths)) return false;
    if (filters.minPrice && property.price < parseInt(filters.minPrice)) return false;
    if (filters.maxPrice && property.price > parseInt(filters.maxPrice)) return false;
    
    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortOption) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      case 'beds-desc':
        return b.beds - a.beds;
      case 'area-desc':
        return b.area - a.area;
      default:
        return 0; // Default sorting (by ID or featured)
    }
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navy-900 opacity-90"></div>
          <img 
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Dubai Property" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Our Properties
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover Dubai's most prestigious properties, from luxury penthouses to 
            elegant villas and modern apartments.
          </p>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                className={`px-8 py-3 font-medium ${
                  activeTab === 'buy'
                    ? 'bg-navy-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab('buy')}
              >
                For Sale
              </button>
              <button
                className={`px-8 py-3 font-medium ${
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

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div className="flex items-center mb-4 md:mb-0">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50"
                >
                  <Filter size={18} className="mr-2" />
                  Filters
                  {showFilters ? <ArrowUp size={16} className="ml-2" /> : <ArrowDown size={16} className="ml-2" />}
                </button>
                {(filters.location || filters.type || filters.minPrice || filters.maxPrice || filters.beds || filters.baths) && (
                  <button
                    onClick={clearFilters}
                    className="ml-3 flex items-center text-navy-700 hover:text-navy-900"
                  >
                    <X size={16} className="mr-1" />
                    Clear Filters
                  </button>
                )}
              </div>
              
              <div className="flex items-center w-full md:w-auto">
                <label htmlFor="sort" className="mr-2 text-gray-700">Sort by:</label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700 flex-grow md:flex-grow-0"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                  <option value="newest">Newest</option>
                  <option value="beds-desc">Most Bedrooms</option>
                  <option value="area-desc">Largest Area</option>
                </select>
              </div>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={filters.location}
                    onChange={handleFilterChange}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  >
                    <option value="">All Locations</option>
                    <option value="Downtown Dubai">Downtown Dubai</option>
                    <option value="Palm Jumeirah">Palm Jumeirah</option>
                    <option value="Dubai Marina">Dubai Marina</option>
                    <option value="Jumeirah">Jumeirah</option>
                    <option value="Dubai Hills">Dubai Hills</option>
                    <option value="Jumeirah Beach Residence">Jumeirah Beach Residence</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                  >
                    <option value="">All Types</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                    <option value="Penthouse">Penthouse</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="beds" className="block text-sm font-medium text-gray-700 mb-1">
                      Min Beds
                    </label>
                    <select
                      id="beds"
                      name="beds"
                      value={filters.beds}
                      onChange={handleFilterChange}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="baths" className="block text-sm font-medium text-gray-700 mb-1">
                      Min Baths
                    </label>
                    <select
                      id="baths"
                      name="baths"
                      value={filters.baths}
                      onChange={handleFilterChange}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    >
                      <option value="">Any</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                    </select>
                  </div>
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price Range (AED)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="number"
                      name="minPrice"
                      placeholder="Min Price"
                      value={filters.minPrice}
                      onChange={(e) => setFilters(prev => ({ ...prev, minPrice: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    />
                    <input
                      type="number"
                      name="maxPrice"
                      placeholder="Max Price"
                      value={filters.maxPrice}
                      onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                      className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-gold-500 focus:border-gold-500"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-3 flex justify-end mt-4">
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2 border border-gray-300 rounded-lg mr-3 hover:bg-gray-50"
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-4 py-2 bg-navy-900 text-white rounded-lg hover:bg-navy-800 flex items-center"
                  >
                    <Search size={18} className="mr-2" />
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {sortedProperties.length} properties
              {activeTab === 'buy' ? ' for sale' : ' for rent'}
              {(filters.location || filters.type || filters.minPrice || filters.maxPrice || filters.beds || filters.baths) ? ' with applied filters' : ''}
            </p>
          </div>

          {/* Properties Grid */}
          {sortedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-2xl font-medium text-navy-900 mb-2">No properties found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any properties matching your current filters.
                Try adjusting your search criteria.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-navy-900 text-white rounded-lg hover:bg-navy-800"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Properties;