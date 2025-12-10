"use client";
import React, { useRef, useState, useEffect } from "react";
import ServicePaidMedia from "./ServicePaidMedia";
import ServiceContentPR from "./ServiceContentPR";
import ServiceSocialMedia from "./ServiceSocialMedia";
import ServiceBranding from "./ServiceBranding";

const DigitalMarketingServices = () => {
  const paidRef = useRef(null);
  const contentRef = useRef(null);
  const socialRef = useRef(null);
  const brandingRef = useRef(null);
  const [activeSection, setActiveSection] = useState("paid");

  const getNavbarHeight = () => 80;

  const handleScroll = (ref, section) => {
    if (ref.current) {
      const navbarHeight = getNavbarHeight();
      const elementPosition = ref.current.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setActiveSection(section);
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const scrollPosition = window.scrollY + getNavbarHeight() + 50;

      if (brandingRef.current && scrollPosition >= brandingRef.current.offsetTop) {
        setActiveSection("branding");
      } else if (socialRef.current && scrollPosition >= socialRef.current.offsetTop) {
        setActiveSection("social");
      } else if (contentRef.current && scrollPosition >= contentRef.current.offsetTop) {
        setActiveSection("content");
      } else {
        setActiveSection("paid");
      }
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a12] text-white relative">
      {/* Sidebar */}
      <aside className="fixed left-1 top-30 bg-[#12121a]/90 backdrop-blur-xl rounded-2xl p-1 z-50 shadow-2xl border border-[#00f0ff]/20">
        <ul className="space-y-2">

         {/* Social Media */}
          <li>
            <button
              onClick={() => handleScroll(socialRef, "social")}
              className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 group ${
                activeSection === "social"
                  ? "bg-gradient-to-br from-[#00f0ff] to-[#00a6ff] shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  : "bg-[#1a1a2e] hover:bg-[#252547]"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${activeSection === "social" ? "text-[#0a0a12]" : "text-[#00f0ff] group-hover:scale-110"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2H6a2 2 0 00-2 2v16l4-4h10a2 2 0 002-2V4a2 2 0 00-2-2z" />
              </svg>
              <span className="absolute left-14 bg-[#0a0a12] text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                Social Media
              </span>
            </button>
          </li>


          {/* Paid Media */}
          <li>
            <button
              onClick={() => handleScroll(paidRef, "paid")}
              className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 group ${
                activeSection === "paid"
                  ? "bg-gradient-to-br from-[#00f0ff] to-[#00a6ff] shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  : "bg-[#1a1a2e] hover:bg-[#252547]"
              }`}
            >
              {/* Icon */}
              <svg xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${activeSection === "paid" ? "text-[#0a0a12]" : "text-[#00f0ff] group-hover:scale-110"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3h6c0-1.657-1.343-3-3-3z" />
              </svg>
              <span className="absolute left-14 bg-[#0a0a12] text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                Paid Media
              </span>
            </button>
          </li>

          {/* Content & PR */}
          <li>
            <button
              onClick={() => handleScroll(contentRef, "content")}
              className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 group ${
                activeSection === "content"
                  ? "bg-gradient-to-br from-[#00f0ff] to-[#00a6ff] shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  : "bg-[#1a1a2e] hover:bg-[#252547]"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${activeSection === "content" ? "text-[#0a0a12]" : "text-[#00f0ff] group-hover:scale-110"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7h18v12a2 2 0 01-2 2z" />
              </svg>
              <span className="absolute left-14 bg-[#0a0a12] text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                Content & PR
              </span>
            </button>
          </li>

          

          {/* Branding */}
          <li>
            <button
              onClick={() => handleScroll(brandingRef, "branding")}
              className={`relative flex items-center justify-center w-8 h-8 rounded-xl transition-all duration-300 group ${
                activeSection === "branding"
                  ? "bg-gradient-to-br from-[#00f0ff] to-[#00a6ff] shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                  : "bg-[#1a1a2e] hover:bg-[#252547]"
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${activeSection === "branding" ? "text-[#0a0a12]" : "text-[#00f0ff] group-hover:scale-110"}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 12h18M3 17h18" />
              </svg>
              <span className="absolute left-14 bg-[#0a0a12] text-white text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                Branding
              </span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-full">
        <section ref={socialRef} className="scroll-mt-20">
          <ServiceSocialMedia />
        </section>
        
        <section ref={paidRef} className="scroll-mt-20">
          <ServicePaidMedia />
        </section>

         <section ref={contentRef} className="scroll-mt-20">
          <ServiceContentPR />
        </section>
        
        <section ref={brandingRef} className="scroll-mt-20">
          <ServiceBranding />
        </section> 
      </main> 
    </div>
  );
};

export default DigitalMarketingServices;
