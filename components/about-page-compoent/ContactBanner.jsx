import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

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

const ContactBanner = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gradient-to-r from-[#00f0ff]/10 to-[#0066ff]/10">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#12121a] rounded-2xl p-8 md:p-12 shadow-xl border border-[#00f0ff]/20"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-[#00f0ff]">Transform</span> Your
                Business?
              </h2>
              <p className="text-[#b0b0ff] mb-6 max-w-lg">
                Get in touch with our team to discuss how we can help you
                achieve your technology goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <FiMail className="text-[#00f0ff] mt-1" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-[#b0b0ff]">info@a2itltd.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiPhone className="text-[#00f0ff] mt-1" />
                  <div>
                    <h4 className="font-medium">Call Us</h4>
                    <p className="text-[#b0b0ff]">+880 1846-937397</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <FiMapPin className="text-[#00f0ff] mt-1" />
                  <div>
                    <h4 className="font-medium">Visit Us</h4>
                    <p className="text-[#b0b0ff]">
                      Plot No 470 Road No 06 (Old 29) DOHS Mirpur, Dhaka
                      Division, Bangladesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0a12] rounded-xl p-8 border border-[#00f0ff]/20">
              <form className="space-y-6">
                <div>
                  <label className="block text-[#b0b0ff] mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-[#12121a] border border-[#00f0ff]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                  />
                </div>
                <div>
                  <label className="block text-[#b0b0ff] mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-[#12121a] border border-[#00f0ff]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                  />
                </div>
                <div>
                  <label className="block text-[#b0b0ff] mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-[#12121a] border border-[#00f0ff]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#00f0ff]"
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-medium py-3 rounded-lg hover:shadow-lg hover:shadow-[#00f0ff]/30 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default ContactBanner;
