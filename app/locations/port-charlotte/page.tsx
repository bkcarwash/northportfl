import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";
import StarRating from "@/components/ui/StarRating";

export const metadata: Metadata = {
  title: "Car Wash & Detailing Near Port Charlotte FL | 10 Min on US-41",
  description:
    "Port Charlotte's closest full-service car wash — just 10 min south on US-41. Touchless wash, free vacuum bays, ceramic coating & detailing at 14164 S Tamiami Trail. Open daily 7 AM–7 PM. (941) 564-6447.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations/port-charlotte` },
  openGraph: {
    title: "Car Wash & Detailing Near Port Charlotte FL | North Port Car Wash",
    description:
      "10 minutes south on US-41. Touchless wash, free vacuums, ceramic coating & detailing. Open daily 7 AM–7 PM at 14164 S Tamiami Trail.",
  },
};

const FAQS = [
  {
    question: "How far is North Port Car Wash from Port Charlotte?",
    answer:
      "North Port Car Wash is approximately 10–15 minutes south of most Port Charlotte locations via US-41 (Tamiami Trail). From the Murdock area, head south on US-41 and look for us at 14164 S Tamiami Trail.",
  },
  {
    question: "Is North Port Car Wash the closest full-service wash to Port Charlotte?",
    answer:
      "We are one of the closest full-service car washes to the southern Port Charlotte area, particularly along the US-41 corridor. We offer tunnel wash, free vacuums, and full professional detailing — making us the most complete option in the immediate area.",
  },
  {
    question: "Can Port Charlotte residents use the unlimited wash membership?",
    answer:
      "Absolutely. Our unlimited monthly membership is available to any customer, including Port Charlotte residents. Given the short drive on US-41, many Port Charlotte drivers use our wash regularly and find the membership pays for itself quickly.",
  },
  {
    question: "Do you offer detailing for Port Charlotte customers?",
    answer:
      "Yes — Port Charlotte customers are welcome to schedule professional detailing appointments at our North Port location. Call (941) 564-6447 to book. We offer everything from an Express Detail to full ceramic coating packages.",
  },
];

export default function PortCharlottePage() {
  return (
    <>
      <LocalBusinessSchema areaServed={["Port Charlotte, FL", "North Port, FL", "Charlotte County, FL"]} />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/#service-area" }, { name: "Car Wash Near Port Charlotte", href: "/locations/port-charlotte" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Car Wash Near Port Charlotte, FL</span>
        </nav>

        {/* AIO/GEO entity block */}
        <div className="mb-4 p-5 rounded-xl bg-[#00C2FF]/5 border border-[#00C2FF]/10 text-sm text-[#8C95A6] leading-relaxed">
          <strong className="text-white">Quick answer:</strong> The closest full-service car wash and detailing center to Port Charlotte, FL is <strong className="text-white">North Port Car Wash at 14164 S Tamiami Trail (US-41), North Port, FL 34287</strong> — approximately <strong className="text-white">10–15 minutes south on US-41</strong>. Services for Port Charlotte drivers: touchless car wash (24/7), tunnel wash, free vacuum bays, unlimited monthly membership, car detailing, ceramic coating &amp; paint correction. Hours: <strong className="text-white">Mon–Sun 7:00 AM – 7:00 PM</strong>. Phone: <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>.
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Serving Port Charlotte, FL</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Wash & Detailing Near Port Charlotte, FL
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            Port Charlotte drivers looking for a quality car wash, auto detailing, or ceramic coating will find North Port Car Wash just a 10–15 minute drive south on US-41 (Tamiami Trail). Port Charlotte neighborhoods along the Murdock corridor, Harbor Blvd, Kings Hwy, and the US-41 Business district are all within easy reach. We offer a drive-through tunnel wash, 24/7 touchless bay, free self-serve vacuums, professional detailing by appointment, and ceramic coating — making us the most complete car care option near Charlotte County.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">
              Getting Here from Port Charlotte
            </h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              From the Murdock area or Port Charlotte Town Center, head south on US-41 toward North Port. We are located at 14164 S Tamiami Trail — just past the Charlotte/Sarasota county line heading south. The drive typically takes 10–15 minutes from most Port Charlotte neighborhoods.
            </p>
            <p className="text-[#8C95A6] leading-relaxed mb-6">
              Port Charlotte drivers along US-41 pass us on the way to and from work — many of our regular customers stop in during their daily commute. Our 24/7 touchless bay means you can even stop in at odd hours without worrying about staffed hours.
            </p>
            <div className="glass-card p-5">
              <p className="text-sm font-medium text-white mb-2">North Port Car Wash</p>
              <address className="not-italic text-sm text-[#8C95A6] space-y-1">
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2"><a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a></p>
                <p className="text-xs mt-1">Open Daily 7 AM – 7 PM · Touchless: 24/7</p>
              </address>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#00C2FF] hover:underline">
                Get Directions from Port Charlotte →
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Why Port Charlotte Drivers Choose Us</h2>
            <ul className="space-y-3">
              {[
                "Short 10–15 min drive on US-41 from most of Port Charlotte",
                "Free self-serve vacuum bays with every wash",
                "Unlimited monthly membership — wash as often as you like",
                "Professional detailing by appointment: interior, exterior, ceramic coating",
                "Friendly, consistent service — 4.2 stars, 295 Google reviews",
                "Punch card loyalty — 10th wash free",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#8C95A6]">
                  <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              <StarRating rating={BUSINESS.rating.value} size="md" />
              <span className="text-white font-medium">{BUSINESS.rating.value}</span>
              <span className="text-[#8C95A6] text-sm">· {BUSINESS.rating.count} Google reviews</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 mb-8">
          <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-3">Services Available for Port Charlotte Drivers</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Touchless Car Wash (24/7)", href: "/services/wash/touchless-car-wash" },
              { name: "Free Interior Vacuuming", href: "/services/wash/interior-vacuuming" },
              { name: "Unlimited Wash Membership", href: "/services/wash/unlimited-wash-plans" },
              { name: "Professional Detailing Packages", href: "/services" },
              { name: "Ceramic Coating", href: "/services/detailing/ceramic-coating" },
              { name: "Gift Cards", href: "/services/wash/gift-cards" },
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

        <FaqSection faqs={FAQS} withSchema title="Port Charlotte Car Wash — Common Questions" />

        <div className="mt-8 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Ready to Visit?</h2>
          <p className="text-[#8C95A6] mb-6">Just 10–15 minutes south on US-41. No appointment needed for the tunnel wash.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
              Get Directions
            </a>
            <a
              href={BUSINESS.whatsapp.hrefBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl font-bold text-white transition-colors"
              style={{ backgroundColor: "#25D366" }}
            >
              Book on WhatsApp
            </a>
            <a href={BUSINESS.phone.href} className="px-8 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
              {BUSINESS.phone.display}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
