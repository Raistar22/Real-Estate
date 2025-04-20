import React, { useState } from 'react';
import { Building, Sparkles, User, Briefcase, CreditCard, Award } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const servicesData: Service[] = [
  {
    id: 1,
    title: "Luxury Property Sales",
    description: "We specialize in marketing and selling Dubai's most prestigious properties, ensuring maximum exposure and optimal value for your high-end real estate.",
    icon: <Building size={36} />
  },
  {
    id: 2,
    title: "Premium Property Management",
    description: "Our comprehensive property management service handles all aspects of your investment, from tenant screening to maintenance, maximizing your returns without the hassle.",
    icon: <Sparkles size={36} />
  },
  {
    id: 3,
    title: "Personalized Buyer Representation",
    description: "Our expert agents guide you through Dubai's competitive property market, helping you find and secure your dream home or ideal investment property.",
    icon: <User size={36} />
  },
  {
    id: 4,
    title: "Investment Advisory",
    description: "Leverage our deep market knowledge and analytical expertise to identify high-yielding investment opportunities aligned with your financial goals.",
    icon: <Briefcase size={36} />
  },
  {
    id: 5,
    title: "Financing Solutions",
    description: "Navigate the complexities of property financing with our tailored mortgage advisory services, connecting you with optimal lending solutions.",
    icon: <CreditCard size={36} />
  },
  {
    id: 6,
    title: "Exclusive Off-Plan Opportunities",
    description: "Gain early access to Dubai's most sought-after developments before they hit the market, securing premium units at pre-launch prices.",
    icon: <Award size={36} />
  }
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled real estate services tailored to meet the unique needs 
            of discerning clients in Dubai's luxury property market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className={`bg-white p-8 rounded-lg transition-all duration-300 ${
                hoveredService === service.id 
                  ? 'shadow-xl transform -translate-y-1 border-b-2 border-gold-500' 
                  : 'shadow-md'
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-colors ${
                hoveredService === service.id 
                  ? 'bg-gold-500 text-white' 
                  : 'bg-navy-50 text-navy-900'
              }`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;