"use client";
import React, { useState, useEffect, useRef } from "react";
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
  FiBarChart2,
  FiClock,
  FiBriefcase,
  FiTag,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";

// Create separate icons for tab categories
const FiWeb = FiCpu;
const FiMobile = FiSmartphone;
const FiWordpress = FiGlobe;

// Static data extracted from the JSON
const webDevelopmentProjects = [
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
  },
  {
    "id": 3,
    "title": "Affiliate Performance & Content Analytics Dashboard",
    "category": "Web Development",
    "type": "featured",
    "status": "live",
    "client": "Digital Media Network",
    "year": "2024",
    "duration": "4 months",
    "teamSize": "5 members",
    "description": "A centralized analytics dashboard to track affiliate performance, content growth, and traffic insights across multiple review websites.",
    "detailedDescription": "Designed and developed a custom analytics dashboard to monitor affiliate clicks, conversions, traffic sources, and content performance across multiple niche review platforms. The system provides real-time insights, trend analysis, and exportable reports to support data-driven decision-making.",
    "technologies": [
      "Next.js",
      "React",
      "Chart.js",
      "Node.js",
      "PostgreSQL",
      "REST API",
      "Redis",
      "Docker"
    ],
    "images": [
      "/assets/Portfolio/affiliate-analytics-1.png",
      "/assets/Portfolio/affiliate-analytics-2.png",
      "/assets/Portfolio/affiliate-analytics-3.png"
    ],
    "features": [
      "Real-time traffic monitoring",
      "Affiliate click & conversion tracking",
      "Content performance analytics",
      "Custom date-based reports",
      "Multi-site data aggregation",
      "Role-based access control",
      "CSV & PDF export",
      "Performance alerts"
    ],
    "performance": [
      {
        "label": "Reporting Speed Improvement",
        "value": "70%"
      },
      {
        "label": "Data Accuracy",
        "value": "99.9%"
      },
      {
        "label": "Active User Adoption",
        "value": "90%"
      },
      {
        "label": "Decision-Making Efficiency",
        "value": "60% faster"
      }
    ]
  },
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
  }
];

