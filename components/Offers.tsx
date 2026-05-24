import { Gift } from "lucide-react";
import { offers } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Offers() {
  return (
    <section id="offers" className="section-padding bg-[#fff8ef]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Offers"
          title="Beauty deals that feel premium, not cheap"
          description="Softly highlighted offers give visitors a reason to take action today."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer) => (
            <article
              key={offer.title}
              className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-soft ring-1 ring-border/70 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="mb-8 inline-flex rounded-full bg-accent/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                {offer.label}
              </span>
              <Gift className="absolute right-6 top-6 h-10 w-10 text-primary/16" />
              <h3 className="font-display text-2xl font-semibold">{offer.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {offer.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
