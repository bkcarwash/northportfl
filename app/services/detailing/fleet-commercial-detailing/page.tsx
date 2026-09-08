import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Fleet & Commercial Vehicle Detailing | North Port Car Wash",
  description:
    "Commercial fleet detailing in North Port, FL. Scheduled detailing for company vehicles, work trucks, vans, and fleets. Custom programs available. Call (941) 800-8198.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/fleet-commercial-detailing` },
};

export default function FleetDetailingPage() {
  return (
    <ServiceDetailPage
      slug="fleet-commercial-detailing"
      category="detailing"
      badge="Commercial · Fleet Programs Available"
      name="Fleet & Commercial Vehicle Detailing"
      tagline="Keep your company vehicles looking professional without the hassle."
      description="North Port Car Wash offers scheduled fleet detailing programs for businesses in the North Port, Port Charlotte, and Sarasota County area. Whether you operate a service company, construction fleet, real estate business, or delivery operation, our team can schedule regular detail services for your vehicles so they consistently look clean and professional — without pulling you away from your business."
      included={[
        "Full exterior wash and detail for each vehicle",
        "Interior vacuum and wipe-down",
        "Windshield and all glass cleaning",
        "Tire shine and wheel detail",
        "Flexible scheduling options (weekly, bi-weekly, monthly)",
        "Multi-vehicle discounts available",
        "Service vans, work trucks, pickup trucks, and passenger vehicles",
      ]}
      notIncluded={[
        { label: "Heavy equipment or vehicles over 26,000 GVW — call to discuss", href: "/contact" },
        { label: "RV and boat detailing — call for availability", href: "/contact" },
      ]}
      notIncludedNote="Standard fleet service covers most commercial vehicles. For specialty vehicles:"
      duration="Varies by vehicle count and service level"
      ctaType="appointment"
      faqTitle="Fleet Detailing — Common Questions"
      faqs={[
        {
          question: "Can you handle a fleet of 10–20 vehicles?",
          answer:
            "Yes — we handle fleet programs of various sizes. The best approach is to call us at (941) 800-8198 and discuss your fleet size, vehicle types, frequency needs, and budget. We can put together a custom program that works for your business.",
        },
        {
          question: "Do you offer discounts for fleet accounts?",
          answer:
            "Yes — multi-vehicle and recurring fleet accounts receive discounted per-vehicle pricing compared to individual detail rates. Contact us to discuss volume pricing.",
        },
        {
          question: "Can you come to our business location?",
          answer:
            "Mobile fleet service may be available depending on location and fleet size. Please call to discuss logistics. Our primary detailing facility is at 14164 S Tamiami Trail in North Port.",
        },
        {
          question: "What types of commercial vehicles do you detail?",
          answer:
            "We regularly detail company cars, service vans, pickup trucks, box trucks, SUVs, and light commercial vehicles. For larger or specialty equipment, call to discuss what is feasible at our facility.",
        },
      ]}
      relatedServices={[
        { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
        { label: "Unlimited Wash Plans", href: "/services/wash/unlimited-wash-plans" },
        { label: "Engine Bay Cleaning", href: "/services/detailing/engine-bay-cleaning" },
        { label: "Contact Us", href: "/contact" },
      ]}
    />
  );
}
