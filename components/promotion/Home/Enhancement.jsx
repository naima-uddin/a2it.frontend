import React from 'react';
import Image from 'next/image';

const Enhancement = () => {
  return (
    <section className="bg-white pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-24 items-center">
        {/* Left - mockup image */}
        <div className="flex justify-start items-start relative lg:col-span-2">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            {/* Large gradient blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 rounded-full blur-3xl opacity-60" />
            {/* Secondary gradient */}
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-50 via-cyan-50 to-transparent rounded-full blur-2xl opacity-50" />
            {/* Dark shade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-800/35 via-blue-800/80 to-transparent" />
            {/* Decorative shapes */}
            <div className="absolute top-12 right-16 w-24 h-24 border-4 border-blue-200/30 rounded-full animate-pulse" />
            <div className="absolute bottom-24 left-12 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl rotate-45" />
            <div className="absolute top-1/2 right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-indigo-400 rounded-full" />
          </div>
          
          <div className="relative w-[560px] sm:w-[680px] md:w-[760px] lg:w-[820px] h-[360px] sm:h-[460px] md:h-[540px] lg:h-[620px] overflow-visible translate-y-6 md:translate-y-10 lg:translate-y-16 -ml-12">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-indigo-400/10 to-purple-400/10 rounded-3xl blur-2xl scale-95" />
            <Image
              src="/promotionPortfolio/serviceSectionImg.png"
              alt="Service mockups"
              fill
              className="object-contain drop-shadow-2xl rounded-xl scale-110 md:scale-115 lg:scale-120 transition-transform duration-700 relative z-10 "
              priority
            />
          </div>
        </div>

        {/* Right - content + feature cards */}
        <div className="space-y-6 lg:pl-8 lg:col-span-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
           Unlock Your  
            <span className="block lg:inline"> <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Next Level</span> of Professional  </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Growth</span>
          </h2>

          <p className="text-gray-600 max-w-xl">
            From concept to launch, we craft memorable brand and product experiences that convert — clear process, measurable results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Money‑Back Guarantee</div>
                <div className="text-sm text-gray-500">Risk‑free promise</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Customer Satisfaction</div>
                <div className="text-sm text-gray-500">5‑star results</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">24/7 Dedicated Support</div>
                <div className="text-sm text-gray-500">Always available</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M12 3v18M7 7v10h10V7"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Custom‑Crafted Designs</div>
                <div className="text-sm text-gray-500">Tailored to your audience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enhancement;
