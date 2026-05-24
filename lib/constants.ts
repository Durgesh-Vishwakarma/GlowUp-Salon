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
  Wand2
} from "lucide-react";

export const business = {
  name: "GlowUp Salon & Spa",
  location: "Bandra West, Mumbai",
  tagline: "Look confident. Feel beautiful.",
  description:
    "Premium salon, hair, skin and bridal services in Bandra with easy appointment booking and personalized care.",
  shortDescription:
    "A premium beauty destination for hair, skin, bridal, nails and spa services in Bandra West.",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
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
  { label: "4.9★ Rated by 500+ clients", icon: Star },
  { label: "10+ Beauty Experts", icon: Sparkles },
  { label: "Open 7 Days", icon: Clock }
];

export const services = [
  {
    title: "Hair Styling",
    description: "Haircut, blow dry, smoothening and color treatments.",
    price: "Starting from ₹799",
    icon: Scissors
  },
  {
    title: "Skin Care",
    description: "Glow facials, cleanup, detan and skin refresh rituals.",
    price: "Starting from ₹1,499",
    icon: Sparkles
  },
  {
    title: "Bridal Makeup",
    description: "Elegant bridal looks, trials and complete styling support.",
    price: "Starting from ₹9,999",
    icon: Wand2
  },
  {
    title: "Nail Art",
    description: "Gel polish, extensions, classic manicures and nail designs.",
    price: "Starting from ₹999",
    icon: Palette
  },
  {
    title: "Spa & Relaxation",
    description: "Hair spa, body therapy and soothing self-care treatments.",
    price: "Starting from ₹1,999",
    icon: HeartHandshake
  },
  {
    title: "Party Makeup",
    description: "Soft glam and event-ready makeup for every celebration.",
    price: "Starting from ₹2,999",
    icon: Gem
  }
];

export const reasons = [
  {
    title: "Certified beauty experts",
    description: "Experienced artists who understand your style and occasion.",
    icon: ShieldCheck
  },
  {
    title: "Premium products",
    description: "Trusted professional-grade products for polished results.",
    icon: Gem
  },
  {
    title: "Hygienic setup",
    description: "Clean tools, sanitized stations and thoughtful service flow.",
    icon: Sparkles
  },
  {
    title: "Easy online booking",
    description: "Book by form or WhatsApp and get a quick confirmation.",
    icon: CalendarCheck
  }
];

export const pricing = [
  { service: "Haircut & Styling", price: "₹799+" },
  { service: "Facial Treatment", price: "₹1,499+" },
  { service: "Bridal Makeup", price: "₹9,999+" },
  { service: "Nail Art", price: "₹999+" },
  { service: "Hair Color", price: "₹2,499+" },
  { service: "Spa Therapy", price: "₹1,999+" }
];

export const offers = [
  {
    title: "New Client Offer",
    description: "Get 20% off on your first salon visit.",
    label: "First Visit"
  },
  {
    title: "Bridal Trial Package",
    description: "Book bridal consultation and trial makeup at special pricing.",
    label: "Bridal"
  },
  {
    title: "Weekend Glow Combo",
    description: "Facial + Hair Spa combo starting at ₹2,999.",
    label: "Weekend"
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
    name: "Priya S."
  },
  {
    quote: "Loved the bridal makeup trial. The team understood exactly what I wanted.",
    name: "Riya M."
  },
  {
    quote: "Clean salon, great service and easy WhatsApp appointment.",
    name: "Ananya K."
  }
];

export const contactActions = [
  { label: business.location, icon: MapPin },
  { label: business.phone, icon: MessageCircle },
  { label: business.timing, icon: Clock },
  { label: "Instagram", icon: Instagram }
];
