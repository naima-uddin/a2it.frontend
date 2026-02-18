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
    { end: 100, suffix: '%', label: 'SUCCESSFUL PROJECTS' },
    { end: 100, suffix: '%', label: 'SATISFACTION' },
    { end: 1000, suffix: '+', label: 'SUCCESSFUL DEALS' }
  ];

  return (
    <section className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-orange-400 via-rose-400 to-fuchsia-500 shadow-xl">
          <div className="p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">Choose your plan</h2>
              <div className="mt-3 w-20 h-1 bg-white/30 rounded-full" />
            </div>

            {/* Right - stats */}
            <div className="flex-1 flex items-center justify-center md:justify-end gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-center text-white px-6">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none">
                    <CountUp end={stat.end} duration={1500} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm md:text-base uppercase tracking-widest text-white/90">{stat.label}</div>
                  {idx < stats.length - 1 && (
                    <div className="hidden md:block h-12 w-px bg-white/20 absolute" />
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