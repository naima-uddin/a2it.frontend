import TermsOfService from '@/components/terms-service/TermsOfService'
import React from 'react'

// 🔹 SEO metadata for Terms of Service Page
export const metadata = {
  title: "Terms of Service",
  description:
    "Review A2IT LLC's terms of service outlining the rules and guidelines for using our IT services, website, and digital solutions.",
  keywords: [
    "Terms of Service",
    "A2IT LLC Terms",
    "Service Agreement",
    "User Agreement",
    "Legal Terms",
  ],
  alternates: {
    canonical: "https://a2itllc.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service",
    description:
      "Read A2IT LLC's terms of service to understand the conditions for using our IT services and website.",
    url: "https://a2itllc.com/terms-of-service",
    siteName: "A2IT LLC",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <>
      <TermsOfService/>
    </>
  )
}
