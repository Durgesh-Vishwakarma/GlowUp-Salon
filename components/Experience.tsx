"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { RevealText, EyebrowReveal, ImageReveal } from "./Animations";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-14">
        
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="mb-6 flex items-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-[2px]"
              style={{ backgroundColor: "#B8733A" }}
            />
            <EyebrowReveal
              text="The Experience"
              className="font-sans font-bold uppercase text-[11px] text-[#B8733A]"
            />
          </div>

          <h2
            className="font-display font-bold text-balance"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.05, color: "#0A0909" }}
          >
            <RevealText text="A moment of " />
            <em className="not-italic" style={{ color: "#7C1034" }}>
              <RevealText text="calm " delay={0.2} />
            </em>
            <RevealText text="in the city." delay={0.3} />
          </h2>

          <p className="mt-8 leading-relaxed" style={{ fontSize: "17px", color: "#5E5555" }}>
            At GlowUp Salon, we believe that beauty is deeply personal. From the moment you step through our doors, you are enveloped in an atmosphere of tranquility and refined luxury. 
          </p>
          <p className="mt-4 leading-relaxed" style={{ fontSize: "17px", color: "#5E5555" }}>
            Our master stylists and therapists take the time to understand your unique features, lifestyle, and desires, ensuring every treatment is perfectly tailored to elevate your natural glow.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E2D8D0]">
              <span className="font-display text-xl font-bold" style={{ color: "#7C1034" }}>G</span>
            </div>
            <div>
              <p className="font-bold uppercase tracking-widest" style={{ fontSize: "11px", color: "#0A0909" }}>
                Established 2018
              </p>
              <p style={{ fontSize: "13px", color: "#9A8F8A" }}>Bandra West, Mumbai</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Parallax Image */}
        <div className="relative h-[500px] w-full overflow-hidden md:h-[650px]">
          <ImageReveal className="h-full w-full">
            <motion.div className="absolute inset-x-0 -top-[10%] h-[120%] w-full">
              <Image
                src="https://images.pexels.com/photos/3997985/pexels-photo-3997985.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="GlowUp Salon interior experience"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </motion.div>
          </ImageReveal>
        </div>

      </div>
    </section>
  );
}
