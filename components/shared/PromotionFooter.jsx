"use client";
import React from "react";
import Image from "next/image";

export default function PromotionFooter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    console.log(Object.fromEntries(form.entries()));
    alert("Request submitted — we'll contact you shortly.");
  };

  return (
    <footer
      className="relative w-full bg-center bg-cover rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('/promotionPortfolio/footerbg.jpeg')" }}
    >
      {/* Layered overlay - inspired by navbar styling */}
      <div className="absolute inset-0 bg-[#0F1B32]/55 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-white max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
              Sign up now for the ultimate website experience!
            </h2>
            <p className="text-white/90 mb-8">
              Designs Genie is your all-in-one web design and development
              agency, featuring a team of skilled and imaginative developers,
              marketers, and designers.
            </p>

            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" fill="currentColor" className="text-white" />
                </svg>
                <span className="font-medium">+1 (808) 301-5039</span>
              </div>

              <div className="flex items-center gap-3 text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" className="text-white" />
                </svg>
                <a href="mailto:info@a2itllc.com" className="font-medium hover:underline">info@a2itllc.com</a>
              </div>
            </div>

           
          </div>

          <div className="bg-white/95 rounded-2xl p-6 md:p-8 shadow-2xl transparent">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-6">REQUEST A PHONE CALL</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" placeholder="Your Name" className="w-full rounded-md p-3 border border-gray-200 bg-white text-sm outline-none" required />
              <input name="email" type="email" placeholder="Email Address" className="w-full rounded-md p-3 border border-gray-200 bg-white text-sm outline-none" required />
              <input name="phone" type="tel" placeholder="Phone Number" className="w-full rounded-md p-3 border border-gray-200 bg-white text-sm outline-none" required />
              <textarea name="message" placeholder="Your Message" rows={4} className="w-full rounded-md p-3 border border-gray-200 bg-white text-sm outline-none resize-none" />

              <div className="flex justify-center mt-2">
                <button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold rounded-full px-10 py-3 shadow-md">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/60 text-sm">Copyright © 2026 A2IT LLC | All rights reserved.</div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-8 bg-white/20 rounded-md flex items-center justify-center text-xs text-white/80">VISA</div>
            <div className="w-12 h-8 bg-white/20 rounded-md flex items-center justify-center text-xs text-white/80">MC</div>
            <div className="w-12 h-8 bg-white/20 rounded-md flex items-center justify-center text-xs text-white/80">AMEX</div>
            <div className="w-12 h-8 bg-white/20 rounded-md flex items-center justify-center text-xs text-white/80">PayPal</div>
          </div>
        </div>
      </div>
    </footer>
  );
}