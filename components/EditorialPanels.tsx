import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import {
  editorialOffers,
  editorialPricing,
  galleryPreviewImages,
  serviceTiles,
  testimonials
} from "@/lib/constants";

export function EditorialPanels() {
  const featuredReview = testimonials[0];

  return (
    <section className="bg-[#F8F5EF] px-4 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1500px] overflow-hidden border border-[#E7DDD3] bg-[#FFFDF9] lg:grid-cols-2 xl:grid-cols-[23%_19%_21%_17%_20%]">
        <div id="services" className="border-[#E7DDD3] p-7 xl:border-r">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#B87955]">
            Our services
          </p>
          <h2 className="font-display text-3xl leading-tight text-[#17110F]">
            Beauty. Redefined.
          </h2>
          <span className="mt-4 block h-px w-12 bg-[#9B6C54]" />

          <div className="mt-8 grid grid-cols-2 border border-[#EADED4]">
            {serviceTiles.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={`${service.title}-${service.subtitle}`}
                  className="min-h-[86px] border border-[#EADED4] p-5"
                >
                  <Icon className="mb-3 h-7 w-7 stroke-[1.35] text-[#B87955]" />
                  <p className="text-[13px] font-semibold leading-4 text-[#17110F]">
                    {service.title} {service.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          <PanelLink href="#booking">Explore all services</PanelLink>
        </div>

        <div id="pricing" className="bg-[#17191B] p-7 text-white">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#B87955]">
            Pricing
          </p>
          <h2 className="font-display text-3xl leading-tight">
            Luxury, Made
            <br />
            Accessible
          </h2>

          <div className="mt-7">
            {editorialPricing.map((item) => (
              <div
                key={item.service}
                className="flex justify-between gap-4 border-t border-white/12 py-3 text-sm"
              >
                <span className="text-white/82">{item.service}</span>
                <span className="shrink-0 font-semibold text-white">{item.price}</span>
              </div>
            ))}
          </div>

          <PanelLink href="#booking" dark>
            View full price list
          </PanelLink>
        </div>

        <div id="gallery" className="border-[#E7DDD3] p-7 xl:border-r">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#B87955]">
            Gallery
          </p>
          <h2 className="font-display text-3xl leading-tight text-[#17110F]">
            Where Beauty
            <br />
            Comes to Life
          </h2>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {galleryPreviewImages.map((image, index) => (
              <div
                key={image.title}
                className={`relative overflow-hidden ${
                  index === 0 ? "col-span-2 row-span-2 min-h-[190px]" : "min-h-[92px]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(min-width: 1280px) 16vw, (min-width: 1024px) 30vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <PanelLink href="#gallery">View full gallery</PanelLink>
        </div>

        <div id="offers" className="bg-[#650020] p-7 text-white">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#D7A85A]">
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
                  <Icon className="mt-1 h-7 w-7 shrink-0 stroke-[1.35] text-[#D7A85A]" />
                  <div>
                    <p className="text-sm font-semibold">{offer.title}</p>
                    <p className="mt-1 text-xs leading-5 text-white/72">{offer.subtitle}</p>
                    <p className="text-xs leading-5 text-white/52">{offer.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <PanelLink href="#booking" dark>
            View all offers
          </PanelLink>
        </div>

        <div id="reviews" className="p-7 lg:col-span-2 xl:col-span-1">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.26em] text-[#B87955]">
            Reviews
          </p>
          <h2 className="font-display text-3xl leading-tight text-[#17110F]">
            Loved By
            <br />
            Thousands
          </h2>

          <div className="mt-8 border border-[#EADED4] bg-white p-6 shadow-[0_18px_50px_rgba(17,17,17,0.08)]">
            <div className="mb-5 flex items-center gap-2 text-[#B87955]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-3 text-sm font-semibold text-[#17110F]">4.9</span>
            </div>

            <p className="text-sm leading-6 text-[#28211F]">
              &ldquo;{featuredReview.quote}&rdquo;
            </p>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#650020] text-xs font-bold text-white">
                {featuredReview.initials}
              </div>
              <div>
                <p className="text-xs font-bold text-[#17110F]">{featuredReview.name}</p>
                <p className="text-[11px] text-[#756760]">{featuredReview.location}</p>
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {[0, 1, 2, 3].map((dot) => (
                <span
                  key={dot}
                  className={`h-1.5 w-1.5 rounded-full ${
                    dot === 0 ? "bg-[#650020]" : "bg-[#D7CDC3]"
                  }`}
                />
              ))}
            </div>
          </div>

          <PanelLink href="#reviews">Read more reviews</PanelLink>
        </div>
      </div>
    </section>
  );
}

function PanelLink({
  href,
  children,
  dark = false
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`mt-8 inline-flex items-center gap-3 text-sm font-medium ${
        dark ? "text-[#D7A85A]" : "text-[#62001F]"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}