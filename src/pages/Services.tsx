import React from 'react';
import { Building, Sparkles, User, Briefcase, CreditCard, Award, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  image: string;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Luxury Property Sales",
    description: "Our experienced agents specialize in marketing and selling Dubai's most prestigious properties. We leverage our extensive network, cutting-edge marketing strategies, and deep market knowledge to ensure your property achieves maximum exposure and optimal value.",
    icon: <Building size={36} />,
    benefits: [
      "Strategic pricing based on comprehensive market analysis",
      "Professional photography and virtual tours",
      "Targeted marketing to qualified high-net-worth buyers",
      "Access to our exclusive database of international investors",
      "Expert negotiation to maximize property value"
    ],
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Premium Property Management",
    description: "Our comprehensive property management service handles all aspects of your investment, from tenant screening to maintenance, maximizing your returns without the hassle. We treat your property as if it were our own, ensuring it remains in pristine condition while generating optimal income.",
    icon: <Sparkles size={36} />,
    benefits: [
      "Thorough tenant screening and selection",
      "Regular property inspections and maintenance coordination",
      "Rent collection and financial reporting",
      "24/7 emergency response system",
      "Legal compliance and documentation management"
    ],
    image: "https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "Personalized Buyer Representation",
    description: "Our expert agents guide you through Dubai's competitive property market, helping you find and secure your dream home or ideal investment property. We take the time to understand your specific requirements and preferences, presenting only properties that truly align with your vision.",
    icon: <User size={36} />,
    benefits: [
      "Personalized property search tailored to your requirements",
      "Private viewings of on-market and off-market properties",
      "Expert negotiation to secure the best possible price",
      "Guidance through the entire purchase process",
      "Post-purchase support and concierge services"
    ],
    image: "https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Investment Advisory",
    description: "Leverage our deep market knowledge and analytical expertise to identify high-yielding investment opportunities aligned with your financial goals. Our investment advisors analyze market trends, potential returns, and risk factors to help you make informed investment decisions in Dubai's dynamic real estate market.",
    icon: <Briefcase size={36} />,
    benefits: [
      "Comprehensive market analysis and investment strategy development",
      "ROI projections and financial modeling",
      "Portfolio diversification recommendations",
      "Due diligence on potential investment properties",
      "Ongoing performance monitoring and optimization"
    ],
    image: "https://images.pexels.com/photos/7821587/pexels-photo-7821587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "Financing Solutions",
    description: "Navigate the complexities of property financing with our tailored mortgage advisory services, connecting you with optimal lending solutions. Our network of banking partners and financial institutions allows us to secure competitive rates and favorable terms for both local and international buyers.",
    icon: <CreditCard size={36} />,
    benefits: [
      "Access to preferred rates from leading financial institutions",
      "Mortgage pre-approval assistance",
      "Comparison of financing options",
      "Guidance on Dubai's property financing regulations",
      "Support throughout the application and approval process"
    ],
    image: "https://images.pexels.com/photos/4475523/pexels-photo-4475523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    title: "Exclusive Off-Plan Opportunities",
    description: "Gain early access to Dubai's most sought-after developments before they hit the market, securing premium units at pre-launch prices. Our strong relationships with premier developers give our clients a competitive edge in Dubai's fast-moving off-plan property segment.",
    icon: <Award size={36} />,
    benefits: [
      "Priority access to pre-launch projects from top developers",
      "Exclusive payment plans and early-bird pricing",
      "Detailed analysis of developer track record and project quality",
      "Guidance on selecting the best units within a development",
      "Regular construction updates and progress reports"
    ],
    image: "https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navy-900 opacity-90"></div>
          <img 
            src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Dubai Skyline" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive real estate solutions tailored to meet the unique needs 
            of our discerning clients in Dubai's luxury property market.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Exceptional Services for Discerning Clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At LUXEESTATE, we offer a comprehensive suite of premium real estate services 
              designed to meet the unique needs of our clients in Dubai's luxury property market.
            </p>
          </div>

          {/* Services List */}
          <div className="space-y-24">
            {servicesData.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-500 opacity-10 rounded-full"></div>
                    <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-navy-900 opacity-10 rounded-full"></div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 bg-navy-50 text-navy-900`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-navy-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-medium text-navy-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check size={20} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-6 py-3 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors font-medium"
                  >
                    Inquire About This Service <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Ready to Experience Exceptional Service?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Contact our team of experts today to discuss your real estate needs 
            and discover how we can help you achieve your property goals.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gold-500 text-navy-900 rounded hover:bg-gold-600 transition-colors text-lg font-medium"
          >
            Schedule a Consultation <ArrowRight size={24} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;