import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Car Wash Gift Cards | North Port Car Wash",
  description:
    "North Port Car Wash gift cards are available in any amount and make a great gift for car owners in North Port, Port Charlotte, Venice, and surrounding areas. Call (941) 800-8198.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/wash/gift-cards` },
};

export default function GiftCardsPage() {
  return (
    <ServiceDetailPage
      slug="gift-cards"
      category="wash"
      badge="Gift Cards · Any Amount"
      name="Car Wash Gift Cards"
      tagline="Give the gift of a clean car — for any occasion, any amount."
      description="North Port Car Wash gift cards are the perfect gift for any car owner in the North Port, Port Charlotte, Venice, or Sarasota area. Available in any dollar amount, they can be used toward any of our services — from a basic express wash to a full professional detailing package. Pick one up at the wash, or call ahead."
      included={[
        "Redeemable for any wash service or detailing package",
        "Available in any dollar amount you choose",
        "No expiration policy — use at your convenience",
        "Can be applied toward memberships or add-on services",
        "Great for birthdays, holidays, Father's Day, and housewarming gifts",
      ]}
      notIncluded={[]}
      duration="Available at the wash location — no appointment needed"
      ctaType="drive-in"
      faqTitle="Gift Cards — Common Questions"
      faqs={[
        {
          question: "What amounts are gift cards available in?",
          answer:
            "Gift cards are available in any amount you choose. We do not sell pre-set denomination cards — simply tell us the amount you would like to put on the card. Call (941) 800-8198 or stop by 14164 S Tamiami Trail.",
        },
        {
          question: "Can gift cards be used for detailing services?",
          answer:
            "Yes — gift cards are redeemable for any service we offer, including full professional detailing packages like our Full Detail, Premium Detail, or Ceramic Coating Package. If the recipient is interested in scheduling detailing, they should call ahead to book.",
        },
        {
          question: "Do the gift cards expire?",
          answer:
            "We do not impose expiration dates on our gift cards. The recipient can use them at any time after purchase.",
        },
        {
          question: "Are they good for the unlimited membership?",
          answer:
            "Yes — gift card value can be applied toward a monthly membership. Call us at (941) 800-8198 for details on applying a gift card balance toward membership enrollment.",
        },
      ]}
      relatedServices={[
        { label: "Unlimited Wash Plans", href: "/services/wash/unlimited-wash-plans" },
        { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
        { label: "Premium Detail", href: "/services/detailing/premium-detail" },
        { label: "Touchless Car Wash", href: "/services/wash/touchless-car-wash" },
      ]}
    />
  );
}
