import React from 'react';
import Image from 'next/image';

const Enhancement = () => {
  return (
    <section className="bg-white pt-12 pb-6 md:pt-16 md:pb-8 lg:pt-20 lg:pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left - mockup image */}
        <div className="flex justify-start items-start">
          <div className="relative w-[560px] sm:w-[680px] md:w-[760px] lg:w-[820px] h-[360px] sm:h-[460px] md:h-[540px] lg:h-[620px] overflow-visible  translate-y-6 md:translate-y-10 lg:translate-y-16 -ml-12">
            <Image
              src="/promotionPortfolio/serviceSectionImg.png"
              alt="Service mockups"
              fill
              className="object-contain drop-shadow-2xl rounded-xl scale-110 md:scale-115 lg:scale-120 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Right - content + feature cards */}
        <div className="space-y-6 lg:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Accelerate professional
            <span className="block lg:inline"> <span className="text-amber-500">Growth</span> with high‑impact </span>
            <span className="text-amber-500">Brand Design</span>
          </h2>

          <p className="text-gray-600 max-w-xl">
            From concept to launch, we craft memorable brand and product experiences that convert — clear process, measurable results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Money‑Back Guarantee</div>
                <div className="text-sm text-gray-500">Risk‑free promise</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Customer Satisfaction</div>
                <div className="text-sm text-gray-500">5‑star results</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <div>
                <div className="font-semibold text-gray-800">24/7 Dedicated Support</div>
                <div className="text-sm text-gray-500">Always available</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M12 3v18M7 7v10h10V7"/></svg>
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
