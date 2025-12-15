// FeaturedSlider.jsx
"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const FeaturedSlider = ({ projects, openProjectModal, sliderIndex, setSliderIndex, nextSlide, prevSlide }) => {
  const [currentImageIndices, setCurrentImageIndices] = useState(
    projects.reduce((acc, project, index) => {
      acc[index] = 0;
      return acc;
    }, {})
  );

  const handleThumbnailClick = (projectIndex, imageIndex) => {
    setCurrentImageIndices(prev => ({
      ...prev,
      [projectIndex]: imageIndex
    }));
  };

  return (
    <div className="relative">
      {/* Slider Container */}
      <div className="relative h-[550px] overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="absolute inset-0"
            initial={{ opacity: 0, x: "100%" }}
            animate={{
              opacity: sliderIndex === index ? 1 : 0,
              x: sliderIndex === index ? "0%" : sliderIndex < index ? "100%" : "-100%",
              zIndex: sliderIndex === index ? 10 : 0
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="w-full h-full grid lg:grid-cols-2 gap-8 items-center bg-white p-8">
              {/* Image Section with Thumbnails */}
              <div className="relative h-full min-h-[500px]">
                {/* Main Image */}
                <div className="relative h-70 lg:h-86 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={project.images[currentImageIndices[index]]}
                    alt={`${project.title} - Image ${currentImageIndices[index] + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  
                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                    {currentImageIndices[index] + 1} / {project.images.length}
                  </div>
                </div>
                
                {/* Thumbnails */}
                {project.images.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto py-4">
                    {project.images.map((image, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => handleThumbnailClick(index, imgIndex)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndices[index] === imgIndex 
                            ? 'border-blue-600 scale-105' 
                            : 'border-green-700 hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} - Thumbnail ${imgIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                    <FiStar className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-4 lg:p-8">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-3 text-lg">{project.description}</p>
                
                {/* Detailed Description if available */}
                {project.detailedDescription && (
                  <p className="text-blue-600 mb-3 text-sm leading-relaxed line-clamp-3">
                    {project.detailedDescription}
                  </p>
                )}
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-700 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {project.performance.map((metric, idx) => (
                    <div key={idx} className="text-center p-2 bg-blue-50 rounded-xl flex flex-row items-center justify-center gap-3">
                      {metric.icon && (
                        <div className="text-xl mb-2">{metric.icon}</div>
                      )}
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Features if available */}
                {project.features && project.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <button
                  onClick={() => openProjectModal(project)}
                  className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  View Full Case Study
                  <FiExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Slider Controls */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10  backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg   bg-blue-400  hover:bg-blue-600 transition-colors "
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-20">
        <button
          onClick={nextSlide}
          className="w-10 h-10  backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg   bg-blue-400  hover:bg-blue-600 transition-colors "
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Slider Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
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
  );
};

export default FeaturedSlider;