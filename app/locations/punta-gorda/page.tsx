import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Car Wash Near Punta Gorda, FL | North Port Car Wash",
  description:
    "North Port Car Wash serves Punta Gorda, FL drivers — about 25 minutes via US-41. Full tunnel wash, free vacuums, and professional detailing in North Port on the Tamiami Trail.",
  alternates: { canonical: `${BUSINESS.siteUrl}/locations/punta-gorda` },
};

const FAQS = [
  {
    question: "How far is North Port Car Wash from Punta Gorda?",
    answer:
      "Punta Gorda is approximately 25 minutes from North Port Car Wash via US-41 south through Port Charlotte. From Fishermen's Village or downtown Punta Gorda, head to US-41 south and look for us at 14164 S Tamiami Trail in North Port.",
  },
  {
    question: "Why do Punta Gorda residents drive to North Port Car Wash?",
    answer:
      "Many Punta Gorda customers visit us on their way south toward North Port or during errands along US-41. We offer a combination of tunnel wash, free vacuums, and full-service professional detailing that provides more options than smaller local wash alternatives.",
  },
  {
    question: "Can you do fleet detailing for Charlotte County businesses?",
    answer: "Yes — we serve commercial customers from throughout Charlotte County including Punta Gorda. Call (941) 800-8198 to discuss fleet programs and scheduling.",
  },
];

export default function PuntaGordaPage() {
  return (
    <>
      <LocalBusinessSchema areaServed={["Punta Gorda, FL", "North Port, FL", "Charlotte County, FL"]} />
      <BreadcrumbSchema items={[{ name: "Locations", href: "/#service-area" }, { name: "Car Wash Near Punta Gorda", href: "/locations/punta-gorda" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-white">Car Wash Near Punta Gorda, FL</span>
        </nav>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-0.5 bg-[#00C2FF]" />
            <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">Serving Punta Gorda, FL</span>
          </div>
          <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
            Car Wash Near Punta Gorda, FL
          </h1>
          <p className="text-lg text-[#8C95A6] leading-relaxed max-w-2xl">
            Punta Gorda drivers heading south on US-41 toward North Port pass through our area regularly. North Port Car Wash at 14164 S Tamiami Trail is approximately 25 minutes from Fishermen&apos;s Village and downtown Punta Gorda — offering a tunnel wash, free vacuums, and professional detailing on the Tamiami Trail corridor.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Getting Here from Punta Gorda</h2>
            <p className="text-[#8C95A6] leading-relaxed mb-4">
              From downtown Punta Gorda, cross over I-75 and take US-41 (Tamiami Trail) south through Port Charlotte and into North Port. We are on the right side of US-41 at 14164 S Tamiami Trail, about 25 minutes from most Punta Gorda neighborhoods. Punta Gorda&apos;s waterfront location on Charlotte Harbor means vehicles accumulate salt and humidity damage — making paint protection particularly valuable.
            </p>
            <div className="glass-card p-5">
              <address className="not-italic text-sm text-[#8C95A6] space-y-1">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2"><a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a></p>
              </address>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-sm text-[#00C2FF] hover:underline">
                Directions from Punta Gorda →
              </a>
            </div>
          </div>
          <div>
            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-4">Services for Charlotte County Drivers</h2>
            <ul className="space-y-3">
              {[
                "Drive-through tunnel wash — no appointment",
                "Free self-serve vacuums with every wash",
                "Unlimited monthly membership",
                "Professional detailing by appointment",
                "Fleet & commercial vehicle detailing",
                "Ceramic coating for long-term protection",
                "Paint correction & swirl removal",
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

        <FaqSection faqs={FAQS} withSchema title="Punta Gorda Car Wash — Common Questions" />

        <div className="mt-8 glass-card p-8 text-center">
          <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-2">Visit Us from Punta Gorda</h2>
          <p className="text-[#8C95A6] mb-6">About 25 minutes on US-41. Open daily 7 AM – 7 PM.</p>
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
