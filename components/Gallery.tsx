import Image from "next/image";
import { galleryImages } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Gallery"
          title="Editorial glimpses of the GlowUp experience"
          description="A beauty website sells through visuals first. The gallery is shaped to feel aspirational, calm and premium."
        />
        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 p-2 shadow-soft backdrop-blur-xl ${
                index === 0 || index === 2 ? "lg:row-span-2" : ""
              } ${index === 1 || index === 6 ? "lg:col-span-2" : ""}`}
            >
              <div className="relative h-full overflow-hidden rounded-[1.55rem]">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(23,17,15,0.62)_100%)]" />
                <figcaption className="absolute inset-x-4 bottom-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
                    {image.category}
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-white">
                    {image.title}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
