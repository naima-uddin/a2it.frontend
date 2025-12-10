"use client";
import { useState, useEffect } from 'react';
import TopBar from './TopBar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Services dropdown items
  const servicesItems = [
    'Development',
    'E-Commerce',
    'Amazon',
    'Shopify',
    'ERP System Development',
    'SEO / SEM / PPC',
    'Server and Hosting Services',
    'E-bay'
  ];

  // Navigation items
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'Services', href: '#', dropdown: true },
    { label: 'Portfolio', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact Us', href: '#' }
  ];

  return (
    <>
    
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className={`ml-3 text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-blue-600' : 'text-blue-500'
              }`}>Logo</span>
            </div>
          </div>

          {/* Desktop Navigation - Centered Items */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isScrolled 
                          ? 'text-blue-600 hover:bg-blue-50' 
                          : 'text-blue-500 hover:bg-blue-500/10'
                      }`}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {item.label}
                      <span className="ml-1 inline-block">▼</span>
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        isScrolled 
                          ? 'text-blue-600 hover:bg-blue-50' 
                          : 'text-blue-500 hover:bg-blue-500/10'
                      }`}
                    >
                      {item.label}
                    </a>
                  )}

                  {/* Services Dropdown */}
                  {item.dropdown && servicesOpen && (
                    <div 
                      className="absolute left-0 mt-2 w-64 rounded-lg shadow-xl py-2 z-50 bg-white/95 backdrop-blur-md"
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {servicesItems.map((service) => (
                        <a
                          key={service}
                          href="#"
                          className="block px-4 py-3 text-sm text-blue-600 hover:bg-blue-50 transition-all duration-200"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled 
                  ? 'text-blue-600 hover:bg-blue-50' 
                  : 'text-blue-500 hover:bg-blue-500/10'
              }`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Services Dropdown */}
      <div className={`md:hidden ${servicesOpen ? 'block' : 'hidden'}`}>
        <div 
          className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md"
        >
          {servicesItems.map((service) => (
            <a
              key={service}
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              {service}
            </a>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;