import {
  CalendarCheck,
  Clock,
  Gem,
  HeartHandshake,
  Instagram,
  MapPin,
  MessageCircle,
  Palette,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  TicketPercent,
  UsersRound,
  Wand2
} from "lucide-react";

export const siteUrl = "https://glowupsalon.com";

export const salonContact = {
  phone: "+91 98345 17990",
  whatsappNumber: "919834517990"
};

export const business = {
  name: "GlowUp Salon & Spa",
  location: "Bandra West, Mumbai",
  tagline: "Look confident. Feel beautiful.",
  description:
    "GlowUp Salon & Spa is a unisex beauty salon in Bandra West, Mumbai, offering expert haircuts and colour, glow facials, bridal makeup, gel nail art and hair spa treatments. Walk in seven days a week, or book an appointment in under a minute on WhatsApp.",
  shortDescription:
    "Unisex hair, skin, nail and bridal makeup salon in Bandra West, Mumbai. Expert stylists, premium products, same-day appointments.",
  metaDescription:
    "Unisex salon in Bandra West, Mumbai. Haircuts from ₹799, facials from ₹1,499, bridal makeup from ₹9,999. Open 10 AM–9 PM daily — book on WhatsApp.",
  phone: salonContact.phone,
  phoneRaw: salonContact.whatsappNumber,
  timing: "10 AM - 9 PM, Monday to Sunday",
  instagram: "#",
  priceRange: "₹₹",
  founded: "2018",
  streetAddress: "Linking Road, Bandra West",
  locality: "Mumbai",
  region: "MH",
  postalCode: "400050",
  country: "IN",
  latitude: 19.0596,
  longitude: 72.8295,
  areasServed: [
    "Bandra West",
    "Bandra East",
    "Khar",
    "Santacruz",
    "Juhu",
    "Andheri West",
    "Lower Parel"
  ],
  whatsappMessage: "Hi GlowUp Salon, I want to book an appointment."
};

export const heroImage = {
  src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=90",
  alt: "GlowUp Salon - Premium hair and beauty salon interior in Bandra West, Mumbai"
};

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Book", href: "#booking" },
];

export const trustStats = [
  {
    label: "4.9 / 5",
    value: "Google Rating",
    icon: Star
  },
  {
    label: "12K+",
    value: "Happy Clients",
    icon: UsersRound
  },
  {
    label: "Instant Booking",
    value: "via WhatsApp",
    icon: MessageCircle
  }
];

export const services = [
  {
    slug: "hair-salon-bandra",
    title: "Hair Styling & Colour",
    description:
      "Precision haircuts, blow dries, keratin smoothening, balayage and global colour — shaped around your hair texture and face structure by senior stylists.",
    price: "Starting from ₹799",
    priceValue: 799,
    icon: Scissors
  },
  {
    slug: "facial-treatments-bandra",
    title: "Facials & Skin Care",
    description:
      "Glow facials, HydraFacial, de-tan treatments and deep cleanups. Every session starts with a skin analysis so the products match your skin type, not a template.",
    price: "Starting from ₹1,499",
    priceValue: 1499,
    icon: Sparkles
  },
  {
    slug: "bridal-makeup-bandra",
    title: "Bridal Makeup",
    description:
      "HD and airbrush bridal makeup with a pre-wedding trial, saree or lehenga draping and hair styling — built to hold through a full Mumbai wedding day.",
    price: "Starting from ₹9,999",
    priceValue: 9999,
    icon: Wand2
  },
  {
    slug: "nail-art-bandra",
    title: "Nail Art & Extensions",
    description:
      "Gel polish, acrylic and gel extensions, French sets and custom nail art — applied with sterilised tools and finished to last three to four weeks.",
    price: "Starting from ₹999",
    priceValue: 999,
    icon: Palette
  },
  {
    slug: "hair-spa-massage-bandra",
    title: "Hair Spa & Body Massage",
    description:
      "Restorative hair spa rituals, scalp treatments, aroma therapy and deep tissue massage for anyone carrying a week of Mumbai around in their shoulders.",
    price: "Starting from ₹1,999",
    priceValue: 1999,
    icon: HeartHandshake
  },
  {
    slug: "party-makeup-bandra",
    title: "Party & Event Makeup",
    description:
      "Soft glam, cocktail and reception looks finished for camera and flash — ideal for engagements, sangeets, shoots and night events.",
    price: "Starting from ₹2,999",
    priceValue: 2999,
    icon: Gem
  }
];

export const serviceTiles = [
  { title: "Hair", subtitle: "Care", icon: Scissors },
  { title: "Skin", subtitle: "Treatments", icon: Sparkles },
  { title: "Bridal", subtitle: "Packages", icon: Wand2 },
  { title: "Nail", subtitle: "Studio", icon: Palette },
  { title: "Spa &", subtitle: "Wellness", icon: HeartHandshake },
  { title: "Makeup", subtitle: "Studio", icon: Sparkles }
];

