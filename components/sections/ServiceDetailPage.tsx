import Link from "next/link";
import { BUSINESS } from "@/lib/business-config";
import ServiceSchema from "@/components/schema/ServiceSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";
import FaqSection from "@/components/sections/FaqSection";

export interface RelatedLink {
  label: string;
  href: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceDetailPageProps {
  slug: string;
  category: "wash" | "detailing" | "package";
  badge: string;
  name: string;
  tagline: string;
  description: string;
  included: string[];
  notIncluded?: RelatedLink[];
  notIncludedNote?: string;
  duration: string;
  ctaType: "drive-in" | "appointment";
  faqs: FaqItem[];
  faqTitle?: string;
  relatedServices?: RelatedLink[];
  extraContent?: React.ReactNode;
}

export default function ServiceDetailPage({
  slug,
  category,
  badge,
  name,
  tagline,
  description,
  included,
  notIncluded,
  notIncludedNote,
  duration,
  ctaType,
  faqs,
  faqTitle,
  relatedServices,
  extraContent,
}: ServiceDetailPageProps) {
  const urlPath = category === "wash" ? `/services/wash/${slug}` : `/services/detailing/${slug}`;
  const isAppointment = ctaType === "appointment";

  return (
    <>
      <ServiceSchema name={name} description={description} url={urlPath} />
      <BreadcrumbSchema
        items={[
          { name: "Services", href: "/services" },
          { name, href: urlPath },
        ]}
      />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-sm text-[#8C95A6] mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="text-[#2A2A32]">/</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="text-[#2A2A32]">/</span>
          <span className="text-white">{name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block text-xs uppercase tracking-widest font-semibold mb-3 px-3 py-1 rounded-full border
              bg-[#00C2FF]/10 text-[#00C2FF] border-[#00C2FF]/20">
              {badge}
            </span>
            <h1 className="font-['Barlow',sans-serif] font-black text-4xl sm:text-5xl text-white mb-3">{name}</h1>
            <p className="text-base text-[#A8B5C8] font-medium mb-4">{tagline}</p>
            <p className="text-lg text-[#8C95A6] leading-relaxed mb-8">{description}</p>

            <div className="glass-card p-6 mb-6">
              <h2 className="font-['Barlow',sans-serif] font-bold text-xl text-white mb-4">What&apos;s Included</h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#8C95A6]">
                    <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {notIncluded && notIncluded.length > 0 && (
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-6 mb-6">
                <h2 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-3">What&apos;s Not Included</h2>
                {notIncludedNote && <p className="text-sm text-[#8C95A6] mb-4">{notIncludedNote}</p>}
                <ul className="space-y-2">
                  {notIncluded.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[#00C2FF] hover:underline text-sm">{l.label} →</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex items-center gap-3 p-4 glass-card mb-8">
              <svg className="w-5 h-5 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-[#8C95A6]">
                Estimated time: <span className="text-white font-medium">{duration}</span>
              </span>
            </div>

            {extraContent}
          </div>

          {/* CTA Sidebar */}
          <div>
            <div className="glass-card p-6 sticky top-24">
              <h3 className="font-['Barlow',sans-serif] font-bold text-lg text-white mb-1">
                {isAppointment ? "Book This Service" : "Visit Us"}
              </h3>
              <p className="text-sm text-[#8C95A6] mb-4">
                {isAppointment
                  ? "Detailing is by appointment. Call us to schedule."
                  : "No appointment needed — drive in any time."}
              </p>
              <div className="flex flex-col gap-3">
                {isAppointment ? (
                  <>
                    <a href={BUSINESS.phone.href} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors shadow-[0_0_15px_rgba(0,194,255,0.25)]">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now — {BUSINESS.phone.display}
                    </a>
                    <a href="/book" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Appointment
                    </a>
                    <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors underline underline-offset-2">
                      Get Directions →
                    </a>
                  </>
                ) : (
                  <>
                    <a href={BUSINESS.phone.href} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors shadow-[0_0_15px_rgba(0,194,255,0.25)]">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now — {BUSINESS.phone.display}
                    </a>
                    <a href="/book" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/20 text-white font-bold hover:bg-white/10 transition-colors">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Appointment
                    </a>
                    <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2 text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors underline underline-offset-2">
                      Get Directions →
                    </a>
                  </>
                )}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-[#8C95A6] space-y-1">
                <p className="font-medium text-white">{BUSINESS.name}</p>
                <p>{BUSINESS.address.street}</p>
                <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
                <p className="mt-2">Open Daily 7 AM – 7 PM</p>
              </div>
            </div>

            {relatedServices && relatedServices.length > 0 && (
              <div className="mt-4 glass-card p-5">
                <p className="text-xs text-[#8C95A6] uppercase tracking-wider font-medium mb-3">Related Services</p>
                <ul className="space-y-2">
                  {relatedServices.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <FaqSection faqs={faqs} withSchema title={faqTitle ?? `Common Questions About ${name}`} />
      </div>
    </>
  );
}
