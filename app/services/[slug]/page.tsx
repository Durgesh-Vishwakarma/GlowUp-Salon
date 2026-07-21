import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Faq } from "@/components/Faq";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { business, services, siteUrl } from "@/lib/constants";
import { getServicePage, servicePages } from "@/lib/seo-content";
import { createWhatsAppUrl } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) return {};

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}/services/${page.slug}`,
      type: "article",
      images: [{ url: page.image, alt: page.imageAlt }]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [page.image]
    }
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const page = getServicePage(slug);

  if (!page) notFound();

  const related = servicePages.filter((p) => p.slug !== page.slug).slice(0, 3);
  const whatsappUrl = createWhatsAppUrl(
    `Hi GlowUp Salon, I would like to book ${page.title} in Bandra West.`,
    business.phoneRaw
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/services/${page.slug}/#service`,
    name: page.title,
    serviceType: page.title,
    description: page.metaDescription,
    url: `${siteUrl}/services/${page.slug}`,
    image: page.image,
    provider: { "@id": `${siteUrl}/#salon` },
    areaServed: business.areasServed.map((area) => ({ "@type": "Place", name: area })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${page.title} at ${business.name}`,
      itemListElement: page.items.map((item) => ({
        "@type": "Offer",
        priceCurrency: "INR",
        name: item.name,
        description: item.detail,
        itemOffered: { "@type": "Service", name: item.name }
      }))
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/services/${page.slug}/#faq`,
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${siteUrl}/services/${page.slug}`
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1380px] px-6 pt-10 sm:px-10 lg:px-14">
          <nav aria-label="Breadcrumb">
            <ol
              className="flex flex-wrap items-center gap-2"
              style={{ fontSize: "13px", color: "#9A8F8A" }}
            >
              <li>
                <Link href="/" className="hover:text-[#7C1034]">
                  Home
                </Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li>
                <Link href="/services" className="hover:text-[#7C1034]">
                  Services
                </Link>
              </li>
              <ChevronRight className="h-3.5 w-3.5" />
              <li aria-current="page" style={{ color: "#0A0909" }}>
                {page.title}
              </li>
            </ol>
          </nav>

          <div className="grid gap-12 pb-16 pt-10 lg:grid-cols-2 lg:gap-16 lg:pb-20">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-10" style={{ backgroundColor: "#B8733A" }} />
                <span className="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-[#7C1034]">
                  {page.eyebrow}
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
                {page.h1}
              </h1>

              <p
                className="mt-7 leading-relaxed"
                style={{ fontSize: "18px", color: "#5E5555", lineHeight: 1.75, maxWidth: "520px" }}
              >
                {page.intro}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/#booking" className="btn-primary">
                  Book Appointment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask on WhatsApp
                </Link>
              </div>

              <p className="mt-7" style={{ fontSize: "14px", color: "#9A8F8A" }}>
                {business.streetAddress}, {business.locality} · Open {business.timing}
              </p>
            </div>

            <div className="relative h-[380px] w-full overflow-hidden md:h-[520px]">
              <Image
                src={page.image}
                alt={page.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Body copy ── */}
      <section style={{ backgroundColor: "#F7F3EF" }}>
        <div className="mx-auto grid w-full max-w-[1380px] gap-12 px-6 py-16 sm:px-10 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-14">
          <div>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1.1, color: "#0A0909" }}
            >
              What to expect
            </h2>
            <div className="mt-7 flex flex-col gap-5">
              {page.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="leading-relaxed"
                  style={{ fontSize: "17px", color: "#5E5555", lineHeight: 1.8 }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Price table */}
          <div>
            <h2
              className="font-display font-bold"
              style={{ fontSize: "clamp(30px, 3.4vw, 44px)", lineHeight: 1.1, color: "#0A0909" }}
            >
              Prices
            </h2>
            <ul className="mt-7 flex flex-col bg-white" style={{ border: "1px solid #E2D8D0" }}>
              {page.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1 px-6 py-5"
                  style={{ borderBottom: "1px solid #EDE5DF" }}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span
                      className="font-sans font-bold"
                      style={{ fontSize: "16px", color: "#0A0909" }}
                    >
                      {item.name}
                    </span>
                    <span
                      className="shrink-0 font-sans font-bold"
                      style={{ fontSize: "16px", color: "#7C1034" }}
                    >
                      {item.price}
                    </span>
                  </div>
                  <span style={{ fontSize: "14px", color: "#9A8F8A", lineHeight: 1.6 }}>
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4" style={{ fontSize: "13px", color: "#9A8F8A", lineHeight: 1.7 }}>
              Prices are indicative starting points. Final quotes depend on hair length, skin
              condition and the package chosen, and are confirmed before we begin.
            </p>
          </div>
        </div>
      </section>

      <Faq
        items={page.faqs}
        eyebrow={`${page.title} FAQs`}
        heading={`${page.title} — your questions answered`}
      />

      {/* ── Related services ── */}
      <section style={{ backgroundColor: "#F7F3EF" }}>
        <div className="mx-auto w-full max-w-[1380px] px-6 py-16 sm:px-10 md:py-20 lg:px-14">
          <h2
            className="font-display font-bold"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.1, color: "#0A0909" }}
          >
            Other services at our Bandra West salon
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const match = services.find((s) => s.slug === item.slug);
              return (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group flex flex-col bg-white p-8 transition-shadow hover:shadow-lg"
                  style={{ border: "1px solid #E2D8D0" }}
                >
                  <h3
                    className="font-display font-bold"
                    style={{ fontSize: "22px", lineHeight: 1.2, color: "#0A0909" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-3 flex-1 leading-relaxed"
                    style={{ fontSize: "15px", color: "#5E5555", lineHeight: 1.7 }}
                  >
                    {match?.description ?? item.intro}
                  </p>
                  <span
                    className="mt-6 inline-flex items-center gap-2 font-sans font-bold"
                    style={{ fontSize: "15px", color: "#7C1034" }}
                  >
                    {match?.price}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
