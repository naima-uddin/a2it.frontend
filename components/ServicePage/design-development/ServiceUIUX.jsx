"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiLayout,
  FiPenTool,
  FiEye,
  FiUsers,
  FiSmartphone,
  FiPieChart,
  FiArrowLeft,
  FiCode,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const ServiceUIUX = ({ projects = [] }) => {
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
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[65vh] xl:[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-transparent to-[#0a0a12]"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-8 ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00cc] to-[#0066ff]">
                UI/UX Design Services
              </span>
            </h1>
            <p className="text-xl text-[#b0b0ff] max-w-3xl mx-auto mb-12">
              We craft intuitive, beautiful user experiences that drive
              engagement, conversion, and customer satisfaction through
              human-centered design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="relative overflow-hidden group bg-gradient-to-r from-[#ff00cc] to-[#0066ff] text-white font-semibold py-5 px-10 rounded-full shadow-xl hover:shadow-[0_5px_30px_rgba(255,0,204,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Design Consultation{" "}
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WordPress / Design Showcase Section */}
      <section className="py-10 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-[#ff00cc]">Our</span> WordPress Projects
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Successful WordPress and design projects we've built for businesses
            </p>
          </motion.div>

          {/* Projects Slider Navigation */}
          {groupedProjects.length > 1 && (
            <div className="flex justify-end items-center gap-4 mb-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevProjectSlide}
                className="p-3 rounded-full bg-[#ff00cc] hover:bg-[#cc0099] text-white shadow-lg transition-all"
              >
                <FiArrowLeft />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextProjectSlide}
                className="p-3 rounded-full bg-[#ff00cc] hover:bg-[#cc0099] text-white shadow-lg transition-all"
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
                      className="bg-[#0a0a12] rounded-xl overflow-hidden border border-[#ff00cc]/20 hover:shadow-lg hover:shadow-[#ff00cc]/10 transition-all flex flex-col h-full group"
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
                          <div className="w-full h-full flex items-center justify-center text-[#ff00cc]">
                            <FiCode size={48} />
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
                            <span key={idx} className="px-2 py-1 bg-[#ff00cc]/10 text-[#ff00cc] text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.performance && (
                          <div className="grid grid-cols-2 gap-2 mt-auto">
                            {project.performance.slice(0, 2).map((stat, idx) => (
                              <div key={idx} className="text-center p-2 bg-[#12121a] rounded border border-[#ff00cc]/10">
                                <div className="font-bold text-[#ff00cc]">{stat.value}</div>
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
              <p className="text-[#b0b0ff]">No WordPress projects available at the moment.</p>
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
                        ? "bg-[#ff00cc] w-8"
                        : "bg-[#ff00cc]/30 hover:bg-[#ff00cc]/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center border-2 border-[#ff00cc] text-[#ff00cc] hover:bg-[#ff00cc] hover:text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300 group"
            >
              View All Design Projects
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#ff00cc] font-semibold tracking-widest text-sm">
              OUR DESIGN SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Comprehensive UI/UX Solutions
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              End-to-end design services focused on user needs and business
              goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiPenTool className="text-3xl text-[#ff00cc]" />,
                title: "User Research",
                description:
                  "Understand your users through comprehensive research methods",
                features: [
                  "User Interviews",
                  "Persona Development",
                  "Market Analysis",
                  "Competitive Audit",
                ],
              },
              {
                icon: <FiLayout className="text-3xl text-[#ff00cc]" />,
                title: "UX Strategy",
                description:
                  "Develop a clear plan to achieve your business and user goals",
                features: [
                  "User Journey Mapping",
                  "Information Architecture",
                  "Content Strategy",
                  "UX Roadmapping",
                ],
              },
              {
                icon: <FiEye className="text-3xl text-[#ff00cc]" />,
                title: "UI Design",
                description:
                  "Create visually stunning interfaces that delight users",
                features: [
                  "Visual Design",
                  "Design Systems",
                  "Interaction Design",
                  "Brand Integration",
                ],
              },
              {
                icon: <FiUsers className="text-3xl text-[#ff00cc]" />,
                title: "Usability Testing",
                description:
                  "Validate designs with real users to ensure effectiveness",
                features: [
                  "Prototype Testing",
                  "A/B Testing",
                  "User Feedback Sessions",
                  "Analytics Review",
                ],
              },
              {
                icon: <FiSmartphone className="text-3xl text-[#ff00cc]" />,
                title: "Mobile App Design",
                description:
                  "Design exceptional mobile experiences for iOS and Android",
                features: [
                  "iOS Human Interface",
                  "Material Design",
                  "Responsive Layouts",
                  "Touch Optimization",
                ],
              },
              {
                icon: <FiPieChart className="text-3xl text-[#ff00cc]" />,
                title: "Design Optimization",
                description:
                  "Improve existing designs based on data and user feedback",
                features: [
                  "Conversion Rate Optimization",
                  "Accessibility Audit",
                  "Performance Review",
                  "UI Refinement",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12121a] p-8 rounded-xl border border-[#ff00cc]/20 hover:border-[#ff00cc] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#0a0a12] rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#b0b0ff] mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-[#ff00cc] mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#ff00cc] font-semibold tracking-widest text-sm">
              OUR DESIGN PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Human-Centered Design Approach
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              A proven methodology that puts users at the center of every
              decision
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-16 right-16 top-1/2 h-1 bg-[#12121a]"></div>
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discover",
                  description:
                    "Research & understand user needs and business goals",
                },
                {
                  step: "02",
                  title: "Define",
                  description:
                    "Synthesize findings and establish design direction",
                },
                {
                  step: "03",
                  title: "Ideate",
                  description: "Brainstorm and explore creative solutions",
                },
                {
                  step: "04",
                  title: "Prototype",
                  description:
                    "Create interactive models of proposed solutions",
                },
                {
                  step: "05",
                  title: "Test",
                  description: "Validate designs with real users and iterate",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#12121a] p-8 rounded-xl border border-[#ff00cc]/20 hover:border-[#ff00cc] transition-colors duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#ff00cc] to-[#0066ff] rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    {item.step}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#b0b0ff]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 px-6 sm:px-12 bg-gradient-to-br from-[#0a0a12] via-[#12121a] to-[#0a0a12]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to <span className="text-[#ff00cc]">Elevate</span> Your User
            Experience?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#b0b0ff] mb-8 max-w-2xl mx-auto"
          >
            Let's create intuitive, beautiful experiences that your users will
            love and that drive business results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#ff00cc] to-[#0066ff] text-white font-semibold py-5 px-12 rounded-full shadow-xl hover:shadow-[0_5px_30px_rgba(255,0,204,0.4)] transition-all duration-300 transform hover:scale-105"
            >
              Start Your Design Project
              <FiArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceUIUX;
