import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  HandHeart,
  Paintbrush,
  Scissors,
  Sparkles,
  Star,
  UserRound
} from "lucide-react";
import { editorialOffers, editorialPricing, galleryImages } from "@/lib/constants";

const serviceTiles = [
  { label: "Hair Care", icon: Scissors },
  { label: "Skin Treatments", icon: UserRound },
  { label: "Bridal Packages", icon: Sparkles },
  { label: "Nail Studio", icon: Paintbrush },
  { label: "Spa & Wellness", icon: Flower2 },
  { label: "Makeup Studio", icon: HandHeart }
];

export function EditorialPanels() {
  return (
    <section className="grid border-y border-[#e8ddd4] bg-[#fffdf9] lg:grid-cols-2 xl:grid-cols-[23%_19%_21%_17%_20%]">
      <div id="services" className="border-[#e8ddd4] p-7 xl:border-r">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b77b56]">
          Our services
        </p>
        <h2 className="font-display text-3xl leading-tight text-[#17110f]">
          Beauty. Redefined.
        </h2>
        <span className="mt-4 block h-px w-12 bg-[#9b6c54]" />

        <div className="mt-8 grid grid-cols-2 rounded-[4px] border border-[#eaded4]">
          {serviceTiles.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.label} className="min-h-[86px] border border-[#eaded4] p-5">
                <Icon className="mb-3 h-7 w-7 stroke-[1.35] text-[#b77b56]" />
                <p className="text-[13px] font-semibold leading-4 text-[#17110f]">
                  {service.label}
                </p>
              </div>
            );
          })}
        </div>
        <Link
          href="#booking"
          className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#62001f]"
        >
          Explore all services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div id="pricing" className="bg-[#17191b] p-7 text-white">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b77b56]">
          Pricing
        </p>
        <h2 className="font-display text-3xl leading-tight">
          Luxury, Made
          <br />
          Accessible
        </h2>
        <div className="mt-7">
          {editorialPricing.map((item) => (
            <div key={item.service} className="flex justify-between border-t border-white/12 py-3 text-sm">
              <span className="text-white/82">{item.service}</span>
              <span className="font-semibold text-white">{item.price}</span>
            </div>
          ))}
        </div>
        <Link
          href="#booking"
          className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#d7a85a]"
        >
          View full price list <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div id="gallery" className="border-[#e8ddd4] p-7 xl:border-r">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b77b56]">
          Gallery
        </p>
        <h2 className="font-display text-3xl leading-tight text-[#17110f]">
          Where Beauty
          <br />
          Comes to Life
        </h2>
        <div className="mt-6 grid grid-cols-3 gap-2">
          {galleryImages.slice(0, 6).map((image, index) => (
            <div
              key={image.title}
              className={`relative overflow-hidden rounded-[4px] ${
                index === 0 ? "col-span-2 row-span-2 min-h-[190px]" : "min-h-[92px]"
              }`}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 30vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <Link
          href="#gallery"
          className="mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#62001f]"
        >
          View full gallery <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div id="offers" className="bg-[#650020] p-7 text-white">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#d7a85a]">
          Offers
        </p>
        <h2 className="font-display text-3xl leading-tight">
          Exclusive Offers
          <br />
          For You
        </h2>
        <div className="mt-8 space-y-6">
          {editorialOffers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div key={offer.title} className="flex gap-4">
                <Icon className="mt-1 h-7 w-7 shrink-0 stroke-[1.35] text-[#d7a85a]" />
                <div>
                  <p className="text-sm font-semibold">{offer.title}</p>
                  <p className="mt-1 text-xs leading-5 text-white/70">{offer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          href="#booking"
          className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#d7a85a]"
        >
          View all offers <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div id="reviews" className="p-7 lg:col-span-2 xl:col-span-1">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b77b56]">
          Reviews
        </p>
        <h2 className="font-display text-3xl leading-tight text-[#17110f]">
          Loved By
          <br />
          Thousands
        </h2>
        <div className="mt-8 rounded-[4px] border border-[#eaded4] bg-white p-6 shadow-soft">
          <div className="mb-5 flex items-center gap-2 text-[#b77b56]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-4 w-4 fill-current" />
            ))}
            <span className="ml-3 text-sm font-semibold text-[#17110f]">4.9</span>
          </div>
          <p className="text-sm leading-6 text-[#28211f]">
            &ldquo;Absolutely loved the experience! The staff is professional, warm and the
            results are always amazing.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
                alt="GlowUp Salon client review"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-[#17110f]">Ananya Mehta</p>
              <p className="text-[11px] text-[#756760]">Bandra, Mumbai</p>
            </div>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`h-1.5 w-1.5 rounded-full ${dot === 0 ? "bg-[#650020]" : "bg-[#d7cdc3]"}`}
              />
            ))}
          </div>
        </div>
        <Link
          href="#reviews"
          className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#62001f]"
        >
          Read more reviews <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
