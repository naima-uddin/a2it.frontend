"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaGlobe,
  FaMobileAlt,
  FaSearch,
  FaUsers,
  FaVectorSquare,
  FaDownload,
  FaLaptopCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const timeoutRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button[aria-label='Toggle menu']")
      ) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleToggleClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setServicesOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if a link is active
  const isActive = (path) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  const services = [
    ["Design & Development", "/services/design-development", <FaLaptopCode />],
    ["E-Commerce", "/services/e-commerce", <FaLaptopCode />],
    ["Amazon", "/services/amazon", <FaLaptopCode />],
    ["Shopify", "/services/shopify", <FaLaptopCode />],
    ["ERP System Development", "/services/erp", <FaVectorSquare />],
    ["SEO / SEM / PPC", "/services/seo", <FaSearch />],
    ["Server and Hosting Services", "/services/server-hosting", <FaUsers />],
    ["E-bay", "/services/e-bay", <FaSearch />],
  ];

  return (
    <nav
      className={`px-6 md:px-10 py-4 flex items-center justify-between transition-all duration-300 z-50
        ${isScrolled
          ? "sticky top-0 bg-gray-900/80 backdrop-blur-sm shadow-sm"
          : "absolute top-0 left-0 right-0 bg-gray-900/20 text-black"
        }`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
      </Link>

      <ul className="hidden md:flex space-x-10 items-center text-sm font-medium relative">
        {/* Home Link */}
        <li>
          <Link
            href="/"
            className={`relative px-2 py-1 transition-colors font-medium text-xl group ${
              isScrolled
                ? isActive("/")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                : isActive("/")
                ? "text-white"
                : "text-white hover:text-white"
            }`}
            onMouseEnter={() => setHoveredItem("home")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="relative z-10">Home</span>
            
            {/* Active indicator */}
            {isActive("/") && (
              <>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-blue-500/10 rounded-md blur-sm animate-pulse-slow"></div>
              </>
            )}
            
            {/* Hover animation */}
            {hoveredItem === "home" && !isActive("/") && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            )}
          </Link>
        </li>

        {/* About Link */}
        <li>
          <Link
            href="/about"
            className={`relative px-2 py-1 transition-colors font-medium text-xl group ${
              isScrolled
                ? isActive("/about")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                : isActive("/about")
                ? "text-white"
                : "text-white hover:text-white"
            }`} 
            onMouseEnter={() => setHoveredItem("about")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="relative z-10">About</span>
            
            {/* Active indicator */}
            {isActive("/about") && (
              <>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-blue-500/10 rounded-md blur-sm animate-pulse-slow"></div>
              </>
            )}
            
            {/* Hover animation */}
            {hoveredItem === "about" && !isActive("/about") && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            )}
          </Link>
        </li>

        {/* Our Services Dropdown - EXACTLY AS BEFORE */}
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={handleToggleClick}
            className={`relative px-2 py-1 flex items-center gap-1 transition-colors font-medium text-xl group ${
              isScrolled
                ? isActive("/services") || dropdownOpen
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                : isActive("/services") || dropdownOpen
                ? "text-white"
                : "text-white hover:text-white"
            }`}
          >
            <span className="relative z-10">Our Services</span>
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
            
            {/* Active indicator for services button */}
            {(isActive("/services") || dropdownOpen) && (
              <>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-blue-500/10 rounded-md blur-sm animate-pulse-slow"></div>
              </>
            )}
          </button>

          {/* EXACTLY THE SAME SERVICES DROPDOWN AS YOUR ORIGINAL CODE */}
          {dropdownOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white text-gray-800 shadow-2xl z-20 px-0 py-1 border border-gray-200"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="space-y-1">
                {services.map(([title, path, icon], idx) => (
                  <Link
                    href={path}
                    key={idx}
                    className="flex items-center gap-3 cursor-pointer p-2 relative overflow-hidden group transition-all duration-300"
                  >
                    {/* White background layer */}
                    <div className="absolute inset-0 bg-white group-hover:bg-blue-50 transition-all duration-300"></div>
                    
                    {/* Animated blue line that expands from left to right */}
                    <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-full bg-gradient-to-r from-blue-500/20 to-blue-500/5 transition-all duration-500 ease-out"></div>
                    
                    {/* Blue accent line on left that grows */}
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>
                    
                    <div className="relative z-10 flex items-center gap-3 w-full">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-1.5 rounded-lg text-sm shadow-sm group-hover:shadow-md transition-all duration-300">
                        {icon}
                      </div>
                      <div className="text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">
                        {title}
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>

        {/* Portfolio Link */}
        <li>
          <Link
            href="/portfolio"
            className={`relative px-2 py-1 transition-colors font-medium text-xl group ${
              isScrolled
                ? isActive("/portfolio")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                : isActive("/portfolio")
                ? "text-white"
                : "text-white hover:text-white"
            }`}
            onMouseEnter={() => setHoveredItem("portfolio")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="relative z-10">Portfolio</span>
            
            {/* Active indicator */}
            {isActive("/portfolio") && (
              <>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-blue-500/10 rounded-md blur-sm animate-pulse-slow"></div>
              </>
            )}
            
            {/* Hover animation */}
            {hoveredItem === "portfolio" && !isActive("/portfolio") && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            )}
          </Link>
        </li>

        {/* Pricing Link */}
        <li>
          <Link
            href="/pricing"
            className={`relative px-2 py-1 transition-colors font-medium text-xl group ${
              isScrolled
                ? isActive("/pricing")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                : isActive("/pricing")
                ? "text-white"
                : "text-white hover:text-white"
            }`}
            onMouseEnter={() => setHoveredItem("pricing")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="relative z-10">Pricing</span>
            
            {/* Active indicator */}
            {isActive("/pricing") && (
              <>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-blue-500/10 rounded-md blur-sm animate-pulse-slow"></div>
              </>
            )}
            
            {/* Hover animation */}
            {hoveredItem === "pricing" && !isActive("/pricing") && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            )}
          </Link>
        </li>

        {/* Blog Link */}
        <li>
          <Link
            href="/blog"
            className={`relative px-2 py-1 transition-colors font-medium text-xl group ${
              isScrolled
                ? isActive("/blog")
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-800 dark:text-gray-200 hover:text-blue-500"
                : isActive("/blog")
                ? "text-white"
                : "text-white hover:text-white"
            }`}
            onMouseEnter={() => setHoveredItem("blog")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <span className="relative z-10">Blog</span>
            
            {/* Active indicator */}
            {isActive("/blog") && (
              <>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -inset-1 bg-blue-500/10 rounded-md blur-sm animate-pulse-slow"></div>
              </>
            )}
            
            {/* Hover animation */}
            {hoveredItem === "blog" && !isActive("/blog") && (
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
            )}
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <Link
        href="/contact"
        className={`relative overflow-hidden bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all text-white px-4 py-2.5 rounded-lg shadow-md text-sm font-semibold hidden md:flex items-center gap-1 group ${
          isActive("/contact") ? "ring-2 ring-blue-400 ring-offset-2" : ""
        }`}
      >
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        <span className="animate-wave origin-[70%_70%]">👋</span>
        <span className="relative">Contact Us</span>
        
        {/* Active indicator */}
        {isActive("/contact") && (
          <div className="absolute -inset-1 bg-blue-500/20 rounded-lg blur-sm animate-pulse-slow"></div>
        )}
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? (
            <FaTimes 
              size={22} 
              className={`${isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"}`} 
            />
          ) : (
            <FaBars 
              size={22} 
              className={`${isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"}`} 
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`absolute top-full left-0 w-full backdrop-blur-md shadow-lg px-6 py-4 space-y-4 z-40 animate-slide-down ${
            isScrolled 
              ? "bg-white/95 dark:bg-gray-900/95 text-gray-800 dark:text-gray-200"
              : "bg-black/90 text-white"
          }`}
        >
          {/* Mobile Home Link */}
          <Link 
            href="/" 
            className={`block px-3 py-2 rounded-lg transition-all duration-300 relative ${
              isActive("/") ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "hover:text-blue-500"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              Home
              {isActive("/") && (
                <span className="ml-auto animate-pulse">●</span>
              )}
            </span>
            {isActive("/") && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full"></div>
            )}
          </Link>

          {/* Mobile About Link */}
          <Link 
            href="/about" 
            className={`block px-3 py-2 rounded-lg transition-all duration-300 relative ${
              isActive("/about") ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "hover:text-blue-500"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              About
              {isActive("/about") && (
                <span className="ml-auto animate-pulse">●</span>
              )}
            </span>
            {isActive("/about") && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full"></div>
            )}
          </Link>

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={toggleMobileServices}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-all duration-300 ${
                servicesOpen || isActive("/services") 
                  ? "text-blue-600 dark:text-blue-400" 
                  : "hover:text-blue-500"
              }`}
            >
              <span className="flex items-center">
                Our Services
                {isActive("/services") && (
                  <span className="ml-2 animate-pulse">●</span>
                )}
              </span>
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            
            {servicesOpen && (
              <div className="mt-1 pl-6 space-y-1 animate-fade-in">
                {services.map(([title, path], idx) => (
                  <Link
                    href={path}
                    key={idx}
                    className={`block py-2 px-3 rounded-lg text-sm transition-all duration-300 relative ${
                      isActive(path) 
                        ? "text-blue-600 dark:text-blue-400 bg-blue-500/5" 
                        : "hover:text-blue-500"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center">
                      {title}
                      {isActive(path) && (
                        <span className="ml-auto text-xs animate-pulse">→</span>
                      )}
                    </span>
                    {isActive(path) && (
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full"></div>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Portfolio Link */}
          <Link 
            href="/portfolio" 
            className={`block px-3 py-2 rounded-lg transition-all duration-300 relative ${
              isActive("/portfolio") ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "hover:text-blue-500"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              Portfolio
              {isActive("/portfolio") && (
                <span className="ml-auto animate-pulse">●</span>
              )}
            </span>
            {isActive("/portfolio") && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full"></div>
            )}
          </Link>

          {/* Mobile Blog Link */}
          <Link 
            href="/blog" 
            className={`block px-3 py-2 rounded-lg transition-all duration-300 relative ${
              isActive("/blog") ? "bg-blue-500/10 text-blue-600 dark:text-blue-400" : "hover:text-blue-500"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="flex items-center">
              Blog
              {isActive("/blog") && (
                <span className="ml-auto animate-pulse">●</span>
              )}
            </span>
            {isActive("/blog") && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-r-full"></div>
            )}
          </Link>

          {/* Mobile Contact Button */}
          <Link
            href="/contact"
            className={`w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1 relative overflow-hidden group ${
              isActive("/contact") ? "ring-2 ring-blue-400" : ""
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="animate-wave origin-[70%_70%]">👋</span>
            <span className="relative">Contact Us</span>
            {isActive("/contact") && (
              <span className="ml-1 animate-ping">!</span>
            )}
          </Link>
        </div>
      )}

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-wave {
          display: inline-block;
          animation: wave 2s infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;