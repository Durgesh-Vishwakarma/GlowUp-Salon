"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { galleryPreviewImages } from "@/lib/constants";
import { RevealText, EyebrowReveal, ImageReveal } from "./Animations";

export function GalleryPreview() {
  return (
    <section id="gallery" className="relative overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1380px] px-6 py-16 sm:px-10 md:py-20 lg:px-14">

        {/* Header */}
        <div className="mb-14">
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
              text="Salon Gallery"
              className="font-sans font-bold uppercase text-[11px] text-[#7C1034]"
            />
          </div>
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(38px, 4.5vw, 58px)", lineHeight: 1.06, color: "#0A0909" }}
          >
            <RevealText text="Inside our Bandra West salon" />
          </h2>
          <p
            className="mt-4 max-w-[500px] leading-relaxed"
            style={{ fontSize: "17px", color: "#5E5555", lineHeight: 1.75 }}
          >
            Real work from our studio — hair colour, bridal looks, nail sets and the treatment rooms you will be sitting in.
          </p>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-12 lg:grid-rows-2">

          {/* Large feature — 5 cols × 2 rows */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative col-span-2 row-span-2 overflow-hidden"
            style={{ height: "280px" }}
          >
            <div className="absolute inset-0 lg:static lg:h-full lg:min-h-[480px] lg:col-span-5 lg:row-span-2">
              <div className="relative h-full w-full overflow-hidden lg:min-h-[480px]">
                <ImageReveal className="absolute inset-0 z-0 h-full w-full">
                  <motion.div className="absolute inset-x-0 -top-[10%] h-[120%] w-full">
                    <Image
                      src={galleryPreviewImages[0].src}
                      alt={galleryPreviewImages[0].title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </motion.div>
                </ImageReveal>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
                <span
                  className="absolute bottom-4 left-4 font-sans font-bold uppercase text-white/80 z-20"
                  style={{ fontSize: "11px", letterSpacing: "0.24em" }}
                >
                  {galleryPreviewImages[0].category}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right top 1 — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative col-span-1 overflow-hidden lg:col-span-4"
            style={{ height: "240px" }}
          >
            <Image
              src={galleryPreviewImages[1].src}
              alt={galleryPreviewImages[1].title}
              fill
              sizes="(min-width: 1024px) 35vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <span
              className="absolute bottom-3 left-3 font-sans font-bold uppercase text-white/80"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}
            >
              {galleryPreviewImages[1].category}
            </span>
          </motion.div>

          {/* Right top 2 — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative col-span-1 overflow-hidden lg:col-span-3"
            style={{ height: "240px" }}
          >
            <Image
              src={galleryPreviewImages[2].src}
              alt={galleryPreviewImages[2].title}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <span
              className="absolute bottom-3 left-3 font-sans font-bold uppercase text-white/80"
              style={{ fontSize: "11px", letterSpacing: "0.22em" }}
            >
              {galleryPreviewImages[2].category}
            </span>
          </motion.div>

          {/* Bottom 3 images */}
          {galleryPreviewImages.slice(3, 6).map((img, i) => (
            <motion.div
              key={img.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08 }}
              className={`relative col-span-1 overflow-hidden ${
                i === 0 ? "lg:col-span-4" : "lg:col-span-3"
              }`}
              style={{ height: "220px" }}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span
                className="absolute bottom-3 left-3 font-sans font-bold uppercase text-white/80"
                style={{ fontSize: "11px", letterSpacing: "0.22em" }}
              >
                {img.category}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Footer bar */}
        <div
          className="mt-6 flex items-center justify-between border-t pt-5"
          style={{ borderColor: "#E2D8D0" }}
        >
          <p style={{ fontSize: "13px", color: "#9A8F8A" }}>
            {galleryPreviewImages.length} photos · GlowUp Salon &amp; Spa, Bandra West
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold transition-opacity hover:opacity-70"
            style={{ fontSize: "13px", color: "#7C1034" }}
          >
            Follow on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
}
