// components/ServicesSection.jsx
import React from 'react';
import Image from 'next/image';

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
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            {/* Header Text */}
            <div className="mb-8">
              <p className="text-gray-600 text-lg mb-3">
                In the ever-connected, attention-challenged digital era.
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Designs Genie specializes in creating captivating brand experiences{' '}
                <span className="text-blue-600">that inspire audiences that truly count.</span>
              </h2>
            </div>

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-blue-600 text-xl flex-shrink-0">✔</span>
                  <span className="text-gray-700 text-base md:text-lg">{service}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-lg text-xl transition-colors duration-200 shadow-lg hover:shadow-xl">
                Let's Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <Image
                src="/promotionPortfolio/serviceSectionImg.png" // Replace with your image path
                alt="Design Services Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;