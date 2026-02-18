// components/ServicesSection.jsx
import React from 'react';

const ServicesSection = () => {
  const services = [
    "Website Design & Development",
    "Ecommerce Website Development",
    "Web Application Development",
    "Mobile Application Development",
    "Website Maintenance",
    "Domain and Hosting",
    "Branding And Stationary Design",
    "Video Animation",
    "Search Engine Optimization"
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mb-2">
            In the ever-connected, attention-challenged digital era.
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Designs Genie specializes in creating captivating brand experiences{' '}
            <span className="text-blue-600">that inspire audiences that truly count.</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-blue-600 text-xl">✔</span>
              <span className="text-gray-700 text-lg">{service}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;