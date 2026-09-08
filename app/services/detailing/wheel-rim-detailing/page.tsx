import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Wheel & Rim Detailing in North Port, FL | Brake Dust Removal",
  description:
    "Professional wheel and rim detailing at North Port Car Wash. Removes brake dust, road grime, and tar. Safe for all wheel finishes including powder coat and chrome. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/wheel-rim-detailing` },
};

export default function WheelRimDetailingPage() {
  return (
    <ServiceDetailPage
      slug="wheel-rim-detailing"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Wheel & Rim Detailing"
      tagline="Remove the corrosive brake dust that bonds to your wheels every single drive."
      description="Brake dust is one of the most corrosive substances that contacts your vehicle regularly — it is hot metal particulate from rotor and brake pad wear that bonds to your wheel finish within hours and gradually etches the surface if left uncleaned. Our wheel detailing service removes brake dust, road grime, and tar buildup from wheel faces, spokes, and wheel arches using safe, non-acid wheel cleaners and dedicated detailing brushes."
      included={[
        "Iron/brake dust remover applied to all 4 wheels",
        "Soft detailing brush agitation on face, spokes, and lug nut areas",
        "Wheel arch and inner barrel cleaning (accessible areas)",
        "Rinse and dry to prevent water spotting",
        "Tire cleaning and dressing application",
        "Wheel finish inspection for damage or corrosion",
      ]}
      notIncluded={[
        { label: "Full barrel/inside-of-rim cleaning requires wheel removal (call for inquiry)", href: "/contact" },
      ]}
      notIncludedNote="Complete inner barrel cleaning requires removing wheels from the vehicle — available by appointment inquiry:"
      duration="1–1.5 hours (4 wheels)"
      ctaType="appointment"
      faqTitle="Wheel & Rim Detailing — Common Questions"
      faqs={[
        {
          question: "Can your wheel cleaner damage powder-coated wheels?",
          answer:
            "We use iron/brake dust removers and pH-neutral wheel cleaners that are safe for powder-coated, painted, and polished aluminum wheels. We avoid harsh acid-based cleaners that can damage wheel finishes. If you have a rare or specialty finish, let us know when you call and we will confirm compatibility.",
        },
        {
          question: "How often should wheels be detailed?",
          answer:
            "For most daily drivers in the North Port area, a dedicated wheel detail every 2–3 months prevents significant brake dust buildup and etching. If you notice your wheels look dark or spotted after every wash, more frequent cleaning may be needed — especially on vehicles with performance brake pads that produce more dust.",
        },
        {
          question: "Do you clean the inside of the rim (the barrel)?",
          answer:
            "We clean the accessible parts of the barrel during a standard wheel detail. Full inside-barrel cleaning requires removing the wheel from the vehicle — this is available as a more comprehensive service. Call (941) 800-8198 to inquire.",
        },
        {
          question: "What causes the brown streaks on my rims?",
          answer:
            "The brown streaks on wheel faces are iron fallout — brake dust and environmental iron particles that have landed on the wheel and begun to oxidize. Iron removers chemically react with and dissolve these particles, making them dramatically easier to rinse away. Leaving them too long can cause pitting and permanent surface damage.",
        },
      ]}
      relatedServices={[
        { label: "Full Exterior Detail", href: "/services/detailing/full-detail-package" },
        { label: "Trim & Plastic Restoration", href: "/services/detailing/trim-restoration" },
        { label: "Engine Bay Cleaning", href: "/services/detailing/engine-bay-cleaning" },
        { label: "Premium Detail Package", href: "/services/detailing/premium-detail" },
      ]}
    />
  );
}
