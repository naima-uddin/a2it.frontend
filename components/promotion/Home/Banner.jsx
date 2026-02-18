"use client";

import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative w-full h-160 overflow-hidden bg-[#0A0A0C] banner-section" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat banner-bg h-120 md:h-auto -mt-12 -ml-2"
        style={{ backgroundImage: "url('/banner.jpeg')" }}
      />

      {/* Main content - left-aligned, matches provided image */}
      <div className="relative z-10 h-full flex flex-col items-center md:items-start pt-48  lg:pt-50 px-4 banner-title text-center md:text-left">
        <div className="w-full max-w-4xl ">
          <p className="text-slate-200/90 text-xl font-medium mb-3  lg:pl-10"> From high-performance websites to full-scale <span className="text-blue-600"> eCommerce, ERP systems, and digital marketing.</span> </p>
          

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3 ">
            <div className="text-white/90 font-semibold text-4xl pl-16">Starting from <span className="text-[#66B2FF]">$199</span> Only</div>

          </div>
            <div className="mt-4 text-slate-300 space-y-1 text-md pl-16">
              <div className="flex items-center gap-3"><span className="text-[#66B2FF] font-bold">.</span> Design. Develop. Dominate.</div>
              <div className="flex items-center gap-3"><span className="text-[#66B2FF] font-bold">.</span> Scale Your Brand Without Limits.</div>
              <div className="flex items-center gap-3"><span className="text-[#66B2FF] font-bold">.</span> Optimize, and scale for global success.
            </div>
            </div>

          <div className="mt-10 flex flex-wrap gap-4 pl-10">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-linear-to-r from-blue-500 to-blue-900 hover:bg-purple-700 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg transition">
              <span className="bg-linear-to-r from-[#ffffff] to-[#e7e7fd] bg-clip-text text-transparent">🚀 Start Your Project</span>
            </Link>

            <Link href="/contact" className="inline-flex items-center gap-3 border border-white/20 text-white/90 font-semibold rounded-full px-5 py-2.5 hover:bg-white/5 transition">
              <span className="bg-linear-to-r from-[#ffffff] to-[#e7e7fd] bg-clip-text text-transparent">📞 Get Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Social Media Strip - Right Side */}
      <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-6 md:right-12 lg:right-18 flex-col items-center gap-4 z-10 social-strip">
        <div className="w-px h-10 bg-linear-to-b from-transparent via-white/30 to-white/50" />
        <a
          href="https://wa.me/60167554178"
          aria-label="WhatsApp to +60 167554178"
          title="WhatsApp"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/whatsapp.svg"
            width={24}
            height={24}
            alt="WhatsApp"
            className="w-5 h-5 lg:w-6 lg:h-6 opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>

        <a
          href="https://www.facebook.com/Kltintstudio"
          aria-label="Facebook - Kltintstudio"
          title="Facebook"
          className="p-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/facebook.svg"
            width={24}
            height={24}
            alt="Facebook"
            className="w-5 h-5 lg:w-6 lg:h-6 opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>

        <a
          href="mailto:hello@kltintstudio.com"
          aria-label="Email - hello@kltintstudio.com"
          title="Email"
          className="p-2"
        >
          <Image
            src="/email.svg"
            width={24}
            height={24}
            alt="Email"
            className="w-5 h-5 lg:w-6 lg:h-6 opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>

        <a
          href="tel:+60167554178"
          aria-label="Call +60 167554178"
          title="Call"
          className="p-2"
        >
          <Image
            src="/map.svg"
            width={24}
            height={24}
            alt="Call"
            className="w-5 h-5 lg:w-6 lg:h-6 opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>

        
        {/* Vertical line */}
        <div className="w-px h-10 bg-linear-to-b from-white/50 to-white/20" />
        {/* Contact text - vertical */}
        <span
          className="text-white/70 text-[14px] font-oswald tracking-[0.15em] uppercase"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Contact
        </span>
      </div>

      {/* Bottom Arrow */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 banner-arrow">
        <Image
          src="/promotionPortfolio/down-arrow-home.png"
          width={104}
          height={104}
          alt="Scroll Down"
          className="animate-bounce h-16 w-16 md:h-20 md:w-20 lg:h-26 lg:w-26"
        />
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .banner-section {
            height: auto !important;
            min-height: 440px !important;
          }

          .banner-bg {
            background-position: top center !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            height: 440px !important;
            top: 0 !important;
            bottom: auto !important;
          }

          .banner-title {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          .banner-title h3 {
            font-size: 18px !important;
          }
          .banner-title h1 {
            font-size: 44px !important;
            line-height: 1.05 !important;
            margin-top: -6px !important;
          }

          .social-strip {
            display: flex !important;
            right: 6px !important;
            top: 85% !important;
            transform: translateY(-50%) !important;
            flex-direction: column !important;
            gap: 3px !important;
            z-index: 25 !important;
          }

          /* Smaller icon sizes on mobile */
          .social-strip img,
          .social-strip a img {
            width: 20px !important;
            height: 20px !important;
          }

          /* Slightly smaller vertical contact label */
          .social-strip span {
            font-size: 11px !important;
            margin-top: 4px !important;
          }

          .banner-arrow {
            bottom: 16px !important;
          }
          .banner-arrow img {
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Banner;
