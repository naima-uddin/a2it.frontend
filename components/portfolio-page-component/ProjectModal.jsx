// components/ProjectModal.jsx
"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink, FiCode, FiUsers, FiTrendingUp } from "react-icons/fi";

const ProjectModal = ({ project, isOpen, onClose, additionalImages = [] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  if (!project) return null;
  
  const allImages = [project.img, ...additionalImages];
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
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
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{project.title}</h2>
                <p className="text-gray-600">{project.desc}</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={allImages[currentImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full text-white text-sm">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-6 flex gap-4 overflow-x-auto">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === idx 
                        ? 'border-blue-600' 
                        : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 grid md:grid-cols-2 gap-8">
              {/* Left Column - Technologies */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FiCode className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">Technologies Used</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column - Performance */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <FiTrendingUp className="w-5 h-5 text-green-600" />
                  <h3 className="text-xl font-bold text-gray-900">Performance Metrics</h3>
                </div>
                <div className="space-y-4">
                  {project.performance.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <FiUsers className="w-5 h-5 text-gray-400" />
                        <span className="font-medium text-gray-700">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="p-6 border-t border-gray-100 flex gap-4">
              <button className="flex-1 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-3">
                <FiExternalLink className="w-5 h-5" />
                View Live Project
              </button>
              <button className="flex-1 py-4 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-gray-300 transition-colors">
                Download Case Study
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;