import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import MembershipSection from "@/components/sections/MembershipSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import LocationsSection from "@/components/sections/LocationsSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "North Port Car Wash | Touchless Wash & Detailing in North Port, FL",
  description:
    "North Port Car Wash offers touchless car wash, free interior vacuums, professional detailing, and unlimited membership plans on S Tamiami Trail in North Port, FL. Serving Sarasota and Charlotte County.",
  alternates: { canonical: BUSINESS.siteUrl },
};

const HOME_FAQS = [
  {
    question: "Is there a touchless car wash near me in North Port, FL?",
    answer:
      "Yes — North Port Car Wash at 14164 S Tamiami Trail (US-41), North Port, FL 34287 offers a touchless wash bay that is available 24 hours a day, 7 days a week. The touchless bay uses high-pressure water jets and foam to clean without any contact with your vehicle's paint. No appointment needed. Phone: (941) 564-6447.",
  },
  {
    question: "Is there a car wash with free vacuums near me?",
    answer:
      "Yes — North Port Car Wash on S Tamiami Trail includes free self-serve vacuum bays with every paid wash. There is no token system, no extra charge, and no time limit. Vacuum bays are available during business hours (7 AM – 7 PM daily) at 14164 S Tamiami Trail, North Port, FL 34287.",
  },
  {
    question: "How much is a car wash in North Port, FL?",
    answer:
      "North Port Car Wash offers competitively priced wash packages ranging from a basic exterior wash to premium wax and sealant combinations. Pricing is displayed at the kiosk on arrival. For current pricing or to ask about membership plans, call (941) 564-6447.",
  },
  {
    question: "Is North Port Car Wash open on Sundays?",
    answer:
      "Yes — North Port Car Wash is open 7 days a week, including Sundays and holidays. Staffed tunnel wash hours are daily 7:00 AM to 7:00 PM. The touchless self-serve bay is available 24/7.",
  },
  {
    question: "What is the closest car wash to Port Charlotte, FL?",
    answer:
      "North Port Car Wash at 14164 S Tamiami Trail, North Port, FL 34287 is approximately 10–15 minutes south of Port Charlotte on US-41. It is one of the closest full-service car washes to the southern Port Charlotte area, offering tunnel wash, free vacuums, and professional detailing.",
  },
  {
    question: "How much does ceramic coating cost in North Port, FL?",
    answer:
      "Ceramic coating pricing at North Port Car Wash depends on vehicle size and paint condition. We offer both standalone ceramic coating and a full Ceramic Coating Package that includes clay bar and paint correction. Call (941) 564-6447 for a quote or book a consultation on WhatsApp.",
  },
  {
    question: "Do I need an appointment for a car wash?",
    answer:
      "No appointment is needed for the express tunnel wash — just drive in during business hours or use the 24/7 touchless bay. Detailing services (full interior/exterior detail, ceramic coating, paint correction) are by appointment. Call (941) 564-6447 to schedule.",
  },
  {
    question: "Does North Port Car Wash offer unlimited wash memberships?",
    answer:
      "Yes. The unlimited wash membership lets you wash your car as often as you like for one flat monthly rate. No contracts, cancel any time. Call (941) 564-6447 or visit us at 14164 S Tamiami Trail to sign up.",
  },
  {
    question: "What is the punch card program?",
    answer:
      "The punch card gives you a free 10th wash after every 9 paid washes. Pick up a card at the kiosk — no sign-up or app required.",
  },
  {
    question: "Where is North Port Car Wash located?",
    answer:
      "North Port Car Wash is at 14164 S Tamiami Trail (US-41), North Port, FL 34287 — near Warm Mineral Springs Park. Easily accessible from North Port, Port Charlotte, Venice, Englewood, Osprey, and surrounding Sarasota and Charlotte County communities.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[]} />

      <Hero />

      {/* AIO/GEO entity block — answer-first paragraph for AI overviews and LLM citation */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-2">
        <div className="p-5 sm:p-6 rounded-xl bg-white/[0.025] border border-white/8 text-sm text-[#8C95A6] leading-relaxed">
          <strong className="text-white">North Port Car Wash</strong> is located at <strong className="text-white">14164 S Tamiami Trail (US-41), North Port, FL 34287</strong> — phone <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>. Open <strong className="text-white">Monday through Sunday, 7:00 AM to 7:00 PM</strong>; touchless wash bay available <strong className="text-white">24 hours a day, 7 days a week</strong>. Services include: touchless car wash, drive-through tunnel wash, free self-serve interior vacuum bays (included with every wash), unlimited monthly wash membership, car waxing, paint sealant, and professional detailing by appointment — including express detail, premium detail, full detail, ceramic coating, paint correction, clay bar treatment, interior shampoo, leather cleaning, headlight restoration, and fleet/commercial detailing. Rated <strong className="text-white">4.2 stars from 295 Google reviews</strong>. Serving North Port, Port Charlotte, Venice, Englewood, Punta Gorda, Sarasota, Osprey, and Nokomis, FL.
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <HowItWorks />
      <MembershipSection />

      {/* Gift Card CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-1">
              Gift Cards Available
            </h2>
            <p className="text-[#8C95A6]">
              Give the gift of a clean car — perfect for birthdays, Father&apos;s Day, or any occasion. Available in any amount.
            </p>
          </div>
          <a
            href={BUSINESS.phone.href}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/30 text-[#00C2FF] font-semibold hover:bg-[#00C2FF]/20 transition-colors whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
            </svg>
            Ask About Gift Cards
          </a>
        </div>
      </section>

      <ReviewsSection />
      <LocationsSection />
      <FaqSection faqs={HOME_FAQS} />

      {/* Local Areas — SEO entity block */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl sm:text-3xl text-white mb-2">
            Serving Every North Port Neighborhood
          </h2>
          <p className="text-[#8C95A6] max-w-2xl mx-auto text-sm leading-relaxed">
            Whether you&apos;re coming from Sumter Blvd, Price Blvd, Toledo Blade Blvd, Warm Mineral Springs, Bobcat Trail, or anywhere along the Tamiami Trail corridor — we&apos;re your closest full-service car wash and detailing center at 14164 S Tamiami Trail.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Sumter Blvd", "Price Blvd", "Toledo Blade Blvd", "Warm Mineral Springs",
            "Bobcat Trail", "Pan American Blvd", "Cranberry Blvd", "Talon Bay",
            "Hillsborough Blvd", "W Price Blvd", "Biscayne Dr", "Tuscany Isles",
            "Port Charlotte", "Venice FL", "Englewood FL", "Punta Gorda",
          ].map((area) => (
            <span key={area} className="px-3 py-1.5 text-xs text-[#8C95A6] bg-white/[0.03] border border-white/8 rounded-full">
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,194,255,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Ready for a{" "}
            <span className="bg-gradient-to-r from-[#00C2FF] to-[#A8B5C8] bg-clip-text text-transparent">
              Cleaner Car?
            </span>
          </h2>
          <p className="text-[#8C95A6] mb-8 text-lg">
            Call us now or book instantly on WhatsApp — we&apos;re open daily 7 AM to 7 PM on the Tamiami Trail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={BUSINESS.phone.href}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00C2FF] text-black font-bold text-lg hover:bg-[#00AADE] transition-colors shadow-[0_0_30px_rgba(0,194,255,0.35)] hover:shadow-[0_0_45px_rgba(0,194,255,0.5)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now — {BUSINESS.phone.display}
            </a>
            <a
              href={BUSINESS.whatsapp.hrefBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:bg-[#20BA5A] transition-colors shadow-[0_0_30px_rgba(37,211,102,0.3)]"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-[#8C95A6]">
            {BUSINESS.address.street} · North Port, FL 34287 · Open Daily 7 AM – 7 PM ·{" "}
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#00C2FF] transition-colors underline underline-offset-2">
              Get Directions
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
