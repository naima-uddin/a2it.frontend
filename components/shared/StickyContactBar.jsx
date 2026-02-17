"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { RiChatSmile2Fill } from "react-icons/ri";


// StickyContactBar: separate component for right-side contact icons (desktop)
// - shows label on hover for each icon
// - click behaviors: tel:, mailto:, wa.me
// - icon tile bg = blue-600, hover label bg = slate-700
const StickyContactBar = ({
  phone = "+1 (808) 301-5039",
  email = "info@a2itllc.com",
  whatsapp = "+1 (808) 301-5039",
  message = "Hello! I have a query.",
}) => {
  const sanitize = (v = "") => String(v).replace(/\D/g, "");
  const callHref = `tel:${sanitize(phone)}`;
  const mailHref = `mailto:${email}`;
  const waHref = `https://wa.me/${sanitize(whatsapp)}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Desktop - vertical sticky bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col items-end gap-1">
        {/* Call */}
        <a href={callHref} aria-label={`Call ${phone}`} title={`Call ${phone}`} className="group flex items-center">
          <span className="mr-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-slate-700 text-white text-sm px-3 py-3.5  whitespace-nowrap">
            {phone}
          </span>
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center  shadow-md hover:scale-105 transition">
            <FaPhoneAlt className="w-5 h-5" />
          </div>
        </a>

        {/* Email */}
        <a href={mailHref} aria-label={`Email ${email}`} title={`Email ${email}`} className="group flex items-center">
          <span className="mr-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-slate-700 text-white text-sm px-3 py-3.5  whitespace-nowrap">
            Send email
          </span>
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center  shadow-md hover:scale-105 transition">
            <FaEnvelope className="w-5 h-5" />
          </div>
        </a>

        {/* WhatsApp Chat */}
        <a href={waHref} target="_blank" rel="noopener noreferrer" aria-label={`Chat on WhatsApp (${whatsapp})`} title={`Chat on WhatsApp (${whatsapp})`} className="group flex items-center">
          <span className="mr-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-200 bg-slate-700 text-white text-sm px-3 py-3.5  whitespace-nowrap">
            Chat with us
          </span>
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center  shadow-md hover:scale-105 transition">
            <RiChatSmile2Fill   className="w-5 h-5" />
          </div>
        </a>
      </div>
    </>
  );
};

export default StickyContactBar;
