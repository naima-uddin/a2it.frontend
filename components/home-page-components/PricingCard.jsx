// ServicesPricingCards.jsx
import { useState } from 'react';
import pricingData from './pricing-data.json';

const COLORS = {
  blue: {
    bg: 'bg-blue-600',
    text: 'text-white',
    hover: 'hover:bg-black hover:text-white'
  },
  black: {
    bg: 'bg-black',
    text: 'text-white',
    hover: 'hover:bg-blue-600 hover:text-white'
  }
};

const SERVICE_ICONS = {
  'Design and Development': '🎨',
  'E-Commerce': '🛒',
  'Amazon Services': '📦',
  'Shopify': '🏪',
  'ERP System Development': '📊',
  'SEO / SEM / PPC': '📈',
  'Server and Hosting Services': '🌐',
  'E-bay Services': '🏷️'
};

const PricingCard = ({ pkg, index }) => {
  const colorStyle = COLORS[pkg.color || 'blue'];
  
  return (
    <div 
      className={`
        relative 
        rounded-lg 
        shadow-xl 
        transition-all 
        duration-300 
        transform 
        hover:-translate-y-2 
        hover:shadow-2xl 
        overflow-hidden
        cursor-pointer
        ${colorStyle.bg} 
        ${colorStyle.text} 
        ${colorStyle.hover}
        min-h-[450px]
        flex
        flex-col
      `}
    >
      <div className="p-6 flex-grow">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
          <div className="text-4xl font-bold mb-4">{pkg.price}</div>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 w-full">
            GET STARTED
          </button>
        </div>
        
        <div className="border-t border-white/20 pt-6 mt-6">
          <h4 className="text-lg font-semibold mb-4">Package Details:</h4>
          <ul className="space-y-3">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-2">✔</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-black/20 p-4 text-center">
        <button className="text-white hover:text-gray-200 font-semibold transition-colors duration-300">
          VIEW ALL FEATURES →
        </button>
      </div>
    </div>
  );
};

const ServicesPricingCards = () => {
  const [activeService, setActiveService] = useState(pricingData.services[0].id);

  const currentService = pricingData.services.find(service => service.id === activeService);
  const packages = currentService?.packages || [];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          What We Do
        </h1>
        <p className="text-xl text-gray-600 italic">
          WE ARE OPTIMISTS WHO LOVE TO WORK TOGETHER
        </p>
      </div>

      {/* Service Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {pricingData.services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveService(service.id)}
            className={`
              flex items-center gap-2 
              px-6 py-3 
              rounded-lg 
              font-semibold 
              transition-all 
              duration-300
              ${activeService === service.id 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            <span className="text-xl">{SERVICE_ICONS[service.category]}</span>
            <span>{service.category}</span>
          </button>
        ))}
      </div>

      {/* Current Service Info */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          {currentService?.category}
        </h2>
        <p className="text-gray-600">Choose the perfect package for your needs</p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <PricingCard 
            key={pkg.id} 
            pkg={pkg} 
            index={index}
          />
        ))}
      </div>

      {/* Note about default colors */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>Note: Cards are blue by default, with every third card (Gold package) set to black as per requirements.</p>
      </div>
    </div>
  );
};

export default ServicesPricingCards;