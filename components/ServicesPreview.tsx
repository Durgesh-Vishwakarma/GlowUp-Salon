"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/constants";
import { RevealText, EyebrowReveal } from "./Animations";

export function ServicesPreview() {
  return (
    <section id="services" style={{ backgroundColor: "#F7F3EF" }}>
      <div className="mx-auto w-full max-w-[1380px] px-6 py-16 sm:px-10 md:py-20 lg:px-14">

        {/* Section Header */}
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-[2px]"
                style={{ backgroundColor: "#7C1034" }}
              />
              <EyebrowReveal
                text="What We Offer"
                className="font-sans font-bold uppercase text-[11px] text-[#7C1034]"
              />
            </div>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(38px, 4.5vw, 58px)", lineHeight: 1.06, color: "#0A0909" }}
            >
              <RevealText text="Our Services" />
            </h2>
          </div>
          <p
            className="max-w-[340px] leading-relaxed lg:text-right"
            style={{ fontSize: "16px", color: "#5E5555" }}
          >
            Every service is crafted with expert care,&nbsp;premium products and a commitment to your comfort.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col overflow-hidden bg-white"
                style={{
                  border: "1px solid #E2D8D0",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  transition: "transform 0.28s, box-shadow 0.28s, border-color 0.28s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 48px rgba(124,16,52,0.14)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#7C1034";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "#E2D8D0";
                }}
              >
                {/* Top hover accent */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ backgroundColor: "#7C1034" }}
                />

                <div className="flex flex-1 flex-col p-8">
                  {/* Icon box */}
                  <div
                    className="mb-6 flex h-[56px] w-[56px] items-center justify-center"
                    style={{ border: "1px solid #E2D8D0", backgroundColor: "#F7F3EF" }}
                  >
                    <Icon className="h-6 w-6" style={{ color: "#7C1034" }} strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-bold"
                    style={{ fontSize: "24px", lineHeight: 1.2, color: "#0A0909", marginBottom: "12px" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="flex-1 leading-relaxed"
                    style={{ fontSize: "15px", color: "#5E5555", lineHeight: 1.7 }}
                  >
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6" style={{ height: "1px", backgroundColor: "#EDE5DF" }} />

                  {/* Price + Arrow */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-sans font-bold"
                      style={{ fontSize: "16px", color: "#7C1034" }}
                    >
                      {service.price}
                    </span>
                    <span
                      className="flex h-9 w-9 items-center justify-center border transition-all duration-300 group-hover:bg-[#7C1034] group-hover:border-[#7C1034] group-hover:text-white"
                      style={{ borderColor: "#DDD3C8", color: "#B0A09A" }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center relative z-10">
          <Link href="#booking" id="services-book-cta" className="btn-primary">
            Book Any Service
            <ArrowRight className="h-4 w-4" />
          </Link>
          <p style={{ fontSize: "14px", color: "#9A8F8A" }}>or chat on WhatsApp for instant booking</p>
        </div>
      </div>
    </section>
  );
}
