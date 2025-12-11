"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiClock,
} from "react-icons/fi";

const officePosition = [23.836236, 90.358672];
const officeAddress =
  "Plot No 470, Road No 06 (Old 29), DOHS Mirpur, Dhaka Division, Bangladesh";

const HomePageContactUs = () => {
  const [position, setPosition] = useState(officePosition);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { name, email, message, phone: formData.phone };

    try {
      const res = await fetch("https://a2-it-website-backend.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contact form...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/Contact-Us.png')",
      }}
    >
      {/* Fixed background container */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Contact-Us.png')" }}
      />
      
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 tracking-tight">
            CONTACT US
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We work with ambitious leaders who want to define the future, not hide from it.
          </p>
        </motion.div>

        {/* Contact Content - Swapped positions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Right side: Contact Information (plain text, no card) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiMapPin className="text-gray-700 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Our Address</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Plot No 470, Road No 06 (Old 29),<br />
                        DOHS Mirpur, Dhaka Division,<br />
                        Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiPhone className="text-gray-700 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Phone Number</h3>
                      <p className="text-gray-800 text-2xl font-semibold">+880 1846-937397</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiMail className="text-gray-700 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Email Address</h3>
                      <p className="text-gray-800 text-2xl font-semibold">info@a2itltd.com</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FiClock className="text-gray-700 mt-1 mr-4 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-2">Working Hours</h3>
                      <p className="text-gray-700 text-lg">
                        Saturday - Friday: 10AM - 7PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="pt-8">
              <p className="text-gray-800 text-xl italic font-medium">
                "We work with ambitious leaders who want to define the future, not hide from it."
              </p>
            </div>
          </motion.div>

          {/* Left side: Contact Form (card styling) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold text-lg"
                >
                  <FiUser className="inline mr-2" />
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Write your name"
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-gray-800 font-semibold text-lg"
                >
                  <FiPhone className="inline mr-2" />
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+880 1846-XXXXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold text-lg"
                >
                  <FiMail className="inline mr-2" />
                  Email address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@gmail.com"
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all placeholder-gray-500"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold text-lg"
                >
                  <FiMessageSquare className="inline mr-2" />
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none placeholder-gray-500"
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white font-semibold py-4 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 mt-8 text-lg"
              >
                <span className="tracking-wide">{isSubmitting ? "SENDING..." : "LET'S GET TO WORK"}</span>
                <FiSend className="ml-2" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContactUs;