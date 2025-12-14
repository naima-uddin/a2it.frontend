"use client"
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full relative">
      <Image
        src="/bannerImg.jpg"
        alt="Banner"
        width={1920}
        height={1080}
        className="w-full h-[90vh] object-cover "
        
      />
      
      {/* Content Container - Positioned at bottom-left with padding */}
      <div className="absolute bottom-26 left-10 md:left-20 lg:left-32">
        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Button 1: 3D Style */}
          <button className="btn-3d">
            Contact With Us 
          </button>
          
          {/* Button 2: Neon Style */}
          <button className="btn-neon">
            Learn More About Us
          </button>
        </div>
      </div>

      <style jsx>{`
        /* 3D Button Style */
        .btn-3d {
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 700;
          color: white;
          background: linear-gradient(145deg, #66B2FF, #000099);
          border: none;
          // border-radius: 12px;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          transform-style: preserve-3d;
          min-width: 220px;
          text-align: center;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        
        .btn-3d:hover {
          transform: translateY(-4px) rotateX(10deg);
          box-shadow: 
            0 15px 30px rgba(102, 126, 234, 0.4),
            inset 0 -3px 0 rgba(0,0,0,0.2);
          background: linear-gradient(145deg, #764ba2, #667eea);
        }
        
        .btn-3d:active {
          transform: translateY(-2px);
          box-shadow: 
            0 8px 20px rgba(102, 126, 234, 0.3),
            inset 0 -2px 0 rgba(0,0,0,0.2);
        }
        
        /* Top edge effect */
        .btn-3d::before {
          content: '';
          position: absolute;
          top: 3px;
          left: 3px;
          right: 3px;
          height: 30%;
          background: linear-gradient(rgba(255,255,255,0.3), transparent);
          border-radius: 10px 10px 0 0;
          opacity: 0.6;
        }
        
        /* Neon Button Style - Fixed white background */
        .btn-neon {
          padding: 18px 45px;
          font-size: 18px;
          font-weight: 700;
          color: #FFFFFF;
          background: blue;
          border: 3px solid white;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          min-width: 220px;
          text-align: center;
          letter-spacing: 1px;
        }
        
        .btn-neon:hover {
          color: #000;
          background: linear-gradient(45deg, #00ffcc, #00ccff, #ff00cc, #ffcc00);
          background-size: 400% 400%;
          animation: neonGradient 2s ease infinite;
          box-shadow: 
            0 0 20px rgba(0, 255, 204, 0.5),
            0 0 40px rgba(0, 204, 255, 0.3),
            inset 0 0 20px rgba(255, 255, 255, 0.2);
          border-color: transparent;
          transform: translateY(-4px);
        }
        
        .btn-neon:active {
          transform: translateY(-2px);
          box-shadow: 
            0 0 10px rgba(0, 255, 204, 0.3),
            0 0 20px rgba(0, 204, 255, 0.2);
        }
        
        @keyframes neonGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Glow effect on hover */
        .btn-neon::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        
        .btn-neon:hover::after {
          transform: translateX(100%);
        }
        
        /* Responsive */
        @media (max-width: 640px) {
          .btn-3d, .btn-neon {
            padding: 16px 35px;
            font-size: 16px;
            min-width: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;