export const reasons = [
  {
    title: "Expert artists",
    description: "Certified professionals who shape every look around your features, outfit and occasion.",
    icon: ShieldCheck
  },
  {
    title: "Premium products",
    description: "Professional hair, skin and makeup products chosen for lasting finish and comfort.",
    icon: Gem
  },
  {
    title: "Immaculate hygiene",
    description: "Fresh tools, sanitized stations and a calm salon environment for every visit.",
    icon: Sparkles
  },
  {
    title: "Effortless booking",
    description: "Request a slot online or chat on WhatsApp for fast appointment confirmation.",
    icon: CalendarCheck
  }
];

export const pricing = [
  { service: "Haircut & Styling", price: "₹799+", tag: "Everyday glow" },
  { service: "Facial Treatment", price: "₹1,499+", tag: "Most booked" },
  { service: "Bridal Makeup", price: "₹9,999+", tag: "Signature" },
  { service: "Nail Art", price: "₹999+", tag: "Trending" },
  { service: "Hair Color", price: "₹2,499+", tag: "Premium colour" },
  { service: "Spa Therapy", price: "₹1,999+", tag: "Relaxation" }
];

export const editorialPricing = [
  { service: "Keratin Smoothening", price: "₹6,999" },
  { service: "HydraFacial Treatment", price: "₹5,499" },
  { service: "Bridal Makeup Premium", price: "₹24,999" },
  { service: "Aroma Therapy Massage", price: "₹3,999" },
  { service: "Gel Extensions", price: "₹2,999" }
];

export const offers = [
  {
    title: "New Client Offer",
    description: "Get 20% off on your first salon visit.",
    label: "First Visit",
    cta: "Claim Offer",
    icon: TicketPercent
  },
  {
    title: "Bridal Package",
    description: "Special bridal consultation discounts when you book in advance.",
    label: "Bridal",
    cta: "Plan My Look",
    icon: Wand2
  },
  {
    title: "Refer & Earn",
    description: "Refer a friend and get ₹500 off on your next visit.",
    label: "Referral",
    cta: "Refer Now",
    icon: UsersRound
  }
];

export const editorialOffers = [
  {
    title: "20% OFF",
    subtitle: "On your first visit",
    description: "New clients only",
    icon: TicketPercent
  },
  {
    title: "Bridal Package",
    subtitle: "Special discounts",
    description: "Book in advance",
    icon: Wand2
  },
  {
    title: "Refer & Earn",
    subtitle: "Refer a friend &",
    description: "get ₹500 off",
    icon: UsersRound
  }
];

export const galleryImages = [
  {
    title: "GlowUp Salon Aesthetic Interior and Premium Details",
    category: "Atmosphere",
    src: "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Professional Hair Styling and Color Treatment in Bandra",
    category: "Hair",
    src: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Elegant Bridal Makeup and Pre-Wedding Details",
    category: "Bridal",
    src: "https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Luxury Manicure and Nail Art Station Setup",
    category: "Nails",
    src: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Rejuvenating Skin Care and Glow Facial Rituals",
    category: "Skin",
    src: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Relaxing Spa Essentials and Wellness Therapy",
    category: "Spa",
    src: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Premium Salon Products for Hair and Skin Care",
    category: "Care",
    src: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Calm Relaxation Lounge at GlowUp Salon",
    category: "Interior",
    src: "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export const galleryPreviewImages = galleryImages.slice(0, 6);

export const testimonials = [
  {
    quote:
      "I went in for a colour correction after a bad job elsewhere. They talked me through what was realistic in one sitting instead of overpromising, and the tone is still holding two months on.",
    name: "Ananya Mehta",
    location: "Bandra West, Mumbai",
    service: "Hair Colour",
    initials: "AM"
  },
  {
    quote:
      "The bridal trial is what sold me. We tested the base under daylight and flash, changed the lip, and on the wedding day nothing moved through fourteen hours in May heat.",
    name: "Riya Malhotra",
    location: "Khar, Mumbai",
    service: "Bridal Makeup",
    initials: "RM"
  },
  {
    quote:
      "Clean stations, fresh tools every time, and I can get a gel set booked on WhatsApp in about a minute. It has become my regular nail place in Bandra.",
    name: "Priya Shah",
    location: "Santacruz, Mumbai",
    service: "Nail Extensions",
    initials: "PS"
  }
];

export const contactActions = [
  { label: business.location, icon: MapPin },
  { label: business.phone, icon: MessageCircle },
  { label: business.timing, icon: Clock },
  { label: "Instagram", icon: Instagram }
];
