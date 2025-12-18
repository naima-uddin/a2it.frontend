import Banner from "@/components/home-page-components/Banner";
import WhoRWe from "@/components/home-page-components/WhoRWe";
import React from "react";
import HomePageContactUs from "@/components/home-page-components/HomePageContactUs";
import PricingPage from "@/components/home-page-components/PricingCard";

// 🔹 SEO metadata for Home Page
export const metadata = {
  title: "IT Services, Web & eCommerce & Digital Solutions",
  description:
    "A2IT LLC provides professional IT services including web development, mobile apps, UI/UX design, eCommerce solutions, Shopify, Amazon & eBay services, SEO, and digital marketing.",
  keywords: [
    "A2IT LLC",
    "IT Services",
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "eCommerce Solutions",
    "Shopify",
    "Amazon",
    "eBay",
    "SEO",
    "Digital Marketing",
    "ERP Solutions",
    "Hosting",
  ],
  alternates: {
    canonical: "https://a2itllc.com",
  },
  openGraph: {
    title: "A2IT LLC | IT Services, Web Development, eCommerce & Digital Solutions",
    description:
      "Discover A2IT LLC’s expertise in IT services, web & mobile development, eCommerce, digital marketing, and marketplace solutions including Shopify, Amazon, and eBay.",
    url: "/A2ITLogo.png",
    siteName: "A2IT LLC",
    images: [
      {
        url: "/A2ITLogo.png", // 👉 add Home OG image in /public
        width: 1200,
        height: 630,
        alt: "A2IT LLC - IT Services and Digital Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A2IT LLC | IT Services, Web Development, eCommerce & Digital Solutions",
    description:
      "A2IT LLC offers professional IT services including web development, mobile apps, UI/UX, eCommerce, Shopify, Amazon, eBay, SEO, and digital marketing.",
    images: ["/A2ITLogo.png"],
  },
};

export default function Home() {
  return (
    <>
      <Banner />
      <WhoRWe />
      <PricingPage/>
      <HomePageContactUs />
      {/* <WhatWeOffer />
      <ClientShowcase />
      <StatsSection />
      <CompanyGallery />
      <EmployeeSection /> */}

      {/* 🔹 Schema Markup for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "A2IT LLC",
            url: "https://a2itllc.com",
            logo: "https://a2itllc.com/A2ITLogo.png",
            sameAs: [
              "https://www.facebook.com/yourcompany",
              "https://www.linkedin.com/company/yourcompany",
              "https://twitter.com/yourcompany",
            ],
            description:
              "A2IT LLC provides IT services including web development, mobile apps, UI/UX, eCommerce, Shopify, Amazon, eBay, SEO, and digital marketing solutions worldwide.",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: "+8801846937397",
                email: "info@a2itllc.com",
                areaServed: "Worldwide",
              },
            ],
          }),
        }}
      />
    </>
  );
}
