import Link from "next/link";
import { Instagram, MapPin, Clock, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { business, services } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0D0D0D", color: "#fff" }}>

      {/* ── Top CTA Banner ── */}
      <div
        className="border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "#7C1034" }}
      >
        <div className="mx-auto flex w-full max-w-[1380px] flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row sm:px-10 lg:px-14">
          <div>
            <p className="font-display font-bold text-white" style={{ fontSize: "26px", lineHeight: 1.2 }}>
              Need a salon appointment in Bandra West?
            </p>
            <p className="mt-1 text-white/70" style={{ fontSize: "15px" }}>
              Open 10 AM to 9 PM, every day. Booking takes about 30 seconds.
            </p>
          </div>
          <Link
            href="/#booking"
            className="inline-flex h-[52px] shrink-0 items-center gap-2 border-2 border-white bg-transparent px-8 font-bold text-white transition hover:bg-white hover:text-[#7C1034]"
            style={{ fontSize: "14px" }}
          >
            Book Now
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* ── Main Footer Grid ── */}
      <div className="mx-auto grid w-full max-w-[1380px] gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[1.8fr_1fr_1fr_1fr] lg:px-14 lg:py-20">

        {/* Brand column */}
        <div>
          <Link href="/" aria-label="GlowUp Salon" className="inline-block">
            <span
              className="block font-display font-bold text-white"
              style={{ fontSize: "34px", lineHeight: 1, letterSpacing: "-0.01em" }}
            >
              GlowUp
            </span>
            <span
              className="block font-sans font-semibold uppercase text-[#B8733A]"
              style={{ fontSize: "10px", letterSpacing: "0.35em", marginTop: "4px" }}
            >
              Salon &amp; Spa
            </span>
          </Link>

          <p
            className="mt-6 leading-relaxed"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.48)", maxWidth: "280px" }}
          >
            {business.shortDescription}
          </p>

          {/* Social icons */}
          <div className="mt-7 flex gap-3">
            <Link
              href={business.instagram}
              aria-label="Follow on Instagram"
              className="flex h-11 w-11 items-center justify-center border text-white/50 transition-all hover:border-[#B8733A] hover:text-[#B8733A]"
              style={{ borderColor: "rgba(255,255,255,0.14)" }}
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-11 w-11 items-center justify-center border text-white/50 transition-all hover:border-[#25D366] hover:text-[#25D366]"
              style={{ borderColor: "rgba(255,255,255,0.14)" }}
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Services column */}
        <div>
          <p
            className="mb-6 font-sans font-bold uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.28em", color: "#B8733A" }}
          >
            Services
          </p>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s.title}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition-colors hover:text-white"
                  style={{ fontSize: "15px", color: "rgba(255,255,255,0.50)" }}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links column */}
        <div>
          <p
            className="mb-6 font-sans font-bold uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.28em", color: "#B8733A" }}
          >
            Quick Links
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { label: "Home", href: "/" },
              { label: "Services & Prices", href: "/services" },
              { label: "Gallery", href: "/#gallery" },
              { label: "Salon FAQs", href: "/#faq" },
              { label: "Book Appointment", href: "/#booking" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-white"
                  style={{ fontSize: "15px", color: "rgba(255,255,255,0.50)" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <p
            className="mb-6 font-sans font-bold uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.28em", color: "#B8733A" }}
          >
            Contact Us
          </p>
          <ul className="flex flex-col gap-5">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#B8733A]" strokeWidth={1.5} />
              <address
                className="not-italic"
                style={{ fontSize: "15px", color: "rgba(255,255,255,0.50)", lineHeight: 1.6 }}
              >
                {business.streetAddress}
                <br />
                {business.locality} {business.postalCode}, {business.region}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 shrink-0 text-[#B8733A]" strokeWidth={1.5} />
              <a
                href={`tel:${business.phoneRaw}`}
                className="transition-colors hover:text-white"
                style={{ fontSize: "15px", color: "rgba(255,255,255,0.50)" }}
              >
                {business.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#B8733A]" strokeWidth={1.5} />
              <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.50)", lineHeight: 1.6 }}>
                {business.timing}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="border-t px-6 py-5 sm:px-10 lg:px-14"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto flex w-full max-w-[1380px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.30)" }}>
            © {year} GlowUp Salon &amp; Spa · Bandra West, Mumbai · All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.22)" }}>
            Serving {business.areasServed.join(", ")}
          </p>
        </div>
      </div>
    </footer>
  );
}