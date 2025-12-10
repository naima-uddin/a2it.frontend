"use client";
import { useState } from "react";
import {
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
} from "lucide-react";

export default function CompanyGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // IT Company showcase images
  const companyImages = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Web Development Team",
      title: "Web & Mobile App Development",
      description:
        "Our expert team crafting responsive web applications and mobile solutions",
      category: "Development",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "E-commerce Solutions",
      title: "eCommerce Development Solutions",
      description:
        "Building scalable online stores with secure payment gateways",
      category: "eCommerce",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "ERP System Development",
      title: "Enterprise Resource Planning",
      description: "Custom ERP solutions to streamline business processes",
      category: "ERP Systems",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Digital Marketing Team",
      title: "Digital Marketing Services",
      description: "SEO, SEM, PPC, and Social Media Marketing strategies",
      category: "Marketing",
      rowSpan: 1,
      colSpan: 2,
      featured: true,
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Server Infrastructure",
      title: "Server & Hosting Services",
      description: "Reliable hosting solutions and server management",
      category: "Infrastructure",
      rowSpan: 1,
      colSpan: 2,
      featured: true,
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Team Collaboration",
      title: "Our Development Team",
      description: "Collaborative workspace where innovation meets expertise",
      category: "Team",
      rowSpan: 1,
      colSpan: 2,
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Mobile App Design",
      title: "Mobile App Design Process",
      description: "Creating intuitive mobile applications",
      category: "Mobile Apps",
      rowSpan: 1,
      colSpan: 2,
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Client Consultation",
      title: "Client Consultation",
      description: "Working closely with clients to deliver solutions",
      category: "Consulting",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "UI/UX Design",
      title: "UI/UX Design Services",
      description: "Creating beautiful and functional user interfaces",
      category: "Design",
      rowSpan: 1,
      colSpan: 1,
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Cloud Services",
      title: "Cloud Computing Solutions",
      description: "Scalable cloud infrastructure for your business",
      category: "Cloud",
      rowSpan: 1,
      colSpan: 1,
    },
  ];

  const openModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % companyImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? companyImages.length - 1 : prev - 1
    );
  };

  const ImageCard = ({ image, index }) => (
    <div
      className={`group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-[#12121a] h-full border border-[#00f0ff]/20 ${
        image.colSpan === 2 ? "md:col-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden h-full">
        <img
          src={image.src}
          alt={image.alt}
          className={`w-full ${
            image.featured ? "h-72" : "h-56"
          } object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-75`}
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-[#00f0ff]/90 text-[#0a0a12] px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
          {image.category}
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/90 via-[#0a0a12]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
          <h3 className="font-bold text-md text-[#e0e0ff] mb-1 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            {image.title}
          </h3>
          <p className="text-xs text-[#b0b0ff] line-clamp-2 mb-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75">
            {image.description}
          </p>
          <button
            onClick={() => openModal(index)}
            className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] hover:from-[#00c0ff] hover:to-[#0044ff] text-[#0a0a12] px-3 py-1 rounded-md text-xs font-medium flex items-center gap-1 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-100 w-max"
          >
            <Eye className="w-3 h-3" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-[#0a0a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#e0e0ff] mb-3">
            Our <span className="text-[#00f0ff]">Company Gallery</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] mx-auto mb-4"></div>
          <p className="text-lg text-[#b0b0ff] max-w-3xl mx-auto">
            Explore our comprehensive IT services through our company gallery.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First Row - 3 images */}
          <div className="col-span-1">
            <ImageCard image={companyImages[0]} index={0} />
          </div>
          <div className="col-span-1">
            <ImageCard image={companyImages[1]} index={1} />
          </div>
          <div className="col-span-1">
            <ImageCard image={companyImages[2]} index={2} />
          </div>

          {/* Second Row - 2 images */}
          <div className="col-span-2">
            <ImageCard image={companyImages[3]} index={3} />
          </div>
          <div className="col-span-1">
            <ImageCard image={companyImages[8]} index={8} />
          </div>

          {/* Third Row - 2 images */}
          <div className="col-span-1">
            <ImageCard image={companyImages[9]} index={9} />
          </div>
          <div className="col-span-2">
            <ImageCard image={companyImages[4]} index={4} />
          </div>

          {/* Fourth Row - 3 images */}
          <div className="col-span-1">
            <ImageCard image={companyImages[5]} index={5} />
          </div>
          <div className="col-span-1">
            <ImageCard image={companyImages[6]} index={6} />
          </div>
          <div className="col-span-1">
            <ImageCard image={companyImages[7]} index={7} />
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-[#0a0a12]/95 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-[#12121a]/80 hover:bg-[#12121a] text-[#e0e0ff] border border-[#00f0ff]/20 z-10 backdrop-blur-sm p-2 rounded-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#12121a]/80 hover:bg-[#12121a] text-[#e0e0ff] border border-[#00f0ff]/20 z-10 backdrop-blur-sm p-2 rounded-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#12121a]/80 hover:bg-[#12121a] text-[#e0e0ff] border border-[#00f0ff]/20 z-10 backdrop-blur-sm p-2 rounded-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image Counter */}
          <div className="absolute top-4 left-4 bg-[#0a0a12]/80 text-[#e0e0ff] px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-[#00f0ff]/20">
            {selectedImageIndex + 1} / {companyImages.length}
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
            <button className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] hover:from-[#00c0ff] hover:to-[#0044ff] text-[#0a0a12] border border-[#00f0ff] backdrop-blur-sm px-3 py-1 rounded-md text-xs flex items-center gap-1">
              <Download className="w-3 h-3" />
              Download
            </button>
            <button className="bg-[#12121a]/80 hover:bg-[#12121a] text-[#e0e0ff] border border-[#00f0ff]/20 backdrop-blur-sm px-3 py-1 rounded-md text-xs flex items-center gap-1">
              <Share2 className="w-3 h-3" />
              Share
            </button>
          </div>

          {/* Main Image Content */}
          <div className="relative w-full max-w-6xl h-full max-h-[70vh]">
            <img
              src={companyImages[selectedImageIndex].src}
              alt={companyImages[selectedImageIndex].alt}
              className="w-full h-full object-contain rounded-md"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a12]/90 to-transparent p-4 rounded-b-md">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-[#00f0ff] text-[#0a0a12] px-2 py-0.5 rounded-full text-xs font-semibold">
                  {companyImages[selectedImageIndex].category}
                </span>
              </div>
              <h3 className="text-[#e0e0ff] text-md font-bold mb-1">
                {companyImages[selectedImageIndex].title}
              </h3>
              <p className="text-[#b0b0ff] text-xs">
                {companyImages[selectedImageIndex].description}
              </p>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-1 max-w-full overflow-x-auto px-2 py-1">
            {companyImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-12 h-9 rounded-sm overflow-hidden border transition-all ${
                  index === selectedImageIndex
                    ? "border-[#00f0ff] scale-110"
                    : "border-[#b0b0ff]/30 hover:border-[#00f0ff]/60"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
