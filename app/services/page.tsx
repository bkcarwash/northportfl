import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, WASH_SERVICES, DETAILING_PACKAGES } from "@/lib/business-config";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";

export const metadata: Metadata = {
  title: "Car Wash & Detailing Services | North Port Car Wash",
  description:
    "Full menu of car wash and professional detailing services at North Port Car Wash — touchless wash, free vacuums, interior detail, ceramic coating, paint correction, and more. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services` },
};

const DETAILING_INTERIOR = [
  { name: "Full Interior Detail", slug: "full-interior-detail" },
  { name: "Leather Seat Cleaning", slug: "leather-seat-cleaning" },
  { name: "Fabric Upholstery Shampoo", slug: "upholstery-shampoo" },
  { name: "Carpet & Floor Mat Cleaning", slug: "carpet-floor-mat-cleaning" },
  { name: "Odor Removal & Ozone Treatment", slug: "odor-removal-ozone-treatment" },
  { name: "Pet Hair Removal", slug: "pet-hair-removal" },
  { name: "Interior Steam Cleaning", slug: "steam-cleaning" },
];

const DETAILING_EXTERIOR = [
  { name: "Premium Hand Wash", slug: "hand-wash" },
  { name: "Clay Bar Treatment", slug: "clay-bar-treatment" },
  { name: "Paint Correction", slug: "paint-correction" },
  { name: "Ceramic Coating", slug: "ceramic-coating" },
  { name: "Carnauba Hand Wax", slug: "carnauba-wax" },
  { name: "Professional Paint Sealant", slug: "paint-sealant" },
  { name: "Headlight Restoration", slug: "headlight-restoration" },
  { name: "Wheel & Rim Detailing", slug: "wheel-rim-detailing" },
  { name: "Engine Bay Cleaning", slug: "engine-bay-cleaning" },
  { name: "Trim & Plastic Restoration", slug: "trim-restoration" },
];

function ItemListSchema() {
  const allServices = [
    ...WASH_SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      description: s.description,
      url: `${BUSINESS.siteUrl}/services/wash/${s.slug}`,
    })),
    ...DETAILING_PACKAGES.map((p, i) => ({
      "@type": "ListItem",
      position: WASH_SERVICES.length + i + 1,
      name: p.name,
      description: p.tagline,
      url: `${BUSINESS.siteUrl}/services/detailing/${p.slug}`,
    })),
    ...DETAILING_INTERIOR.map((s, i) => ({
      "@type": "ListItem",
      position: WASH_SERVICES.length + DETAILING_PACKAGES.length + i + 1,
      name: s.name,
      url: `${BUSINESS.siteUrl}/services/detailing/${s.slug}`,
    })),
    ...DETAILING_EXTERIOR.map((s, i) => ({
      "@type": "ListItem",
      position:
        WASH_SERVICES.length + DETAILING_PACKAGES.length + DETAILING_INTERIOR.length + i + 1,
      name: s.name,
      url: `${BUSINESS.siteUrl}/services/detailing/${s.slug}`,
    })),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Car Wash & Detailing Services at North Port Car Wash",
    description:
      "Complete list of car wash and professional detailing services offered at North Port Car Wash in North Port, FL.",
    url: `${BUSINESS.siteUrl}/services`,
    numberOfItems: allServices.length,
    itemListElement: allServices,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function ServicesHubPage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }]} />
      <ItemListSchema />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Wash &amp; Detailing Services
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed">
            North Port Car Wash offers two distinct service tracks — an <strong className="text-white">express wash lane</strong> for quick, no-appointment exterior cleaning and a <strong className="text-white">professional detailing program</strong> for scheduled, thorough interior and exterior treatments. Both serve different customer needs and schedules.
          </p>
        </div>

        {/* Track 1: Express Wash */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-0.5 bg-[#00C2FF]" />
                <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Track 1</span>
              </div>
              <h2 className="font-['Barlow',sans-serif] font-bold text-3xl text-white">Express Wash Services</h2>
              <p className="text-[#8C95A6] mt-1">Drive up, no appointment · Open daily 7 AM – 7 PM · Touchless bay 24/7</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WASH_SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/wash/${s.slug}`}
                className="glass-card p-5 glow-border hover:border-[#00C2FF]/30 transition-all duration-300 group"
              >
                <h3 className="font-semibold text-white group-hover:text-[#00C2FF] transition-colors mb-1.5">{s.name}</h3>
                <p className="text-sm text-[#8C95A6]">{s.tagline}</p>
                <div className="mt-3 text-xs text-[#00C2FF] flex items-center gap-1">
                  Learn more
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Track 2: Detailing */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-0.5 bg-[#A8B5C8]" />
                <span className="text-xs text-[#A8B5C8] uppercase tracking-widest font-semibold">Track 2</span>
              </div>
              <h2 className="font-['Barlow',sans-serif] font-bold text-3xl text-white">Professional Detailing</h2>
              <p className="text-[#8C95A6] mt-1">By appointment · Call (941) 800-8198 to schedule</p>
            </div>
          </div>

          {/* Packages */}
          <h3 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">Detailing Packages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {DETAILING_PACKAGES.map((pkg, i) => (
              <Link
                key={pkg.slug}
                href={`/services/detailing/${pkg.slug}`}
                className={`glass-card p-5 glow-border hover:border-[#00C2FF]/30 transition-all duration-300 group relative ${pkg.popular ? "ring-1 ring-[#00C2FF]/30" : ""}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-2.5 left-4 bg-[#00C2FF] text-black text-xs font-bold px-2 py-0.5 rounded-full">
                    Popular
                  </div>
                )}
                <div className="text-sm text-[#8C95A6] mb-1">⏱ {pkg.duration}</div>
                <h4 className="font-['Barlow',sans-serif] font-bold text-white group-hover:text-[#00C2FF] transition-colors mb-1">{pkg.name}</h4>
                <p className="text-xs text-[#8C95A6]">{pkg.tagline}</p>
                <div className="mt-3 text-xs text-[#A8B5C8] flex items-center gap-1">
                  View details
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Individual Services */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-4 flex items-center gap-2">
                <span className="text-[#00C2FF]">Interior</span> Detailing Services
              </h3>
              <ul className="space-y-2">
                {DETAILING_INTERIOR.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/detailing/${s.slug}`} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#00C2FF]/20 hover:bg-white/[0.04] transition-all group">
                      <span className="text-sm text-[#8C95A6] group-hover:text-white transition-colors">{s.name}</span>
                      <svg className="w-3.5 h-3.5 text-[#8C95A6] group-hover:text-[#00C2FF] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-4 flex items-center gap-2">
                <span className="text-[#A8B5C8]">Exterior</span> Detailing Services
              </h3>
              <ul className="space-y-2">
                {DETAILING_EXTERIOR.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/detailing/${s.slug}`} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#A8B5C8]/20 hover:bg-white/[0.04] transition-all group">
                      <span className="text-sm text-[#8C95A6] group-hover:text-white transition-colors">{s.name}</span>
                      <svg className="w-3.5 h-3.5 text-[#8C95A6] group-hover:text-[#A8B5C8] group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center border border-[#00C2FF]/10">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Not Sure Which Service You Need?</h2>
          <p className="text-[#8C95A6] mb-6 max-w-md mx-auto">Call us and describe what you are looking for — we will recommend the right service for your vehicle and budget.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.phone.href} className="px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
              Call {BUSINESS.phone.display}
            </a>
            <Link href="/contact" className="px-8 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
