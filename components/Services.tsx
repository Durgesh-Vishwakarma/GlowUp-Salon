"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Beauty rituals designed for the modern client"
          description="From everyday polish to bridal transformations, every service is presented with clarity, confidence and a premium feel."
        />
        <div className="grid gap-4 md:grid-cols-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = index === 0 || index === 2;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/62 p-6 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-glow ${
                  isWide ? "md:col-span-3" : "md:col-span-2"
                }`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-blush/55 blur-3xl transition group-hover:bg-primary/20" />
                <div className="relative flex min-h-56 flex-col justify-between">
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-espresso text-accent shadow-soft">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-primary transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                  <p className="mt-8 w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
                    {service.price}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
