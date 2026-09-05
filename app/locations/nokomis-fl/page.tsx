import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Car Wash Near Nokomis, FL | North Port Car Wash",
  description:
    "North Port Car Wash serves Nokomis, FL drivers — about 20 minutes south on US-41. Tunnel wash, free vacuums, and detailing. Close to Nokomis Beach and Casey Key.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations/nokomis-fl` },
};

const FAQS = [
  {
    question: "How far is North Port Car Wash from Nokomis, FL?",
    answer:
      "From Nokomis Beach or Casey Key, North Port Car Wash is approximately 20 minutes south on US-41 (Tamiami Trail). Head south through Laurel and continue into North Port — we are on the right at 14164 S Tamiami Trail.",
  },
  {
    question: "Is there a car wash near Nokomis Beach?",
    answer:
      "North Port Car Wash is one of the closest full-service options for Nokomis and Casey Key residents — approximately 20 minutes south on US-41. We offer a tunnel wash, 24/7 touchless bay, free vacuums, and professional detailing by appointment.",
  },
  {
    question: "Why is paint protection important for Nokomis-area vehicles?",
    answer:
      "Nokomis sits directly on the Gulf Coast, and vehicles near Casey Key and Nokomis Beach are exposed to salt air, sea spray, and high UV intensity year-round. Regular washing and a paint sealant or ceramic coating create a barrier that significantly slows oxidation and paint degradation.",
  },
];

export default function NokomisPage() {
  return (
    <>
      <LocalBusinessSchema areaServed={["Nokomis, FL", "North Port, FL", "Sarasota County, FL"]} />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/#service-area" }, { name: "Car Wash Near Nokomis FL", href: "/locations/nokomis-fl" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Car Wash Near Nokomis, FL</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Serving Nokomis, FL</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Wash Near Nokomis, FL
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            North Port Car Wash is approximately 20 minutes south of Nokomis on US-41 (Tamiami Trail). Nokomis and Casey Key residents who travel south on the Trail — or who are heading toward North Port or Port Charlotte — pass directly through our corridor. We offer a tunnel wash, free vacuums, and professional detailing at 14164 S Tamiami Trail. With Nokomis Beach right on the Gulf, salt air protection is especially relevant for vehicles in this area.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Getting Here from Nokomis</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              From Nokomis Beach or Casey Key, head to US-41 (Tamiami Trail) and continue south through Laurel and into North Port. We are at 14164 S Tamiami Trail — approximately 20 minutes from the Nokomis area.
            </p>
            <p className="text-[#8C95A6] leading-relaxed mb-6">
              Nokomis&apos;s position directly on the Gulf Coast — with Casey Key extending into the Gulf and Nokomis Beach just steps from salt water — means vehicles here face above-average paint exposure. Salt particles carried by Gulf breezes settle on paint surfaces and accelerate oxidation. Our clay bar, paint sealant, and ceramic coating services remove and prevent this damage.
            </p>
            <div className="glass-card p-5">
              <address className="not-italic text-sm text-[#8C95A6] space-y-1">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2"><a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a></p>
                <p className="text-xs mt-1">Open Daily 7 AM – 7 PM · Touchless: 24/7</p>
              </address>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#00C2FF] hover:underline">
                Directions from Nokomis →
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Coastal Car Care for Casey Key Vehicles</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              Vehicles parked near Nokomis Beach or on Casey Key deal with some of the harshest conditions in Sarasota County — constant salt air, direct sun, and morning dew that concentrates salt residue on surfaces. Our services are designed for exactly this environment.
            </p>
            <ul className="space-y-2">
              {[
                { name: "Clay bar (removes salt deposits from paint)", href: "/services/detailing/clay-bar-treatment" },
                { name: "Ceramic coating (multi-year Gulf protection)", href: "/services/detailing/ceramic-coating" },
                { name: "Paint sealant (UV + salt barrier)", href: "/services/detailing/paint-sealant" },
                { name: "Touchless wash (safe for clear coat)", href: "/services/wash/touchless-car-wash" },
                { name: "Full interior + exterior detail", href: "/services/detailing/full-detail-package" },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[#00C2FF] hover:underline">{s.name} →</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Nokomis FL Car Wash — Common Questions" />

        <div className="mt-8 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Visit Us from Nokomis</h2>
          <p className="text-[#8C95A6] mb-6">About 20 minutes south on US-41. Open daily 7 AM – 7 PM · Touchless: 24/7.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.phone.href} className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors shadow-[0_0_20px_rgba(0,194,255,0.3)]">Call Now — {BUSINESS.phone.display}</a>
            <a href={BUSINESS.whatsapp.hrefBooking} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20BA5A] transition-colors shadow-[0_0_20px_rgba(37,211,102,0.25)]">Book on WhatsApp</a>
          </div>
          <div className="mt-4">
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors underline underline-offset-2">Get Directions →</a>
          </div>
        </div>
      </div>
    </>
  );
}
