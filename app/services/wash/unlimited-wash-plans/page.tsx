import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Unlimited Car Wash Membership | North Port, FL",
  description:
    "Wash your car as often as you like for one monthly rate at North Port Car Wash. Unlimited membership plans with free vacuums every visit, no contracts, cancel anytime. North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/wash/unlimited-wash-plans` },
};

const FAQS = [
  {
    question: "What does 'unlimited' mean exactly?",
    answer:
      "Unlimited means you can visit North Port Car Wash and run your vehicle through the tunnel wash as many times as you want within a calendar month, all covered by your flat monthly membership fee. There is no per-visit charge on top of the membership.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "No long-term contracts. Our unlimited wash membership is month-to-month. You can cancel at any time — call us at (941) 800-8198 to cancel before your next billing date.",
  },
  {
    question: "Can I share my membership with a family member?",
    answer:
      "Memberships are tied to a single vehicle's license plate. Each vehicle that wants unlimited wash access would need its own membership. Call us to ask about multi-vehicle pricing.",
  },
  {
    question: "How do I sign up?",
    answer:
      "Stop by North Port Car Wash at 14164 S Tamiami Trail and speak with our staff, or call us at (941) 800-8198 to set up your membership over the phone. We will activate your plan and link it to your vehicle.",
  },
  {
    question: "Is the unlimited membership worth it?",
    answer:
      "For regular drivers in the Tamiami Trail corridor — dealing with dust from US-41, salt air from the Gulf, or daily commuting grime — the membership typically pays for itself within a few washes per month. Florida's weather also means you may want to wash more often than you expect.",
  },
  {
    question: "Do members get free vacuums too?",
    answer:
      "Yes. Free self-serve vacuum bays are included with every wash visit for all customers, including members. There is no additional charge.",
  },
];

export default function UnlimitedWashPlansPage() {
  return (
    <>
      <ServiceSchema
        name="Unlimited Car Wash Membership"
        description="Monthly unlimited car wash membership at North Port Car Wash. Wash as often as you like for one flat monthly rate, including free vacuum access every visit. No contracts."
        url="/services/wash/unlimited-wash-plans"
      />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Unlimited Wash Plans", href: "/services/wash/unlimited-wash-plans" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white">Unlimited Wash Plans</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs text-[#00C2FF] uppercase tracking-widest font-semibold mb-3 px-3 py-1 bg-[#00C2FF]/10 rounded-full border border-[#00C2FF]/20">
              Monthly Membership · Best Value
            </span>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
              Unlimited Car Wash Membership
            </h1>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-8">
              Our unlimited wash membership gives you one flat monthly rate and unlimited access to the North Port Car Wash tunnel. Wash your car every day if you want — your membership covers it all. It is the simplest and most cost-effective way to keep a consistently clean car on the Tamiami Trail.
            </p>

            <div className="glass-card p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {[
                  "Unlimited tunnel wash visits all month",
                  "Free self-serve vacuum bays with every visit",
                  "Member discounts on wax and sealant add-ons",
                  "Month-to-month — no annual contracts",
                  "Cancel any time, no penalty fees",
                  "Single vehicle, license-plate linked for easy entry",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#8C95A6]">
                    <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 mb-6 bg-[#00C2FF]/5 border-[#00C2FF]/15">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-3">Why Membership Makes Sense in Florida</h2>
              <p className="text-sm text-[#8C95A6] leading-relaxed mb-3">
                Florida vehicles face conditions that accelerate paint and finish deterioration faster than most of the country: intense daily UV, high humidity, salt air from the Gulf of Mexico, and frequent rain that leaves mineral deposits on paint. Drivers near North Port, Port Charlotte, and Venice who wash regularly preserve their paint longer and maintain resale value.
              </p>
              <p className="text-sm text-[#8C95A6] leading-relaxed">
                With an unlimited membership, the cost-per-wash drops dramatically after just a few visits per month — making it the most economical option for anyone who cares about keeping their car clean year-round.
              </p>
            </div>

            <div className="glass-card p-6 mb-8">
              <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-3">Already a Drive-Up Customer?</h2>
              <p className="text-sm text-[#8C95A6] mb-3">
                Our punch card program is perfect if you prefer pay-as-you-go. Get 9 washes and your 10th is free — no sign-up needed.
              </p>
              <Link href="/" className="text-[#00C2FF] hover:underline text-sm">Learn about our Punch Card →</Link>
            </div>
          </div>

          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">Sign Up Today</h3>
              <p className="text-sm text-[#8C95A6] mb-4">Call us or stop by to activate your membership — takes just a few minutes.</p>
              <div className="flex flex-col gap-3">
                <a href={BUSINESS.phone.href} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
                  Call {BUSINESS.phone.display}
                </a>
                <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
                  Get Directions
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#8C95A6] space-y-1">
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2">Open Daily 7 AM – 7 PM</p>
              </div>
            </div>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Unlimited Membership — Common Questions" />
      </div>
    </>
  );
}
