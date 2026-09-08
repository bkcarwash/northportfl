import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Car Wash Near Venice, FL | North Port Car Wash",
  description:
    "North Port Car Wash serves Venice, FL drivers — about 20–25 minutes south on US-41. Touchless wash, free vacuums, and professional detailing. Sarasota County, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations/venice-fl` },
};

const FAQS = [
  {
    question: "How far is North Port Car Wash from Venice, FL?",
    answer:
      "From historic downtown Venice and Venice Beach, North Port Car Wash is approximately 20–25 minutes south on US-41 (Tamiami Trail). Head south through Nokomis and Osprey, continuing on US-41 into North Port.",
  },
  {
    question: "Why would Venice residents drive to North Port for a car wash?",
    answer:
      "Venice residents who travel the Tamiami Trail corridor regularly find North Port Car Wash a convenient stop. We offer free vacuums, unlimited memberships, and professional detailing that may not be available at all local options closer to Venice.",
  },
  {
    question: "Is the detailing service worth the drive from Venice?",
    answer:
      "For professional detailing services like paint correction, ceramic coating, or full detail packages, many customers from the Venice and Nokomis area find it worth the trip. Call us at (941) 800-8198 to schedule and discuss what we can do for your vehicle.",
  },
];

export default function VenicePage() {
  return (
    <>
      <LocalBusinessSchema areaServed={["Venice, FL", "North Port, FL", "Sarasota County, FL"]} />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/#service-area" }, { name: "Car Wash Near Venice FL", href: "/locations/venice-fl" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Car Wash Near Venice, FL</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Serving Venice, FL</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Wash Near Venice, FL
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            North Port Car Wash is located approximately 20–25 minutes south of Venice on US-41 (Tamiami Trail). Venice residents who regularly travel the Tamiami Trail corridor — whether heading toward North Port, Port Charlotte, or Punta Gorda — find us a convenient and well-equipped car wash and detailing destination. Venice&apos;s beautiful beaches and coastal air mean your car picks up salt residue fast, making regular washing particularly important.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">From Venice to North Port</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              From Historic Downtown Venice or Venice Beach, take US-41 (Tamiami Trail) south through Nokomis and Osprey, past Laurel, and continue into North Port. We are at 14164 S Tamiami Trail — approximately 20–25 minutes from most Venice locations.
            </p>
            <p className="text-[#8C95A6] leading-relaxed mb-6">
              Venice is known for its shark tooth beaches, proximity to the Gulf, and its charming historic downtown. That coastal environment — humidity, salt air, and seasonal rain — is exactly why regular car washing matters for paint preservation. We offer the protection options (wax, sealant, ceramic coating) to keep Gulf Coast vehicles looking their best.
            </p>
            <div className="glass-card p-5">
              <address className="not-italic text-sm text-[#8C95A6] space-y-1">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2"><a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a></p>
              </address>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#00C2FF] hover:underline">
                Directions from Venice →
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Services for Venice-Area Vehicles</h2>
            <ul className="space-y-3">
              {[
                "Touchless wash bay (24/7 — great for beach-day rinses)",
                "Free vacuums: remove sand and saltwater residue",
                "Paint sealant: shields against salt air and UV",
                "Ceramic coating: multi-year coastal protection",
                "Clay bar treatment: removes salt-bonded contamination",
                "Unlimited monthly membership for frequent washers",
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
        </div>

        <FaqSection faqs={FAQS} withSchema title="Venice FL Car Wash — Common Questions" />

        <div className="mt-8 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Visit Us from Venice</h2>
          <p className="text-[#8C95A6] mb-6">About 20–25 minutes south on US-41. Open daily 7 AM – 7 PM.</p>
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
