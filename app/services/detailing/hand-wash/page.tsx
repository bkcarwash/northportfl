import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Premium Hand Wash | North Port Car Wash Detailing",
  description:
    "Premium hand wash detailing at North Port Car Wash. Microfiber mitts and pH-neutral soap — the safest wash method for luxury, exotic, and ceramic-coated vehicles. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/hand-wash` },
};

export default function HandWashPage() {
  return (
    <ServiceDetailPage
      slug="hand-wash"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Premium Hand Wash"
      tagline="The safest exterior wash method for paint-sensitive and luxury vehicles."
      description="Our premium hand wash is a careful, non-mechanical exterior clean using two-bucket microfiber wash mitt technique and pH-neutral soap — no tunnel equipment, no brushes, no contact risks. It is the preferred wash method for ceramic-coated vehicles, freshly painted cars, exotics, and anyone who wants zero risk of swirl marks from automatic wash systems."
      included={[
        "Two-bucket microfiber mitt wash method (separate wash and rinse buckets)",
        "pH-neutral soap formulated for paint safety",
        "Wheel and wheel arch cleaning with dedicated brush",
        "Door jamb wipe-down and cleaning",
        "Exterior glass and windshield cleaning",
        "Hand-applied rinse with spot-free water",
        "Chamois or microfiber drying to prevent water spots",
      ]}
      notIncluded={[
        { label: "Carnauba Wax or Paint Sealant →", href: "/services/detailing/carnauba-wax" },
        { label: "Paint Correction (swirl removal) →", href: "/services/detailing/paint-correction" },
        { label: "Clay Bar Decontamination →", href: "/services/detailing/clay-bar-treatment" },
      ]}
      notIncludedNote="The hand wash cleans your paint — for paint protection or correction, add:"
      duration="1–1.5 hours"
      ctaType="appointment"
      faqTitle="Premium Hand Wash — Common Questions"
      faqs={[
        {
          question: "Is hand wash better for ceramic-coated cars?",
          answer:
            "Yes — hand washing is the recommended maintenance method for ceramic-coated vehicles. Automatic brushes can scratch the coating over time, and some chemical washes contain ingredients that degrade ceramic coatings. A proper hand wash using two-bucket technique and pH-neutral soap maintains the coating's hydrophobic properties.",
        },
        {
          question: "Why not just use the tunnel wash?",
          answer:
            "Our tunnel wash is excellent for regular vehicles and everyday cleaning. However, for paint-sensitive vehicles — new cars, fresh paint jobs, ceramic-coated cars, and exotics — the controlled hand wash process eliminates any risk of contact-related swirl marks or chemical reactions.",
        },
        {
          question: "Is hand wash better for dark paint?",
          answer:
            "Dark paint shows swirl marks and micro-scratches more visibly than lighter colors. Hand washing with proper two-bucket technique and clean microfiber mitts is the safest way to clean dark paint without adding the swirl marks that tunnel brushes and careless washing can introduce.",
        },
        {
          question: "Do I need an appointment?",
          answer:
            "Yes — premium hand wash is a detailing service requiring an appointment. Call us at (941) 800-8198 to schedule. If you need a quick wash without scheduling, our 24/7 touchless bay or drive-through tunnel is available.",
        },
      ]}
      relatedServices={[
        { label: "Clay Bar Treatment", href: "/services/detailing/clay-bar-treatment" },
        { label: "Carnauba Hand Wax", href: "/services/detailing/carnauba-wax" },
        { label: "Paint Correction", href: "/services/detailing/paint-correction" },
        { label: "Ceramic Coating", href: "/services/detailing/ceramic-coating" },
      ]}
    />
  );
}
