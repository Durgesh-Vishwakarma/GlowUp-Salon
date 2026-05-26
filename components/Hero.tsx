"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, Users } from "lucide-react";
import { business, heroImage } from "@/lib/constants";
import { createWhatsAppUrl } from "@/lib/utils";
import { RevealText, EyebrowReveal, ImageReveal } from "./Animations";

const TRUST = [
  { icon: Star, label: "4.9 / 5", sub: "Google Rating" },
  { icon: Users, label: "500+ Clients", sub: "Served & Happy" },
  { icon: MessageCircle, label: "WhatsApp Booking", sub: "Instant Confirm" }
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div
        className="mx-auto grid w-full max-w-[1380px] px-6 sm:px-10 lg:grid-cols-2 lg:px-14"
        style={{ minHeight: "calc(100vh - 80px)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="flex flex-col justify-center pb-16 pt-8 lg:pb-20 lg:pr-14 lg:pt-12"
        >
          <div className="mb-7 flex items-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              className="h-[2px]"
              style={{ backgroundColor: "#B8733A" }}
            />
            <EyebrowReveal
              text="Premium Salon Experience · Bandra West"
              className="font-sans text-[11px] font-bold uppercase text-[#7C1034]"
              delay={0.2}
            />
          </div>

          <h1
            className="text-balance font-display font-bold"
            style={{
              fontSize: "clamp(48px, 6vw, 84px)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "#0A0909"
            }}
          >
            <RevealText text="Look confident." delay={0.2} />
            <br />
            <RevealText text="Feel " delay={0.4} />
            <em className="not-italic" style={{ color: "#7C1034" }}>
              <RevealText text="beautiful." delay={0.5} />
            </em>
          </h1>

          <p
            className="mt-7 leading-relaxed"
            style={{
              fontSize: "18px",
              color: "#5E5555",
              maxWidth: "500px",
              lineHeight: 1.75
            }}
          >
            {business.description}
          </p>

          <div className="relative z-10 mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="#booking" id="hero-book-cta" className="btn-primary">
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#services" id="hero-services-cta" className="btn-outline">
              View Services
            </Link>
          </div>

          <div className="mt-11 flex flex-col gap-6 sm:flex-row sm:gap-0">
            {TRUST.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3"
                  style={
                    index > 0
                      ? {
                          borderLeft: "1px solid #E2D8D0",
                          paddingLeft: "28px",
                          marginLeft: "28px"
                        }
                      : {}
                  }
                >
                  <Icon
                    className="h-5 w-5 shrink-0"
                    style={{ color: "#B8733A" }}
                    strokeWidth={1.5}
                  />
                  <div>
                    <p
                      className="font-sans font-bold"
                      style={{ fontSize: "15px", color: "#0A0909" }}
                    >
                      {item.label}
                    </p>
                    <p className="font-sans" style={{ fontSize: "12px", color: "#9A8F8A" }}>
                      {item.sub}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link
            href={createWhatsAppUrl(business.whatsappMessage, business.phoneRaw)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 font-semibold transition-opacity hover:opacity-75"
            style={{ fontSize: "14px", color: "#25D366" }}
          >
            <MessageCircle className="h-4 w-4" />
            Or chat with us on WhatsApp →
          </Link>
        </motion.div>

        <div className="relative -mx-6 h-[280px] overflow-hidden sm:-mx-10 sm:h-[360px] lg:mx-0 lg:h-full">
          <ImageReveal className="h-full w-full" delay={0.2}>
            <motion.div className="relative h-full w-full lg:h-[120%] lg:-translate-y-[8%]">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1400}
                height={1100}
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover object-top lg:object-center"
                style={{ borderRadius: "2px" }}
              />
            </motion.div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
