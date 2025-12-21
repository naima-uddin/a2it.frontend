"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import {
  FiCpu,
  FiDatabase,
  FiPieChart,
  FiSettings,
  FiUsers,
  FiBarChart2,
  FiGlobe,
  FiShield,
  FiRefreshCw,
  FiBriefcase,
  FiServer,
  FiCode,
  FiShoppingCart,
  FiArrowRight,
  FiArrowLeft,
  FiPlay,
  FiX,
  FiTrendingUp,
  FiDollarSign,
  FiClock,
  FiCheckCircle,
  FiTarget,
  FiLayers,
  FiGrid,
  FiActivity,
  FiCloud,
  FiZap,
  FiLock,
  FiMenu,
  FiChevronRight,
  FiChevronDown,
  FiAward,
  FiBarChart,
  FiCpu as FiChip,
  FiTag,
  FiPackage,
  FiStar,
  FiTool,
} from "react-icons/fi";
import Link from "next/link";

const ServiceERP = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const industries = [
    {
      name: "Manufacturing",
      icon: <FiSettings className="text-2xl" />,
      features: [
        "Shop floor control",
        "Quality management",
        "Supply chain integration",
      ],
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      stats: "+45% Efficiency",
    },
    {
      name: "Healthcare",
      icon: <FiUsers className="text-2xl" />,
      features: ["Patient management", "HIPAA compliance", "Medical inventory"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      stats: "99.9% Compliance",
    },
    {
      name: "Retail",
      icon: <FiShoppingCart className="text-2xl" />,
      features: [
        "Omnichannel POS",
        "Inventory optimization",
        "Customer analytics",
      ],
      color: "bg-gradient-to-br from-blue-700 to-indigo-600",
      stats: "+38% Revenue",
    },
    {
      name: "Construction",
      icon: <FiBriefcase className="text-2xl" />,
      features: ["Project costing", "Equipment tracking", "Subcontractor mgmt"],
      color: "bg-gradient-to-br from-cyan-600 to-blue-600",
      stats: "-32% Costs",
    },
  ];

  const features = [
    {
      title: "Real-Time Analytics",
      description: "Live business intelligence across all operations",
      icon: <FiActivity className="text-3xl" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Cloud Native",
      description: "Scalable infrastructure with 99.9% uptime",
      icon: <FiCloud className="text-3xl" />,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
    {
      title: "AI Automation",
      description: "Smart workflows that learn and adapt",
      icon: <FiZap className="text-3xl" />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
    {
      title: "Enterprise Security",
      description: "Military-grade encryption and compliance",
      icon: <FiLock className="text-3xl" />,
      color: "text-blue-700",
      bgColor: "bg-blue-100",
    },
  ];

  const implementationSteps = [
    {
      step: "01",
      title: "Strategy & Discovery",
      description: "Understand your business needs and map processes",
      duration: "2-3 weeks",
      color: "border-l-4 border-blue-500",
    },
    {
      step: "02",
      title: "System Design",
      description: "Architect the optimal solution for your requirements",
      duration: "3-4 weeks",
      color: "border-l-4 border-cyan-500",
    },
    {
      step: "03",
      title: "Development & Integration",
      description: "Build and integrate with existing systems",
      duration: "6-8 weeks",
      color: "border-l-4 border-blue-600",
    },
    {
      step: "04",
      title: "Testing & Training",
      description: "Ensure perfection and train your team",
      duration: "2-3 weeks",
      color: "border-l-4 border-cyan-600",
    },
    {
      step: "05",
      title: "Launch & Scale",
      description: "Go live with ongoing support and optimization",
      duration: "Ongoing",
      color: "border-l-4 border-blue-700",
    },
  ];

  const benefits = [
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Revenue Growth",
      value: "+47%",
      description: "Average increase in first year",
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Time Saved",
      value: "65%",
      description: "Reduction in manual processes",
      gradient: "from-cyan-600 to-blue-600",
    },
    {
      icon: <FiDollarSign className="text-2xl" />,
      title: "Cost Reduction",
      value: "-38%",
      description: "Lower operational expenses",
      gradient: "from-blue-700 to-indigo-600",
    },
    {
      icon: <FiCheckCircle className="text-2xl" />,
      title: "Accuracy",
      value: "99.8%",
      description: "Data precision rate",
      gradient: "from-indigo-600 to-blue-600",
    },
  ];

  // Pricing packages
  const pricingPackages = [
    {
      id: "erp-starter",
      name: "Starter",
      price: "$2,999",
      color: "gray",
      features: [
        "Basic ERP Setup",
        "Inventory Module",
        "Sales Module",
        "Basic Reports",
        "User Management",
        "3 Months Support"
      ]
    },
    {
      id: "erp-professional",
      name: "Professional",
      price: "$5,999",
      color: "blue",
      features: [
        "Everything in Starter",
        "Accounting Module",
        "HR Module",
        "Advanced Reports",
        "Mobile Access",
        "6 Months Support"
      ]
    },
    {
      id: "erp-elite",
      name: "Elite",
      price: "$9,999",
      color: "blue",
      features: [
        "Everything in Professional",
        "CRM Integration",
        "Supply Chain",
        "Custom Modules",
        "API Access",
        "1 Year Support"
      ]
    },
    {
      id: "erp-platinum",
      name: "Platinum",
      price: "$14,999",
      color: "blue",
      features: [
        "Everything in Elite",
        "AI Analytics",
        "IoT Integration",
        "Custom Dashboards",
        "Multi-company",
        "2 Years Support"
      ]
    },
    {
      id: "erp-boss",
      name: "The Boss",
      price: "$24,999",
      color: "blue",
      features: [
        "Everything in Platinum",
        "Blockchain Integration",
        "Predictive Analytics",
        "Custom AI Features",
        "Enterprise Security",
        "Priority Support"
      ]
    },
    {
      id: "erp-diamond",
      name: "Diamond",
      price: "$39,999",
      color: "blue",
      features: [
        "Everything in The Boss",
        "Complete Custom ERP",
        "Machine Learning",
        "White Label Solution",
        "24/7 Dedicated Team",
        "Lifetime Updates"
      ]
    }
  ];

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
      case "Starter":
        return <FiPackage className="text-xl sm:text-2xl" />;
      case "Professional":
        return <FiStar className="text-xl sm:text-2xl text-white" />;
      case "Elite":
        return <FiTool className="text-xl sm:text-2xl text-blue-600" />;
      default:
        return <FiSettings className="text-xl sm:text-2xl text-blue-600" />;
    }
  };

  const getPackageColor = (pkg, isHovered = false) => {
    if (pkg.name === "Starter") {
      return isHovered ? "from-gray-700 to-gray-900" : "from-gray-600 to-gray-800";
    }
    return isHovered ? "from-blue-700 to-indigo-700" : "from-blue-600 to-indigo-600";
  };

  const getCardBackground = (pkg) => {
    if (pkg.name === "Starter") {
      return "bg-gradient-to-br from-gray-50 to-gray-100";
    }
    if (pkg.name === "Professional") {
      return "bg-gradient-to-br from-blue-50 to-indigo-50";
    }
    return "bg-white";
  };

  return (
    <div className="bg-white text-gray-900 overflow-hidden">
      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white text-2xl p-2 hover:text-blue-500 transition-colors"
            >
              <FiX />
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                <p className="text-xl text-white/80">ERP System Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Hero Banner */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
          
          {/* Modern Shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-10 w-64 h-64 border border-blue-200/30 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-10 w-96 h-96 border border-cyan-200/20 rounded-full"
          />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-medium rounded-full mb-8 shadow-lg shadow-blue-500/25"
              >
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                ENTERPRISE-GREAD PLATFORM
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-cyan-600">
                  Next-Gen
                </span>
                <span className="block text-gray-900">ERP Solutions</span>
                <span className="block text-gray-600">for Modern Business</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Transform your enterprise with AI-driven insights, automated workflows, and real-time business intelligence in one unified platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Start Free Trial
                      <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </motion.div>

                
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
                {[
                  { value: "99.9%", label: "Uptime SLA", icon: <FiServer /> },
                  { value: "500+", label: "Modules", icon: <FiGrid /> },
                  { value: "24/7", label: "Support", icon: <FiShield /> },
                  { value: "ISO 27001", label: "Certified", icon: <FiAward /> },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center">
                      <div className="text-blue-600 mr-2">{stat.icon}</div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Modern Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Dashboard Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <FiBarChart className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">Enterprise Dashboard</h3>
                        <p className="text-white/80 text-sm">Live Analytics</p>
                      </div>
                    </div>
                    <div className="text-white/90 text-sm font-medium px-3 py-1 bg-white/10 rounded-lg">
                      v4.2 • Production
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Revenue</span>
                        <FiTrendingUp className="text-green-500" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">$284.4K</div>
                      <div className="text-xs text-green-600 font-medium">+12.5%</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Efficiency</span>
                        <FiActivity className="text-blue-500" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">94%</div>
                      <div className="text-xs text-green-600 font-medium">+8.2%</div>
                    </div>
                  </div>

                  {/* Performance Chart */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-gray-900">Performance Trends</h4>
                      <span className="text-xs text-blue-600 font-medium">Last 30 days</span>
                    </div>
                    <div className="h-32 flex items-end space-x-1">
                      {[65, 40, 75, 60, 85, 50, 95, 70, 80, 65, 90, 75].map(
                        (height, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ delay: i * 0.05 }}
                            className="w-full bg-gradient-to-t from-blue-500 to-cyan-400 rounded-t-lg"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Active Systems */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Active Systems</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Finance", "HR", "Inventory", "Sales", "CRM", "SCM"].map((module, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg text-sm font-medium text-gray-700 cursor-pointer hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 transition-all duration-300"
                        >
                          {module}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <FiDatabase className="text-white text-xl" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-200"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <FiChip className="text-white text-xl" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features - Modern Cards */}
      <section className="py-10 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium mb-4">
              CORE FEATURES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Capabilities
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools designed to optimize every aspect of your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-xl border border-gray-100 p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => setActiveFeature(index)}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium text-sm">
                  Learn more
                  <FiArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions - Enhanced */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-lg text-sm font-medium mb-4">
              INDUSTRY SPECIALIZATIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tailored for Your Industry
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Custom-built solutions that address your unique business challenges and opportunities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveIndustry(index)}
                className={`relative bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer group overflow-hidden ${
                  activeIndustry === index
                    ? "border-blue-500 shadow-xl"
                    : "border-gray-100 hover:border-blue-300"
                }`}
              >
                <div className="p-6">
                  <div className={`w-14 h-14 ${industry.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mb-4 flex items-center">
                    <FiTrendingUp className="mr-2" />
                    {industry.stats}
                  </p>
                  <ul className="space-y-3">
                    {industry.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-600 text-sm">
                        <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                  activeIndustry === index 
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600" 
                    : "bg-gray-100 group-hover:bg-blue-300"
                } transition-colors duration-300`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process - Modern */}
      <section className="py-10 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-sm font-medium mb-4">
              IMPLEMENTATION PROCESS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Streamlined Deployment
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven methodology ensuring smooth transition and maximum ROI
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-cyan-200 to-blue-200 transform -translate-x-1/2"></div>
            
            {/* Steps */}
            <div className="space-y-12">
              {implementationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center lg:items-start gap-8`}
                >
                  {/* Step Number */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className={`flex-1 w-full ${
                    index % 2 === 0 ? "lg:pr-8 lg:text-right" : "lg:pl-8"
                  }`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        <div className={`lg:w-2/3 ${
                          index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                        }`}>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                        <div className={`lg:w-1/3 ${
                          index % 2 === 0 ? "lg:order-1 lg:text-right" : "lg:order-2"
                        }`}>
                          <div className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                            <FiClock className="mr-2" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


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

      {/* Benefits Showcase - Enhanced */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-sm font-medium mb-4">
                PROVEN RESULTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Business Metrics
              </h2>
              <p className="text-gray-600 mb-8">
                Join industry leaders who have achieved measurable growth and efficiency with our platform.
              </p>
              
              <div className="space-y-6">
                {[
                  "Real-time analytics for instant decision making",
                  "Automated processes reducing manual work by 65%",
                  "Scalable infrastructure supporting growth",
                  "Enterprise-grade security and compliance",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <FiCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

             
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-gradient-to-br ${benefit.gradient} p-6 rounded-xl shadow-lg text-white`}
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{benefit.value}</div>
                  <h4 className="font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-white/80 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Modern */}
      <section className="py-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-white/20 rounded-full"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-8">
              <FiAward className="mr-2" />
              TRUSTED BY 5,000+ COMPANIES
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a personalized demo and discover how our platform can drive efficiency, growth, and innovation in your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Schedule Demo
                  <FiArrowRight className="ml-3" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </div>
            
            <p className="mt-8 text-gray-400 text-sm">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceERP;