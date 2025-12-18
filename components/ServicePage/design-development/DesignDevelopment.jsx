"use client";
import React, { useState, useEffect } from "react";
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
  FiSearch,
  FiTag,
  FiBox,
  FiShoppingBag,
  FiGrid,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Link from "next/link";

// Direct data imports - Same as before
const portfolioData = {
  "portfolio": {
    "affiliateProjects": [
      {
        "id": 18,
        "title": "BestBuyersView – Affiliate Product Review Platform",
        "category": "Web Development",
        "type": "affiliate",
        "status": "live",
        "client": "Best Buyers View",
        "year": "2025",
        "duration": "3 months",
        "teamSize": "10 members",
        "description": "Affiliate-based product review and comparison platform helping users discover the best products with trusted insights.",
        "detailedDescription": "Developed a fast, SEO-optimized affiliate website focused on in-depth product reviews, comparisons, and buying guides. The platform is designed to convert organic traffic into affiliate revenue through structured content, smart internal linking, and performance-focused architecture.",
        "businessChallenge": "Standing out in a highly competitive affiliate market while maintaining fast load times, SEO strength, and high conversion rates.",
        "solution": "Built a lightweight, scalable platform using modern web technologies, implemented advanced on-page SEO, structured data, category-based navigation, and optimized affiliate linking strategies.",
        "results": "Achieved strong organic traffic growth, improved page speed scores above 90, increased affiliate click-through rate, and established a scalable content system for future expansion.",
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "JavaScript",
          "VPS Hosting",
          "Hostinger",
          "Tailwind CSS",
          "REST API",
          "MVC Architecture",
          "SEO Optimization",
          "Schema Markup"
        ],
        "images": [
          "/assets/Portfolio/bestbuyersview-1.png",
          "/assets/Portfolio/bestbuyersview-2.png",
          "/assets/Portfolio/bestbuyersview-3.png",
          "/assets/Portfolio/bestbuyersview-4.png"
        ],
        "features": [
          "Affiliate product reviews",
          "Product comparison tables",
          "SEO-optimized blog system",
          "Category & subcategory structure",
          "Schema-rich snippets",
          "Fast-loading pages",
          "Mobile-first design",
          "Internal linking automation",
          "User-friendly navigation"
        ],
        "performance": [
          {
            "label": "Page Speed Score",
            "value": "90+",
            "icon": "⚡"
          },
          {
            "label": "Organic Traffic Growth",
            "value": "3×",
            "icon": "📈"
          },
          {
            "label": "Affiliate CTR",
            "value": "High",
            "icon": "🛒"
          },
          {
            "label": "Mobile Optimization",
            "value": "100%",
            "icon": "📱"
          }
        ],
        "testimonial": {
          "text": "BestBuyersView now delivers fast performance, strong SEO results, and a clean user experience that helps users make confident buying decisions.",
          "author": "Project Owner",
          "position": "Founder",
          "company": "Best Buyers View"
        }
      },
      {
        "id": 19,
        "title": "BestProductBuy – Affiliate Product Comparison Platform",
        "category": "Affiliate E-commerce",
        "type": "affiliate",
        "status": "live",
        "client": "Best Product Buy",
        "year": "2024",
        "duration": "4 months",
        "teamSize": "4 members",
        "description": "A scalable affiliate product discovery platform helping users find the best products through comparisons, reviews, and buying guides.",
        "detailedDescription": "Designed and developed an SEO-driven affiliate platform that aggregates top-rated products across multiple categories. The system focuses on fast performance, structured content, comparison tables, and conversion-optimized layouts to maximize affiliate revenue.",
        "businessChallenge": "Competing in a saturated affiliate market while maintaining strong SEO rankings, fast page speed, and high user trust.",
        "solution": "Implemented a lightweight, performance-first architecture with schema markup, optimized internal linking, and category-based content organization tailored for search intent.",
        "results": "Achieved significant organic traffic growth, improved affiliate click-through rates, and established a scalable content framework for rapid category expansion.",
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "MongoDB",
          "Tailwind CSS",
          "Schema Markup",
          "REST API",
          "Vercel"
        ],
        "images": [
          "/assets/Portfolio/bestproductbuy-1.png",
          "/assets/Portfolio/bestproductbuy-2.png"
        ],
        "features": [
          "Product comparison tables",
          "Affiliate link management",
          "SEO-optimized category pages",
          "Buying guides and reviews",
          "Schema-rich snippets",
          "Fast-loading pages",
          "Mobile-first design",
          "Internal linking automation",
          "Scalable content system"
        ],
        "performance": [
          {
            "label": "Organic Traffic Growth",
            "value": "3×",
            "icon": "📈"
          },
          {
            "label": "Affiliate Click-Through Rate",
            "value": "High",
            "icon": "🛒"
          },
          {
            "label": "Page Speed Score",
            "value": "90+",
            "icon": "⚡"
          },
          {
            "label": "Content Expansion",
            "value": "Unlimited",
            "icon": "📚"
          }
        ],
        "testimonial": {
          "text": "BestProductBuy now delivers a fast, trustworthy experience that helps users confidently choose the right products while driving consistent affiliate revenue.",
          "author": "Project Owner",
          "position": "Founder",
          "company": "Best Product Buy"
        }
      }
    ],
    "featuredProjects": [
      {
        "id": 1,
        "title": "BestBikeReview – Affiliate Bike Review Platform",
        "category": "Web Development",
        "type": "featured",
        "status": "live",
        "client": "Best Bike Review",
        "year": "2024",
        "duration": "3 months",
        "teamSize": "3 members",
        "description": "Affiliate-based bicycle review and buying guide platform focused on helping users choose the best bikes and accessories.",
        "detailedDescription": "Built a high-performance affiliate website dedicated to bicycle reviews, comparisons, and buying guides. The platform emphasizes SEO-driven content, fast page loads, structured product data, and conversion-focused layouts to maximize affiliate revenue.",
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "Express.js",
          "emailjs",
          "MongoDB",
          "Tailwind CSS",
          "Schema Markup",
          "REST API",
          "Vercel"
        ],
        "images": [
          "/assets/Portfolio/bestbikereview-1.png",
          "/assets/Portfolio/bestbikereview-2.png",
          "/assets/Portfolio/bestbikereview-3.png"
        ],
        "features": [
          "In-depth bike reviews",
          "Product comparison tables",
          "SEO-optimized buying guides",
          "Category-based navigation",
          "Affiliate link management",
          "Schema-rich snippets",
          "Mobile-first responsive design",
          "Fast-loading pages",
          "Internal linking structure"
        ],
        "performance": [
          {
            "label": "Page Speed Score",
            "value": "90+",
            "icon": "⚡"
          },
          {
            "label": "Organic Traffic Growth",
            "value": "2.5×",
            "icon": "📈"
          },
          {
            "label": "Affiliate Click Rate",
            "value": "High",
            "icon": "🛒"
          },
          {
            "label": "Mobile Optimization",
            "value": "100%",
            "icon": "📱"
          }
        ]
      },
      {
        "id": 2,
        "title": "BestGearBuy – Affiliate Product Discovery Platform",
        "category": "Web Development",
        "type": "featured",
        "status": "live",
        "client": "Best Gear Buy",
        "year": "2024",
        "duration": "3 months",
        "teamSize": "3 members",
        "description": "Affiliate-driven product discovery and buying guide platform focused on electronics, tools, and everyday gear.",
        "detailedDescription": "Developed a performance-focused affiliate website that curates top-rated gear through detailed reviews, comparison tables, and SEO-optimized buying guides. The platform is designed to scale content efficiently while maximizing affiliate conversions.",
        "technologies": [
          "Next.js",
          "React",
          "Node.js",
          "MongoDB",
          "Tailwind CSS",
          "Schema Markup",
          "REST API",
          "Vercel"
        ],
        "images": [
          "/assets/Portfolio/best-gear-buy-1.png",
          "/assets/Portfolio/best-gear-buy-2.png",
          "/assets/Portfolio/best-gear-buy-3.png"
        ],
        "features": [
          "Product comparison tables",
          "Affiliate link optimization",
          "SEO-focused category pages",
          "Buying guides & reviews",
          "Fast-loading pages",
          "Mobile-first responsive design",
          "Schema-rich snippets",
          "Internal linking strategy",
          "Scalable content architecture"
        ],
        "performance": [
          {
            "label": "Page Speed Score",
            "value": "90+",
            "icon": "⚡"
          },
          {
            "label": "Organic Traffic Growth",
            "value": "3×",
            "icon": "📈"
          },
          {
            "label": "Affiliate Click Rate",
            "value": "High",
            "icon": "🛒"
          },
          {
            "label": "Content Scalability",
            "value": "Unlimited",
            "icon": "📚"
          }
        ]
      }
    ],
    "portfolioProjects": [
      {
        "id": 1,
        "title": "Cargo Logistics Company – Corporate Website & Services Platform",
        "category": [
          "WordPress",
          "Web Development",
          "Logistics"
        ],
        "type": "portfolio",
        "status": "live",
        "description": "A professional corporate website designed to present logistics services, cargo solutions, and global freight capabilities for international clients.",
        "technologies": [
          "Next.js",
          "React",
          "EmailJS",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "REST API",
          "C-panel Hosting",
          "SEO Optimization"
        ],
        "image": "/assets/Portfolio/cargo-logistics-1.png",
        "performance": [
          {
            "label": "Page Speed Score",
            "value": "90+"
          },
          {
            "label": "Mobile Responsiveness",
            "value": "100%"
          }
        ]
      },
      {
        "id": 2,
        "title": "A2IT Ltd – Corporate Website & Services Platform showcase",
        "category": [
          "Web Development"
        ],
        "type": "portfolio",
        "status": "live",
        "description": "A professional corporate website showcasing IT services, portfolio projects, and digital solutions for global clients.",
        "technologies": [
          "Next.js",
          "React",
          "emailjs",
          "Tailwind CSS",
          "Node.js",
          "Express.js",
          "REST API",
          "C-panel Hosting",
          "SEO Optimization"
        ],
        "image": "/assets/Portfolio/a2itltd-1.png",
        "performance": [
          {
            "label": "Page Speed Score",
            "value": "90+"
          },
          {
            "label": "Mobile Responsiveness",
            "value": "100%"
          }
        ]
      }
    ]
  }
};

const pricingData = {
  "services": [
    {
      "id": 1,
      "category": "Design & Development",
      "packages": [
        {
          "id": "design-special",
          "name": "Special",
          "price": "$299.00",
          "color": "blue",
          "features": [
            "Custom Website Design",
            "Responsive Layout",
            "5 Page Website",
            "Contact Form",
            "Basic SEO Setup",
            "1 Month Support"
          ]
        },
        {
          "id": "design-plus",
          "name": "Plus",
          "price": "$599.00",
          "color": "blue",
          "features": [
            "Everything in Special",
            "10 Page Website",
            "CMS Integration",
            "Custom Animations",
            "E-commerce Ready",
            "3 Months Support"
          ]
        },
        {
          "id": "design-gold",
          "name": "Gold",
          "price": "$999.00",
          "color": "black",
          "features": [
            "Everything in Plus",
            "15 Page Website",
            "Advanced SEO",
            "Performance Optimization",
            "Custom Admin Panel",
            "6 Months Support"
          ]
        }
      ]
    }
  ]
};

const DesignDevelopment = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [imagesLoaded, setImagesLoaded] = useState({});

  // Stats counter
  const [stats, setStats] = useState({
    projects: 0,
    rating: 0,
    satisfaction: 0,
    support: 24,
  });

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animate stats counter
  useEffect(() => {
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
  }, []);

  // Extract data
  const designDevPackages =
    pricingData.services?.find((s) => s.category === "Design & Development")
      ?.packages || [];

  // Filter projects - Using a subset for demo
  const webProjects = portfolioData.portfolio.portfolioProjects.slice(0, 4) || [];
  const mobileProjects = portfolioData.portfolio.portfolioProjects.slice(4, 8) || [];
  const wordpressProjects = portfolioData.portfolio.portfolioProjects.slice(8, 12) || [];

  // Get 5 featured projects
  const featuredProjects = [
    ...(portfolioData.portfolio.featuredProjects || []),
    ...(portfolioData.portfolio.affiliateProjects || []),
  ]
    .slice(0, 5)
    .map((project) => ({
      ...project,
      metrics: project.performance || [
        { label: "Users", value: "10K+", icon: "👥" },
        { label: "Success Rate", value: "95%", icon: "📈" },
        { label: "Rank", value: "#1", icon: "🏆" },
        { label: "Tech", value: "5+", icon: "⚙️" },
      ],
    }));

  // Group packages into slides
  const getSlidesPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const slidesPerView = getSlidesPerView();
  const groupedPackages = [];
  for (let i = 0; i < designDevPackages.length; i += slidesPerView) {
    groupedPackages.push(designDevPackages.slice(i, i + slidesPerView));
  }

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
      }
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
      }
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
      }
    ],
  };

  const getPackageColor = (pkg, isHover = false) => {
    if (pkg.name === "Special" && isHover) return "from-gray-800 to-blue-900";
    if (pkg.name === "Special") return "from-gray-800 to-black";
    if (pkg.name === "Gold" && isHover) return "from-amber-600 to-yellow-600";
    if (pkg.name === "Gold") return "from-amber-500 to-yellow-500";
    if (isHover) return "from-blue-600 to-indigo-700";
    return "from-blue-500 to-indigo-600";
  };

  const getCardBackground = (pkg) => {
    if (pkg.name === "Special") return "bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200";
    if (pkg.name === "Gold") return "bg-gradient-to-br from-amber-50 via-white to-yellow-50 border-amber-100";
    return "bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-blue-100";
  };

  const getIconForPackage = (pkgName) => {
    switch(pkgName) {
      case "Special": return <FiPackage className="text-2xl" />;
      case "Plus": return <FiStar className="text-2xl" />;
      case "Gold": return <FiAward className="text-2xl" />;
      case "Platinum": return <FiZap className="text-2xl" />;
      case "The Boss": return <FiTarget className="text-2xl" />;
      case "Diamond": return <FiGlobe className="text-2xl" />;
      default: return <FiTrendingUp className="text-2xl" />;
    }
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

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Sample products for store preview
  const products = [
    { 
      id: 1, 
      name: "BestBuyersView",  
      category: "Web Development", 
      rating: 4.9,
      description: "Affiliate-based product review and comparison platform",
      image: "/assets/Portfolio/bestbuyersview-1.png",
      badge: "live",
      price: "$299"
    },
    { 
      id: 2, 
      name: "BestGearBuy", 
      category: "Web Development", 
      rating: 4.8,
      description: "Affiliate-driven product discovery and buying guide platform",
      image: "/assets/Portfolio/best-gear-buy-1.png",
      badge: "Live",
      price: "$499"
    },
    { 
      id: 3, 
      name: "BestBikeReview", 
      category: "Web Development", 
      rating: 4.9,
      description: "Affiliate-based bicycle review and buying guide platform",
      image: "/assets/Portfolio/bestbikereview-1.png",
      badge: "Featured",
      price: "$399"
    },
  ];

  // Handle image loading
  const handleImageLoad = (id) => {
    setImagesLoaded(prev => ({ ...prev, [id]: true }));
  };

  // Auto rotate products with proper cleanup
  useEffect(() => {
    if (products.length > 0) {
      const productInterval = setInterval(() => {
        setCurrentProduct((prev) => (prev + 1) % products.length);
      }, 4000);
      return () => clearInterval(productInterval);
    }
  }, [products.length]);

  // Reset slides when grouping changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [slidesPerView]);

  const ProjectCard = ({ project, index, isWeb = false }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
      >
        {/* Project Image with loading state */}
        <div className="relative h-56 overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-50 to-gray-100">
          {!imgLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={project.image}
            alt={project.title}
            className={`object-cover w-full h-full transition-transform duration-500 ${imgLoaded ? 'group-hover:scale-105' : 'opacity-0'}`}
            onLoad={() => setImgLoaded(true)}
            loading="lazy"
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
    );
  };

  const FeaturedProjectCard = ({ project, index }) => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const mainImage = project.images?.[0] || project.image;

    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative aspect-square overflow-hidden rounded-xl"
      >
        {/* Loading state */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center z-10">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        {/* Project Image */}
        <div className="absolute inset-0">
          {mainImage ? (
            <img
              src={mainImage}
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${imgLoaded ? 'group-hover:scale-105' : 'opacity-0'}`}
              onLoad={() => setImgLoaded(true)}
              loading="lazy"
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

        {/* Info overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 transition-all duration-300 ${imgLoaded ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
          <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
            <div className="text-white">
              <h3 className="text-sm sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">
                {project.title}
              </h3>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-4">
                {[
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
                ].map((metric, idx) => (
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
        </div>

        {/* Hover indicator */}
        <div className={`absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${imgLoaded ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
          <div className="bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs flex items-center">
            <FiEye className="mr-1 text-xs" />
            <span>Hover for details</span>
          </div>
        </div>
      </motion.div>
    );
  };

  const PricingCard = ({ pkg, index }) => {
    return (
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
        {/* Ribbon for Special and Gold Plans */}
        {pkg.name === "Special" && (
          <div className="absolute top-6 -right-10 bg-gradient-to-r from-gray-700 to-gray-900 text-white px-10 py-1 rotate-45 shadow-lg z-10">
            <span className="text-xs sm:text-sm font-bold">STARTER</span>
          </div>
        )}
        {pkg.name === "Gold" && (
          <div className="absolute top-6 -right-10 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-10 py-1 rotate-45 shadow-lg z-10">
            <span className="text-xs sm:text-sm font-bold">POPULAR</span>
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
              <div className="text-white">
                {getIconForPackage(pkg.name)}
              </div>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">{pkg.name}</h3>
            <div className="text-3xl sm:text-4xl font-bold mb-2">
              <span className={pkg.name === "Special" ? "text-gray-900" : pkg.name === "Gold" ? "text-amber-900" : "text-blue-900"}>{pkg.price}</span>
            </div>
            <div className="text-sm sm:text-base text-gray-600">Perfect for {pkg.name === "Special" ? "startups" : pkg.name === "Gold" ? "growing businesses" : "enterprises"}</div>
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
                  pkg.name === "Special" ? "text-gray-700" : pkg.name === "Gold" ? "text-amber-500" : "text-blue-500"
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
                  : pkg.name === "Gold"
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white hover:shadow-xl hover:from-amber-600 hover:to-yellow-600"
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
    );
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Video Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          >
            <div className="relative w-full max-w-4xl mx-4">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute -top-12 right-0 text-white text-2xl p-2 hover:text-blue-500 transition-colors"
              >
                <FiX />
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-xl text-white/80">
                      Design & Development Showcase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main>
        {/* Hero Banner - Using gradient background instead of image to prevent blinking */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900">
          {/* Gradient Overlay */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-overlay blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-overlay blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-overlay blur-3xl"></div>
          </div>

          {/* Geometric Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-400/30 rotate-45 animate-pulse"></div>
            <div className="absolute bottom-40 left-32 w-40 h-40 border border-cyan-400/20 rotate-12"></div>
          </div>

          {/* Content */}
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
                  PREMIUM DIGITAL SOLUTIONS
                </motion.div>
                
                <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-white">
                  Design &{" "}
                  <span className="relative">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-white">
                      Development
                    </span>
                    <motion.div
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
                    />
                  </span>{" "}
                  Excellence
                </h1>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl text-gray-100 max-w-2xl mb-8 leading-relaxed"
                >
                  Professional web, mobile, and WordPress solutions that transform your digital presence and drive business growth.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-4"
                >
                  <Link
                    href="/contact"
                    className="group relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:shadow-2xl hover:shadow-blue-300 transition-all duration-300 text-sm sm:text-base"
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
                  
                  <button
                    onClick={() => setVideoModalOpen(true)}
                    className="group inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                  >
                    <FiPlay className="mr-2" />
                    Watch Showcase
                  </button>
                </motion.div>
                
                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-12 grid grid-cols-3 gap-4 sm:gap-6"
                >
                  {[
                    { value: `${stats.projects}+`, label: "Projects", color: "text-blue-300" },
                    { value: `${stats.rating}⭐`, label: "Avg. Rating", color: "text-cyan-300" },
                    { value: `${stats.satisfaction}%`, label: "Satisfaction", color: "text-indigo-300" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                      <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Project Preview - Simplified without images to prevent blinking */}
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-6">Featured Projects</h3>
                    
                    {/* Project Cards without images */}
                    <div className="space-y-4">
                      {products.map((product, idx) => (
                        <div
                          key={product.id}
                          className={`bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-all duration-300 ${currentProduct === idx ? 'border-blue-400 scale-105' : ''}`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-white">{product.name}</span>
                            <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs rounded-full">
                              {product.badge}
                            </span>
                          </div>
                          <p className="text-sm text-gray-200">{product.description}</p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-blue-300 font-bold">{product.price}</span>
                            <div className="flex items-center">
                              <FiStar className="text-amber-400 text-sm fill-current" />
                              <span className="text-sm text-white ml-1">{product.rating}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Indicator dots */}
                    <div className="flex justify-center space-x-2 mt-6">
                      {products.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentProduct(idx)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentProduct === idx ? 'bg-blue-400 w-6' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the sections remain the same as your previous version */}
        {/* Featured Projects Section */}
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

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
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
                Professional websites and web applications built with modern technologies
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

            {/* Projects Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Web <span className="text-blue-600">Projects</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {webProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isWeb={true}
                  />
                ))}
              </div>
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
                Native and cross-platform mobile applications for iOS and Android
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

            {/* Projects Grid */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Mobile <span className="text-indigo-600">Projects</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {mobileProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
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

            {/* Projects Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                WordPress <span className="text-green-600">Projects</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {wordpressProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>

            {/* Design & Development Pricing */}
            <div className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
                  <FiTag className="text-2xl text-white" />
                </div>
                <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
                  DESIGN & DEVELOPMENT
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
                        <PricingCard key={pkg.id} pkg={pkg} index={index} />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Slide Indicators - Below Cards */}
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
              </div>
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

        {/* Final CTA */}
        <section className="py-20 px-6 sm:px-12 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-white"
            >
              Ready to Start Your{" "}
              <span className="text-blue-300">Digital Journey</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
            >
              Join thousands of successful businesses with our proven design and development solutions.
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
      </main>
    </div>
  );
};

export default DesignDevelopment;