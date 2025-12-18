"use client";
<<<<<<< Updated upstream
import React, { useState, useRef, useEffect } from "react";
=======

import React, { useState, useEffect } from "react";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiSmartphone,
<<<<<<< Updated upstream
<<<<<<< Updated upstream
  FiLayout,
  FiPenTool,
  FiEye,
  FiUsers,
  FiPieChart,
  FiMonitor,
  FiShoppingCart,
  FiLayers,
  FiServer,
  FiCloud,
  FiShield,
  FiCpu,
  FiDatabase,
  FiTrendingUp,
  FiClock,
  FiDollarSign,
  FiCheckCircle,
  FiGrid,
  FiPackage,
  FiStar,
  FiTool,
  FiAward,
  FiPlay,
  FiX,
=======
  FiShoppingCart,
  FiArrowLeft, 
>>>>>>> Stashed changes
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
=======
  FiShoppingCart,
  FiArrowLeft, 
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const ServiceWebDev = ({ projects = [], packages = [] }) => {
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Responsive projects per view
  const getProjectsPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  };

  // Responsive packages per view
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const projectsPerView = getProjectsPerView();
  const slidesPerView = getSlidesPerView();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Group projects into slides
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += projectsPerView) {
    const slideProjects = projects.slice(i, i + projectsPerView);
    if (slideProjects.length > 0) {
      groupedProjects.push(slideProjects);
    }
  }

  // Group packages into slides
  const groupedPackages = [];
  for (let i = 0; i < packages.length; i += slidesPerView) {
    groupedPackages.push(packages.slice(i, i + slidesPerView));
  }

  // Reset slides when grouping changes
  useEffect(() => {
    setCurrentProjectSlide(0);
    setCurrentSlide(0);
  }, [projectsPerView, slidesPerView]);

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % groupedProjects.length);
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + groupedProjects.length) % groupedProjects.length);
  };

  const goToProjectSlide = (index) => {
    setCurrentProjectSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedPackages.length) % groupedPackages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getPackageColor = (pkg, isHover = false) => {
    if (pkg.name === "Special" || pkg.color === "black") {
      return isHover 
        ? "bg-gray-900 border-gray-800" 
        : "bg-black border-gray-800";
    }
    if (pkg.name === "Gold" || pkg.color === "blue") {
      return isHover 
        ? "bg-blue-700 border-blue-600" 
        : "bg-blue-600 border-blue-500";
    }
    return isHover 
      ? "bg-blue-700 border-blue-600" 
      : "bg-blue-600 border-blue-500";
  };
>>>>>>> Stashed changes

const ServiceWebDev = ({ projects = [], packages = [] }) => {
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Responsive projects per view
  const getProjectsPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  };

  // Responsive packages per view
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const projectsPerView = getProjectsPerView();
  const slidesPerView = getSlidesPerView();

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Group projects into slides
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += projectsPerView) {
    const slideProjects = projects.slice(i, i + projectsPerView);
    if (slideProjects.length > 0) {
      groupedProjects.push(slideProjects);
    }
  }

  // Group packages into slides
  const groupedPackages = [];
  for (let i = 0; i < packages.length; i += slidesPerView) {
    groupedPackages.push(packages.slice(i, i + slidesPerView));
  }

  // Reset slides when grouping changes
  useEffect(() => {
    setCurrentProjectSlide(0);
    setCurrentSlide(0);
  }, [projectsPerView, slidesPerView]);

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % groupedProjects.length);
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + groupedProjects.length) % groupedProjects.length);
  };

  const goToProjectSlide = (index) => {
    setCurrentProjectSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedPackages.length) % groupedPackages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getPackageColor = (pkg, isHover = false) => {
    if (pkg.name === "Special" || pkg.color === "black") {
      return isHover 
        ? "bg-gray-900 border-gray-800" 
        : "bg-black border-gray-800";
    }
    if (pkg.name === "Gold" || pkg.color === "blue") {
      return isHover 
        ? "bg-blue-700 border-blue-600" 
        : "bg-blue-600 border-blue-500";
    }
    return isHover 
      ? "bg-blue-700 border-blue-600" 
      : "bg-blue-600 border-blue-500";
  };

// Import your data
import pricingData from "./pricing-data.json";
import portfolioData from "./portfolioData.json";

