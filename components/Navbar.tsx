"use client";

import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { business, navItems } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <nav className="section-shell flex h-16 items-center justify-between rounded-full border border-white/70 bg-white/68 shadow-glass backdrop-blur-2xl">
        <Link href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso text-primary-foreground shadow-soft">
            <Sparkles className="h-5 w-5 text-accent" />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-normal">
              GlowUp
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Salon & Spa
            </span>
          </span>
        </Link>

        <div className="hidden items-center rounded-full bg-white/55 px-2 py-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/74 transition hover:bg-white hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
            target="_blank"
          >
            <Button size="sm">Book Now</Button>
          </Link>
          <Button
            variant="secondary"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isOpen ? (
        <div className="section-shell mt-2 lg:hidden">
          <div className="glass-panel rounded-[1.75rem] p-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="#booking" onClick={() => setIsOpen(false)} className="mt-2 block">
              <Button className="w-full">Book Your Appointment</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
