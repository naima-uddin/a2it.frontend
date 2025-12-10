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
      className={`bg-[#0a0a12] text-[#e0e0ff] px-6 md:px-10 py-4 flex items-center justify-between relative z-50 sticky top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-90 shadow-[0_4px_20px_0px_rgba(0,240,255,0.3)]"
          : "bg-opacity-100 shadow-none"
      }`}
    >
      <Link href="/" className="flex items-center space-x-2">
        <Logo />
      </Link>

      <ul className="hidden md:flex space-x-10 items-center text-sm font-medium relative">
        <li>
          <Link href="/" className="hover:text-[#00f0ff]">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-[#00f0ff]">
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
            className="flex items-center gap-1 hover:text-[#00f0ff]"
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
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[95vw] sm:w-[700px] md:w-[900px] h-[60vh] sm:h-[65vh] md:h-[320px] bg-[#12121a] text-[#b0b0ff] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 rounded-xl shadow-2xl z-20 px-6 sm:px-8 py-6"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {services.map(([title, path, icon], idx) => (
                  <Link
                    href={path}
                    key={idx}
                    className="flex items-start gap-3 hover:text-[#00f0ff] cursor-pointer"
                  >
                    <div className="bg-[#00f0ff] text-[#0a0a12] p-2 rounded-full text-sm mt-1">
                      {icon}
                    </div>
                    <div className="text-sm leading-tight">{title}</div>
                  </Link>
                ))}
              </div>

              <div className="bg-[#0e0e15] border border-[#00f0ff]/20 rounded-lg p-4 relative overflow-hidden">
                <Image
                  src="/assets/banner.avif"
                  alt="banner img"
                  width="400"
                  height="400"
                  unoptimized
                  className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-60 rounded-md"
                />

                <div className="relative z-10">
                  <h3 className="text-base font-semibold mb-2">
                    Download our PDF portfolio
                  </h3>
                  <p className="text-sm text-[#b0b0ff] mb-4">
                    See our project experience & offerings in detail.
                  </p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] hover:from-[#00c0ff] hover:to-[#0044ff] rounded-full text-sm font-semibold text-[#0a0a12] transition w-full justify-center">
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link href="/portfolio" className="hover:text-[#00f0ff]">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-[#00f0ff]">
            Blog
          </Link>
        </li>
      </ul>

      <Link
        href="/contact"
        className="bg-[#0066ff] hover:bg-[#00f0ff] transition-all text-white px-3 py-2.5 rounded-full shadow-md text-sm font-semibold hidden md:flex items-center gap-1"
      >
        <span className="animate-wave origin-[70%_70%]">👋</span> Contact Us
      </Link>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-full left-0 w-full bg-[#0a0a12] text-[#e0e0ff] px-6 py-4 space-y-4 z-40"
        >
          <Link href="/" className="block hover:text-[#00f0ff]" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block hover:text-[#00f0ff]" onClick={() => setMobileMenuOpen(false)}>
            About
          </Link>
          <div>
            <button
              onClick={toggleMobileServices}
              className="flex items-center justify-between w-full hover:text-[#00f0ff]"
            >
              Our Services{" "}
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {services.map(([title, path], idx) => (
                  <Link
                    href={path}
                    key={idx}
                    className="block text-sm hover:text-[#00f0ff]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/portfolio" className="block hover:text-[#00f0ff]" onClick={() => setMobileMenuOpen(false)}>
            Portfolio
          </Link>
          <Link href="/blog" className="block hover:text-[#00f0ff]" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link
            href="/contact"
            className="w-full mt-4 bg-gradient-to-r from-[#0066ff] to-[#00f0ff] hover:from-[#0044ff] hover:to-[#00c0ff] text-[#0a0a12] py-3 px-2 rounded-full text-sm font-semibold flex items-center justify-center gap-1"
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