"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiShoppingCart,
  FiCreditCard,
  FiSmartphone,
  FiShield,
  FiTrendingUp,
  FiPieChart,
  FiTarget,
  FiLayers,
  FiBarChart2,
  FiCheckCircle,
  FiCpu,
  FiServer,
  FiTruck,
  FiUsers,
  FiArrowLeft,
  FiArrowRight,
  FiTag,
  FiPackage,
  FiGlobe,
  FiChevronDown,
  FiChevronUp,
  FiBox,
  FiShoppingBag,
  FiDatabase,
  FiZap,
  FiAward,
  FiGrid,
  FiFilter,
  FiStar,
  FiTruck as FiShipping,
  FiRefreshCw,
  FiShoppingCart as FiCart,
  FiHexagon,
  FiHeadphones,
  FiArrowRight as FiArrowRightIcon,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

// Import your actual data from JSON files
const pricingData = {
  "services": [
    {
      "id": 4,
      "category": "Shopify",
      "packages": [
        {
          "id": "shopify-special",
          "name": "Special",
          "price": "$399.00",
          "color": "blue",
          "features": [
            "Shopify Store Setup",
            "Theme Customization",
            "10 Product Import",
            "Payment Setup",
            "Basic Apps",
            "1 Month Support"
          ]
        },
        {
          "id": "shopify-plus",
          "name": "Plus",
          "price": "$799.00",
          "color": "blue",
          "features": [
            "Everything in Special",
            "Custom Theme",
            "50 Product Import",
            "Advanced Apps",
            "Email Marketing",
            "3 Months Support"
          ]
        },
        {
          "id": "shopify-gold",
          "name": "Gold",
          "price": "$1299.00",
          "color": "black",
          "features": [
            "Everything in Plus",
            "Custom Development",
            "Unlimited Products",
            "API Integration",
            "Abandoned Cart",
            "6 Months Support"
          ]
        },
        {
          "id": "shopify-platinum",
          "name": "Platinum",
          "price": "$2299.00",
          "color": "blue",
          "features": [
            "Everything in Gold",
            "Custom Apps",
            "Multi-currency",
            "Advanced Analytics",
            "Custom Checkout",
            "1 Year Support"
          ]
        },
        {
          "id": "shopify-boss",
          "name": "The Boss",
          "price": "$3799.00",
          "color": "blue",
          "features": [
            "Everything in Platinum",
            "Headless Shopify",
            "Custom Features",
            "ERP Integration",
            "Dropshipping Setup",
            "Priority Support"
          ]
        },
        {
          "id": "shopify-diamond",
          "name": "Diamond",
          "price": "$5499.00",
          "color": "blue",
          "features": [
            "Everything in The Boss",
            "Enterprise Solution",
            "Custom AI Tools",
            "Complete Automation",
            "White Label",
            "24/7 Support"
          ]
        }
      ]
    }
  ]
};

const portfolioData = {
  "portfolio": {
    "portfolioProjects": [
      {
        "id": 1,
        "title": "Cargo Logistics Company – Corporate Website & Services Platform",
        "category": ["WordPress", "Web Development", "Logistics"],
        "type": "portfolio",
        "status": "live",
        "description": "A professional corporate website designed to present logistics services, cargo solutions, and global freight capabilities for international clients.",
        "technologies": ["Next.js", "React", "EmailJS", "Tailwind CSS", "Node.js", "Express.js", "REST API", "C-panel Hosting", "SEO Optimization"],
        "image": "/assets/Portfolio/cargo-logistics-1.png",
        "performance": [
          { "label": "Page Speed Score", "value": "90+" },
          { "label": "Mobile Responsiveness", "value": "100%" }
        ]
      },
      {
        "id": 3,
        "title": "BestBuyersView – Discover, Compare & Pick the Best Products",
        "category": ["UI/UX Design", "Web Development", "Affiliate Platform", "E-commerce"],
        "type": "portfolio",
        "status": "live",
        "description": "A scalable UI/UX design system created to support a high-performance affiliate review and content-driven platform.",
        "technologies": ["Figma", "React", "Tailwind CSS", "Design Tokens", "Component-Based Architecture"],
        "image": "/assets/Portfolio/bestbuyersview-1.png",
        "performance": [
          { "label": "Development Speed Increase", "value": "60%" },
          { "label": "Reusable UI Components", "value": "80+" }
        ]
      },
      {
        "id": 5,
        "title": "JuteCraftify – Sustainable Jute E-commerce Platform",
        "category": ["E-commerce", "WordPress"],
        "type": "portfolio",
        "status": "live",
        "description": "A modern e-commerce platform dedicated to promoting sustainable jute products worldwide, featuring secure payments, streamlined inventory management, and export-ready workflows.",
        "technologies": ["Shopify", "React", "Node.js", "Payment Gateway Integration", "SEO Optimization"],
        "image": "/assets/Portfolio/jutecraftify-1.png",
        "performance": [
          { "label": "International Customer Growth", "value": "120%" },
          { "label": "Conversion Rate Increase", "value": "30%" }
        ]
      },
      {
        "id": 10,
        "title": "Commercial Tyre LLC – Bulk Tyre Sales & Management System",
        "category": ["Web Development", "Affiliate Platform", "E-commerce"],
        "type": "portfolio",
        "status": "live",
        "description": "Data-driven digital marketing services to boost traffic, conversions, and brand awareness.",
        "technologies": ["Inventory Management System", "Order Processing", "Payment Gateway Integration", "Logistics Management", "Customer Relationship Management"],
        "image": "/assets/Portfolio/c-tire.png",
        "performance": [
          { "label": "Organic Traffic", "value": "2X" },
          { "label": "Return on Ad Spend", "value": "5X" }
        ]
      },
      {
        "id": 18,
        "title": "Best E-bike Store",
        "category": ["E-commerce", "Affiliate Platform", "Web Development"],
        "type": "portfolio",
        "status": "live",
        "description": "E-commerce store for electric bikes with integrated payment and shipping solutions.",
        "technologies": ["WooCommerce", "React", "WordPress", "Stripe"],
        "image": "/assets/Portfolio/bestbikereview-2.png",
        "performance": [
          { "label": "Monthly Sales", "value": "$150K+" },
          { "label": "Conversion Rate", "value": "3.8%" }
        ]
      },
      {
        "id": 21,
        "title": "KitchenPro Supply",
        "category": ["WordPress"],
        "type": "portfolio",
        "status": "live",
        "description": "A WordPress-based e-commerce store specializing in kitchen supplies and appliances.",
        "technologies": ["WordPress", "WooCommerce", "PHP", "MySQL", "Elementor"],
        "image": "/assets/Portfolio/kitchenpro-supply.png",
        "performance": [
          { "label": "Order Processing Speed", "value": "50% faster" },
          { "label": "Inventory Accuracy", "value": "99.8%" }
        ]
      }
    ]
  }
};

