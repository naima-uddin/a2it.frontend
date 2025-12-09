'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      image: '🛒',
      description: 'Modern online shopping experience',
      tags: ['Shopify', 'Design', 'Development']
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'design',
      image: '🎨',
      description: 'Complete brand design system',
      tags: ['Logo', 'Branding', 'Print']
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      category: 'b2b',
      image: '💳',
      description: 'Secure mobile payment solution',
      tags: ['Mobile', 'UX/UI', 'Fintech']
    },
    {
      id: 4,
      title: 'CMS Website',
      category: 'cms',
      image: '💻',
      description: 'Content management system',
      tags: ['WordPress', 'CMS', 'Backend']
    },
    {
      id: 5,
      title: 'Customer Reviews Platform',
      category: 'webapp',
      image: '⭐',
      description: 'Rating and review system',
      tags: ['React', 'Node.js', 'API']
    },
    {
      id: 6,
      title: 'Social Media Branding',
      category: 'design',
      image: '👤',
      description: 'Social media design strategy',
      tags: ['SMM', 'Graphics', 'Content']
    },
    {
      id: 7,
      title: 'SEO Optimization',
      category: 'seo',
      image: '🔍',
      description: 'Search engine optimization',
      tags: ['SEO', 'Analytics', 'Growth']
    },
    {
      id: 8,
      title: 'Cloud Hosting Setup',
      category: 'hosting',
      image: '☁️',
      description: 'Enterprise cloud infrastructure',
      tags: ['AWS', 'DevOps', 'Security']
    },
    {
      id: 9,
      title: 'NFT Marketplace',
      category: 'webapp',
      image: '🎭',
      description: 'Digital art trading platform',
      tags: ['Blockchain', 'Web3', 'NFT']
    },
    {
      id: 10,
      title: 'Restaurant Website',
      category: 'cms',
      image: '🍽️',
      description: 'Online ordering system',
      tags: ['Restaurant', 'Booking', 'Menu']
    },
    {
      id: 11,
      title: 'HTTPS Security',
      category: 'hosting',
      image: '🔒',
      description: 'SSL certificate setup',
      tags: ['Security', 'SSL', 'HTTPS']
    },
    {
      id: 12,
      title: 'VPN Service Design',
      category: 'design',
      image: '🔐',
      description: 'VPN application interface',
      tags: ['UI/UX', 'Security', 'App']
    }
  ];

  const categories = [
    { id: 'all', name: 'ALL' },
    { id: 'ecommerce', name: 'E-COMMERCE' },
    { id: 'b2b', name: 'B2B & B2C PORTALS' },
    { id: 'webapp', name: 'WEB APPLICATIONS' },
    { id: 'cms', name: 'CMS WEBSITES' },
    { id: 'design', name: 'RESPONSIVE WEBSITES' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <main className="pt-20 bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-2">Have A Look At</p>
          <h1 className="text-6xl font-bold mb-4">
            OUR <span className="text-yellow-500">PORTFOLIO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse range of successful projects across various industries and technologies
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-black/5 sticky top-20 z-40 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 font-bold transition-all ${
                  activeFilter === category.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PortfolioCard key={item.id} item={item} />
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
              <span>📞 CALL TOLL FREE +1 (321) 800-2759</span>
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
              <span>✉️ NEED HELP? info@a2itltd.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-400 text-center mb-2">What We Do</p>
          <h2 className="text-5xl font-bold text-center mb-12">
            WE ARE <span className="text-yellow-500">OPTIMISTS</span> WHO LOVE
            <br />
            TO WORK <span className="text-yellow-500">TOGETHER</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/services/design-development"
              className="px-8 py-4 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all"
            >
              WEBSITE DESIGN
            </Link>
            <Link
              href="/services/ecommerce"
              className="px-8 py-4 bg-gray-800 text-white font-bold hover:bg-gray-700 transition-all"
            >
              E-COMMERCE
            </Link>
            <Link
              href="/services/erp-system"
              className="px-8 py-4 bg-gray-800 text-white font-bold hover:bg-gray-700 transition-all"
            >
              CMS WEBSITE
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8">
              WE ARE <span className="text-yellow-500">RELIABLE</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="bg-gray-800 px-6 py-4 rounded">ANDY CARD</div>
              <div className="bg-gray-800 px-6 py-4 rounded">COMMUNITY</div>
              <div className="bg-gray-800 px-6 py-4 rounded">DESIGN AWARD</div>
              <div className="bg-gray-800 px-6 py-4 rounded">BEST DESIGN</div>
              <div className="bg-gray-800 px-6 py-4 rounded">TOP RATED</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PortfolioCard({ item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState('');

  const handleMouseEnter = () => {
    setIsHovered(true);
    let index = 0;
    const text = item.description;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTypedText('');
  };

  return (
    <div
      className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all bg-gradient-to-br from-gray-800 to-gray-900 aspect-square cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default View */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="text-center text-white p-8">
          <div className="text-8xl mb-4">{item.image}</div>
          <h3 className="text-2xl font-bold">{item.title}</h3>
        </div>
      </div>

      {/* Hover View with Typing Animation */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 p-8 flex flex-col justify-between transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
          <p className="text-white text-lg mb-4">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
