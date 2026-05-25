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
    "Premium hair, skin, bridal and spa services in Bandra with expert care, refined interiors and easy appointment booking.",
  shortDescription:
    "A premium beauty destination for polished hair, luminous skin, bridal glam, nails and spa rituals in Bandra West.",
  phone: salonContact.phone,
  phoneRaw: salonContact.whatsappNumber,
  timing: "10 AM - 9 PM, Monday to Sunday",
  instagram: "#",
  whatsappMessage: "Hi GlowUp Salon, I want to book an appointment."
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Offers", href: "#offers" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" }
];

export const trustBadges = [
  { label: "4.9★ Rating", value: "Loved by 500+ clients", icon: Star },
  { label: "10+ Experts", value: "Hair, skin and bridal artists", icon: Sparkles },
  { label: "Open 7 Days", value: "Appointments from 10 AM", icon: Clock }
];

export const heroStats = [
  { label: "4.9★ Rating", value: "Trusted beauty care" },
  { label: "500+ Happy Clients", value: "Bandra favourites" },
  { label: "Instant WhatsApp Booking", value: "Quick slot confirmation" }
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
  { service: "Bridal Makeup (Premium)", price: "₹24,999" },
  { service: "Aroma Therapy Massage", price: "₹3,999" },
  { service: "Gel Extensions", price: "₹2,999" }
];

export const offers = [
  {
    title: "New Client Offer",
    description: "Get 20% off on your first salon visit.",
    label: "First Visit",
    cta: "Claim Offer"
  },
  {
    title: "Bridal Trial Package",
    description: "Book bridal consultation and trial makeup at special pricing.",
    label: "Bridal",
    cta: "Plan My Look"
  },
  {
    title: "Weekend Glow Combo",
    description: "Facial + Hair Spa combo starting at ₹2,999.",
    label: "Weekend",
    cta: "Book Combo"
  }
];

export const editorialOffers = [
  {
    title: "20% OFF",
    description: "On your first visit / New clients only",
    icon: TicketPercent
  },
  {
    title: "Bridal Package",
    description: "Special discounts / Book in advance",
    icon: Gem
  },
  {
    title: "Refer & Earn",
    description: "Refer a friend & get ₹500 off",
    icon: UsersRound
  }
];

export const galleryImages = [
  {
    title: "Salon Interior",
    category: "Interior",
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Hair Styling",
    category: "Hair",
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Bridal Makeup",
    category: "Bridal",
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Nail Art",
    category: "Nails",
    src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Facial Treatment",
    category: "Skin",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Beauty Products",
    category: "Products",
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Spa Rituals",
    category: "Spa",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Premium Care",
    category: "Care",
    src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80"
  }
];

export const testimonials = [
  {
    quote: "The booking was easy and the staff was very professional.",
    name: "Priya S.",
    initials: "PS"
  },
  {
    quote: "Loved the bridal makeup trial. The team understood exactly what I wanted.",
    name: "Riya M.",
    initials: "RM"
  },
  {
    quote: "Clean salon, great service and easy WhatsApp appointment.",
    name: "Ananya K.",
    initials: "AK"
  }
];

export const contactActions = [
  { label: business.location, icon: MapPin },
  { label: business.phone, icon: MessageCircle },
  { label: business.timing, icon: Clock },
  { label: "Instagram", icon: Instagram }
];
