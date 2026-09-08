import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Express Detail in North Port, FL | Quick Car Refresh",
  description:
    "Express car detailing at North Port Car Wash. Interior wipe-down + exterior wash + tire shine — in and out in about 1–1.5 hours. Call to book in North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/services/detailing/express-detail` },
};

const FAQS = [
  {
    question: "How long does an express detail take?",
    answer: "Typically 1 to 1.5 hours depending on vehicle size and current condition. It is our fastest detailing option.",
  },
  {
    question: "Is the express detail enough for a quick clean before an event or road trip?",
    answer:
      "Yes — it is designed exactly for that. The express detail refreshes the interior surfaces, cleans the exterior, and adds a tire shine so the car looks well-maintained without needing a full day at the shop.",
  },
  {
    question: "What is the difference between express detail and a regular car wash?",
    answer:
      "A regular tunnel wash cleans the exterior only. The express detail also includes an interior wipe-down, surface cleaning of dashboard and console, and professional tire dressing — giving you both interior and exterior results in a single visit.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Yes — all detailing services including the express detail require an appointment. Call us at (941) 800-8198 to schedule. Same-day slots may be available depending on current bookings.",
  },
];

export default function ExpressDetailPage() {
  return (
    <>
      <ServiceSchema name="Express Detail" description="Quick car detailing service including interior wipe-down, exterior wash, and tire shine — completed in 1–1.5 hours at North Port Car Wash." url="/services/detailing/express-detail" />
      <BreadcrumbSchema items={[{ name: "Services", href: "/services" }, { name: "Detailing Packages", href: "/services" }, { name: "Express Detail", href: "/services/detailing/express-detail" }]} />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span>/</span>
          <span className="text-white">Express Detail</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs text-[#8C95A6] uppercase tracking-widest font-semibold mb-3 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              Detailing Package · Entry Tier · By Appointment
            </span>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-3">Express Detail</h1>
            <p className="text-base text-[#A8B5C8] font-medium mb-4">Fast, thorough refresh — in and out in about an hour.</p>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-8">
              The Express Detail is our entry-level detailing package — a quick but thorough refresh that gives you a clean interior and a presentable exterior in about 1–1.5 hours. It is perfect for busy schedules, pre-trip prep, or simply keeping up with maintenance without committing to a full detail session.
            </p>

            <div className="glass-card p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {[
                  "Interior surface wipe-down (dashboard, console, door panels)",
                  "Front cabin vacuum",
                  "Exterior tunnel wash",
                  "Exterior window wipe",
                  "Tire shine dressing application",
                  "Interior windows wiped",
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
              <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-3">Want More?</h2>
              <p className="text-sm text-[#8C95A6] mb-4">Step up to our Premium or Full Detail Package for a more thorough treatment:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Premium Detail", desc: "Full interior + hand wax + wheels", href: "/services/detailing/premium-detail" },
                  { name: "Full Detail Package", desc: "Complete inside, outside, engine bay", href: "/services/detailing/full-detail-package" },
                ].map((pkg) => (
                  <Link key={pkg.href} href={pkg.href} className="glass-card p-4 hover:border-[#00C2FF]/20 transition-colors">
                    <p className="font-semibold text-white text-sm">{pkg.name}</p>
                    <p className="text-xs text-[#8C95A6] mt-0.5">{pkg.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 glass-card">
              <svg className="w-5 h-5 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[#8C95A6]">Estimated time: <span className="text-white font-medium">1–1.5 hours</span></span>
            </div>
          </div>

          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">Book Express Detail</h3>
              <p className="text-sm text-[#8C95A6] mb-4">By appointment only. Call to schedule — same-day slots sometimes available.</p>
              <div className="flex flex-col gap-3">
                <a href={BUSINESS.phone.href} className="flex items-center justify-center py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
                  Call {BUSINESS.phone.display}
                </a>
                <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center py-3 rounded-xl bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors">
                  Get Directions
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

        <FaqSection faqs={FAQS} withSchema title="Express Detail — Common Questions" />
      </div>
    </>
  );
}
