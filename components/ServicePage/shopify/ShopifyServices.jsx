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
  FiShoppingCart as FiCart,
  FiHexagon,
  FiHeadphones,
  FiDollarSign,
  FiArrowRight as FiArrowRightIcon,
  FiChevronRight,
  FiPlay,
  FiClock,
  FiUsers as FiUsersIcon,
  FiBarChart,
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
    "id": 5,
    "title": "UrbanStyle Fashion – Shopify E-commerce Store",
    "category": ["Shopify Development", "E-commerce", "Fashion"],
    "type": "portfolio",
    "status": "live",
    "description": "A modern fashion e-commerce store built on Shopify with custom theme development, product customization, and integrated payment solutions.",
    "technologies": ["Shopify", "Liquid", "JavaScript", "CSS3", "Shopify Apps", "Payment Gateway", "SEO Optimization"],
    "image": "/assets/Portfolio/urbanstyle-fashion.jpeg",
    "performance": [
      { "label": "Sales Growth", "value": "+60%" },
      { "label": "Mobile Conversion", "value": "45%" }
    ]
  },
  {
    "id": 6,
    "title": "GreenThumb Gardeners – Maintenance & Gardening Services Platform",
    "category": ["Web Development", "Services Platform", "Gardening"],
    "type": "portfolio",
    "status": "live",
    "description": "A comprehensive platform for gardening services, maintenance scheduling, plant care guidance, and professional gardener bookings.",
    "technologies": ["React", "Node.js", "MongoDB", "Stripe API", "Google Maps API", "EmailJS", "Cloud Storage"],
    "image": "/assets/Portfolio/greenthumb-gardeners.jpeg",
    "performance": [
      { "label": "Service Bookings", "value": "500+/month" },
      { "label": "Customer Retention", "value": "88%" }
    ]
  },
  {
    "id": 7,
    "title": "TreeForLife – Plantation & Environmental Initiative Platform",
    "category": ["Web Development", "Environmental", "Community"],
    "type": "portfolio",
    "status": "live",
    "description": "An environmental platform connecting donors with tree plantation initiatives, tracking growth progress, and promoting sustainable practices.",
    "technologies": ["Next.js", "Firebase", "Google Maps API", "Payment Integration", "Progress Tracking", "Dashboard Analytics", "Cloud Functions"],
    "image": "/assets/Portfolio/treeforlife-plantation.jpeg",
    "performance": [
      { "label": "Trees Planted", "value": "10,000+" },
      { "label": "Donor Satisfaction", "value": "4.9/5" }
    ]
  },
  {
    "id": 8,
    "title": "BackpackBuddy – Travel Planning & Budget Management App",
    "category": ["Mobile App", "Travel", "Finance"],
    "type": "portfolio",
    "status": "live",
    "description": "A comprehensive travel planning application with budget tracking, itinerary management, and expense sharing features for backpackers.",
    "technologies": ["React Native", "Firebase", "Google Maps API", "Expense Tracking", "Group Features", "Offline Mode", "Push Notifications"],
    "image": "/assets/Portfolio/backpackbuddy-travel.jpeg",
    "performance": [
      { "label": "Budget Accuracy", "value": "95%" },
      { "label": "User Adoption", "value": "15K+" }
    ]
  }
    ]
  }
};

const ShopifyServices = () => {
  const shopifyPackages = pricingData.services.find(s => s.category === "Shopify")?.packages || [];
  const allProjects = portfolioData.portfolio.portfolioProjects;
  
  // Show all projects - they demonstrate our design and development capabilities
  const shopifyProjects = allProjects;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [activeTab, setActiveTab] = useState("design");
  
  // Shopify services cards
  const shopifyServices = [
    {
      title: "Store Development",
      description: "Custom, high-converting Shopify stores built for your business",
      icon: <FiShoppingCart className="text-3xl" />,
      color: "from-blue-400 to-indigo-500",
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
      color: "from-emerald-400 to-teal-500",
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
      color: "from-violet-400 to-purple-500",
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
      color: "from-blue-400 to-indigo-500",
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
      color: "from-emerald-400 to-teal-500",
      features: [
        "Regular updates",
        "Security monitoring",
        "24/7 support",
        "Backup solutions"
      ]
    }
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
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* **Hero Section - Completely Redesigned** */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/shopify/shopify.png')] bg-cover bg-center bg-no-repeat"></div>
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          {/* Light gradient from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
        </div>

        {/* Geometric Overlay */}
        <div className="absolute inset-0 hidden lg:block opacity-20">
          <div className="absolute top-20 right-20 w-64 h-64 border-2 border-yellow-400 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 left-32 w-40 h-40 border border-blue-400 rotate-12"></div>
          <div className="absolute top-1/3 left-1/4 w-32 h-32 border border-indigo-400 -rotate-12"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-indigo-200">
                  Transform Your
                </span>
                <br />
                <span className="text-white">
                  Shopify Vision
                </span>
              </h1>
              
              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-8 leading-relaxed"
              >
                We craft high-converting Shopify stores that deliver exceptional user experiences and drive sustainable growth for your business.
              </motion.p>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12"
              >
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <FiChevronRight className="transition-transform group-hover:translate-x-1" />
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
                  className="group inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <FiPlay className="text-sm" />
                    View Demo
                  </span>
                </Link>
              </motion.div>
              
              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="grid grid-cols-3 gap-4"
              >
                {[
                  { value: "150+", label: "Stores Built", icon: <FiShoppingBag />, color: "text-blue-300" },
                  { value: "98%", label: "Client Satisfaction", icon: <FiStar />, color: "text-amber-300" },
                  { value: "24/7", label: "Support", icon: <FiHeadphones />, color: "text-emerald-300" },
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                    <div className={`text-xl sm:text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Interactive Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                {/* Dashboard Header */}
                <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                        <FiShoppingCart className="text-white text-lg" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Shopify Dashboard</h3>
                        <p className="text-sm text-gray-600">Real-time Analytics</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {["design", "analytics", "sales"].map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-3 py-1 text-sm rounded-lg transition-all ${activeTab === tab ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {activeTab === "design" && (
                      <motion.div
                        key="design"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                      >
                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: "Conversion", value: "+42%", color: "text-emerald-600" },
                            { label: "Traffic", value: "+68%", color: "text-blue-600" },
                            { label: "Revenue", value: "+89%", color: "text-purple-600" },
                          ].map((stat, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-4">
                              <div className="text-sm text-gray-600">{stat.label}</div>
                              <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                            </div>
                          ))}
                        </div>
                        
                        {/* Progress Bars */}
                        <div className="space-y-4">
                          {[
                            { label: "Mobile Optimization", value: 95, color: "bg-blue-500" },
                            { label: "Page Speed", value: 92, color: "bg-emerald-500" },
                            { label: "SEO Score", value: 88, color: "bg-purple-500" },
                          ].map((item, idx) => (
                            <div key={idx}>
                              <div className="flex justify-between text-sm mb-1">
                                <span className="text-gray-700">{item.label}</span>
                                <span className="font-medium">{item.value}%</span>
                              </div>
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: `${item.value}%` }}
                                  transition={{ duration: 1, delay: idx * 0.2 }}
                                  className={`h-full ${item.color} rounded-full`}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    
                    {activeTab === "analytics" && (
                      <motion.div
                        key="analytics"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                      >
                        <div className="h-48 flex items-end gap-1">
                          {[30, 45, 60, 75, 65, 80, 90, 75, 85, 70, 65, 95].map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="flex-1 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t"
                            />
                          ))}
                        </div>
                      </motion.div>
                    )}
                    
                    {activeTab === "sales" && (
                      <motion.div
                        key="sales"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-6"
                      >
                        <div className="text-center py-8">
                          <div className="text-4xl font-bold text-gray-900 mb-2">$25,480</div>
                          <div className="text-sm text-gray-600">Monthly Revenue</div>
                          <div className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-sm rounded-full">
                            <FiTrendingUp className="text-xs" />
                            +24.5% from last month
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl"
              >
                <FiTag className="text-xl" />
              </motion.div>
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center text-white shadow-xl"
              >
                <FiCheckCircle className="text-lg" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center">
            <span className="text-sm text-white mb-2">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-white to-transparent"></div>
          </div>
        </div>
      </section>

      {/* **Comprehensive Shopify Solutions Section** */}
      <section className="py-10 -mt-6 px-6 sm:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-3"
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
                  <p className="text-gray-800 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.color} bg-opacity-20 flex items-center justify-center mr-3`}>
                          <FiCheckCircle className={`text-xs ${service.color.split(' ')[1].replace('to-[', '').replace(']', '')}`} />
                        </div>
                        <span className="text-sm text-[#FEEBE7]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-sm font-medium flex items-center group text-white">
                    <Link href="/contact">Learn more</Link>
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
            className="text-center mb-2"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-2 shadow-lg">
              <FiGrid className="text-2xl text-white" />
            </div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
              OUR SHOPIFY PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Successful{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Shopify Projects
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
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
                        <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full">
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
                    
                    <div className="p-3 flex flex-col flex-grow">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {project.title.split("–")[0].trim()}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2 min-h-[2.5rem]">
                        {project.description}
                      </p>
                      
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
                      
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        {project.performance.slice(0, 2).map((stat, idx) => (
                          <div key={idx} className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                            <div className="text-base font-bold text-blue-700 truncate">{stat.value}</div>
                            <div className="text-xs text-gray-600 truncate mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-10' 
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
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 group"
            >
              <span className="mr-2">View All Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* **Pricing Section** */}
      <section id="pricing" className="py-10 px-6 sm:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-2 shadow-lg">
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
                      {pkg.name === "Gold" && (
                        <div className="absolute top-6 -right-10 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-10 py-1 rotate-45 shadow-lg z-10">
                          <span className="text-xs sm:text-sm font-bold">MOST POPULAR</span>
                        </div>
                      )}
                      
                      {/* Unique styling for Starter */}
                      {pkg.name === "Special" && (
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
                            <div className={pkg.name === "Special" ? "text-white" : ""}>
                              {getIconForPackage(pkg.name)}
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                          <div className="text-3xl sm:text-4xl font-bold mb-2">
                            <span className={pkg.name === "Special" ? "text-gray-900" : "text-blue-900"}>{pkg.price}</span>
                            <span className="text-gray-500 text-base sm:text-lg">/one-time</span>
                          </div>
                          <div className="text-sm sm:text-base text-gray-600">Perfect for {pkg.name === "Special" ? "startups" : pkg.name === "Diamond" ? "enterprises" : "growing businesses"}</div>
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
                                pkg.name === "Special" ? "text-gray-700" : "text-blue-500"
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
                            pkg.name === "Special"
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
      <section className="py-10 px-6 sm:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-2 shadow-lg">
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
                question: "Do you provide ongoing maintenance and support?",
                answer: "Yes, all plans include dedicated support. We offer 24/7 monitoring, regular updates, security patches, and performance optimization. Extended support contracts available for enterprise clients."
              },
              {
                question: "Can I migrate from my existing eCommerce platform to Shopify?",
                answer: "Absolutely! We provide free migration services for all data (products, customers, orders). Our team ensures zero downtime and complete data integrity throughout the migration process."
              },
              {
                question: "What payment gateways do you support?",
                answer: "We integrate with 50+ payment gateways including Stripe, PayPal, Square, Razorpay, and local payment methods. Enterprise plans include custom gateway integrations, white-label solutions, and multi-currency support."
              },
              {
                question: "Is SEO included in your Shopify packages?",
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
      <section className="py-10 px-6 sm:px-12 relative overflow-hidden">
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

export default ShopifyServices;