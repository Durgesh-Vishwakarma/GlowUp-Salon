import { BookingForm } from "@/components/BookingForm";
import { Contact } from "@/components/Contact";
import { EditorialPanels } from "@/components/EditorialPanels";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <EditorialPanels />
      <BookingForm />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
