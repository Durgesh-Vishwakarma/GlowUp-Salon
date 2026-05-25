"use client";

import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#efe7df] bg-[#fffdf9]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[86px] w-full max-w-[1680px] items-center justify-between px-6 lg:px-24">
        <Link href="#home" className="leading-none" onClick={() => setIsOpen(false)}>
          <span className="block font-display text-[34px] font-semibold leading-none tracking-normal text-[#4b061d]">
            GlowUp
          </span>
          <span className="ml-12 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9b6c54]">
            Salon & Spa
          </span>
        </Link>

        <div className="hidden items-center gap-12 xl:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-2 text-[15px] font-medium text-[#201b19] transition hover:text-[#62001f] ${
                index === 0 ? "text-[#62001f]" : ""
              }`}
            >
              {item.label}
              {index === 0 ? (
                <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-8 bg-[#62001f]" />
              ) : null}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="#booking">
            <Button className="h-12 rounded-[3px] bg-[#62001f] px-6 shadow-none hover:bg-[#4b061d]">
              Book Your Appointment
              <CalendarDays className="h-4 w-4" />
            </Button>
          </Link>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-[3px] xl:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-[#efe7df] bg-[#fffdf9] px-6 py-4 xl:hidden">
          <div className="grid gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-[#f7eee8]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
