import { BUSINESS, HOURS, type DayKey, REVIEWS } from "@/lib/business-config";

const DAY_MAP: Record<DayKey, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

interface Props {
  areaServed?: string[];
  additionalType?: string;
}

export default function LocalBusinessSchema({ areaServed, additionalType }: Props) {
  const openingHoursSpec = (Object.entries(HOURS) as [DayKey, typeof HOURS[DayKey]][])
    .filter(([, h]) => !h.closed)
    .map(([day, h]) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${DAY_MAP[day]}`,
      opens: h.open,
      closes: h.close,
    }));

  const defaultAreaServed = [
    "North Port, FL",
    "Port Charlotte, FL",
    "Venice, FL",
    "Englewood, FL",
    "Punta Gorda, FL",
    "Sarasota, FL",
    "Osprey, FL",
    "Nokomis, FL",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutomotiveBusiness"],
    "@id": `${BUSINESS.siteUrl}/#localbusiness`,
    ...(additionalType ? { additionalType } : {}),
    name: BUSINESS.name,
    alternateName: ["North Port Car Wash & Detailing", "North Port Car Wash FL"],
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phone.e164,
    priceRange: BUSINESS.priceRange,
    image: {
      "@type": "ImageObject",
      "@id": `${BUSINESS.siteUrl}/#logo`,
      url: `${BUSINESS.siteUrl}/og-default.jpg`,
      width: 1200,
      height: 630,
      caption: "North Port Car Wash — Tamiami Trail, North Port, FL",
    },
    logo: `${BUSINESS.siteUrl}/og-default.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    // 50-mile service radius centered on the business
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.latitude,
        longitude: BUSINESS.geo.longitude,
      },
      geoRadius: "80000",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating.value,
      reviewCount: BUSINESS.rating.count,
      bestRating: BUSINESS.rating.max,
      worstRating: 1,
    },
    review: REVIEWS.slice(0, 3).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5, worstRating: 1 },
      datePublished: r.date,
      reviewBody: r.text,
      publisher: { "@type": "Organization", name: "Google" },
    })),
    openingHoursSpecification: [
      ...openingHoursSpec,
      // Touchless bay is 24/7
      {
        "@type": "OpeningHoursSpecification",
        name: "Touchless Wash Bay",
        dayOfWeek: [
          "https://schema.org/Monday",
          "https://schema.org/Tuesday",
          "https://schema.org/Wednesday",
          "https://schema.org/Thursday",
          "https://schema.org/Friday",
          "https://schema.org/Saturday",
          "https://schema.org/Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: (areaServed ?? defaultAreaServed).map((area) => ({
      "@type": "City",
      name: area,
    })),
    slogan: "Touchless Wash · Free Vacuums · Professional Detailing · North Port, FL",
    foundingDate: "2019",
    knowsAbout: [
      "car wash",
      "touchless car wash",
      "brushless car wash",
      "car detailing",
      "ceramic coating",
      "paint correction",
      "paint sealant",
      "interior detailing",
      "exterior detailing",
      "car waxing",
      "carnauba wax",
      "fleet detailing",
      "unlimited car wash membership",
      "clay bar treatment",
      "paint protection film",
      "odor removal",
      "headlight restoration",
      "free car vacuum",
      "self-serve vacuum",
    ],
    potentialAction: [
      {
        "@type": "ReserveAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BUSINESS.siteUrl}/book`,
          inLanguage: "en-US",
          actionPlatform: [
            "https://schema.org/MobileWebPlatform",
            "https://schema.org/DesktopWebPlatform",
          ],
        },
        result: {
          "@type": "Reservation",
          name: "Car Wash or Detailing Appointment",
        },
      },
      {
        "@type": "OrderAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: BUSINESS.phone.href,
        },
      },
    ],
    keywords: "car wash North Port FL, touchless car wash, free vacuums, ceramic coating North Port, paint correction North Port FL, car detailing North Port, unlimited wash membership, car wash near me, brushless car wash near me",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Car Wash & Detailing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Touchless Car Wash",
            url: `${BUSINESS.siteUrl}/services/wash/touchless-car-wash`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Unlimited Wash Membership",
            url: `${BUSINESS.siteUrl}/services/wash/unlimited-wash-plans`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ceramic Coating",
            url: `${BUSINESS.siteUrl}/services/detailing/ceramic-coating`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Detail Package",
            url: `${BUSINESS.siteUrl}/services/detailing/full-detail-package`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Paint Correction",
            url: `${BUSINESS.siteUrl}/services/detailing/paint-correction`,
          },
        },
      ],
    },
    sameAs: [BUSINESS.social.googleBusinessProfile, BUSINESS.social.facebook],
    hasMap: BUSINESS.mapUrl,
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
    isAccessibleForFree: false,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Vacuum Stations", value: true },
      { "@type": "LocationFeatureSpecification", name: "24/7 Touchless Bay", value: true },
      { "@type": "LocationFeatureSpecification", name: "Drive-Through Tunnel", value: true },
      { "@type": "LocationFeatureSpecification", name: "Professional Detailing", value: true },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
