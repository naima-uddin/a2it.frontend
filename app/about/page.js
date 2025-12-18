import About from "@/components/about-page-compoent/About";
import React from "react";

// 🔹 SEO metadata for About Us
export const metadata = {
  title: "About Us",
  description:
    "Learn more about A2IT LLC, our mission, vision, and the team driving innovation in IT, eCommerce, web development, and digital solutions.",
  keywords: [
    "A2IT",
    "About Us",
    "IT Company",
    "Tech Solutions",
    "Web Development",
    "eCommerce",
    "Digital Marketing",
  ],
  alternates: {
    canonical: "https://a2itllc.com/about",
  },
  openGraph: {
    title: "About Us",
    description:
      "Discover A2IT LLC, our mission, vision, and dedicated team providing IT services, eCommerce solutions, and digital innovation worldwide.",
    url: "https://a2itllc.com/about",
    siteName: "A2IT LLC",
    images: [
      {
        url: "/og-about.jpg", // 👉 add About OG image in /public
        width: 1200,
        height: 630,
        alt: "About A2IT LLC",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Learn about A2IT LLC’s mission, vision, and team providing innovative IT, eCommerce, and digital solutions.",
    images: ["/og-about.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <About />

      {/* 🔹 Schema Markup for About Us */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Us",
            url: "https://a2itllc.com/about",
            description:
              "Learn more about A2IT LLC, our mission, vision, and the team driving innovation in IT services, eCommerce, and digital solutions.",
            publisher: {
              "@type": "Organization",
              name: "A2IT LLC",
              url: "https://a2itllc.com",
              logo: "https://a2itllc.com/logo.png",
            },
          }),
        }}
      />
    </>
  );
}
