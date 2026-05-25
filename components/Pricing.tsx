import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { pricing } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Service menu"
            title="Transparent starting prices for your glow plan"
            description="Choose a quick refresh, a special occasion look or a complete beauty ritual. Final pricing is confirmed after consultation."
            align="left"
          />
          <Link href="#booking">
            <Button size="lg">
              Book Your Appointment
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-glow backdrop-blur-xl sm:p-6">
          <div className="grid gap-2">
            {pricing.map((item, index) => (
              <div
                key={item.service}
                className={`grid gap-3 rounded-3xl p-4 transition hover:bg-white sm:grid-cols-[1fr_auto] sm:items-center ${
                  index === 1 ? "bg-espresso text-white shadow-soft" : "bg-white/48"
                }`}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className={`mt-1 h-5 w-5 shrink-0 ${
                      index === 1 ? "text-accent" : "text-primary"
                    }`}
                  />
                  <div>
                    <p className="font-semibold">{item.service}</p>
                    <p
                      className={`mt-1 text-xs font-bold uppercase tracking-[0.16em] ${
                        index === 1 ? "text-white/58" : "text-muted-foreground"
                      }`}
                    >
                      {item.tag}
                    </p>
                  </div>
                </div>
                <span
                  className={`font-display text-2xl font-semibold ${
                    index === 1 ? "text-accent" : "text-primary"
                  }`}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
