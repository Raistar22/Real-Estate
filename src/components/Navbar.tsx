import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-serif font-bold ${scrolled || isOpen ? 'text-navy-700' : 'text-white'}`}>
                LUXE<span className="text-gold-500">ESTATE</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <NavLink to="/" label="Home" scrolled={scrolled} />
            <NavLink to="/properties" label="Properties" scrolled={scrolled} />
            <NavLink to="/services" label="Services" scrolled={scrolled} />
            <NavLink to="/about" label="About" scrolled={scrolled} />
            <NavLink to="/contact" label="Contact" scrolled={scrolled} />
            <button className={`flex items-center transition-colors ${
              scrolled ? 'text-navy-700' : 'text-white'
            }`}>
              <Globe size={18} className="mr-1" />
              <span>EN</span>
              <ChevronDown size={16} />
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${
                scrolled ? 'text-navy-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
          <MobileNavLink to="/" label="Home" />
          <MobileNavLink to="/properties" label="Properties" />
          <MobileNavLink to="/services" label="Services" />
          <MobileNavLink to="/about" label="About" />
          <MobileNavLink to="/contact" label="Contact" />
          <button className="flex items-center w-full text-left px-3 py-2 text-navy-700">
            <Globe size={18} className="mr-2" />
            <span>English</span>
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label, scrolled }: { to: string; label: string; scrolled: boolean }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-2 py-1 text-sm font-medium transition-colors ${
        isActive 
          ? 'border-b-2 border-gold-500 text-gold-500' 
          : scrolled 
            ? 'text-navy-700 hover:text-gold-500' 
            : 'text-white hover:text-gold-300'
      }`}
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label }: { to: string; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block px-3 py-2 text-base font-medium ${
        isActive ? 'text-gold-500' : 'text-navy-700 hover:text-gold-500'
      }`}
    >
      {label}
    </Link>
  );
};

export default Navbar;