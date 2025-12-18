// Alternative robots.txt generator for Next.js
// This provides dynamic robots.txt generation
export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: 'https://a2itllc.com/sitemap.xml',
  };
}
