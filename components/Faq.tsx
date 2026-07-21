"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { RevealText, EyebrowReveal } from "./Animations";

type FaqItem = { question: string; answer: string };

export function Faq({
  items,
  eyebrow = "Frequently Asked Questions",
  heading = "Questions we get every week",
  intro
}: {
  items: FaqItem[];
  eyebrow?: string;
  heading?: string;
  intro?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto w-full max-w-[1380px] px-6 py-16 sm:px-10 md:py-20 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Header */}
          <div>
            <div className="mb-6 flex items-center gap-4">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-[2px]"
                style={{ backgroundColor: "#7C1034" }}
              />
              <EyebrowReveal
                text={eyebrow}
                className="font-sans text-[11px] font-bold uppercase text-[#7C1034]"
              />
            </div>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(34px, 4vw, 52px)",
                lineHeight: 1.08,
                color: "#0A0909"
              }}
            >
              <RevealText text={heading} />
            </h2>
            {intro ? (
              <p
                className="mt-6 max-w-[420px] leading-relaxed"
                style={{ fontSize: "16px", color: "#5E5555", lineHeight: 1.75 }}
              >
                {intro}
              </p>
            ) : null}
          </div>

          {/* Accordion */}
          <div className="flex flex-col" style={{ borderTop: "1px solid #E2D8D0" }}>
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.question} style={{ borderBottom: "1px solid #E2D8D0" }}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-[#7C1034]"
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: isOpen ? "#7C1034" : "#0A0909"
                      }}
                    >
                      {item.question}
                      <Plus
                        className="h-5 w-5 shrink-0 transition-transform duration-300"
                        strokeWidth={1.5}
                        style={{
                          color: "#B8733A",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
                        }}
                      />
                    </button>
                  </h3>

                  {/* Answer is always in the DOM so crawlers read it. */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        id={`faq-answer-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pb-6 pr-10 leading-relaxed"
                          style={{ fontSize: "16px", color: "#5E5555", lineHeight: 1.8 }}
                        >
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isOpen && (
                    <span className="sr-only" id={`faq-answer-${i}`}>
                      {item.answer}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
