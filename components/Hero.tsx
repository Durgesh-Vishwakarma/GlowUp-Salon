"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Star, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofItems = [
  { icon: Star, label: "4.9 / 5", detail: "Google Rating" },
  { icon: UsersRound, label: "12K+", detail: "Happy Clients" },
  { icon: MessageCircle, label: "Instant Booking", detail: "via WhatsApp" }
];

export function Hero() {
  return (
    <section id="home" className="bg-[#fffdf9]">
      <div className="grid min-h-[560px] lg:grid-cols-[44%_56%]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex items-center px-6 py-12 sm:px-10 lg:px-16 xl:px-28"
        >
          <div className="max-w-[650px]">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-16 bg-[#b77b56]" />
              <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[#6d5148]">
                Premium beauty. Personalized for you.
              </p>
            </div>

            <h1 className="font-display text-[58px] font-semibold leading-[0.96] tracking-normal text-[#17110f] sm:text-[78px] xl:text-[104px]">
              Look confident.
              <br />
              Feel <span className="text-[#62001f]">beautiful.</span>
            </h1>

            <p className="mt-6 max-w-[500px] text-[18px] leading-7 text-[#28211f]">
              Premium Hair, Skin, Bridal & Spa Services in Bandra crafted with expertise
              and the finest products. Book your appointment in seconds.
            </p>

            <div className="mt-8 grid gap-4 sm:flex">
              <Link href="#booking">
                <Button className="h-[52px] w-full rounded-[3px] bg-[#62001f] px-7 shadow-none hover:bg-[#4b061d] sm:w-auto">
                  Book Your Appointment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  variant="outline"
                  className="h-[52px] w-full rounded-[3px] border-[#6a2338] bg-transparent px-8 text-[#4b061d] shadow-none hover:bg-[#fbf2ef] sm:w-auto"
                >
                  View Services
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {proofItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-4 ${
                      index > 0 ? "sm:border-l sm:border-[#e7d8cc] sm:pl-8" : ""
                    }`}
                  >
                    <Icon className="h-8 w-8 text-[#b77b56]" />
                    <div>
                      <p className="text-[15px] font-bold text-[#17110f]">{item.label}</p>
                      <p className="text-[12px] text-[#756760]">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          className="relative min-h-[330px] lg:min-h-[560px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=90"
            alt="Luxury salon hair spa treatment at GlowUp Salon and Spa"
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.08),transparent_24%)]" />
        </motion.div>
      </div>
    </section>
  );
}
