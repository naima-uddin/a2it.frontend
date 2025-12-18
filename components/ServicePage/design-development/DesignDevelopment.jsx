"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiLayers,
  FiCheckCircle,
  FiArrowLeft,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiBox,
  FiDatabase,
  FiZap,
  FiAward,
  FiGrid,
  FiStar,
  FiGlobe,
  FiUsers,
  FiTool,
  FiCpu,
  FiServer,
  FiShield,
  FiPackage,
  FiTrendingUp,
  FiTarget,
  FiPieChart,
  FiShoppingCart,
  FiFilter,
  FiRefreshCw,
  FiEye,
  FiLayout,
  FiPenTool,
  FiSmartphone as FiMobile,
  FiTag,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const DesignDevelopmentPage = () => {
  // State for portfolio data
  const [portfolioData, setPortfolioData] = useState(null);
  // State for pricing data
  const [pricingData, setPricingData] = useState(null);
  // Loading states
  const [loading, setLoading] = useState(true);
  const [loadingPricing, setLoadingPricing] = useState(true);
  
  // UI States
  const [activeTab, setActiveTab] = useState("web");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Fetch portfolio data
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/portfolioData.json');
        if (!response.ok) throw new Error('Failed to fetch portfolio data');
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        // Fallback to empty data
        setPortfolioData({ portfolio: { portfolioProjects: [] } });
      } finally {
        setLoading(false);
      }
    };
    
    fetchPortfolioData();
  }, []);
  
  // Fetch pricing data
  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        const response = await fetch('/pricing-data.json');
        if (!response.ok) throw new Error('Failed to fetch pricing data');
        const data = await response.json();
        setPricingData(data);
      } catch (error) {
        console.error('Error fetching pricing data:', error);
        // Fallback to empty data
        setPricingData({ services: [] });
      } finally {
        setLoadingPricing(false);
      }
    };
    
    fetchPricingData();
  }, []);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Get slides per view based on window width
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };
  
  const slidesPerView = getSlidesPerView();
  
  // Extract design & development packages from pricing data
  const designDevelopmentPackages = pricingData?.services?.find(s => s.category === "Design & Development")?.packages || [];
  
  // Group packages into slides
  const groupedPackages = [];
  for (let i = 0; i < designDevelopmentPackages.length; i += slidesPerView) {
    groupedPackages.push(designDevelopmentPackages.slice(i, i + slidesPerView));
  }
  
  // Categorize portfolio projects
  const categorizeProjects = (projects) => {
    if (!projects) return { web: [], mobile: [], wordpress: [] };
    
    const categories = {
      web: [],
      mobile: [],
      wordpress: []
    };
    
    projects.forEach(project => {
      const categoriesArray = Array.isArray(project.category) ? project.category : [project.category];
      const techArray = Array.isArray(project.technologies) ? project.technologies : [project.technologies];
      
      // Check for WordPress projects
      const hasWordPress = categoriesArray.some(cat => 
        cat.toLowerCase().includes('wordpress')
      ) || techArray.some(tech => 
        tech.toLowerCase().includes('wordpress') || 
        tech.toLowerCase().includes('woocommerce')
      );
      
      // Check for Mobile projects
      const hasMobile = categoriesArray.some(cat => 
        cat.toLowerCase().includes('mobile')
      ) || techArray.some(tech => 
        tech.toLowerCase().includes('react native') ||
        tech.toLowerCase().includes('mobile')
      );
      
      if (hasWordPress) {
        categories.wordpress.push(project);
      } else if (hasMobile) {
        categories.mobile.push(project);
      } else {
        categories.web.push(project);
      }
    });
    
    return categories;
  };
  
  const allProjects = portfolioData?.portfolio?.portfolioProjects || [];
  const categorizedProjects = categorizeProjects(allProjects);
  
  // Get current projects based on active tab
  const getCurrentProjects = () => {
    switch(activeTab) {
      case 'web': return categorizedProjects.web;
      case 'mobile': return categorizedProjects.mobile;
      case 'wordpress': return categorizedProjects.wordpress;
      default: return categorizedProjects.web;
    }
  };
  
  const currentProjects = getCurrentProjects();
  
  // Group projects for slider
  const groupProjectsForSlider = (projects) => {
    const projectsPerView = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;
    const groups = [];
    for (let i = 0; i < projects.length; i += projectsPerView) {
      groups.push(projects.slice(i, i + projectsPerView));
    }
    return groups;
  };
  
  const groupedCurrentProjects = groupProjectsForSlider(currentProjects);
  
  // Slide navigation functions
  const nextSlide = () => {
    if (groupedPackages.length === 0) return;
    setCurrentSlide((prev) => (prev + 1) % groupedPackages.length);
  };
  
  const prevSlide = () => {
    if (groupedPackages.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + groupedPackages.length) % groupedPackages.length);
  };
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  
  // Get package color
  const getPackageColor = (pkg, isHover = false) => {
    if (pkg.name === "Special" && isHover) return "from-gray-800 to-blue-900";
    if (pkg.name === "Special") return "from-gray-800 to-black";
    if (isHover) return "from-blue-600 to-indigo-700";
    return "from-blue-500 to-indigo-600";
  };
  
  // Get card background
  const getCardBackground = (pkg) => {
    if (pkg.name === "Special") return "bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200";
    return "bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-blue-100";
  };
  
  // Get icon for package
  const getIconForPackage = (pkgName) => {
    switch(pkgName) {
      case "Special": return <FiPenTool className="text-2xl" />;
      case "Plus": return <FiLayers className="text-2xl" />;
      case "Gold": return <FiAward className="text-2xl" />;
      case "Platinum": return <FiDatabase className="text-2xl" />;
      case "The Boss": return <FiZap className="text-2xl" />;
      case "Diamond": return <FiGlobe className="text-2xl" />;
      default: return <FiCode className="text-2xl" />;
    }
  };
  
  // Tab data
  const tabs = [
    { id: 'web', label: 'Web Development', icon: <FiCode />, count: categorizedProjects.web.length },
    { id: 'mobile', label: 'Mobile Apps', icon: <FiMobile />, count: categorizedProjects.mobile.length },
    { id: 'wordpress', label: 'WordPress', icon: <FiLayout />, count: categorizedProjects.wordpress.length }
  ];
  
  // Loading state
  if (loading || loadingPricing) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Design & Development Services...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="absolute inset-0 bg-[url('/assets/patterns/grid.svg')] opacity-10"></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 hidden lg:block">
          <div className="absolute top-20 left-20 w-64 h-64 border-2 border-blue-400/20 rotate-45 animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-40 h-40 border border-purple-400/20 rotate-12"></div>
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium mb-6 rounded-full text-sm shadow-lg"
              >
                <FiZap className="mr-2" />
                PREMIUM DESIGN & DEVELOPMENT
              </motion.div>
              
              <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-gray-900">
                Transform Your{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                    Digital Vision
                  </span>
                  <motion.div
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400"
                  />
                </span>{" "}
                Into Reality
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-8 leading-relaxed"
              >
                Professional web development, mobile apps, and WordPress solutions crafted to perfection. From concept to launch, we build digital experiences that drive results.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:shadow-2xl hover:shadow-blue-300 transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center">
                    <FiCode className="mr-2" />
                    Start Your Project
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
                  className="group inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    View Our Portfolio
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
                  { value: "200+", label: "Projects", color: "text-blue-600" },
                  { value: "4.9⭐", label: "Avg. Rating", color: "text-indigo-600" },
                  { value: "99%", label: "Satisfaction", color: "text-purple-600" },
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
                    <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
            
            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white text-sm font-medium ml-2">Design & Development Services</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {tabs.map((tab) => (
                      <motion.div
                        key={tab.id}
                        whileHover={{ scale: 1.05 }}
                        className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                          activeTab === tab.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                          activeTab === tab.id 
                            ? 'bg-blue-500 text-white' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {tab.icon}
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{tab.label}</div>
                        <div className="text-xs text-gray-500 mt-1">{tab.count} projects</div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Service Description */}
                  <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white mr-3">
                        {tabs.find(t => t.id === activeTab)?.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {tabs.find(t => t.id === activeTab)?.label}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      {activeTab === 'web' && 'Custom web applications and websites built with modern technologies.'}
                      {activeTab === 'mobile' && 'Native and cross-platform mobile applications for iOS and Android.'}
                      {activeTab === 'wordpress' && 'WordPress websites and e-commerce solutions with custom themes and plugins.'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <FiGrid className="text-2xl text-white" />
            </div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
              OUR PORTFOLIO
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Projects
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Browse through our successful design and development projects
            </p>
          </motion.div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
                <span className={`ml-2 px-2 py-1 text-xs rounded-full ${
                  activeTab === tab.id ? 'bg-white/20' : 'bg-gray-200'
                }`}>
                  {tab.count}
                </span>
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          {currentProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.slice(0, 6).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    {project.image && project.image !== "/assets/Portfolio/feature2.jpeg" ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                        <div className="text-4xl">
                          {activeTab === 'web' && <FiCode />}
                          {activeTab === 'mobile' && <FiMobile />}
                          {activeTab === 'wordpress' && <FiLayout />}
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full">
                        <FiCheckCircle className="mr-1 text-xs" />
                        {project.status || 'Live'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {Array.isArray(project.technologies) && project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {Array.isArray(project.technologies) && project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    
                    {/* Performance Stats */}
                    {project.performance && project.performance.length > 0 && (
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        {project.performance.slice(0, 2).map((stat, idx) => (
                          <div key={idx} className="text-center p-3 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                            <div className="text-base font-bold text-blue-700 truncate">{stat.value}</div>
                            <div className="text-xs text-gray-600 truncate mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                <FiEye className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Projects Found</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're currently updating our {tabs.find(t => t.id === activeTab)?.label.toLowerCase()} portfolio. Check back soon!
              </p>
            </div>
          )}
          
          {/* View All Button */}
          {currentProjects.length > 6 && (
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
                <span className="mr-2">View All {tabs.find(t => t.id === activeTab)?.label} Projects</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Pricing Section */}
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
              Design & Development{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Packages
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose the perfect package for your design and development needs
            </p>
          </motion.div>
          
          {designDevelopmentPackages.length > 0 ? (
            <>
              {/* Pricing Slider Navigation */}
              {groupedPackages.length > 1 && (
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
              )}
              
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
                        {/* Ribbon for Popular Plan */}
                        {pkg.name === "Gold" && (
                          <div className="absolute top-6 -right-10 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-10 py-1 rotate-45 shadow-lg z-10">
                            <span className="text-xs sm:text-sm font-bold">MOST POPULAR</span>
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
                              <div className={pkg.name === "Special" ? "text-white" : "text-white"}>
                                {getIconForPackage(pkg.name)}
                              </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                            <div className="text-3xl sm:text-4xl font-bold mb-2">
                              <span className={pkg.name === "Special" ? "text-gray-900" : "text-blue-900"}>{pkg.price}</span>
                              <span className="text-gray-500 text-base sm:text-lg">/one-time</span>
                            </div>
                            <div className="text-sm sm:text-base text-gray-600">
                              {pkg.name === "Special" && "Perfect for startups & small businesses"}
                              {pkg.name === "Plus" && "Great for growing businesses"}
                              {pkg.name === "Gold" && "Ideal for established companies"}
                              {pkg.name === "Platinum" && "For scaling enterprises"}
                              {pkg.name === "The Boss" && "Premium solutions"}
                              {pkg.name === "Diamond" && "Enterprise-grade solutions"}
                            </div>
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
                              Get {pkg.name} Package
                            </motion.button>
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Slide Indicators */}
              {groupedPackages.length > 1 && (
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
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mb-6">
                <FiTag className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pricing Coming Soon</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                We're currently updating our pricing packages. Please contact us for a custom quote.
              </p>
              <Link href="/contact" className="inline-flex items-center mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
                <FiCode className="mr-2" />
                Contact for Custom Quote
              </Link>
            </div>
          )}
        </div>
      </section>
      
      {/* FAQ Section */}
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
              Design & Development{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                FAQs
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our design and development services
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {[
              {
                question: "What's included in your design and development packages?",
                answer: "Our packages include everything from initial consultation and design mockups to development, testing, deployment, and ongoing support. Each package is tailored to specific needs, from basic websites to complex web applications and mobile apps."
              },
              {
                question: "How long does a typical web development project take?",
                answer: "Timeline varies: Special (2-3 weeks), Plus (3-4 weeks), Gold (4-6 weeks), Platinum (6-8 weeks), The Boss (8-10 weeks), Diamond (10-12 weeks). Complex features or custom requirements may extend timelines."
              },
              {
                question: "Do you provide mobile app development?",
                answer: "Yes! We develop both native (iOS/Android) and cross-platform mobile applications. Our mobile development includes UI/UX design, development, testing, app store submission, and ongoing maintenance."
              },
              {
                question: "What technologies do you use for web development?",
                answer: "We use modern technologies including React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and more. For WordPress, we develop custom themes and plugins with PHP, MySQL, and WooCommerce."
              },
              {
                question: "Can you redesign my existing website?",
                answer: "Absolutely! We specialize in website redesigns that improve user experience, performance, and conversion rates while maintaining your brand identity and SEO rankings."
              },
              {
                question: "What support do you offer after project completion?",
                answer: "All packages include post-launch support. We offer maintenance plans, security updates, performance optimization, and feature additions. Higher-tier packages include extended support periods."
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
      
      {/* Final CTA */}
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
            Ready to Build Your{" "}
            <span className="text-yellow-300">Digital Solution</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
          >
            Let's transform your ideas into powerful digital experiences that drive results.
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
                <FiCode className="mr-2 group-hover:rotate-12 transition-transform" />
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
              <span className="mr-2">View Our Portfolio</span>
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
                <span>100% Satisfaction Guarantee</span>
              </span>
              <span className="flex items-center">
                <FiCheckCircle className="mr-2" />
                <span>Free Initial Consultation</span>
              </span>
              <span className="flex items-center">
                <FiZap className="mr-2" />
                <span>Quick Project Start</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DesignDevelopmentPage;