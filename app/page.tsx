import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { Experience } from "@/components/Experience";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Reviews } from "@/components/Reviews";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <div className="relative pt-[1px]">
        <Hero />
        <ServicesPreview />
        <Experience />
        <GalleryPreview />
        <Reviews />
        <BookingSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
