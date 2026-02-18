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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-emerald-400 to-teal-500'
    },
    { 
      end: 100, 
      suffix: '%', 
      label: 'SATISFACTION',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: 'from-purple-400 to-pink-500'
    },
    { 
      end: 1000, 
      suffix: '+', 
      label: 'SUCCESSFUL DEALS',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  return (
    <section className="w-full py-8 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl">
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