// components/StatsSectionSimple.jsx
import React from 'react';

const StatsSectionSimple = () => {
  const stats = [
    { value: "100%", label: "SUCCESSFUL PROJECTS" },
    { value: "100%", label: "SATISFACTION" },
    { value: "1000+", label: "SUCCESSFUL DEALS" }
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose your plan
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stat Value */}
              <div className="mb-4">
                <span className="text-6xl md:text-7xl font-bold text-blue-600">
                  {stat.value}
                </span>
              </div>
              
              {/* Stat Label */}
              <p className="text-lg md:text-xl font-semibold text-gray-700 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSectionSimple;