// Google Analytics Component
// Instructions: 
// 1. Get your GA4 Measurement ID from https://analytics.google.com
// 2. Replace 'G-XXXXXXXXXX' with your actual measurement ID
// 3. Import this component in app/layout.js

import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 measurement ID

  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}

// How to use:
// 1. In app/layout.js, add this import at the top:
//    import GoogleAnalytics from './GoogleAnalytics';
//
// 2. Add the component inside the <body> tag:
//    <body>
//      <GoogleAnalytics />
//      <Navbar />
//      {children}
//      ...
//    </body>
