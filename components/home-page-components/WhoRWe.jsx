"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaChevronDown, FaChevronUp, FaStar, FaRocket } from "react-icons/fa";

const WhoRWe = () => {
  const [isActive, setIsActive] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Services data for the circular reveal
  const services = [
    { 
      name: 'Development', 
      icon: '💻', 
      angle: 0,
      description: 'Custom software solutions tailored to your needs',
      color: 'from-blue-500 to-cyan-400'
    },
    { 
      name: 'E-Commerce', 
      icon: '🛒', 
      angle: 45,
      description: 'Complete online store solutions',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Amazon', 
      icon: '📦', 
      angle: 90,
      description: 'Amazon store setup and management',
      color: 'from-amber-500 to-orange-500'
    },
    { 
      name: 'Shopify', 
      icon: '🏪', 
      angle: 135,
      description: 'Shopify store development',
      color: 'from-emerald-500 to-green-400'
    },
    { 
      name: 'ERP System', 
      icon: '📊', 
      angle: 180,
      description: 'Enterprise resource planning systems',
      color: 'from-indigo-500 to-blue-400'
    },
    { 
      name: 'SEO / SEM', 
      icon: '🔍', 
      angle: 225,
      description: 'Search engine optimization & marketing',
      color: 'from-teal-500 to-cyan-400'
    },
    { 
      name: 'Hosting', 
      icon: '☁️', 
      angle: 270,
      description: 'Reliable server and hosting services',
      color: 'from-red-500 to-orange-400'
    },
    { 
      name: 'E-bay', 
      icon: '📈', 
      angle: 315,
      description: 'E-bay store management',
      color: 'from-blue-600 to-purple-400'
    }
  ];

  const stats = [
    {
      value: "5+",
      label: "Years",
      description: "Of combined experience",
    },
    {
      value: "100+",
      label: "Clients",
      description: "Worldwide satisfaction",
    },
    {
      value: "200+",
      label: "Projects",
      description: "Successfully delivered",
    },
  ];

  // Floating animation for particles
  const floatingVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative py-4 px-4 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Subtle Background Image */}
      <div 
        className="absolute inset-0 opacity-10 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'overlay',
        }}
      />
      
      {/* Optional: Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-blue-50/80 z-0" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden z-1">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-200 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 relative z-10">
        
        {/* Left Column - A2IT Description */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-gray-800 w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              What is <span className="text-blue-600">A2IT</span>?
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full w-32"
              initial={{ width: 0 }}
              whileInView={{ width: "128px" }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                A2IT
              </span>, the passion for business, is a service provider of business-minded, 
              well-focused young IT professionals.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide quality and expedient services and are positioned to
              appreciate our customer's needs emphatically, especially when it
              comes to project launching.
            </p>

                      {/* For Mobile & Tablet: Smaller circular layout */}
          <div className="block lg:hidden relative w-full h-[320px] sm:h-[100px]">
            
            {/* Floating Stars Around */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`star-mobile-${i}`}
                className="absolute text-yellow-400"
                style={{
                  left: `${25 + i * 15}%`,
                  top: `${15 + i * 15}%`,
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <FaStar size={10} />
              </motion.div>
            ))}

            {/* Animated Orbit Ring */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-blue-200 rounded-full"
              style={{ width: "120px", height: "120px" }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Services Cards with Staggered Animation */}
            {services.map((service, index) => {
              const radius = isActive ? 140 : 0; // Smaller radius for mobile
              const angle = (service.angle * Math.PI) / 180;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={service.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0,
                    x: isActive ? x : 0,
                    y: isActive ? y : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: isActive ? index * 0.05 : 0,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                  whileHover={{ 
                    scale: 1.15,
                    transition: { 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300 
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setHoveredCard(hoveredCard === index ? null : index)}
                >
                  <div className="relative group">
                    {/* Animated Card Container */}
                    <motion.div
                      className={`bg-gradient-to-br ${service.color} p-1 rounded-xl shadow-xl`}
                      animate={{
                        boxShadow: hoveredCard === index 
                          ? "0 20px 40px -12px rgba(0, 0, 0, 0.25)" 
                          : "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="bg-white rounded-lg p-3 flex flex-col items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
                        <motion.span 
                          className="text-2xl sm:text-3xl mb-1 sm:mb-2"
                          animate={{
                            scale: hoveredCard === index ? [1, 1.2, 1] : 1,
                            rotate: hoveredCard === index ? [0, 360] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {service.icon}
                        </motion.span>
                        <span className="font-bold text-gray-800 text-xs sm:text-sm text-center">
                          {service.name}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Tooltip on Tap/Hover */}
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          className="absolute -top-24 sm:-top-28 left-1/2 transform -translate-x-1/2 z-40"
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-3 sm:p-4 rounded-xl shadow-2xl min-w-40 sm:min-w-48">
                            <div className="flex items-center gap-2 mb-1 sm:mb-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                              <h4 className="font-bold text-xs sm:text-sm">{service.name}</h4>
                            </div>
                            <p className="text-xs text-gray-300">{service.description}</p>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-800" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}

            {/* Center Logo for Mobile */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
              onClick={() => setIsActive(!isActive)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={floatingVariants.float}
            >
              <div className="relative">
                {/* Pulsing Rings */}
                <motion.div
                  className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-blue-300"
                  animate={{
                    scale: isActive ? [1, 1.3, 1] : 1,
                    opacity: isActive ? [0.3, 0.6, 0.3] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -inset-6 sm:-inset-8 rounded-full border border-blue-200"
                  animate={{
                    scale: isActive ? [1, 1.5, 1] : 1,
                    opacity: isActive ? [0.2, 0.4, 0.2] : 0,
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />

                {/* Logo Container */}
                <motion.div
                  className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-2xl p-1.5 sm:p-2 shadow-2xl"
                  animate={{
                    boxShadow: isActive 
                      ? "0 0 40px rgba(59, 130, 246, 0.5), 0 0 80px rgba(59, 130, 246, 0.3)" 
                      : "0 10px 40px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44">
                    <motion.div 
                      className="text-4xl sm:text-5xl mb-2 sm:mb-4"
                      animate={{ 
                        rotate: isActive ? 360 : 0,
                        y: isActive ? [0, -8, 0] : 0
                      }}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        y: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <FaRocket className="text-blue-600" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      A2IT
                    </motion.h3>
                    <motion.h4 
                      className="text-sm sm:text-lg font-semibold text-gray-600 mt-1"
                      animate={{
                        opacity: isActive ? [1, 0.7, 1] : 1,
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Limited
                    </motion.h4>
                    <motion.p 
                      className="text-xs text-gray-500 mt-2 sm:mt-3 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {isActive ? "✨ Services Active!" : "👆 Tap to Show Services"}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

            {/* Stats Cards with Staggered Animation */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-5 rounded-xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    borderColor: "#3b82f6",
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                  }}
                >
                  <motion.h3 
                    className="text-blue-600 text-2xl md:text-3xl font-bold"
                    animate={floatingVariants.float}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-gray-800 text-lg font-semibold mt-1">
                    {stat.label}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">{stat.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Social Media Links with Hover Effects */}
            <motion.div 
              className="flex space-x-4 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/A2ITLLC", color: "blue" },
                { icon: FaInstagram, href: "#", color: "pink" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/a2itlimited/", color: "blue" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-sm bg-gradient-to-br ${
                    social.color === 'blue' 
                      ? 'from-blue-600 to-blue-400 hover:from-blue-700 hover:to-cyan-500' 
                      : 'from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500'
                  } text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4,
                    rotate: [0, -5, 5, 0]
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                >
                  <social.icon size={14} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Circular Services Reveal (Same for all devices) */}
        <div className="lg:w-1/2 flex flex-col items-center justify-center relative w-full">
          {/* Desktop View - Enhanced Circular Layout */}
          <div className="hidden lg:block relative w-full max-w-lg h-[500px]">
            
            {/* Floating Stars Around */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute text-yellow-400"
                style={{
                  left: `${30 + i * 10}%`,
                  top: `${20 + i * 10}%`,
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <FaStar size={12} />
              </motion.div>
            ))}

            {/* Animated Orbit Ring */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed border-blue-200 rounded-full"
              style={{ width: "160px", height: "160px" }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Services Cards with Staggered Animation */}
            {services.map((service, index) => {
              const radius = 180;
              const angle = (service.angle * Math.PI) / 180;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <motion.div
                  key={service.name}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0,
                    x: isActive ? x : 0,
                    y: isActive ? y : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: isActive ? index * 0.05 : 0,
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotateY: 180,
                    transition: { 
                      duration: 0.4,
                      type: "spring",
                      stiffness: 300 
                    }
                  }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <div className="relative group">
                    {/* Animated Card Container */}
                    <motion.div
                      className={`bg-gradient-to-br ${service.color} p-1.5 rounded-2xl shadow-2xl`}
                      animate={{
                        boxShadow: hoveredCard === index 
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                          : "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="bg-white rounded-xl p-5 flex flex-col items-center justify-center w-28 h-28">
                        <motion.span 
                          className="text-3xl mb-2"
                          animate={{
                            scale: hoveredCard === index ? [1, 1.3, 1] : 1,
                            rotate: hoveredCard === index ? [0, 360] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          {service.icon}
                        </motion.span>
                        <span className="font-bold text-gray-800 text-sm text-center">
                          {service.name}
                        </span>
                      </div>
                    </motion.div>
                    
                    {/* Enhanced Tooltip on Hover */}
                    <AnimatePresence>
                      {hoveredCard === index && (
                        <motion.div
                          className="absolute -top-28 left-1/2 transform -translate-x-1/2 z-40"
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white p-4 rounded-xl shadow-2xl min-w-48">
                            <div className="flex items-center gap-2 mb-2">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                              <h4 className="font-bold text-sm">{service.name}</h4>
                            </div>
                            <p className="text-xs text-gray-300">{service.description}</p>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-gray-800" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}

            {/* Enhanced Center Logo */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer z-30"
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
              onClick={() => setIsActive(!isActive)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={floatingVariants.float}
            >
              <div className="relative">
                {/* Pulsing Rings */}
                <motion.div
                  className="absolute -inset-6 rounded-full border-2 border-blue-300"
                  animate={{
                    scale: isActive ? [1, 1.3, 1] : 1,
                    opacity: isActive ? [0.3, 0.6, 0.3] : 0,
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -inset-8 rounded-full border border-blue-200"
                  animate={{
                    scale: isActive ? [1, 1.5, 1] : 1,
                    opacity: isActive ? [0.2, 0.4, 0.2] : 0,
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                />

                {/* Logo Container */}
                <motion.div
                  className="relative bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 rounded-2xl p-2 shadow-2xl"
                  animate={{
                    boxShadow: isActive 
                      ? "0 0 60px rgba(59, 130, 246, 0.5), 0 0 100px rgba(59, 130, 246, 0.3)" 
                      : "0 20px 60px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white rounded-xl p-8 flex flex-col items-center justify-center w-52 h-52">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{ 
                        rotate: isActive ? 360 : 0,
                        y: isActive ? [0, -10, 0] : 0
                      }}
                      transition={{ 
                        rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                        y: { duration: 2, repeat: Infinity }
                      }}
                    >
                      <FaRocket className="text-blue-600" />
                    </motion.div>
                    <motion.h3 
                      className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      A2IT
                    </motion.h3>
                    <motion.h4 
                      className="text-lg font-semibold text-gray-600 mt-1"
                      animate={{
                        opacity: isActive ? [1, 0.7, 1] : 1,
                      }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      Limited
                    </motion.h4>
                    <motion.p 
                      className="text-xs text-gray-500 mt-3 text-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {isActive ? "✨ Services Active!" : "👆 Hover or Click"}
                    </motion.p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoRWe;