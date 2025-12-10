"use client";
import React, { useState } from "react";
import { ArrowRight, Filter } from "lucide-react";
import { projects } from "../data/projects";
import Link from "next/link";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    "All",
    "Web Development",
    "Mobile App",
    "UI/UX Design",
    "AI/ML",
    "eCommerce Development",
    "Digital Marketing",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className=" bg-[#0a0a12] text-[#e0e0ff]">
      {/* Hero Section with Background Image */}
      <div
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#45454f] bg-opacity-80"
        style={{
          backgroundImage: "url(/assets/Portfolio/portfolio-bg.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a12] opacity-70 z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#b0b0ff] mb-10 max-w-3xl mx-auto">
              Where innovation meets execution - explore our successful projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.5)] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Start a Project
              </Link>
              <Link
                href="/about"
                className="border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <section className="py-16 bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#e0e0ff] mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                Work
              </span>
            </h2>
            <p className="text-xl text-[#b0b0ff] max-w-2xl mx-auto">
              Discover our diverse range of projects across multiple industries
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <Filter className="h-5 w-5 text-[#b0b0ff] mt-3 mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white shadow-lg"
                    : "bg-[#12121a] text-[#b0b0ff] hover:bg-[#0066ff]/20 hover:text-white border border-[#00f0ff]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#12121a] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden relative group border border-[#00f0ff]/10 hover:border-[#0066ff]/50"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden h-60">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#b0b0ff] line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-opacity-60 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies?.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#0a0a12] text-[#b0b0ff] px-3 py-1 rounded-full text-xs border border-[#00f0ff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.metrics?.slice(0, 2).map((metric, index) => (
                      <div key={index} className="text-center">
                        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff] font-bold text-xl">
                          {metric.value}
                        </p>
                        <p className="text-[#b0b0ff] text-sm">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#12121a] py-20 border-t border-[#00f0ff]/20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#e0e0ff] mb-6">
            Ready to Create Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-[#b0b0ff] mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with our expertise
          </p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.5)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 inline-block shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
