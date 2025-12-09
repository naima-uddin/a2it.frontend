'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'Design & Development', slug: 'design-development' },
    { name: 'E-Commerce', slug: 'ecommerce' },
    { name: 'Amazon', slug: 'amazon' },
    { name: 'Shopify', slug: 'shopify' },
    { name: 'ERP System Development', slug: 'erp-system' },
    { name: 'SEO / SEM / PPC', slug: 'seo-sem-ppc' },
    { name: 'Server and Hosting Services', slug: 'server-hosting' },
    { name: 'E-bay', slug: 'ebay' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-500">A2IT</span>
              <span className="text-yellow-500"> STUDIOS</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-white hover:text-blue-500 transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className="text-white hover:text-blue-500 transition-colors font-medium uppercase text-sm tracking-wide"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-white hover:text-blue-500 transition-colors font-medium uppercase text-sm tracking-wide flex items-center">
                Services
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={`/services/${service.slug}`}
                      className="block px-6 py-3 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/portfolio" 
              className="text-white hover:text-blue-500 transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Portfolio
            </Link>

            <Link 
              href="/pricing" 
              className="text-white hover:text-blue-500 transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Pricing
            </Link>

            <Link 
              href="/contact" 
              className="text-white hover:text-blue-500 transition-colors font-medium uppercase text-sm tracking-wide"
            >
              Contact Us
            </Link>
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <div>
                <div className="text-xs text-gray-400">Call us:</div>
                <div className="text-sm text-white font-semibold">+1 (321) 800-2759</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
