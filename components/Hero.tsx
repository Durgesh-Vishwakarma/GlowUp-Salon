"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MessageCircle, Sparkles } from "lucide-react";
import { business, heroStats, trustBadges } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-20 overflow-hidden bg-[linear-gradient(135deg,#FAF7F2_0%,#F3E7DA_46%,#F8F1EA_100%)] pt-24"
    >
      <div className="absolute left-[-9rem] top-20 h-80 w-80 rounded-full bg-blush/55 blur-3xl" />
      <div className="absolute right-[-8rem] top-8 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute bottom-8 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="section-shell relative grid min-h-[calc(100vh-2rem)] items-center gap-11 py-10 md:grid-cols-[0.95fr_1.05fr] md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/58 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-soft backdrop-blur-xl">
            <Sparkles className="h-4 w-4" />
            Premium beauty studio in {business.location}
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] text-foreground sm:text-6xl lg:text-8xl">
            {business.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {business.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#booking">
              <Button size="lg" className="w-full sm:w-auto">
                <CalendarCheck className="h-5 w-5" />
                Book Your Appointment
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 hidden gap-3 md:grid md:grid-cols-3">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="rounded-3xl border border-white/70 bg-white/50 p-4 shadow-soft backdrop-blur-xl"
                >
                  <Icon className="mb-3 h-5 w-5 text-primary" />
                  <p className="text-sm font-bold">{badge.label}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">{badge.value}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          <div className="absolute -left-3 top-10 z-10 hidden rounded-3xl border border-white/70 bg-white/72 p-4 shadow-glass backdrop-blur-2xl sm:block">
            <p className="font-display text-3xl font-semibold">4.9★</p>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Rating
            </p>
          </div>
          <div className="absolute -right-2 top-1/2 z-10 hidden rounded-3xl border border-white/70 bg-espresso p-4 text-white shadow-glass sm:block">
            <MessageCircle className="mb-3 h-5 w-5 text-accent" />
            <p className="max-w-32 text-sm font-semibold">Instant WhatsApp Booking</p>
          </div>
          <div className="absolute -bottom-4 left-8 z-10 hidden rounded-3xl border border-white/70 bg-white/78 p-4 shadow-glass backdrop-blur-2xl sm:block">
            <p className="font-display text-3xl font-semibold">500+</p>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
              Happy Clients
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/55 p-3 shadow-glow backdrop-blur-xl">
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
              alt="Premium hairstyling service at GlowUp Salon and Spa"
              fill
              priority
              sizes="(min-width: 768px) 48vw, 94vw"
              className="rounded-[1.7rem] object-cover"
            />
            <div className="absolute inset-3 rounded-[1.7rem] bg-[linear-gradient(180deg,transparent_45%,rgba(23,17,15,0.64)_100%)]" />
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/20 bg-white/14 p-4 text-white shadow-soft backdrop-blur-xl">
              <p className="font-display text-2xl font-semibold">Fresh glow, zero stress.</p>
              <p className="mt-1 text-sm text-white/78">
                Expert appointments for hair, skin, nails, bridal and spa rituals.
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:hidden">
            {heroStats.map((stat) => (
              <div key={stat.label} className="glass-panel rounded-3xl p-4">
                <p className="font-semibold">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.value}</p>
              </div>
            ))}
            <Link
              href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
              target="_blank"
            >
              <Button variant="secondary" className="w-full">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
