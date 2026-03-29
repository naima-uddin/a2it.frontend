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

  // responsive visible count: mobile -> 2, desktop -> 4
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    const update = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      // treat <768px as mobile
      setVisibleCount(w < 768 ? 2 : 4);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

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


  const categories = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => {
      (p.category || "").split(",").map((c) => c.trim()).forEach((c) => { if (c) set.add(c); });
    });
    return ["All", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => {
      const cats = (p.category || "").split(",").map((c) => c.trim());
      return cats.includes(active);
    });
  }, [projects, active]);

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
    <section className="w-full pt-16 bg-[#071331]/0 -mb-20 md:-mb-10" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="text-center mb-4 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold bg-linear-to-r from-[#93c9ff] to-[#0202c1] bg-clip-text text-transparent pb-2">
            Experience Our High-Impact Digital Projects
          </h2>
          <p className=" text-[#989897] max-w-2xl mx-auto">
           Explore our latest work across custom web development, scalable eCommerce platforms, ERP system integrations, marketplace solutions, and performance-driven marketing campaigns.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-4 md:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActive(cat); setShowActive(true); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${showActive && active === cat ? 'bg-gradient-to-r from-blue-500 to-blue-900 text-white' : 'bg-blue-600/30 text-white/90 '}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((p, idx) => {
            // Skip items beyond visibleCount when showAll is false
            if (!showAll && idx >= visibleCount) {
              return null;
            }
            const isAuto = autoScrollIndex === idx;
            const isSelected = selectedIndex === idx;
            return (
              <article
                key={p.id + '-' + idx}
                className={`group relative mx-auto w-full max-w-[300px] md:max-w-[290px] ${isAuto || isSelected ? "auto-scrolling" : ""}`}
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
                      <div className="text-blue-600">
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
        {filtered.length > visibleCount && (
          <div className="flex justify-center mt-6" ref={viewMoreRef}>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Button clicked! showAll before:', showAll, 'filtered.length:', filtered.length, 'visibleCount:', visibleCount);
                setShowAll(prev => {
                  const newValue = !prev;
                  console.log('Setting showAll to:', newValue);
                  return newValue;
                });
              }} 
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full px-6 py-2.5 shadow-lg transition cursor-pointer z-10 relative"
            >
              <span className="text-white font-bold">
                {showAll ? 'View Less' : 'View More'} 
              </span>
            </button>
          </div>
        )}

      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedIndex(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-gradient-to-b from-[#0a1628] to-[#071331] rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-2 right-10 z-20 bg-blue-600 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-all shadow-lg hover:scale-110 text-lg font-bold"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Scrollable content */}
            <div className="max-h-[88vh] overflow-y-auto">
              {/* Image section */}
              <div className="w-full  p-4 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                  <Image 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    width={1200} 
                    height={1600} 
                    className="w-full h-auto rounded-lg shadow-2xl"
                    quality={95}
                    priority
                  />
                </div>
              </div>

              {/* Content section */}
              <div className="p-4 md:p-4">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-oswald font-bold text-white mb-3 leading-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-300 mb-6 leading-relaxed">
                    {selectedItem.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a 
                      href={"https://wa.me/18083015039?text=" + encodeURIComponent(`Hello, I'm interested in starting a project: ${selectedItem?.title || ''}`)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-full px-6 py-3 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <span className="text-xl">🚀</span>
                      <span>Start a project</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

