"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FiDollarSign,
  FiMessageSquare,
  FiUsers,
  FiPenTool,
  FiTarget,
  FiBarChart2,
  FiTrendingUp,
  FiCheckCircle,
  FiGlobe,
  FiLayers,
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
  FiPlayCircle,
  FiImage,
  FiVideo,
  FiShare2,
  FiPercent,
  FiArrowRight,
  FiCheck
} from "react-icons/fi";

const SEOSRMPPC = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Animation variants
  const fadeInUp = { 
    hidden: { opacity: 0, y: 40 }, 
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
  };
  
  const staggerContainer = { 
    show: { transition: { staggerChildren: 0.1 } } 
  };

  const platformServices = [
    {
      icon: <FiInstagram className="text-3xl" />,
      platform: "Instagram",
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
      stats: "1.2M+ Followers Grown",
      features: ["Visual Storytelling", "Reels Strategy", "IG Shopping", "Influencer Collabs"]
    },
    {
      icon: <FiFacebook className="text-3xl" />,
      platform: "Facebook",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      stats: "3.5M+ Monthly Reach",
      features: ["Community Building", "Ad Campaigns", "Group Management", "Live Streaming"]
    },
    {
      icon: <FiYoutube className="text-3xl" />,
      platform: "YouTube",
      color: "bg-gradient-to-br from-red-600 to-red-700",
      stats: "500K+ Subscribers",
      features: ["Video SEO", "Content Series", "Channel Growth", "Monetization"]
    },
    {
      icon: <FiLinkedin className="text-3xl" />,
      platform: "LinkedIn",
      color: "bg-gradient-to-br from-blue-700 to-blue-900",
      stats: "200% Engagement Boost",
      features: ["B2B Marketing", "Thought Leadership", "Lead Generation", "Professional Networking"]
    }
  ];

  const contentTypes = [
    {
      type: "Photo Posts",
      icon: <FiImage />,
      desc: "High-quality branded imagery",
      color: "from-blue-500 to-cyan-400"
    },
    {
      type: "Short Videos",
      icon: <FiVideo />,
      desc: "TikTok/Reels style content",
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "Live Streams",
      icon: <FiPlayCircle />,
      desc: "Real-time audience interaction",
      color: "from-red-500 to-orange-500"
    },
    {
      type: "Carousels",
      icon: <FiLayers />,
      desc: "Swipeable educational content",
      color: "from-green-500 to-emerald-400"
    },
    {
      type: "Stories",
      icon: <FiShare2 />,
      desc: "24-hour engaging content",
      color: "from-yellow-500 to-amber-400"
    },
    {
      type: "User Content",
      icon: <FiUsers />,
      desc: "Authentic customer stories",
      color: "from-indigo-500 to-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] py-12 sm:py-16 md:py-20 flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/assets/SEO/banner.png')] bg-cover bg-center"></div>
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
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium mb-6 rounded-full text-sm shadow-lg"
              >
                <FiTarget className="mr-2" />
                DIGITAL MARKETING EXCELLENCE
              </motion.div>
              
              <h1 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-white">
                Dominate Search{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
                    Rankings & Ads
                  </span>
                  <motion.div
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-yellow-400 to-pink-400"
                  />
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-100 max-w-2xl mb-8 leading-relaxed"
              >
                Strategic SEO, SEM, and PPC campaigns that drive qualified traffic, boost conversions, and maximize your ROI.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl hover:shadow-2xl hover:shadow-orange-300 transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <FiArrowRight className="ml-2" />
                  </span>
                  <motion.div
                    initial={{ x: "-100%", y: "100%" }}
                    whileHover={{ x: "100%", y: "-100%" }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                </Link>
                
                <Link
                  href="#services"
                  className="group inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    View Services
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
                  { value: "300%", label: "Avg ROI Increase", color: "text-yellow-300" },
                  { value: "4.8⭐", label: "Client Rating", color: "text-orange-300" },
                  { value: "24/7", label: "Support", color: "text-green-300" },
                ].map((stat, index) => (
                  <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20">
                    <div className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-200">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Our Process</h3>
                  <p className="text-blue-100 text-sm">Strategic approach to digital success</p>
                </div>
                
                <div className="p-6 space-y-4">
                  {["Setup & Strategy", "Implementation", "Optimization"].map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        activeStep === index
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105"
                          : "bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center mr-3 font-bold">
                          {index + 1}
                        </div>
                        <span className="font-semibold">{step}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white text-sm font-medium mb-2">Scroll to explore</div>
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
        </div>
      </section>

      {/* Services Navigation */}
      <section id="services" className="py-20 px-6 sm:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-widest text-sm">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6 text-gray-900">
              Platform-Specific{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Strategies</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We tailor content and campaigns for each social network's unique
              audience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                platform: "Instagram",
                icon: <FiInstagram className="text-3xl sm:text-4xl" />,
                image: "/assets/SEO/insta.jpeg",
                stats: "1.2M+ Followers Grown",
                color: "from-pink-500 to-purple-600",
              },
              {
                platform: "Facebook",
                icon: <FiFacebook className="text-3xl sm:text-4xl" />,
                image: "/assets/SEO/fb.avif",
                stats: "3.5M+ Monthly Reach",
                color: "from-blue-600 to-blue-800",
              },
              {
                platform: "YouTube",
                icon: <FiYoutube className="text-3xl sm:text-4xl" />,
                image: "/assets/SEO/youtube.jpeg",
                stats: "500K+ Subscribers",
                color: "from-red-600 to-red-700",
              },
              {
                platform: "LinkedIn",
                icon: <FiLinkedin className="text-3xl sm:text-4xl" />,
                image: "/assets/SEO/lindln.jpeg",
                stats: "200% Engagement Boost",
                color: "from-blue-700 to-blue-900",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="h-48 sm:h-56 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.platform}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.platform}
                      </h3>
                      <p className="text-gray-200 text-xs sm:text-sm">{item.stats}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {[
                      "Content Strategy",
                      "Paid Campaigns",
                      "Community Growth",
                      "Analytics Reporting",
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start text-sm sm:text-base">
                        <FiCheckCircle className="text-green-500 mt-0.5 mr-2 sm:mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Transforming Social Presence */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full mb-4">
              PROVEN RESULTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Social Presence</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Real metrics from our client campaigns showcase the impact of strategic social media management.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "Follower Growth",
                before: "2,400",
                after: "48,900",
                icon: <FiUsers className="text-4xl" />,
                arrow: "+1,937%"
              },
              {
                metric: "Engagement Rate",
                before: "1.2%",
                after: "6.8%",
                icon: <FiBarChart2 className="text-4xl" />,
                arrow: "+467%"
              },
              {
                metric: "Website Traffic",
                before: "320/mo",
                after: "4,100/mo",
                icon: <FiTrendingUp className="text-4xl" />,
                arrow: "+1,181%"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-bold text-blue-600">{item.arrow}</span>
                </div>
                <h3 className="text-2xl font-bold mb-8 text-gray-900">{item.metric}</h3>
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">Before</div>
                    <div className="text-3xl font-bold text-gray-700">{item.before}</div>
                  </div>
                  <div className="mx-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-2">After</div>
                    <div className="text-3xl font-bold text-blue-600">{item.after}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
          </motion.div>
        </div>
      </section>

      {/* Paid Media Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white">
                  <FiDollarSign className="text-2xl" />
                </div>
                <span className="text-blue-600 font-semibold tracking-wider">PAID MEDIA</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">PPC & SEM</span> Campaigns
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Maximize ROI with data-driven paid media strategies. We optimize every campaign 
                to reach your ideal customers at the perfect moment.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  { value: "+45%", label: "Average ROI Increase", color: "text-blue-600" },
                  { value: "-30%", label: "Cost Per Acquisition", color: "text-green-600" },
                  { value: "98%", label: "Campaign Success Rate", color: "text-cyan-600" },
                  { value: "24/7", label: "Performance Monitoring", color: "text-purple-600" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                    <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-gray-600 mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/paid-media"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Explore Paid Media Solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold mb-6">Our PPC Framework</h3>
                <ul className="space-y-5">
                  {[
                    "Strategic Keyword Research & Analysis",
                    "Smart Bidding & Budget Optimization",
                    "Audience Segmentation & Targeting",
                    "Ad Creative A/B Testing",
                    "Performance Analytics Dashboard",
                    "Conversion Rate Optimization"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <FiCheckCircle className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 pt-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform-Specific Strategies */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-red-500 to-orange-400 text-white font-semibold rounded-full mb-4">
              PLATFORM-SPECIFIC STRATEGIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tailored Content for Each{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Social Network
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We craft platform-specific strategies that resonate with each social network's unique audience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformServices.map((platform, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute inset-0 ${platform.color} rounded-3xl transform group-hover:scale-105 transition-transform duration-300`}></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-200 group-hover:shadow-2xl transition-all duration-300">
                  <div className={`w-20 h-20 rounded-2xl ${platform.color} flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform duration-300`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{platform.platform}</h3>
                  <p className="text-gray-600 mb-6">{platform.stats}</p>
                  <ul className="space-y-3">
                    {platform.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold rounded-full mb-4">
              CONTENT CREATION
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engaging <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Content Formats</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We produce diverse content that captures attention and drives action across all platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {contentTypes.map((content, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${content.color} p-1 rounded-2xl`}>
                  <div className="bg-white p-6 rounded-xl text-center group-hover:bg-gray-50 transition-colors duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${content.color} flex items-center justify-center text-white mx-auto mb-4`}>
                      <div className="text-2xl">{content.icon}</div>
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{content.type}</h3>
                    <p className="text-sm text-gray-600">{content.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mx-auto mb-8">
              <FiTarget className="text-white text-4xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Transform</span> Your Digital Strategy?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Let's build a comprehensive digital marketing approach that delivers measurable growth and engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative px-12 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Your Transformation
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/consultation"
                className="px-12 py-5 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
              >
                Book Free Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEOSRMPPC;