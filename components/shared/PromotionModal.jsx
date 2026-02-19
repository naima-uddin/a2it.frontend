"use client";

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import toast from 'react-hot-toast';

const PromotionModal = ({ isOpen, onClose, title, subtitle, buttonText = "SUBMIT NOW", selectedPackage = "" }) => {
  const [mounted, setMounted] = useState(false);
  const [packageValue, setPackageValue] = useState(selectedPackage);

  useEffect(() => {
    if (isOpen) {
      setPackageValue(selectedPackage);
    }
  }, [isOpen, selectedPackage]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const res = await fetch("https://a2-it-backend.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          package: data.package || "",
          message: data.message || "Customer wants to start a project!",
          type: "promotion_modal"
        }),
      });

      const result = await res.json();
      if (result.success) {
        toast.success('Message sent successfully! We\'ll contact you shortly.', {
          duration: 4000,
          style: {
            background: '#10b981',
            color: '#fff',
            padding: '16px',
          },
        });
        onClose();
        e.target.reset();
      } else {
        toast.error('Failed to send message. Please try again.', {
          duration: 4000,
        });
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong. Please try again.', {
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black/60 p-3 md:p-6 animate-fadeIn"
      style={{ zIndex: 999999, position: 'fixed' }}
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-scaleIn relative max-h-[85vh] md:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center transition-all z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-4 md:p-8">
          {/* Title */}
          <h2 className="text-xl md:text-3xl font-bold text-center mb-2 md:mb-3" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-center text-gray-700 font-medium text-xs md:text-base mb-4 md:mb-6">
            {subtitle}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div>
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name *"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder:text-gray-500 text-sm md:text-base"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address *"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder:text-gray-500 text-sm md:text-base"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone Number *"
                required
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder:text-gray-500 text-sm md:text-base"
              />
            </div>

            <div>
              <label htmlFor="package" className="sr-only">Select Package</label>
              <select
                id="package"
                name="package"
                value={packageValue}
                onChange={(e) => setPackageValue(e.target.value)}
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-800 placeholder:text-gray-500 text-sm md:text-base bg-white"
              >
                <option value="" disabled>Select Package Type</option>
                <option value="Special">Special</option>
                <option value="Plus">Plus</option>
                <option value="Gold">Gold</option>
                <option value="Platinum">Platinum</option>
                <option value="The Boss">The Boss</option>
                <option value="Diamond">Diamond</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="To help us understand better, enter a brief description about your project."
                rows={3}
                className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900 placeholder:text-gray-500 resize-none text-sm md:text-base"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-2.5 md:py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ fontFamily: "var(--font-oswald), sans-serif" }}
            >
              {isSubmitting ? "SENDING..." : buttonText}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default PromotionModal;
