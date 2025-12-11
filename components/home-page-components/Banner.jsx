import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full">
      <Image
        src="/bannerImg.jpg"
        alt="Banner"
        width={1920}
        height={1080}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Banner;
