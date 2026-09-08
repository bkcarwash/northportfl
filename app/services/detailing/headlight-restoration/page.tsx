import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Headlight Restoration in North Port, FL | Clear Foggy Headlights",
  description:
    "Professional headlight restoration at North Port Car Wash. Removes UV oxidation and yellowing from foggy headlights — restoring clarity and nighttime visibility. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/headlight-restoration` },
};

export default function HeadlightRestorationPage() {
  return (
    <ServiceDetailPage
      slug="headlight-restoration"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Headlight Restoration"
      tagline="Restore clarity and visibility — Florida's UV turns headlights yellow fast."
      description="Florida's intense UV exposure yellows and hazes plastic headlight lenses faster than almost anywhere else in the country. Within just a few years, factory headlights can become opaque enough to noticeably reduce nighttime visibility — and they look terrible. Our headlight restoration sands back the oxidized outer layer and polishes the lens to clear, followed by a UV sealant coat that slows re-oxidation."
      included={[
        "Wet sanding progression (multiple grits) to remove oxidized layer",
        "Compound and polish application to restore clarity",
        "Final UV-resistant sealant coat to protect against re-yellowing",
        "Masking of surrounding painted surfaces to prevent damage",
        "Both headlights treated in a single service",
        "Final inspection under light to confirm full clarity",
      ]}
      notIncluded={[
        { label: "Taillight restoration (available as add-on — call to inquire)", href: "/contact" },
        { label: "Headlight bulb or wiring replacement", href: "/contact" },
      ]}
      notIncludedNote="This service covers lens surface restoration only. For bulb or electrical issues:"
      duration="45–90 minutes per headlight pair"
      ctaType="appointment"
      faqTitle="Headlight Restoration — Common Questions"
      faqs={[
        {
          question: "How long will my restored headlights stay clear?",
          answer:
            "With the UV sealant coat we apply after polishing, most restored headlights remain clear for 1–2 years before showing signs of re-oxidation. This is a significant improvement over untreated sanded headlights, which can re-yellow within months. Annual touch-ups maintain the results.",
        },
        {
          question: "Why do headlights turn yellow in Florida?",
          answer:
            "Modern headlight lenses are made of polycarbonate plastic rather than glass. UV radiation breaks down the protective outer coating and then oxidizes the plastic itself, causing the yellow, hazy appearance. Florida's sun intensity — combined with daily exposure on a car sitting outside in the heat — accelerates this process dramatically compared to northern states.",
        },
        {
          question: "Is headlight restoration cheaper than replacement?",
          answer:
            "In virtually every case, yes. Replacement headlight assemblies for newer vehicles often cost $200–$600 or more per side. Professional restoration typically costs a fraction of that and restores the appearance and function close to new. Call us for current pricing.",
        },
        {
          question: "Do you restore taillights too?",
          answer:
            "Taillight restoration is possible on some vehicles depending on the lens material and condition. Call us at (941) 800-8198 to ask about your specific vehicle.",
        },
      ]}
      relatedServices={[
        { label: "Wheel & Rim Detailing", href: "/services/detailing/wheel-rim-detailing" },
        { label: "Trim & Plastic Restoration", href: "/services/detailing/trim-restoration" },
        { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
        { label: "Pre-Sale / Trade-In Detail", href: "/services/detailing/pre-sale-trade-in-detail" },
      ]}
    />
  );
}
