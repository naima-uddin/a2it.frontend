"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Team Images Background - Left White Section */}
      <div className="absolute inset-0 lg:w-1/2 bg-white z-0 overflow-hidden">
        {/* Team Images Grid Background - Multiple professional team members */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-4 gap-8 p-8 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="relative rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" style={{
                animationDelay: `${i * 100}ms`,
                animationDuration: '2s'
              }}></div>
            ))}
          </div>
        </div>
        
        {/* Large "PINNACLE" Text Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[180px] sm:text-[250px] md:text-[350px] lg:text-[400px] xl:text-[500px] font-black text-gray-50 leading-none select-none tracking-tighter">
            PINNACLE
          </div>
        </div>
      </div>

      {/* Blue Gradient Section - Right Side */}
      <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 z-0">
        {/* Blue Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Blue Team Images Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="grid grid-cols-3 gap-6 p-6 h-full">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="relative rounded-full bg-gradient-to-br from-blue-400/30 to-blue-500/30 animate-pulse" style={{
                animationDelay: `${i * 150}ms`,
                animationDuration: '2.5s'
              }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen z-10">
        
        {/* Top Navigation Bar - Styled */}
        <div className="relative pt-8 pb-12 flex items-center justify-between">
          {/* Logo - Styled like PINNACLE */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">P</span>
            </div>
            <div className="text-3xl font-black tracking-tighter">
              <span className="text-blue-600">PINN</span>
              <span className="text-gray-800">ACLE</span>
            </div>
          </div>

          {/* Contact Number - Styled */}
          <div className="hidden lg:flex items-center space-x-2 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="font-bold text-lg">+1 (351) 8000-2788</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[calc(100vh-160px)]">
          
          {/* Left Side - Text Content with styled typography */}
          <div className="relative z-20 space-y-8 lg:space-y-12 py-8">
            {/* Main Heading with gradient and styling */}
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-[0.3em] font-bold text-blue-600 opacity-80">
                WE ARE THE MOST
              </div>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  PRESTIGIOUS
                </span>
                <span className="block text-gray-900 mt-2">DESIGN AGENCY</span>
                <span className="block text-blue-600 text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-4">
                  IN TOWN
                </span>
              </h1>
            </div>

            {/* Description with stylish divider */}
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-medium italic">
                We're a full-service creative digital marketing agency, collaborating with brands all over the world.
              </p>
            </div>

            {/* Buttons - Styled like image */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link
                href="/about"
                className="group relative px-10 py-5 inline-flex items-center justify-center overflow-hidden font-black text-blue-600 border-2 border-blue-600 hover:text-white transition-all duration-300 text-lg tracking-wide uppercase"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="tracking-[0.2em]">ABOUT US</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
              </Link>

              <Link
                href="/contact"
                className="group relative px-10 py-5 inline-flex items-center justify-center overflow-hidden font-black text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 transition-all duration-300 text-lg tracking-wide uppercase shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <span className="tracking-[0.2em]">TALK TO AN EXPERT</span>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Client Logos - Styled */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              {['Google', 'Business Media', 'X: Trust Pilot', 'EXPERT PUSH'].map((client, index) => (
                <div key={index} className="text-gray-400 font-bold text-lg tracking-wide opacity-60 hover:opacity-100 transition-opacity duration-300">
                  {client}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Empty space for layout */}
          <div className="relative">
            <div className="lg:h-[600px] xl:h-[700px]"></div>
          </div>
        </div>
      </div>

      {/* Lady Image - Fixed position, doesn't scale with zoom */}
      <div className="fixed inset-0 z-5 pointer-events-none overflow-hidden">
        {/* Image positioned at 50% split line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-0 w-full lg:w-[55%] h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh]">
          <div className="relative w-full h-full">
            <Image
              src="/banner-lady.png"
              alt="Professional Lady Standing"
              fill
              className="object-contain object-bottom"
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              style={{ 
                objectPosition: 'center bottom',
                transform: 'translateZ(0)',
                willChange: 'transform'
              }}
            />
            
            {/* Gradient overlay for better blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-blue-900/30 mix-blend-overlay"></div>
          </div>
        </div>

        {/* TOP DESIGN AGENCY Badge - Fixed position */}
        <div className="absolute top-[30%] right-[8%] lg:right-[12%] transform bg-white p-6 md:p-8 rounded-2xl shadow-2xl max-w-[280px] md:max-w-[320px] z-30 rotate-[-3deg] pointer-events-auto border-4 border-white overflow-hidden">
          <div className="relative z-10">
            <div className="text-3xl md:text-4xl font-black text-gray-800 mb-2 tracking-tight">TOP DESIGN</div>
            <div className="text-5xl md:text-6xl font-black text-gray-900 tracking-tighter">AGENCY</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
        </div>

        {/* A2 STUDIOS Circle Badge - Fixed position */}
        <div className="absolute bottom-[35%] left-[8%] lg:left-[12%] bg-white w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex flex-col items-center justify-center shadow-2xl z-30 border-4 border-white pointer-events-auto overflow-hidden">
          <div className="relative z-10 text-center">
            <div className="text-xs md:text-sm font-black text-gray-500 tracking-widest mb-1">AGENCY</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-600 mb-1 leading-none">A2</div>
            <div className="text-xs md:text-sm font-black text-gray-700 tracking-wide">STUDIOS</div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white rounded-full"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 right-[20%] w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] left-[20%] w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile spacer */}
      <div className="lg:hidden relative z-20">
        <div className="h-[50vh]"></div>
      </div>

      {/* Custom styles for zoom behavior */}
      <style jsx global>{`
        /* Text scales with browser zoom */
        .text-5xl, .text-6xl, .text-7xl, .text-8xl,
        .text-lg, .text-xl, .text-2xl, .text-3xl, .text-4xl {
          transition: font-size 0.1s ease;
        }
        
        /* Image stays fixed size regardless of zoom */
        .fixed img {
          transform: translateZ(0) scale(1) !important;
          min-height: auto !important;
          height: auto !important;
        }
        
        /* Prevent image scaling on zoom */
        @media (min-width: 1024px) {
          .fixed > div:first-child {
            transform: none !important;
            width: 55% !important;
            height: 95vh !important;
            right: 0 !important;
            left: auto !important;
          }
          
          .fixed > div:first-child img {
            height: 95vh !important;
            min-height: 95vh !important;
            object-fit: contain !important;
            object-position: center bottom !important;
          }
        }
        
        /* Mobile image positioning */
        @media (max-width: 1023px) {
          .fixed > div:first-child {
            width: 100% !important;
            height: 65vh !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }
          
          .fixed > div:first-child img {
            height: 65vh !important;
            min-height: 65vh !important;
          }
        }
        
        /* Smooth typography scaling */
        html {
          text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        
        /* Ensure badges maintain position */
        .fixed .absolute {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}