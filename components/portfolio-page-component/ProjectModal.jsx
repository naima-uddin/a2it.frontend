// components/ProjectModal.jsx
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink, FiCode, FiUsers, FiTrendingUp, FiStar, FiTarget, FiCalendar, FiClock } from "react-icons/fi";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) return null;
  
  // Get all images based on project type
  const getProjectImages = () => {
    if (project.images) return project.images;
    if (project.image) return [project.image];
    return [];
  };
  
  const allImages = getProjectImages();
  
  const nextImage = () => {
    if (allImages.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }
  };
  
  const prevImage = () => {
    if (allImages.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    }
  };

  // Get performance metrics - handle different structures
  const getPerformanceMetrics = () => {
    if (project.performance) return project.performance;
    return [];
  };

  // Get technologies - handle different structures
  const getTechnologies = () => {
    if (project.technologies) return project.technologies;
    return [];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl bg-white rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
              <div className="pr-12">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {Array.isArray(project.category) ? (
                    project.category.map((cat, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                      {project.category}
                    </span>
                  )}
                  {project.type === 'featured' && (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full flex items-center gap-1">
                      <FiStar className="w-3 h-3" />
                      Featured
                    </span>
                  )}
                  {project.type === 'affiliate' && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full flex items-center gap-1">
                      <FiTarget className="w-3 h-3" />
                      Affiliate
                    </span>
                  )}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                {project.client && (
                  <p className="text-gray-500 text-sm mt-2">
                    Client: <span className="font-medium">{project.client}</span>
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full text-red-500  hover:border hover:border-red-500 transition-colors"
              >
                <FiX className="w-8 h-8" />
              </button>
            </div>

            {/* Image Gallery */}
            {allImages.length > 0 && (
              <div className="relative">
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={allImages[currentImageIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Navigation Arrows */}
                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
                      >
                        <FiChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12  bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg"
                      >
                        <FiChevronRight className="w-6 h-6" />
                      </button>
                      
                      {/* Image Counter */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                        {currentImageIndex + 1} / {allImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnail Gallery */}
                {allImages.length > 1 && (
                  <div className="p-6 flex gap-4 overflow-x-auto">
                    {allImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                          currentImageIndex === idx 
                            ? 'border-blue-600 scale-105' 
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} - Image ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Project Details */}
            <div className="p-6">
              {/* Project Meta Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {project.year && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <FiCalendar className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Year</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{project.year}</div>
                  </div>
                )}
                {project.duration && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <FiClock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Duration</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{project.duration}</div>
                  </div>
                )}
                {project.teamSize && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <FiUsers className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">Team Size</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{project.teamSize}</div>
                  </div>
                )}
                {project.status && (
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-2 h-2 rounded-full ${
                        project.status === 'live' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <span className="text-sm text-gray-600">Status</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900 capitalize">{project.status}</div>
                  </div>
                )}
              </div>

              {/* Detailed Description */}
              {project.detailedDescription && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 leading-relaxed">{project.detailedDescription}</p>
                </div>
              )}

              {/* Business Challenge & Solution */}
              {(project.businessChallenge || project.solution) && (
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {project.businessChallenge && (
                    <div className="bg-red-50 p-6 rounded-2xl">
                      <h4 className="text-lg font-bold text-red-800 mb-3">Business Challenge</h4>
                      <p className="text-red-700">{project.businessChallenge}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="bg-green-50 p-6 rounded-2xl">
                      <h4 className="text-lg font-bold text-green-800 mb-3">Our Solution</h4>
                      <p className="text-green-700">{project.solution}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                  <p className="text-gray-600 leading-relaxed">{project.results}</p>
                </div>
              )}

              {/* Technologies & Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Technologies */}
                {getTechnologies().length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <FiCode className="w-5 h-5 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-900">Technologies Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {getTechnologies().map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Performance Metrics */}
              {getPerformanceMetrics().length > 0 && (
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <FiTrendingUp className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Performance Metrics</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {getPerformanceMetrics().map((metric, idx) => (
                      <div key={idx} className="bg-gray-50 p-4 rounded-xl text-center">
                        {metric.icon && (
                          <div className="text-2xl mb-2">{metric.icon}</div>
                        )}
                        <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Testimonial */}
              {project.testimonial && (
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">"</span>
                    </div>
                    <div>
                      <p className="text-lg italic text-gray-700 mb-4">{project.testimonial.text}</p>
                      <div>
                        <div className="font-bold text-gray-900">{project.testimonial.author}</div>
                        <div className="text-gray-600 text-sm">
                          {project.testimonial.position}
                          {project.testimonial.company && `, ${project.testimonial.company}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;