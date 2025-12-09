'use client';

import Link from 'next/link';

export default function PricingSection() {
  const packages = [
    {
      name: 'LOGO INFINITE',
      price: '$999.00',
      features: [
        'Unlimited Original Logo Concepts',
        '12 Dedicated Logo Designer (Industry Specific)',
        'Unlimited Revisions',
        '5 Page Informative Website',
        'Stationery Design (Business Card, Letterhead, Envelope)',
        'Brand Book',
        'Social Media Integration',
        'Google Map Integration',
        'Free Lifetime Support'
      ],
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      name: 'INFINITE LOGO PACKAGE',
      price: '$495.00',
      features: [
        'Unlimited Logo Concepts',
        'Unlimited Revisions',
        'By 2 Dedicated Team Of Designers',
        '3 Page Custom Website',
        'Social Media Integration',
        'Google Map Integration',
        'Stationery Design'
      ],
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      name: 'LOGO COMBO',
      price: '$1299.00',
      features: [
        'Unlimited Original Logo Concepts',
        '12 Dedicated Logo Designer (Industry Specific)',
        'Unlimited Revisions',
        '7 Page Informative Website',
        'Stationery Design (Business Card, Letterhead, Envelope)',
        'Brand Book',
        'Social Media Design',
        'Premium Support'
      ],
      buttonColor: 'bg-yellow-500 hover:bg-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-2">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            WE ARE <span className="text-yellow-500">OPTIMISTS</span> WHO LOVE
            <br />
            TO WORK <span className="text-yellow-500">TOGETHER</span>
          </h2>

          <div className="flex justify-center gap-4 mb-12">
            <button className="px-8 py-3 bg-yellow-500 text-black font-bold text-sm">
              LOGO DESIGN
            </button>
            <button className="px-8 py-3 bg-gray-800 text-white font-bold text-sm hover:bg-gray-700">
              WEBSITE DESIGN
            </button>
            <button className="px-8 py-3 bg-gray-800 text-white font-bold text-sm hover:bg-gray-700">
              E-COMMERCE
            </button>
            <button className="px-8 py-3 bg-gray-800 text-white font-bold text-sm hover:bg-gray-700">
              CMS WEBSITE
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className="flex flex-col">
              {/* Package Header */}
              <div className="bg-yellow-500 p-8 text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-2xl">🎨</span>
                  <h3 className="text-lg font-bold text-black">{pkg.name}</h3>
                </div>
                <div className="text-5xl font-black text-black mb-6">
                  {pkg.price}
                </div>
                <button className="w-full bg-white text-black py-3 font-bold hover:bg-gray-100 transition-colors">
                  GET STARTED
                </button>
              </div>

              {/* Package Features */}
              <div className="bg-gray-900 p-8 flex-1">
                <h4 className="text-base font-bold mb-4">Package Details:</h4>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <svg className="w-4 h-4 text-yellow-500 mr-2 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/pricing" className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold">
                  VIEW ALL FEATURES
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-white"></div>
          <div className="w-3 h-3 rounded-full bg-gray-700"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        </div>
      </div>
    </section>
  );
}
