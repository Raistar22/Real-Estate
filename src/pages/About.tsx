import React from 'react';
import { Award, Target, Users, TrendingUp, Clock, Gem, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-navy-900 opacity-90"></div>
          <img 
            src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Dubai Skyline" 
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
            About LUXE<span className="text-gold-500">ESTATE</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dubai's premier luxury real estate brokerage, providing exceptional service 
            and expertise in the region's most prestigious properties.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, LUXEESTATE has established itself as a leading force in Dubai's 
                competitive real estate market. Our journey began with a vision to transform the luxury 
                property experience for discerning clients, offering a level of service and expertise 
                unmatched in the industry.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have cultivated deep relationships with developers, property owners, 
                and investors, creating a vast network that enables us to offer our clients exclusive 
                access to Dubai's most prestigious properties, often before they reach the open market.
              </p>
              <p className="text-gray-600">
                Today, LUXEESTATE is recognized as the go-to brokerage for high-net-worth individuals, 
                international investors, and property developers seeking exceptional real estate 
                opportunities in Dubai's luxury segment.
              </p>

              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <div className="text-3xl font-bold text-gold-500 mb-1">250+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-500 mb-1">$1.2B+</div>
                  <div className="text-gray-600">Transaction Volume</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-500 mb-1">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gold-500 mb-1">98%</div>
                  <div className="text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gold-500 opacity-10 rounded-full"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="LUXEESTATE Office" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-navy-900 opacity-10 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At LUXEESTATE, our mission and values guide everything we do, driving our commitment 
              to excellence in serving our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6">
                <Target size={30} className="text-navy-900" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide unparalleled real estate services that exceed expectations, creating value for 
                our clients through expert guidance, market intelligence, and personalized solutions 
                tailored to their unique needs and aspirations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6">
                <Gem size={30} className="text-navy-900" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the definitive leader in Dubai's luxury real estate market, recognized globally 
                for our integrity, expertise, and unwavering commitment to delivering exceptional 
                results and experiences that transform the way clients perceive real estate services.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-navy-50 rounded-full flex items-center justify-center mb-6">
                <Award size={30} className="text-navy-900" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-gold-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Excellence:</strong> Consistently exceeding expectations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-gold-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Integrity:</strong> Unwavering honesty and transparency</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-gold-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Innovation:</strong> Pioneering solutions and approaches</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={18} className="text-gold-500 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Expertise:</strong> Deep market knowledge and insight</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of experienced professionals brings unparalleled expertise and passion 
              to every client interaction and property transaction.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Ahmed Al-Mahmoud",
                position: "CEO & Founder",
                bio: "With over 20 years of experience in Dubai's luxury real estate market, Ahmed leads our vision for exceptional service.",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Sophia Chen",
                position: "Head of Sales",
                bio: "Sophia's strategic approach and negotiation skills have helped clients secure the most prestigious properties in Dubai.",
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "James Wilson",
                position: "Senior Property Consultant",
                bio: "Specializing in ultra-luxury properties, James has a proven track record of matching clients with their perfect homes.",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              },
              {
                name: "Layla Rahman",
                position: "Investment Advisor",
                bio: "With a background in finance, Layla provides expert guidance on maximizing returns in Dubai's property market.",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group">
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-1">{member.name}</h3>
                  <p className="text-gold-500 mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors font-medium"
            >
              Join Our Team <Users size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Why Choose LUXE<span className="text-gold-500">ESTATE</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              What sets us apart in Dubai's competitive real estate landscape and why our clients trust us with their most significant investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp size={30} />,
                title: "Market Expertise",
                description: "Our deep understanding of Dubai's property market enables us to identify opportunities and trends before they become mainstream."
              },
              {
                icon: <Users size={30} />,
                title: "Exclusive Network",
                description: "Access to an unparalleled network of developers, property owners, and investors, providing our clients with first access to off-market opportunities."
              },
              {
                icon: <Award size={30} />,
                title: "Proven Track Record",
                description: "A history of successful transactions and satisfied clients who continue to trust us with their real estate needs year after year."
              },
              {
                icon: <Gem size={30} />,
                title: "Luxury Specialists",
                description: "Our focus on the luxury segment means we understand the unique demands and expectations of discerning clients."
              },
              {
                icon: <Clock size={30} />,
                title: "Tailored Approach",
                description: "Customized strategies for each client, recognizing that no two real estate goals are exactly alike."
              },
              {
                icon: <Users size={30} />,
                title: "International Perspective",
                description: "Our multicultural team brings global insights while maintaining deep local knowledge of Dubai's property landscape."
              }
            ].map((item, index) => (
              <div key={index} className="bg-navy-800 p-8 rounded-lg">
                <div className="text-gold-500 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;