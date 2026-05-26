"use client";

import Link from "next/link";
import { CalendarDays, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { business } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#booking" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_28px_rgba(0,0,0,0.09)] border-b border-[#E2D8D0]"
          : "bg-white border-b border-[#E2D8D0]"
      }`}
    >
      <nav className="mx-auto flex h-[80px] w-full max-w-[1380px] items-center justify-between px-6 sm:px-10 lg:px-14">

        {/* ── Logo ── */}
        <Link
          href="#home"
          onClick={() => setIsOpen(false)}
          aria-label="GlowUp Salon home"
          className="flex flex-col leading-[1]"
        >
          <span
            className="font-display font-bold leading-none text-[#7C1034]"
            style={{ fontSize: "30px", letterSpacing: "-0.01em" }}
          >
            GlowUp
          </span>
          <span
            className="font-sans font-semibold uppercase text-[#B8733A]"
            style={{ fontSize: "10px", letterSpacing: "0.35em", marginTop: "3px" }}
          >
            Salon &amp; Spa
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-sans font-semibold text-[#2A2020] transition-colors duration-200 hover:text-[#7C1034]"
              style={{ fontSize: "15px", letterSpacing: "0.01em" }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* ── CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          {/* Phone pill — desktop only */}
          <a
            href={`tel:${business.phoneRaw}`}
            className="hidden items-center gap-2 rounded-none px-4 py-2 text-[13px] font-semibold text-[#5E5555] transition hover:text-[#7C1034] lg:inline-flex"
          >
            {business.phone}
          </a>

          {/* Book CTA */}
          <Link
            href="#booking"
            id="navbar-book-cta"
            className="hidden h-[46px] items-center gap-2 bg-[#7C1034] px-6 font-sans font-bold text-white transition-colors hover:bg-[#5A0926] md:inline-flex"
            style={{ fontSize: "14px" }}
          >
            <CalendarDays className="h-4 w-4" strokeWidth={2} />
            Book Appointment
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center border border-[#E2D8D0] text-[#2A2020] transition hover:border-[#7C1034] hover:text-[#7C1034] md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {isOpen && (
        <div className="border-t border-[#E2D8D0] bg-white px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center border-b border-[#F0EAE4] py-4 font-sans font-semibold text-[#2A2020] transition hover:text-[#7C1034]"
                style={{ fontSize: "17px" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex h-[52px] w-full items-center justify-center gap-2 bg-[#7C1034] font-bold text-white"
            style={{ fontSize: "15px" }}
          >
            <CalendarDays className="h-5 w-5" />
            Book Appointment
          </Link>

          <p className="mt-4 text-center text-[13px] text-[#9A8F8A]">
            {business.timing}
          </p>
        </div>
      )}
    </header>
  );
}
