import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Car Wash FAQ | North Port Car Wash Questions Answered",
  description:
    "Answers to common questions about North Port Car Wash — hours, location, services, pricing, membership, detailing appointments, and more. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/faq` },
};

const FAQS_HOURS = [
  {
    question: "What are North Port Car Wash's hours?",
    answer: "The staffed car wash is open daily from 7:00 AM to 7:00 PM, seven days a week. Our touchless self-serve bay is available 24 hours a day, 7 days a week — including nights, weekends, and holidays.",
  },
  {
    question: "Is North Port Car Wash open on Sundays and holidays?",
    answer: "Yes — we are open every day of the week including Sundays. The staffed hours are 7 AM to 7 PM daily. The touchless bay is open 24/7 including holidays.",
  },
  {
    question: "What time does North Port Car Wash close?",
    answer: "Our staffed wash closes at 7:00 PM daily. The touchless self-serve bay does not close — it is available around the clock.",
  },
];

const FAQS_LOCATION = [
  {
    question: "Where is North Port Car Wash located?",
    answer: "We are located at 14164 S Tamiami Trail (US-41), North Port, FL 34287. We are on the Tamiami Trail corridor near Warm Mineral Springs Park, accessible from North Port, Port Charlotte, Venice, and surrounding areas.",
  },
  {
    question: "How far is North Port Car Wash from Port Charlotte?",
    answer: "North Port Car Wash is approximately 10–15 minutes from most parts of Port Charlotte, FL, via US-41 (Tamiami Trail) heading south.",
  },
  {
    question: "How far is it from Venice, FL?",
    answer: "Venice is approximately 20–25 minutes north of our location on US-41 / the Tamiami Trail.",
  },
  {
    question: "Is there parking at the car wash?",
    answer: "Yes — we have a spacious parking area including the vacuum bay lanes where customers can park and use the free self-serve vacuums after their wash.",
  },
];

const FAQS_SERVICES = [
  {
    question: "Does North Port Car Wash offer free vacuums?",
    answer: "Yes. Free self-serve vacuum stations are included with every paid wash at North Port Car Wash. There is no extra charge, no time limit, and no token required. Pull into any open vacuum bay after your tunnel wash.",
  },
  {
    question: "What types of wash services does North Port Car Wash offer?",
    answer: "We offer a drive-through tunnel wash (brush and high-pressure jet combination), a 24/7 touchless self-serve wash bay, and professional detailing services by appointment. The tunnel wash includes wax and sealant add-ons. Detailing covers everything from express refreshes to full paint correction and ceramic coating.",
  },
  {
    question: "Does North Port Car Wash do car detailing?",
    answer: "Yes — we offer a full range of professional detailing services by appointment, including full interior detail, exterior hand wash, clay bar treatment, paint correction, ceramic coating, and package tiers from Express Detail through our Full Detail Package. Call (941) 800-8198 to schedule.",
  },
  {
    question: "Do I need an appointment for the car wash?",
    answer: "No appointment is needed for the express tunnel wash or touchless bay — drive in anytime. All detailing services (full interior/exterior detail, ceramic coating, paint correction, etc.) require an appointment. Call us at (941) 800-8198.",
  },
  {
    question: "Does North Port Car Wash offer ceramic coating?",
    answer: "Yes. We offer professional ceramic coating application as an individual service and as part of our Ceramic Coating Package, which includes decontamination, clay bar, and paint correction before coating. Contact us for pricing and scheduling.",
  },
];

const FAQS_MEMBERSHIP = [
  {
    question: "Does North Port Car Wash have an unlimited membership?",
    answer: "Yes — our unlimited wash membership lets you wash your car as many times as you like in a month for one flat monthly rate. There are no contracts. Call (941) 800-8198 to sign up or stop by the wash.",
  },
  {
    question: "What is the punch card program at North Port Car Wash?",
    answer: "Our punch card gives you a free 10th wash after every 9 paid washes. Pick up a punch card at the kiosk — no sign-up, no app, no email address required. Just bring your card each visit.",
  },
  {
    question: "Can I share my unlimited membership?",
    answer: "Memberships are linked to a single vehicle's license plate and are intended for one vehicle. Each vehicle requires its own membership. Call to ask about multi-vehicle pricing.",
  },
  {
    question: "How do I cancel my membership?",
    answer: "Call us at (941) 800-8198 before your next billing date to cancel. We do not require notice periods or cancellation fees.",
  },
];

const FAQS_PRICING = [
  {
    question: "How much does a car wash cost at North Port Car Wash?",
    answer: "Pricing is available at the kiosk when you pull in. We offer several wash levels and optional add-ons (wax, sealant). For specific pricing on our current packages, call us at (941) 800-8198.",
  },
  {
    question: "How much does detailing cost?",
    answer: "Detailing pricing depends on the service, vehicle size, and condition. We offer packages from an Express Detail to a full Ceramic Coating Package. Call (941) 800-8198 for a quote specific to your vehicle.",
  },
  {
    question: "Are gift cards available?",
    answer: "Yes — gift cards in any dollar amount are available at the wash. They are redeemable for any service including detailing. Call (941) 800-8198 or stop by to purchase.",
  },
];

export default function FaqPage() {
  const allFaqs = [...FAQS_HOURS, ...FAQS_LOCATION, ...FAQS_SERVICES, ...FAQS_MEMBERSHIP, ...FAQS_PRICING];

  return (
    <>
      <BreadcrumbSchema items={[{ name: "FAQ", href: "/faq" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Help Center</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-[#8C95A6] max-w-xl">
            Answers to the most common questions about North Port Car Wash — hours, location, services, membership, and detailing.
          </p>
        </div>

        <div className="space-y-12">
          {[
            { title: "Hours & Availability", faqs: FAQS_HOURS },
            { title: "Location & Getting Here", faqs: FAQS_LOCATION },
            { title: "Services", faqs: FAQS_SERVICES },
            { title: "Membership & Loyalty", faqs: FAQS_MEMBERSHIP },
            { title: "Pricing & Gift Cards", faqs: FAQS_PRICING },
          ].map(({ title, faqs }) => (
            <div key={title}>
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4 pb-3 border-b border-white/5">{title}</h2>
              <FaqSection faqs={faqs} withSchema={false} title="" />
            </div>
          ))}
        </div>

        {/* Full schema for the whole page */}
        <FaqSection faqs={allFaqs} withSchema title="" />

        <div className="mt-12 glass-card p-6 text-center">
          <p className="text-[#8C95A6] mb-4">Still have a question? We are happy to help.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.phone.href} className="px-6 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
              Call {BUSINESS.phone.display}
            </a>
            <a href="/contact" className="px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
