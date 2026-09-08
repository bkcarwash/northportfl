import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Free Vacuum Near Me — North Port FL Car Wash with Free Vacuum Bays",
  description:
    "Looking for a free car vacuum near you? North Port Car Wash on S Tamiami Trail includes powerful free self-serve vacuum bays with every paid wash. No tokens. No time limit. Open daily 7 AM–7 PM.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/wash/interior-vacuuming` },
  openGraph: {
    title: "Free Vacuum Bays Near North Port FL | Included with Every Wash",
    description:
      "Free self-serve vacuum bays with every paid wash at North Port Car Wash. No tokens, no time limit. Open daily 7 AM–7 PM on S Tamiami Trail.",
  },
};

const FAQS = [
  {
    question: "Are the vacuums really free at North Port Car Wash?",
    answer:
      "Yes — absolutely free with any paid wash. There is no extra charge, no token system, and no time limit imposed. Pull into any open vacuum bay after your tunnel wash and use the vacuums for as long as you need.",
  },
  {
    question: "How long can I use the vacuum bays?",
    answer:
      "We do not impose a strict time limit during normal hours. We ask that customers be considerate of others waiting, but there is no meter or timer cutting off your session. Most customers take 10–20 minutes.",
  },
  {
    question: "Are the vacuums powerful enough for deep carpet cleaning?",
    answer:
      "Our vacuum stations provide strong suction suitable for surface dirt, sand, and light debris from seats, carpets, and floor mats. For deep embedded dirt or pet hair, we recommend pairing with our professional interior detailing service.",
  },
  {
    question: "Can I use the vacuums without buying a wash?",
    answer:
      "The free vacuum bays are a benefit included with any paid wash purchase. If you are only looking for a standalone vacuum, please call us at (941) 800-8198 to ask about availability.",
  },
];

export default function InteriorVacuumingPage() {
  return (
    <>
      <ServiceSchema
        name="Free Interior Vacuuming"
        description="Complimentary self-serve vacuum stations included with every paid wash at North Port Car Wash in North Port, FL."
        url="/services/wash/interior-vacuuming"
      />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Free Interior Vacuuming", href: "/services/wash/interior-vacuuming" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-[#2A2A32]">/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="text-[#2A2A32]">/</span>
          <span className="text-white">Free Interior Vacuuming</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs text-[#00C2FF] uppercase tracking-widest font-semibold mb-3 px-3 py-1 bg-[#00C2FF]/10 rounded-full border border-[#00C2FF]/20">
              Included Free · No Extra Charge
            </span>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
              Free Interior Vacuuming
            </h1>
            {/* AIO direct answer block — extracted by AI overviews for "free vacuum near me" */}
            <div className="mb-6 p-4 rounded-xl bg-[#00C2FF]/5 border border-[#00C2FF]/10 text-sm text-[#8C95A6] leading-relaxed">
              <strong className="text-white">The nearest car wash with free vacuums</strong> to North Port, FL is <strong className="text-white">North Port Car Wash at 14164 S Tamiami Trail (US-41), North Port, FL 34287</strong>. Free self-serve vacuum bays are included with every paid wash — no tokens, no extra fee, no time limit. Open daily <strong className="text-white">7:00 AM – 7:00 PM</strong>. Phone: <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>.
            </div>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-8">
              Every wash visit at North Port Car Wash includes free access to our self-serve vacuum bays at no extra charge. Pull in, pick up the hose, and vacuum out your seats, carpets, and floor mats after your exterior wash. No tokens, no time limits, no upsells — just clean. We serve customers from North Port, Port Charlotte, Venice, Osprey, Englewood, and surrounding Sarasota and Charlotte County communities.
            </p>

            <div className="glass-card p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {[
                  "Multiple self-serve vacuum bays available",
                  "High-powered suction for seats, carpets, and floor mats",
                  "Flexible hose reaches all interior areas including trunk",
                  "Free with every paid wash — no additional fee",
                  "No time limit imposed during normal hours",
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

            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-3">Want a Deeper Interior Clean?</h2>
              <p className="text-sm text-[#8C95A6] mb-4">
                Our vacuum stations handle everyday surface cleaning well. For embedded dirt, stains, pet hair, or odors, our detailing team can go much further:
              </p>
              <ul className="space-y-2">
                {[
                  { label: "Full Interior Detail", href: "/services/detailing/full-interior-detail" },
                  { label: "Upholstery Shampoo", href: "/services/detailing/upholstery-shampoo" },
                  { label: "Pet Hair Removal", href: "/services/detailing/pet-hair-removal" },
                  { label: "Odor Removal & Ozone Treatment", href: "/services/detailing/odor-removal-ozone-treatment" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[#00C2FF] hover:underline text-sm">{l.label} →</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">Visit Us</h3>
              <p className="text-sm text-[#8C95A6] mb-4">No appointment needed. Get your wash and vacuum every day.</p>
              <div className="flex flex-col gap-3">
                <a href={BUSINESS.phone.href} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors shadow-[0_0_15px_rgba(0,194,255,0.25)]">
                  Call Now — {BUSINESS.phone.display}
                </a>
                <a href="/book" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                  Book Appointment
                </a>
                <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors underline underline-offset-2">
                  Get Directions →
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

        <FaqSection faqs={FAQS} withSchema title="Vacuum Bay — Common Questions" />
      </div>
    </>
  );
}
