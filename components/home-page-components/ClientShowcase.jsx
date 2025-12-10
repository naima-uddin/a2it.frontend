"use client";

import React from "react";
import Image from "next/image";

const logos = [
  "/assets/logos/1.webp",
  "/assets/logos/2.webp",
  "/assets/logos/3.webp",
  "/assets/logos/4.webp",
  "/assets/logos/5.webp",
  "/assets/logos/6.webp",
];

const ClientShowcase = () => {
  return (
    <div className="bg-[#0a0a12]">
      <div className="text-[#e0e0ff] py-10 overflow-hidden max-w-7xl mx-auto">
        {/* Main row */}
        <div className="max-w-7xl mx-auto flex flex-col md:justify-center items-center gap-2">
          {/* Left text + client image */}
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="text-center md:text-left flex items-end">
              <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0ff] leading-tight">
                Our <span className="text-[#00f0ff]">clients</span>
              </h2>

              {/* Client image */}
              <div className="relative w-48 md:w-60 aspect-[3/2] flex items-end justify-center -ml-6">
                <div className="absolute bottom-0 w-32 md:w-44 h-8 md:h-10 bg-[#00f0ff] rounded-full z-0 shadow-[0_10px_30px_rgba(0,240,255,0.3)]" />
                <Image
                  src="/assets/clientsImg/clients.png"
                  alt="Happy Clients"
                  width={200}
                  height={150}
                  className="relative z-10 ml-20 w-full h-auto object-contain"
                  style={{
                    filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))",
                  }}
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* Premium subtitle */}
            <div className="mt-1 relative">
              <h3 className="text-4xl md:text-5xl font-bold text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                  Reflects
                </span>{" "}
                <span className="text-[#e0e0ff]">our expertise</span>
              </h3>
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* Scrolling logos */}
        <div className="mt-4 overflow-hidden whitespace-nowrap">
          <div
            className="inline-block"
            style={{
              animation: "scroll 18s linear infinite",
            }}
          >
            {[...logos, ...logos].map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt={`logo-${idx}`}
                width={120}
                height={80}
                className="inline-block h-26 mx-6 hover:grayscale-0 transition duration-300"
                unoptimized
              />
            ))}
          </div>
        </div>

        {/* Animation styles */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ClientShowcase;
