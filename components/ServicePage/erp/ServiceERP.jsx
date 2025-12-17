"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
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
} from "react-icons/fi";
import Link from "next/link";

const ServiceERP = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const industries = [
    {
      name: "Manufacturing",
      icon: <FiSettings className="mr-3" />,
      features: [
        "Shop floor control",
        "Quality management",
        "Supply chain integration",
      ],
      color: "bg-blue-600",
    },
    {
      name: "Healthcare",
      icon: <FiUsers className="mr-3" />,
      features: ["Patient management", "HIPAA compliance", "Medical inventory"],
      color: "bg-blue-500",
    },
    {
      name: "Retail",
      icon: <FiShoppingCart className="mr-3" />,
      features: [
        "Omnichannel POS",
        "Inventory optimization",
        "Customer analytics",
      ],
      color: "bg-blue-700",
    },
    {
      name: "Construction",
      icon: <FiBriefcase className="mr-3" />,
      features: ["Project costing", "Equipment tracking", "Subcontractor mgmt"],
      color: "bg-blue-600",
    },
  ];

  const capabilities = [
    {
      icon: <FiCpu className="text-3xl" />,
      title: "AI-Powered Analytics",
      description: "Predictive insights and machine learning models",
      color: "bg-blue-50 border-blue-100",
    },
    {
      icon: <FiDatabase className="text-3xl" />,
      title: "Unified Data Platform",
      description: "Single source of truth across all departments",
      color: "bg-blue-50 border-blue-100",
    },
    {
      icon: <FiRefreshCw className="text-3xl" />,
      title: "Process Automation",
      description: "Eliminate manual workflows with RPA",
      color: "bg-blue-50 border-blue-100",
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Global Deployment",
      description: "Multi-currency, language, and compliance",
      color: "bg-blue-50 border-blue-100",
    },
    {
      icon: <FiShield className="text-3xl" />,
      title: "Enterprise Security",
      description: "Advanced security and compliance features",
      color: "bg-blue-50 border-blue-100",
    },
    {
      icon: <FiLayers className="text-3xl" />,
      title: "Modular Architecture",
      description: "Scale as your business grows",
      color: "bg-blue-50 border-blue-100",
    },
  ];

  const steps = [
    {
      phase: "Phase 1",
      title: "Discovery & Planning",
      duration: "2-4 Weeks",
      activities: [
        "Requirements workshop",
        "Process mapping",
        "Solution design",
      ],
      color: "bg-blue-600",
    },
    {
      phase: "Phase 2",
      title: "Core System Setup",
      duration: "4-6 Weeks",
      activities: [
        "Platform configuration",
        "Data migration",
        "Basic automation",
      ],
      color: "bg-blue-500",
    },
    {
      phase: "Phase 3",
      title: "Module Implementation",
      duration: "6-8 Weeks",
      activities: [
        "Departmental rollouts",
        "Custom development",
        "Integration",
      ],
      color: "bg-blue-600",
    },
    {
      phase: "Phase 4",
      title: "Testing & Training",
      duration: "3-4 Weeks",
      activities: [
        "User acceptance testing",
        "Training programs",
        "Documentation",
      ],
      color: "bg-blue-500",
    },
    {
      phase: "Phase 5",
      title: "Go-Live & Support",
      duration: "Ongoing",
      activities: [
        "Phased rollout",
        "Hypercare support",
        "Continuous improvement",
      ],
      color: "bg-blue-600",
    },
  ];

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

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/30 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0zMCAzMEwzMCAzMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold text-sm mb-6 rounded-full"
            >
              <FiActivity className="mr-2" />
              ENTERPRISE SOLUTIONS
            </motion.span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Modern ERP
              </span>
              <br />
              <span className="text-gray-900">For Your Business</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
              AI-powered enterprise platforms that unify your operations with
              predictive analytics and intelligent automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Request Demo
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="inline-flex items-center border border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <FiPlay className="mr-2" />
                  Watch Demo
                </button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard Card */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    ERP Dashboard
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <FiTrendingUp className="text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">
                        Revenue
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      $284,402
                    </div>
                    <div className="text-xs text-green-600">↑ 12.5%</div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <div className="flex items-center mb-2">
                      <FiTarget className="text-blue-600 mr-2" />
                      <span className="text-sm font-medium text-gray-600">
                        Orders
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      1,284
                    </div>
                    <div className="text-xs text-green-600">↑ 8.2%</div>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-medium text-gray-700">
                      Performance Trends
                    </div>
                    <FiBarChart2 className="text-blue-600" />
                  </div>
                  <div className="h-32 flex items-end space-x-2">
                    {[40, 65, 50, 80, 60, 90, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: i * 0.1 }}
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100"
            >
              <FiDatabase className="text-blue-600 text-xl" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg border border-gray-100"
            >
              <FiServer className="text-blue-600 text-xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full mb-4">
              <FiGrid className="mr-2" />
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Modular Platform Architecture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scalable components that adapt to your evolving business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white p-6 rounded-xl border-2 ${item.color} hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-lg`}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full mb-4">
              <FiTarget className="mr-2" />
              INDUSTRY FOCUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored ERP configurations for your industry challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Industry Tabs */}
            <div className="space-y-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveIndustry(index)}
                  className={`bg-white p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    activeIndustry === index
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-100 hover:border-blue-200"
                  }`}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 ${industry.color} rounded-lg flex items-center justify-center text-white mr-4`}
                    >
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {industry.name}
                    </h3>
                  </div>
                  <div className="mt-4 pl-14">
                    <ul className="space-y-2">
                      {industry.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center text-gray-600"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <FiCheckCircle className="text-blue-500 mr-3" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Visual Representation */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-96">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-80 h-80">
                    {/* Central Icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div
                        className={`w-32 h-32 ${industries[activeIndustry].color} rounded-full flex items-center justify-center text-white text-4xl shadow-xl`}
                      >
                        {industries[activeIndustry].icon}
                      </div>
                    </div>

                    {/* Rotating Rings */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-4 border-2 border-blue-100 rounded-full"
                    ></motion.div>

                    {/* Feature Points */}
                    {industries[activeIndustry].features.map((feature, i) => {
                      const angle = (i * 360) / 3;
                      const radius = 140;
                      const x = radius * Math.cos((angle * Math.PI) / 180);
                      const y = radius * Math.sin((angle * Math.PI) / 180);

                      return (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.2 }}
                          className="absolute bg-white p-4 rounded-xl shadow-lg border border-gray-100 w-32 text-center transform -translate-x-1/2 -translate-y-1/2"
                          style={{
                            left: `calc(50% + ${x}px)`,
                            top: `calc(50% + ${y}px)`,
                          }}
                        >
                          <div className="text-sm font-medium text-gray-900">
                            {feature}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full mb-4">
              <FiClock className="mr-2" />
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Structured Implementation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Minimizing disruption while maximizing value delivery
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`relative w-full lg:w-5/12 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div
                            className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center text-white font-bold mr-3`}
                          >
                            {index + 1}
                          </div>
                          <span className="text-sm font-medium text-gray-500">
                            {step.phase}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-blue-600">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <ul className="space-y-2">
                        {step.activities.map((activity, i) => (
                          <motion.li
                            key={i}
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -10 : 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            <span>{activity}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 font-semibold text-sm rounded-full mb-4">
              <FiTrendingUp className="mr-2" />
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "47%", label: "Faster Decision Making", icon: FiClock },
              { value: "32%", label: "Cost Reduction", icon: FiDollarSign },
              { value: "28%", label: "Productivity Increase", icon: FiActivity },
              { value: "63%", label: "Data Accuracy", icon: FiCheckCircle },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <stat.icon className="text-2xl text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready for Digital Transformation?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's build an intelligent ERP system that becomes your competitive
              advantage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white font-semibold py-4 px-12 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Journey
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/demo"
                className="inline-flex items-center bg-white text-blue-600 font-semibold py-4 px-12 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceERP;