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
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";

// Import your portfolio data
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
        "technologies": ["Wordpress", "C-panel Hosting", "SEO Optimization"],
        "image": "/assets/Portfolio/cargo-logistics-1.png",
        "performance": [
          { "label": "Page Speed Score", "value": "90+" },
          { "label": "Mobile Responsiveness", "value": "100%" }
        ]
      },
      {
        "id": 2,
        "title": "BestBuyersView – Discover, Compare & Pick the Best Products",
        "category": ["UI/UX Design", "Web Development", "Affiliate Platform", "E-commerce"],
        "type": "portfolio",
        "status": "live",
        "description": "A scalable UI/UX design system created to support a high-performance affiliate review and content-driven platform.",
        "technologies": ["Figma","Nextjs","Nodejs", "React", "Tailwind CSS", "Design Tokens", "Component-Based Architecture"],
        "image": "/assets/Portfolio/bestbuyersview-1.png",
        "performance": [
          { "label": "Development Speed Increase", "value": "60%" },
          { "label": "Reusable UI Components", "value": "80+" }
        ]
      },
      {
        "id": 3,
        "title": "FinNess Trading Platform",
        "category": ["Web Development", "Affiliate Platform", "WordPress"],
        "type": "portfolio",
        "status": "live",
        "description": "A real-time trading platform for stocks and cryptocurrencies with live data feeds, interactive charts, and portfolio management tools.",
        "technologies": ["React.js", "WebSocket", "Chart.js", "Node.js", "PostgreSQL"],
        "image": "/assets/Portfolio/best-fitness-shop-1.png",
        "performance": [
          { "label": "Daily Trading Volume", "value": "$100M+" },
          { "label": "Data Latency", "value": "100ms" }
        ]
      },
      {
        "id": 4,
        "title": "JuteCraftify – Sustainable Jute E-commerce Platform",
        "category": ["E-commerce", "WordPress"],
        "type": "portfolio",
        "status": "live",
        "description": "A modern e-commerce platform dedicated to promoting sustainable jute products worldwide, featuring secure payments, streamlined inventory management, and export-ready workflows.",
        "technologies": ["Wordpress", "C-panel Hosting", "SEO Optimization"],
        "image": "/assets/Portfolio/jute-1.avif",
        "performance": [
          { "label": "International Customer Growth", "value": "120%" },
          { "label": "Conversion Rate Increase", "value": "30%" }
        ]
      },
      {
        "id": 5,
        "title": "Commercial Tyre LLC – Bulk Tyre Sales & Management System",
        "category": ["Web Development", "Affiliate Platform", "E-commerce"],
        "type": "portfolio",
        "status": "live",
        "description": "Data-driven digital marketing services to boost traffic, conversions, and brand awareness.",
        "technologies": ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
        "image": "/assets/Portfolio/c-tire.png",
        "performance": [
          { "label": "Organic Traffic", "value": "2X" },
          { "label": "Return on Ad Spend", "value": "5X" }
        ]
      },
      {
        "id": 6,
        "title": "BestGearBuy – Affiliate Product Discovery Platform",
        "category": ["Affiliate Platform", "Web Development", "E-commerce"],
        "type": "portfolio",
        "status": "live",
        "description": "An affiliate platform dedicated to electric bike reviews, comparisons, and buying guides.",
        "technologies": ["React Native", "Firebase", "Google Maps API", "Redux"],
        "image": "/assets/Portfolio/best-gear-buy-1.png",
        "performance": [
          { "label": "Active Users", "value": "10K+" },
          { "label": "Battery Accuracy", "value": "98%" }
        ]
      },
      {
        "id": 7,
        "title": "Gym Equipment Tracker",
        "category": ["Mobile Development", "Web Development", "WordPress"],
        "type": "portfolio",
        "status": "live",
        "description": "A mobile app for gym equipment tracking, maintenance schedules, and fitness tips.",
        "technologies": ["WordPress", "WooCommerce", "PHP", "MySQL", "Elementor"],
        "image": "/assets/Portfolio/best-fitness-shop-2.png",
        "performance": [
          { "label": "Equipment Uptime", "value": "99%" },
          { "label": "Maintenance Alerts", "value": "100%" }
        ]
      },
      {
        "id": 8,
        "title": "SwiftShip Tracking",
        "category": ["Mobile Development", "Web Development", "Logistics"],
        "type": "portfolio",
        "status": "live",
        "description": "A mobile app for real-time shipment tracking, notifications, and delivery management.",
        "technologies": ["React Native", "Firebase", "Google Maps API", "Push Notifications"],
        "image": "/assets/Portfolio/swiftship.png",
        "performance": [
          { "label": "Delivery Accuracy", "value": "99.5%" },
          { "label": "Customer Satisfaction", "value": "4.7/5" }
        ]
      },
      {
        "id": 9,
        "title": "Jute Boutique",
        "category": ["WordPress", "E-commerce"],
        "type": "portfolio",
        "status": "live",
        "description": "A sustainable fashion e-commerce brand design system focused on jute-based products.",
        "technologies": ["Figma", "WordPress", "Canva", "Adobe Creative Suite"],
        "image": "/assets/Portfolio/jute-1.avif",
        "performance": [
          { "label": "Brand Recognition", "value": "3X" },
          { "label": "Sales Increase", "value": "80%" }
        ]
      },
      {
        "id": 10,
        "title": "Best E-bike Store",
        "category": ["E-commerce", "Affiliate Platform", "Web Development"],
        "type": "portfolio",
        "status": "live",
        "description": "E-commerce store for electric bikes with integrated payment and shipping solutions.",
        "technologies": ["WooCommerce", "React", "WordPress", "Stripe"],
        "image": "/assets/Portfolio/bestbikereview-1.png",
        "performance": [
          { "label": "Monthly Sales", "value": "$150K+" },
          { "label": "Conversion Rate", "value": "3.8%" }
        ]
      },
      {
        "id": 11,
        "title": "Asian Import Export Co.",
        "category": ["E-commerce Platform", "Web Development", "Affiliate Platform"],
        "type": "portfolio",
        "status": "live",
        "description": "An import-export e-commerce platform connecting Asian manufacturers with global buyers.",
        "technologies": ["React.js", "Python/Django", "PostgreSQL", "Docker", "AWS"],
        "image": "/assets/Portfolio/import-export-1.png",
        "performance": [
          { "label": "Order Processing Speed", "value": "50% faster" },
          { "label": "Inventory Accuracy", "value": "99.8%" }
        ]
      },
      {
        "id": 12,
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

// Import your pricing data
const pricingData = {
  "services": [
    {
      "id": 2,
      "category": "E-Commerce",
      "packages": [
        {
          "id": "ecom-special",
          "name": "Starter",
          "price": "$499",
          "color": "black",
          "features": [
            "Basic Online Store",
            "10 Product Listings",
            "Payment Gateway Setup",
            "Shopping Cart",
            "Basic Design",
            "1 Month Support"
          ]
        },
        {
          "id": "ecom-plus",
          "name": "Growth",
          "price": "$899",
          "color": "blue",
          "features": [
            "Everything in Starter",
            "50 Product Listings",
            "Inventory Management",
            "Order Tracking",
            "Email Marketing",
            "3 Months Support"
          ]
        },
        {
          "id": "ecom-gold",
          "name": "Professional",
          "price": "$1,499",
          "color": "blue",
          "features": [
            "Everything in Growth",
            "Unlimited Products",
            "Advanced Analytics",
            "CRM Integration",
            "Multi-currency",
            "6 Months Support"
          ]
        },
        {
          "id": "ecom-platinum",
          "name": "Enterprise",
          "price": "$2,499",
          "color": "blue",
          "features": [
            "Everything in Professional",
            "Mobile App",
            "AI Recommendations",
            "Custom Reports",
            "API Access",
            "1 Year Support"
          ]
        },
        {
          "id": "ecom-boss",
          "name": "Premium",
          "price": "$3,999",
          "color": "blue",
          "features": [
            "Everything in Enterprise",
            "Multi-vendor Marketplace",
            "Custom Modules",
            "Enterprise Security",
            "White Label Solution",
            "Priority Support"
          ]
        },
        {
          "id": "ecom-diamond",
          "name": "Elite",
          "price": "$5,999",
          "color": "blue",
          "features": [
            "Everything in Premium",
            "Complete Solution",
            "Dedicated Servers",
            "Custom AI Chatbot",
            "Blockchain Integration",
            "24/7 Dedicated Support"
          ]
        }
      ]
    }
  ]
};

const EcommercePage = () => {
  const ecommercePackages = pricingData.services.find(s => s.category === "E-Commerce")?.packages || [];
  const allProjects = portfolioData.portfolio.portfolioProjects;
  
  // Show all projects from portfolioProjects
  const ecommerceProjects = allProjects;
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Responsive slides per view
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1; // sm
    if (windowWidth < 1024) return 2; // md
    return 3; // lg+
  };
  
  const getProjectsPerView = () => {
    if (windowWidth < 640) return 1; // sm
    if (windowWidth < 768) return 2; // md
    if (windowWidth < 1024) return 3; // lg
    return 4; // xl+
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
  for (let i = 0; i < ecommercePackages.length; i += slidesPerView) {
    groupedPackages.push(ecommercePackages.slice(i, i + slidesPerView));
  }

  // Group projects into slides
  const groupedProjects = [];
  for (let i = 0; i < ecommerceProjects.length; i += projectsPerView) {
    groupedProjects.push(ecommerceProjects.slice(i, i + projectsPerView));
  }

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
      name: "BestGearBuy – Affiliate Product Discovery Platform", 
      category: "E-commerce", 
      rating: 4.8,
      description: "An affiliate platform dedicated to electric bike reviews, comparisons, and buying guides.",
      image: "/assets/Portfolio/best-gear-buy-1.png",
      badge: "Live"
    },
    { 
      id: 3, 
      name: "BestBuyersView – Discover, Compare & Pick the Best Products", 
      category: "E-commerce", 
      rating: 4.9,
      description: "A scalable UI/UX design system created to support a high-performance affiliate review and content-driven platform.",
      image: "/assets/Portfolio/bestbuyersview-1.png",
      badge: "Affiliate Platform"
    },
      {
        id: 4,
        name: "JuteCraftify – Sustainable Jute E-commerce Platform",
        category: ["E-commerce", "WordPress"],
        type: "portfolio",
        status: "live",
        description: "A modern e-commerce platform dedicated to promoting sustainable jute products worldwide, featuring secure payments, streamlined inventory management, and export-ready workflows.",
        technologies: ["Shopify", "React", "Node.js", "Payment Gateway Integration", "SEO Optimization"],
        image: "/assets/Portfolio/jute-1.avif",
        performance: [
          { label: "International Customer Growth", value: "120%" },
          { label: "Conversion Rate Increase", value: "30%" }
        ]
      },
  ];

  // Auto rotate products
  useEffect(() => {
    const productInterval = setInterval(() => {
      setCurrentProduct((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(productInterval);
  }, [products.length]);
  
  // Reset slides when grouping changes (window resize)
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
    if (pkg.name === "Starter" && isHover) return "from-gray-800 to-blue-900";
    if (pkg.name === "Starter") return "from-gray-800 to-black";
    if (isHover) return "from-blue-600 to-indigo-700";
    return "from-blue-500 to-indigo-600";
  };

  const getCardBackground = (pkg) => {
    if (pkg.name === "Starter") return "bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200";
    return "bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-blue-100";
  };

  const getIconForPackage = (pkgName) => {
    switch(pkgName) {
      case "Starter": return <FiShoppingBag className="text-2xl" />;
      case "Growth": return <FiTrendingUp className="text-2xl" />;
      case "Professional": return <FiAward className="text-2xl" />;
      case "Enterprise": return <FiDatabase className="text-2xl" />;
      case "Premium": return <FiZap className="text-2xl" />;
      case "Elite": return <FiGlobe className="text-2xl" />;
      default: return <FiShoppingCart className="text-2xl" />;
    }
  };

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 overflow-hidden">
      {/* **Hero Section** */}
        {/* Background pattern */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/eCommerce/banner.png')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-30"></div>
        </div>

        {/* Geometric Overlay */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-yellow-400/30 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 left-32 w-40 h-40 border border-orange-400/20 rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-pink-400/10 -rotate-12"></div>
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
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium mb-6 rounded-full text-sm shadow-lg"
              >
                <FiZap className="mr-2" />
                PREMIUM E-COMMERCE SOLUTIONS
              </motion.div>
              
              <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-white">
                Build{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
                    Revenue-Generating
                  </span>
                  <motion.div
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-400"
                  />
                </span>{" "}
                Online Stores
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-100 max-w-2xl mb-8 leading-relaxed"
              >
                Professional eCommerce development with proven results. From concept to launch, we build stores that convert visitors into customers.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:shadow-2xl hover:shadow-orange-300 transition-all duration-300 text-sm sm:text-base"
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

            {/* Enhanced Store Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                {/* Store Navigation Bar */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-white text-sm font-medium ml-2">E-Store Demo</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <FiShoppingCart className="text-white/80 text-lg" />
                      <FiUser className="text-white/80 text-lg" />
                      <FiSearch className="text-white/80 text-lg" />
                    </div>
                  </div>
                </div>
                
                {/* Product Showcase */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-800">Featured Projects</h3>
                    <div className="flex space-x-2">
                      {products.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentProduct(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentProduct === idx ? 'bg-blue-600 w-6' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Product Card */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProduct}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-blue-400 hover:shadow-2xl transition-all duration-300"
                    >
                      {/* Product Image */}
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
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                          {products[currentProduct].badge}
                        </div>
                        
                        {/* Price Tag */}
                        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            {products[currentProduct].price}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        {/* Category & Rating */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                            {products[currentProduct].category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <FiStar className="text-amber-500 text-sm fill-current" />
                            <span className="text-sm font-bold text-gray-900">{products[currentProduct].rating}</span>
                          </div>
                        </div>
                        
                        {/* Product Name */}
                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {products[currentProduct].name}
                        </h4>
                        
                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {products[currentProduct].description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-xl"
              >
                <FiTag className="text-xl" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-xl"
              >
                <FiCheckCircle className="text-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-sm font-medium mb-2">Scroll to explore</div>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>

      </section>

      {/* **E-commerce Projects Section** */}
      <section id="portfolio" className="py-10 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <FiGrid className="text-2xl text-white" />
            </div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
              OUR E-COMMERCE PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Successful{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  E-commerce Projects
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real e-commerce solutions we've built for businesses across industries
            </p>
          </motion.div>

          {/* Projects Slider Navigation - Arrows at Top */}
          {groupedProjects.length > 1 && (
            <div className="flex justify-end items-center gap-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevProjectSlide}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowLeft className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextProjectSlide}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
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
                    className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                  >
                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full">
                          <FiCheckCircle className="mr-1 text-xs" />
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Category Badges */}
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                        {Array.isArray(project.category) && project.category.slice(0, 2).map((cat, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs rounded">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                        {project.title.split("–")[0].trim()}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 mt-2 line-clamp-2 min-h-[2.5rem]">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      
                      {/* Performance Stats */}
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        {project.performance.slice(0, 2).map((stat, idx) => (
                          <div key={idx} className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                            <div className="text-base font-bold text-blue-700 truncate">{stat.value}</div>
                            <div className="text-xs text-gray-600 truncate mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide Indicators - Below Cards */}
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
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-10' 
                        : 'bg-gray-300 hover:bg-gray-400 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}
        
          
          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 group"
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <FiTag className="text-2xl text-white" />
            </div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Choose Your{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Perfect Plan
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Scale your business with our flexible pricing. Start small, grow big.
            </p>
          </motion.div>

          {/* Pricing Slider */}
          <div className="relative">
            {/* Navigation Arrows - Top */}
            <div className="flex justify-end items-center gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowLeft className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowRight className="text-xl" />
              </motion.button>
            </div>

            {/* Pricing Cards */}
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
                          ? 'border-blue-400 shadow-2xl scale-[1.02]' 
                          : 'border-gray-100 shadow-xl hover:shadow-2xl'
                      }`}
                    >
                      {/* Ribbon for Professional Plan */}
                      {pkg.name === "Professional" && (
                        <div className="absolute top-6 -right-10 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-10 py-1 rotate-45 shadow-lg z-10">
                          <span className="text-xs sm:text-sm font-bold">MOST POPULAR</span>
                        </div>
                      )}
                      
                      {/* Unique styling for Starter */}
                      {pkg.name === "Starter" && (
                        <div className="absolute top-6 -right-10 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-10 py-1 rotate-45 shadow-lg z-10">
                          <span className="text-xs sm:text-sm font-bold">BEST VALUE</span>
                        </div>
                      )}
                      
                      {/* Card Content */}
                      <div className="p-6 sm:p-8 flex flex-col flex-grow">
                        {/* Header */}
                        <div className="text-center mb-6 sm:mb-8">
                          <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl mb-4 ${
                            hoveredCard === pkg.id 
                              ? `bg-gradient-to-r ${getPackageColor(pkg, true)}` 
                              : `bg-gradient-to-r ${getPackageColor(pkg)}`
                          }`}>
                            <div className={pkg.name === "Starter" ? "text-white" : ""}>
                              {getIconForPackage(pkg.name)}
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                          <div className="text-3xl sm:text-4xl font-bold mb-2">
                            <span className={pkg.name === "Starter" ? "text-gray-900" : "text-blue-900"}>{pkg.price}</span>
                            <span className="text-gray-500 text-base sm:text-lg">/one-time</span>
                          </div>
                          <div className="text-sm sm:text-base text-gray-600">Perfect for {pkg.name === "Starter" ? "startups" : pkg.name === "Elite" ? "enterprises" : "growing businesses"}</div>
                        </div>

                        {/* Features */}
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
                                pkg.name === "Starter" ? "text-gray-700" : "text-blue-500"
                              }`}>
                                <FiCheckCircle className="text-base sm:text-lg" />
                              </div>
                              <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <Link href="/contact" className="mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 ${
                            pkg.name === "Starter"
                              ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-xl hover:from-gray-900 hover:to-black"
                              : hoveredCard === pkg.id
                              ? `text-white bg-gradient-to-r ${getPackageColor(pkg, true)} shadow-lg`
                              : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl"
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

            {/* Slide Indicators - Below Cards */}
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
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-10' 
                        : 'bg-gray-300 hover:bg-gray-400 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>

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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <FiBox className="text-2xl text-white" />
            </div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Questions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our eCommerce solutions
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long does it take to build an eCommerce store?",
                answer: "Typical timeline: Starter (2-3 weeks), Growth (3-4 weeks), Professional (4-6 weeks), Enterprise (6-8 weeks), Premium (8-10 weeks), Elite (10-12 weeks). Timeline depends on features, integrations, and customizations required."
              },
              {
                question: "Do you provide ongoing maintenance and support?",
                answer: "Yes, all plans include dedicated support. We offer 24/7 monitoring, regular updates, security patches, and performance optimization. Extended support contracts available for enterprise clients."
              },
              {
                question: "Can I migrate from my existing eCommerce platform?",
                answer: "Absolutely! We provide free migration services for all data (products, customers, orders). Our team ensures zero downtime and complete data integrity throughout the migration process."
              },
              {
                question: "What payment gateways do you support?",
                answer: "We integrate with 50+ payment gateways including Stripe, PayPal, Square, Razorpay, and local payment methods. Enterprise plans include custom gateway integrations, white-label solutions, and multi-currency support."
              },
              {
                question: "Is SEO included in your eCommerce packages?",
                answer: "Yes, all packages include basic SEO optimization. Professional and higher packages include advanced SEO, schema markup, performance optimization, and ongoing SEO strategy implementation."
              },
              {
                question: "Can I upgrade my plan later?",
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
                    ? 'border-blue-400 shadow-lg' 
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
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                        : 'bg-blue-100 text-blue-600'
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
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
            <span className="text-yellow-300">E-commerce Success</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
          >
            Join thousands of successful businesses with our proven eCommerce solutions.
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
              className="group relative overflow-hidden inline-flex items-center bg-white text-blue-600 hover:text-blue-700 font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto justify-center"
            >
              <span className="relative z-10 flex items-center">
                <FiShoppingCart className="mr-2 group-hover:rotate-12 transition-transform" />
                Start Free Consultation
              </span>
              <motion.div
                initial={{ x: "-100%", y: "100%" }}
                whileHover={{ x: "100%", y: "-100%" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent"
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

// Helper component for missing icon
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

export default EcommercePage;