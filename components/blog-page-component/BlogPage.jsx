"use client";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  FiSearch,
  FiClock,
  FiCalendar,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Particle background component
const Particles = ({ count = 30 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: 0,
          }}
          animate={{
            x: [null, Math.random() * 100],
            y: [null, Math.random() * 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="absolute w-1 h-1 bg-[#00f0ff] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const categories = [
    { name: "All", icon: "🌐" },
    { name: "Web & Mobile App Designing & Development", icon: "📱" },
    { name: "eCommerce Development Solutions", icon: "🛒" },
    { name: "ERP System Development", icon: "📊" },
    { name: "SEO / SEM / PPC / Social Media Marketing", icon: "🔍" },
    { name: "Server and Hosting Services", icon: "🖥️" },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/extended_blogPosts.json");
        const data = await response.json();
        setPosts(data);
        setFeaturedPost(data.find((post) => post.featured));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory && !post.featured;
  });

  // Floating orb animation
  const FloatingOrb = ({ delay = 0 }) => (
    <motion.div
      initial={{ y: 0, x: 0 }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 5,
        delay,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="absolute rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0066ff] opacity-20 blur-xl"
      style={{
        width: `${100 + Math.random() * 200}px`,
        height: `${100 + Math.random() * 200}px`,
      }}
    />
  );

  return (
    <div
      className="min-h-screen bg-[#0a0a12] text-[#e0e0ff] overflow-x-hidden"
      ref={containerRef}
    >
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <div
            className="w-full h-[30vh] sm:h-[40vh] md:h-[40vh] lg:h-[50vh] xl:h-[65vh] bg-[#373737] bg-opacity-90"
            style={{
              backgroundImage: "url(/assets/BlogImg/blogBg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12]/0 via-[#0a0a12]/70 to-[#0a0a12] z-10" />
        </motion.div>

        {/* Floating orbs */}
        <FloatingOrb delay={0} style={{ left: "10%", top: "20%" }} />
        <FloatingOrb delay={1} style={{ right: "15%", top: "40%" }} />
        <FloatingOrb delay={2} style={{ left: "30%", bottom: "20%" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] to-[#0066ff]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Tech Insights Blog
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-[#b0b0ff] max-w-3xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Treasure of Web & Mobile app design and development, Digital
              Marketing, SEO, Social Media Marketing, Graphics Design and
              Business Blogs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              className="inline-block"
            >
              <button
                className="px-8 py-3 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-medium rounded-full shadow-lg hover:shadow-xl hover:shadow-[#00f0ff]/30 transition-all mb-10"
                onClick={() =>
                  document
                    .getElementById("blog-content")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Articles
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Featured Post with 3D Tilt Effect */}
      {featuredPost && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] rounded-2xl opacity-20 blur-xl" />
            <div className="relative bg-[#12121a] rounded-2xl overflow-hidden shadow-2xl">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">
                        {
                          categories.find(
                            (c) => c.name === featuredPost.category
                          )?.icon
                        }
                      </span>
                      <span className="inline-block px-4 py-1 text-sm font-semibold bg-[#00f0ff] text-[#0a0a12] rounded-full">
                        Featured Post
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-8 md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#b0b0ff] text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center text-[#b0b0ff] text-sm mb-6">
                    <FiCalendar className="mr-2" />
                    <span className="mr-4">
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <FiClock className="mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <motion.button
                    onClick={() =>
                      featuredPost.externalUrl
                        ? window.open(featuredPost.externalUrl, "_blank")
                        : router.push(`/blog/${featuredPost.id}`)
                    }
                    className="flex items-center text-[#00f0ff] font-medium hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    {featuredPost.externalUrl
                      ? "Read on original site"
                      : "Read full article"}
                    <motion.span
                      className="ml-2 inline-block"
                      whileHover={{ rotate: 90 }}
                    >
                      {featuredPost.externalUrl ? (
                        <FiExternalLink className="group-hover:rotate-45 transition-transform" />
                      ) : (
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                      )}
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Blog Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        {/* Animated grid background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        </div>

        {/* Posts Grid - Unique Image Reveal */}
        {!isLoading && filteredPosts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative h-80 rounded-2xl overflow-hidden group"
                whileHover="hover"
              >
                {/* Image Layer (Always Visible) */}
                <motion.div
                  className="absolute inset-0 z-0"
                  variants={{
                    hover: { filter: "brightness(0.4)" },
                  }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>

                {/* Content Layer (Appears on Hover) */}
                <motion.div
                  className="absolute inset-0 z-10 p-6 flex flex-col justify-end opacity-0"
                  variants={{
                    hover: {
                      opacity: 1,
                      transition: { delay: 0.1 },
                    },
                  }}
                >
                  {/* Category Badge with Animation */}
                  <motion.div
                    className="mb-3"
                    initial={{ x: -20 }}
                    variants={{
                      hover: { x: 0 },
                    }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#00f0ff] text-[#0a0a12]">
                      {categories.find((c) => c.name === post.category)?.icon}
                      <span className="ml-2">
                        {post.category.split(" ")[0]}
                      </span>
                    </span>
                  </motion.div>

                  {/* Title with Staggered Letters */}
                  <motion.h3
                    className="text-xl font-bold text-white mb-3"
                    variants={{
                      hover: {
                        transition: { staggerChildren: 0.03 },
                      },
                    }}
                  >
                    {post.title.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        variants={{
                          hover: {
                            y: [10, 0],
                            opacity: [0, 1],
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.h3>

                  {/* Excerpt with Fade-in */}
                  <motion.p
                    className="text-[#b0b0ff] mb-4 line-clamp-3"
                    variants={{
                      hover: {
                        opacity: [0, 1],
                        y: [10, 0],
                      },
                    }}
                  >
                    {post.excerpt}
                  </motion.p>

                  {/* Metadata with Slide-up */}
                  <motion.div
                    className="flex items-center justify-between mt-auto pt-3 border-t border-[#ffffff20]"
                    variants={{
                      hover: {
                        opacity: [0, 1],
                        y: [20, 0],
                      },
                    }}
                  >
                    <div className="flex items-center text-sm text-[#b0b0ff]">
                      <FiCalendar className="mr-2" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <motion.button
                      onClick={() =>
                        post.externalUrl
                          ? window.open(post.externalUrl, "_blank")
                          : router.push(`/blog/${post.id}`)
                      }
                      className="flex items-center text-white hover:text-[#00f0ff] transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {post.externalUrl ? "Read" : "Read more"}
                      <FiArrowRight className="ml-1" />
                    </motion.button>
                  </motion.div>
                </motion.div>

                {/* Hover Indicator (Animated Border) */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                  variants={{
                    hover: {
                      borderColor: "#00f0ff",
                      transition: { duration: 0.3 },
                    },
                  }}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* No Results - Animated Empty State */}
        {!isLoading && filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-[#12121a] rounded-full flex items-center justify-center border-2 border-[#00f0ff]">
                <FiSearch className="text-[#00f0ff] text-3xl" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#00f0ff] pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <h3 className="text-2xl font-medium text-white mb-3">
              No articles found
            </h3>
            <p className="text-[#b0b0ff] mb-6 max-w-md mx-auto">
              We couldn't find any articles matching your search.
            </p>
            <motion.button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="px-6 py-3 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-medium rounded-lg hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Reset filters
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Newsletter CTA - Interactive */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 via-[#0a0a12]/70 to-[#0a0a12] z-0" />

        {/* Floating particles */}
        <Particles count={15} />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              whileInView={{
                backgroundSize: "100% 5px",
                transition: { duration: 1 },
              }}
              style={{
                backgroundImage:
                  "linear-gradient(transparent 60%, #00f0ff 40%)",
                backgroundSize: "0% 5px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left bottom",
                display: "inline-block",
              }}
            >
              Stay Ahead with Our{" "}
              <span className="text-[#00f0ff]">Insights</span>
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              whileInView={{
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              }}
              initial={{ opacity: 0 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} className="flex-grow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-3 bg-[#12121a] border border-[#00f0ff]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00f0ff] text-white placeholder-[#6b6b6b] transition-all"
                />
              </motion.div>

              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-medium rounded-xl hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all relative overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  background: "linear-gradient(45deg, #0066ff, #00f0ff)",
                }}
                whileTap={{ scale: 0.97 }}
                initial={{
                  background: "linear-gradient(to right, #00f0ff, #0066ff)",
                }}
              >
                <Link href="/contact">
                
                <span className="relative z-10">Send Message</span>
                </Link>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00f0ff] opacity-0 hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            </motion.div>

            <p className="text-xs text-[#6b6b6b] mt-4">
              We respect your privacy. No spam, ever.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
