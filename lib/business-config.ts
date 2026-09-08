export const BUSINESS = {
  name: "North Port Car Wash",
  legalName: "North Port Car Wash",
  category: "Car Wash",
  description:
    "North Port Car Wash offers touchless wash tunnels, free interior vacuums, professional detailing services, and an unlimited wash membership program—serving North Port, FL and surrounding communities on the Tamiami Trail.",
  shortDescription:
    "Car wash with free vacuums, punch card loyalty program, and professional detailing in North Port, FL.",

  address: {
    street: "14164 S Tamiami Trl",
    city: "North Port",
    state: "FL",
    zip: "34287",
    country: "US",
    full: "14164 S Tamiami Trl, North Port, FL 34287, United States",
  },

  geo: {
    latitude: 27.0442,
    longitude: -82.1826,
  },

  phone: {
    display: "(941) 800-8198",
    href: "tel:+19418008198",
    e164: "+19418008198",
  },

  rating: {
    value: 4.2,
    count: 295,
    max: 5,
  },

  priceRange: "$$",

  mapUrl:
    "https://www.google.com/maps/dir/?api=1&destination=14164+S+Tamiami+Trl+North+Port+FL+34287",

  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.6!2d-82.1826!3d27.0442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAyJzM5LjEiTiA4MsKwMTAnNTcuNCJX!5e0!3m2!1sen!2sus!4v1609459200000",

  social: {
    googleBusinessProfile: "https://g.page/north-port-car-wash",
    facebook: "https://www.facebook.com/northportcarwash",
  },

  whatsapp: {
    number: "19418008198",
    href: "https://wa.me/19418008198",
    hrefBooking: "https://wa.me/19418008198?text=Hi!%20I%27d%20like%20to%20book%20a%20car%20wash%20or%20detailing%20appointment%20at%20North%20Port%20Car%20Wash.%20Please%20let%20me%20know%20your%20availability!",
    hrefDetailing: "https://wa.me/19418008198?text=Hi!%20I%27d%20like%20to%20schedule%20a%20professional%20detailing%20appointment%20(ceramic%20coating%2C%20full%20detail%2C%20paint%20correction).%20Can%20you%20share%20pricing%20and%20availability%3F",
    hrefWash: "https://wa.me/19418008198?text=Hi!%20Quick%20question%20about%20North%20Port%20Car%20Wash%20-%20do%20you%20have%20any%20current%20wash%20specials%20or%20membership%20deals%3F",
  },

  siteUrl: "https://www.northportcardetailing.com",

  timezone: "America/New_York",
} as const;

export type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface DayHours {
  open: string;  // "HH:MM" 24-hour
  close: string; // "HH:MM" 24-hour
  closed?: boolean;
}

export const HOURS: Record<DayKey, DayHours> = {
  monday:    { open: "07:00", close: "19:00" },
  tuesday:   { open: "07:00", close: "19:00" },
  wednesday: { open: "07:00", close: "19:00" },
  thursday:  { open: "07:00", close: "19:00" },
  friday:    { open: "07:00", close: "19:00" },
  saturday:  { open: "07:00", close: "19:00" },
  sunday:    { open: "07:00", close: "19:00" },
};

export const HOURS_DISPLAY: Record<DayKey, string> = {
  monday:    "7:00 AM – 7:00 PM",
  tuesday:   "7:00 AM – 7:00 PM",
  wednesday: "7:00 AM – 7:00 PM",
  thursday:  "7:00 AM – 7:00 PM",
  friday:    "7:00 AM – 7:00 PM",
  saturday:  "7:00 AM – 7:00 PM",
  sunday:    "7:00 AM – 7:00 PM",
};

export const TOUCHLESS_NOTE = "Touchless wash bay available 24/7";

export const REVIEWS = [
  {
    id: "r1",
    author: "Maria T.",
    rating: 5,
    date: "2024-11-12",
    text: "My car looks absolutely brand new every time I come here. The staff are some of the friendliest people you'll find at any car wash in the area — they genuinely care about doing a thorough job.",
  },
  {
    id: "r2",
    author: "James R.",
    rating: 4,
    date: "2024-10-05",
    text: "Love the drive-thru tunnel wash setup. You can add on a wax or sealant boost, and afterward the free self-serve vacuums are a huge plus. Pricing is completely fair for North Port.",
  },
  {
    id: "r3",
    author: "Sandra K.",
    rating: 5,
    date: "2024-09-18",
    text: "The brush-and-tunnel combo does a surprisingly great job on my truck. I've been coming for about a year now and the staff is consistently friendly and professional every single visit.",
  },
  {
    id: "r4",
    author: "David L.",
    rating: 4,
    date: "2024-08-30",
    text: "Great value on the membership plan. I wash my car way more often now that I'm paying one flat monthly rate. The unlimited plan pays for itself in no time.",
  },
  {
    id: "r5",
    author: "Teresa M.",
    rating: 5,
    date: "2024-07-14",
    text: "I've tried a few car washes around Port Charlotte and Venice, and North Port Car Wash beats them all for the combination of price, cleanliness, and friendly service. Highly recommend.",
  },
  {
    id: "r6",
    author: "Carlos V.",
    rating: 4,
    date: "2024-06-22",
    text: "Punch card program is awesome — my 10th wash is always free. Nice way to reward loyal customers. Clean facility and the vacuums are always working.",
  },
];

