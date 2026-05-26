import Image from "next/image";
import { galleryImages } from "@/lib/constants";

export function Gallery() {
  return (
    <section id="gallery-full" className="bg-[#F8F5EF] px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.26em] text-[#B87955]">
              Full Gallery
            </p>
            <h2 className="font-display text-4xl leading-tight text-[#111111] md:text-6xl">
              Beauty in
              <br />
              Every Detail
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#5F5752] md:justify-self-end">
            Explore refined interiors, expert styling, bridal looks, nail details and calming spa
            rituals that shape the GlowUp experience.
          </p>
        </div>

        <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.title}
              className={`group relative overflow-hidden border border-[#E7DDD3] bg-white p-2 shadow-[0_24px_80px_rgba(17,17,17,0.08)] ${
                index === 0 || index === 2 ? "lg:row-span-2" : ""
              } ${index === 1 || index === 6 ? "lg:col-span-2" : ""}`}
            >
              <div className="relative h-full overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(17,17,17,0.72)_100%)]" />

                <figcaption className="absolute inset-x-5 bottom-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B87955]">
                    {image.category}
                  </p>
                  <p className="mt-1 font-display text-2xl leading-none text-white">
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