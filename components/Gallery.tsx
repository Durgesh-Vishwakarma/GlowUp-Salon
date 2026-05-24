import Image from "next/image";
import { galleryImages } from "@/lib/constants";
import { SectionHeader } from "@/components/SectionHeader";

export function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Gallery"
          title="A visual preview of the salon experience"
          description="Warm, polished imagery gives salon owners the premium first impression this demo needs."
        />
        <div className="grid auto-rows-[230px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <figure
              key={image.title}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${
                index === 0 || index === 2 ? "lg:row-span-2" : ""
              } ${index === 1 ? "lg:col-span-2" : ""}`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/86 p-3 shadow-sm backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
                  {image.category}
                </p>
                <p className="mt-1 font-semibold">{image.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
