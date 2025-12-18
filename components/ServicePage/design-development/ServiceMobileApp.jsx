"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiCloud,
  FiShield,
  FiCpu,
  FiUser,
  FiBarChart2,
  FiServer,
  FiMonitor,
  FiArrowLeft,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const ServiceMobileApp = ({ projects = [] }) => {
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Responsive projects per view
  const getProjectsPerView = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 768) return 2;
    if (windowWidth < 1024) return 3;
    return 4;
  };

  const projectsPerView = getProjectsPerView();

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

  // Reset slides when grouping changes
  useEffect(() => {
    setCurrentProjectSlide(0);
  }, [projectsPerView]);

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % groupedProjects.length);
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + groupedProjects.length) % groupedProjects.length);
  };

  const goToProjectSlide = (index) => {
    setCurrentProjectSlide(index);
  };
  return (
    <div className="bg-[#0a0a12] text-[#e0e0ff] overflow-hidden">
      {/* Hero Section with Device Mockup */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] flex items-center overflow-hidden mb-16">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-transparent to-[#0a0a12]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12  relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="py-24"
          >
            <span className="inline-block px-4 py-2 bg-[#12121a] rounded-full text-[#00f0ff] font-medium ">
              Mobile App Development
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                Business
              </span>{" "}
              With Powerful Mobile Apps
            </h1>
            <p className="text-xl text-[#b0b0ff] mb-4 max-w-2xl">
              We craft beautiful, high-performance mobile applications that
              drive engagement, increase revenue, and elevate your brand
              presence on iOS and Android platforms.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/contact"
                className="relative overflow-hidden group bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-semibold py-4 px-8 rounded-lg hover:shadow-[0_5px_30px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Consultation
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
              <Link
                href="/portfolio"
                className="border border-[#00f0ff]/20 hover:border-[#00f0ff] text-[#e0e0ff] font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#00f0ff] rounded-full mix-blend-screen opacity-10 blur-3xl"></div>
            <div className="relative z-10">
              <div className="mockup-phone mx-auto">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1 bg-[#0a0a12]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/10 to-[#0066ff]/10"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center px-4">
                      <h3 className="text-xl font-bold mb-2">Your App Here</h3>
                      <p className="text-sm text-[#b0b0ff]">
                        We'll bring your vision to life
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-20  bg-gradient-to-b from-[#0a0a12] to-[#12121a] ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Apps Developed" },
              { number: "4.9", label: "Avg. Rating" },
              { number: "10M+", label: "Downloads" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#0066ff] bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className="text-[#b0b0ff] uppercase text-sm tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Projects Showcase */}
      <section className="py-20 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              OUR WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Featured <span className="text-[#0066ff]">Mobile Apps</span>
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Successful mobile app projects we've built for businesses
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
                            <FiSmartphone size={48} />
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
              <p className="text-[#b0b0ff]">No mobile app projects available at the moment.</p>
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

      {/* Services - Card Grid */}
      <section className="py-18  bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              WHAT WE OFFER
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-1">
              Comprehensive{" "}
              <span className="text-[#0066ff]">Mobile Solutions</span>
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              End-to-end services to bring your mobile vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiSmartphone className="text-3xl text-[#00f0ff]" />,
                title: "Native App Development",
                description:
                  "High-performance iOS and Android apps built with platform-specific technologies",
                features: [
                  "Swift & Kotlin",
                  "Platform-specific UI/UX",
                  "Full hardware access",
                  "App Store optimization",
                ],
                color: "from-[#00f0ff] to-[#0066ff]",
              },
              {
                icon: <FiCpu className="text-3xl text-[#0066ff]" />,
                title: "Cross-Platform Development",
                description:
                  "Single codebase for both platforms with native-like performance",
                features: [
                  "React Native",
                  "Flutter",
                  "Code reusability",
                  "Hot reload",
                ],
                color: "from-[#0066ff] to-[#00a0ff]",
              },
              {
                icon: <FiUser className="text-3xl text-[#00f0ff]" />,
                title: "UI/UX Design",
                description:
                  "Beautiful, intuitive interfaces that delight users",
                features: [
                  "User research",
                  "Wireframing",
                  "Prototyping",
                  "Design systems",
                ],
                color: "from-[#00f0ff] to-[#0066ff]",
              },
              {
                icon: <FiDatabase className="text-3xl text-[#0066ff]" />,
                title: "Backend Development",
                description:
                  "Scalable cloud infrastructure for your mobile apps",
                features: [
                  "Node.js/Python",
                  "Firebase",
                  "API development",
                  "Database design",
                ],
                color: "from-[#0066ff] to-[#00a0ff]",
              },
              {
                icon: <FiBarChart2 className="text-3xl text-[#00f0ff]" />,
                title: "App Analytics",
                description: "Data-driven insights to improve user engagement",
                features: [
                  "User behavior",
                  "Crash reporting",
                  "Performance metrics",
                  "A/B testing",
                ],
                color: "from-[#00f0ff] to-[#0066ff]",
              },
              {
                icon: <FiServer className="text-3xl text-[#0066ff]" />,
                title: "App Maintenance",
                description: "Keep your app updated and performing flawlessly",
                features: [
                  "Bug fixes",
                  "OS updates",
                  "Feature additions",
                  "Performance tuning",
                ],
                color: "from-[#0066ff] to-[#00a0ff]",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12121a] rounded-xl overflow-hidden border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-[#0a0a12] rounded-lg flex items-center justify-center mb-6 border border-[#00f0ff]/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-[#b0b0ff] mb-5">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck
                          className={`mt-1 mr-3 flex-shrink-0 ${service.color
                            .split(" ")[0]
                            .replace("from-", "text-")}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Vertical Timeline */}
      <section className="py-10  bg-[#12121a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              How We Build{" "}
              <span className="text-[#0066ff]">Successful Apps</span>
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              A transparent, collaborative approach to mobile development
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#0066ff] to-[#00f0ff]"></div>

            <div className="grid md:grid-cols-2 gap-y-12">
              {[
                {
                  step: "Discovery",
                  description:
                    "We start by understanding your business goals, target audience, and technical requirements through workshops and research.",
                  icon: <FiUser className="text-2xl" />,
                  color: "bg-[#00f0ff]",
                },
                {
                  step: "Design",
                  description:
                    "Our designers create wireframes, prototypes, and pixel-perfect UI designs tailored to your brand and user needs.",
                  icon: <FiMonitor className="text-2xl" />,
                  color: "bg-[#0066ff]",
                },
                {
                  step: "Development",
                  description:
                    "Our engineers build your app using best practices, with regular demos to keep you informed throughout the process.",
                  icon: <FiCode className="text-2xl" />,
                  color: "bg-[#00f0ff]",
                },
                {
                  step: "Testing",
                  description:
                    "We conduct rigorous QA testing across devices and scenarios to ensure flawless performance before launch.",
                  icon: <FiCheck className="text-2xl" />,
                  color: "bg-[#0066ff]",
                },
                {
                  step: "Launch",
                  description:
                    "We handle app store submission and ensure your app meets all guidelines for a smooth approval process.",
                  icon: <FiSmartphone className="text-2xl" />,
                  color: "bg-[#00f0ff]",
                },
                {
                  step: "Growth",
                  description:
                    "Post-launch, we provide analytics, updates, and optimization to help your app succeed long-term.",
                  icon: <FiBarChart2 className="text-2xl" />,
                  color: "bg-[#0066ff]",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  } ${index === 0 ? "pt-0" : ""}`}
                >
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "md:right-0" : "md:left-0"
                    } w-8 h-8 ${
                      item.color
                    } rounded-full flex items-center justify-center text-[#0a0a12] z-10`}
                  >
                    {item.icon}
                  </div>
                  <div className="bg-[#12121a] p-8 rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-colors duration-300">
                    <h3 className="text-xl font-bold mb-3">{item.step}</h3>
                    <p className="text-[#b0b0ff]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10  bg-gradient-to-br from-[#0a0a12] via-[#12121a] to-[#0a0a12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12  text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
              Build
            </span>{" "}
            Your Mobile App?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#b0b0ff] mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can create a mobile experience that delights
            your users and grows your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              href="/contact"
              className="relative overflow-hidden group bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-semibold py-4 px-8 rounded-lg hover:shadow-[0_5px_30px_rgba(0,240,255,0.3)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Free Consultation
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="border border-[#00f0ff]/20 hover:border-[#00f0ff] text-[#e0e0ff] font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
            >
              View Our Portfolio
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMobileApp;
