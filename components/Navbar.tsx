"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { business, navItems } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-background/78 backdrop-blur-xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground shadow-soft">
            G
          </span>
          <span>
            <span className="block font-display text-xl font-semibold leading-none">
              GlowUp
            </span>
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Salon & Spa
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-foreground/78 transition hover:text-primary"
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
        <div className="border-t border-border bg-background/96 px-4 pb-5 pt-2 shadow-soft lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold transition hover:bg-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-2"
            >
              <Button className="w-full">Book Now</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