const ShopifyServices = () => {
  const shopifyPackages = pricingData.services.find(s => s.category === "Shopify")?.packages || [];
  const allProjects = portfolioData.portfolio.portfolioProjects;
  
  // Filter Shopify-related projects
  const shopifyProjects = allProjects.filter(project => 
    project.category.includes("E-commerce") || 
    project.category.includes("Shopify") ||
    project.technologies.some(tech => tech.includes("Shopify"))
  );

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Shopify services cards (from your first component)
  const shopifyServices = [
    {
      title: "Store Development",
      description: "Custom, high-converting Shopify stores built for your business",
      icon: <FiShoppingCart className="text-3xl" />,
      color: "from-[#7E6BF0] to-[#5A45EF]",
      features: [
        "Custom theme development",
        "Mobile-optimized design",
        "API integrations",
        "Performance optimization"
      ]
    },
    {
      title: "Platform Migration",
      description: "Seamless transition from other platforms to Shopify",
      icon: <FiServer className="text-3xl" />,
      color: "from-[#00D2AA] to-[#00B393]",
      features: [
        "Data migration",
        "SEO preservation",
        "Design conversion",
        "Post-migration support"
      ]
    },
    {
      title: "App Development",
      description: "Custom apps to extend your store's functionality",
      icon: <FiCpu className="text-3xl" />,
      color: "from-[#4C8BF5] to-[#3B78E7]",
      features: [
        "Custom app development",
        "Private app creation",
        "App integration",
        "App maintenance"
      ]
    },
    {
      title: "Marketing & SEO",
      description: "Drive traffic and increase conversions",
      icon: <FiTrendingUp className="text-3xl" />,
      color: "from-[#FF6B8B] to-[#F45A78]",
      features: [
        "SEO optimization",
        "Conversion rate optimization",
        "Email marketing integration",
        "Analytics configuration"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing care for your Shopify store",
      icon: <FiHeadphones className="text-3xl" />,
      color: "from-[#A56EF0] to-[#8D54E8]",
      features: [
        "Regular updates",
        "Security monitoring",
        "24/7 support",
        "Backup solutions"
      ]
    }
  ];

  const successStories = [
    {
      title: "Fashion Retailer Transformation",
      metrics: "68% faster load times, 42% increase in mobile conversions",
      result: "$1.2M increased annual revenue",
      image: "/assets/BlogImg/1.avif"
    },
    {
      title: "Health Supplement Store",
      metrics: "83% subscription retention, 57% more repeat customers",
      result: "3.2x ROI within first year",
      image: "/assets/BlogImg/1.avif"
    },
    {
      title: "Home Decor Brand",
      metrics: "2.5x traffic growth, 40% higher conversion rate",
      result: "$850K in first 6 months",
      image: "/assets/BlogImg/1.avif"
    }
  ];

  // Sample products for store preview
  const products = [
    { 
      id: 1, 
      name: "KitchenPro Supply",  
      category: "E-commerce", 
      rating: 4.9,
      description: "A WordPress-based e-commerce store specializing in kitchen supplies and appliances.",
      "image": "/assets/Portfolio/kitchenpro-supply.png",
      badge: "live"
    },
    { 
      id: 2, 
      name: "JuteCraftify", 
      category: "E-commerce", 
      rating: 4.8,
      description: "Sustainable jute e-commerce platform with international shipping.",
      image: "/assets/Portfolio/jutecraftify-1.png",
      badge: "Live"
    },
    { 
      id: 3, 
      name: "BestBuyersView", 
      category: "Affiliate Platform", 
      rating: 4.9,
      description: "Affiliate product review and comparison platform.",
      image: "/assets/Portfolio/bestbuyersview-1.png",
      badge: "Affiliate Platform"
    },
  ];

  // Responsive slides per view
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };
  
  const getProjectsPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  };
  
  const slidesPerView = getSlidesPerView();
  const projectsPerView = getProjectsPerView();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group packages into slides
  const groupedPackages = [];
  for (let i = 0; i < shopifyPackages.length; i += slidesPerView) {
    groupedPackages.push(shopifyPackages.slice(i, i + slidesPerView));
  }

  // Group projects into slides
  const groupedProjects = [];
  for (let i = 0; i < shopifyProjects.length; i += projectsPerView) {
    groupedProjects.push(shopifyProjects.slice(i, i + projectsPerView));
  }

  // Auto rotate products
  useEffect(() => {
    const productInterval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(productInterval);
  }, [products.length]);
  
  // Reset slides when grouping changes
  useEffect(() => {
    setCurrentSlide(0);
    setCurrentProjectSlide(0);
  }, [slidesPerView, projectsPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedPackages.length) % groupedPackages.length);
  };

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % groupedProjects.length);
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + groupedProjects.length) % groupedProjects.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToProjectSlide = (index) => {
    setCurrentProjectSlide(index);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const getPackageColor = (pkg, isHover = false) => {
    if (pkg.name === "Special" && isHover) return "from-gray-800 to-blue-900";
    if (pkg.name === "Special") return "from-gray-800 to-black";
    if (isHover) return "from-blue-600 to-indigo-700";
    return "from-blue-500 to-indigo-600";
  };

  const getCardBackground = (pkg) => {
    if (pkg.name === "Special") return "bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200";
    return "bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-blue-100";
  };

  const getIconForPackage = (pkgName) => {
    switch(pkgName) {
      case "Special": return <FiShoppingBag className="text-2xl" />;
      case "Plus": return <FiTrendingUp className="text-2xl" />;
      case "Gold": return <FiAward className="text-2xl" />;
      case "Platinum": return <FiDatabase className="text-2xl" />;
      case "The Boss": return <FiZap className="text-2xl" />;
      case "Diamond": return <FiGlobe className="text-2xl" />;
      default: return <FiShoppingCart className="text-2xl" />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 overflow-hidden">
      {/* **Hero Section** */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/eCommerce/banner.png')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] text-white font-medium mb-6 rounded-full text-sm shadow-lg"
              >
                <FiHexagon className="mr-2" />
                SHOPIFY EXPERTS
              </motion.div>
              
              <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-white">
                Elevate Your{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]">
                    Shopify Experience
                  </span>
                  <motion.div
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]"
                  />
                </span>{" "}
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-100 max-w-2xl mb-8 leading-relaxed"
              >
                Professional Shopify development with proven results. From concept to launch, we build stores that convert visitors into customers.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:shadow-2xl hover:shadow-[#7E6BF0]/50 transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center">
                    <FiShoppingCart className="mr-2" />
                    Start Your Store
                  </span>
                  <motion.div
                    initial={{ x: "-100%", y: "100%" }}
                    whileHover={{ x: "100%", y: "-100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </Link>
                
                <Link
                  href="#portfolio"
                  className="group inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    View Our Work
                  </span>
                </Link>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 grid grid-cols-3 gap-4 sm:gap-6"
              >
                {[
                  { value: "50K+", label: "Monthly Sales", color: "text-yellow-300" },
                  { value: "4.8⭐", label: "Avg. Rating", color: "text-orange-300" },
                  { value: "99.9%", label: "Uptime", color: "text-green-300" },
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Store Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                <div className="bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-white text-sm font-medium ml-2">Shopify Store Demo</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FiShoppingCart className="text-white/80 text-lg" />
                      <FiUser className="text-white/80 text-lg" />
                      <FiSearch className="text-white/80 text-lg" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-800">Featured Projects</h3>
                    <div className="flex space-x-2">
                      {products.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentProduct(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentProduct === idx ? 'bg-[#7E6BF0] w-6' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProduct}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#7E6BF0] hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                        <Image
                          src={products[currentProduct].image}
                          alt={products[currentProduct].name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                        
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          {products[currentProduct].badge}
                        </div>
                        
                        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                          <span className="text-2xl font-bold bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] bg-clip-text text-transparent">
                            Shopify
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-3 py-1 bg-[#7E6BF0]/10 text-[#7E6BF0] text-xs font-semibold rounded-full">
                            {products[currentProduct].category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <FiStar className="text-amber-500 text-sm fill-current" />
                            <span className="text-sm font-bold text-gray-900">{products[currentProduct].rating}</span>
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#7E6BF0] transition-colors">
                          {products[currentProduct].name}
                        </h4>
                        
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {products[currentProduct].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] rounded-2xl flex items-center justify-center text-white shadow-xl"
              >
                <FiTag className="text-xl" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-[#00D2AA] to-[#00B393] rounded-full flex items-center justify-center text-white shadow-xl"
              >
                <FiCheckCircle className="text-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* **Comprehensive Shopify Solutions Section** */}
      <section className="py-20 px-6 sm:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#7E6BF0] font-semibold tracking-widest text-sm uppercase">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]">Shopify Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From initial setup to ongoing optimization, we provide everything you need to succeed with Shopify.
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
              {shopifyServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex-shrink-0 w-80 snap-start mx-4 bg-gradient-to-br ${service.color} bg-opacity-10 rounded-2xl p-6 border border-opacity-20 backdrop-blur-sm`}
                  style={{ borderColor: service.color.split(' ')[1] }}
                  onMouseEnter={() => setHoveredCard(`service-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 flex items-center justify-center mr-3`}>
                          <FiCheckCircle className={`text-xs ${service.color.split(' ')[1].replace('to-[', '').replace(']', '')}`} />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-sm font-medium flex items-center group text-[#7E6BF0]">
                    <span>Learn more</span>
                    <FiArrowRightIcon className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* **Shopify Projects Section** */}
      <section id="portfolio" className="py-10 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] rounded-2xl mb-6 shadow-lg">
              <FiGrid className="text-2xl text-white" />
            </div>
            <span className="text-[#7E6BF0] font-semibold tracking-widest text-sm block mb-3">
              OUR SHOPIFY PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Successful{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]">
                  Shopify Projects
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real Shopify solutions we've built for businesses across industries
            </p>
          </motion.div>

          {/* Projects Slider Navigation */}
          {groupedProjects.length > 1 && (
            <div className="flex justify-end items-center gap-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevProjectSlide}
                className="p-4 rounded-full bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] hover:from-[#6A5BD0] hover:to-[#4A3BCF] shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowLeft className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextProjectSlide}
                className="p-4 rounded-full bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] hover:from-[#6A5BD0] hover:to-[#4A3BCF] shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowRight className="text-xl" />
              </motion.button>
            </div>
          )}

          {/* Projects Grid Slider */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className={`grid gap-6 sm:gap-8 ${
                  windowWidth < 640 
                    ? 'grid-cols-1' 
                    : windowWidth < 768 
                    ? 'grid-cols-2' 
                    : windowWidth < 1024 
                    ? 'grid-cols-3' 
                    : 'grid-cols-4'
                }`}
              >
                {groupedProjects[currentProjectSlide]?.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#7E6BF0] transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                  >
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] text-white text-xs rounded-full">
                          <FiCheckCircle className="mr-1 text-xs" />
                          {project.status}
                        </span>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {Array.isArray(project.category) && project.category.slice(0, 2).map((cat, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#7E6BF0] transition-colors line-clamp-2 min-h-[3.5rem]">
                        {project.title.split("–")[0].trim()}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 mt-2 line-clamp-2 min-h-[2.5rem]">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#7E6BF0]/10 text-[#7E6BF0] text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        {project.performance.slice(0, 2).map((stat, idx) => (
                          <div key={idx} className="text-center p-3 bg-gradient-to-br from-[#7E6BF0]/10 to-[#5A45EF]/10 rounded-lg border border-[#7E6BF0]/20">
                            <div className="text-base font-bold text-[#7E6BF0] truncate">{stat.value}</div>
                            <div className="text-xs text-gray-600 truncate mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7E6BF0]/5 to-[#5A45EF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators */}
          {groupedProjects.length > 1 && (
            <div className="flex justify-center items-center mt-8 mb-4">
              <div className="flex space-x-3">
                {groupedProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToProjectSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentProjectSlide === index 
                        ? 'bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] w-10' 
                        : 'bg-gray-300 hover:bg-gray-400 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-[#7E6BF0] text-[#7E6BF0] hover:bg-[#7E6BF0]/10 font-semibold py-3 px-8 rounded-xl transition-all duration-300 group"
            >
              <span className="mr-2">View All Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* **Pricing Section** */}
      <section id="pricing" className="py-20 px-6 sm:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] rounded-2xl mb-6 shadow-lg">
              <FiTag className="text-2xl text-white" />
            </div>
            <span className="text-[#7E6BF0] font-semibold tracking-widest text-sm block mb-3">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Choose Your{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]">
                  Shopify Plan
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Scale your Shopify store with our flexible pricing. Start small, grow big.
            </p>
          </motion.div>

          <div className="relative">
            <div className="flex justify-end items-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="p-4 rounded-full bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] hover:from-[#6A5BD0] hover:to-[#4A3BCF] shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowLeft className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="p-4 rounded-full bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] hover:from-[#6A5BD0] hover:to-[#4A3BCF] shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowRight className="text-xl" />
              </motion.button>
            </div>

            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className={`grid gap-6 sm:gap-8 ${
                    windowWidth < 640 
                      ? 'grid-cols-1' 
                      : windowWidth < 1024 
                      ? 'grid-cols-2' 
                      : 'grid-cols-3'
                  }`}
                >
                  {groupedPackages[currentSlide]?.map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredCard(pkg.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`relative rounded-3xl overflow-hidden transition-all duration-500 flex flex-col h-full ${getCardBackground(pkg)} border-2 ${
                        hoveredCard === pkg.id 
                          ? 'border-[#7E6BF0] shadow-2xl scale-[1.02]' 
                          : 'border-gray-100 shadow-xl hover:shadow-2xl'
                      }`}
                    >
                      {pkg.name === "Gold" && (
                        <div className="absolute top-6 -right-10 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white px-10 py-1 rotate-45 shadow-lg z-10">
                          <span className="text-xs sm:text-sm font-bold">MOST POPULAR</span>
                        </div>
                      )}
                      
                      {pkg.name === "Special" && (
                        <div className="absolute top-6 -right-10 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-10 py-1 rotate-45 shadow-lg z-10">
                          <span className="text-xs sm:text-sm font-bold">BEST VALUE</span>
                        </div>
                      )}
                      
                      <div className="p-6 sm:p-8 flex flex-col flex-grow">
                        <div className="text-center mb-6 sm:mb-8">
                          <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-4 ${
                            hoveredCard === pkg.id 
                              ? `bg-gradient-to-r ${getPackageColor(pkg, true)}` 
                              : `bg-gradient-to-r ${getPackageColor(pkg)}`
                          }`}>
                            <div className={pkg.name === "Special" ? "text-white" : "text-white"}>
                              {getIconForPackage(pkg.name)}
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                          <div className="text-3xl sm:text-4xl font-bold mb-2">
                            <span className={pkg.name === "Special" ? "text-gray-900" : "text-[#7E6BF0]"}>{pkg.price}</span>
                            <span className="text-gray-500 text-base sm:text-lg">/one-time</span>
                          </div>
                          <div className="text-sm sm:text-base text-gray-600">Perfect for {pkg.name === "Special" ? "startups" : pkg.name === "Diamond" ? "enterprises" : "growing businesses"}</div>
                        </div>

                        <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                          {pkg.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * idx }}
                              className="flex items-start"
                            >
                              <div className={`mt-1 mr-3 flex-shrink-0 ${
                                pkg.name === "Special" ? "text-gray-700" : "text-[#7E6BF0]"
                              }`}>
                                <FiCheckCircle className="text-base sm:text-lg" />
                              </div>
                              <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <Link href="/contact" className="mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                            pkg.name === "Special"
                              ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-xl hover:from-gray-900 hover:to-black"
                              : hoveredCard === pkg.id
                              ? `text-white bg-gradient-to-r ${getPackageColor(pkg, true)} shadow-lg`
                              : "bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] text-white hover:shadow-xl"
                          }`}
                        >
                          Get {pkg.name} Plan
                        </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center mt-8">
              <div className="flex space-x-3">
                {groupedPackages.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] w-10' 
                        : 'bg-gray-300 hover:bg-gray-400 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* **Process Section** */}
      <section className="py-10 px-6 sm:px-12 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#00D2AA] font-semibold tracking-widest text-sm uppercase">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2AA] to-[#00B393]">Build Success</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7E6BF0] via-[#00D2AA] to-[#4C8BF5] opacity-30"></div>
            
            {[
              {
                step: "Discovery",
                description: "We dive deep into your business goals, target audience, and requirements to create a tailored strategy.",
                icon: <FiTarget className="text-xl" />
              },
              {
                step: "Design",
                description: "Our designers create a stunning, user-friendly interface that reflects your brand and converts visitors.",
                icon: <FiLayers className="text-xl" />
              },
              {
                step: "Development",
                description: "We build your store with clean code, optimized performance, and seamless functionality.",
                icon: <FiCpu className="text-xl" />
              },
              {
                step: "Testing",
                description: "Rigorous testing ensures your store works perfectly across all devices and browsers.",
                icon: <FiCheckCircle className="text-xl" />
              },
              {
                step: "Launch",
                description: "We handle the entire launch process and ensure a smooth transition to your new store.",
                icon: <FiTrendingUp className="text-xl" />
              },
              {
                step: "Support",
                description: "Ongoing maintenance and support to keep your store running at peak performance.",
                icon: <FiHeadphones className="text-xl" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start mb-12 last:mb-0"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#7E6BF0] to-[#5A45EF] flex items-center justify-center text-white font-bold text-lg mr-6">
                    {index + 1}
                  </div>
                  {index < 5 && (
                    <div className="absolute left-7 top-14 w-0.5 h-12 bg-gradient-to-b from-[#7E6BF0] to-[#00D2AA] opacity-50"></div>
                  )}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-[#7E6BF0] bg-opacity-10 rounded-full flex items-center justify-center text-[#7E6BF0] mr-3">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.step}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* **FAQ Section** */}
      <section className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] rounded-2xl mb-6 shadow-lg">
              <FiBox className="text-2xl text-white" />
            </div>
            <span className="text-[#7E6BF0] font-semibold tracking-widest text-sm block mb-3">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF]">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our Shopify solutions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to build a Shopify store?",
                answer: "Typical timeline: Special (2-3 weeks), Plus (3-4 weeks), Gold (4-6 weeks), Platinum (6-8 weeks), The Boss (8-10 weeks), Diamond (10-12 weeks). Timeline depends on features, integrations, and customizations required."
              },
              {
                question: "Do you provide ongoing Shopify maintenance and support?",
                answer: "Yes, all plans include dedicated support. We offer 24/7 monitoring, regular updates, security patches, and performance optimization. Extended support contracts available for enterprise clients."
              },
              {
                question: "Can I migrate from my existing eCommerce platform to Shopify?",
                answer: "Absolutely! We provide free migration services for all data (products, customers, orders). Our team ensures zero downtime and complete data integrity throughout the migration process."
              },
              {
                question: "What payment gateways do you support on Shopify?",
                answer: "We integrate with 50+ payment gateways including Shopify Payments, Stripe, PayPal, Square, Razorpay, and local payment methods. Enterprise plans include custom gateway integrations."
              },
              {
                question: "Is SEO included in your Shopify packages?",
                answer: "Yes, all packages include basic SEO optimization. Gold and higher packages include advanced SEO, schema markup, performance optimization, and ongoing SEO strategy implementation."
              },
              {
                question: "Can I upgrade my Shopify plan later?",
                answer: "Yes, you can upgrade anytime. We offer seamless migration between plans with prorated billing. Downgrades are available at the end of your billing cycle."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  activeAccordion === index 
                    ? 'border-[#7E6BF0] shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center flex-1 pr-4">
                    <div className={`w-8 h-8 rounded-lg mr-3 sm:mr-4 flex items-center justify-center flex-shrink-0 ${
                      activeAccordion === index
                        ? 'bg-gradient-to-r from-[#7E6BF0] to-[#5A45EF] text-white'
                        : 'bg-[#7E6BF0]/10 text-[#7E6BF0]'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <div className={`transition-transform duration-300 ${
                    activeAccordion === index ? 'rotate-180' : ''
                  }`}>
                    {activeAccordion === index ? (
                      <FiChevronUp className="text-gray-600 text-xl" />
                    ) : (
                      <FiChevronDown className="text-gray-600 text-xl" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-6 ml-8 sm:ml-12">
                        <p className="text-sm sm:text-base text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* **Final CTA** */}
      <section className="py-20 px-6 sm:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7E6BF0] via-[#5A45EF] to-[#4A3BCF]">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-white"
          >
            Ready to Launch Your{" "}
            <span className="text-yellow-300">Shopify Success</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
          >
            Join thousands of successful businesses with our proven Shopify solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="group relative overflow-hidden inline-flex items-center bg-white text-[#7E6BF0] hover:text-[#5A45EF] font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 flex items-center">
                <FiShoppingCart className="mr-2 group-hover:rotate-12 transition-transform" />
                Start Free Consultation
              </span>
              <motion.div
                initial={{ x: "-100%", y: "100%" }}
                whileHover={{ x: "100%", y: "-100%" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7E6BF0]/10 to-transparent"
              />
            </Link>
            
            <Link
              href="#portfolio"
              className="group inline-flex items-center border-2 border-white text-white hover:bg-white/10 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-2xl transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <span className="mr-2">See Our Work</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 sm:mt-12 text-blue-100 text-xs sm:text-sm"
          >
            <div className="inline-flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
              <span className="flex items-center">
                <FiShield className="mr-2" />
                <span>30-day money-back guarantee</span>
              </span>
              <span className="flex items-center">
                <FiCheckCircle className="mr-2" />
                <span>No setup fees</span>
              </span>
              <span className="flex items-center">
                <FiZap className="mr-2" />
                <span>Cancel anytime</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Helper components
const FiUser = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
  </svg>
);

const FiSearch = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
  </svg>
);

const FiDollarSign = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export default ShopifyServices;