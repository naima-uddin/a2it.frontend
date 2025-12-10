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
import Image from "next/image";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
          ? "sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm"
          : "absolute top-0 left-0 right-0 bg-transparent text-black"
        }`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
      </Link>

      <ul className="hidden md:flex space-x-10 items-center text-sm font-medium relative">
        <li>
          <Link 
            href="/" 
            className={`hover:text-blue-500 transition-colors font-medium ${
              isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/about" 
            className={`hover:text-blue-500 transition-colors font-medium ${
              isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
            }`}
          >
            About
          </Link>
        </li>

        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={handleToggleClick}
            className={`flex items-center gap-1 hover:text-blue-500 transition-colors font-medium ${
              isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
            }`}
          >
            Our Services{" "}
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white text-gray-800 shadow-2xl z-20 px-0 py-1  border border-gray-200"
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

        <li>
          <Link 
            href="/portfolio" 
            className={`hover:text-blue-500 transition-colors font-medium ${
              isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link 
            href="/blog" 
            className={`hover:text-blue-500 transition-colors font-medium ${
              isScrolled ? "text-gray-800 dark:text-gray-200" : "text-white"
            }`}
          >
            Blog
          </Link>
        </li>
      </ul>

      <Link
        href="/contact"
        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all text-white px-4 py-2.5 rounded-lg shadow-md text-sm font-semibold hidden md:flex items-center gap-1"
      >
        <span className="animate-wave origin-[70%_70%]">👋</span> Contact Us
      </Link>

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

      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`absolute top-full left-0 w-full backdrop-blur-md shadow-lg px-6 py-4 space-y-4 z-40 ${
            isScrolled 
              ? "bg-white/95 dark:bg-gray-900/95 text-gray-800 dark:text-gray-200"
              : "bg-black/90 text-white"
          }`}
        >
          <Link 
            href="/" 
            className="block hover:text-blue-500 font-medium" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block hover:text-blue-500 font-medium" 
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <div>
            <button
              onClick={toggleMobileServices}
              className="flex items-center justify-between w-full hover:text-blue-500 font-medium"
            >
              Our Services{" "}
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="mt-1 pl-4 space-y-1">
                {services.map(([title, path], idx) => (
                  <Link
                    href={path}
                    key={idx}
                    className="block text-sm hover:text-blue-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link 
            href="/portfolio" 
            className="block hover:text-blue-500 font-medium" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            href="/blog" 
            className="block hover:text-blue-500 font-medium" 
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="animate-wave origin-[70%_70%]">👋</span> Contact Us
          </Link>
        </div>
      )}

      <style>{`
    @keyframes wave {
      0% { transform: rotate(0deg); }
      15% { transform: rotate(14deg); }
      30% { transform: rotate(-8deg); }
      40% { transform: rotate(14deg); }
      50% { transform: rotate(-4deg); }
      60% { transform: rotate(10deg); }
      100% { transform: rotate(0deg); }
    }
    .animate-wave {
      display: inline-block;
      animation: wave 2s infinite;
    }
  `}</style>
    </nav>
  );
};

export default Navbar;