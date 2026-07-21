import type { Metadata } from "next";
import "./globals.css";
import { business, services, siteUrl } from "@/lib/constants";
import { reviewStats } from "@/lib/seo-content";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salon in Bandra West, Mumbai | GlowUp Salon & Spa",
    template: "%s | GlowUp Salon & Spa Bandra"
  },
  description: business.metaDescription,
  keywords: [
    "salon in Bandra West",
    "best salon in Bandra",
    "beauty salon Mumbai",
    "bridal makeup Bandra",
    "hair salon Bandra West",
    "facial in Bandra",
    "nail art Bandra",
    "hair spa Mumbai",
    "unisex salon Bandra"
  ],
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  category: "Beauty & Personal Care",
  formatDetection: {
    telephone: true,
    address: true
  },
  openGraph: {
    title: "Salon in Bandra West, Mumbai | GlowUp Salon & Spa",
    description: business.shortDescription,
    url: siteUrl,
    siteName: business.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GlowUp Salon & Spa — hair, skin, nail and bridal salon in Bandra West, Mumbai"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Salon in Bandra West, Mumbai | GlowUp Salon & Spa",
    description: business.shortDescription,
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  alternates: {
    canonical: "/"
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "@id": `${siteUrl}/#salon`,
  name: business.name,
  image: `${siteUrl}/og-image.jpg`,
  logo: `${siteUrl}/og-image.jpg`,
  description: business.shortDescription,
  slogan: business.tagline,
  foundingDate: business.founded,
  priceRange: business.priceRange,
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.latitude,
    longitude: business.longitude
  },
  areaServed: business.areasServed.map((area) => ({
    "@type": "Place",
    name: area
  })),
  telephone: business.phone,
  url: siteUrl,
  sameAs: [business.instagram].filter((link) => link && link !== "#"),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: reviewStats.ratingValue,
    reviewCount: reviewStats.reviewCount,
    bestRating: 5,
    worstRating: 1
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Salon & Spa Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${siteUrl}/services/${service.slug}`
      },
      priceCurrency: "INR",
      price: service.priceValue,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: service.priceValue,
        priceCurrency: "INR"
      }
    }))
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      opens: "10:00",
      closes: "21:00"
    }
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: business.name,
  inLanguage: "en-IN",
  publisher: { "@id": `${siteUrl}/#salon` }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
