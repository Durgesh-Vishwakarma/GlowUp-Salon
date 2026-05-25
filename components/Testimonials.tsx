import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-[#F3E7DA]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Client love"
          title="Real confidence, not just compliments"
          description="Reviews are styled to feel warm, credible and premium on both mobile and desktop."
        />
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-[2rem] bg-espresso p-7 text-white shadow-glow">
            <Quote className="absolute right-7 top-7 h-14 w-14 text-white/10" />
            <div className="mb-7 flex text-accent">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="max-w-3xl font-display text-3xl leading-tight md:text-4xl">
              &ldquo;{testimonials[1].quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                {testimonials[1].initials}
              </span>
              <div>
                <p className="font-semibold">{testimonials[1].name}</p>
                <p className="text-sm text-white/58">Bridal consultation client</p>
              </div>
            </div>
          </article>

          <div className="grid gap-5">
            {[testimonials[0], testimonials[2]].map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[2rem] border border-white/70 bg-white/68 p-6 shadow-soft backdrop-blur-xl"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {testimonial.initials}
                  </span>
                  <div className="flex text-accent">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-base leading-7 text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-5 font-semibold text-primary">- {testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
