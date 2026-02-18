"use client";
// Add this useState import at the top
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles } from 'lucide-react';
const PromotionPricing = () => {
    const [activeFaq, setActiveFaq] = useState(null);
  // Component fixed to show only the "Design & Development" category — tab/scroll states removed

  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  // Inlined Design & Development data (component-local)
  const designService = {
    id: 1,
    category: 'Design & Development',
    packages: [
      {
        id: 'design-special',
        name: 'Special',
        price: '$299.00',
        originalPrice: '$349',
        discount: '70% Off',
        color: 'teal',
        features: [
          'Custom Website Design',
          'Responsive Layout',
          '5 Page Website',
          'Contact Form',
          'Basic SEO Setup',
          '1 Month Support'
        ]
      },
      {
        id: 'design-plus',
        name: 'Plus',
        price: '$599.00',
        originalPrice: '$949',
        discount: '70% Off',
        color: 'orange',
        features: [
          'Everything in Special',
          '10 Page Website',
          'CMS Integration',
          'Custom Animations',
          'E-commerce Ready',
          '3 Months Support'
        ]
      },
      {
        id: 'design-gold',
        name: 'Gold',
        price: '$999.00',
        originalPrice: '$1798',
        discount: '70% Off',
        color: 'red',
        features: [
          'Everything in Plus',
          '15 Page Website',
          'Advanced SEO',
          'Performance Optimization',
          'Custom Admin Panel',
          '6 Months Support'
        ]
      },
      {
        id: 'design-platinum',
        name: 'Platinum',
        price: '$1499.00',
        originalPrice: '$2499',
        discount: '70% Off',
        color: 'blue',
        features: [
          'Everything in Gold',
          '20 Page Website',
          'Custom Plugins',
          'API Integration',
          'Multi-language Support',
          '1 Year Support'
        ]
      },
      {
        id: 'design-boss',
        name: 'The Boss',
        price: '$2499.00',
        originalPrice: '$3999',
        discount: '70% Off',
        color: 'purple',
        features: [
          'Everything in Platinum',
          'Unlimited Pages',
          'Custom Frameworks',
          'Progressive Web App',
          'Advanced Security',
          'Lifetime Updates'
        ]
      },
      {
        id: 'design-diamond',
        name: 'Diamond',
        price: '$3999.00',
        originalPrice: '$5999',
        discount: '70% Off',
        color: 'indigo',
        features: [
          'Everything in The Boss',
          'Enterprise Solution',
          'Dedicated Team',
          'Custom AI Features',
          'White Label',
          '24/7 Priority Support'
        ]
      }
    ]
  };

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const currentService = designService;
  
  // Determine packages per page based on screen size
  const packagesPerPage = isMobile ? 1 : 3;
  
  const totalPages = currentService ? Math.ceil(currentService.packages.length / packagesPerPage) : 0;
  const startIndex = currentPage * packagesPerPage;
  const visiblePackages = currentService?.packages.slice(startIndex, startIndex + packagesPerPage) || [];

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



  if (!currentService) {
    return null;
  }

  // Function to determine card style based on package color
  const getCardStyle = (pkg, isHovered) => {
    const colorMap = {
      teal: {
        headerBg: 'bg-gradient-to-br from-teal-500 to-teal-600',
        buttonBg: 'bg-teal-600',
        buttonHover: 'hover:bg-teal-700',
        ribbonBg: 'bg-black',
        iconBg: 'bg-teal-500'
      },
      orange: {
        headerBg: 'bg-gradient-to-br from-orange-500 to-yellow-600',
        buttonBg: 'bg-orange-600',
        buttonHover: 'hover:bg-orange-700',
        ribbonBg: 'bg-black',
        iconBg: 'bg-orange-500'
      },
      red: {
        headerBg: 'bg-gradient-to-br from-red-600 to-red-700',
        buttonBg: 'bg-red-700',
        buttonHover: 'hover:bg-red-800',
        ribbonBg: 'bg-black',
        iconBg: 'bg-red-600'
      },
      blue: {
        headerBg: 'bg-gradient-to-br from-blue-600 to-blue-700',
        buttonBg: 'bg-blue-700',
        buttonHover: 'hover:bg-blue-800',
        ribbonBg: 'bg-black',
        iconBg: 'bg-blue-600'
      },
      purple: {
        headerBg: 'bg-gradient-to-br from-purple-600 to-purple-700',
        buttonBg: 'bg-purple-700',
        buttonHover: 'hover:bg-purple-800',
        ribbonBg: 'bg-black',
        iconBg: 'bg-purple-600'
      },
      indigo: {
        headerBg: 'bg-gradient-to-br from-indigo-600 to-indigo-700',
        buttonBg: 'bg-indigo-700',
        buttonHover: 'hover:bg-indigo-800',
        ribbonBg: 'bg-black',
        iconBg: 'bg-indigo-600'
      }
    };

    const colors = colorMap[pkg.color] || colorMap.blue;
    
    return {
      ...colors,
      headerText: 'text-white',
      bodyBg: 'bg-white',
      bodyText: 'text-gray-700',
      buttonText: 'text-white',
      borderColor: 'border-gray-200',
      shadow: isHovered ? 'shadow-2xl' : 'shadow-xl',
      transform: isHovered ? 'translateY(-8px) scale-[1.02]' : 'translateY(0) scale-100'
    };
  };




  return (
    <>
      <section className="relative py-20 flex items-center justify-center overflow-hidden">
     
      <style jsx>{`
        .btn-3d {
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: linear-gradient(145deg, #66B2FF, #000099);
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          min-width: 220px;
          text-align: center;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        
        .btn-3d:hover {
          transform: translateY(-4px) rotateX(10deg);
          box-shadow: 
            0 15px 30px rgba(102, 126, 234, 0.4),
            inset 0 -3px 0 rgba(0,0,0,0.2);
          background: linear-gradient(145deg, #764ba2, #667eea);
        }
        
        .btn-3d:active {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 20px rgba(102, 126, 234, 0.3),
            inset 0 -2px 0 rgba(0,0,0,0.2);
        }
        
        /* Top edge effect */
        .btn-3d::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          height: 30%;
          background: linear-gradient(rgba(255,255,255,0.3), transparent);
          border-radius: 10px 10px 0 0;
          opacity: 0.6;
        }
        
        /* Neon Button Style - Fixed white background */
        .btn-neon {
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: linear-gradient(145deg, #66B2FF, #000099);
          border: none;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          min-width: 220px;
          text-align: center;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        .btn-neon:hover {
          transform: translateY(-4px) rotateX(10deg);
          box-shadow: 
            0 15px 30px rgba(102, 126, 234, 0.4),
            inset 0 -3px 0 rgba(0,0,0,0.2);
          background: linear-gradient(145deg, #764ba2, #667eea);
        }
        
        .btn-neon:active {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 20px rgba(245, 87, 108, 0.3),
            inset 0 -2px 0 rgba(0,0,0,0.2);
        }
        
        /* Top edge effect */
        .btn-neon::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          height: 30%;
          background: linear-gradient(rgba(255,255,255,0.3), transparent);
          border-radius: 10px 10px 0 0;
          opacity: 0.6;
        }
        
        /* Responsive */
        /* Responsive */
        @media (max-width: 640px) {
          .btn-3d,
          .btn-neon {
            padding: 8px 10px;
            font-size: 12px;
            min-width: auto;     /* 🔑 allow buttons to shrink */
            width: auto;
            letter-spacing: 0.4px;
          }
        }

        /* Extra small devices (very small phones) */
        @media (max-width: 400px) {
          .btn-3d,
          .btn-neon {
            padding: 6px 8px;
            font-size: 10px;
          }
        }

      `}</style>
      </section>
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">

      {/* Header */}
      <div className="container mx-auto px-4">
          <section className="py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6 leading-tight">
              WE ARE <span className="text-blue-600">OPTIMISTS</span> WHO LOVE
              <br className="hidden md:block" />
              TO WORK <span className="text-blue-600">TOGETHER</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-4 px-4">
              Choose the perfect plan for your business needs. All packages come with our commitment to excellence.
            </p>
          </div>

          {/* Enhanced Pricing Cards with Navigation */}
          <div className="relative">
            {/* Left Navigation Arrow - Show only if more than one page */}
            {totalPages > 1 && (
              <button
                onClick={prevPage}
                className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-300 hover:border-blue-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group ${
                  isMobile ? 'w-10 h-10 -translate-x-4' : 'w-12 h-12 md:w-16 md:h-16 -translate-x-6 md:-translate-x-12'
                }`}
                aria-label="Previous page"
              >
                <svg 
                  className={`text-gray-600 group-hover:text-blue-600 transition-colors duration-300 ${
                    isMobile ? 'w-5 h-5' : 'w-6 h-6 md:w-8 md:h-8'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Right Navigation Arrow - Show only if more than one page */}
            {totalPages > 1 && (
              <button
                onClick={nextPage}
                className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white border border-gray-300 hover:border-blue-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group ${
                  isMobile ? 'w-10 h-10 translate-x-4' : 'w-12 h-12 md:w-16 md:h-16 translate-x-6 md:translate-x-12'
                }`}
                aria-label="Next page"
              >
                <svg 
                  className={`text-gray-600 group-hover:text-blue-600 transition-colors duration-300 ${
                    isMobile ? 'w-5 h-5' : 'w-6 h-6 md:w-8 md:h-8'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Cards Container - Different grid for mobile vs desktop */}
            <div className={`mb-10 ${isMobile ? 'px-8' : 'grid grid-cols-1 md:grid-cols-3 gap-8'}`}>
              {visiblePackages.map((pkg, index) => {
                const isHovered = hoveredCard === pkg.id;
                const style = getCardStyle(pkg, isHovered);
                
                return (
                  <div
                    key={pkg.id}
                    onMouseEnter={() => setHoveredCard(pkg.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`rounded-lg overflow-hidden ${style.shadow} transition-all duration-500 ${style.transform} ${ 
                      isMobile ? 'w-full mb-8' : ''
                    } relative bg-white`}
                  >
                    {/* Floating Badge for Special/Platinum */}
                    {style.badge && (
                      <div className={style.badge}>
                        {style.badgeText}
                      </div>
                    )}

                    {/* Package Header with Gradient */}
                    <div className={`${style.headerBg} p-6 md:p-10 text-center relative overflow-hidden ${style.badge ? 'pt-14 md:pt-16' : 'pt-6 md:pt-10'}`}>
                      {/* Package Name */}
                      <div className="mb-4">
                        <h3 className={`text-2xl md:text-3xl font-bold ${style.headerText} tracking-tight`}>{pkg.name}</h3>
                      </div>
                      
                      {/* Price with Emphasis */}
                      <div className="mb-4">
                        <div className={`text-4xl md:text-5xl font-black ${style.priceColor} leading-none mb-2`}>
                          {pkg.price}
                        </div>
                        <div className="h-px w-16 md:w-20 bg-white/40 mx-auto"></div>
                      </div>
                      
                      {/* CTA Button */}
                      <Link
                        href="/contact"
                        className={`inline-block w-full py-3 md:py-4 font-bold rounded-sm transition-all duration-300 transform hover:scale-[1.02] ${style.buttonBg} ${style.buttonText} ${style.buttonHover} shadow-lg hover:shadow-xl`}
                      >
                        GET STARTED
                      </Link>
                    </div>

                    {/* Package Features */}
                    <div className={`${style.bodyBg} p-6 md:p-8 transition-colors duration-300`}>
                      <h4 className={`text-lg md:text-xl font-semibold mb-6 md:mb-8 text-center ${style.bodyText} relative pb-2`}>
                        <span className="relative">
                          What's Included
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 md:w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                        </span>
                      </h4>
                      <ul className="space-y-3 md:space-y-4">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start group">
                            <div className="relative mr-3 md:mr-4">
                              <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${style.iconColor} bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                <svg
                                  className="w-2.5 h-2.5 md:w-3 md:h-3"
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
                            <span className={`text-sm md:text-base ${style.bodyText} group-hover:text-gray-900 transition-colors duration-300 flex-1`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Special Highlight for Special/Platinum */}
                    {(pkg.name === 'Special' || pkg.name === 'Platinum') && (
                      <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-1.5 md:h-2 bg-gradient-to-r ${pkg.name === 'Special' ? 'from-blue-500 to-blue-600' : 'from-blue-500 to-blue-600'} rounded-full blur-sm opacity-70`}></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      </div>

    </div>
    </>
  );
};



export default PromotionPricing;