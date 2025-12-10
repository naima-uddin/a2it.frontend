"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  // Route configuration
  const routes = {
    HOME: "/",
    PORTFOLIO: "/portfolio",
    ABOUT: "/about",
    BLOGS: "/blog",
    PRIVACY: "/privacy-policy",
    TERMS: "/terms-of-service",
    SITEMAP: "/contact",
    CONTACT: "/contact",
  };

  // Social media links
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      color: "hover:text-[#1877F2]",
      url: "https://www.facebook.com/A2ITLtd",
    },
    {
      icon: <FaTwitter />,
      color: "hover:text-[#1DA1F2]",
      url: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn />,
      color: "hover:text-[#0A66C2]",
      url: "https://www.linkedin.com/in/a2itlimited/",
    }
  ];

  // Quick links
  const quickLinks = [
    { name: "Home", path: routes.HOME },
    { name: "Portfolio", path: routes.PORTFOLIO },
    { name: "About Us", path: routes.ABOUT },
    { name: "Blogs", path: routes.BLOGS },
    { name: "Contact", path: routes.CONTACT },
  ];

  // Policy links
  const policyLinks = [
    { name: "Privacy Policy", path: routes.PRIVACY },
    { name: "Terms of Service", path: routes.TERMS },
    { name: "Sitemap", path: routes.SITEMAP },
  ];

  return (
    <footer className="bg-[#0a0a12] text-[#e0e0ff] pt-16 pb-8 px-6 md:px-16 relative overflow-hidden">
      {/* Glowing orb effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full bg-[#00f0ff] blur-3xl opacity-10 w-80 h-80 -left-40 -bottom-40 animate-pulse"></div>
        <div className="absolute rounded-full bg-[#0066ff] blur-3xl opacity-10 w-96 h-96 -right-40 -top-40 animate-pulse"></div>
      </div>

      <div className="mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold text-[#0a0a12]">
                <Logo />
              </div>
              {/* Gradient brand name */}
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#00f0ff] to-[#0066ff] bg-clip-text text-transparent drop-shadow-md">
                A2IT Ltd
              </h2>
            </div>
            <p className="text-xl text-[#00f0ff] font-semibold tracking-wide">
              Build Your Dreams
            </p>
            <p className="text-[#b0b0ff] leading-relaxed">
              Transforming ideas into digital reality through innovative
              solutions and cutting-edge technology.
            </p>

            
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#00f0ff] border-b-2 border-[#00f0ff]/40 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="text-[#b0b0ff] hover:text-[#00f0ff] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#00f0ff] border-b-2 border-[#00f0ff]/40 inline-block">
              Contact Us
            </h3>
            <address className="not-italic text-[#b0b0ff] space-y-4">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#00f0ff] mt-1 flex-shrink-0" />
                <p>
                  Plot No 470
                  <br />
                  Road No 06 (Old 29)
                  <br />
                  DOHS Mirpur, Dhaka Division, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-[#00f0ff]" />
                <a
                  href="tel:+8801846937397"
                  className="hover:text-[#00f0ff] transition-colors"
                >
                  +880 1846-937397
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#00f0ff]" />
                <a
                  href="mailto:info@a2itltd.com"
                  className="hover:text-[#00f0ff] transition-colors"
                >
                  info@a2itltd.com
                </a>
              </div>
            </address>
          </div>

          {/* Policy Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#00f0ff] border-b-2 border-[#00f0ff]/40 inline-block">
              Policies
            </h3>
            <ul className="space-y-3">
              {policyLinks.map((policy) => (
                <li key={policy.name}>
                  <a
                    href={policy.path}
                    className="text-[#b0b0ff] hover:text-[#00f0ff] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-[#1a1a2a] flex items-center justify-center text-lg text-[#b0b0ff] ${social.color} hover:scale-110 hover:shadow-[0_0_10px_#00f0ff] transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#00f0ff]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#b0b0ff] mb-4 md:mb-0">
            © {new Date().getFullYear()} A2It Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
