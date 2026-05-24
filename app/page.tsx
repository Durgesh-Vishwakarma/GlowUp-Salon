import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Offers } from "@/components/Offers";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Pricing />
      <Offers />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
