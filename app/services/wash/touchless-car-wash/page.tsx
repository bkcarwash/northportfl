import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Touchless Car Wash in North Port, FL | Available 24/7",
  description:
    "North Port Car Wash offers a touchless wash bay open 24/7 on S Tamiami Trail. High-pressure jets, premium soap, spot-free rinse — no brushes, no contact, no scratches. Serving North Port, Port Charlotte, and Venice, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/wash/touchless-car-wash` },
};

const FAQS = [
  {
    question: "Is touchless car wash safe for my paint?",
    answer:
      "Yes — a touchless wash is one of the safest methods for your paint because no brushes or cloths ever contact the surface. High-pressure water and foam do all the cleaning. This makes it ideal for freshly painted vehicles, ceramic-coated cars, and anyone concerned about swirl marks.",
  },
  {
    question: "Is the touchless bay open at night?",
    answer:
      "Yes. The touchless self-serve bay at North Port Car Wash is open 24 hours a day, 7 days a week — including nights, weekends, and holidays. Our staffed tunnel wash operates daily until 7 PM, but the touchless bay is always available.",
  },
  {
    question: "How is the touchless bay different from the drive-through tunnel?",
    answer:
      "The drive-through tunnel uses a combination of soft-touch brushes and high-pressure jets operated by staff. The touchless bay is a self-serve enclosure where you control the wash with a wand and select your soap/rinse cycles. No brushes are used at all.",
  },
  {
    question: "Can I wash a lifted truck or large SUV in the touchless bay?",
    answer:
      "Yes. The touchless bay accommodates most full-size trucks, SUVs, and vans. If you have questions about whether your vehicle will fit, call us at (941) 800-8198 before visiting.",
  },
  {
    question: "Does the touchless wash remove tough dirt and road grime?",
    answer:
      "For light to moderate dirt, yes. Heavy mud, caked-on bugs, or road tar may require pre-soaking or a follow-up with the tunnel wash. Our high-pressure pre-soak cycle helps loosen stubborn debris before the main wash cycle.",
  },
];

export default function TouchlessCarWashPage() {
  return (
    <>
      <ServiceSchema
        name="Touchless Car Wash"
        description="24/7 touchless self-serve car wash bay using high-pressure water jets and premium soap — no brushes, no contact scratches. Available day and night at North Port Car Wash on S Tamiami Trail."
        url="/services/wash/touchless-car-wash"
      />
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services" },
          { name: "Touchless Car Wash", href: "/services/wash/touchless-car-wash" },
        ]}
      />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-[#2A2A32]">/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="text-[#2A2A32]">/</span>
          <span className="text-white">Touchless Car Wash</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs text-[#00C2FF] uppercase tracking-widest font-semibold mb-3 px-3 py-1 bg-[#00C2FF]/10 rounded-full border border-[#00C2FF]/20">
              Express Wash · Open 24/7
            </span>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-4">
              Touchless Car Wash in North Port, FL
            </h1>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-8">
              Our touchless car wash bay uses high-pressure water jets and premium foam soap to deliver a thorough clean with zero brush contact — protecting your paint while removing road grime, dust, and light debris. The bay is open 24 hours a day, 7 days a week on S Tamiami Trail in North Port.
            </p>

            <div className="glass-card p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {[
                  "High-pressure pre-soak foam cycle",
                  "Touchless jet wash — no brushes contact your paint",
                  "Wheel and lower panel rinse",
                  "Spot-free final rinse",
                  "Access to free self-serve vacuum bays afterward",
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
              <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-3">What&apos;s Not Included</h2>
              <p className="text-sm text-[#8C95A6] mb-4">
                The touchless bay is an exterior wash only. For more protection or interior cleaning, consider:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/wash/car-waxing" className="text-[#00C2FF] hover:underline text-sm">
                    Car Wax Add-On →
                  </Link>
                  <span className="text-[#8C95A6] text-sm"> — protective wax applied in the tunnel wash</span>
                </li>
                <li>
                  <Link href="/services/wash/sealant" className="text-[#00C2FF] hover:underline text-sm">
                    Paint Sealant →
                  </Link>
                  <span className="text-[#8C95A6] text-sm"> — longer-lasting paint protection</span>
                </li>
                <li>
                  <Link href="/services/detailing/hand-wash" className="text-[#00C2FF] hover:underline text-sm">
                    Premium Hand Wash →
                  </Link>
                  <span className="text-[#8C95A6] text-sm"> — detailer-applied for paint-sensitive vehicles</span>
                </li>
                <li>
                  <Link href="/services/wash/interior-vacuuming" className="text-[#00C2FF] hover:underline text-sm">
                    Free Interior Vacuums →
                  </Link>
                  <span className="text-[#8C95A6] text-sm"> — available at our vacuum bays</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 p-4 glass-card mb-8">
              <svg className="w-5 h-5 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[#8C95A6]">
                Estimated wash time: <span className="text-white font-medium">5–10 minutes</span> · Bay open 24/7
              </span>
            </div>

            <div className="glass-card p-6 mb-8">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-3">Why Florida Drivers Love Touchless Washing</h2>
              <p className="text-sm text-[#8C95A6] leading-relaxed">
                In Florida&apos;s Gulf Coast climate, vehicles pick up a unique mix of salt air residue, fine sand, pollen, and UV-baked road grime that accumulates fast — especially along the US-41/Tamiami Trail corridor. A touchless wash removes surface contamination quickly without the risk of rubbing that grit across your clear coat, which is the main cause of swirl marks and micro-scratches. For drivers between North Port, Port Charlotte, and Venice, it&apos;s the fastest way to maintain a clean car between details.
              </p>
            </div>
          </div>

          {/* CTA Sidebar */}
          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">Visit Us Any Time</h3>
              <p className="text-sm text-[#8C95A6] mb-4">
                No appointment needed. Touchless bay is open 24 hours a day, every day.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={BUSINESS.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
                <a
                  href={BUSINESS.phone.href}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {BUSINESS.phone.display}
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 space-y-1 text-xs text-[#8C95A6]">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2 text-[#00C2FF]">Touchless Bay: Open 24/7</p>
                <p>Staffed Hours: Daily 7 AM – 7 PM</p>
              </div>
            </div>

            <div className="mt-4 glass-card p-5">
              <p className="text-xs text-[#8C95A6] uppercase tracking-wider font-medium mb-3">Related Services</p>
              <ul className="space-y-2">
                <li><Link href="/services/wash/car-waxing" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Car Waxing</Link></li>
                <li><Link href="/services/wash/sealant" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Paint Sealant</Link></li>
                <li><Link href="/services/wash/unlimited-wash-plans" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Unlimited Membership</Link></li>
                <li><Link href="/services/detailing/ceramic-coating" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors">Ceramic Coating</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <FaqSection faqs={FAQS} withSchema title="Touchless Car Wash — Common Questions" />
      </div>
    </>
  );
}
