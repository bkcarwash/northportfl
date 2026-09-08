import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Ceramic Coating North Port FL | Professional Installer | Call Today",
  description:
    "Professional ceramic coating in North Port, FL at 14164 S Tamiami Trail. Guards against Florida UV, Gulf salt air & water spots for 2–5 years. Serving Port Charlotte, Venice & Sarasota. Call (941) 800-8198.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/ceramic-coating` },
  openGraph: {
    title: "Ceramic Coating North Port FL | 2–5 Year Paint Protection",
    description:
      "Professional ceramic coating installer in North Port, FL. Protects against UV, salt air & water spots. Call (941) 800-8198 for pricing.",
  },
};

export default function CeramicCoatingPage() {
  return (
    <ServiceDetailPage
      slug="ceramic-coating"
      category="detailing"
      badge="Exterior Detailing · Premium Protection · By Appointment"
      name="Professional Ceramic Coating"
      tagline="Multi-year paint protection that bonds chemically — not just a coat on top."
      description="Ceramic coating bonds chemically to your vehicle's clear coat, creating a permanent hydrophobic layer that repels water, resists UV fading, blocks chemical etching, and makes your car significantly easier to clean. Unlike wax or sealant which sit on top of the paint and wear away within weeks or months, a professionally applied ceramic coating lasts years. It is the highest level of single-coat paint protection available."
      included={[
        "Thorough preparation wash and decontamination",
        "Panel wipe-down with IPA solution to remove all surface oils",
        "Single or multi-layer ceramic coating application panel-by-panel",
        "Cure time management (vehicle cannot be driven or washed during cure)",
        "Buffing off excess and inspection after initial cure",
        "Application guidance for long-term maintenance",
      ]}
      notIncluded={[
        { label: "Paint Correction (recommended if swirls present — done first) →", href: "/services/detailing/paint-correction" },
        { label: "Clay Bar Decontamination (required prep step) →", href: "/services/detailing/clay-bar-treatment" },
      ]}
      notIncludedNote="For the best result, ceramic coating should be applied over corrected, decontaminated paint. See our Ceramic Coating Package which includes all prep steps:"
      duration="1–2 days (including cure time)"
      ctaType="appointment"
      faqTitle="Ceramic Coating — Common Questions"
      extraContent={
        <>
          <div className="glass-card p-6 mb-6 border border-[#00C2FF]/10">
            <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-2">Want Everything in One Package?</h2>
            <p className="text-sm text-[#8C95A6] mb-4">
              Our Ceramic Coating Package includes decontamination, clay bar, paint correction, and full ceramic application — everything needed for a proper, long-lasting result.
            </p>
            <Link href="/services/detailing/ceramic-coating-package" className="inline-flex items-center gap-2 text-[#00C2FF] hover:underline text-sm font-medium">
              See the Ceramic Coating Package →
            </Link>
          </div>
          {/* GEO/AIO entity block — answer-first for "ceramic coating north port" */}
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 mb-8">
            <h2 className="font-['Barlow',sans-serif] font-bold text-base text-white mb-2">Ceramic Coating in North Port, FL — What to Know</h2>
            <p className="text-sm text-[#8C95A6] leading-relaxed mb-3">
              <strong className="text-white">North Port Car Wash</strong> applies professional ceramic coating at <strong className="text-white">14164 S Tamiami Trail (US-41), North Port, FL 34287</strong>. Ceramic coating appointments are available by calling <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>. We serve ceramic coating clients from North Port, Port Charlotte, Venice, Osprey, Punta Gorda, Englewood, and Sarasota County.
            </p>
            <p className="text-sm text-[#8C95A6] leading-relaxed">
              Florida&apos;s Gulf Coast environment — intense UV radiation, salt air from the Gulf of Mexico, high humidity, and frequent rainfall — accelerates paint oxidation, fading, and water spotting faster than inland climates. Ceramic coating is the most effective single protection layer for Gulf Coast vehicles because it blocks UV, repels water and salt, and prevents environmental contamination from bonding to paint. Unlike wax (which lasts weeks) or sealant (which lasts months), a professionally applied ceramic coating lasts <strong className="text-white">2–5 years</strong> with proper maintenance.
            </p>
          </div>
        </>
      }
      faqs={[
        {
          question: "How long does ceramic coating last?",
          answer:
            "A professionally applied ceramic coating typically lasts 2–5 years with proper maintenance, depending on the product grade, surface preparation quality, and how the vehicle is maintained. Some premium grades last even longer. In Florida's climate, the UV resistance of ceramic coating is particularly valuable.",
        },
        {
          question: "Does ceramic coating prevent scratches?",
          answer:
            "Ceramic coating adds a level of scratch resistance and reduces the risk of light marring, but it does not make paint scratch-proof. It protects against washing-induced swirls and environmental contamination, but a key scratch will still affect the coated surface.",
        },
        {
          question: "Do I still need to wash my car after ceramic coating?",
          answer:
            "Yes — ceramic coating makes washing easier and less frequent, but the car still needs washing. The difference is that dirt and water bead off much more easily, making touch-free or hand washing sufficient for most cleaning. Avoid automatic brush washes after coating.",
        },
        {
          question: "How does Florida's heat affect ceramic coating?",
          answer:
            "Ceramic coatings are engineered to handle high temperatures and are highly resistant to Florida's intense UV and heat. In fact, the UV blocking properties of ceramic coating are one of the primary reasons Gulf Coast vehicle owners choose it — to prevent paint oxidation and fading from sun exposure.",
        },
        {
          question: "Is ceramic coating worth it?",
          answer:
            "For vehicles driven in Florida's climate, the answer is often yes. Ceramic coating reduces paint oxidation, prevents water spotting, makes washing faster, and maintains resale value. The upfront cost is higher than wax, but it protects the investment in your vehicle for years rather than weeks.",
        },
      ]}
      relatedServices={[
        { label: "Ceramic Coating Package (full bundle)", href: "/services/detailing/ceramic-coating-package" },
        { label: "Paint Correction", href: "/services/detailing/paint-correction" },
        { label: "Clay Bar Treatment", href: "/services/detailing/clay-bar-treatment" },
        { label: "Paint Sealant (shorter-term option)", href: "/services/detailing/paint-sealant" },
      ]}
    />
  );
}
