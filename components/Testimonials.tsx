import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Testimonials() {
  return (
    <section id="reviews" className="section-padding bg-[#fbf1e6]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Reviews"
          title="Clients remember care, comfort and easy booking"
          description="Simple testimonial cards build trust without making the page feel crowded."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-white/80"
            >
              <div className="mb-5 flex items-center justify-between">
                <Quote className="h-8 w-8 text-primary/30" />
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
    </section>
  );
}
