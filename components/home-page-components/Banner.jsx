"use client";
import React from "react";

const Banner = () => {
  return (
    <>
      <link rel="preload" as="image" href="/assets/banner/1.png" />
      <div
        className="relative w-full overflow-hidden bg-gray-900"
        style={{ height: "calc(100vh - 80px)" }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url(/assets/banner/1.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            imageRendering: "auto",
            WebkitFontSmoothing: "antialiased",
            willChange: "auto",
          }}
        />
        
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>
    </>
  );
};

export default Banner;