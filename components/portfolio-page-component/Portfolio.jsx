"use client"
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiStar, FiTrendingUp, FiUsers, FiTarget, FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ProjectModal from "./ProjectModal";
import FeaturedSlider from "./FeaturedSlider";

const Portfolio = () => { 
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredAffiliate, setHoveredAffiliate] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  // Update categories based on your actual data
  const getCategoryCounts = () => {
    const allProjects = getPortfolioProjects();

        const hasCategory = (project, categoryId) => {
      if (!project.category) return false;
      
      // Handle both string and array categories
      if (Array.isArray(project.category)) {
        return project.category.some(cat => 
          cat.toLowerCase().includes(categoryId.toLowerCase())
        );
      }
      
      // For string categories
      return project.category.toLowerCase().includes(categoryId.toLowerCase());
    };

    const allCategories = [
      "Web Development",
      "Mobile Development", 
      "E-commerce",
      "E-commerce Platform",
      "UI/UX Design",
      "Marketing",
      "Affiliate Platform",
      "Finance",
      "Corporate",
      "Sustainability",
      "Analytics",
      "Digital Advertising",
      "Real-time Platform",
      "WordPress"
    ];
    
    const counts = {
      all: allProjects.length,
      web: allProjects.filter(p => hasCategory(p, "web")).length,
      mobile: allProjects.filter(p => hasCategory(p, "mobile")).length,
      ecommerce: allProjects.filter(p => hasCategory(p, "e-commerce")).length,
      design: allProjects.filter(p => hasCategory(p, "ui/ux")).length,
      marketing: allProjects.filter(p => hasCategory(p, "marketing")).length,
      affiliate: allProjects.filter(p => hasCategory(p, "affiliate")).length,
      finance: allProjects.filter(p => hasCategory(p, "finance")).length,
      wordpress: allProjects.filter(p => hasCategory(p, "wordpress")).length,
    };
    
    return [
      { id: "all", name: "All Projects", count: counts.all },
      { id: "web", name: "Web Development", count: counts.web },
      { id: "affiliate", name: "Affiliate", count: counts.affiliate },
      { id: "ecommerce", name: "E-commerce", count: counts.ecommerce },
      { id: "mobile", name: "Mobile Apps", count: counts.mobile },
      { id: "wordpress", name: "WordPress", count: counts.wordpress },
      { id: "design", name: "UI/UX Design", count: counts.design },
      { id: "marketing", name: "Marketing", count: counts.marketing },
    ];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/portfolioData.json');
        const data = await response.json();
        setPortfolioData(data.portfolio);
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
    
    // Helper function to check category match
    const matchesCategory = (project) => {
      if (!project.category) return false;
      
      // Handle array categories
      if (Array.isArray(project.category)) {
        const categories = project.category.map(c => c.toLowerCase());
        
        switch (activeFilter) {
          case "web":
            return categories.some(cat => 
              cat.includes("web") || cat.includes("development")
            );
          case "mobile":
            return categories.some(cat => 
              cat.includes("mobile") || cat.includes("app")
            );
          case "ecommerce":
            return categories.some(cat => 
              cat.includes("e-commerce") || cat.includes("commerce") || 
              cat.includes("shop") || cat.includes("store")
            );
            
          case "design":
            return categories.some(cat => 
              cat.includes("ui") || cat.includes("ux") || 
              cat.includes("design")
            );
          case "marketing":
            return categories.some(cat => 
              cat.includes("marketing") || cat.includes("advertising") ||
              cat.includes("analytics")
            );
          case "affiliate":
            return categories.some(cat => 
              cat.includes("affiliate")
            );
          case "wordpress":
            return categories.some(cat => 
              cat.includes("wordpress")
            );
          case "finance":
            return categories.some(cat => 
              cat.includes("finance") || cat.includes("trading")
            );
          default:
            return false;
        }
      }
      
      // Handle string category (backward compatibility)
      const category = project.category.toLowerCase();
      
      switch (activeFilter) {
        case "web":
          return category.includes("web") || category.includes("development");
        case "mobile":
          return category.includes("mobile") || category.includes("app");
        case "ecommerce":
          return category.includes("e-commerce") || category.includes("commerce");
        case "design":
          return category.includes("ui") || category.includes("ux") || category.includes("design");
        case "marketing":
          return category.includes("marketing") || category.includes("advertising");
        case "affiliate":
          return category.includes("affiliate");
        case "finance":
          return category.includes("finance") || category.includes("trading");
        default:
          return false;
      }
    };
    
    return allPortfolioProjects.filter(matchesCategory);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  // Slider navigation for Featured Work
  const nextSlide = () => {
    const projects = getFeaturedProjects();
    if (projects.length > 0) {
      setSliderIndex((prev) => (prev + 1) % projects.length);
    }
  };

  const prevSlide = () => {
    const projects = getFeaturedProjects();
    if (projects.length > 0) {
      setSliderIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
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

  const categories = getCategoryCounts();

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
              A curated selection of {getAllProjects().length} projects that demonstrate our approach to 
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
                <div className="bg-white border border-teal-100 rounded-2xl overflow-hidden shadow-4xl hover:shadow-2xl transition-all duration-500">
                  {/* Image with hover effect */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="relative w-full h-full">
                      {/* Base image */}
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                          hoveredAffiliate === project.id ? 'opacity-0' : 'opacity-100'
                        }`}
                      />
                      {/* Hover image */}
                      <img
                        src={project.images[1] || project.images[0]}
                        alt={`${project.title} - Alternative view`}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                          hoveredAffiliate === project.id ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gray-200 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full">
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
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-1">{project.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        {project.performance && project.performance.slice(0, 2).map((metric, idx) => (
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
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most impactful projects that showcase excellence in digital innovation
            </p>
          </div>

          {getFeaturedProjects().length > 0 ? (
            <FeaturedSlider 
              projects={getFeaturedProjects()} 
              openProjectModal={openProjectModal} 
              sliderIndex={sliderIndex}
              setSliderIndex={setSliderIndex}
              nextSlide={nextSlide}
              prevSlide={prevSlide}
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No featured projects available</p>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio Projects Grid */}
       <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-6">Portfolio Projects</h2>
            
            {/* Filter Tabs - Dynamically generated */}
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
          {getFilteredProjects().length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {getFilteredProjects().map((project, index) => (
                  <motion.div
                    key={`${project.id}-${index}`}
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
                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        
                        {/* Show first 2 categories as tags */}
                        {project.category && (
                          <div className="flex flex-wrap gap-2 justify-center mb-4">
                            {(Array.isArray(project.category) ? project.category : [project.category])
                              .slice(0, 2)
                              .map((cat, idx) => (
                                <span key={idx} className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                                  {cat}
                                </span>
                              ))}
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {project.technologies && project.technologies.slice(0, 3).map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-white/20 text-white text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {project.performance && project.performance.length > 0 && (
                          <div className="flex items-center gap-6">
                            {project.performance.slice(0, 2).map((metric, idx) => (
                              <div key={idx} className="text-center">
                                <div className="text-lg font-bold text-white">{metric.value}</div>
                                <div className="text-xs text-gray-300">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="mt-6 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                          Click to view details
                        </div>
                      </div>
                      
                      {/* Category Badges - Show up to 2 categories */}
                      <div className="absolute top-1 left-4 flex flex-wrap gap-2">
                        {project.category && 
                          (Array.isArray(project.category) ? project.category : [project.category])
                            .slice(0, 2)
                            .map((cat, idx) => (
                              <span 
                                key={idx} 
                                className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-600 text-xs font-bold rounded-full"
                              >
                                {cat}
                              </span>
                            ))
                        }
                      </div>
                    </div>
                    
                    {/* Title and categories (visible always) */}
                    <div className="mt-1 mb-4">
                      <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      {project.category && (
                        <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                          {(Array.isArray(project.category) 
                            ? project.category.join(", ") 
                            : project.category
                          )}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Show active filter and count */}
              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Showing <span className="font-bold text-blue-600">{getFilteredProjects().length}</span> projects 
                  {activeFilter !== "all" && ` in "${categories.find(c => c.id === activeFilter)?.name}"`}
                </p>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found for this category</p>
              <button
                onClick={() => setActiveFilter("all")}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>


      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: `${getAllProjects().length}+`, label: "Projects Delivered", icon: "🚀" },
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