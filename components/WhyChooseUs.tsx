import { reasons } from "@/lib/constants";

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-espresso text-white">
      <div className="absolute left-[-8rem] top-0 h-80 w-80 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute bottom-[-9rem] right-[-6rem] h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="section-shell relative">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Why clients return
          </p>
          <h2 className="font-display text-3xl font-semibold leading-[1.05] text-white sm:text-4xl md:text-5xl">
            A polished salon experience from arrival to afterglow
          </h2>
          <p className="mt-4 text-base leading-7 text-white/62 md:text-lg">
            Expert care, calm interiors and quick booking make every visit feel effortless.
          </p>
        </div>
        <div className="grid overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] shadow-glow backdrop-blur-xl md:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="border-white/10 p-6 md:border-r md:last:border-r-0"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
