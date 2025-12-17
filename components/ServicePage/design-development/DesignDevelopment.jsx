"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCheck,
  FiCode,
  FiSmartphone,
  FiShoppingCart,
  FiLayers,
  FiServer,
  FiTrendingUp,
  FiCheckCircle,
  FiStar,
  FiPackage,
  FiTool,
  FiAward,
  FiPlay,
  FiX,
  FiGlobe,
  FiDatabase,
  FiShield,
  FiZap,
  FiUsers,
  FiTarget,
  FiPieChart,
  FiBarChart,
  FiActivity,
  FiEye,
  FiClock,
  FiDownload,
  FiUser,
} from "react-icons/fi";
import Link from "next/link";

const DesignDevelopment = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [data, setData] = useState({
    pricing: null,
    portfolio: null,
    loading: true,
    error: null,
  });

  // Slider states
  const [webPage, setWebPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const [wordpressPage, setWordpressPage] = useState(0);
  const [pricingPage, setPricingPage] = useState(0);
  const [featuredPage, setFeaturedPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Stats counter
  const [stats, setStats] = useState({
    projects: 0,
    rating: 0,
    satisfaction: 0,
    support: 24,
  });

  // Fetch data from public folder
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch pricing data
        const pricingResponse = await fetch("/pricing-data.json");
        if (!pricingResponse.ok)
          throw new Error("Failed to fetch pricing data");
        const pricingData = await pricingResponse.json();

        // Fetch portfolio data
        const portfolioResponse = await fetch("/portfolioData.json");
        if (!portfolioResponse.ok)
          throw new Error("Failed to fetch portfolio data");
        const portfolioData = await portfolioResponse.json();

        setData({
          pricing: pricingData,
          portfolio: portfolioData,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setData((prev) => ({
          ...prev,
          loading: false,
          error: error.message,
        }));
      }
    };

    fetchData();
  }, []);

  // Animate stats counter
  useEffect(() => {
    if (!data.loading) {
      const duration = 2000;
      const steps = 60;
      const increment = (target, current) => (target - current) / steps;

      const animateStats = () => {
        let currentProjects = 0;
        let currentRating = 0;
        let currentSatisfaction = 0;

        const timer = setInterval(() => {
          currentProjects += increment(500, currentProjects);
          currentRating += increment(4.9, currentRating);
          currentSatisfaction += increment(98, currentSatisfaction);

          setStats({
            projects: Math.min(Math.floor(currentProjects), 500),
            rating: Math.min(currentRating.toFixed(1), 4.9),
            satisfaction: Math.min(Math.floor(currentSatisfaction), 98),
            support: 24,
          });

          if (
            currentProjects >= 500 &&
            currentRating >= 4.9 &&
            currentSatisfaction >= 98
          ) {
            clearInterval(timer);
          }
        }, duration / steps);

        return () => clearInterval(timer);
      };

      animateStats();
    }
  }, [data.loading]);

  // Extract data
  const designDevPackages =
    data.pricing?.services?.find((s) => s.category === "Design & Development")
      ?.packages || [];

  // Filter projects
  const webProjects =
    data.portfolio?.portfolio?.portfolioProjects?.filter(
      (p) =>
        (Array.isArray(p.category) &&
          p.category.some(
            (cat) =>
              cat.includes("Web Development") ||
              cat.includes("Affiliate Platform") ||
              cat.includes("E-commerce")
          )) ||
        (!Array.isArray(p.category) &&
          (p.category?.includes("Web") ||
            p.title?.includes("Website") ||
            p.title?.includes("Web")))
    ) || [];

  const mobileProjects =
    data.portfolio?.portfolio?.portfolioProjects?.filter(
      (p) =>
        (Array.isArray(p.category) &&
          p.category.some(
            (cat) => cat.includes("Mobile") || cat.includes("App")
          )) ||
        (!Array.isArray(p.category) &&
          (p.category?.includes("Mobile") ||
            p.title?.includes("Mobile") ||
            p.title?.includes("App")))
    ) || [];

  const wordpressProjects =
    data.portfolio?.portfolio?.portfolioProjects?.filter(
      (p) =>
        (Array.isArray(p.category) &&
          p.category.some((cat) => cat.includes("WordPress"))) ||
        (!Array.isArray(p.category) && p.category?.includes("WordPress")) ||
        p.technologies?.some(
          (tech) => tech.includes("WordPress") || tech.includes("WooCommerce")
        )
    ) || [];

  // Get 5 featured projects from both featuredProjects and affiliateProjects
  const featuredProjects = [
    ...(data.portfolio?.portfolio?.featuredProjects || []),
    ...(data.portfolio?.portfolio?.affiliateProjects || []),
  ]
    .slice(0, 5)
    .map((project) => ({
      ...project,
      // Add mock metrics if not available
      metrics: project.performance || [
        { label: "Users", value: "10K+", icon: "👥" },
        { label: "Success Rate", value: "95%", icon: "📈" },
        { label: "Rank", value: "#1", icon: "🏆" },
        { label: "Tech", value: "5+", icon: "⚙️" },
      ],
    }));

  // Calculate slider pages - Web: 4 per page, Mobile: 4 per page, WordPress: 4 per page, Pricing: 3 per page
  const webPages = Math.ceil(webProjects.length / 4);
  const mobilePages = Math.ceil(mobileProjects.length / 4);
  const wordpressPages = Math.ceil(wordpressProjects.length / 4);
  const pricingPages = Math.ceil(designDevPackages.length / 3);

  // Get current page items
  const getWebProjectsForPage = (page) => {
    const start = page * 4;
    return webProjects.slice(start, start + 4);
  };

  const getMobileProjectsForPage = (page) => {
    const start = page * 4;
    return mobileProjects.slice(start, start + 4);
  };

  const getWordpressProjectsForPage = (page) => {
    const start = page * 4;
    return wordpressProjects.slice(start, start + 4);
  };

  const getPricingForPage = (page) => {
    const start = page * 3;
    return designDevPackages.slice(start, start + 3);
  };

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
      icon: <FiTrendingUp className="text-2xl" />,
      features: ["Patient portals", "Appointment systems", "Medical records"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-600",
      stats: "99.9% Uptime",
    },
    {
      name: "Education",
      icon: <FiCheckCircle className="text-2xl" />,
      features: ["Learning platforms", "Student portals", "Course management"],
      color: "bg-gradient-to-br from-blue-700 to-indigo-600",
      stats: "+38% Engagement",
    },
    {
      name: "Finance",
      icon: <FiShield className="text-2xl" />,
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
      {
        icon: <FiZap className="text-3xl" />,
        title: "Performance Optimization",
        description: "Fast loading and optimized performance",
        features: [
          "90+ Speed Scores",
          "SEO Optimization",
          "Mobile First",
          "PWA",
        ],
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
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
        icon: <FiDatabase className="text-3xl" />,
        title: "Cross-Platform Development",
        description: "Single codebase for both platforms",
        features: ["React Native", "Flutter", "Code reusability", "Hot reload"],
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
      },
      {
        icon: <FiGlobe className="text-3xl" />,
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
    wordpress: [
      {
        icon: <FiLayers className="text-3xl" />,
        title: "WordPress Development",
        description: "Custom themes and plugins",
        features: [
          "Custom Themes",
          "Plugin Development",
          "WooCommerce",
          "Elementor",
        ],
        color: "text-blue-600",
        bgColor: "bg-blue-50",
      },
      {
        icon: <FiShoppingCart className="text-3xl" />,
        title: "E-Commerce on WordPress",
        description: "WooCommerce solutions",
        features: [
          "WooCommerce Setup",
          "Payment Integration",
          "Product Management",
          "Custom Checkout",
        ],
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
      },
      {
        icon: <FiServer className="text-3xl" />,
        title: "WordPress Optimization",
        description: "Performance and security",
        features: [
          "Speed Optimization",
          "Security Hardening",
          "SEO Setup",
          "Backup Solutions",
        ],
        color: "text-cyan-600",
        bgColor: "bg-cyan-50",
      },
      {
        icon: <FiZap className="text-3xl" />,
        title: "WordPress Maintenance",
        description: "Ongoing support and updates",
        features: [
          "Updates Management",
          "Security Monitoring",
          "Performance Tuning",
          "Content Updates",
        ],
        color: "text-blue-700",
        bgColor: "bg-blue-100",
      },
    ],
  };

  const getPackageColor = (pkg, isHovered = false) => {
    if (pkg.name === "Special") {
      return isHovered ? "from-gray-900 to-black" : "from-gray-800 to-gray-900";
    }
    if (pkg.name === "Gold") {
      return isHovered
        ? "from-amber-600 to-yellow-600"
        : "from-amber-500 to-yellow-500";
    }
    if (isHovered) {
      return "from-blue-600 to-indigo-600";
    }
    return "from-blue-500 to-indigo-500";
  };

  const getCardBackground = (pkg) => {
    if (pkg.name === "Special") {
      return "bg-black text-white";
    }
    return "bg-white";
  };

  const getIconForPackage = (name) => {
    if (name === "Special") {
      return <FiPackage className="text-xl sm:text-2xl" />;
    }
    if (name === "Plus") {
      return <FiStar className="text-xl sm:text-2xl" />;
    }
    if (name === "Gold") {
      return <FiAward className="text-xl sm:text-2xl" />;
    }
    if (name === "Platinum") {
      return <FiZap className="text-xl sm:text-2xl" />;
    }
    if (name === "The Boss") {
      return <FiTarget className="text-xl sm:text-2xl" />;
    }
    if (name === "Diamond") {
      return <FiGlobe className="text-xl sm:text-2xl" />;
    }
    return <FiTrendingUp className="text-xl sm:text-2xl" />;
  };

  const renderSlider = (
    items,
    page,
    setPage,
    totalPages,
    itemsPerPage,
    isPricing = false,
    isWeb = false
  ) => {
    if (items.length === 0) return null;

    // For mobile, show one item at a time
    const mobileItemsPerPage = 1;
    const mobileTotalPages = items.length;
    const currentPage = isMobile ? page % mobileTotalPages : page;
    const displayItems = isMobile ? [items[currentPage]] : items;
    const effectiveTotalPages = isMobile ? mobileTotalPages : totalPages;

    return (
      <div className="relative px-4 sm:px-0">
        <div
          className={`grid gap-4 sm:gap-6 ${
            isPricing
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {displayItems.map((item, index) =>
            isPricing ? (
              <PricingCard
                key={`${item.id}-${currentPage}`}
                pkg={item}
                index={index}
              />
            ) : (
              <ProjectCard
                key={`${item.id}-${currentPage}`}
                project={item}
                index={index}
                isWeb={isWeb}
              />
            )
          )}
        </div>

        {effectiveTotalPages > 1 && (
          <>
            {/* Navigation Buttons */}
            <button
              onClick={() =>
                setPage(
                  (prev) =>
                    (prev - 1 + effectiveTotalPages) % effectiveTotalPages
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white border border-gray-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 z-10"
            >
              <FiArrowLeft className="text-gray-700 text-sm sm:text-base" />
            </button>

            <button
              onClick={() =>
                setPage((prev) => (prev + 1) % effectiveTotalPages)
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white border border-gray-300 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 z-10"
            >
              <FiArrowRight className="text-gray-700 text-sm sm:text-base" />
            </button>

            {/* Page Indicators */}
            <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 flex-wrap gap-y-2">
              {Array.from({ length: Math.min(effectiveTotalPages, 10) }).map(
                (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPage(idx)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentPage === idx
                        ? "bg-blue-600 w-6 sm:w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                )
              )}
              {effectiveTotalPages > 10 && (
                <span className="text-xs text-gray-500 ml-2">
                  {currentPage + 1}/{effectiveTotalPages}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    );
  };

  const ProjectCard = ({ project, index, isWeb = false }) => {
    const [showInfo, setShowInfo] = React.useState(false);

    return (
      <div
        className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        onClick={() => setShowInfo(!showInfo)}
      >
        {/* Image Container */}
        <div className="aspect-video overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FiCode className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-sm text-gray-600">{project.title}</p>
              </div>
            </div>
          )}
          {/* Hover Overlay with Stats */}
          {showInfo && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex flex-col justify-end p-3 sm:p-4 z-10 animate-fadeIn">
              <div className="grid grid-cols-3 gap-1 sm:gap-2 text-white text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2">
                  <FiSmartphone className="mx-auto mb-0.5 sm:mb-1 text-blue-300 text-sm sm:text-base" />
                  <div className="text-[10px] sm:text-xs font-bold">100%</div>
                  <div className="text-[8px] sm:text-[10px] text-blue-200">
                    Responsive
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2">
                  <FiTrendingUp className="mx-auto mb-0.5 sm:mb-1 text-green-300 text-sm sm:text-base" />
                  <div className="text-[10px] sm:text-xs font-bold">95+</div>
                  <div className="text-[8px] sm:text-[10px] text-green-200">
                    SEO Score
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-1.5 sm:p-2">
                  <FiZap className="mx-auto mb-0.5 sm:mb-1 text-yellow-300 text-sm sm:text-base" />
                  <div className="text-[10px] sm:text-xs font-bold">Fast</div>
                  <div className="text-[8px] sm:text-[10px] text-yellow-200">
                    Loading
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-bold text-gray-900 line-clamp-1 text-sm sm:text-base">
              {project.title}
            </h4>
            <span className="px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-600 text-[10px] sm:text-xs font-medium rounded whitespace-nowrap">
              {project.status || "Live"}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">
            {project.description}
          </p>
          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-2 sm:mb-3">
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="px-1.5 sm:px-2 py-0.5 bg-blue-50 text-blue-600 text-[8px] sm:text-[10px] rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-1.5 sm:px-2 py-0.5 bg-gray-100 text-gray-500 text-[8px] sm:text-[10px] rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {Array.isArray(project.category) ? (
              project.category.slice(0, 2).map((cat, i) => (
                <span
                  key={i}
                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded whitespace-nowrap"
                >
                  {cat}
                </span>
              ))
            ) : (
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-700 text-[10px] sm:text-xs rounded whitespace-nowrap">
                {project.category || "Web Development"}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const FeaturedProjectCard = ({ project, index }) => {
    const [showInfo, setShowInfo] = React.useState(false);

    // Get metrics from project data or use defaults
    const metrics = [
      {
        label: "Active Users",
        value: "10K+",
        icon: <FiUsers className="text-blue-400" />,
      },
      {
        label: "Success Rate",
        value: "95%",
        icon: <FiTrendingUp className="text-green-400" />,
      },
      {
        label: "Ranked",
        value: "#1",
        icon: <FiAward className="text-yellow-400" />,
      },
      {
        label: "Technologies",
        value: project.technologies?.length || "5+",
        icon: <FiCode className="text-purple-400" />,
      },
    ];

    const mainImage = project.images?.[0] || project.image;

    return (
      <div
        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        {/* Project Image - Default view, only image */}
        <div className="absolute inset-0 z-0">
          {mainImage ? (
            <img
              src={mainImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <div className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                  <FiCode className="text-white text-xl sm:text-2xl" />
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </div>
          )}
        </div>

        {/* Info overlay - shows on hover/click */}
        {showInfo && (
          <>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 z-10 animate-fadeIn" />

            {/* Details */}
            <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end z-20">
              <div className="text-white">
                <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">
                  {project.title}
                </h3>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-4">
                  {metrics.slice(0, 4).map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-white/15 backdrop-blur-sm rounded-lg p-1.5 sm:p-2 md:p-3"
                    >
                      <div className="flex items-center mb-0.5 sm:mb-1">
                        <div className="mr-1 sm:mr-2 text-xs sm:text-sm">
                          {metric.icon}
                        </div>
                        <div className="text-[8px] sm:text-[10px] md:text-xs text-blue-100 truncate">
                          {metric.label}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm md:text-lg font-bold">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mb-2 sm:mb-4">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies?.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white/20 backdrop-blur-sm text-white text-[8px] sm:text-[10px] md:text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiClock className="mr-1 sm:mr-2 text-blue-300 text-xs sm:text-sm" />
                    <span className="text-[10px] sm:text-xs md:text-sm text-blue-200">
                      {project.year || "2024"}
                    </span>
                  </div>
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-600 text-white text-[8px] sm:text-[10px] md:text-xs font-medium rounded-full">
                    {project.status || "Live"}
                  </span>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Tap/Hover indicator - only shows when info is hidden */}
        {!showInfo && (
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs flex items-center">
              <FiEye className="mr-1 text-xs" />
              <span className="hidden sm:inline">Hover</span>
              <span className="sm:hidden">Tap</span>
              <span className="ml-1">for details</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  const PricingCard = ({ pkg, index }) => {
    return (
      <div
        className={`relative rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full ${getCardBackground(
          pkg
        )} border-2 ${
          pkg.name === "Special"
            ? "border-gray-800 hover:border-gray-600 hover:bg-gray-900"
            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/30"
        } shadow-md hover:shadow-xl`}
      >
        {/* Ribbon for Special and Gold Plans */}
        {pkg.name === "Special" && (
          <div className="absolute top-3 sm:top-4 -right-8 sm:-right-10 bg-white text-black px-8 sm:px-10 py-0.5 sm:py-1 rotate-45 shadow-lg z-10">
            <span className="text-[10px] sm:text-xs font-bold">STARTER</span>
          </div>
        )}
        {pkg.name === "Gold" && (
          <div className="absolute top-3 sm:top-4 -right-8 sm:-right-10 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 sm:px-10 py-0.5 sm:py-1 rotate-45 shadow-lg z-10">
            <span className="text-[10px] sm:text-xs font-bold">POPULAR</span>
          </div>
        )}
        {pkg.name === "Diamond" && (
          <div className="absolute top-3 sm:top-4 -right-8 sm:-right-10 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 sm:px-10 py-0.5 sm:py-1 rotate-45 shadow-lg z-10">
            <span className="text-[10px] sm:text-xs font-bold">PREMIUM</span>
          </div>
        )}

        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6">
            <div
              className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 transition-colors duration-300 ${
                pkg.name === "Special"
                  ? "bg-white"
                  : "bg-gradient-to-r from-blue-500 to-indigo-500"
              }`}
            >
              <div
                className={pkg.name === "Special" ? "text-black" : "text-white"}
              >
                {getIconForPackage(pkg.name)}
              </div>
            </div>
            <h3
              className={`text-lg sm:text-xl font-bold mb-1 sm:mb-2 ${
                pkg.name === "Special" ? "text-white" : "text-gray-900"
              }`}
            >
              {pkg.name}
            </h3>
            <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
              <span
                className={
                  pkg.name === "Special" ? "text-white" : "text-blue-600"
                }
              >
                {pkg.price}
              </span>
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-grow">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <div
                  className={`mt-0.5 sm:mt-1 mr-2 sm:mr-3 flex-shrink-0 ${
                    pkg.name === "Special" ? "text-gray-300" : "text-blue-500"
                  }`}
                >
                  <FiCheckCircle className="text-base sm:text-lg" />
                </div>
                <span
                  className={`text-xs sm:text-sm ${
                    pkg.name === "Special" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link href="/contact">
            <button
              className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 ${
                pkg.name === "Special"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg"
              }`}
            >
              Get {pkg.name} Plan
            </button>
          </Link>
        </div>
      </div>
    );
  };

  // Show loading state
  if (data.loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading data...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (data.error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-xl">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Error Loading Data
          </h3>
          <p className="text-gray-600 mb-4">{data.error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

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

      {/* Main Content */}
      <main>
        {/* Hero Banner - Amazon Style */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay - Using abstract pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-800/90 to-purple-900/90"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>

            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-overlay blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full mix-blend-overlay blur-3xl"></div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          </div>

          {/* Content */}
          <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full mb-8 shadow-lg shadow-blue-500/25"
              >
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                PREMIUM DIGITAL SOLUTIONS
              </motion.div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white">
                  Design & Development
                </span>
                <span className="block text-white mt-2">Solutions</span>
              </h1>

              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
                We create stunning digital experiences that drive business
                growth through innovative design and cutting-edge development.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                  >
                    <span className="flex items-center">
                      Start Your Project
                      <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="group inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-8 rounded-lg border-2 border-white/30 hover:border-white hover:bg-white/30 transition-all duration-300"
                  >
                    <FiPlay className="mr-3" />
                    Watch Showcase
                  </button>
                </motion.div>
              </div>

              {/* Stats Counter */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {[
                  {
                    value: `${stats.projects}+`,
                    label: "Projects Delivered",
                    icon: <FiCode />,
                  },
                  {
                    value: `${stats.rating}★`,
                    label: "Client Rating",
                    icon: <FiStar />,
                  },
                  {
                    value: `${stats.satisfaction}%`,
                    label: "Satisfaction",
                    icon: <FiCheckCircle />,
                  },
                  {
                    value: `${stats.support}/7`,
                    label: "Support",
                    icon: <FiActivity />,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4 mx-auto">
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-blue-100 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects - 5 Projects with Hover Details */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8 sm:mb-16"
            >
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                FEATURED WORK
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                <span className="text-blue-600">Spotlight</span> Projects
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Our most successful design and development projects
              </p>
            </motion.div>

            {/* Mobile Slider */}
            {isMobile ? (
              <div className="relative px-6">
                <div className="overflow-hidden">
                  <FeaturedProjectCard
                    key={featuredProjects[featuredPage]?.id}
                    project={
                      featuredProjects[featuredPage] || featuredProjects[0]
                    }
                    index={0}
                  />
                </div>

                {featuredProjects.length > 1 && (
                  <>
                    {/* Navigation Buttons */}
                    <button
                      onClick={() =>
                        setFeaturedPage(
                          (prev) =>
                            (prev - 1 + featuredProjects.length) %
                            featuredProjects.length
                        )
                      }
                      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10"
                    >
                      <FiArrowLeft className="text-gray-700 text-sm" />
                    </button>
                    <button
                      onClick={() =>
                        setFeaturedPage(
                          (prev) => (prev + 1) % featuredProjects.length
                        )
                      }
                      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10"
                    >
                      <FiArrowRight className="text-gray-700 text-sm" />
                    </button>

                    {/* Page Indicators */}
                    <div className="flex justify-center items-center mt-4 space-x-2">
                      {featuredProjects.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setFeaturedPage(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            featuredPage === idx
                              ? "bg-blue-600 w-6"
                              : "bg-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              /* Desktop Grid */
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Web Development Section */}
        <section className="py-20 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-sm font-medium mb-4">
                WEB DEVELOPMENT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Custom <span className="text-blue-600">Web Solutions</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Professional websites and web applications built with modern
                technologies
              </p>
            </motion.div>

            {/* Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

            {/* Projects Slider - 4 per page */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Web <span className="text-blue-600">Projects</span>
              </h3>
              {renderSlider(
                getWebProjectsForPage(webPage),
                webPage,
                setWebPage,
                webPages,
                4,
                false,
                true
              )}
            </div>
          </div>
        </section>

        {/* Mobile App Development Section */}
        <section className="py-20 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-lg text-sm font-medium mb-4">
                MOBILE APPS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Mobile <span className="text-indigo-600">App Development</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Native and cross-platform mobile applications for iOS and
                Android
              </p>
            </motion.div>

            {/* Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
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

            {/* Projects Slider - 4 per page */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Mobile <span className="text-indigo-600">Projects</span>
              </h3>
              {renderSlider(
                getMobileProjectsForPage(mobilePage),
                mobilePage,
                setMobilePage,
                mobilePages,
                4
              )}
            </div>
          </div>
        </section>

        {/* WordPress Development Section */}
        <section className="py-20 px-6 sm:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-lg text-sm font-medium mb-4">
                WORDPRESS
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                WordPress <span className="text-green-600">Development</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Custom WordPress themes, plugins, and e-commerce solutions
              </p>
            </motion.div>

            {/* Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {services.wordpress.map((service, index) => (
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

            {/* Projects Slider - 4 per page */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                WordPress <span className="text-green-600">Projects</span>
              </h3>
              {renderSlider(
                getWordpressProjectsForPage(wordpressPage),
                wordpressPage,
                setWordpressPage,
                wordpressPages,
                4
              )}
            </div>

            {/* Design & Development Pricing - After WordPress Projects */}
            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                  <FiTrendingUp className="text-2xl text-white" />
                </div>
                <span className="text-blue-600 font-semibold tracking-widest text-sm">
                  DESIGN & DEVELOPMENT
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                      Pricing Plans
                    </span>
                    <motion.div
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                    />
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Scale your business with our flexible pricing. Start small,
                  grow big.
                </p>
              </motion.div>

              {/* Pricing Slider - 3 per page */}
              {renderSlider(
                getPricingForPage(pricingPage),
                pricingPage,
                setPricingPage,
                pricingPages,
                3,
                true
              )}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-6 sm:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-lg text-sm font-medium mb-4">
                INDUSTRIES
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Industry <span className="text-purple-600">Solutions</span>
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

        {/* Final CTA with Blue Gradient */}
        <section className="py-20 px-6 sm:px-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-8">
                <FiAward className="mr-2" />
                TRUSTED BY 500+ CLIENTS
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                Let's discuss how we can create digital experiences that drive
                real business results for your organization.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  Get Free Consultation
                  <FiArrowRight className="ml-3" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>

              <p className="mt-8 text-blue-200 text-sm">
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

export default DesignDevelopment;
