import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Ceramic Coating Package North Port FL | Full Prep + Application",
  description:
    "Complete ceramic coating package in North Port, FL: decontamination, clay bar, paint correction & professional coating application. 2–5 year protection. Serving Port Charlotte & Sarasota County. Call (941) 800-8198.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/ceramic-coating-package` },
  openGraph: {
    title: "Ceramic Coating Package North Port FL | Prep + Application Bundle",
    description:
      "Full ceramic coating package: clay bar, paint correction & professional coating. 2–5 year protection in North Port, FL. Call (941) 800-8198.",
  },
};

const STEPS = [
  { step: "01", title: "Decontamination Wash", desc: "Thorough hand wash and chemical decontamination to remove all surface-level contamination." },
  { step: "02", title: "Clay Bar Treatment", desc: "Clay bar pass across all painted surfaces to remove bonded contamination — iron fallout, tar, sap." },
  { step: "03", title: "Paint Correction", desc: "Machine polishing to remove swirl marks, light scratches, and oxidation — the coating is only as good as the paint underneath." },
  { step: "04", title: "Panel Preparation", desc: "IPA wipe-down to remove all polishing oils and residues. Surface must be chemically clean for coating adhesion." },
  { step: "05", title: "Ceramic Coating Application", desc: "Professional application of ceramic coating panel by panel. Leveled and allowed to flash before buffing." },
  { step: "06", title: "Initial Cure", desc: "Vehicle stays with us during initial cure. Instructions provided for wash restrictions during the full cure period." },
];

const FAQS = [
  {
    question: "Why is the Ceramic Coating Package different from just buying a ceramic coating?",
    answer:
      "The Package includes all the preparation steps that are required for a coating to perform correctly and last. Applying ceramic coating over uncorrected, contaminated paint is a common mistake that leads to poor adhesion, trapped defects, and shortened lifespan. Our package does everything right from the start.",
  },
  {
    question: "How long does the ceramic coating package take?",
    answer:
      "The full process takes 1–2 days. The actual application and initial flash are done in day one. Vehicles are typically kept overnight for initial cure and delivered the next day with a cure care guide.",
  },
  {
    question: "How long will the coating last after the package?",
    answer:
      "A professionally applied ceramic coating with correct prep work typically lasts 2–5 years in Florida's climate, depending on the product grade and how the vehicle is maintained. We use professional-grade coatings designed for longevity.",
  },
  {
    question: "Can I wash my car normally after the coating?",
    answer:
      "After the cure period (typically 7 days), you can wash the vehicle normally. We recommend hand wash or touchless wash — not brush-equipped tunnel washes, which can cause micro-marring of the coating surface over time. pH-neutral soap is best.",
  },
  {
    question: "Is this package good for a new car?",
    answer:
      "New cars are ideal candidates — the paint is fresh, often in near-perfect condition, and coating it early provides protection from the first miles. We still perform decontamination and a light polish pass to remove any dealer-applied fillers or fine swirls from transport.",
  },
];

export default function CeramicCoatingPackagePage() {
  return (
    <>
      <ServiceSchema
        name="Ceramic Coating Package"
        description="Complete ceramic coating package at North Port Car Wash: decontamination wash, clay bar, paint correction, and professional ceramic coating application for multi-year paint protection."
        url="/services/detailing/ceramic-coating-package"
      />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Ceramic Coating Package", href: "/services/detailing/ceramic-coating-package" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white">Ceramic Coating Package</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs text-[#00C2FF] uppercase tracking-widest font-semibold mb-3 px-3 py-1 bg-[#00C2FF]/10 rounded-full border border-[#00C2FF]/20">
              Premium Protection Package · 1–2 Days
            </span>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-3">Ceramic Coating Package</h1>
            <p className="text-base text-[#A8B5C8] font-medium mb-4">The complete process — done right from decontamination to coating.</p>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-10">
              Our Ceramic Coating Package includes everything needed for a proper, long-lasting ceramic coating result — not just the coating itself, but the decontamination, clay bar treatment, and paint correction that make the difference between a coating that lasts 2 years and one that fails in 6 months.
            </p>

            <h2 className="font-['Barlow',sans-serif] font-bold text-2xl text-white mb-6">The Process</h2>
            <div className="space-y-4 mb-8">
              {STEPS.map((s) => (
                <div key={s.step} className="glass-card p-5 flex gap-4">
                  <div className="font-['Barlow',sans-serif] font-black text-3xl text-[#00C2FF]/20 flex-shrink-0 leading-none">{s.step}</div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                    <p className="text-sm text-[#8C95A6]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 p-4 glass-card">
              <svg className="w-5 h-5 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[#8C95A6]">Duration: <span className="text-white font-medium">1–2 days</span> · Drop-off required</span>
            </div>
          </div>

          <div>
            <div className="glass-card p-6 sticky top-24 border border-[#00C2FF]/15">
              <div className="w-2 h-2 rounded-full bg-[#00C2FF] mb-3" />
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">Get a Quote</h3>
              <p className="text-sm text-[#8C95A6] mb-4">Pricing depends on vehicle size and paint condition. Call to discuss — we will give you an honest assessment.</p>
              <div className="flex flex-col gap-3">
                <a href={BUSINESS.phone.href} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors shadow-[0_0_15px_rgba(0,194,255,0.25)]">
                  Call Now — {BUSINESS.phone.display}
                </a>
                <a href="/book" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                  Book Appointment
                </a>
                <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-2 text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors underline underline-offset-2">
                  Get Directions →
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#8C95A6] space-y-1">
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state}</p>
              </div>
            </div>
            <div className="mt-4 glass-card p-5">
              <p className="text-xs text-[#8C95A6] uppercase tracking-wider font-medium mb-3">Related Services</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/detailing/paint-correction" className="text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Paint Correction</Link></li>
                <li><Link href="/services/detailing/clay-bar-treatment" className="text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Clay Bar Treatment</Link></li>
                <li><Link href="/services/detailing/full-detail-package" className="text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Full Detail Package</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Ceramic Coating Package — Common Questions" />
      </div>
    </>
  );
}
