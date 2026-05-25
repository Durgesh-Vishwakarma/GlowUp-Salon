import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";
import { offers } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Offers() {
  return (
    <section id="offers" className="section-padding bg-[#F3E7DA]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Current offers"
          title="Campaigns that make booking feel irresistible"
          description="Premium offer cards create urgency without discount-bin energy."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {offers.map((offer, index) => (
            <article
              key={offer.title}
              className={`group relative overflow-hidden rounded-[2rem] p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-glow ${
                index === 1
                  ? "bg-espresso text-white"
                  : "border border-white/70 bg-white/68 backdrop-blur-xl"
              }`}
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-blush/40 blur-2xl" />
              <Gift
                className={`absolute right-6 top-6 h-10 w-10 ${
                  index === 1 ? "text-accent/45" : "text-primary/18"
                }`}
              />
              <span
                className={`relative mb-10 inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] ${
                  index === 1 ? "bg-white/10 text-accent" : "bg-primary/10 text-primary"
                }`}
              >
                {offer.label}
              </span>
              <h3 className="relative font-display text-2xl font-semibold">{offer.title}</h3>
              <p
                className={`relative mt-3 min-h-16 text-sm leading-6 ${
                  index === 1 ? "text-white/68" : "text-muted-foreground"
                }`}
              >
                {offer.description}
              </p>
              <Link
                href="#booking"
                className={`relative mt-7 inline-flex items-center gap-2 text-sm font-bold ${
                  index === 1 ? "text-accent" : "text-primary"
                }`}
              >
                {offer.cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
