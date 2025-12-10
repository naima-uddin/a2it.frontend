"use client";
import React from "react";

const Banner = () => {
  const slide = {
    bg: "/assets/banner/1.png",
  };

  return (
<div
  className="relative w-full overflow-hidden"
  style={{ height: "calc(100vh - 80px)" }}
>
  <img
    src={slide.bg}
    alt="Banner"
    className="w-full max-h-[calc(100vh-80px)] object-cover bg-black"
  />
</div>

  );
};

export default Banner;
