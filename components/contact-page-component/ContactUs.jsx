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
  FiMap,
} from "react-icons/fi";
import dynamic from "next/dynamic";

// Dynamically import the map component with no SSR
const ClientSideMap = dynamic(() => import("./ClientSideMap"), {
  ssr: false,
  loading: () => (
    <div className="h-64 sm:h-72 md:h-80 lg:h-96 w-full bg-gray-100 flex items-center justify-center rounded-lg">
      <p className="text-gray-600 text-sm sm:text-base">Loading map...</p>
    </div>
  ),
});

const officePosition = [23.836236, 90.358672];
const officeAddress =
  "Plot No 470, Road No 06 (Old 29), DOHS Mirpur, Dhaka Division, Bangladesh";

const ContactUs = () => {
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
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Contact-Us.png')" }}
    >
      {/* Semi-transparent overlay for better readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-gray-900 tracking-tight px-2">
            CONTACT US
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto px-4">
            We work with ambitious leaders who want to define the future, not hide from it.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 order-2 lg:order-1"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Send us a message</h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
              {/* Name Field */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all placeholder-gray-500 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-gray-800 font-semibold text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all placeholder-gray-500 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-1 sm:space-y-2">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold text-sm sm:text-base"
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
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none placeholder-gray-500 text-sm sm:text-base"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base"
              >
                <span className="tracking-wide">
                  {isSubmitting ? "SENDING..." : "LET'S GET TO WORK"}
                </span>
                <FiSend className="ml-1 sm:ml-2" size={16} />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-gray-200 order-1 lg:order-2"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-gray-900">Contact Information</h2>

            <div className="space-y-6 sm:space-y-8">
              {/* Address */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start">
                  <FiMapPin className="text-gray-700 mt-0.5 sm:mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-800">Our Address</h3>
                    <p className="text-gray-600 leading-relaxed mt-1 text-sm sm:text-base">
                      Plot No 470, Road No 06 (Old 29),<br />
                      DOHS Mirpur, Dhaka Division,<br />
                      Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start">
                  <FiPhone className="text-gray-700 mt-0.5 sm:mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-800">Phone Number</h3>
                    <p className="text-gray-800 text-base sm:text-lg font-medium mt-1">+880 1846-937397</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start">
                  <FiMail className="text-gray-700 mt-0.5 sm:mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-800">Email Address</h3>
                    <p className="text-gray-800 text-base sm:text-lg font-medium mt-1">info@a2itltd.com</p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start">
                  <FiClock className="text-gray-700 mt-0.5 sm:mt-1 mr-3 flex-shrink-0" size={18} />
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-800">Working Hours</h3>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">
                      Saturday - Friday: 10AM - 7PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-300">
              <p className="text-gray-700 text-center italic font-medium text-sm sm:text-base">
                "We work with ambitious leaders who want to define the future, not hide from it."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 flex items-center">
              <FiMap className="mr-2 sm:mr-3" />
              Find Us on Map
            </h2>
            <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden">
              <ClientSideMap
                position={position}
                setPosition={setPosition}
                officeAddress={officeAddress}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;