"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck, MessageCircle, Send } from "lucide-react";
import { business, services } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import type { BookingPayload } from "@/types/booking";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const initialForm: BookingPayload = {
  name: "",
  phone: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: ""
};

export function BookingForm() {
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
      setError("Please fill name, phone, service, preferred date and preferred time.");
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
      setError("Unable to submit right now. Please try WhatsApp booking.");
      return;
    }

    setStatus("success");
    setForm(initialForm);
  }

  return (
    <section id="booking" className="section-padding bg-background">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Book now"
            title="Request an appointment in under a minute"
            description="The form is ready for a Supabase insert later, while WhatsApp stays available for quick local-business conversion."
            align="left"
          />
          <div className="rounded-3xl bg-primary p-6 text-primary-foreground shadow-glow">
            <CalendarCheck className="mb-5 h-9 w-9" />
            <p className="font-display text-3xl font-semibold">Fast follow-up</p>
            <p className="mt-3 text-sm leading-6 text-primary-foreground/82">
              After a booking request, the salon team can confirm the slot by call or WhatsApp.
            </p>
            <Link href={whatsappUrl} target="_blank" className="mt-6 inline-block">
              <Button variant="secondary">
                <MessageCircle className="h-4 w-4" />
                Continue on WhatsApp
              </Button>
            </Link>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-white p-5 shadow-glow ring-1 ring-border/70 sm:p-7"
        >
          {status === "success" ? (
            <div className="mb-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800">
              Thank you! Our team will contact you shortly to confirm your appointment.
            </div>
          ) : null}
          {error ? (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">
              {error}
            </div>
          ) : null}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-semibold">
              Name
              <Input
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your name"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-semibold">
              Phone
              <Input
                value={form.phone}
                onChange={(event) => setForm({ ...form, phone: event.target.value })}
                placeholder="+91..."
                type="tel"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-semibold sm:col-span-2">
              Service
              <Select
                value={form.service}
                onValueChange={(value) => setForm({ ...form, service: value })}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
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
            <label className="space-y-2 text-sm font-semibold">
              Preferred date
              <Input
                value={form.preferredDate}
                onChange={(event) => setForm({ ...form, preferredDate: event.target.value })}
                type="date"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-semibold">
              Preferred time
              <Input
                value={form.preferredTime}
                onChange={(event) => setForm({ ...form, preferredTime: event.target.value })}
                type="time"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-semibold sm:col-span-2">
              Message
              <Textarea
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Tell us about the occasion, hair length, skin concern or any preference."
              />
            </label>
          </div>

          <Button type="submit" size="lg" className="mt-6 w-full" disabled={status === "loading"}>
            <Send className="h-4 w-4" />
            {status === "loading" ? "Sending..." : "Request Appointment"}
          </Button>
        </form>
      </div>
    </section>
  );
}