const wordpressProjects = [
  {
    "id": 1,
    "title": "Cargo Logistics Company – Corporate Website & Services Platform",
    "category": ["WordPress", "Web Development", "Logistics"],
    "type": "portfolio",
    "status": "live",
    "description": "A professional corporate website designed to present logistics services, cargo solutions, and global freight capabilities for international clients.",
    "technologies": ["WordPress", "C-panel Hosting", "SEO Optimization"],
    "image": "/assets/Portfolio/cargo-logistics-1.png",
    "performance": [
      { "label": "Page Speed Score", "value": "90+" },
      { "label": "Mobile Responsiveness", "value": "100%" }
    ]
  },
  {
    "id": 4,
    "title": "JuteCraftify – Sustainable Jute E-commerce Platform",
    "category": ["E-commerce", "WordPress"],
    "type": "portfolio",
    "status": "live",
    "description": "A modern e-commerce platform dedicated to promoting sustainable jute products worldwide, featuring secure payments, streamlined inventory management, and export-ready workflows.",
    "technologies": ["WordPress", "WooCommerce", "SEO Optimization"],
    "image": "/assets/Portfolio/jute-1.avif",
    "performance": [
      { "label": "International Customer Growth", "value": "120%" },
      { "label": "Conversion Rate Increase", "value": "30%" }
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
];

const mobileProjects = [
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
  }
];

// Static pricing data (you can update this as needed)
const pricingData = {
  "services": [
    {
      "id": 1,
      "category": "Design & Development",
      "packages": [
        {
          "id": "special",
          "name": "Special",
          "price": "$499",
          "color": "black",
          "features": [
            "Basic Website (Up to 5 pages)",
            "Responsive Design",
            "Contact Form",
            "Basic SEO",
            "1 Month Support",
            "Hosting Setup"
          ]
        },
        {
          "id": "plus",
          "name": "Plus",
          "price": "$899",
          "color": "blue",
          "features": [
            "Everything in Special",
            "Up to 10 pages",
            "Custom Design",
            "CMS Integration",
            "Advanced SEO",
            "3 Months Support"
          ]
        },
        {
          "id": "gold",
          "name": "Gold",
          "price": "$1,499",
          "color": "blue",
          "features": [
            "Everything in Plus",
            "E-commerce Functionality",
            "Payment Gateway",
            "User Authentication",
            "Performance Optimization",
            "6 Months Support"
          ]
        },
        {
          "id": "platinum",
          "name": "Platinum",
          "price": "$2,499",
          "color": "blue",
          "features": [
            "Everything in Gold",
            "Custom Web Application",
            "Database Design",
            "API Integration",
            "Advanced Analytics",
            "1 Year Support"
          ]
        },
        {
          "id": "boss",
          "name": "The Boss",
          "price": "$3,999",
          "color": "blue",
          "features": [
            "Everything in Platinum",
            "Enterprise Solution",
            "Scalable Architecture",
            "Custom Modules",
            "Dedicated Support",
            "Priority Maintenance"
          ]
        },
        {
          "id": "diamond",
          "name": "Diamond",
          "price": "$5,999",
          "color": "blue",
          "features": [
            "Everything in The Boss",
            "Complete Custom Solution",
            "Multiple Integrations",
            "AI/ML Features",
            "24/7 Support",
            "White Label"
          ]
        }
      ]
    }
  ]
};

// Static stats data
const statsData = [
  { 
    id: 1, 
    value: 5, 
    label: 'Years', 
    sublabel: 'Of combined experience in software development',
    icon: <FiClock />,
    duration: 2.5,
    suffix: '+'
  },
  { 
    id: 2, 
    value: 100, 
    label: 'Clients', 
    sublabel: 'Worldwide satisfied clients',
    icon: <FiUsers />,
    duration: 2.5,
    suffix: '+'
  },
  { 
    id: 3, 
    value: 200, 
    label: 'Projects', 
    sublabel: 'Successfully delivered products',
    icon: <FiBriefcase />,
    duration: 3,
    suffix: '+'
  },
  { 
    id: 4, 
    value: 4.9, 
    label: 'Rating', 
    sublabel: 'Average client satisfaction',
    icon: <FiStar />,
    duration: 2,
    decimals: 1,
    suffix: '★'
  },
  { 
    id: 5, 
    value: 100, 
    label: 'Success', 
    sublabel: 'Project delivery rate',
    icon: <FiCheckCircle />,
    duration: 2.5,
    suffix: '%'
  }
];

const DesignDevelopmentPage = () => {
  // UI States
  const [activeTab, setActiveTab] = useState("web");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [statsVisible, setStatsVisible] = useState(false);
  const [currentBannerCard, setCurrentBannerCard] = useState(0);
  
  // Extract design & development packages from pricing data
  const designDevelopmentPackages = pricingData.services.find(s => s.category === "Design & Development")?.packages || [];
  
  // Get current projects based on active tab
  const getCurrentProjects = () => {
    switch(activeTab) {
      case "web": return webDevelopmentProjects;
      case "mobile": return mobileProjects;
      case "wordpress": return wordpressProjects;
      default: return [];
    }
  };
  
  const currentProjects = getCurrentProjects();
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Banner card rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Stats intersection observer - SIMPLIFIED FIX
  useEffect(() => {
    // Set stats visible after component mounts
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Get slides per view based on window width
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
  
  // Group packages into slides
  const groupedPackages = [];
  for (let i = 0; i < designDevelopmentPackages.length; i += slidesPerView) {
    groupedPackages.push(designDevelopmentPackages.slice(i, i + slidesPerView));
  }
  
  // Group projects into slides
  const groupProjectsForSlider = (projects) => {
    const groups = [];
    for (let i = 0; i < projects.length; i += projectsPerView) {
      groups.push(projects.slice(i, i + projectsPerView));
    }
    return groups.length > 0 ? groups : [[]];
  };
  
  const groupedProjects = groupProjectsForSlider(currentProjects);
  
  // Reset slides when window resizes
  useEffect(() => {
    setCurrentProjectSlide(0);
  }, [projectsPerView]);
  
  // Slider navigation functions
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
  
  const nextProjectSlide = () => {
    if (groupedProjects.length === 0) return;
    setCurrentProjectSlide((prev) => (prev + 1) % groupedProjects.length);
  };
  
  const prevProjectSlide = () => {
    if (groupedProjects.length === 0) return;
    setCurrentProjectSlide((prev) => (prev - 1 + groupedProjects.length) % groupedProjects.length);
  };
  
  const goToProjectSlide = (index) => {
    setCurrentProjectSlide(index);
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
    { id: 'web', label: 'Web Development', icon: <FiWeb />, color: 'from-blue-500 to-indigo-600' },
    { id: 'mobile', label: 'Mobile Apps', icon: <FiMobile />, color: 'from-green-500 to-emerald-600' },
    { id: 'wordpress', label: 'WordPress', icon: <FiWordpress />, color: 'from-blue-400 to-cyan-600' }
  ];
  
  // Banner cards for swapping
  const bannerCards = [
    { 
      id: 1, 
      title: "Custom Web Solutions", 
      description: "Tailored web applications built with modern technologies",
      icon: <FiWeb className="text-4xl" />,
      color: "from-blue-500 to-indigo-600"
    },
    { 
      id: 2, 
      title: "Mobile App Development", 
      description: "Native and cross-platform mobile applications",
      icon: <FiMobile className="text-4xl" />,
      color: "from-green-500 to-emerald-600"
    },
    { 
      id: 3, 
      title: "WordPress Excellence", 
      description: "Custom WordPress themes and e-commerce solutions",
      icon: <FiWordpress className="text-4xl" />,
      color: "from-blue-400 to-cyan-600"
    },
    { 
      id: 4, 
      title: "UI/UX Design", 
      description: "User-centered design for exceptional experiences",
      icon: <FiPenTool className="text-4xl" />,
      color: "from-purple-500 to-pink-600"
    }
  ];
  
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Hero Section with Swapping Cards Banner */}
      <section  className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/serviceImg/ContactUs.png')] bg-cover bg-center"></div>
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
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium mb-6 rounded-full text-sm shadow-lg shadow-blue-500/30 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                PREMIUM DESIGN & DEVELOPMENT
              </motion.div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-900 via-indigo-600 to-purple-900 bg-clip-text text-transparent">
                  Transform Your Vision
                </span>
                <br />
                <span className="text-gray-900">Into Digital Reality</span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-white max-w-2xl mb-8 leading-relaxed"
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
                  className="group relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center">
                    <FiCode className="mr-2 group-hover:rotate-12 transition-transform" />
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
                  className="group inline-flex items-center justify-center border-2 border-blue-600 text-black hover:bg-blue-50 font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                >
                  <span className="group-hover:scale-105 transition-transform duration-300">
                    Explore Our Work
                  </span>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Swapping Banner Cards (Like About Page) */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Top Left Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={bannerCards[0].id + currentBannerCard}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${bannerCards[(currentBannerCard) % 4].color} shadow-2xl`}
                  >
                    <div className="text-white mb-4">
                      {bannerCards[(currentBannerCard) % 4].icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {bannerCards[(currentBannerCard) % 4].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {bannerCards[(currentBannerCard) % 4].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                {/* Top Right Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={bannerCards[1].id + currentBannerCard + 1}
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${bannerCards[(currentBannerCard + 1) % 4].color} shadow-2xl`}
                  >
                    <div className="text-white mb-4">
                      {bannerCards[(currentBannerCard + 1) % 4].icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {bannerCards[(currentBannerCard + 1) % 4].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {bannerCards[(currentBannerCard + 1) % 4].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                {/* Bottom Left Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={bannerCards[2].id + currentBannerCard + 2}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${bannerCards[(currentBannerCard + 2) % 4].color} shadow-2xl`}
                  >
                    <div className="text-white mb-4">
                      {bannerCards[(currentBannerCard + 2) % 4].icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {bannerCards[(currentBannerCard + 2) % 4].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {bannerCards[(currentBannerCard + 2) % 4].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
                
                {/* Bottom Right Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={bannerCards[3].id + currentBannerCard + 3}
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`p-6 rounded-2xl bg-gradient-to-br ${bannerCards[(currentBannerCard + 3) % 4].color} shadow-2xl`}
                  >
                    <div className="text-white mb-4">
                      {bannerCards[(currentBannerCard + 3) % 4].icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {bannerCards[(currentBannerCard + 3) % 4].title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {bannerCards[(currentBannerCard + 3) % 4].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Banner Card Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBannerCard(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentBannerCard % 4 === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section - FIXED */}
      <section className="py-16 px-6 sm:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
              <FiTrendingUp className="text-2xl text-white" />
            </div>
            <span className="text-blue-600 font-semibold tracking-widest text-sm block mb-3">
              OUR IMPACT
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              By The{" "}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Numbers
                </span>
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400"
                />
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Years of excellence reflected in our achievements
            </p>
          </motion.div>
          
          {/* Stats Grid - USING STATIC DATA */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {statsData.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl mb-4">
                  <div className="text-white text-xl">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
                  {/* Always show the countup animation when component is visible */}
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={stat.duration}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix || ''}
                  />
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section with Slider */}
      <section id="portfolio" className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
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
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveTab(tab.id);
                  setCurrentProjectSlide(0);
                }}
                className={`flex items-center px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Projects Slider (Like E-commerce Page) */}
          {currentProjects.length > 0 ? (
            <>
              {/* Slider Navigation - Arrows at Top */}
              {groupedProjects.length > 1 && (
                <div className="flex justify-end items-center gap-4 mb-8">
                  <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevProjectSlide}
                    className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                  >
                    <FiArrowLeft className="text-xl" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextProjectSlide}
                    className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
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
                        key={project.id || index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                      >
                        {/* Project Image */}
                        <div className="relative h-48 overflow-hidden flex-shrink-0">
                          {project.image || (project.images && project.images[0]) ? (
                            <Image
                              src={project.image || project.images[0]}
                              alt={project.title || 'Project Image'}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              unoptimized
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            />
                          ) : (
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                              <div className={`text-4xl ${
                                activeTab === 'web' ? 'text-blue-600' :
                                activeTab === 'mobile' ? 'text-green-600' :
                                'text-blue-400'
                              }`}>
                                {tabs.find(t => t.id === activeTab)?.icon}
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                          
                          {/* Status Badge */}
                          <div className="absolute top-3 left-3 z-20">
                            <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs rounded-full">
                              <FiCheckCircle className="mr-1 text-xs" />
                              {project.status || 'Live'}
                            </span>
                          </div>
                          
                          {/* Category Badges */}
                          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                            {(Array.isArray(project.category) ? project.category : [project.category]).slice(0, 2).map((cat, idx) => (
                              <span key={idx} className="px-2 py-1 bg-white/90 backdrop-blur-sm text-gray-800 text-xs rounded">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Project Content */}
                        <div className="p-5 flex flex-col flex-grow">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {project.title || 'Project Title'}
                          </h3>
                          
                          <p className="text-sm text-gray-600 mb-4 mt-2 line-clamp-2">
                            {project.description || 'Project description not available'}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {(Array.isArray(project.technologies) ? project.technologies : [project.technologies]).slice(0, 3).map((tech, idx) => (
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
                        
                        {/* Hover Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Slide Indicators - Below Cards */}
              {groupedProjects.length > 1 && (
                <div className="flex justify-center items-center mt-8">
                  <div className="flex space-x-3">
                    {groupedProjects.map((_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => goToProjectSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentProjectSlide === index 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 w-8' 
                            : 'bg-gray-300 hover:bg-gray-400 w-2'
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
                  <span className="mr-2">View All {tabs.find(t => t.id === activeTab)?.label} Projects</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </>
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
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
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
                    className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                  >
                    <FiArrowLeft className="text-xl" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextSlide}
                    className="p-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
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
                        {/* Ribbon for Gold Plan */}
                        {pkg.name === "Gold" && (
                          <div className="absolute top-6 -right-12 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-12 py-1.5 rotate-45 shadow-lg z-10">
                            <span className="text-xs font-bold tracking-wide">POPULAR</span>
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
                              <span className={pkg.name === "Special" ? "text-gray-900" : "text-blue-900"}>
                                {pkg.price}
                              </span>
                              <span className="text-gray-500 text-base sm:text-lg">/one-time</span>
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
                                  : "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-xl"
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
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index 
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-700 w-8' 
                            : 'bg-gray-300 hover:bg-gray-400 w-2'
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
              <Link href="/contact" className="inline-flex items-center mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300">
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
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-lg shadow-blue-500/30">
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
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white'
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
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