"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="Everything a premium salon client expects"
          description="High-converting service cards with clear pricing, elegant copy and quick scanning on mobile."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group rounded-3xl bg-white p-6 shadow-soft ring-1 ring-border/70 transition hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
                <p className="mt-5 font-semibold text-primary">{service.price}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
