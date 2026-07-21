import type { Metadata } from "next";
import "./globals.css";
import { business } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://glowupsalon.com"),
  title: {
    default: "GlowUp Salon & Spa | Premium Salon in Bandra West, Mumbai",
    template: "%s | GlowUp Salon & Spa"
  },
  description: business.description,
  keywords: [
    "GlowUp Salon",
    "Best Salon in Bandra",
    "Beauty salon Mumbai",
    "Bridal makeup Bandra",
    "Hair salon Mumbai",
    "Luxury hair spa",
    "Nail art Bandra",
    "Salon booking website"
  ],
  authors: [{ name: "GlowUp Salon & Spa" }],
  creator: "GlowUp Salon & Spa",
  openGraph: {
    title: "GlowUp Salon & Spa | Premium Salon in Bandra West, Mumbai",
    description: business.shortDescription,
    url: "https://glowupsalon.com",
    siteName: "GlowUp Salon & Spa",
    images: [
      {
        url: "/og-image.jpg", // Ensure you have this image in the public folder eventually
        width: 1200,
        height: 630,
        alt: "GlowUp Salon & Spa Bandra",
      }
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GlowUp Salon & Spa | Premium Salon in Bandra West, Mumbai",
    description: business.shortDescription,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": business.name,
  "image": "https://glowupsalon.com/og-image.jpg",
  "description": business.shortDescription,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bandra West",
    "addressLocality": "Mumbai",
    "addressRegion": "MH",
    "addressCountry": "IN"
  },
  "telephone": business.phone,
  "url": "https://glowupsalon.com",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    }
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
