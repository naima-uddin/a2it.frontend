"use client";
import React from "react";
import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie, FaLock, FaEye, FaExchangeAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 pt-24 pb-16 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl shadow-lg mb-6">
            <FaShieldAlt className="text-4xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 bg-blue-50 rounded-full border border-blue-100">
            <span className="text-sm font-medium text-blue-600">Last updated:</span>
            <span className="text-sm text-gray-600">
              {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <FaLock className="text-xl text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Your Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  At <span className="font-semibold text-blue-600">A2It Ltd</span>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="leading-relaxed">
                  By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with our policies and practices, please do not use our website.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Information Collection */}
          <section className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-50 rounded-lg">
                <FaDatabase className="text-2xl text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">We collect various types of information to provide and improve our services:</p>
              <ul className="space-y-3">
                {[
                  "Personal identification information",
                  "Browser and device information",
                  "Usage data and analytics",
                  "Cookies and tracking data",
                  "Communication data"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Use of Information */}
          <section className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-cyan-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-50 rounded-lg">
                <FaUserLock className="text-2xl text-cyan-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>
            <div className="space-y-3">
              {[
                "Service provision and maintenance",
                "Communication and notifications",
                "Website improvement and analytics",
                "Customer support and assistance",
                "Security and fraud prevention"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Cookies */}
          <section className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <FaCookie className="text-2xl text-indigo-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Cookies & Tracking Technologies</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior.
              </p>
              <div className="p-4 bg-indigo-50 rounded-lg">
                <p className="text-sm text-indigo-700">
                  <strong>Note:</strong> You can control cookie settings through your browser. However, disabling cookies may limit certain website functionalities.
                </p>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-50 rounded-lg">
                <FaLock className="text-2xl text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Data Security Measures</h2>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700">
                We implement industry-standard security measures to protect your data:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["Encryption", "Access Controls", "Regular Audits", "Secure Storage"].map((item, index) => (
                  <div key={index} className="text-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium text-green-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Full Width Sections */}
        <div className="space-y-8">
          {/* Data Sharing */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-50 rounded-lg">
                <FaExchangeAlt className="text-2xl text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Data Sharing & Disclosure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-purple-50 rounded-xl">
                <h3 className="font-semibold text-purple-700 mb-3">When We Share</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    With service providers and partners
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    For legal compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    Business transfers or mergers
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-gray-700 mb-3">Our Commitment</h3>
                <p className="text-gray-700">
                  We never sell your personal information. We only share data when necessary and with appropriate safeguards in place to protect your privacy.
                </p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-50 rounded-lg">
                <FaEye className="text-2xl text-amber-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Data Protection Rights</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Right to Access", desc: "Access your personal data" },
                { title: "Right to Rectify", desc: "Correct inaccurate data" },
                { title: "Right to Erase", desc: "Request data deletion" },
                { title: "Right to Restrict", desc: "Limit data processing" },
                { title: "Right to Object", desc: "Object to processing" },
                { title: "Right to Portability", desc: "Data transferability" }
              ].map((right, index) => (
                <div key={index} className="p-5 bg-amber-50 rounded-xl border border-amber-100">
                  <h3 className="font-bold text-amber-700 mb-2">{right.title}</h3>
                  <p className="text-sm text-gray-700">{right.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Our Privacy Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-5 bg-white rounded-xl shadow-sm">
                <div className="inline-flex p-3 bg-blue-100 rounded-full mb-3">
                  <FaEnvelope className="text-xl text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@a2it.com" className="text-blue-600 hover:underline">info@a2it.com</a>
              </div>
              <div className="text-center p-5 bg-white rounded-xl shadow-sm">
                <div className="inline-flex p-3 bg-green-100 rounded-full mb-3">
                  <FaPhone className="text-xl text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a href="tel:+8801846937397" className="text-green-600 hover:underline">+880 1846-937397</a>
              </div>
              <div className="text-center p-5 bg-white rounded-xl shadow-sm">
                <div className="inline-flex p-3 bg-purple-100 rounded-full mb-3">
                  <FaMapMarkerAlt className="text-xl text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                <p className="text-sm text-gray-700">Plot No 470, Road No 06, DOHS Mirpur, Dhaka</p>
              </div>
              <div className="text-center p-5 bg-white rounded-xl shadow-sm">
                <div className="inline-flex p-3 bg-cyan-100 rounded-full mb-3">
                  <FaEye className="text-xl text-cyan-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Website Contact</h3>
                <Link href="/contact" className="text-cyan-600 hover:underline font-medium">
                  Contact Form →
                </Link>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-4">
                <span className="text-sm font-medium text-gray-700">Policy Version</span>
                <span className="text-sm bg-white px-3 py-1 rounded-full font-semibold text-blue-600">1.0</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. 
                Significant changes will be communicated through our website or direct notification when appropriate.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;