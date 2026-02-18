"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

const images = [
  "/slider/googleads.png",
  "/slider/amazon.webp",
  "/slider/cloude.png",
  "/slider/ebay.png",
  "/slider/erp.png",
  "/slider/web.png",
  "/slider/magento.png",
  "/slider/react.png",
  "/slider/woocommerce.png",
  "/slider/seo.png",
  "/slider/Shopify.png",
  "/slider/wordpresss.png",
];

export default function Slider({ autoplay = true, interval = 3000 }) {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(4); 
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  const updatePerView = useCallback(() => {
    if (typeof window === "undefined") return;
    const w = window.innerWidth;
    if (w >= 1280) setPerView(6);
    else if (w >= 1024) setPerView(6);
    else if (w >= 768) setPerView(5);
    else if (w >= 640) setPerView(4);
    else setPerView(3);
  }, []);

  useEffect(() => {
    // defer initial measurement to avoid synchronous setState during render
    const raf = requestAnimationFrame(() => updatePerView());
    window.addEventListener("resize", updatePerView);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updatePerView);
    };
  }, [updatePerView]);

  const maxIndex = Math.max(0, images.length - perView);

  const goNext = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const goPrev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoplay) return;
    if (isPaused) return;
    const id = setInterval(goNext, interval);
    return () => clearInterval(id);
  }, [autoplay, interval, goNext, isPaused]);

  return (
    <section
      className="w-full py-8 bg-transparent"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          {/* track (clipped to container to avoid page overflow) */}
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
          >
            {images.map((src, idx) => (
              <div
                key={src + idx}
                className="shrink-0 p-4 flex items-center justify-center"
                style={{ width: `${100 / perView}%` }}
                aria-hidden={idx < current || idx >= current + perView}
              >
                <div className="w-full h-20 md:h-28 lg:h-32 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={src.split("/").pop()}
                    width={240}
                    height={120}
                    className="object-contain opacity-90 hover:opacity-100 transition"
                    priority={false}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* arrows */}
          <button
            aria-label="Previous"
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 border border-blue-600 hover:bg-white/20 text-blue-600 rounded-full w-9 h-9 flex items-center justify-center shadow-md ml-2"
          >
            ‹
          </button>
          <button
            aria-label="Next"
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 border border-blue-600 hover:bg-white/20 text-blue-600 rounded-full w-9 h-9 flex items-center justify-center shadow-md mr-2"
          >
            ›
          </button>
        </div>

        {/* dots / pages */}
        <div className="mt-0 flex items-center justify-center gap-2">
          {Array.from({ length: Math.max(1, Math.ceil((images.length - perView + 1))) }).map((_, page) => (
            <button
              key={page}
              onClick={() => setCurrent(page)}
              className={`w-2.5 h-2.5 rounded-full ${current === page ? "bg-blue-400" : "bg-blue-400/30"} transition`}
              aria-label={`Go to slide ${page + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

