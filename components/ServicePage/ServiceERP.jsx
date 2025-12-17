"use client";
import React, { useState } from "react";
import {
  FiCpu,
  FiDatabase,
  FiSettings,
  FiUsers,
  FiShoppingCart,
  FiBriefcase,
  FiCheckCircle,
  FiArrowRight,
  FiBarChart2,
  FiGlobe,
  FiShield,
  FiServer,
  FiTrendingUp,
  FiClock,
  FiDollarSign,
  FiActivity,
  FiGrid,
  FiTarget,
  FiChevronRight,
  FiPlay,
  FiX,
} from "react-icons/fi";
import Link from "next/link";

const ServiceERP = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const industries = [
    {
      name: "Manufacturing",
      icon: <FiSettings />,
      features: ["Production Planning", "Quality Control", "Supply Chain"],
      color: "bg-blue-600",
      stat: "+45% Efficiency",
    },
    {
      name: "Healthcare",
      icon: <FiUsers />,
      features: ["Patient Records", "Compliance", "Inventory"],
      color: "bg-blue-500",
      stat: "99.9% Accuracy",
    },
    {
      name: "Retail",
      icon: <FiShoppingCart />,
      features: ["Omnichannel", "Inventory", "Analytics"],
      color: "bg-blue-700",
      stat: "+38% Revenue",
    },
    {
      name: "Construction",
      icon: <FiBriefcase />,
      features: ["Project Management", "Equipment", "Costing"],
      color: "bg-blue-600",
      stat: "-32% Costs",
    },
  ];

  const modules = [
    {
      category: "Core Modules",
      items: [
        { name: "Finance", icon: <FiDollarSign />, desc: "Accounting & Budgeting" },
        { name: "HR", icon: <FiUsers />, desc: "Payroll & Management" },
        { name: "Inventory", icon: <FiDatabase />, desc: "Stock & Warehouse" },
        { name: "Sales", icon: <FiTrendingUp />, desc: "CRM & Pipeline" },
      ],
    },
    {
      category: "Advanced Modules",
      items: [
        { name: "Analytics", icon: <FiActivity />, desc: "Business Intelligence" },
        { name: "AI Tools", icon: <FiCpu />, desc: "Predictive Analytics" },
        { name: "Security", icon: <FiShield />, desc: "Enterprise Grade" },
        { name: "Integration", icon: <FiServer />, desc: "API & Connectors" },
      ],
    },
  ];

  const benefits = [
    { icon: <FiCheckCircle />, text: "Real-time data synchronization" },
    { icon: <FiCheckCircle />, text: "Automated workflow processes" },
    { icon: <FiCheckCircle />, text: "Scalable cloud infrastructure" },
    { icon: <FiCheckCircle />, text: "24/7 technical support" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div className="relative w-full max-w-3xl mx-4">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl hover:text-blue-400"
            >
              <FiX />
            </button>
            <div className="aspect-video bg-black rounded overflow-hidden">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-black/30">
                <FiPlay className="text-white text-5xl" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Side by Side Layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full">
                  ENTERPRISE SOLUTION
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Streamline Your Business with{" "}
                <span className="text-blue-600">Smart ERP</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                A comprehensive enterprise platform that integrates all your business 
                processes into one unified system. Drive efficiency, reduce costs, 
                and make data-driven decisions.
              </p>
              
              <div className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Request Demo
                  <FiArrowRight className="ml-2" />
                </button>
                <button 
                  onClick={() => setVideoModalOpen(true)}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                >
                  <FiPlay className="mr-2" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dashboard Overview</h3>
                  <p className="text-sm text-gray-500">Live business metrics</p>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">$284.4K</div>
                  <div className="text-sm text-gray-600">Monthly Revenue</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">94%</div>
                  <div className="text-sm text-gray-600">Efficiency Rate</div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-sm font-medium text-gray-700">Performance</div>
                  <div className="text-sm text-green-600">↑ 12.5%</div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full w-3/4"></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Active Orders</span>
                  <span className="font-medium">1,284</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Pending Tasks</span>
                  <span className="font-medium">42</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">System Uptime</span>
                  <span className="font-medium">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored ERP configurations designed for your specific business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                onClick={() => setActiveIndustry(index)}
                className={`bg-white rounded-lg border-2 p-6 cursor-pointer transition-all hover:shadow-lg ${
                  activeIndustry === index
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center text-white mr-4`}>
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{industry.name}</h3>
                    <div className="text-sm text-blue-600 font-medium">{industry.stat}</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <FiChevronRight className="text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industry Details */}
          <div className="mt-12 bg-white rounded-xl border border-gray-200 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {industries[activeIndustry].name} Solutions
                </h3>
                <p className="text-gray-600">Comprehensive features for your industry</p>
              </div>
              <div className="text-blue-600 font-semibold">
                {industries[activeIndustry].stat}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {industries[activeIndustry].features.map((feature, index) => (
                <div key={index} className="bg-blue-50 p-5 rounded-lg">
                  <div className="text-blue-600 font-semibold mb-2">{feature}</div>
                  <p className="text-sm text-gray-600">
                    Advanced tools and features specifically designed for {feature.toLowerCase()} management.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Platform Modules
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of modules that can be customized to your needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {modules.map((moduleGroup, groupIndex) => (
              <div key={groupIndex} className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  {moduleGroup.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {moduleGroup.items.map((module, index) => (
                    <div
                      key={index}
                      className="border border-gray-100 rounded-lg p-4 hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                          {module.icon}
                        </div>
                        <div className="font-medium text-gray-900">{module.name}</div>
                      </div>
                      <p className="text-sm text-gray-600">{module.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple Implementation Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We guide you through every step of the implementation journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -translate-y-1/2"></div>

            <div className="grid md:grid-cols-5 gap-4 relative">
              {[
                { step: "1", title: "Analysis", desc: "Requirements gathering" },
                { step: "2", title: "Planning", desc: "Solution design" },
                { step: "3", title: "Setup", desc: "System configuration" },
                { step: "4", title: "Training", desc: "Team onboarding" },
                { step: "5", title: "Launch", desc: "Go live & support" },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="bg-white w-12 h-12 rounded-full border-4 border-white flex items-center justify-center mx-auto mb-4 relative z-10">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {phase.step}
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-1">{phase.title}</h4>
                    <p className="text-sm text-gray-600">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "47%", label: "Faster Decisions", icon: <FiClock /> },
              { value: "65%", label: "Process Automation", icon: <FiActivity /> },
              { value: "32%", label: "Cost Reduction", icon: <FiDollarSign /> },
              { value: "99.8%", label: "Data Accuracy", icon: <FiCheckCircle /> },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600 text-2xl">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Get started with a free consultation and see how our ERP platform can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/demo"
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
          <p className="mt-8 text-blue-200 text-sm">
            No credit card required • 30-day free trial
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceERP;