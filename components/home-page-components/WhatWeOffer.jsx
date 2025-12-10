"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Smartphone,
  ShoppingCart,
  Database,
  TrendingUp,
  Share2,
  Cloud,
  Store,
  Tag,
  Layout,
} from "lucide-react";
import { useRouter } from "next/navigation";

const WhatWeOffer = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef(null);

  // Services data with direct paths
  const services = [
    {
      title: "Amazon",
      icon: <ShoppingCart className="w-8 h-8" />,
      description:
        "End-to-end Amazon store solutions including product listing, optimization, and sales growth strategies.",
      features: ["Product Listing", "SEO Optimization", "Ad Campaigns"],
      color: "bg-[#ff9900]", // Amazon's signature orange
      path: "/services/amazon", // Matches your router path
    },
    {
      title: "Shopify Development",
      icon: <Store className="w-8 h-8" />,
      description:
        "Custom Shopify stores with seamless design, secure checkout, and optimized performance to boost sales.",
      features: ["Theme Customization", "App Integration", "Payment Gateway Setup"],
      color: "bg-[#96bf48]", // Shopify green
      path: "/services/shopify", // Matches your router path
    },
    {
      title: "Web Designing & Development",
      icon: <Code className="w-8 h-8" />,
      description:
        "Custom websites with modern design and robust functionality tailored to your business needs.",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration"],
      color: "bg-[#0066ff]",
      path: "/services/design-development", // Matches your router path
    },
    {
      title: "eBay Store Management",
      icon: <Tag className="w-8 h-8" />,
      description:
        "Professional eBay store setup and management with optimized product listings and sales strategies to maximize revenue.",
      features: ["Store Setup", "Product Listing Optimization", "Promoted Listings"],
      color: "bg-[#e53238]", // eBay red
      path: "/services/e-bay", // Matches your router path
    },
    {
      title: "Mobile App Designing & Development",
      icon: <Smartphone className="w-8 h-8" />,
      description:
        "High-performance iOS/Android apps built for engagement and scalability.",
      features: ["Cross-Platform", "Native Development", "User-Centric Design"],
      color: "bg-[#00a0ff]",
      path: "/services/mobile-app", // Matches your router path
    },
    {
      title: "eCommerce Development Solutions",
      icon: <ShoppingCart className="w-8 h-8" />,
      description:
        "Complete online stores with secure payment gateways and inventory management.",
      features: ["Shopify", "WooCommerce", "Custom Solutions"],
      color: "bg-[#00f0ff]",
      path: "/services/e-commerce", // Matches your router path
    },
    {
      title: "ERP System Development",
      icon: <Database className="w-8 h-8" />,
      description:
        "Custom enterprise systems to streamline your business operations.",
      features: ["Inventory Management", "CRM Integration", "Analytics"],
      color: "bg-[#0066ff]",
      path: "/services/erp", // Matches your router path
    },
    {
      title: "SEO / SEM / PPC",
      icon: <TrendingUp className="w-8 h-8" />,
      description:
        "Comprehensive strategies to boost your online visibility and conversions.",
      features: ["Search Optimization", "Pay-Per-Click", "Conversion Tracking"],
      color: "bg-[#00c0ff]",
      path: "/services/seo", // Matches your router path
    },
    {
      title: "UI/UX Design",
      icon: <Layout className="w-8 h-8" />,
      description:
        "Crafting intuitive and engaging user interfaces with seamless experiences that delight your customers.",
      features: ["User Research", "Wireframing & Prototyping", "Interactive Design"],
      color: "bg-[#8e44ad]", // Creative purple
      path: "/services/design-development", // Matches your router path
    },

    {
      title: "Social Media Marketing",
      icon: <Share2 className="w-8 h-8" />,
      description:
        "Engaging social strategies to grow your audience and brand presence.",
      features: ["Content Strategy", "Community Management", "Campaigns"],
      color: "bg-[#0066ff]",
      path: "/services/social-media", // Matches your router path
    },
    {
      title: "Server and Hosting Services",
      icon: <Cloud className="w-8 h-8" />,
      description:
        "Reliable hosting and server solutions for your digital infrastructure.",
      features: ["Dedicated Servers", "Cloud Hosting", "24/7 Support"],
      color: "bg-[#00f0ff]",
      path: "/services/server-hosting", // Matches your router path
    },
  ];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isAutoPlaying, services.length]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    startAutoPlay();
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setIsAutoPlaying(false);
    startAutoPlay();
  };

  const getVisibleServices = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % services.length;
      result.push(services[index]);
    }
    return result;
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
      top: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      top: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      position: "absolute",
      top: 0,
    }),
  };

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#0a0a12] to-[#12121a] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0066ff] filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00a0ff] to-[#0066ff] filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-[#00f0ff]/10 p-4 rounded-full mb-6">
            <Code className="w-8 h-8 text-[#00f0ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0ff] mb-4">
            Our <span className="text-[#00f0ff]">Services</span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-[#00f0ff] via-[#0066ff] to-transparent rounded-full mx-auto w-32 mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-[#b0b0ff] text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business to
            new heights
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 shadow-xl rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="grid md:grid-cols-3 gap-8 px-12 min-h-[500px] relative">
            <AnimatePresence custom={direction} initial={false}>
              {getVisibleServices().map((service, index) => (
                <motion.div
                 key={`${service.title}-${currentIndex}-${index}`}
  custom={direction}
  variants={variants}
  initial="enter"
  animate="center"
  exit="exit"
  transition={{
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
    position: { duration: 0 },
  }}
  className={`relative group overflow-hidden rounded-xl shadow-lg ${
    index === 1 ? "md:scale-105 z-10" : "md:scale-95"
  } h-full`}
  onMouseEnter={() => setIsAutoPlaying(false)}
  onMouseLeave={() => setIsAutoPlaying(true)}
>
  <div
    className={`absolute inset-0 ${service.color} opacity-90`}
  ></div>
  <div className="relative z-10 p-8 flex flex-col h-full">
    <div className="mb-6">
      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
        {React.cloneElement(service.icon, {
          className: "w-8 h-8 text-white",
        })}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">
        {service.title}
      </h3>
      <p className="text-white/80 mb-2">
        {service.description}
      </p>
    </div>

    <div className="mt-auto">
      <div className="border-t border-white/20 pt-4">
        <h4 className="text-sm font-semibold text-white/70 mb-3 uppercase tracking-wider">
          Key Features
        </h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <svg
                className="w-4 h-4 text-white mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span className="text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>

                  {/* Fixed Learn More overlay */}
                  <div 
  onClick={() => router.push(service.path)}
  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 cursor-pointer z-20"
  style={{ pointerEvents: 'auto' }}
>
  <div className="w-full py-3 bg-white text-[#0a0a12] font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center">
    Learn More
  </div>
</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 shadow-xl rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#00f0ff] scale-125"
                    : "bg-[#b0b0ff] hover:bg-[#00f0ff]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
