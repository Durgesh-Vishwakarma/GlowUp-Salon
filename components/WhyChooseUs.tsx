import { reasons } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#fbf1e6]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why choose us"
          title="Trust signals that help clients book faster"
          description="Designed to make the business feel expert, hygienic, reliable and easy to contact."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-white/80"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/18 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
