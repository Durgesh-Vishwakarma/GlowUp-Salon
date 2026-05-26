"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { RevealText, EyebrowReveal } from "./Animations";

export function Reviews() {
  return (
    <section className="bg-[#F7F3EF] py-16 md:py-20">
      <div className="mx-auto max-w-[1380px] px-6 sm:px-10 lg:px-14">
        
        <div className="mb-16 text-center">
          <EyebrowReveal
            text="Client Stories"
            className="font-sans font-bold uppercase text-[11px] text-[#7C1034]"
          />
          <h2
            className="mt-4 font-display font-bold"
            style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: 1.1, color: "#0A0909" }}
          >
            <RevealText text="Loved by " />
            <span style={{ color: "#B8733A" }}>
              <RevealText text="our guests" delay={0.2} />
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col border border-[#E2D8D0] bg-white p-8 lg:p-10"
              style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.03)" }}
            >
              <div className="mb-6 flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-[#B8733A] text-[#B8733A]" />
                ))}
              </div>
              <p
                className="flex-1 font-display italic leading-relaxed"
                style={{ fontSize: "20px", color: "#0A0909" }}
              >
                &quot;{t.quote}&quot;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7F3EF] font-bold text-[#7C1034] text-xs">
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold" style={{ fontSize: "14px", color: "#0A0909" }}>{t.name}</p>
                  <p style={{ fontSize: "12px", color: "#9A8F8A" }}>{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
