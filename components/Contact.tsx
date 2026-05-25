import Link from "next/link";
import { Clock, MapPin, MessageCircle, Navigation } from "lucide-react";
import { business } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-[#F3E7DA]">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Visit us"
            title="GlowUp Salon & Spa, Bandra West"
            description="Easy to reach, open all week and ready for hair, skin, bridal, nail and spa appointments."
            align="left"
          />
          <div className="grid gap-4">
            {[
              { title: "Address", value: business.location, icon: MapPin },
              { title: "Phone", value: business.phone, icon: MessageCircle },
              { title: "Timing", value: business.timing, icon: Clock }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-panel flex gap-4 rounded-3xl p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-espresso text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
            target="_blank"
            className="mt-6 inline-block"
          >
            <Button size="lg">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </Link>
        </div>

        <div className="relative min-h-[390px] overflow-hidden rounded-[2.25rem] bg-espresso shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(215,168,90,0.36),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(242,200,200,0.22),transparent_28%)]" />
          <div className="absolute inset-6 grid grid-cols-3 gap-3 opacity-45">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index} className="rounded-3xl border border-white/10 bg-white/[0.04]" />
            ))}
          </div>
          <div className="relative flex h-full min-h-[390px] flex-col justify-between p-7 text-white">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">
                Location
              </p>
              <h3 className="font-display text-4xl font-semibold md:text-5xl">
                Bandra West, Mumbai
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/68">
                Find us in Bandra West for premium hair, skin, nail, bridal and spa appointments.
              </p>
            </div>
            <div className="w-fit rounded-3xl border border-white/12 bg-white/10 p-4 backdrop-blur-xl">
              <Navigation className="mb-3 h-6 w-6 text-accent" />
              <p className="font-semibold">Prime beauty destination</p>
              <p className="mt-1 text-sm text-white/62">Open daily from 10 AM to 9 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
