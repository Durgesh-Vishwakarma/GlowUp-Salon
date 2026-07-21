"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  Phone,
  UserRound,
  XCircle,
} from "lucide-react";
import { business, services } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import type { BookingPayload } from "@/types/booking";
import { RevealText, EyebrowReveal } from "./Animations";

const initialForm: BookingPayload = {
  name: "", phone: "", service: "",
  preferredDate: "", preferredTime: "", message: "",
};

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM",
  "2:00 PM",  "3:00 PM",  "4:00 PM",  "5:00 PM",
  "6:00 PM",  "7:00 PM",  "8:00 PM",
];

function createBookingWhatsAppMessage(form: BookingPayload) {
  return [
    "New booking request from GlowUp Salon website:",
    "",
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Service: ${form.service}`,
    `Preferred Date: ${form.preferredDate}`,
    `Preferred Time: ${form.preferredTime}`,
    form.message ? `Message: ${form.message}` : "",
    "",
    "Please confirm my appointment.",
  ]
    .filter(Boolean)
    .join("\n");
}

/* shared input class */
const inputCls =
  "h-[52px] w-full border px-4 text-white placeholder:text-white/38 focus:outline-none transition-colors duration-200";
const inputStyle = { backgroundColor: "#1A1A1A", borderColor: "rgba(255,255,255,0.14)", fontSize: "15px" };
const inputFocus = { borderColor: "#B8733A" };

export function BookingSection() {
  const [form, setForm]     = useState<BookingPayload>(initialForm);
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const [error, setError]   = useState("");

  const whatsappUrl = useMemo(() => {
    const message =
      form.name && form.phone && form.service && form.preferredDate && form.preferredTime
        ? createBookingWhatsAppMessage(form)
        : business.whatsappMessage;

    return createWhatsAppUrl(message, business.phoneRaw);
  }, [form]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    if (!form.name || !form.phone || !form.service || !form.preferredDate || !form.preferredTime) {
      setStatus("error");
      setError("Please fill in your name, phone, service, date and time.");
      return;
    }
    if (form.phone.length !== 10) {
      setStatus("error");
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    let whatsappWindow: Window | null = null;
    if (typeof window !== "undefined") {
      whatsappWindow = window.open("about:blank", "_blank");
      if (whatsappWindow) {
        whatsappWindow.opener = null;
      }
    }

    setStatus("loading");
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!res.ok) {
      whatsappWindow?.close();
      setStatus("error");
      setError("Something went wrong. Please chat with us on WhatsApp instead.");
      return;
    }
    const finalWhatsAppUrl = createWhatsAppUrl(
      createBookingWhatsAppMessage(form),
      business.phoneRaw
    );

    setStatus("success");
    setForm(initialForm);

    if (whatsappWindow) {
      whatsappWindow.location.href = finalWhatsAppUrl;
      whatsappWindow.focus();
    } else {
      window.location.href = finalWhatsAppUrl;
    }
  }

  return (
    <section id="booking" style={{ backgroundColor: "#0D0D0D" }}>
      <div className="mx-auto grid w-full max-w-[1380px] px-6 py-16 sm:px-10 md:py-20 lg:grid-cols-[400px_1fr] lg:gap-20 lg:px-14">

        {/* ── LEFT: Copy ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center pb-12 lg:pb-0"
        >
          <EyebrowReveal
            text="Reserve Your Visit"
            className="mb-5 font-sans font-bold uppercase text-[11px] text-[#B8733A]"
          />

          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1.1, color: "#fff" }}
          >
            <RevealText text="Book a salon" />
            <br />
            <span style={{ color: "#B8733A" }}>
              <RevealText text="appointment in Bandra." delay={0.2} />
            </span>
          </h2>

          <div className="my-6" style={{ height: "2px", width: "40px", backgroundColor: "#7C1034" }} />

          <p
            className="leading-relaxed"
            style={{ fontSize: "16px", color: "rgba(255,255,255,0.52)", lineHeight: 1.8, maxWidth: "320px" }}
          >
            Send your details and we confirm your slot within the hour, 10 AM to 9 PM. Need something today? WhatsApp is faster.
          </p>

          {/* Contact details */}
          <div className="mt-8 flex flex-col gap-4">
            {[
              { Icon: Phone,       text: business.phone },
              { Icon: CalendarDays,text: business.timing },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0" style={{ color: "#B8733A" }} strokeWidth={1.5} />
                <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.50)" }}>{text}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="booking-whatsapp-link"
            className="mt-9 inline-flex w-fit items-center gap-3 border px-6 py-3 font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
            style={{ borderColor: "rgba(37,211,102,0.28)", fontSize: "14px" }}
          >
            <MessageCircle className="h-5 w-5" />
            Book via WhatsApp instead
          </Link>
        </motion.div>

        {/* ── RIGHT: Form ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          {status === "success" ? (
            /* ─ Success ─ */
            <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
              <CheckCircle2 className="h-14 w-14" style={{ color: "#25D366" }} strokeWidth={1.5} />
              <h3 className="font-display font-bold text-white" style={{ fontSize: "28px" }}>
                Booking Received!
              </h3>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.52)", maxWidth: "340px", lineHeight: 1.7 }}>
                Thank you! WhatsApp has opened with your booking details. Please tap Send so our team receives your appointment request.
              </p>
              <Link href={whatsappUrl} target="_blank"
                className="mt-1 inline-flex items-center gap-2 font-semibold text-[#25D366] hover:opacity-80"
                style={{ fontSize: "14px" }}
              >
                <MessageCircle className="h-4 w-4" /> Follow up on WhatsApp
              </Link>
              <button
                onClick={() => setStatus("idle")}
                className="mt-1 underline hover:opacity-60"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}
              >
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4" aria-label="Appointment booking form">

              {/* Error */}
              {status === "error" && error && (
                <div
                  className="flex items-start gap-3 px-4 py-3"
                  style={{ border: "1px solid rgba(239,68,68,0.3)", backgroundColor: "rgba(239,68,68,0.08)" }}
                >
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                  <p style={{ fontSize: "14px", color: "#fca5a5" }}>{error}</p>
                </div>
              )}

              {/* Name + Phone */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="relative">
                  <span className="sr-only">Full Name</span>
                  <UserRound
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  />
                  <input
                    id="booking-name" type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full Name"
                    required
                    className={inputCls}
                    style={{ ...inputStyle, paddingLeft: "44px" }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                  />
                </label>
                <label className="relative">
                  <span className="sr-only">Phone Number</span>
                  <Phone
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  />
                  <input
                    id="booking-phone" type="tel"
                    value={form.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setForm({ ...form, phone: val });
                    }}
                    placeholder="Phone Number"
                    required
                    maxLength={10}
                    className={inputCls}
                    style={{ ...inputStyle, paddingLeft: "44px" }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                  />
                </label>
              </div>

              {/* Service */}
              <div className="relative">
                <span className="sr-only">Service</span>
                <ChevronDown
                  className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2"
                  style={{ color: "rgba(255,255,255,0.28)" }}
                />
                <select
                  id="booking-service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  required
                  className="h-[52px] w-full appearance-none border px-4 text-white focus:outline-none transition-colors duration-200"
                  style={{ backgroundColor: "#1A1A1A", borderColor: "rgba(255,255,255,0.14)", fontSize: "15px" }}
                >
                  <option value="" style={{ color: "rgba(255,255,255,0.4)" }}>Select a Service</option>
                  {services.map((s) => (
                    <option key={s.title} value={s.title} style={{ color: "#fff", backgroundColor: "#1A1A1A" }}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date + Time */}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="relative">
                  <span className="sr-only">Preferred Date</span>
                  <CalendarDays
                    className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  />
                  <input
                    id="booking-date" type="date"
                    value={form.preferredDate}
                    onChange={(e) => setForm({ ...form, preferredDate: e.target.value })}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className={inputCls}
                    style={{ ...inputStyle, paddingLeft: "44px" }}
                    onFocus={(e) => Object.assign(e.currentTarget.style, inputFocus)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, inputStyle)}
                  />
                </label>

                <div className="relative">
                  <span className="sr-only">Preferred Time</span>
                  <ChevronDown
                    className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2"
                    style={{ color: "rgba(255,255,255,0.28)" }}
                  />
                  <select
                    id="booking-time"
                    value={form.preferredTime}
                    onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
                    required
                    className="h-[52px] w-full appearance-none border px-4 text-white focus:outline-none transition-colors duration-200"
                    style={{ backgroundColor: "#1A1A1A", borderColor: "rgba(255,255,255,0.14)", fontSize: "15px" }}
                  >
                    <option value="">Preferred Time</option>
                    {TIME_SLOTS.map((t) => (
                      <option key={t} value={t} style={{ backgroundColor: "#1A1A1A" }}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                id="booking-submit"
                type="submit"
                disabled={status === "loading"}
                className="mt-2 flex h-[54px] w-full items-center justify-center gap-3 font-bold text-white transition-colors disabled:opacity-60"
                style={{ backgroundColor: "#7C1034", fontSize: "15px" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5A0926")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7C1034")}
              >
                {status === "loading" ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending your request...
                  </>
                ) : "Confirm Booking"}
              </button>

              {/* WhatsApp fallback */}
              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 transition-colors hover:text-white/70"
                style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)" }}
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                Prefer WhatsApp? Chat with us directly →
              </Link>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
