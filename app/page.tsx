import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Experience } from "@/components/Experience";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, siteUrl } from "@/lib/constants";
import { homeFaqs } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Salon in Bandra West, Mumbai | GlowUp Salon & Spa",
  description: business.metaDescription,
  alternates: { canonical: "/" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: homeFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <div className="relative pt-[1px]">
        <Hero />
        <ServicesPreview />
        <Experience />
        <GalleryPreview />
        <Reviews />
        <Faq
          items={homeFaqs}
          eyebrow="Salon FAQs · Bandra West"
          heading="Before you book, the usual questions"
          intro="Pricing, timings, walk-ins and hygiene — answered plainly. Anything else, message us on WhatsApp and a real person will reply."
        />
        <BookingSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
