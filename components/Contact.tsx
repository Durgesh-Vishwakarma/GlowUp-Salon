import Link from "next/link";
import { MapPin, MessageCircle, Navigation } from "lucide-react";
import { business } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#fff8ef]">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Visit GlowUp Salon & Spa in Bandra"
            description="Every local business demo needs contact details that feel clear, trustworthy and ready for action."
            align="left"
          />
          <div className="space-y-4">
            <div className="flex gap-3 rounded-3xl bg-white p-5 shadow-soft">
              <MapPin className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-sm text-muted-foreground">{business.location}</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-3xl bg-white p-5 shadow-soft">
              <MessageCircle className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm text-muted-foreground">{business.phone}</p>
              </div>
            </div>
            <div className="flex gap-3 rounded-3xl bg-white p-5 shadow-soft">
              <Navigation className="h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="font-semibold">Timing</p>
                <p className="text-sm text-muted-foreground">{business.timing}</p>
              </div>
            </div>
          </div>
          <Link
            href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
            target="_blank"
            className="mt-6 inline-block"
          >
            <Button size="lg">
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
          </Link>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] bg-primary shadow-glow">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent),radial-gradient(circle_at_25%_25%,rgba(215,168,80,0.45),transparent_28%)]" />
          <div className="relative flex h-full min-h-[360px] flex-col justify-between p-7 text-primary-foreground">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/72">
                Google Maps Placeholder
              </p>
              <h3 className="font-display text-4xl font-semibold">Bandra West, Mumbai</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-primary-foreground/80">
                Replace this premium placeholder with an embedded Google Map or static map image when the live business address is confirmed.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3 opacity-80">
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} className="h-16 rounded-2xl bg-white/12" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
