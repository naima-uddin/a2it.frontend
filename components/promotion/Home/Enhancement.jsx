import React from 'react';
import Image from 'next/image';

const Enhancement = () => {
  return (
    <section className="bg-gray-50 pt-2 pb-6 md:pb-8 lg:pb-6 mb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-24 items-center lg:items-end">
        {/* Left - mockup image */}
        <div className="flex justify-start items-end relative lg:col-span-2 lg:self-end">
          {/* Decorative background elements */}
          <div className="absolute inset-0 -z-10">
            {/* Large gradient blob */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 rounded-full blur-3xl opacity-60" />
            {/* Secondary gradient */}
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-50 via-cyan-50 to-transparent rounded-full blur-2xl opacity-50" />
            {/* Decorative shapes */}
            <div className="absolute top-12 right-16 w-24 h-24 border-4 border-blue-200/30 rounded-full animate-pulse" />
            <div className="absolute bottom-24 left-12 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-2xl rotate-45" />
            <div className="absolute top-1/2 right-8 w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
            <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-indigo-400 rounded-full" />
          </div>
          
          <div className="relative w-full max-w-[1000px] sm:max-w-[1260px] md:max-w-[1260px] lg:max-w-[1320px] overflow-visible -ml-12 mb-12">
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/8 via-indigo-400/8 to-purple-400/8 rounded-3xl blur-2xl scale-95" />
            {/* contained bottom shadow so visible-bottom aligns with cards */}
            <div className="absolute bottom-0 left-0 right-0 h-44 md:h-56 lg:h-72 bg-gradient-to-t from-blue-800/30 via-blue-800/70 to-transparent rounded-b-3xl -z-10" />
            <Image
              src="/promotionPortfolio/serviceSectionImg.png"
              alt="Service mockups"
              width={1160}
              height={900}
              className="object-contain drop-shadow-2xl rounded-xl scale-125 md:scale-150 lg:scale-150 transition-transform duration-700 w-full h-auto relative z-10"
              priority
            />
          </div>
        </div>

        {/* Right - content + feature cards */}
        <div className="flex flex-col space-y-4 lg:pl-8 lg:col-span-3 lg:self-end">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
           Unlock Your  
            <span className="block lg:inline"> <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Next Level</span> of Professional  </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Growth</span>
          </h2>

          <p className="text-gray-600 max-w-xl">
            From concept to launch, we craft memorable brand and product experiences that convert — clear process, measurable results.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto">
            {/* Card 1 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border  hover:shadow-xl transition-shadow overflow-visible mr-6">
              <div className="absolute top-4 -left-8 sm:-left-10 w-14 h-14 sm:w-20 sm:h-20 overflow-visible">
                <Image src="/promotionPortfolio/cashback.png" alt="Money back" width={160} height={160} quality={100} className="w-full h-full object-contain" />
              </div>
              <div className="pl-8 sm:pl-8">
                <div className="font-semibold text-gray-800">Money-Back Policy</div>
                <div className="text-sm text-gray-500 mt-1">Risk-free promise</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border  hover:shadow-xl transition-shadow overflow-visible ">
              <div className="absolute top-4 -left-8 sm:-left-10 w-14 h-14 sm:w-20 sm:h-20 overflow-visible">
                <Image src="/promotionPortfolio/satisfaction.png" alt="Customer satisfaction" width={160} height={160} quality={100} className="w-full h-full object-contain" />
              </div>
              <div className="pl-8 sm:pl-8">
                <div className="font-semibold text-gray-800">Customer Satisfaction</div>
                <div className="text-sm text-gray-500 mt-1">5‑star results</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border  hover:shadow-xl transition-shadow overflow-visible mr-6">
              <div className="absolute top-4 -left-8 sm:-left-10 w-14 h-14 sm:w-20 sm:h-20 overflow-visible">
                <Image src="/promotionPortfolio/support.png" alt="24/7 support" width={160} height={160} quality={100} className="w-full h-full object-contain" />
              </div>
              <div className="pl-8 sm:pl-8">
                <div className="font-semibold text-gray-800">Round-the-Clock Support</div>
                <div className="text-sm text-gray-500 mt-1">Always available</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative bg-white rounded-2xl p-6 shadow-lg border  hover:shadow-xl transition-shadow overflow-visible">
              <div className="absolute top-4 -left-8 sm:-left-10 w-14 h-14 sm:w-20 sm:h-20 overflow-visible">
                <Image src="/promotionPortfolio/design.png" alt="Custom design" width={160} height={160} quality={100} className="w-full h-full object-contain" />
              </div>
              <div className="pl-8 sm:pl-8">
                <div className="font-semibold text-gray-800">Custom Crafted Designs</div>
                <div className="text-sm text-gray-500 mt-1">Tailored to your audience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enhancement;
