"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);
  // don't highlight any category button on initial load; showAll logic still uses "All"
  const [showActive, setShowActive] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [autoScrollIndex, setAutoScrollIndex] = useState(0);

  useEffect(() => {
    let mounted = true;
    fetch("/promotionPortfolio.json")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        const items = (data?.portfolio || []).filter((p) => p && p.image);
        setProjects(items);
        if (items.length) setAutoScrollIndex(0);
      })
      .catch(() => {});
    return () => (mounted = false);
  }, []);


  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  // visible subset (default 4) and currently selected item (by index in `filtered`)
  const selectedItem = selectedIndex !== null ? filtered[selectedIndex] : null;

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelectedIndex(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Scroll to the View more button when collapsing (showAll -> false)
  const viewMoreRef = useRef(null);
  const prevShowAllRef = useRef(showAll);
  useEffect(() => {
    // if it changed from true -> false, scroll button into view after layout update
    if (prevShowAllRef.current && !showAll) {
      // small delay to allow DOM collapse before scrolling
      setTimeout(() => {
        viewMoreRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 80);
    }
    prevShowAllRef.current = showAll;
  }, [showAll]);

  return (
    <section className="w-full py-16 bg-[#071331]/0" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold bg-linear-to-r from-[#93c9ff] to-[#0202c1] bg-clip-text text-transparent pb-2">
            Experience Our High-Impact Digital Projects
          </h2>
          <p className="mt-3 text-[#989897] max-w-2xl mx-auto">
           Explore our latest work across custom web development, scalable eCommerce platforms, ERP system integrations, marketplace solutions, and performance-driven marketing campaigns.
          </p>
        </div>

       

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filtered.map((p, idx) => {
            // show only first 4 unless "showAll" is enabled
            if (!showAll && idx >= 4) return null;
            const isAuto = autoScrollIndex === idx;
            const isSelected = selectedIndex === idx;
            return (
              <article
                key={p.id + '-' + idx}
                className={`group relative mx-auto w-full max-w-[290px] ${isAuto || isSelected ? "auto-scrolling" : ""}`}
                role="button"
                tabIndex={0}
                onClick={() => { setSelectedIndex(idx); setAutoScrollIndex(idx); }}
                onKeyDown={(e) => e.key === "Enter" && (setSelectedIndex(idx), setAutoScrollIndex(idx))}
                onMouseEnter={() => setAutoScrollIndex(idx)}
                onMouseLeave={() => setAutoScrollIndex(0)}
              >
                {/* Phone device frame - realistic modern phone */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-1 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]" style={{ aspectRatio: '9/13' }}>
                  
                  {/* Top bezel/notch area (inset to match inner screen) */}
                  <div className="absolute left-1 right-1 top-0 h-7 bg-gray-900 rounded-t-[2.3rem] flex items-center justify-center z-20">
                    {/* Notch */}
                    <div className="flex items-center gap-2 bg-black px-6 py-1 rounded-b-2xl">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-700" />
                      <div className="w-12 h-0.5 rounded-full bg-gray-800" />
                      <div className="w-2 h-2 rounded-full bg-gray-700 ring-1 ring-gray-600" />
                    </div>
                  </div>

                  {/* Phone screen (inner content area) */}
                  <div className="relative overflow-hidden rounded-[2.3rem] bg-black h-full">
                    <div className={`absolute inset-0 image-wrapper ${isAuto || isSelected ? "is-scrolling" : ""}`}>
                      <div className="image-scroll">
                        <div className="scroll-item">
                          <Image src={p.image} alt={p.title} fill className="object-cover" sizes="290px" priority={idx < 4} />
                        </div>
                        <div className="scroll-item">
                          <Image src={p.image} alt={p.title} fill className="object-cover" sizes="290px" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-4 right-4 z-20">
                      <div className="text-black">
                        <h3 className="text-sm font-bold leading-tight line-clamp-2 drop-shadow-lg mb-1">{p.title}</h3>
                       
                      </div>
                    </div>
                  </div>

                  {/* Bottom chin/home indicator (inset to match screen) */}
                  <div className="absolute left-1 right-1 bottom-0 h-7 bg-gray-900 rounded-b-[2.3rem] flex items-center justify-center z-20">
                    <div className="w-20 h-1 rounded-full bg-gray-500" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View more / View less button */}
        <div className="flex justify-center mt-6 " ref={viewMoreRef}>
          {filtered.length > 4 && (
            <button onClick={() => setShowAll((s) => !s)} className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg transition">
              <span className="bg-linear-to-r from-[#ffffff] to-[#c2c2ff] bg-clip-text text-transparent">{showAll ? 'View Less' : 'View More'}</span>
            </button>
          )}
        </div>

      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && selectedItem && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#071331] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-96 bg-black">
              <Image src={selectedItem.image} alt={selectedItem.title} fill className="object-cover" />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-3 right-4 bg-blue-600/90 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-700/80 transition"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-oswald font-bold text-white mb-2">{selectedItem.title}</h3>
              <div className="text-sm text-slate-300 mb-4">{selectedItem.description}</div>

              <div className="flex items-center gap-4">
                <a href={"https://wa.me/18083015039?text=" + encodeURIComponent(`Hello, I'm interested in starting a project: ${selectedItem?.title || ''}`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-5 py-2 transition">
                  🚀 Start a project
                </a>
                
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

