// components/ServicesSection.jsx
import React from 'react';
import Image from 'next/image';
import { Megaphone, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    "Design & Development",
    "E-Commerce",
    "Amazon",
    "Shopify",
    "ERP System Development",
    "SEO / SEM / PPC",
    "Server and Hosting Services",
    "E-bay"
  ];

  return (
    <section className="relative w-full overflow-hidden bg-center bg-cover bg-no-repeat text-white py-30" style={{ backgroundImage: "url('/promotionPortfolio/shape.png')" }}>
      {/* subtle overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      {/* decorative faint circles */}
      <div className="absolute -left-20 -top-8 w-96 h-96 bg-white/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-10 w-72 h-72 bg-white/4 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Decorative Design */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[500px] h-[450px]">
            {/* Large gradient circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
            
            {/* Floating cards */}
            <div className="absolute top-12 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Innovation</div>
                  <div className="text-white/70 text-xs">Cutting Edge</div>
                </div>
              </div>
            </div>

            <div className="absolute top-32 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Fast Delivery</div>
                  <div className="text-white/70 text-xs">Quick Turnaround</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 left-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">Quality</div>
                  <div className="text-white/70 text-xs">Premium Service</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-8 right-12 w-16 h-16 border-4 border-white/20 rounded-full" />
            <div className="absolute bottom-8 right-20 w-12 h-12 border-4 border-white/20 rounded-lg transform rotate-45" />
            <div className="absolute top-1/2 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping" />
            <div className="absolute bottom-12 right-8 w-3 h-3 bg-emerald-300 rounded-full" />
          </div>
        </div>

        {/* Right - content (previous text restored) */}
        <div className="w-full lg:w-1/2 text-left">
          <p className="text-white/85 mb-4">In the ever-connected, attention-challenged digital era.</p>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            Scale faster: award‑winning web & app experiences
          </h3>

          <div className="w-16 h-1 bg-white/20 rounded-full mb-6" />

          <p className="text-white/85 max-w-lg mb-8">Choose the perfect plan for your business needs. All packages come with our commitment to excellence.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-md">
            {services.map((svc, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0">
                  <svg className="w-2.5 h-2.5 text-white/90" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg>
                </div>
                <div className="text-sm text-white/90">{svc}</div>
              </div>
            ))}
          </div>

          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-400 to-blue-900 px-6 py-3 rounded-full font-semibold shadow-2xl transition-transform transform hover:-translate-y-0.5">Let&apos;s Get Started</button>
        </div>
      </div>

      {/* white wave at bottom */}
      <div className="absolute inset-x-0 bottom-0 -mb-1">
        <svg viewBox="0 0 1440 320" className="w-full h-36 md:h-48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M0,192L48,186.7C96,181,192,171,288,170.7C384,171,480,181,576,176C672,171,768,149,864,128C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ServicesSection;