export const SERVICE_AREA_CITIES = [
  { name: "North Port", slug: "north-port", state: "FL", primary: true },
  { name: "Port Charlotte", slug: "port-charlotte", state: "FL" },
  { name: "Venice", slug: "venice-fl", state: "FL" },
  { name: "Englewood", slug: "englewood-fl", state: "FL" },
  { name: "Punta Gorda", slug: "punta-gorda", state: "FL" },
  { name: "Sarasota", slug: "sarasota", state: "FL" },
  { name: "Osprey", slug: "osprey-fl", state: "FL" },
  { name: "Nokomis", slug: "nokomis-fl", state: "FL" },
];

export const LOCAL_NEIGHBORHOODS = [
  "Sumter Blvd", "Price Blvd", "Toledo Blade Blvd", "Warm Mineral Springs",
  "Bobcat Trail", "Talon Bay", "Pan American Blvd", "Cranberry Blvd",
  "Hillsborough Blvd", "Biscayne Dr", "W Price Blvd", "Tuscany Isles",
];

export const WASH_SERVICES = [
  {
    slug: "touchless-car-wash",
    name: "Touchless Car Wash",
    icon: "droplets",
    tagline: "Spotless clean, zero contact — available 24/7.",
    description:
      "Our touchless wash system uses high-pressure water jets and premium soap formulations to deliver a thorough clean without any brushes touching your paint.",
  },
  {
    slug: "interior-vacuuming",
    name: "Free Interior Vacuuming",
    icon: "wind",
    tagline: "Complimentary self-serve vacuums with every wash.",
    description:
      "Every wash visit includes access to our powerful self-serve vacuum stations at no extra charge. Remove dirt, sand, and debris from floors and seats before you head out.",
  },
  {
    slug: "car-waxing",
    name: "Car Waxing",
    icon: "sparkles",
    tagline: "Protective shine that turns heads.",
    description:
      "Our wax add-on seals your paint with a protective coat that repels water, blocks UV rays, and leaves your car with a mirror-like finish.",
  },
  {
    slug: "sealant",
    name: "Paint Sealant",
    icon: "shield",
    tagline: "Longer-lasting paint protection.",
    description:
      "Paint sealant bonds to your clear coat for months of hydrophobic protection, helping your car shed water and resist environmental contaminants.",
  },
  {
    slug: "unlimited-wash-plans",
    name: "Unlimited Wash Plans",
    icon: "infinity",
    tagline: "Wash as often as you want for one monthly rate.",
    description:
      "Our membership plans give you unlimited access to the car wash tunnel all month long. Choose the tier that fits your lifestyle and never worry about a dirty car.",
  },
  {
    slug: "gift-cards",
    name: "Gift Cards",
    icon: "gift",
    tagline: "The perfect gift for any car owner.",
    description:
      "Give the gift of a clean car. North Port Car Wash gift cards are available for any amount and make a thoughtful present for birthdays, holidays, or any occasion.",
  },
];

export const DETAILING_PACKAGES = [
  {
    slug: "express-detail",
    name: "Express Detail",
    tagline: "Quick refresh — in and out fast.",
    price: "Call for pricing",
    duration: "1–1.5 hours",
    includes: [
      "Interior wipe-down and surface dust removal",
      "Express exterior tunnel wash",
      "Tire shine dressing",
      "Window exterior wipe",
      "Vacuum of front cabin",
    ],
  },
  {
    slug: "premium-detail",
    name: "Premium Detail",
    tagline: "Deep clean inside and out.",
    price: "Call for pricing",
    duration: "2.5–3.5 hours",
    popular: true,
    includes: [
      "Full interior vacuum & wipe-down",
      "Leather or upholstery cleaning",
      "Dashboard & console UV protectant",
      "Hand carnauba wax application",
      "Wheel & rim detail",
      "Tire shine dressing",
      "Interior & exterior window cleaning",
    ],
  },
  {
    slug: "full-detail-package",
    name: "Full Detail",
    tagline: "Complete bumper-to-bumper restoration.",
    price: "Call for pricing",
    duration: "4–6 hours",
    includes: [
      "Everything in Premium Detail",
      "Carpet & floor mat deep shampoo",
      "Engine bay cleaning & degreasing",
      "Trim & plastic restoration",
      "Bug & tar removal",
      "Clay bar decontamination",
      "Paint sealant application",
      "Undercarriage wash",
    ],
  },
  {
    slug: "ceramic-coating-package",
    name: "Ceramic Coating Package",
    tagline: "Multi-year protection — the ultimate finish.",
    price: "Call for pricing",
    duration: "1–2 days",
    includes: [
      "Full paint decontamination wash",
      "Clay bar treatment",
      "Paint correction (swirl & scratch removal)",
      "Machine polishing",
      "Professional ceramic coating application",
      "Wheel & trim protection coating",
    ],
  },
];
