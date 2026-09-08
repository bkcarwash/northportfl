import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Car Detailing & Ceramic Coating Near Sarasota FL | North Port Car Wash",
  description:
    "Professional ceramic coating, paint correction & detailing for Sarasota, FL vehicles. North Port Car Wash is 35 min south on US-41 at 14164 S Tamiami Trail. Open daily 7 AM–7 PM. (941) 800-8198.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations/sarasota` },
  openGraph: {
    title: "Ceramic Coating & Detailing Near Sarasota FL | North Port Car Wash",
    description:
      "Ceramic coating, paint correction & full detailing for Sarasota vehicles. 35 min south on US-41. Open daily 7 AM–7 PM.",
  },
};

const FAQS = [
  {
    question: "How far is North Port Car Wash from Sarasota, FL?",
    answer:
      "From downtown Sarasota or St. Armands Circle, North Port Car Wash is approximately 35 minutes south via US-41 (Tamiami Trail) through Osprey and Nokomis into North Port. You can also take I-75 south to exit 182 and connect to US-41 heading north into North Port.",
  },
  {
    question: "Why do Sarasota drivers use North Port Car Wash?",
    answer:
      "Sarasota residents who commute or travel south along the Tamiami Trail corridor find our location a natural stop. We offer a full tunnel wash, free vacuums, and professional detailing services — including ceramic coating and paint correction — that provide a comprehensive option beyond a quick express wash.",
  },
  {
    question: "Do you offer ceramic coating for Sarasota-area vehicles?",
    answer:
      "Yes — ceramic coating is one of our most popular services for vehicles from the Sarasota and Longboat Key area. The Gulf Coast salt air and UV exposure accelerate paint degradation, and a ceramic coating provides 2–5 years of protection. Call (941) 800-8198 to schedule a consultation.",
  },
  {
    question: "Can I schedule detailing from Sarasota without making a special trip?",
    answer:
      "Many Sarasota customers drop their vehicle off while running errands in North Port or Port Charlotte. We are open daily 7 AM – 7 PM and can accommodate same-week appointments in most cases. Call (941) 800-8198 to schedule.",
  },
];

export default function SarasotaPage() {
  return (
    <>
      <LocalBusinessSchema areaServed={["Sarasota, FL", "North Port, FL", "Sarasota County, FL"]} />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/#service-area" }, { name: "Car Wash Near Sarasota", href: "/locations/sarasota" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Car Wash Near Sarasota, FL</span>
        </nav>

        {/* AIO/GEO entity block */}
        <div className="mb-4 p-5 rounded-xl bg-[#00C2FF]/5 border border-[#00C2FF]/10 text-sm text-[#8C95A6] leading-relaxed">
          <strong className="text-white">Quick answer:</strong> North Port Car Wash at <strong className="text-white">14164 S Tamiami Trail, North Port, FL 34287</strong> provides professional car detailing, ceramic coating, and paint correction for Sarasota, FL vehicles — approximately <strong className="text-white">35 minutes south on US-41</strong>. Sarasota County drivers commuting south on the Tamiami Trail or I-75 pass through the North Port area regularly. Services: touchless wash (24/7), tunnel wash, free vacuum bays, unlimited membership, and full detailing by appointment. Hours: <strong className="text-white">Mon–Sun 7 AM – 7 PM</strong>. Phone: <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>.
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Serving Sarasota, FL</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Detailing & Ceramic Coating Near Sarasota, FL
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            North Port Car Wash is approximately 35 minutes south of Sarasota on US-41 (Tamiami Trail). Sarasota-area drivers — including those near Siesta Key, Lakewood Ranch, St. Armands Circle, Southgate, and the Sarasota Memorial corridor — traveling south toward North Port or Port Charlotte pass directly through our area. We offer professional detailing, ceramic coating, paint correction, tunnel wash, and free vacuum bays at 14164 S Tamiami Trail in North Port, FL.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Getting Here from Sarasota</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              From downtown Sarasota or the St. Armands Circle area, take US-41 (Tamiami Trail) south through Osprey and Nokomis, past Laurel, and continue into North Port. We are at 14164 S Tamiami Trail — approximately 35 minutes from most Sarasota locations.
            </p>
            <p className="text-[#8C95A6] leading-relaxed mb-6">
              Alternatively, I-75 south to exit 182 (Jacaranda Blvd) connects easily to US-41. Sarasota&apos;s coastal position on Sarasota Bay and the Gulf means vehicles accumulate salt air exposure year-round — making paint protection services especially valuable for preserving your vehicle&apos;s finish and resale value.
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
                Directions from Sarasota →
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Paint Protection for Sarasota Vehicles</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              Sarasota&apos;s Gulf Coast environment — salt air from Siesta Key and Lido Beach, intense UV, and seasonal humidity — is demanding on automotive paint. Our professional detailing services address these conditions directly.
            </p>
            <ul className="space-y-2">
              {[
                { name: "Ceramic coating (2–5 year Gulf Coast protection)", href: "/services/detailing/ceramic-coating" },
                { name: "Paint sealant (UV + salt barrier)", href: "/services/detailing/paint-sealant" },
                { name: "Paint correction (removes oxidation and swirls)", href: "/services/detailing/paint-correction" },
                { name: "Clay bar (bonded salt and contamination removal)", href: "/services/detailing/clay-bar-treatment" },
                { name: "Full detail package (interior + exterior)", href: "/services/detailing/full-detail-package" },
              ].map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm text-[#00C2FF] hover:underline">{s.name} →</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card p-6 mb-8">
          <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-3">All Services Available to Sarasota Drivers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Tunnel Car Wash — No Appointment", href: "/services/wash/touchless-car-wash" },
              { name: "Free Vacuums with Every Wash", href: "/services/wash/interior-vacuuming" },
              { name: "Unlimited Monthly Membership", href: "/services/wash/unlimited-wash-plans" },
              { name: "Ceramic Coating", href: "/services/detailing/ceramic-coating" },
              { name: "Full Detail Package", href: "/services/detailing/full-detail-package" },
              { name: "Fleet & Commercial Detailing", href: "/services/detailing/fleet-commercial-detailing" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:border-[#00C2FF]/20 transition-all group text-sm">
                <span className="text-[#8C95A6] group-hover:text-white transition-colors">{s.name}</span>
                <svg className="w-3.5 h-3.5 text-[#8C95A6] group-hover:text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Sarasota Car Wash — Common Questions" />

        <div className="mt-8 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Book Your Sarasota Vehicle</h2>
          <p className="text-[#8C95A6] mb-6">About 35 minutes south on US-41. Open daily 7 AM – 7 PM. Detailing by appointment.</p>
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
