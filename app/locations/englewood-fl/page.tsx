import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Car Wash Near Englewood, FL | North Port Car Wash",
  description:
    "North Port Car Wash serves Englewood, FL — about 20 minutes away. Tunnel wash, free vacuums, professional detailing for Charlotte County and Sarasota County drivers.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations/englewood-fl` },
};

const FAQS = [
  {
    question: "How far is North Port Car Wash from Englewood, FL?",
    answer: "Englewood is approximately 20 minutes from North Port Car Wash. The most direct route takes you east on SR-776 or through the Rotonda area, connecting to US-41 heading north into North Port.",
  },
  {
    question: "Is there a full-service car wash near Englewood?",
    answer: "North Port Car Wash is one of the closest full-service options for Englewood residents — offering a tunnel wash, free vacuums, and professional detailing by appointment. Call (941) 800-8198 to schedule.",
  },
  {
    question: "Do you serve Lemon Bay area customers?",
    answer: "Yes — customers from the Lemon Bay and Englewood Beach area are welcome. The drive to our North Port location on US-41 is approximately 20 minutes depending on your starting point.",
  },
];

export default function EnglewoodPage() {
  return (
    <>
      <LocalBusinessSchema areaServed={["Englewood, FL", "North Port, FL", "Charlotte County, FL"]} />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/#service-area" }, { name: "Car Wash Near Englewood FL", href: "/locations/englewood-fl" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Car Wash Near Englewood, FL</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Serving Englewood, FL</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Wash Near Englewood, FL
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            North Port Car Wash is approximately 20 minutes from Englewood — a quick trip from the Lemon Bay area and Englewood Beach for drivers who want a full-service wash, free vacuums, or a scheduled detailing appointment. Englewood&apos;s coastal location means vehicles accumulate salt and humidity damage quickly, making our paint protection services especially relevant.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Getting Here from Englewood</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              From Englewood Beach or the Lemon Bay area, the most common route is to head east toward SR-776 (McCall Road), then north through Port Charlotte and connect to US-41 (Tamiami Trail) south of the county line into North Port. You will find us at 14164 S Tamiami Trail.
            </p>
            <div className="glass-card p-5">
              <address className="not-italic text-sm text-[#8C95A6] space-y-1">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2"><a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a></p>
                <p className="text-xs mt-1">Open Daily 7 AM – 7 PM</p>
              </address>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#00C2FF] hover:underline">
                Directions from Englewood →
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Coastal Car Care for Englewood Vehicles</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              Vehicles near Lemon Bay and Manasota Key face constant salt air exposure from the Gulf. Salt accelerates rust on exposed metal, pits clear coat, and degrades rubber seals faster than in inland areas. Regular washing and professional paint protection make a meaningful difference in how long your vehicle looks good and holds value.
            </p>
            <ul className="space-y-2">
              {[
                { name: "Touchless wash (removes salt residue)", href: "/services/wash/touchless-car-wash" },
                { name: "Paint sealant (UV + salt protection)", href: "/services/detailing/paint-sealant" },
                { name: "Ceramic coating (multi-year protection)", href: "/services/detailing/ceramic-coating" },
                { name: "Clay bar (removes bonded salt deposits)", href: "/services/detailing/clay-bar-treatment" },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[#00C2FF] hover:underline">{s.name} →</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Englewood FL Car Wash — Common Questions" />

        <div className="mt-8 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Visit Us from Englewood</h2>
          <p className="text-[#8C95A6] mb-6">About 20 minutes away. Open daily 7 AM – 7 PM · Touchless bay: 24/7.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.phone.href} className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors shadow-[0_0_20px_rgba(0,194,255,0.3)]">Call Now — {BUSINESS.phone.display}</a>
            <a href="/book" className="px-8 py-3 rounded-xl bg-white/8 border border-white/20 text-white font-bold hover:bg-white/15 transition-colors">Book Appointment</a>
          </div>
          <div className="mt-4">
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors underline underline-offset-2">Get Directions →</a>
          </div>
        </div>
      </div>
    </>
  );
}
