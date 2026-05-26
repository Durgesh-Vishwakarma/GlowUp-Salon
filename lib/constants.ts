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

export const salonContact = {
  phone: "+91 98345 17990",
  whatsappNumber: "919834517990"
};

export const business = {
  name: "GlowUp Salon & Spa",
  location: "Bandra West, Mumbai",
  tagline: "Look confident. Feel beautiful.",
  description:
    "Premium Hair, Skin, Bridal & Spa Services in Bandra crafted with expertise and the finest products. Book your appointment in seconds.",
  shortDescription:
    "A premium beauty destination for polished hair, luminous skin, bridal glam, nails and spa rituals in Bandra West.",
  phone: salonContact.phone,
  phoneRaw: salonContact.whatsappNumber,
  timing: "10 AM - 9 PM, Monday to Sunday",
  instagram: "#",
  whatsappMessage: "Hi GlowUp Salon, I want to book an appointment."
};

export const heroImage = {
  src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=90",
  alt: "Premium salon interior with warm aesthetic lighting"
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
    title: "Hair Styling",
    description: "Precision cuts, blow dry, smoothening, colour and event-ready styling.",
    price: "Starting from ₹799",
    icon: Scissors
  },
  {
    title: "Skin Care",
    description: "Glow facials, cleanup, detan and skin rituals tailored to your skin.",
    price: "Starting from ₹1,499",
    icon: Sparkles
  },
  {
    title: "Bridal Makeup",
    description: "Elegant bridal looks, trials, draping and complete beauty styling.",
    price: "Starting from ₹9,999",
    icon: Wand2
  },
  {
    title: "Nail Art",
    description: "Gel polish, extensions, premium manicures and detailed nail designs.",
    price: "Starting from ₹999",
    icon: Palette
  },
  {
    title: "Spa & Relaxation",
    description: "Restorative hair spa, relaxing therapy and calm self-care rituals.",
    price: "Starting from ₹1,999",
    icon: HeartHandshake
  },
  {
    title: "Party Makeup",
    description: "Soft glam, cocktail looks and camera-ready makeup for celebrations.",
    price: "Starting from ₹2,999",
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
    title: "Aesthetic Salon Details",
    category: "Atmosphere",
    src: "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Hair Styling",
    category: "Hair",
    src: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Bridal Details",
    category: "Bridal",
    src: "https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Manicure Setup",
    category: "Nails",
    src: "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Skin Rituals",
    category: "Skin",
    src: "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Spa Essentials",
    category: "Spa",
    src: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Premium Products",
    category: "Care",
    src: "https://images.pexels.com/photos/3735657/pexels-photo-3735657.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Relaxation Lounge",
    category: "Interior",
    src: "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export const galleryPreviewImages = galleryImages.slice(0, 6);

export const testimonials = [
  {
    quote:
      "Absolutely loved the experience! The staff is professional, warm and the results are always amazing.",
    name: "Ananya Mehta",
    location: "Bandra, Mumbai",
    initials: "AM"
  },
  {
    quote:
      "The bridal consultation felt personal, calm and premium. They understood exactly what I wanted.",
    name: "Riya Malhotra",
    location: "Mumbai",
    initials: "RM"
  },
  {
    quote:
      "Clean salon, beautiful interiors and very easy WhatsApp appointment booking.",
    name: "Priya Shah",
    location: "Bandra West",
    initials: "PS"
  }
];

export const contactActions = [
  { label: business.location, icon: MapPin },
  { label: business.phone, icon: MessageCircle },
  { label: business.timing, icon: Clock },
  { label: "Instagram", icon: Instagram }
];
