"use client";
import React from "react";
import { 
  FaFileContract, 
  FaGavel, 
  FaUserCheck, 
  FaExclamationTriangle, 
  FaHandshake, 
  FaBalanceScale,
  FaShieldAlt,
  FaLock,
  FaClipboardCheck,
  FaArrowRight,
  FaQuestionCircle
} from "react-icons/fa";
import Link from "next/link";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-800 pt-24 pb-16 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
              <FaFileContract className="text-4xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                Terms of Service
              </h1>
              <div className="flex items-center justify-center gap-3 text-sm">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                  Effective Date
                </span>
                <span className="text-gray-600">
                  {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full border border-blue-100 shadow-sm mb-6">
              <p className="text-gray-700 font-medium">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>

        {/* Introduction Banner */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 md:p-10 text-white shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Welcome to A2It Ltd
                </h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                </p>
              </div>
              <div className="flex-shrink-0">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <p className="text-sm font-medium">👋 Ready to proceed?</p>
                  <p className="text-xs text-blue-100">Your agreement begins here</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left Column - Core Terms */}
          <div className="space-y-8">
            {/* Agreement to Terms */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-green-50 rounded-xl">
                  <FaHandshake className="text-2xl text-green-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Agreement to Terms
                  </h2>
                  <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700 pl-4 border-l-2 border-green-100">
                <p>By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
                  <p className="text-sm font-medium text-yellow-800">
                    <span className="font-bold">Important:</span> If you do not agree with any part of these terms, you must not use our website or services.
                  </p>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-purple-50 rounded-xl">
                  <FaLock className="text-2xl text-purple-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Intellectual Property
                  </h2>
                  <div className="w-12 h-1 bg-purple-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>All content on this website is the property of A2It Ltd or its content suppliers and is protected by international copyright laws.</p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-purple-700">📄 Copyright</span>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm font-medium text-purple-700">🎨 Trademarks</span>
                  </div>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <FaUserCheck className="text-2xl text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    User Responsibilities
                  </h2>
                  <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                {[
                  "Provide accurate and complete information",
                  "Maintain account confidentiality",
                  "Comply with all applicable laws",
                  "Respect other users and our services"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Governing Law */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-indigo-50 rounded-xl">
                  <FaShieldAlt className="text-2xl text-indigo-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Governing Law
                  </h2>
                  <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>These Terms shall be governed and construed in accordance with the laws of Bangladesh.</p>
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <p className="text-sm font-medium text-indigo-700">
                    <span className="font-bold">Jurisdiction:</span> Any disputes will be subject to the exclusive jurisdiction of the courts of Bangladesh.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Important Terms */}
          <div className="space-y-8">
            {/* Prohibited Activities */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-50 rounded-xl">
                  <FaExclamationTriangle className="text-2xl text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Prohibited Activities
                  </h2>
                  <div className="w-12 h-1 bg-red-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p className="text-sm text-gray-600 mb-4">You may not use our website to:</p>
                {[
                  "Violate laws or regulations",
                  "Harass or harm others",
                  "Submit false information",
                  "Upload malicious code",
                  "Engage in spamming",
                  "Gain unauthorized access"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Termination */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-amber-50 rounded-xl">
                  <FaGavel className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Termination
                  </h2>
                  <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We may terminate your access immediately, without prior notice, if you breach these Terms.</p>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                  <p className="text-sm text-amber-800">
                    <span className="font-bold">Note:</span> Upon termination, your right to use the website will immediately cease.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-cyan-50 rounded-xl">
                  <FaBalanceScale className="text-2xl text-cyan-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Limitation of Liability
                  </h2>
                  <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>A2It Ltd shall not be liable for any indirect, incidental, special, consequential or punitive damages.</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-cyan-50 rounded-lg">
                    <span className="text-xs font-medium text-cyan-700">No liability for:</span>
                    <p className="text-sm text-gray-700 mt-1">Loss of profits</p>
                  </div>
                  <div className="text-center p-3 bg-cyan-50 rounded-lg">
                    <span className="text-xs font-medium text-cyan-700">No liability for:</span>
                    <p className="text-sm text-gray-700 mt-1">Data loss</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-teal-50 rounded-xl">
                  <FaClipboardCheck className="text-2xl text-teal-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    Changes to Terms
                  </h2>
                  <div className="w-12 h-1 bg-teal-500 rounded-full"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We reserve the right to modify or replace these Terms at any time at our sole discretion.</p>
                <div className="p-4 bg-teal-50 rounded-lg">
                  <p className="text-sm font-medium text-teal-700">
                    <span className="font-bold">Continuation:</span> By continuing to use our website after revisions, you agree to the updated terms.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Quick Summary Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Points Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex p-3 bg-blue-100 rounded-full mb-4">
                  <FaUserCheck className="text-xl text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Your Responsibilities</h3>
                <p className="text-sm text-gray-600">Use services responsibly and comply with our guidelines</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex p-3 bg-green-100 rounded-full mb-4">
                  <FaLock className="text-xl text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Content Protection</h3>
                <p className="text-sm text-gray-600">All website content is protected by copyright laws</p>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="inline-flex p-3 bg-purple-100 rounded-full mb-4">
                  <FaShieldAlt className="text-xl text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Legal Framework</h3>
                <p className="text-sm text-gray-600">Terms governed by laws of Bangladesh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Action Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-10 text-white shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <FaQuestionCircle className="text-2xl text-blue-200" />
                <h2 className="text-2xl font-bold">Need Clarification?</h2>
              </div>
              <p className="text-blue-100 text-lg mb-6">
                If you have any questions about these Terms of Service, our team is ready to help you understand your rights and responsibilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">24-48 hour response time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">Legal experts available</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Support
                <FaArrowRight className="text-sm" />
              </Link>
              <a 
                href="mailto:info@a2it.com" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
              >
                Email Legal Team
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-blue-500/30">
            <p className="text-blue-200 text-sm text-center">
              By using our website, you acknowledge that you have read and agree to these Terms of Service.
            </p>
          </div>
        </section>
      </div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default TermsOfService;