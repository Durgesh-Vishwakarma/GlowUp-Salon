import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { pricing } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <SectionHeader
          eyebrow="Pricing"
          title="Clear starting prices, no confusion"
          description="A clean menu layout helps visitors understand the offer quickly and move toward booking."
          align="left"
        />
        <div className="rounded-[2rem] bg-white p-4 shadow-glow ring-1 ring-border/70 sm:p-6">
          <div className="grid gap-3">
            {pricing.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between gap-4 rounded-2xl bg-background/80 p-4"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-semibold">{item.service}</span>
                </div>
                <span className="shrink-0 font-display text-xl font-semibold text-primary">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <Link href="#booking" className="mt-6 block">
            <Button className="w-full">Request Appointment</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
