"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { business, trustBadges } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(210,153,66,0.22),transparent_32%),linear-gradient(135deg,#fff8ef_0%,#f7e8dc_55%,#fdf8f1_100%)]"
    >
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-10 py-12 md:grid-cols-[1.02fr_0.98fr] md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-2"
        >
          <p className="mb-4 inline-flex rounded-full border border-primary/18 bg-white/72 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm">
            Premium beauty studio in {business.location}
          </p>
          <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            {business.tagline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            {business.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="#booking">
              <Button size="lg" className="w-full sm:w-auto">
                <CalendarCheck className="h-5 w-5" />
                Book Appointment
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                View Services
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 rounded-2xl bg-white/72 p-3 text-sm font-semibold shadow-sm ring-1 ring-white/70"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/18 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  {badge.label}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/5] max-h-[680px] overflow-hidden rounded-[2rem] bg-white p-3 shadow-glow">
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85"
              alt="Premium salon hairstyling at GlowUp Salon and Spa"
              fill
              priority
              sizes="(min-width: 768px) 48vw, 94vw"
              className="rounded-[1.55rem] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/88 p-4 shadow-soft backdrop-blur">
              <p className="font-display text-2xl font-semibold">Fresh glow, zero stress.</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Online booking built for modern beauty clients.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
