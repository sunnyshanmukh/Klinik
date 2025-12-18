import "./globals.css";

import Navbar from "./components/Top-Navbar/Navbar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Script from "next/script";

export const metadata = {
  title: "Klinik Website",
  description: "A simple clinic website built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap"
          rel="stylesheet"
        />

        {/* Icon Fonts */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/styles.css" rel="stylesheet" />
        <link href="/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

      </head>

      <body>
        <Navbar />
        <Header />
        {children}
        <Footer />

        {/* JS Files */}
        <Script src="https://code.jquery.com/jquery-3.4.1.min.js" strategy="beforeInteractive" />
         <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="/lib/wow/wow.min.js" />
        <Script src="/lib/easing/easing.min.js" />
        <Script src="/lib/waypoints/waypoints.min.js" />
        <Script src="/lib/counterup/counterup.min.js" />
        <Script src="/lib/tempusdominus/js/moment.min.js" />
        <Script src="/lib/tempusdominus/js/moment-timezone.min.js" />
        <Script src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js" />
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
