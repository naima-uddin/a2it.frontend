import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 🔹 Global SEO metadata
export const metadata = {
  metadataBase: new URL('https://a2itllc.com'),
  title: {
    default: "A2IT LLC | IT Services, Web Development, eCommerce & Digital Solutions",
    template: "%s | A2IT LLC"
  },
  description:
    "A2IT LLC provides IT services including web development, mobile apps, UI/UX design, eCommerce, Shopify, Amazon, eBay, SEO, and digital marketing solutions worldwide.",
  keywords: ["A2IT LLC", "IT Services", "Web Development", "Mobile App Development", "UI/UX Design", "eCommerce Solutions", "Shopify", "Amazon", "eBay", "SEO", "Digital Marketing", "ERP Solutions", "Cloud Hosting"],
  authors: [{ name: "A2IT LLC" }],
  creator: "A2IT LLC",
  publisher: "A2IT LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/A2ITLogo.png",
    shortcut: "/A2ITLogo.png",
    apple: "/A2ITLogo.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "A2IT LLC | IT Services, Web Development, eCommerce & Digital Solutions",
    description:
      "Professional IT services, web & mobile development, eCommerce, digital marketing, and marketplace solutions from A2IT LLC.",
    url: "https://a2itllc.com",
    siteName: "A2IT LLC",
    images: [
      {
        url: "/A2ITLogo.png",
        width: 1200,
        height: 630,
        alt: "A2IT LLC - IT Services and Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A2IT LLC | IT Services, Web Development, eCommerce & Digital Solutions",
    description:
      "A2IT LLC offers IT services, web development, mobile apps, eCommerce, Shopify, Amazon, eBay, SEO, and digital marketing solutions.",
    images: ["/A2ITLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <WhatsAppFloat />
        {children}
        <Footer />

        {/* 🔹 JSON-LD structured data for organization */}
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
                "https://www.facebook.com/A2ITLLC",
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
      </body>
    </html>
  );
}
