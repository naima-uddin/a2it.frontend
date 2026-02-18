// components/ServicesSection.jsx
import React from 'react';
import Image from 'next/image';
import { Megaphone, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    "Website Design & Development",
    "Ecommerce Website Development",
    "Web Application Development",
    "Mobile Application Development",
    "Website Maintenance",
    "Domain and Hosting",
    "Branding And Stationary Design",
    "Video Animation",
    "Search Engine Optimization"
  ];

  return (
    <section className="relative w-full overflow-hidden bg-center bg-cover bg-no-repeat text-white py-20" style={{ backgroundImage: "url('/promotionPortfolio/shape.png')" }}>
      {/* subtle overlay to keep text readable */}
      <div className="absolute inset-0 bg-black/25 pointer-events-none" />
      {/* decorative faint circles */}
      <div className="absolute -left-20 -top-8 w-96 h-96 bg-white/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-10 w-72 h-72 bg-white/4 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex flex-col lg:flex-row items-center gap-12">
        {/* Left - mockup */}
        <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start">
          <div className="relative w-[320px] md:w-[420px] lg:w-[500px] h-[520px]">
            <Image
              src="/promotionPortfolio/serviceSectionImg.png"
              alt="App mockup"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
            {/* small confetti */}
            <span className="absolute -left-6 top-6 w-2 h-2 bg-amber-300 rounded-full rotate-12"></span>
            <span className="absolute -right-8 bottom-20 w-3 h-3 bg-emerald-300 rounded-full" />
            <span className="absolute left-20 bottom-6 w-1.5 h-1.5 bg-pink-300 rounded-full" />
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-md">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                <Megaphone size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold">Promotion Time:</div>
                <div className="text-white/80 mt-1">5 months</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white">
                <Users size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold">Followers:</div>
                <div className="text-white/80 mt-1">+10,000</div>
              </div>
            </div>
          </div>

          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 rounded-full font-semibold shadow-2xl transition-transform transform hover:-translate-y-0.5">Let&apos;s Get Started</button>
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