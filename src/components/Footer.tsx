import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">
              LUXE<span className="text-gold-500">ESTATE</span>
            </h3>
            <p className="text-gray-300 mb-6 pr-4">
              Luxury real estate brokerage specializing in premium properties across Dubai, 
              providing exceptional service and expertise to discerning clients.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 border-b border-gold-500 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/" label="Home" />
              <FooterLink to="/properties" label="Properties" />
              <FooterLink to="/services" label="Services" />
              <FooterLink to="/about" label="About Us" />
              <FooterLink to="/contact" label="Contact" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 border-b border-gold-500 pb-2 inline-block">
              Properties
            </h4>
            <ul className="space-y-3">
              <FooterLink to="/properties?type=apartment" label="Apartments" />
              <FooterLink to="/properties?type=villa" label="Villas" />
              <FooterLink to="/properties?type=penthouse" label="Penthouses" />
              <FooterLink to="/properties?type=commercial" label="Commercial" />
              <FooterLink to="/properties?type=offplan" label="Off-Plan Projects" />
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6 border-b border-gold-500 pb-2 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                <span>Downtown Dubai, Sheikh Mohammed bin Rashid Blvd, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <span>info@luxeestate.ae</span>
              </li>
              <li className="flex items-center">
                <Clock size={20} className="text-gold-500 mr-3 flex-shrink-0" />
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LUXEESTATE. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="hover:text-gold-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-gold-500 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="hover:text-gold-500 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <a 
      href="#" 
      className="bg-navy-700 hover:bg-gold-500 text-white w-9 h-9 rounded-full flex items-center justify-center transition-colors"
    >
      {icon}
    </a>
  );
};

const FooterLink = ({ to, label }: { to: string; label: string }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-300 hover:text-gold-500 transition-colors"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;