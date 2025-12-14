"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiStar, FiTrendingUp, FiUsers, FiTarget, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProjectModal from "./ProjectModal";

const Portfolio = () => { 
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredAffiliate, setHoveredAffiliate] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Projects", count: 19 },
    { id: "web", name: "Web Development", count: 6 },
    { id: "mobile", name: "Mobile Apps", count: 4 },
    { id: "ecommerce", name: "E-commerce", count: 5 },
    { id: "ai", name: "AI/ML", count: 3 },
    { id: "design", name: "UI/UX Design", count: 3 }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/portfolioData.json');
        const data = await response.json();
        setPortfolioData(data.portfolio); // Access the portfolio object
      } catch (err) {
        console.error('Error loading portfolio data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get all projects from the new structure
  const getAllProjects = () => {
    if (!portfolioData) return [];
    return [
      ...portfolioData.affiliateProjects,
      ...portfolioData.featuredProjects,
      ...portfolioData.portfolioProjects
    ];
  };

  // Get affiliate projects
  const getAffiliateProjects = () => {
    if (!portfolioData) return [];
    return portfolioData.affiliateProjects || [];
  };

  // Get featured projects for slider
  const getFeaturedProjects = () => {
    if (!portfolioData) return [];
    return portfolioData.featuredProjects || [];
  };

  // Get portfolio projects for grid
  const getPortfolioProjects = () => {
    if (!portfolioData) return [];
    return portfolioData.portfolioProjects || [];
  };

  // Filter portfolio projects by category
  const getFilteredProjects = () => {
    const allPortfolioProjects = getPortfolioProjects();
    
    if (activeFilter === "all") return allPortfolioProjects;
    if (activeFilter === "web") return allPortfolioProjects.filter(p => 
      p.category === "Web Development"
    );
    if (activeFilter === "mobile") return allPortfolioProjects.filter(p => 
      p.category === "Mobile Development"
    );
    if (activeFilter === "ecommerce") return allPortfolioProjects.filter(p => 
      p.category === "E-commerce"
    );
    if (activeFilter === "ai") return allPortfolioProjects.filter(p => 
      p.category === "AI/ML"
    );
    if (activeFilter === "design") return allPortfolioProjects.filter(p => 
      p.category === "UI/UX Design"
    );
    
    return allPortfolioProjects;
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Slider navigation for Featured Work
  const nextSlide = () => {
    setSliderIndex((prev) => (prev + 1) % getFeaturedProjects().length);
  };

  const prevSlide = () => {
    setSliderIndex((prev) => (prev - 1 + getFeaturedProjects().length) % getFeaturedProjects().length);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="space-y-4">
          <div className="w-16 h-16 mx-auto border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-gray-500">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
              <FiStar className="w-4 h-4" />
              Portfolio Showcase
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Creative
              <br />
              <span className="text-blue-600">Digital Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
              A curated selection of projects that demonstrate our approach to 
              digital innovation and user-centered design.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate & Partnership Projects */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium mb-4">
              <FiTarget className="w-4 h-4" />
              Partnership Projects
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Affiliate & Collaboration Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Special projects developed in partnership with industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {getAffiliateProjects().map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
                onMouseEnter={() => setHoveredAffiliate(project.id)}
                onMouseLeave={() => setHoveredAffiliate(null)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  {/* Image with hover effect */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="relative w-full h-full">
                      {/* Base image */}
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredAffiliate === project.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      {/* Hover image */}
                      <img
                        src={project.images[1] || project.images[0]}
                        alt={`${project.title} - Alternative view`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                          hoveredAffiliate === project.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full">
                        {project.category}
                      </span>
                    </div>
                    
                    {/* Partnership badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                        Partnership
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        {project.performance.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm">
                              <span className="font-bold text-gray-900">{metric.value}</span>
                              <span className="text-gray-500 ml-2">{metric.label}</span>
                            </span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => openProjectModal(project)}
                        className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        View Case
                        <FiExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Slider */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most impactful projects that showcase excellence in digital innovation
            </p>
          </div>

          <div className="relative">
            {/* Slider Container */}
            <div className="relative overflow-hidden rounded-3xl">
              {getFeaturedProjects().map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: sliderIndex === index ? 1 : 0,
                    x: sliderIndex === index ? 0 : 100,
                    display: sliderIndex === index ? 'block' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative h-96 rounded-2xl overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
                        <FiStar className="w-3 h-3" />
                        Featured Project
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-3 mb-8">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {project.performance.map((metric, idx) => (
                          <div key={idx} className="text-center p-4 bg-blue-50 rounded-xl">
                            <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                            <div className="text-sm text-gray-600">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Slider Controls */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2 z-10">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {getFeaturedProjects().map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSliderIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    sliderIndex === index 
                      ? 'bg-blue-600 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio Projects</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === category.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 opacity-70">{category.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid - 4 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getFilteredProjects().map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="group relative cursor-pointer"
                onClick={() => openProjectModal(project)}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                  {/* Base Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:blur-sm group-hover:scale-110 transition-all duration-500"
                  />
                  
                  {/* Overlay Content - Shows on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-6">
                      {project.performance.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-gray-300">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      Click to view details
                    </div>
                  </div>
                </div>
                
                {/* Title (visible always) */}
                <div className="mt-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "19+", label: "Projects Delivered", icon: "🚀" },
              { value: "100%", label: "Client Satisfaction", icon: "⭐" },
              { value: "3", label: "Years Experience", icon: "📈" },
              { value: "50K+", label: "Users Impacted", icon: "👥" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let's collaborate to bring your vision to life with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-colors">
                Start a Project
              </button>
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Digital Portfolio. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};

export default Portfolio;