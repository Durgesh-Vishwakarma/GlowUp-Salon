"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { CalendarCheck, MessageCircle, Send, ShieldCheck, Sparkles } from "lucide-react";
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
    <section id="booking" className="section-padding relative overflow-hidden bg-background">
      <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-blush/45 blur-3xl" />
      <div className="section-shell relative grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Book now"
            title="Reserve your glow session"
            description="Share your preferred service and timing. Our team will call or message you to confirm the best available slot."
            align="left"
          />
          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-espresso p-6 text-white shadow-glow">
              <CalendarCheck className="mb-5 h-9 w-9 text-accent" />
              <p className="font-display text-3xl font-semibold">Quick confirmation</p>
              <p className="mt-3 text-sm leading-6 text-white/68">
                Most appointments are confirmed quickly by phone or WhatsApp during salon hours.
              </p>
              <Link href={whatsappUrl} target="_blank" className="mt-6 inline-block">
                <Button variant="secondary">
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="glass-panel rounded-3xl p-5">
                <ShieldCheck className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold">Hygienic care</p>
                <p className="mt-1 text-sm text-muted-foreground">Sanitized tools and fresh stations.</p>
              </div>
              <div className="glass-panel rounded-3xl p-5">
                <Sparkles className="mb-3 h-5 w-5 text-primary" />
                <p className="font-semibold">Personal styling</p>
                <p className="mt-1 text-sm text-muted-foreground">Looks tailored to your occasion.</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2.25rem] border border-white/70 bg-white/72 p-5 shadow-glow backdrop-blur-2xl sm:p-7"
        >
          {status === "success" ? (
            <div className="mb-5 rounded-2xl border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800">
              <p>Thank you! Our team will contact you shortly to confirm your appointment.</p>
              <Link href={whatsappUrl} target="_blank" className="mt-3 inline-flex">
                <Button type="button" variant="secondary" size="sm">
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </Button>
              </Link>
            </div>
          ) : null}
          {error ? (
            <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800">
              <p>{error}</p>
              <Link href={whatsappUrl} target="_blank" className="mt-3 inline-flex">
                <Button type="button" variant="secondary" size="sm">
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </Button>
              </Link>
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
          <Link
            href={whatsappUrl}
            target="_blank"
            className="mt-3 flex justify-center text-sm font-semibold text-primary transition hover:text-foreground"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Book on WhatsApp
          </Link>
        </form>
      </div>
    </section>
  );
}
