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
            <p className="text-sm text-[#8C95A6] mb-3">Prefer to book instantly?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BUSINESS.whatsapp.hrefBooking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white"
                style={{ backgroundColor: "#25D366" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.479-2.001A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.787-1.856l-.486-.289-5.034 1.188 1.226-4.898-.32-.502A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.307-9.956c-.4-.2-2.365-1.167-2.731-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.689-.623-3.217-1.984-1.189-1.059-1.991-2.368-2.224-2.768-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.334 0 1.966 1.434 3.866 1.634 4.133.2.267 2.822 4.309 6.836 6.042.955.413 1.7.659 2.282.844.959.305 1.832.262 2.522.159.769-.115 2.365-.967 2.699-1.9.333-.934.333-1.734.233-1.9-.099-.167-.366-.267-.766-.467z"/>
                </svg>
                Book on WhatsApp
              </a>
              <a
                href={BUSINESS.phone.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Call {BUSINESS.phone.display}
              </a>
            </div>
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
