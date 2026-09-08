import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import BookingForm from "./BookingForm";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Book an Appointment | North Port Car Wash",
  description:
    "Request a car wash or detailing appointment at North Port Car Wash. Fill out the form and we'll confirm within a few hours. Open daily 7 AM–7 PM at 14164 S Tamiami Trail, North Port, FL.",
  alternates: { canonical: `${BUSINESS.siteUrl}/book` },
  robots: { index: false },
};

export default function BookPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Book Appointment", href: "/book" }]}
      />

      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#00C2FF]" />
              <span className="text-xs text-[#00C2FF] uppercase tracking-widest font-semibold">North Port Car Wash</span>
              <div className="w-8 h-0.5 bg-[#00C2FF]" />
            </div>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-3">
              Book an Appointment
            </h1>
            <p className="text-[#8C95A6] text-lg">
              Fill out the form and we&apos;ll confirm your slot within a few hours.
            </p>
          </div>

          {/* Quick info bar */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            {[
              { icon: "📍", text: "14164 S Tamiami Trail, North Port" },
              { icon: "🕐", text: "Open Daily 7 AM – 7 PM" },
              { icon: "📞", text: BUSINESS.phone.display },
            ].map((item) => (
              <div key={item.text} className="text-center p-3 rounded-xl bg-white/[0.03] border border-white/8">
                <div className="text-lg mb-1">{item.icon}</div>
                <div className="text-xs text-[#8C95A6] leading-tight">{item.text}</div>
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="glass-card p-6 sm:p-8">
            <BookingForm />
          </div>

          {/* Alternative */}
          <div className="mt-6 text-center">
            <p className="text-sm text-[#8C95A6] mb-3">Prefer to talk? Call us directly:</p>
            <a
              href={BUSINESS.phone.href}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors shadow-[0_0_15px_rgba(0,194,255,0.25)]"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now — {BUSINESS.phone.display}
            </a>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-sm text-[#8C95A6] hover:text-white transition-colors">
              ← Back to North Port Car Wash
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
