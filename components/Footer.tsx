import Link from "next/link";
import { Instagram, MessageCircle, Sparkles } from "lucide-react";
import { business, navItems, services } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-espresso text-background">
      <div className="absolute left-[-9rem] top-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
      <div className="section-shell relative grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-3xl font-semibold">{business.name}</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-background/52">
                Bandra West
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-6 text-background/68">
            {business.shortDescription}
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href={business.instagram}
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
              target="_blank"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/18"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Services</p>
          <div className="grid gap-2 text-sm text-background/68">
            {services.slice(0, 5).map((service) => (
              <Link key={service.title} href="#services" className="transition hover:text-white">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Contact</p>
          <div className="grid gap-2 text-sm text-background/68">
            <span>{business.location}</span>
            <span>{business.phone}</span>
            <span>{business.timing}</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            {navItems.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5 text-center text-xs text-background/56">
        © {new Date().getFullYear()} GlowUp Salon & Spa. All rights reserved.
      </div>
    </footer>
  );
}
