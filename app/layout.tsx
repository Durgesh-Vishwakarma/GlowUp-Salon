import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  title: "GlowUp Salon & Spa | Premium Salon Booking in Bandra",
  description:
    "Premium hair, skin, bridal makeup, nails and spa services in Bandra West, Mumbai with easy online and WhatsApp appointment booking.",
  keywords: [
    "GlowUp Salon",
    "Salon in Bandra",
    "Beauty salon Mumbai",
    "Bridal makeup Bandra",
    "Hair salon Mumbai",
    "Spa services Bandra",
    "Salon booking website"
  ],
  openGraph: {
    title: "GlowUp Salon & Spa | Premium Salon Booking in Bandra",
    description:
      "Book premium hair, skin, bridal, nail and spa services at GlowUp Salon & Spa in Bandra West.",
    type: "website",
    locale: "en_IN"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}