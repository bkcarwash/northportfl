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
                    <a
                      href={BUSINESS.whatsapp.hrefDetailing}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] font-bold transition-colors text-white hover:bg-[#20BA5A] shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.479-2.001A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.787-1.856l-.486-.289-5.034 1.188 1.226-4.898-.32-.502A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.307-9.956c-.4-.2-2.365-1.167-2.731-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.689-.623-3.217-1.984-1.189-1.059-1.991-2.368-2.224-2.768-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.334 0 1.966 1.434 3.866 1.634 4.133.2.267 2.822 4.309 6.836 6.042.955.413 1.7.659 2.282.844.959.305 1.832.262 2.522.159.769-.115 2.365-.967 2.699-1.9.333-.934.333-1.734.233-1.9-.099-.167-.366-.267-.766-.467z"/>
                      </svg>
                      Book on WhatsApp
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
                    <a
                      href={BUSINESS.whatsapp.hrefWash}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] font-bold transition-colors text-white hover:bg-[#20BA5A] shadow-[0_0_15px_rgba(37,211,102,0.2)]"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.479-2.001A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.787-1.856l-.486-.289-5.034 1.188 1.226-4.898-.32-.502A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.307-9.956c-.4-.2-2.365-1.167-2.731-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.689-.623-3.217-1.984-1.189-1.059-1.991-2.368-2.224-2.768-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.334 0 1.966 1.434 3.866 1.634 4.133.2.267 2.822 4.309 6.836 6.042.955.413 1.7.659 2.282.844.959.305 1.832.262 2.522.159.769-.115 2.365-.967 2.699-1.9.333-.934.333-1.734.233-1.9-.099-.167-.366-.267-.766-.467z"/>
                      </svg>
                      Ask on WhatsApp
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
