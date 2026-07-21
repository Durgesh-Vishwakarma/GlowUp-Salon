import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, services, siteUrl } from "@/lib/constants";
import { servicePages } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Salon Services & Price List in Bandra West, Mumbai",
  description:
    "Full service and price list for GlowUp Salon & Spa, Bandra West — haircuts from ₹799, facials from ₹1,499, nails from ₹999, hair spa from ₹1,999, bridal from ₹9,999.",
  keywords: [
    "salon price list Bandra",
    "salon services Mumbai",
    "beauty parlour Bandra West",
    "unisex salon services Mumbai"
  ],
  alternates: { canonical: "/services" }
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Salon services at GlowUp Salon & Spa, Bandra West",
  itemListElement: servicePages.map((page, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: page.title,
    url: `${siteUrl}/services/${page.slug}`
  }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` }
  ]
};

export default function ServicesIndex() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 sm:px-10 lg:px-14">
          <nav aria-label="Breadcrumb">
            <ol
              className="flex items-center gap-2"
              style={{ fontSize: "13px", color: "#9A8F8A" }}
            >
              <li>
                <Link href="/" className="hover:text-[#7C1034]">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li aria-current="page" style={{ color: "#0A0909" }}>
                Services
              </li>
            </ol>
          </nav>

          <div className="max-w-[760px] pb-14 pt-10">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[2px] w-10" style={{ backgroundColor: "#B8733A" }} />
              <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#7C1034]">
                Services & Prices
              </span>
            </div>
            <h1
              className="text-balance font-display font-bold"
              style={{
                fontSize: "clamp(36px, 4.6vw, 60px)",
                lineHeight: 1.06,
                letterSpacing: "-0.02em",
                color: "#0A0909"
              }}
            >
              Salon services in Bandra West, Mumbai
            </h1>
            <p
              className="mt-7 leading-relaxed"
              style={{ fontSize: "18px", color: "#5E5555", lineHeight: 1.75 }}
            >
              Hair, skin, nails, spa and makeup under one roof, seven days a week. Below is what we
              do and what it costs. Pick a service to read how the appointment actually runs, or
              message us and we will recommend one after a few questions.
            </p>
            <p className="mt-5" style={{ fontSize: "15px", color: "#9A8F8A", lineHeight: 1.7 }}>
              We regularly serve clients from {business.areasServed.slice(0, -1).join(", ")} and{" "}
              {business.areasServed.slice(-1)}.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#F7F3EF" }}>
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 sm:px-10 md:py-20 lg:px-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePages.map((page) => {
              const match = services.find((s) => s.slug === page.slug);
              return (
                <article
                  key={page.slug}
                  className="group flex flex-col overflow-hidden bg-white"
                  style={{ border: "1px solid #E2D8D0" }}
                >
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image
                      src={page.image}
                      alt={page.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h2
                      className="font-display font-bold"
                      style={{ fontSize: "23px", lineHeight: 1.2, color: "#0A0909" }}
                    >
                      <Link
                        href={`/services/${page.slug}`}
                        className="transition-colors hover:text-[#7C1034]"
                      >
                        {page.title}
                      </Link>
                    </h2>
                    <p
                      className="mt-3 flex-1 leading-relaxed"
                      style={{ fontSize: "15px", color: "#5E5555", lineHeight: 1.7 }}
                    >
                      {match?.description}
                    </p>
                    <div
                      className="mt-6 flex items-center justify-between border-t pt-5"
                      style={{ borderColor: "#EDE5DF" }}
                    >
                      <span
                        className="font-sans font-bold"
                        style={{ fontSize: "16px", color: "#7C1034" }}
                      >
                        {match?.price}
                      </span>
                      <Link
                        href={`/services/${page.slug}`}
                        aria-label={`View ${page.title} details and prices`}
                        className="inline-flex items-center gap-2 font-sans font-bold"
                        style={{ fontSize: "14px", color: "#0A0909" }}
                      >
                        Details
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href="/#booking" className="btn-primary">
              Book an appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p style={{ fontSize: "14px", color: "#9A8F8A" }}>
              or message us on WhatsApp for today&apos;s availability
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
