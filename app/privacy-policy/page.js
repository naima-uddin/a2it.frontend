import PrivacyPolicy from '@/components/PrivacyPolicy/PrivacyPolicy'
import React from 'react'

// 🔹 SEO metadata for Privacy Policy Page
export const metadata = {
  title: "Privacy Policy",
  description:
    "Read A2IT LLC's privacy policy to understand how we collect, use, and protect your personal information when using our IT services and website.",
  keywords: [
    "Privacy Policy",
    "A2IT LLC Privacy",
    "Data Protection",
    "User Privacy",
    "Information Security",
  ],
  alternates: {
    canonical: "https://a2itllc.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn about A2IT LLC's commitment to protecting your privacy and how we handle your personal information.",
    url: "https://a2itllc.com/privacy-policy",
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
      <PrivacyPolicy/>
    </>
  )
}
