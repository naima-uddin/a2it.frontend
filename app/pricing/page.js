'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('logo');

  const allPackages = {
    logo: [
      {
        name: 'BASIC',
        price: '$99.00',
        icon: '🎨',
        features: [
          '3 Logo Design Concepts',
          '2 Dedicated Logo Designer',
          '4 Revisions',
          'Business Card Design',
          '48-72 Hours Turnaround Time',
          'All Final File Formats',
          '100% Ownership Rights'
        ],
        popular: false
      },
      {
        name: 'LOGO INFINITE',
        price: '$999.00',
        icon: '💎',
        features: [
          'Unlimited Original Logo Concepts',
          '12 Dedicated Logo Designer (Industry Specific)',
          'Unlimited Revisions',
          '5 Page Informative Website',
          'Stationery Design (Business Card, Letterhead, Envelope)',
          'Brand Book',
          'Social Media Integration',
          'Google Map Integration',
          'Free Lifetime Support',
          '100% Ownership Rights'
        ],
        popular: true
      },
      {
        name: 'LOGO COMBO',
        price: '$1299.00',
        icon: '👑',
        features: [
          'Unlimited Original Logo Concepts',
          '12 Dedicated Logo Designer (Industry Specific)',
          'Unlimited Revisions',
          '7 Page Informative Website',
          'Stationery Design (Business Card, Letterhead, Envelope)',
          'Brand Book',
          'Social Media Design',
          'Email Marketing Design',
          'Premium Support',
          '100% Ownership Rights'
        ],
        popular: false
      }
    ],
    website: [
      {
        name: 'BASIC',
        price: '$255.00',
        icon: '💻',
        features: [
          '5 Pages Design',
          'Contact Form',
          'Social Media Integration',
          'Responsive Design',
          'FREE FTP Access',
          'FREE Mockup (Your Own Content)',
          'FREE 3 Email Accounts',
          '48 Hours Turnaround Time'
        ],
        popular: false
      },
      {
        name: 'PROFESSIONAL',
        price: '$855.00',
        icon: '🌟',
        features: [
          '8 Pages Design',
          'Contact Form',
          'Social Media Integration',
          'Responsive Design',
          'Photo Gallery Module',
          'Google Maps Module',
          'FREE Content Panel Access',
          'SEO Friendly',
          'FREE 5 Email Accounts'
        ],
        popular: true
      },
      {
        name: 'PREMIUM',
        price: '$1155.00',
        icon: '🚀',
        features: [
          '10 Pages Design',
          'Advanced Contact Form',
          'Social Media Integration',
          'Responsive Design',
          'Photo Gallery Module',
          'Google Maps Module',
          'Sitemap Module',
          'Blog Module',
          'Advanced SEO',
          'FREE 10 Email Accounts'
        ],
        popular: false
      }
    ],
    ecommerce: [
      {
        name: 'STARTER',
        price: '$499.00',
        icon: '🛒',
        features: [
          'Up to 25 Products',
          'Shopping Cart Integration',
          'Payment Gateway Setup',
          'Product Management',
          'Order Management',
          'Responsive Design',
          'Basic SEO',
          'FREE Training'
        ],
        popular: false
      },
      {
        name: 'BUSINESS',
        price: '$1299.00',
        icon: '💼',
        features: [
          'Up to 100 Products',
          'Shopping Cart Integration',
          'Multiple Payment Gateways',
          'Product Management',
          'Order Management',
          'Inventory Management',
          'Customer Reviews',
          'Advanced SEO',
          'Email Marketing Integration',
          'FREE Training & Support'
        ],
        popular: true
      },
      {
        name: 'ENTERPRISE',
        price: '$2499.00',
        icon: '🏢',
        features: [
          'Unlimited Products',
          'Advanced Shopping Cart',
          'Multiple Payment Gateways',
          'Multi-vendor Support',
          'Advanced Inventory',
          'CRM Integration',
          'Analytics Dashboard',
          'Premium SEO',
          'Dedicated Support',
          'Custom Features'
        ],
        popular: false
      }
    ]
  };

  const currentPackages = allPackages[activeTab];

  return (
    <main className="pt-20 bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-4">
            OUR <span className="text-yellow-500">PRICING</span>
          </h1>
          <p className="text-xl text-gray-300">
            Transparent pricing for all our services. Choose the package that best fits your needs.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-8">
              WE ARE <span className="text-yellow-500">OPTIMISTS</span> WHO LOVE
              <br />
              TO WORK <span className="text-yellow-500">TOGETHER</span>
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setActiveTab('logo')}
                className={`px-8 py-3 font-bold transition-all ${
                  activeTab === 'logo'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                LOGO DESIGN
              </button>
              <button
                onClick={() => setActiveTab('website')}
                className={`px-8 py-3 font-bold transition-all ${
                  activeTab === 'website'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                WEBSITE DESIGN
              </button>
              <button
                onClick={() => setActiveTab('ecommerce')}
                className={`px-8 py-3 font-bold transition-all ${
                  activeTab === 'ecommerce'
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                E-COMMERCE
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentPackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-lg overflow-hidden transition-all hover:scale-105 ${
                  pkg.popular ? 'ring-4 ring-yellow-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-yellow-500 text-black text-center py-2 font-bold z-10">
                    MOST POPULAR
                  </div>
                )}

                {/* Package Header */}
                <div className={`bg-gradient-to-br ${
                  pkg.popular ? 'from-yellow-400 to-yellow-500' : 'from-gray-700 to-gray-800'
                } p-8 text-center ${pkg.popular ? 'pt-16' : ''}`}>
                  <div className="text-5xl mb-4">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>
                  <div className="text-5xl font-black text-white mb-6">
                    {pkg.price}
                  </div>
                  <Link
                    href="/contact"
                    className={`block w-full py-3 font-bold transition-colors ${
                      pkg.popular
                        ? 'bg-black text-white hover:bg-gray-900'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    GET STARTED
                  </Link>
                </div>

                {/* Package Features */}
                <div className={`p-8 ${pkg.popular ? 'bg-gray-900' : 'bg-gray-800'}`}>
                  <h4 className="text-lg font-semibold mb-4 text-white">Package Details:</h4>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-white">
                        <svg
                          className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            TAKE THE FIRST STEP TOWARDS THE
            <br />
            RIGHT DIRECTION!
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a
              href="tel:+13218002759"
              className="flex items-center space-x-2 text-black hover:underline text-lg font-semibold"
            >
              <span>📞 CALL TOLL FREE</span>
              <span>+1 (321) 800-2759</span>
            </a>
            <Link
              href="/contact"
              className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all"
            >
              REQUEST A QUOTE
            </Link>
            <a
              href="mailto:info@a2itltd.com"
              className="flex items-center space-x-2 text-black hover:underline text-lg font-semibold"
            >
              <span>✉️ NEED HELP?</span>
              <span>info@a2itltd.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            FEEDBACK FROM OUR HONORABLE <span className="text-yellow-500">CLIENTS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 mb-4">
                  "Excellent service and professional team. They delivered beyond our expectations and helped us achieve our digital goals."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-bold">Client Name</div>
                    <div className="text-sm text-gray-400">Company Name</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
