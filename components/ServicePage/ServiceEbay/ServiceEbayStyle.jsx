"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiShoppingBag,
  FiTruck,
  FiCreditCard,
  FiShield,
  FiTrendingUp,
  FiGlobe,
  FiStar,
  FiChevronRight
} from "react-icons/fi";
import Link from "next/link";

const EcommerceServicePage = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Diagonal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-8">
              <FiStar className="text-blue-500" />
              <span className="text-sm font-semibold">TRUSTED BY 10,000+ SELLERS</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                E-Commerce
              </span>
              <br />
              <span className="text-gray-900">Marketplace Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Transform your online store with powerful marketplace solutions that drive sales, 
              enhance customer experience, and scale your business globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 min-w-[200px]"
              >
                <span className="relative z-10">Start Selling Today</span>
                <FiArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/demo"
                className="group border-2 border-blue-200 text-blue-700 font-semibold py-4 px-8 rounded-xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]"
              >
                <span>Watch Demo</span>
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FiChevronRight className="text-blue-600" />
                </div>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { value: "10K+", label: "Active Sellers" },
                { value: "$500M+", label: "Monthly Sales" },
                { value: "99.8%", label: "Uptime" },
                { value: "4.9★", label: "Rating" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm"
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marketplace Showcase */}
      <section className="py-24 px-6 sm:px-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              SUCCESS STORIES
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
              Transforming <span className="text-blue-600">Businesses</span> Globally
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover how we've helped businesses thrive on marketplace platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image: "/assets/eBay/2.jpg",
                title: "Commercial Tyre",
                category: "Specialty Shop",
                results: "312% revenue growth",
                color: "from-blue-500 to-cyan-400"
              },
              {
                id: 2,
                image: "/assets/eBay/3.jpg",
                title: "Gym Equipment",
                category: "Health",
                results: "12K+ monthly visitors",
                color: "from-emerald-500 to-teal-400"
              },
              {
                id: 3,
                image: "/assets/eBay/4.jpeg",
                title: "Handmade Crafts",
                category: "Artisan Goods",
                results: "98% positive feedback",
                color: "from-violet-500 to-purple-400"
              },
              {
                id: 4,
                image: "/assets/eBay/5.jpeg",
                title: "Jute Boutique",
                category: "Apparel",
                results: "2.5x conversion rate",
                color: "from-rose-500 to-pink-400"
              },
              {
                id: 5,
                image: "/assets/eBay/7.jpeg",
                title: "Kitchen Appliances",
                category: "Home",
                results: "45% repeat customers",
                color: "from-amber-500 to-orange-400"
              },
              {
                id: 6,
                image: "/assets/eBay/8.avif",
                title: "Home & Garden",
                category: "Home Goods",
                results: "Top-rated seller",
                color: "from-indigo-500 to-blue-400"
              },
            ].map((store) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${store.color} opacity-20 z-10`}></div>
                  <img
                    src={store.image}
                    alt={`${store.title} showcase`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full">
                      {store.category}
                    </span>
                    <div className="text-2xl text-amber-400">
                      ★★★★☆
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {store.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{store.results}</p>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${store.color} rounded-full`} style={{ width: `${Math.random() * 40 + 60}%` }}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/success-stories"
              className="inline-flex items-center group bg-white border-2 border-blue-200 text-blue-700 hover:border-blue-300 hover:bg-blue-50 font-semibold py-3 px-8 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
            >
              View All Success Stories
              <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6 sm:px-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white/50"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-wider text-sm mb-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              OUR E-COMMERCE SERVICES
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 text-gray-900">
              Complete Marketplace Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Everything you need to launch, grow, and optimize your online store
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiShoppingBag className="text-3xl" />,
                title: "Store Setup & Optimization",
                description: "Professional store creation with SEO-friendly product listings",
                features: ["Store Design", "Category Structure", "SEO Optimization", "Brand Integration"],
                color: "blue"
              },
              {
                icon: <FiTruck className="text-3xl" />,
                title: "Fulfillment Solutions",
                description: "Streamlined inventory and order management systems",
                features: ["Inventory Sync", "Order Processing", "Shipping Integration", "Return Management"],
                color: "cyan"
              },
              {
                icon: <FiCreditCard className="text-3xl" />,
                title: "Payment Processing",
                description: "Secure, multi-channel payment solutions for global sales",
                features: ["Multiple Gateways", "Fraud Protection", "Currency Conversion", "Payout Management"],
                color: "indigo"
              },
              {
                icon: <FiShield className="text-3xl" />,
                title: "Seller Protection",
                description: "Comprehensive security and dispute resolution services",
                features: ["Account Security", "Dispute Resolution", "Policy Compliance", "Data Protection"],
                color: "emerald"
              },
              {
                icon: <FiTrendingUp className="text-3xl" />,
                title: "Sales Analytics",
                description: "Data-driven insights to optimize performance and growth",
                features: ["Performance Dashboard", "Customer Analytics", "Competitive Analysis", "Growth Recommendations"],
                color: "violet"
              },
              {
                icon: <FiGlobe className="text-3xl" />,
                title: "Global Expansion",
                description: "International selling support and cross-border trade solutions",
                features: ["Market Research", "Localization", "International Shipping", "Compliance Guidance"],
                color: "sky"
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Gradient Corner */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-${service.color}-500 to-${service.color}-300 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-50 to-${service.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${service.color}-600`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className={`w-6 h-6 bg-${service.color}-100 rounded-full flex items-center justify-center mr-3`}>
                        <FiCheck className={`text-${service.color}-600 text-sm`} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Process */}
      <section className="py-28 px-6 sm:px-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              STEP-BY-STEP PROCESS
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 text-gray-900">
              From Setup to <span className="text-blue-600">Success</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our streamlined process to get your business selling quickly
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden lg:block absolute left-24 right-24 top-24 h-1 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200"></div>
            
            <div className="grid lg:grid-cols-4 gap-8 relative">
              {[
                {
                  step: "01",
                  title: "Account Setup",
                  description: "Seller registration and store configuration",
                  icon: "📋"
                },
                {
                  step: "02",
                  title: "Product Listing",
                  description: "Optimized listing creation and inventory setup",
                  icon: "📦"
                },
                {
                  step: "03",
                  title: "Launch & Promote",
                  description: "Store activation and marketing campaigns",
                  icon: "🚀"
                },
                {
                  step: "04",
                  title: "Scale & Grow",
                  description: "Performance analysis and expansion strategies",
                  icon: "📈"
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Process Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg z-20">
                    {item.step}
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg mt-4 hover:shadow-xl transition-shadow duration-300">
                    <div className="text-4xl mb-4 text-center">{item.icon}</div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 sm:px-12 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
        
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white rounded-3xl p-12 shadow-2xl border border-gray-100"
          >
            {/* Floating Badges */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full shadow-lg">
              🚀 LIMITED TIME OFFER
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Launch</span> Your Store?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of successful sellers who've expanded their business with our expertise.
              Start your 30-day free trial today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/get-started"
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 min-w-[220px]"
              >
                <span className="relative z-10">Start Free Trial</span>
                <FiArrowRight className="relative z-10 transition-transform group-hover:translate-x-2" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                href="/demo"
                className="group border-2 border-gray-200 text-gray-700 font-semibold py-4 px-10 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-3 min-w-[220px]"
              >
                <span>Schedule a Demo</span>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <FiChevronRight className="text-gray-600" />
                </div>
              </Link>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                24/7 Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default EcommerceServicePage;