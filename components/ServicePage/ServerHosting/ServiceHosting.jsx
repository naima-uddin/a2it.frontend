"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiServer,
  FiDatabase,
  FiShield,
  FiZap,
  FiGlobe,
  FiCpu,
  FiBarChart2,
  FiDownload,
  FiUpload,
  FiCode,
  FiX,
  FiChevronDown,
  FiCloud,
  FiCheck,
  FiArrowRight,
  FiMenu,
  FiXCircle,
  FiArrowLeft,
  FiPackage,
  FiStar,
  FiTool,
  FiTag,
  FiCheckCircle,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const ServiceHosting = () => {
  const [activeCategory, setActiveCategory] = useState("web-hosting");
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [pricingPackages, setPricingPackages] = useState([]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch('/pricing-data.json')
      .then(res => res.json())
      .then(data => {
        const hostingService = data.services.find(s => s.category === 'Server & Hosting Services');
        if (hostingService) {
          setPricingPackages(hostingService.packages);
        }
      })
      .catch(err => console.error('Error loading pricing data:', err));
  }, []);

  // Group packages based on screen size
  const getPackagesPerSlide = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const packagesPerSlide = getPackagesPerSlide();
  const groupedPackages = [];
  for (let i = 0; i < pricingPackages.length; i += packagesPerSlide) {
    groupedPackages.push(pricingPackages.slice(i, i + packagesPerSlide));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedPackages.length) % groupedPackages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getIconForPackage = (name) => {
    switch (name) {
      case "Special":
        return <FiPackage className="text-xl sm:text-2xl" />;
      case "Plus":
        return <FiStar className="text-xl sm:text-2xl text-white" />;
      case "Gold":
        return <FiTool className="text-xl sm:text-2xl text-blue-600" />;
      default:
        return <FiServer className="text-xl sm:text-2xl text-blue-600" />;
    }
  };

  const getPackageColor = (pkg, isHovered = false) => {
    if (pkg.name === "Special") {
      return isHovered ? "from-gray-700 to-gray-900" : "from-gray-600 to-gray-800";
    }
    return isHovered ? "from-blue-700 to-indigo-700" : "from-blue-600 to-indigo-600";
  };

  const getCardBackground = (pkg) => {
    if (pkg.name === "Special") {
      return "bg-gradient-to-br from-gray-50 to-gray-100";
    }
    if (pkg.name === "Plus") {
      return "bg-gradient-to-br from-blue-50 to-indigo-50";
    }
    return "bg-white";
  };

  const categoryData = {
    "web-hosting": {
      title: "Web Hosting",
      icon: <FiGlobe className="text-2xl" />,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
      features: ["99.9% Uptime", "Free SSL", "24/7 Support", "Unlimited Bandwidth"],
      content: `A2IT Web Hosting Services: Reliable, Secure, and Scalable Solutions for Your Online Presence. Perfect for small to medium businesses.`,
      price: "$9.99/mo"
    },
    "cloud-hosting": {
      title: "Cloud Hosting",
      icon: <FiCloud className="text-2xl" />,
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
      features: ["Auto Scaling", "Load Balancing", "Global CDN", "Real-time Monitoring"],
      content: `A2IT Cloud Hosting Services: Empowering Your Digital Transformation with scalable infrastructure.`,
      price: "$29.99/mo"
    },
    "dedicated-servers": {
      title: "Dedicated Servers",
      icon: <FiServer className="text-2xl" />,
      color: "bg-blue-700",
      gradient: "from-blue-700 to-blue-800",
      features: ["Full Root Access", "Dedicated Resources", "Enterprise Hardware", "Custom Config"],
      content: `A2IT Dedicated Server Hosting: Unmatched Performance and Control for Your Business.`,
      price: "$199/mo"
    },
    "vps-hosting": {
      title: "VPS Hosting",
      icon: <FiCpu className="text-2xl" />,
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
      features: ["SSD Storage", "Custom OS", "Scalable RAM", "Isolated Environment"],
      content: `A2IT VPS Hosting: Empowering Your Business with Scalable and Secure Solutions.`,
      price: "$49.99/mo"
    },
    "managed-hosting": {
      title: "Managed Hosting",
      icon: <FiShield className="text-2xl" />,
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600",
      features: ["Auto Backups", "Security Updates", "Performance Tuning", "Expert Support"],
      content: `A2IT Managed Hosting Servers: Comprehensive Solutions for Modern Businesses.`,
      price: "$79.99/mo"
    },
    "domain-management": {
      title: "Domain & SSL",
      icon: <FiGlobe className="text-2xl" />,
      color: "bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
      features: ["Domain Registration", "SSL Certificates", "DNS Management", "WHOIS Protection"],
      content: `A2IT Domain Management: Streamlining Your Online Presence with complete domain solutions.`,
      price: "$14.99/yr"
    },
  };

  const stats = [
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support" },
    { value: "50+", label: "Data Centers" },
    { value: "10M+", label: "Websites Hosted" },
  ];

  const features = [
    {
      icon: <FiZap className="text-2xl" />,
      title: "Lightning Fast",
      description: "NVMe SSD storage and optimized servers for maximum speed"
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Secure by Design",
      description: "Enterprise-grade security with DDoS protection"
    },
    {
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Scalable",
      description: "Easily upgrade resources as your business grows"
    },
    {
      icon: <FiDownload className="text-2xl" />,
      title: "Easy Migration",
      description: "Free website migration with zero downtime"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">


      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute top-60 -left-40 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-20 pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
                <FiZap className="mr-2" />
                Enterprise-Grade Hosting
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Hosting Solutions
                </span>{" "}
                for Your Business
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Scalable, secure, and high-performance hosting infrastructure with 24/7 expert support and 99.9% uptime guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-4 px-8 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  Start Free Trial
                  <FiArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300"
                >
                  View Pricing
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800">
                  <h3 className="text-xl font-bold text-white">Server Dashboard</h3>
                  <p className="text-blue-100 text-sm">Real-time monitoring</p>
                </div>
                
                <div className="p-6 space-y-4">
                  {["CPU Usage", "Memory", "Storage", "Network"].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{item}</span>
                        <span className="font-semibold text-gray-900">{["65%", "42%", "78%", "1.2Gbps"][index]}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: ["65%", "42%", "78%", "85%"] }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 border-t border-gray-100">
                  <div className="p-4 text-center border-r border-gray-100">
                    <FiCpu className="text-blue-600 text-xl mx-auto mb-2" />
                    <div className="text-sm font-semibold">64 Cores</div>
                  </div>
                  <div className="p-4 text-center border-r border-gray-100">
                    <FiDatabase className="text-blue-600 text-xl mx-auto mb-2" />
                    <div className="text-sm font-semibold">NVMe SSD</div>
                  </div>
                  <div className="p-4 text-center">
                    <FiDownload className="text-blue-600 text-xl mx-auto mb-2" />
                    <div className="text-sm font-semibold">10 Gbps</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                A2IT Hosting
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade features for businesses of all sizes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Hosting Solutions
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the perfect hosting solution for your needs
            </p>
          </motion.div>

          {/* Category Selection */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Object.entries(categoryData).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCategory(key)}
                className={`p-4 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                  activeCategory === key
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                <div className="mb-2">{category.icon}</div>
                <span className="text-sm font-medium">{category.title}</span>
                <div className={`text-xs mt-2 px-2 py-1 rounded-full ${
                  activeCategory === key ? "bg-white/20" : "bg-gray-100"
                }`}>
                  {category.price}
                </div>
              </motion.button>
            ))}
          </div>

          {/* Service Details */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200"
            >
              <div className={`h-2 bg-gradient-to-r ${categoryData[activeCategory].gradient}`}></div>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className={`w-16 h-16 ${categoryData[activeCategory].color} rounded-xl flex items-center justify-center text-white mr-4`}>
                      {categoryData[activeCategory].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{categoryData[activeCategory].title}</h3>
                      <div className="text-blue-600 font-bold text-xl mt-1">{categoryData[activeCategory].price}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpandedInfo(!expandedInfo)}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {expandedInfo ? (
                      <>
                        <span>Show Less</span>
                        <FiX />
                      </>
                    ) : (
                      <>
                        <span>Learn More</span>
                        <FiChevronDown />
                      </>
                    )}
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {categoryData[activeCategory].features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <FiCheck className="text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {expandedInfo && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <h4 className="font-bold text-gray-900 mb-4">Description</h4>
                        <p className="text-gray-600 leading-relaxed">
                          {categoryData[activeCategory].content}
                        </p>
                        <div className="mt-6">
                          <Link
                            href="/contact"
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl transition-all duration-300"
                          >
                            Get Started with {categoryData[activeCategory].title}
                            <FiArrowRight className="ml-2" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-10 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl mb-3 shadow-lg">
              <FiTag className="text-2xl text-white" />
            </div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
              TRANSPARENT PRICING
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-3">
              Choose Your{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Hosting Plan
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Flexible hosting solutions for every business size.
            </p>
          </motion.div>

          {/* Pricing Slider */}
          <div className="relative">
            {/* Navigation Arrows */}
            <div className="flex justify-end items-center gap-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
              >
                <FiArrowLeft className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
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
                      {pkg.name === "Plus" && (
                        <div className="absolute top-6 -right-10 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-10 py-1 rotate-45 shadow-lg z-10">
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
                            <div className={pkg.name === "Special" ? "text-white" : ""}>
                              {getIconForPackage(pkg.name)}
                            </div>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
                          <div className="text-3xl sm:text-4xl font-bold mb-2">
                            <span className={pkg.name === "Special" ? "text-gray-900" : "text-blue-900"}>{pkg.price}</span>
                            <span className="text-gray-500 text-base sm:text-lg">/month</span>
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
                                pkg.name === "Special" ? "text-gray-700" : "text-blue-500"
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
                              : "bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-xl"
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

            {/* Slide Indicators */}
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
                        ? 'bg-gradient-to-r from-blue-600 to-blue-800 w-10' 
                        : 'bg-gray-300 hover:bg-gray-400 w-3'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Project?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust A2IT with their hosting needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-4 px-8 rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Start Free 14-Day Trial
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ServiceHosting;