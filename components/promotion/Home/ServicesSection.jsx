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
    <section className="relative w-full overflow-hidden bg-center bg-cover bg-no-repeat text-white py-20 " style={{ backgroundImage: "url('/promotionPortfolio/shape.png')" }}>
      {/* subtle overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      {/* decorative faint circles */}
      <div className="absolute -left-20 -top-8 w-96 h-96 bg-white/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-10 w-72 h-72 bg-white/4 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row items-center gap-12">
        {/* Left - Decorative Design */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start py-8">
          <div className="relative w-full max-w-[550px] h-[500px]">
            {/* Multiple gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/40 via-blue-500/40 to-indigo-600/40 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-purple-400/40 via-pink-500/40 to-rose-600/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 bg-gradient-to-r from-amber-400/30 to-orange-500/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            {/* Floating cards with stats */}
            <div className="absolute top-8 left-4 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-5 shadow-2xl transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-0.5">10x</div>
                  <div className="text-white font-semibold text-sm mb-1">Faster Launch</div>
                  <div className="text-white/60 text-xs max-w-[140px]">Deploy in days not months</div>
                </div>
              </div>
            </div>

            <div className="absolute top-24 right-6 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-5 shadow-2xl transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 via-pink-500 to-rose-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-0.5">100%</div>
                  <div className="text-white font-semibold text-sm mb-1">Satisfaction</div>
                  <div className="text-white/60 text-xs max-w-[140px]">Guaranteed results</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 left-8 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-5 shadow-2xl transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 via-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-0.5">5 Star</div>
                  <div className="text-white font-semibold text-sm mb-1">Quality Work</div>
                  <div className="text-white/60 text-xs max-w-[140px]">Premium excellence</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-12 bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-5 shadow-2xl transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-xl mb-0.5">$1M+</div>
                  <div className="text-white font-semibold text-sm mb-1">Revenue</div>
                  <div className="text-white/60 text-xs max-w-[140px]">Generated for clients</div>
                </div>
              </div>
            </div>

            {/* Enhanced decorative elements */}
            <div className="absolute top-6 right-[45%] w-20 h-20 border-[3px] border-white/25 rounded-full animate-spin" style={{ animationDuration: '15s' }} />
            <div className="absolute bottom-4 left-[40%] w-16 h-16 border-[3px] border-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-lg transform rotate-45 animate-pulse" />
            <div className="absolute top-1/3 right-8 w-3 h-3 bg-yellow-300 rounded-full animate-ping" />
            <div className="absolute top-[60%] left-2 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-pulse" />
            <div className="absolute bottom-[40%] right-4 w-2 h-2 bg-pink-300 rounded-full animate-bounce" />
            
            {/* Floating particles */}
            <div className="absolute top-16 left-[30%] w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[45%] right-[25%] w-1 h-1 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-24 left-[55%] w-1.5 h-1.5 bg-white/40 rounded-full animate-ping" style={{ animationDelay: '2.5s' }} />
          </div>
        </div>

        {/* Right - content (previous text restored) */}
        <div className="w-full lg:w-1/2 text-left -mt-10">
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