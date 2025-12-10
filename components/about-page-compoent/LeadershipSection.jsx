import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Safe motion components that filter out Framer Motion props
const MotionDiv =
  motion?.div ||
  (({
    children,
    initial,
    whileInView,
    transition,
    whileHover,
    whileTap,
    ...props
  }) => <div {...props}>{children}</div>);

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Alex Johnson",
      title: "CEO & Founder",
      image: "/assets/AboutImg/leaders/1.avif",
      bio: "20+ years in technology leadership with expertise in digital transformation and enterprise solutions.",
      quote: "Technology should solve real problems, not create new ones.",
    },
    {
      name: "Sarah Chen",
      title: "CTO",
      image: "/assets/AboutImg/leaders/1.avif",
      bio: "Former lead architect at major tech firms with deep expertise in cloud computing and AI.",
      quote: "The best technology is invisible - it just works perfectly.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-16 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our <span className="text-[#00f0ff]">Leadership</span>
          </h2>
          <div className="h-1 bg-gradient-to-r from-[#00f0ff] via-[#0066ff] to-transparent rounded-full w-32 mx-auto mb-6"></div>
          <p className="text-[#b0b0ff] max-w-2xl mx-auto">
            Visionary leaders driving our company's success and innovation
          </p>
        </MotionDiv>

        <div className="grid md:grid-cols-2 gap-12">
          {leaders.map((leader, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#12121a] rounded-xl overflow-hidden border border-[#00f0ff]/20 hover:border-[#00f0ff]/40 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={300}
                    height={400}
                    unoptimized
                    className="w-full h-full object-cover min-h-64"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent"></div>
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-[#00f0ff] mb-4">{leader.title}</p>
                  <p className="text-[#b0b0ff] mb-6">{leader.bio}</p>
                  <div className="border-l-2 border-[#00f0ff] pl-4 italic text-[#e0e0ff]">
                    "{leader.quote}"
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
