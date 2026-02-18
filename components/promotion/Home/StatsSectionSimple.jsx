"use client";
// components/StatsSectionSimple.jsx
import React, { useEffect, useRef, useState } from 'react';

// Small CountUp component (no external deps)
function CountUp({ end = 0, duration = 1400, suffix = '', start = 0, decimals = 0 }) {
  const [value, setValue] = useState(start);
  const elRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    let rafId;
    let startTs = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const animate = (ts) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const eased = easeOutCubic(progress);
      const current = start + (end - start) * eased;
      setValue(current);
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };

    // intersection observer to start when visible
    const node = elRef.current;
    const startAnimation = () => {
      if (!started.current) {
        started.current = true;
        rafId = requestAnimationFrame(animate);
      }
    };

    if (node && 'IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            obs.disconnect();
          }
        });
      }, { threshold: 0.3 });
      obs.observe(node);
      return () => {
        obs.disconnect();
        cancelAnimationFrame(rafId);
      };
    }

    // fallback - start immediately
    startAnimation();
    return () => cancelAnimationFrame(rafId);
  }, [end, duration, start]);

  const formatted = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
  return (
    <span ref={elRef} aria-hidden>
      {formatted}{suffix}
    </span>
  );
}

const StatsSectionSimple = () => {
  const stats = [
    { 
      end: 100, 
      suffix: '%', 
      label: 'SUCCESSFUL PROJECTS',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
      ),
      gradient: 'from-emerald-400 to-teal-500'
    },
    { 
      end: 100, 
      suffix: '%', 
      label: 'SATISFACTION',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
      ),
      gradient: 'from-purple-400 to-pink-500'
    },
    { 
      end: 1000, 
      suffix: '+', 
      label: 'SUCCESSFUL DEALS',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
        </svg>
      ),
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-700 via-blue-500 to-pink-400 shadow-2xl">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_50%)]" />
          
          <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Heading */}
            <div className="flex-shrink-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-2" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
                Choose Your Plan
              </h2>
              <div className="w-24 h-1 bg-white/40 rounded-full mx-auto md:mx-0" />
            </div>

            {/* Right - Stats */}
            <div className="flex items-center justify-center gap-8 lg:gap-12">
              {stats.map((stat, idx) => (
                <div key={idx} className="group flex items-center gap-4 relative">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {stat.icon}
                  </div>
                  
                  {/* Text */}
                  <div className="text-white">
                    <div className="text-4xl md:text-5xl font-extrabold leading-none mb-1">
                      <CountUp end={stat.end} duration={1500} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs md:text-sm uppercase tracking-wider text-white/90 font-medium">
                      {stat.label}
                    </div>
                  </div>

                  {/* Divider */}
                  {idx < stats.length - 1 && (
                    <div className="hidden lg:block absolute -right-6 h-16 w-px bg-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSectionSimple;