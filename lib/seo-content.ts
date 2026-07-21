import { services } from "./constants";

export type ServiceItem = {
  name: string;
  price: string;
  detail: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  body: string[];
  items: ServiceItem[];
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
  keywords: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "hair-salon-bandra",
    title: "Hair Styling & Colour",
    h1: "Hair Salon in Bandra West — Cuts, Colour & Keratin",
    metaTitle: "Hair Salon in Bandra West, Mumbai | Haircut & Colour from ₹799",
    metaDescription:
      "Haircuts from ₹799, global colour, balayage and keratin smoothening at GlowUp Salon, Bandra West. Senior stylists, premium products, open 10 AM–9 PM daily.",
    eyebrow: "Hair Studio",
    intro:
      "A haircut is the fastest way to change how you feel about a whole outfit. Our hair studio in Bandra West handles everything from a fifteen-minute trim to a full colour correction, and every service starts with a consultation rather than a price list.",
    body: [
      "Most people come to us after a cut that did not sit right. Usually the problem was not the length — it was that nobody looked at how the hair actually falls. Our senior stylists start by checking your texture, density, growth pattern and how much time you realistically spend on styling at home. A cut that needs twenty minutes of blow drying every morning is a bad cut for someone who leaves the house at seven.",
      "For colour, we work with ammonia-free and low-ammonia lines and always run a strand test before a full application, particularly on hair that has been chemically straightened or previously coloured at another salon. Balayage and global colour are quoted after we see the hair, because starting level matters more than the picture on the phone. If your hair is heavily damaged we will tell you to wait and treat it first — that conversation saves more hair than any product does.",
      "Keratin and smoothening treatments are popular through Mumbai's humid months, from June to September. They work well on frizz-prone and wavy hair, and we walk you through the aftercare — sulphate-free shampoo, no tying for the first three days — before you commit to the appointment.",
      "The studio is a unisex salon, so men's grooming, beard shaping and fades are handled by the same senior team, usually in under forty minutes."
    ],
    items: [
      { name: "Haircut & Blow Dry", price: "₹799+", detail: "Consultation, wash, precision cut and finish." },
      { name: "Global Hair Colour", price: "₹2,499+", detail: "Ammonia-free colour, quoted after a strand test." },
      { name: "Balayage / Highlights", price: "₹4,999+", detail: "Hand-painted dimension, priced by length." },
      { name: "Keratin Smoothening", price: "₹6,999+", detail: "Frizz control for 3–5 months with correct aftercare." },
      { name: "Men's Cut & Beard Styling", price: "₹499+", detail: "Fades, scissor cuts and beard shaping." },
      { name: "Blow Dry & Event Styling", price: "₹899+", detail: "Curls, waves or sleek finish for events." }
    ],
    faqs: [
      {
        question: "How much does a haircut cost in Bandra West?",
        answer:
          "At GlowUp Salon a women's haircut with blow dry starts at ₹799 and a men's cut starts at ₹499. Final pricing depends on hair length and whether you add a wash, treatment or styling."
      },
      {
        question: "How long does keratin smoothening last?",
        answer:
          "Between three and five months for most clients. Longevity depends on aftercare — using a sulphate-free shampoo and avoiding tight ties for the first 72 hours makes the biggest difference."
      },
      {
        question: "Do you take walk-ins for haircuts?",
        answer:
          "Yes, we accept walk-ins from 10 AM to 9 PM every day, though weekend evenings fill up. Sending a WhatsApp message an hour ahead usually gets you seated without a wait."
      }
    ],
    image:
      "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Senior stylist finishing a haircut and colour service at GlowUp Salon in Bandra West, Mumbai",
    keywords: [
      "hair salon Bandra West",
      "haircut Bandra",
      "hair colour Mumbai",
      "keratin treatment Bandra",
      "balayage Mumbai"
    ]
  },
  {
    slug: "facial-treatments-bandra",
    title: "Facials & Skin Care",
    h1: "Facials in Bandra West — Glow, HydraFacial & De-Tan",
    metaTitle: "Facial Treatments in Bandra West, Mumbai | Glow & HydraFacial",
    metaDescription:
      "Glow facials from ₹1,499, HydraFacial, de-tan and deep cleanups at GlowUp Salon, Bandra West. Skin analysis before every session. Open daily 10 AM–9 PM.",
    eyebrow: "Skin Studio",
    intro:
      "Mumbai's combination of humidity, pollution and sun does specific things to skin — congestion, uneven tone, tan lines that outlast the holiday. Our facials are chosen after we look at your skin, not from a standard menu.",
    body: [
      "Every facial appointment opens with a short skin analysis. We check hydration, oil balance, sensitivity and any active breakouts, then pick the protocol. This matters because the most common mistake we see is oily, congested skin being treated with heavy creams, or dehydrated skin being scrubbed until the barrier gives up.",
      "The signature glow facial is our most booked service and suits most skin types before an event — it cleans, exfoliates gently and leaves skin looking even rather than shiny. HydraFacial is the step up: vacuum-based extraction with hydrating serums, useful for blackheads and dull texture, with no downtime afterwards.",
      "De-tan treatments are seasonal favourites between March and June. They lift surface pigmentation from sun exposure but they are not a substitute for daily sunscreen, and we will say so. If you have active acne, rosacea or a recent dermatological procedure, tell us before booking — some treatments need to wait, and we would rather reschedule than aggravate your skin.",
      "All extraction tools are single-use or sterilised between clients, and stations are sanitised after every appointment."
    ],
    items: [
      { name: "Signature Glow Facial", price: "₹1,499+", detail: "Cleanse, gentle exfoliation and hydration." },
      { name: "HydraFacial Treatment", price: "₹5,499", detail: "Vacuum extraction with serum infusion, no downtime." },
      { name: "Deep Cleanup", price: "₹1,199+", detail: "Blackhead and whitehead extraction with steam." },
      { name: "De-Tan Treatment", price: "₹1,799+", detail: "Lifts surface pigmentation from sun exposure." },
      { name: "Anti-Ageing Facial", price: "₹3,499+", detail: "Firming actives with facial massage." },
      { name: "Acne Care Session", price: "₹2,199+", detail: "Non-comedogenic protocol for congested skin." }
    ],
    faqs: [
      {
        question: "How often should I get a facial?",
        answer:
          "Once every four to six weeks suits most skin types, which matches the natural skin renewal cycle. Congested or acne-prone skin sometimes benefits from a shorter gap during the first few months."
      },
      {
        question: "What is the difference between a cleanup and a facial?",
        answer:
          "A cleanup focuses on cleansing and extraction and takes around 30 minutes. A facial adds exfoliation, massage, a mask and targeted serums, runs 60 to 75 minutes, and works on tone and hydration rather than only congestion."
      },
      {
        question: "Is HydraFacial safe for sensitive skin?",
        answer:
          "Generally yes — it uses suction and serums rather than harsh manual scrubbing. We still run a patch consideration during the skin analysis and adjust the serum strength for reactive skin."
      }
    ],
    image:
      "https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Glow facial and skin care treatment in progress at GlowUp Salon, Bandra West, Mumbai",
    keywords: [
      "facial in Bandra",
      "HydraFacial Mumbai",
      "de-tan treatment Bandra",
      "skin clinic Bandra West",
      "glow facial Mumbai"
    ]
  },
  {
    slug: "bridal-makeup-bandra",
    title: "Bridal Makeup",
    h1: "Bridal Makeup in Bandra West, Mumbai — HD & Airbrush",
    metaTitle: "Bridal Makeup in Bandra West, Mumbai | Packages from ₹9,999",
    metaDescription:
      "HD and airbrush bridal makeup in Bandra West from ₹9,999. Includes pre-wedding trial, draping and hair styling. Engagement, sangeet and reception packages available.",
    eyebrow: "Bridal Studio",
    intro:
      "A wedding day in Mumbai means fourteen hours, several outfit changes, a lot of humidity and several hundred photographs. Bridal makeup has to survive all of it. That is the brief we work to.",
    body: [
      "Every bridal booking includes a pre-wedding trial. We use it to test base shades under both daylight and flash, check how your skin behaves through a long sitting, and agree on the look while there is still time to change it. Brides who skip the trial are the ones who end up surprised on the morning, so we build it into the package rather than selling it separately.",
      "We work with both HD and airbrush bases. Airbrush sits lighter and holds well through heat, which suits outdoor mandaps and summer weddings. HD gives more coverage and photographs richly under indoor lighting. Which one we recommend depends on your skin type and where the ceremony is, not on which one costs more.",
      "Packages cover makeup, hair styling and saree or lehenga draping. We can travel to your venue or hotel within Mumbai, and for early muhurats we start as early as you need us to. Trousseau and family packages for mothers, sisters and bridesmaids can be added — booking those together keeps the morning calm and on schedule.",
      "Peak wedding season in Mumbai runs from November to February. Dates in that window are usually taken six to eight weeks in advance, so early enquiries help."
    ],
    items: [
      { name: "Bridal Makeup (HD)", price: "₹9,999+", detail: "Makeup, hair and draping with pre-wedding trial." },
      { name: "Bridal Makeup Premium (Airbrush)", price: "₹24,999", detail: "Airbrush base, trial, draping and touch-up kit." },
      { name: "Engagement Look", price: "₹6,999+", detail: "Lighter base finished for indoor photography." },
      { name: "Sangeet / Mehendi Look", price: "₹5,999+", detail: "Long-wear makeup built for dancing." },
      { name: "Family & Bridesmaid Package", price: "On request", detail: "Group pricing for four or more people." },
      { name: "Pre-Wedding Trial (standalone)", price: "₹3,499", detail: "Adjusted against your booking value." }
    ],
    faqs: [
      {
        question: "How much does bridal makeup cost in Mumbai?",
        answer:
          "At GlowUp Salon, HD bridal makeup starts at ₹9,999 and the premium airbrush package is ₹24,999. Both include a pre-wedding trial, hair styling and draping. Venue travel within Mumbai can be added."
      },
      {
        question: "How far in advance should I book bridal makeup?",
        answer:
          "Six to eight weeks is comfortable, and longer for dates between November and February when Mumbai's wedding season peaks. The trial is usually scheduled two to three weeks before the wedding."
      },
      {
        question: "Do you travel to the wedding venue?",
        answer:
          "Yes. We cover venues and hotels across Mumbai, including early morning muhurat timings. Travel is quoted with the package based on location and call time."
      },
      {
        question: "Is airbrush makeup better than HD for a wedding?",
        answer:
          "Airbrush is lighter and holds better in heat and humidity, which suits outdoor and summer ceremonies. HD gives fuller coverage and photographs richly indoors. We recommend one after seeing your skin and venue."
      }
    ],
    image:
      "https://images.pexels.com/photos/3373721/pexels-photo-3373721.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Bride having HD bridal makeup applied at GlowUp Salon bridal studio in Bandra West, Mumbai",
    keywords: [
      "bridal makeup Bandra",
      "bridal makeup artist Mumbai",
      "airbrush bridal makeup",
      "wedding makeup Bandra West",
      "engagement makeup Mumbai"
    ]
  },
  {
    slug: "nail-art-bandra",
    title: "Nail Art & Extensions",
    h1: "Nail Art & Extensions in Bandra West, Mumbai",
    metaTitle: "Nail Art & Gel Extensions in Bandra West | From ₹999",
    metaDescription:
      "Gel polish, acrylic and gel extensions, French sets and custom nail art in Bandra West from ₹999. Sterilised tools, three to four week wear. Book on WhatsApp.",
    eyebrow: "Nail Studio",
    intro:
      "Good nails are mostly about prep. Our nail studio in Bandra West spends as much time on cuticle work and shaping as on the colour, which is why a gel set here holds for three to four weeks instead of chipping in the first one.",
    body: [
      "We offer gel polish, gel extensions and acrylics. Gel extensions are lighter and more flexible, and suit people who type all day. Acrylics are sturdier and hold longer lengths, which works if you want a dramatic shape. If your natural nails are thin or peeling, we will suggest a strengthening course before extensions rather than building over damage.",
      "Custom nail art is done freehand — chrome, ombré, French variations, minimal line work or full detail sets. Bring a reference photo and we will tell you honestly what translates at your nail length and what does not.",
      "Hygiene is not negotiable in a nail studio. Files and buffers are single-use, metal tools are sterilised between clients, and stations are wiped down after every appointment. Removal is done properly with soak-off rather than prying, because that is where most long-term nail damage comes from.",
      "A full extension set with art takes around 90 minutes. Gel polish on natural nails takes about 45."
    ],
    items: [
      { name: "Gel Polish (natural nails)", price: "₹999+", detail: "Prep, shaping and gel colour, 2–3 week wear." },
      { name: "Gel Extensions", price: "₹2,999", detail: "Lightweight, flexible extensions with shaping." },
      { name: "Acrylic Extensions", price: "₹2,499+", detail: "Sturdier build for longer lengths." },
      { name: "Custom Nail Art", price: "₹150+ per nail", detail: "Freehand chrome, ombré and detail work." },
      { name: "Luxury Manicure", price: "₹1,199+", detail: "Soak, scrub, cuticle care and massage." },
      { name: "Safe Removal & Repair", price: "₹499+", detail: "Soak-off removal with nail conditioning." }
    ],
    faqs: [
      {
        question: "How long do gel extensions last?",
        answer:
          "Three to four weeks before a refill is needed, depending on your nail growth. Booking a refill rather than letting the set grow out protects the natural nail underneath."
      },
      {
        question: "Do nail extensions damage natural nails?",
        answer:
          "Damage almost always comes from improper removal rather than the extensions themselves. We use soak-off removal and never pry sets off, and we recommend a break between long courses of extensions."
      },
      {
        question: "How much does nail art cost in Bandra?",
        answer:
          "Gel polish starts at ₹999 for natural nails and gel extensions are ₹2,999. Custom art is added from ₹150 per nail depending on the level of detail."
      }
    ],
    image:
      "https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Nail technician applying gel extensions and custom nail art at GlowUp Salon, Bandra West",
    keywords: [
      "nail art Bandra",
      "gel extensions Mumbai",
      "nail salon Bandra West",
      "acrylic nails Mumbai",
      "manicure Bandra"
    ]
  },
  {
    slug: "hair-spa-massage-bandra",
    title: "Hair Spa & Body Massage",
    h1: "Hair Spa & Body Massage in Bandra West, Mumbai",
    metaTitle: "Hair Spa & Body Massage in Bandra West | From ₹1,999",
    metaDescription:
      "Hair spa, scalp treatments, aroma therapy and deep tissue massage in Bandra West from ₹1,999. Calm rooms, trained therapists, open 10 AM–9 PM every day.",
    eyebrow: "Spa & Wellness",
    intro:
      "Hard water, pollution and long commutes show up in your scalp and your shoulders first. Our spa services in Bandra West are built around those two problems rather than around a fancy menu.",
    body: [
      "Hair spa treatments start at the scalp. We assess whether the issue is dryness, oil imbalance, product build-up or hard-water residue, then choose between a deep conditioning ritual, a clarifying treatment or a scalp therapy with massage. Anyone dealing with seasonal hair fall usually sees the most benefit from a short course rather than a single session.",
      "On the body side, we offer aroma therapy and deep tissue massage. Aroma therapy is the lighter, more relaxing option and works well after a stressful week. Deep tissue is firmer and targets the neck, upper back and shoulders — the places most desk workers and long commuters hold tension. Tell the therapist about any injury, pregnancy or recent surgery before the session so pressure can be adjusted.",
      "Rooms are kept quiet and private, linen is changed between every client, and sessions run to time so you are not rushed at the end.",
      "A hair spa takes 45 to 60 minutes; a full body massage runs 60 to 90."
    ],
    items: [
      { name: "Signature Hair Spa", price: "₹1,999+", detail: "Deep conditioning with scalp massage." },
      { name: "Scalp Therapy (anti hair-fall)", price: "₹2,499+", detail: "Targeted treatment, best as a short course." },
      { name: "Clarifying Treatment", price: "₹1,799+", detail: "Removes hard-water and product build-up." },
      { name: "Aroma Therapy Massage", price: "₹3,999", detail: "Full body, light to medium pressure." },
      { name: "Deep Tissue Massage", price: "₹3,499+", detail: "Firm pressure for neck, back and shoulders." },
      { name: "Head, Neck & Shoulder Massage", price: "₹1,299+", detail: "30-minute reset between meetings." }
    ],
    faqs: [
      {
        question: "How often should I get a hair spa?",
        answer:
          "Once every two to four weeks for dry or chemically treated hair, and once a month for normal hair. If you are treating hair fall or build-up, a course of four sessions gives a clearer result than a one-off."
      },
      {
        question: "Does a hair spa help with hair fall?",
        answer:
          "It helps when the cause is scalp related — dryness, build-up or poor circulation. Hair fall driven by hormonal changes, illness or nutritional deficiency needs medical input, and we will say so rather than sell you sessions."
      },
      {
        question: "What is the difference between aroma therapy and deep tissue massage?",
        answer:
          "Aroma therapy uses lighter pressure with essential oils and is mainly for relaxation. Deep tissue uses firmer, slower strokes to release tension in specific muscle groups, which suits chronic neck and shoulder stiffness."
      }
    ],
    image:
      "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Relaxing hair spa and massage therapy room at GlowUp Salon & Spa in Bandra West, Mumbai",
    keywords: [
      "hair spa Bandra",
      "body massage Bandra West",
      "spa in Bandra Mumbai",
      "deep tissue massage Mumbai",
      "scalp treatment Bandra"
    ]
  },
  {
    slug: "party-makeup-bandra",
    title: "Party & Event Makeup",
    h1: "Party & Event Makeup in Bandra West, Mumbai",
    metaTitle: "Party & Event Makeup in Bandra West, Mumbai | From ₹2,999",
    metaDescription:
      "Soft glam, cocktail and reception makeup in Bandra West from ₹2,999. Camera and flash ready, long-wear formulas, same-day slots often available.",
    eyebrow: "Makeup Studio",
    intro:
      "Party makeup has one job: to still look right six hours and two hundred photographs later. We build looks around your outfit, the lighting at the venue and how long you will actually be out.",
    body: [
      "The most common request is soft glam — a clean base, defined eyes and a finish that photographs well without looking heavy in person. Cocktail and reception looks go bolder, usually with a smoky eye or a stronger lip, and we set them for movement and heat because Mumbai venues are rarely as air-conditioned as promised.",
      "We use long-wear, transfer-resistant formulas and finish with a setting spray. Under flash photography, the wrong base can grey out or look ashy, so we match shades in the lighting closest to where you are going. If you are being photographed professionally, mention it when booking and we adjust the base accordingly.",
      "Hair styling can be added — blow-dry waves, sleek pulls or an updo — and doing both together usually takes 75 to 90 minutes. For groups going to the same event, book consecutive slots and we will run them back to back.",
      "Evening slots before weekends fill first, so a day's notice helps, though same-day appointments are often available on weekdays."
    ],
    items: [
      { name: "Soft Glam Makeup", price: "₹2,999+", detail: "Clean base, defined eyes, natural finish." },
      { name: "Cocktail / Reception Look", price: "₹4,499+", detail: "Bolder eyes or lip, set for long wear." },
      { name: "Makeup + Hair Styling", price: "₹4,999+", detail: "Full look in 75–90 minutes." },
      { name: "Photoshoot Makeup", price: "₹5,499+", detail: "Base matched for camera and flash." },
      { name: "Saree / Lehenga Draping", price: "₹999+", detail: "Added to any makeup service." },
      { name: "Group Booking (4+)", price: "On request", detail: "Consecutive slots for events." }
    ],
    faqs: [
      {
        question: "How long does party makeup last?",
        answer:
          "Six to eight hours with our long-wear formulas and setting spray. Oily skin types may want a blot at the halfway point, and we can send you with a small touch-up if you ask."
      },
      {
        question: "Can I book party makeup on the same day?",
        answer:
          "Often yes on weekdays. Friday and Saturday evenings book out first, so a day's notice is safer. WhatsApp is the fastest way to check live availability."
      },
      {
        question: "Do you do makeup for photoshoots?",
        answer:
          "Yes. Photoshoot makeup uses a base matched specifically for camera and flash so skin does not grey out under lighting. Mention the shoot when booking so we plan the finish."
      }
    ],
    image:
      "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&w=1400",
    imageAlt:
      "Makeup artist creating a soft glam party look at GlowUp Salon makeup studio in Bandra West",
    keywords: [
      "party makeup Bandra",
      "event makeup Mumbai",
      "makeup artist Bandra West",
      "cocktail makeup Mumbai",
      "photoshoot makeup Bandra"
    ]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

/** Sanity check: every service card should map to a real landing page. */
export const serviceSlugs = services.map((service) => service.slug);

export const homeFaqs = [
  {
    question: "Where is GlowUp Salon & Spa located?",
    answer:
      "We are on Linking Road in Bandra West, Mumbai, and regularly serve clients from Khar, Santacruz, Juhu and Andheri West. The salon is open from 10 AM to 9 PM, seven days a week."
  },
  {
    question: "How do I book an appointment?",
    answer:
      "Use the booking form on this page or send us a WhatsApp message. Form requests are confirmed by our team within the hour during opening times, and WhatsApp is usually faster if you need a slot today."
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Yes, walk-ins are welcome between 10 AM and 9 PM. Weekend evenings and the November to February wedding season are busy, so a quick message ahead of time saves you a wait."
  },
  {
    question: "Is GlowUp a unisex salon?",
    answer:
      "Yes. We offer hair, skin, nail and grooming services for men and women, including men's cuts, beard styling, facials and massage."
  },
  {
    question: "How much does a service cost?",
    answer:
      "Haircuts start at ₹799, facials at ₹1,499, nail services at ₹999, hair spa and massage at ₹1,999, party makeup at ₹2,999 and bridal packages at ₹9,999. Final pricing depends on hair length, skin needs and the package you choose."
  },
  {
    question: "What products do you use?",
    answer:
      "Professional salon lines for hair colour, treatments and skin care, with ammonia-free colour options available. If you have allergies or sensitive skin, tell us at booking and we will patch test or switch the product."
  },
  {
    question: "Do you offer bridal packages and venue visits?",
    answer:
      "Yes. Bridal packages start at ₹9,999 and include a pre-wedding trial, hair styling and draping. We travel to venues and hotels across Mumbai, including early muhurat call times."
  },
  {
    question: "How do you handle hygiene?",
    answer:
      "Files and buffers are single-use, metal tools are sterilised between clients, linen is changed after every session and stations are sanitised between appointments."
  }
];

export const reviewStats = {
  ratingValue: 4.9,
  reviewCount: 512
};