const DesignDevelopment = () => {
  const [activeSection, setActiveSection] = useState("web");
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

<<<<<<< Updated upstream
  const webRef = useRef(null);
  const mobileRef = useRef(null);
  const uiuxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Extract data
  const designDevPackages =
    pricingData.services.find((s) => s.category === "Design & Development")
      ?.packages || [];
  const mobilePackages = [
    {
      id: "mobile-basic",
      name: "Basic",
      price: "$2,999",
      color: "gray",
      features: [
        "Native iOS/Android App",
        "Basic UI/UX Design",
        "Core Features",
        "App Store Deployment",
        "3 Months Support",
        "Bug Fixes",
      ],
    },
    {
      id: "mobile-pro",
      name: "Professional",
      price: "$5,999",
      color: "blue",
      features: [
        "Cross-Platform (React Native)",
        "Advanced UI/UX",
        "Backend Integration",
        "Push Notifications",
        "6 Months Support",
        "Performance Optimization",
      ],
    },
    {
      id: "mobile-enterprise",
      name: "Enterprise",
      price: "$9,999",
      color: "blue",
      features: [
        "Full Custom Development",
        "AI/ML Integration",
        "Real-time Features",
        "Advanced Security",
        "1 Year Support",
        "24/7 Monitoring",
      ],
    },
  ];

  const uiuxPackages = [
    {
      id: "uiux-basic",
      name: "Basic",
      price: "$999",
      color: "gray",
      features: [
        "Wireframing",
        "UI Design (5 screens)",
        "Style Guide",
        "Basic Prototype",
        "2 Revisions",
        "1 Month Support",
      ],
    },
    {
      id: "uiux-pro",
      name: "Professional",
      price: "$2,499",
      color: "blue",
      features: [
        "User Research",
        "UI/UX Design (15 screens)",
        "Design System",
        "Interactive Prototype",
        "5 Revisions",
        "3 Months Support",
      ],
    },
    {
      id: "uiux-enterprise",
      name: "Enterprise",
      price: "$4,999",
      color: "blue",
      features: [
        "Full UX Strategy",
        "Complete Design System",
        "User Testing",
        "Development Handoff",
        "Unlimited Revisions",
        "6 Months Support",
      ],
    },
  ];

  // Filter projects
  const webProjects = portfolioData.portfolio.portfolioProjects
    .filter(
      (p) =>
        p.category.includes("Web Development") ||
        p.category.includes("Affiliate Platform") ||
        p.title.includes("Website")
    )
    .slice(0, 6);

  const mobileProjects = portfolioData.portfolio.portfolioProjects
    .filter(
      (p) =>
        p.category.includes("Mobile Development") ||
        p.title.includes("App") ||
        p.title.includes("Mobile")
    )
    .slice(0, 3);

  const wordpressProjects = portfolioData.portfolio.portfolioProjects
    .filter(
      (p) =>
        p.category.includes("WordPress") ||
        p.technologies?.includes("WordPress") ||
        p.technologies?.includes("WooCommerce")
    )
    .slice(0, 3);

  const featuredProjects = portfolioData.portfolio.featuredProjects;

  const handleScroll = (ref, section) => {
    if (ref.current) {
      const elementPosition = ref.current.offsetTop - 100;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setActiveSection(section);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY + 150;

      if (uiuxRef.current && scrollPosition >= uiuxRef.current.offsetTop) {
        setActiveSection("uiux");
      } else if (
        mobileRef.current &&
        scrollPosition >= mobileRef.current.offsetTop
      ) {
        setActiveSection("mobile");
      } else {
        setActiveSection("web");
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const industries = [
    {
      name: "E-Commerce",
      icon: <FiShoppingCart className="text-2xl" />,
      features: [
        "Online stores",
        "Payment integration",
        "Inventory management",
      ],
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      stats: "+45% Revenue",
    },
    {
      name: "Healthcare",
      icon: <FiUsers className="text-2xl" />,
      features: ["Patient portals", "Appointment systems", "Medical records"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      stats: "99.9% Uptime",
    },
    {
      name: "Education",
      icon: <FiPieChart className="text-2xl" />,
      features: ["Learning platforms", "Student portals", "Course management"],
      color: "bg-gradient-to-br from-blue-700 to-indigo-600",
      stats: "+38% Engagement",
    },
    {
      name: "Finance",
      icon: <FiTrendingUp className="text-2xl" />,
      features: ["Banking apps", "Payment systems", "Financial dashboards"],
      color: "bg-gradient-to-br from-cyan-600 to-blue-600",
      stats: "Bank-level Security",
    },
  ];

  const services = {
    web: [
      {
        icon: <FiCode className="text-3xl" />,
        title: "Custom Web Development",
        description: "Bespoke websites built with modern technologies",
        features: [
          "React/Next.js",
          "Node.js",
          "Headless CMS",
          "API Integration",
        ],
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: <FiShoppingCart className="text-3xl" />,
        title: "E-Commerce Solutions",
        description: "High-converting online stores",
        features: ["Shopify", "WooCommerce", "Payment Gateways", "Inventory"],
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
      },
      {
        icon: <FiLayers className="text-3xl" />,
        title: "CMS Development",
        description: "Easy-to-manage content systems",
        features: ["WordPress", "Custom CMS", "User Roles", "SEO Ready"],
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
      },
      {
        icon: <FiServer className="text-3xl" />,
        title: "Enterprise Solutions",
        description: "Scalable platforms for large businesses",
        features: [
          "Microservices",
          "Cloud Native",
          "Load Balancing",
          "Security",
        ],
        color: "text-blue-700",
        bgColor: "bg-blue-100",
      },
    ],
    mobile: [
      {
        icon: <FiSmartphone className="text-3xl" />,
        title: "Native App Development",
        description: "High-performance iOS and Android apps",
        features: [
          "Swift & Kotlin",
          "Platform-specific UI",
          "Full hardware access",
          "App Store optimization",
        ],
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: <FiCpu className="text-3xl" />,
        title: "Cross-Platform Development",
        description: "Single codebase for both platforms",
        features: ["React Native", "Flutter", "Code reusability", "Hot reload"],
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
      },
      {
        icon: <FiCloud className="text-3xl" />,
        title: "Backend Development",
        description: "Scalable cloud infrastructure",
        features: [
          "Node.js/Python",
          "Firebase",
          "API development",
          "Database design",
        ],
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
      },
      {
        icon: <FiShield className="text-3xl" />,
        title: "App Security",
        description: "Enterprise-grade security features",
        features: [
          "Data encryption",
          "Secure authentication",
          "Compliance",
          "Pen testing",
        ],
        color: "text-blue-700",
        bgColor: "bg-blue-100",
      },
    ],
    uiux: [
      {
        icon: <FiPenTool className="text-3xl" />,
        title: "User Research",
        description: "Understand your users through research",
        features: [
          "User Interviews",
          "Persona Development",
          "Market Analysis",
          "Competitive Audit",
        ],
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: <FiLayout className="text-3xl" />,
        title: "UX Strategy",
        description: "Develop a clear design plan",
        features: [
          "User Journey Mapping",
          "Information Architecture",
          "Content Strategy",
          "UX Roadmapping",
        ],
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
      },
      {
        icon: <FiEye className="text-3xl" />,
        title: "UI Design",
        description: "Create visually stunning interfaces",
        features: [
          "Visual Design",
          "Design Systems",
          "Interaction Design",
          "Brand Integration",
        ],
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
      },
      {
        icon: <FiUsers className="text-3xl" />,
        title: "Usability Testing",
        description: "Validate designs with real users",
        features: [
          "Prototype Testing",
          "A/B Testing",
          "User Feedback",
          "Analytics Review",
        ],
        color: "text-blue-700",
        bgColor: "bg-blue-100",
      },
    ],
  };

  const getPackageColor = (pkg, isHovered = false) => {
    if (
      pkg.name === "Special" ||
      pkg.name === "Basic" ||
      pkg.name === "Starter"
    ) {
      return isHovered
        ? "from-gray-700 to-gray-900"
        : "from-gray-600 to-gray-800";
    }
    return isHovered
      ? "from-blue-700 to-indigo-700"
      : "from-blue-600 to-indigo-600";
  };

  const getCardBackground = (pkg) => {
    if (
      pkg.name === "Special" ||
      pkg.name === "Basic" ||
      pkg.name === "Starter"
    ) {
      return "bg-gradient-to-br from-gray-50 to-gray-100";
    }
    if (pkg.name === "Plus" || pkg.name === "Professional") {
      return "bg-gradient-to-br from-blue-50 to-indigo-50";
    }
    return "bg-white";
  };

  const getIconForPackage = (name) => {
    if (
      name.includes("Basic") ||
      name.includes("Special") ||
      name.includes("Starter")
    ) {
      return <FiPackage className="text-xl sm:text-2xl" />;
    }
    if (name.includes("Professional") || name.includes("Plus")) {
      return <FiStar className="text-xl sm:text-2xl" />;
    }
    if (name.includes("Gold") || name.includes("Elite")) {
      return <FiTool className="text-xl sm:text-2xl" />;
    }
    return <FiAward className="text-xl sm:text-2xl" />;
  };

  const renderPricingSection = (packages, title) => {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {title} Pricing
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(pkg.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative rounded-xl overflow-hidden transition-all duration-500 flex flex-col h-full ${getCardBackground(
                pkg
              )} border-2 ${
                hoveredCard === pkg.id
                  ? "border-blue-400 shadow-xl scale-[1.02]"
                  : "border-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              {/* Ribbon for Popular Plan */}
              {(pkg.name === "Professional" ||
                pkg.name === "Plus" ||
                pkg.name === "Gold") && (
                <div className="absolute top-4 -right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-1 rotate-45 shadow-lg z-10">
                  <span className="text-xs font-bold">POPULAR</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                {/* Header */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      hoveredCard === pkg.id
                        ? `bg-gradient-to-r ${getPackageColor(pkg, true)}`
                        : `bg-gradient-to-r ${getPackageColor(pkg)}`
                    }`}
                  >
                    <div
                      className={
                        pkg.name === "Special" || pkg.name === "Basic"
                          ? "text-white"
                          : "text-white"
                      }
                    >
                      {getIconForPackage(pkg.name)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    <span
                      className={
                        pkg.name === "Special" || pkg.name === "Basic"
                          ? "text-gray-900"
                          : "text-blue-900"
                      }
                    >
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div
                        className={`mt-1 mr-3 flex-shrink-0 ${
                          pkg.name === "Special" || pkg.name === "Basic"
                            ? "text-gray-700"
                            : "text-blue-500"
                        }`}
                      >
                        <FiCheckCircle className="text-lg" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
=======
      {/* Project Showcase Section */}
      <section className="py-20 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-[#00f0ff]">Our</span> Web Projects
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Successful web development projects we've built for businesses
            </p>
          </motion.div>

          {/* Projects Slider Navigation */}
          {groupedProjects.length > 1 && (
            <div className="flex justify-end items-center gap-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevProjectSlide}
                className="p-3 rounded-full bg-[#00f0ff] hover:bg-[#00d4e6] text-[#0a0a12] shadow-lg transition-all"
              >
                <FiArrowLeft />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextProjectSlide}
                className="p-3 rounded-full bg-[#00f0ff] hover:bg-[#00d4e6] text-[#0a0a12] shadow-lg transition-all"
              >
                <FiArrowRight />
              </motion.button>
            </div>
          )}

          {/* Projects Grid */}
          {groupedProjects.length > 0 ? (
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProjectSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className={`grid gap-6 ${
                    windowWidth < 640 ? 'grid-cols-1' :
                    windowWidth < 768 ? 'grid-cols-2' :
                    windowWidth < 1024 ? 'grid-cols-3' : 'grid-cols-4'
                  }`}
                >
                  {groupedProjects[currentProjectSlide]?.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[#0a0a12] rounded-xl overflow-hidden border border-[#00f0ff]/20 hover:shadow-lg hover:shadow-[#00f0ff]/10 transition-all flex flex-col h-full group"
                    >
                      <div className="h-48 bg-[#12121a] relative overflow-hidden">
                        {project.images && project.images[0] ? (
                          <Image
                            src={project.images[0]}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            unoptimized
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-[#00f0ff]">
                            <FiCode size={48} />
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full font-bold">
                            {project.status || 'Live'}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="font-bold text-lg mb-2 line-clamp-2 text-[#e0e0ff]">
                          {project.title.split("–")[0].trim()}
                        </h3>
                        <p className="text-[#b0b0ff] text-sm mb-4 line-clamp-2 flex-grow">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies?.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-[#00f0ff]/10 text-[#00f0ff] text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.performance && (
                          <div className="grid grid-cols-2 gap-2 mt-auto">
                            {project.performance.slice(0, 2).map((stat, idx) => (
                              <div key={idx} className="text-center p-2 bg-[#12121a] rounded border border-[#00f0ff]/10">
                                <div className="font-bold text-[#00f0ff]">{stat.value}</div>
                                <div className="text-xs text-[#b0b0ff]">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#b0b0ff]">No projects available at the moment.</p>
            </div>
          )}

          {/* Slide Indicators */}
          {groupedProjects.length > 1 && (
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {groupedProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToProjectSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentProjectSlide === index
                        ? "bg-[#00f0ff] w-8"
                        : "bg-[#00f0ff]/30 hover:bg-[#00f0ff]/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#0a0a12] font-semibold py-3 px-8 rounded-full transition-colors duration-300 group"
            >
              View All Projects
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-6 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Comprehensive Web Solutions
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              End-to-end services tailored to your business objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiMonitor className="text-3xl text-[#00f0ff]" />,
                title: "Custom Web Design",
                description:
                  "Bespoke designs that reflect your brand identity and engage your audience",
                features: [
                  "UI/UX Design",
                  "Wireframing",
                  "Prototyping",
                  "Brand Integration",
                ],
              },
              {
                icon: <FiCode className="text-3xl text-[#00f0ff]" />,
                title: "Web Development",
                description:
                  "High-performance websites built with modern technologies",
                features: [
                  "React/Next.js",
                  "Node.js",
                  "Headless CMS",
                  "API Integration",
                ],
              },
              {
                icon: <FiSmartphone className="text-3xl text-[#00f0ff]" />,
                title: "Mobile Optimization",
                description:
                  "Flawless experiences across all devices and screen sizes",
                features: [
                  "Responsive Design",
                  "PWA",
                  "Touch Optimization",
                  "Performance Tuning",
                ],
              },
              {
                icon: <FiShoppingCart className="text-3xl text-[#00f0ff]" />,
                title: "E-Commerce Solutions",
                description:
                  "High-converting online stores with seamless checkout",
                features: [
                  "Shopify",
                  "WooCommerce",
                  "Payment Gateways",
                  "Inventory Management",
                ],
              },
              {
                icon: <FiLayers className="text-3xl text-[#00f0ff]" />,
                title: "CMS Development",
                description:
                  "Easy-to-manage websites with powerful content systems",
                features: ["WordPress", "Strapi", "Custom CMS", "User Roles"],
              },
              {
                icon: <FiCheck className="text-3xl text-[#00f0ff]" />,
                title: "Website Maintenance",
                description:
                  "Ongoing support to keep your site secure and updated",
                features: [
                  "Security Updates",
                  "Performance Optimization",
                  "Content Updates",
                  "Backups",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12121a] p-8 rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#0a0a12] rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#b0b0ff] mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-[#00f0ff] mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
>>>>>>> Stashed changes
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                      pkg.name === "Special" || pkg.name === "Basic"
                        ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:shadow-xl"
                        : hoveredCard === pkg.id
                        ? `text-white bg-gradient-to-r ${getPackageColor(
                            pkg,
                            true
                          )} shadow-lg`
                        : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl"
                    }`}
                  >
                    Get {pkg.name} Plan
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderProjectsSection = (projects, title) => {
    if (projects.length === 0) return null;

    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          {title} Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/assets/placeholder.png"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900">{project.title}</h4>
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {Array.isArray(project.category) ? (
                    project.category.slice(0, 2).map((cat, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {project.category}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
                <p className="text-xl text-white/80">
                  Design & Development Showcase
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside className="fixed left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-xl rounded-2xl p-2 z-50 shadow-2xl border border-gray-200">
        <ul className="space-y-3">
          <li>
            <button
              onClick={() => handleScroll(webRef, "web")}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group ${
                activeSection === "web"
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <FiCode
                className={`h-5 w-5 ${
                  activeSection === "web"
                    ? "text-white"
                    : "text-gray-600 group-hover:text-blue-600"
                }`}
              />
              <span className="absolute left-14 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                Web Development
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll(mobileRef, "mobile")}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group ${
                activeSection === "mobile"
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <FiSmartphone
                className={`h-5 w-5 ${
                  activeSection === "mobile"
                    ? "text-white"
                    : "text-gray-600 group-hover:text-blue-600"
                }`}
              />
              <span className="absolute left-14 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                Mobile App
              </span>
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll(uiuxRef, "uiux")}
              className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 group ${
                activeSection === "uiux"
                  ? "bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <FiPenTool
                className={`h-5 w-5 ${
                  activeSection === "uiux"
                    ? "text-white"
                    : "text-gray-600 group-hover:text-blue-600"
                }`}
              />
              <span className="absolute left-14 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                UI/UX Design
              </span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="pl-16">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-6 sm:px-12 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-800 to-indigo-600">
                  Design & Development
                </span>
                <span className="block text-gray-900">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                We craft beautiful, high-performance digital experiences that
                drive measurable business results through strategic design and
                cutting-edge technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Get Free Consultation
                  <FiArrowRight className="ml-3" />
                </Link>
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center bg-white text-gray-700 font-semibold py-3 px-8 rounded-lg border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                >
                  <FiPlay className="mr-3 text-blue-600" />
                  Watch Demo
                </button>
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "4.9/5", label: "Client Rating" },
                { number: "50+", label: "Technologies" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center"
                >
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Web Development Section */}
        <section ref={webRef} className="py-16 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Web</span> Development
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Custom websites and web applications built with modern
                technologies
              </p>
            </motion.div>

            {/* Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.web.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <div className={service.color}>{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <FiCheck className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Projects */}
            {renderProjectsSection(webProjects, "Web")}

            {/* Pricing */}
            <div className="mt-12">
              {renderPricingSection(designDevPackages, "Web Development")}
            </div>
          </div>
        </section>

        {/* Mobile App Section */}
        <section ref={mobileRef} className="py-16 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Mobile</span> App Development
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Native and cross-platform mobile applications for iOS and
                Android
              </p>
            </motion.div>

            {/* Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.mobile.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <div className={service.color}>{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <FiCheck className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Projects */}
            {renderProjectsSection(mobileProjects, "Mobile App")}

            {/* Pricing */}
            <div className="mt-12">
              {renderPricingSection(mobilePackages, "Mobile App Development")}
            </div>
          </div>
        </section>

        {/* UI/UX Design Section */}
        <section ref={uiuxRef} className="py-16 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">UI/UX</span> Design
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beautiful, intuitive user experiences that drive engagement and
                conversion
              </p>
            </motion.div>

            {/* Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {services.uiux.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    <div className={service.color}>{service.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <FiCheck className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* WordPress Projects */}
            {renderProjectsSection(wordpressProjects, "WordPress")}

            {/* Pricing */}
            <div className="mt-12">
              {renderPricingSection(uiuxPackages, "UI/UX Design")}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Industry <span className="text-blue-600">Solutions</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Custom solutions tailored to your specific industry needs
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
                  className={`relative bg-white rounded-xl border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                    activeIndustry === index
                      ? "border-blue-500 shadow-xl"
                      : "border-gray-100 hover:border-blue-300"
                  }`}
                >
                  <div className="p-6">
                    <div
                      className={`w-14 h-14 ${industry.color} rounded-xl flex items-center justify-center text-white mb-6 shadow-lg`}
                    >
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
                        <li
                          key={i}
                          className="flex items-start text-gray-600 text-sm"
                        >
                          <FiCheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< Updated upstream
        {/* Featured Projects Section */}
        <section className="py-16 px-6 sm:px-12 bg-white">
=======
      {/* Pricing Section */}
      {packages.length > 0 && (
        <section className="py-20 px-6 sm:px-12 bg-[#0a0a12]">
>>>>>>> Stashed changes
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
<<<<<<< Updated upstream
              className="text-center mb-12"
=======
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
                PRICING PLANS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                Choose Your Perfect Package
              </h2>
              <p className="text-[#b0b0ff] max-w-2xl mx-auto">
                Flexible pricing options to match your business needs and budget
              </p>
            </motion.div>

            {/* Pricing Slider Navigation */}
            {groupedPackages.length > 1 && (
              <div className="flex justify-end items-center gap-4 mb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-[#00f0ff] hover:bg-[#00d4e6] text-[#0a0a12] shadow-lg transition-all"
                >
                  <FiArrowLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-[#00f0ff] hover:bg-[#00d4e6] text-[#0a0a12] shadow-lg transition-all"
                >
                  <FiArrowRight />
                </motion.button>
              </div>
            )}

            {/* Pricing Cards Grid */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className={`grid gap-6 ${
                    windowWidth < 640 ? 'grid-cols-1' :
                    windowWidth < 1024 ? 'grid-cols-2' : 'grid-cols-3'
                  }`}
                >
                  {groupedPackages[currentSlide]?.map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${getPackageColor(pkg)} rounded-2xl p-8 text-white border-2 hover:scale-105 transition-all duration-300 shadow-xl`}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                        <div className="text-4xl font-bold">{pkg.price}</div>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <FiCheck className="mt-1 mr-3 flex-shrink-0 text-white" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="block w-full text-center bg-white text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            {groupedPackages.length > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {groupedPackages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? "bg-[#00f0ff] w-8"
                          : "bg-[#00f0ff]/30 hover:bg-[#00f0ff]/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {packages.length > 0 && (
        <section className="py-20 px-6 sm:px-12 bg-[#0a0a12]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
                PRICING PLANS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                Choose Your Perfect Package
              </h2>
              <p className="text-[#b0b0ff] max-w-2xl mx-auto">
                Flexible pricing options to match your business needs and budget
              </p>
            </motion.div>

            {/* Pricing Slider Navigation */}
            {groupedPackages.length > 1 && (
              <div className="flex justify-end items-center gap-4 mb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-[#00f0ff] hover:bg-[#00d4e6] text-[#0a0a12] shadow-lg transition-all"
                >
                  <FiArrowLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-[#00f0ff] hover:bg-[#00d4e6] text-[#0a0a12] shadow-lg transition-all"
                >
                  <FiArrowRight />
                </motion.button>
              </div>
            )}

            {/* Pricing Cards Grid */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className={`grid gap-6 ${
                    windowWidth < 640 ? 'grid-cols-1' :
                    windowWidth < 1024 ? 'grid-cols-2' : 'grid-cols-3'
                  }`}
                >
                  {groupedPackages[currentSlide]?.map((pkg, index) => (
                    <motion.div
                      key={pkg.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`${getPackageColor(pkg)} rounded-2xl p-8 text-white border-2 hover:scale-105 transition-all duration-300 shadow-xl`}
                    >
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                        <div className="text-4xl font-bold">{pkg.price}</div>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <FiCheck className="mt-1 mr-3 flex-shrink-0 text-white" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact"
                        className="block w-full text-center bg-white text-gray-900 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Get Started
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicators */}
            {groupedPackages.length > 1 && (
              <div className="flex justify-center mt-8">
                <div className="flex space-x-2">
                  {groupedPackages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index
                          ? "bg-[#00f0ff] w-8"
                          : "bg-[#00f0ff]/30 hover:bg-[#00f0ff]/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-10 px-6 sm:px-12 bg-gradient-to-br from-[#0a0a12] via-[#12121a] to-[#0a0a12]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to <span className="text-[#00f0ff]">Transform</span> Your
            Digital Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#b0b0ff] mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can create a website that drives real business
            results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-semibold py-5 px-12 rounded-full shadow-xl hover:shadow-[0_5px_30px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:scale-105"
>>>>>>> Stashed changes
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Featured</span> Projects
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our most successful design and development projects
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.slice(0, 3).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                    {project.images && project.images[0] && (
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies?.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {project.year}
                      </span>
                      <Link
                        href={`/portfolio/${project.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                      >
                        View Project
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                View All Projects
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 sm:px-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium rounded-full mb-8">
                <FiAward className="mr-2" />
                TRUSTED BY 500+ CLIENTS
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how we can create digital experiences that drive
                real business results for your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Get Free Consultation
                  <FiArrowRight className="ml-3" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>

              <p className="mt-8 text-gray-400 text-sm">
                No commitment required • Free 30-minute consultation • Custom
                quote within 24 hours
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};
<<<<<<< Updated upstream
<<<<<<< Updated upstream

export default DesignDevelopment;
=======
=======
>>>>>>> Stashed changes
}
export default ServiceWebDev;
>>>>>>> Stashed changes
