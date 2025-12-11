"use client"
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [activeService, setActiveService] = useState('Design & Development');
  const [currentPage, setCurrentPage] = useState(0);
  const [pricingData, setPricingData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetch('/pricing-data.json')
      .then(res => res.json())
      .then(data => {
        setPricingData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading pricing data:', error);
        setLoading(false);
      });
  }, []);

  const services = pricingData?.services || [];
  const currentService = services.find(service => service.category === activeService);
  const packagesPerPage = 3;
  
  const totalPages = currentService ? Math.ceil(currentService.packages.length / packagesPerPage) : 0;
  const startIndex = currentPage * packagesPerPage;
  const visiblePackages = currentService?.packages.slice(startIndex, startIndex + packagesPerPage) || [];

  // Auto-rotate pages every 5 seconds
  useEffect(() => {
    if (totalPages <= 1) return; // Don't rotate if only one page
    
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [totalPages]);

  // Navigation functions
  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (totalPages <= 1) return;
      
      if (e.key === 'ArrowLeft') {
        prevPage();
      } else if (e.key === 'ArrowRight') {
        nextPage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevPage, nextPage, totalPages]);

  if (loading) {
    return (
      <main className="pt-20 bg-white min-h-screen">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-blue-600">Loading pricing data...</div>
        </div>
      </main>
    );
  }

  if (!pricingData) {
    return (
      <main className="pt-20 bg-white min-h-screen">
        <div className="flex justify-center items-center h-64">
          <div className="text-xl text-red-600">Failed to load pricing data</div>
        </div>
      </main>
    );
  }

  if (!currentService) {
    return null;
  }

  // Function to determine card style based on package name
  const getCardStyle = (pkg, isHovered) => {
    const isSpecialPackage = pkg.name === 'Special' || pkg.name === 'Platinum';
    
    if (isSpecialPackage) {
      // Special and Platinum packages - Elegant Black Theme
      return {
        headerBg: isHovered ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-gray-900 via-black to-gray-900',
        headerText: 'text-white',
        bodyBg: isHovered ? 'bg-gray-50' : 'bg-white',
        bodyText: 'text-gray-700',
        buttonBg: isHovered ? 'bg-blue-600' : 'bg-blue-500',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-blue-600',
        borderColor: isHovered ? 'border-blue-500' : 'border-gray-300',
        shadow: isHovered ? 'shadow-2xl ring-2 ring-blue-500/10' : 'shadow-xl',
        iconColor: 'text-blue-500',
        transform: isHovered ? 'translateY(-10px) scale-[1.02]' : 'translateY(0) scale-100',
        priceColor: 'text-white',
        accentTop: 'relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-blue-600',
        badge: 'absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg',
        badgeText: pkg.name.toUpperCase()
      };
    } else {
      // Standard packages - Professional Blue Theme
      return {
        headerBg: isHovered ? 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600' : 'bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600',
        headerText: 'text-white',
        bodyBg: isHovered ? 'bg-blue-50' : 'bg-white',
        bodyText: 'text-gray-700',
        buttonBg: isHovered ? 'bg-black' : 'bg-gray-900',
        buttonText: 'text-white',
        buttonHover: 'hover:bg-black',
        borderColor: isHovered ? 'border-blue-400' : 'border-gray-300',
        shadow: isHovered ? 'shadow-xl ring-1 ring-blue-400/10' : 'shadow-lg',
        iconColor: 'text-blue-500',
        transform: isHovered ? 'translateY(-8px) scale-[1.01]' : 'translateY(0) scale-100',
        priceColor: 'text-white',
        accentTop: '',
        badge: null,
        badgeText: null
      };
    }
  };

  return (
    <main className="pt-10 bg-white">

      {/* Pricing Section */}
      <section className="py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
              WE ARE <span className="text-blue-600">OPTIMISTS</span> WHO LOVE
              <br />
              TO WORK <span className="text-blue-600">TOGETHER</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-4">
              Choose the perfect plan for your business needs. All packages come with our commitment to excellence.
            </p>

            {/* Enhanced Service Tabs */}
            <div className="w-full overflow-x-auto pb-2 mb-6">
              <div className="flex flex-nowrap justify-center gap-2 min-w-max px-4">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      setActiveService(service.category);
                      setCurrentPage(0);
                    }}
                    className={`px-6 py-3 font-bold text-sm transition-all duration-300 rounded-sm whitespace-nowrap relative overflow-hidden group border ${
                      activeService === service.category
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 border-blue-600 transform scale-105'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700'
                    }`}
                  >
                    {/* Active indicator */}
                    {activeService === service.category && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-100"></div>
                        <span className="relative z-10 font-extrabold">{service.category}</span>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-t-full z-20"></div>
                      </>
                    )}
                    {activeService !== service.category && (
                      <span className="relative">{service.category}</span>
                    )}
                    
                    {/* Hover effect for inactive tabs */}
                    {activeService !== service.category && (
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/10 transition-all duration-300"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Pricing Cards with Navigation */}
          <div className="relative">
            {/* Left Navigation Arrow */}
            {totalPages > 1 && (
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-10 bg-white/90 hover:bg-white border border-gray-300 hover:border-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
                aria-label="Previous page"
              >
                <svg 
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Navigation Arrow */}
            {totalPages > 1 && (
              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 md:translate-x-12 z-10 bg-white/90 hover:bg-white border border-gray-300 hover:border-blue-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
                aria-label="Next page"
              >
                <svg 
                  className="w-6 h-6 md:w-8 md:h-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {visiblePackages.map((pkg, index) => {
                const isHovered = hoveredCard === pkg.id;
                const style = getCardStyle(pkg, isHovered);
                
                return (
                  <div
                    key={pkg.id}
                    onMouseEnter={() => setHoveredCard(pkg.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative rounded-sm border-2 ${style.borderColor} ${style.shadow} transition-all duration-500 overflow-hidden ${style.transform} ${style.accentTop}`}
                  >
                    {/* Floating Badge for Special/Platinum */}
                    {style.badge && (
                      <div className={style.badge}>
                        {style.badgeText}
                      </div>
                    )}

                    {/* Package Header with Gradient */}
                    <div className={`${style.headerBg} p-10 text-center relative overflow-hidden ${style.badge ? 'pt-16' : 'pt-10'}`}>
                      {/* Package Name */}
                      <div className="mb-4">
                        <h3 className={`text-3xl font-bold ${style.headerText} tracking-tight`}>{pkg.name}</h3>
                      </div>
                      
                      {/* Price with Emphasis */}
                      <div className="mb-4">
                        <div className={`text-5xl font-black ${style.priceColor} leading-none mb-2`}>
                          {pkg.price}
                        </div>
                        <div className="h-px w-20 bg-white/40 mx-auto"></div>
                      </div>
                      
                      {/* CTA Button */}
                      <Link
                        href="/contact"
                        className={`inline-block w-full py-4 font-bold rounded-sm transition-all duration-300 transform hover:scale-[1.02] ${style.buttonBg} ${style.buttonText} ${style.buttonHover} shadow-lg hover:shadow-xl`}
                      >
                        GET STARTED
                      </Link>
                    </div>

                    {/* Package Features */}
                    <div className={`${style.bodyBg} p-8 transition-colors duration-300`}>
                      <h4 className={`text-xl font-semibold mb-8 text-center ${style.bodyText} relative pb-2`}>
                        <span className="relative">
                          What's Included
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        </span>
                      </h4>
                      <ul className="space-y-4">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start group">
                            <div className="relative mr-4">
                              <div className={`w-6 h-6 rounded-full ${style.iconColor} bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <svg
                                  className="w-3 h-3"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            </div>
                            <span className={`text-base ${style.bodyText} group-hover:text-gray-900 transition-colors duration-300 flex-1`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Special Highlight for Special/Platinum */}
                    {(pkg.name === 'Special' || pkg.name === 'Platinum') && (
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-gradient-to-r ${pkg.name === 'Special' ? 'from-blue-500 to-blue-600' : 'from-blue-500 to-blue-600'} rounded-full blur-sm opacity-70`}></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Enhanced Navigation with Auto-rotate indicator */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-8 -mt-8">
                <div className="flex justify-center items-center gap-6">
                  
                  {/* Pagination with Indicators */}
                  <div className="flex items-center gap-4">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx)}
                        className={`relative w-4 h-4 rounded-xl flex items-center justify-center text-base font-bold transition-all duration-300 ${
                          currentPage === idx 
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-110' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                        }`}
                      >
                        {idx + 1}
                        {currentPage === idx && (
                          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-blue-500 rounded-full"></span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
               
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Ultra-Compact Professional CTA */}
      <section className="py-4 bg-blue-600 mt-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-md p-8 border border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Text content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to scale your business?
                </h3>
                <p className="text-gray-300 text-sm">
                  Get enterprise solutions tailored for growth
                </p>
              </div>

              {/* Contact info with subtle animations */}
              <div className="flex items-center gap-6">
                {/* Phone */}
                <div className="group relative">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Call</div>
                      <div className="text-sm font-medium text-white">+1 (321) 800-2759</div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>

                {/* Email */}
                <div className="group relative">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-lg">✉️</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">Email</div>
                      <div className="text-sm font-medium text-white truncate max-w-[140px]">info@a2itltd.com</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black relative">
            <span className="relative">
              CLIENT SUCCESS STORIES
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div key={item} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed italic">
                  "Exceptional service and outstanding results. The team exceeded our expectations and delivered a solution that transformed our digital presence completely."
                </p>
                <div className="flex items-center pt-8 border-t border-gray-100">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg">
                    {['JD', 'SM', 'RK'][index]}
                  </div>
                  <div>
                    <div className="font-bold text-black text-xl">{['John Davidson', 'Sarah Miller', 'Robert Kim'][index]}</div>
                    <div className="text-gray-500">{['TechCorp Inc.', 'Global Solutions', 'Innovate Labs'][index]}</div>
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