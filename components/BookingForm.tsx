"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { CalendarDays, ChevronDown, MessageCircle, Phone, UserRound } from "lucide-react";
import { business, services } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import type { BookingPayload } from "@/types/booking";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const initialForm: BookingPayload = {
  name: "",
  phone: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: ""
};

export function BookingStrip() {
  const [form, setForm] = useState<BookingPayload>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const whatsappUrl = useMemo(() => {
    const message = form.name
      ? `Hi GlowUp Salon, I want to book ${form.service || "a service"} for ${form.name}. Preferred date: ${form.preferredDate || "not decided"}, time: ${form.preferredTime || "not decided"}.`
      : business.whatsappMessage;

    return createWhatsAppUrl(message, business.phoneRaw);
  }, [form]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.name || !form.phone || !form.service || !form.preferredDate || !form.preferredTime) {
      setStatus("error");
      setError("Please add your name, phone, service, preferred date and preferred time.");
      return;
    }

    setStatus("loading");

    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!response.ok) {
      setStatus("error");
      setError("We could not send your request right now. Please chat with us on WhatsApp.");
      return;
    }

    setStatus("success");
    setForm(initialForm);
  }

  return (
    <section id="booking" className="bg-[#111315] px-5 py-8 text-white sm:px-6 lg:px-12">
      <form
        onSubmit={handleSubmit}
        className="mx-auto grid w-full max-w-[1500px] gap-6 xl:grid-cols-[310px_1fr] xl:items-start"
      >
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.28em] text-[#B87955]">
            Book your appointment
          </p>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            Your Beauty.
            <br />
            Our Priority.
          </h2>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/62">
            Fill in your details and our team will get back to you to confirm your appointment.
          </p>
        </div>

        <div className="grid gap-4">
          {status === "success" || error ? (
            <div
              className={`border px-4 py-3 text-sm font-medium ${
                status === "success"
                  ? "border-green-400/30 bg-green-400/10 text-green-100"
                  : "border-red-400/30 bg-red-400/10 text-red-100"
              }`}
            >
              <p>
                {status === "success"
                  ? "Thank you! Our team will contact you shortly to confirm your appointment."
                  : error}
              </p>
              <Link
                href={whatsappUrl}
                target="_blank"
                className="mt-2 inline-flex items-center gap-2 text-white"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                Book on WhatsApp
              </Link>
            </div>
          ) : null}

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_180px]">
            <label className="relative">
              <span className="sr-only">Full Name</span>
              <Input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Full Name"
                required
                className="rounded-none border-white/18 bg-transparent pr-11 text-white placeholder:text-white/56 focus:border-[#B87955] focus:ring-[#B87955]/10"
              />
              <UserRound className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/42" />
            </label>

            <label className="relative">
              <span className="sr-only">Phone Number</span>
              <Input
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                placeholder="Phone Number"
                type="tel"
                required
                className="rounded-none border-white/18 bg-transparent pr-11 text-white placeholder:text-white/56 focus:border-[#B87955] focus:ring-[#B87955]/10"
              />
              <Phone className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/42" />
            </label>

            <label>
              <span className="sr-only">Service</span>
              <Select
                value={form.service}
                onValueChange={(value) => setForm({ ...form, service: value })}
                required
              >
                <SelectTrigger className="rounded-none border-white/18 bg-transparent text-white focus:border-[#B87955] focus:ring-[#B87955]/10">
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.title} value={service.title}>
                      {service.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>

            <label className="relative">
              <span className="sr-only">Preferred Date</span>
              <Input
                value={form.preferredDate}
                onChange={(event) => setForm({ ...form, preferredDate: event.target.value })}
                type="date"
                required
                className="rounded-none border-white/18 bg-transparent pr-11 text-white focus:border-[#B87955] focus:ring-[#B87955]/10"
              />
              <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/42" />
            </label>

            <label className="relative">
              <span className="sr-only">Preferred Time</span>
              <Input
                value={form.preferredTime}
                onChange={(event) => setForm({ ...form, preferredTime: event.target.value })}
                type="time"
                required
                className="rounded-none border-white/18 bg-transparent pr-11 text-white focus:border-[#B87955] focus:ring-[#B87955]/10"
              />
              <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/42" />
            </label>

            <Button
              type="submit"
              className="h-[52px] rounded-none bg-[#76022A] px-5 shadow-none hover:bg-[#62001F]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Book Appointment"}
            </Button>
          </div>

          <Link
            href={whatsappUrl}
            target="_blank"
            className="flex items-center justify-center gap-2 text-sm text-white/68 transition hover:text-white xl:justify-start"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            Prefer WhatsApp? Click to chat with us instantly.
          </Link>
        </div>
      </form>
    </section>
  );
}