"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const stats = [
    { value: 120, suffix: "+", label: "Projects Delivered", icon: "🚀" },
    { value: 100, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
    { value: 3, label: "Years Experience", icon: "📈" },
    { value: 50000, suffix: "+", label: "Users Impacted", icon: "👥" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);

      setCounts(
        stats.map((stat) => Math.floor(progress * stat.value))
      );

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">{stat.icon}</div>

              <div className="text-4xl font-bold text-gray-900 mb-2">
                {counts[index]}
                {stat.suffix}
              </div>

              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
