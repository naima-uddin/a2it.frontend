"use client";
import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Target,
  Code,
  Database,
  Smartphone,
} from "lucide-react";
// import Naima from "../../assets/EmployeeSection/naima.jpg";
// import Naima from "../../assets/EmployeeSection/naima.jpg.jpeg";
// import Borsha from "../../assets/EmployeeSection/borsha.jpg";
// import Ashik from "../../assets/EmployeeSection/ashik.jpg";
// import web from "../../assets/EmployeeSection/web.jpg";
// import Lisa from "../../assets/EmployeeSection/naima.jpg";
// import James from "../../assets/EmployeeSection/borsha.jpg";
// import Anna from "../../assets/EmployeeSection/naima.jpg";
// import Robert from "../../assets/EmployeeSection/borsha.jpg";

export default function EmployeeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "NAIMA UDDIN",
      number: "01",
      position: "Full Stack Developer",
      image: "/assets/EmployeeSection/naima.jpg",
      stats: {
        projects: 45,
        experience: "5 Years",
        rating: "4.9/5",
      },
      description:
        "Expert in React, Node.js, and cloud architecture with a passion for scalable solutions",
      achievements: [
        "AWS Certified Solutions Architect",
        "Led 15+ Successful Projects",
        "Tech Innovation Award Winner",
      ],
      skills: ["React", "Node.js", "AWS", "MongoDB"],
    },
    {
      id: 2,
      name: "BORSHA",
      number: "02",
      position: "Digital Marketing",
      image: "/assets/EmployeeSection/borsha.jpg",
      stats: {
        projects: 38,
        experience: "6 Years",
        rating: "4.8/5",
      },
      description:
        "Kubernetes and Docker specialist focused on CI/CD pipeline optimization",
      achievements: [
        "Kubernetes Certified Administrator",
        "Reduced Deployment Time by 70%",
        "DevOps Excellence Award",
      ],
      skills: ["Kubernetes", "Docker", "Jenkins", "Terraform"],
    },
    {
      id: 3,
      name: "Ashik RODRIGUEZ",
      number: "03",
      position: "UI/UX Designer",
      image: "/assets/EmployeeSection/ashik.jpg",
      stats: {
        projects: 52,
        experience: "4 Years",
        rating: "4.9/5",
      },
      description:
        "Creative designer specializing in user-centered design and modern interfaces",
      achievements: [
        "Adobe Certified Expert",
        "Design System Creator",
        "UX Innovation Award",
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      id: 4,
      name: "web THOMPSON",
      number: "04",
      position: "Backend Developer",
      image: "/assets/EmployeeSection/borsha.jpg", // Use imported image
      stats: {
        projects: 41,
        experience: "7 Years",
        rating: "4.8/5",
      },
      description:
        "Python and Java expert with extensive experience in microservices architecture",
      achievements: [
        "Oracle Java Certified Professional",
        "Microservices Architecture Expert",
        "Performance Optimization Specialist",
      ],
      skills: ["Python", "Java", "Spring Boot", "PostgreSQL"],
    },
    {
      id: 5,
      name: "LISA WANG",
      number: "05",
      position: "Mobile Developer",
      image: "/assets/EmployeeSection/naima.jpg", // Use imported image
      stats: {
        projects: 29,
        experience: "4 Years",
        rating: "4.7/5",
      },
      description:
        "React Native and Flutter specialist creating cross-platform mobile solutions",
      achievements: [
        "Google Flutter Certified",
        "App Store Featured Developer",
        "Mobile Innovation Award",
      ],
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      id: 6,
      name: "JAMES WILSON",
      number: "06",
      position: "Data Scientist",
      image: "/assets/EmployeeSection/ashik.jpg", // Use imported image
      stats: {
        projects: 33,
        experience: "5 Years",
        rating: "4.9/5",
      },
      description:
        "Machine learning expert specializing in predictive analytics and AI solutions",
      achievements: [
        "TensorFlow Certified Developer",
        "Published 10+ Research Papers",
        "AI Excellence Award",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "SQL"],
    },
    {
      id: 7,
      name: "ANNA KOWALSKI",
      number: "07",
      position: "QA Engineer",
      image: "/assets/EmployeeSection/borsha.jpg", // Use imported image
      stats: {
        projects: 47,
        experience: "6 Years",
        rating: "4.8/5",
      },
      description:
        "Automation testing expert ensuring quality and reliability across all platforms",
      achievements: [
        "ISTQB Advanced Certified",
        "Test Automation Framework Creator",
        "Quality Assurance Excellence Award",
      ],
      skills: ["Selenium", "Cypress", "Jest", "TestNG"],
    },
    {
      id: 8,
      name: "ROBERT GARCIA",
      number: "08",
      position: "Cybersecurity Specialist",
      image: "/assets/EmployeeSection/naima.jpg", // Use imported image
      stats: {
        projects: 25,
        experience: "8 Years",
        rating: "4.9/5",
      },
      description:
        "Security expert protecting applications and infrastructure from cyber threats",
      achievements: [
        "CISSP Certified",
        "Prevented 50+ Security Breaches",
        "Cybersecurity Excellence Award",
      ],
      skills: ["Penetration Testing", "OWASP", "Firewall", "Encryption"],
    },
  ];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, teamMembers.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      result.push({ ...teamMembers[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section className="py-20 bg-[#0a0a12] overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#00f0ff] mb-4">
            MEET OUR EXPERT TEAM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] mx-auto mb-6"></div>
          <p className="text-xl text-[#b0b0ff] max-w-2xl mx-auto leading-relaxed">
            Meet our talented team of developers, designers, and tech experts
            who bring innovation, expertise, and dedication to every project
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-200 text-[#0a0a12] shadow-xl rounded-full w-14 h-14 border-0 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-200 text-[#0a0a12] shadow-xl rounded-full w-14 h-14 border-0 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Team Member Cards */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {getVisibleMembers().map((member, index) => (
              <div
                key={`${member.id}-${currentIndex}`}
                className={`group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-[#12121a] transform hover:scale-100 rounded-lg border border-[#00f0ff]/20 ${
                  index === 1 ? "md:scale-110 z-10" : "md:scale-95"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-[#0a0a12]">
                        {member.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/90 via-[#0a0a12]/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-[#e0e0ff] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-[#00f0ff]" />
                          <span className="text-sm font-medium">
                            {member.position}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-sm text-[#b0b0ff] mb-4 leading-relaxed">
                          {member.description}
                        </p>
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#00f0ff]">
                              {member.stats.projects}
                            </div>
                            <div className="text-xs text-[#b0b0ff]">
                              Projects
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#00f0ff]">
                              {member.stats.experience}
                            </div>
                            <div className="text-xs text-[#b0b0ff]">
                              Experience
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#00f0ff]">
                              {member.stats.rating}
                            </div>
                            <div className="text-xs text-[#b0b0ff]">Rating</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {member.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-[#0066ff] text-white px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {member.achievements
                            .slice(0, 2)
                            .map((achievement, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-[#12121a] text-[#e0e0ff] px-2 py-1 rounded-full border border-[#00f0ff]/20"
                              >
                                {achievement}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-[#e0e0ff] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#b0b0ff] font-medium">
                      {member.position}
                    </p>
                    <div className="flex justify-center gap-2 mt-3">
                      <div className="p-2 bg-[#00f0ff] rounded-full">
                        <Code className="w-4 h-4 text-[#0a0a12]" />
                      </div>
                      <div className="p-2 bg-[#0066ff] rounded-full">
                        <Database className="w-4 h-4 text-white" />
                      </div>
                      <div className="p-2 bg-[#12121a] rounded-full border border-[#00f0ff]/20">
                        <Smartphone className="w-4 h-4 text-[#00f0ff]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#00f0ff] scale-125"
                    : "bg-[#b0b0ff] hover:bg-[#00f0ff]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
