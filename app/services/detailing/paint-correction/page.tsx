import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business-config";
import ServiceDetailPage from "@/components/sections/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Paint Correction Near Me — North Port FL | Swirl & Scratch Removal",
  description:
    "Professional paint correction near North Port, FL. Machine polishing removes swirl marks, scratches & oxidation at 14164 S Tamiami Trail. Serving Port Charlotte, Venice & Sarasota. Call (941) 564-6447.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/paint-correction` },
  openGraph: {
    title: "Paint Correction Near North Port FL | Swirl Mark Removal",
    description:
      "Remove swirl marks, scratches & oxidation with machine polishing. Professional paint correction in North Port, FL. Call (941) 564-6447.",
  },
};

export default function PaintCorrectionPage() {
  return (
    <ServiceDetailPage
      slug="paint-correction"
      category="detailing"
      badge="Exterior Detailing · By Appointment"
      name="Paint Correction — Swirl & Scratch Removal"
      tagline="Restore true paint clarity by removing surface defects with machine polishing."
      description="Paint correction is a multi-stage machine polishing process that removes microscopic surface defects — swirl marks from automatic car washes, light scratches, water spots, and oxidation — by carefully leveling the clear coat surface to eliminate the light-scattering defects causing dull or hazy appearance. The result is paint with depth and clarity that looks genuinely better than a simple wash or wax ever could achieve."
      included={[
        "Paint inspection and depth measurement to assess correction potential",
        "Panel-by-panel machine polishing with appropriate compound",
        "Swirl mark and fine scratch removal",
        "Water spot and light oxidation treatment",
        "Progress checking under specialized lighting at each stage",
        "Final wipe-down with paint prep solution",
      ]}
      notIncluded={[
        { label: "Deep scratches or chips through to primer (require touch-up/respray)", href: "/contact" },
        { label: "Ceramic Coating (recommended after correction) →", href: "/services/detailing/ceramic-coating" },
        { label: "Carnauba Wax (apply after correction) →", href: "/services/detailing/carnauba-wax" },
      ]}
      notIncludedNote="Paint correction removes clear coat defects. For protection after correction:"
      duration="4–8 hours (depending on severity and panel count)"
      ctaType="appointment"
      faqTitle="Paint Correction — Common Questions"
      extraContent={
        <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5 mb-8">
          <h2 className="font-['Barlow',sans-serif] font-bold text-base text-white mb-2">Paint Correction Near North Port, FL</h2>
          <p className="text-sm text-[#8C95A6] leading-relaxed mb-3">
            <strong className="text-white">North Port Car Wash</strong> provides professional paint correction at <strong className="text-white">14164 S Tamiami Trail (US-41), North Port, FL 34287</strong>. To schedule a paint correction appointment, call <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>. We serve customers from North Port, Port Charlotte, Venice, Osprey, Englewood, Punta Gorda, and Sarasota County.
          </p>
          <p className="text-sm text-[#8C95A6] leading-relaxed mb-3">
            <strong className="text-white">Common paint correction requests we handle:</strong>
          </p>
          <ul className="space-y-1.5 text-sm text-[#8C95A6]">
            <li className="flex items-start gap-2"><span className="text-[#00C2FF] mt-0.5">→</span> Swirl marks from automatic car washes (especially on dark-colored vehicles)</li>
            <li className="flex items-start gap-2"><span className="text-[#00C2FF] mt-0.5">→</span> Light scratches from improper washing or parking lot contact</li>
            <li className="flex items-start gap-2"><span className="text-[#00C2FF] mt-0.5">→</span> Oxidation and fading from Florida UV exposure</li>
            <li className="flex items-start gap-2"><span className="text-[#00C2FF] mt-0.5">→</span> Water spots from hard water or sprinkler systems</li>
            <li className="flex items-start gap-2"><span className="text-[#00C2FF] mt-0.5">→</span> Pre-ceramic-coating paint preparation</li>
          </ul>
        </div>
      }
      faqs={[
        {
          question: "Is paint correction permanent?",
          answer:
            "The correction itself is permanent — the swirl marks and scratches that are removed will not return on their own. However, unprotected corrected paint will accumulate new defects over time. Protecting corrected paint with ceramic coating or regular wax dramatically slows re-defecting.",
        },
        {
          question: "How many stages of correction do I need?",
          answer:
            "Most vehicles need a one or two-stage correction. A single-stage polish addresses light swirling and haziness. A two-stage process uses a more aggressive cut compound first, then a finishing polish to refine the surface. Heavily defected vehicles may need a third stage. We assess this at the start of the job.",
        },
        {
          question: "Can paint correction fix car wash swirl marks?",
          answer:
            "Yes — swirl marks from automatic car washes are exactly the type of defect paint correction addresses. They are the most common request we see, especially on dark-colored vehicles that show swirling very visibly.",
        },
        {
          question: "What's the difference between paint correction and polish?",
          answer:
            "A polish or glaze fills and hides swirl marks temporarily with fillers — the effect fades within weeks. Paint correction physically removes the defects by leveling the clear coat. The result is a permanent improvement in paint condition, not a temporary fill.",
        },
      ]}
      relatedServices={[
        { label: "Clay Bar Treatment (do first)", href: "/services/detailing/clay-bar-treatment" },
        { label: "Ceramic Coating (protect after)", href: "/services/detailing/ceramic-coating" },
        { label: "Ceramic Coating Package", href: "/services/detailing/ceramic-coating-package" },
        { label: "Carnauba Wax (lighter option)", href: "/services/detailing/carnauba-wax" },
      ]}
    />
  );
}
