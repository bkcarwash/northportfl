import Link from "next/link";
import { BUSINESS, HOURS_DISPLAY, SERVICE_AREA_CITIES, WASH_SERVICES } from "@/lib/business-config";

const DETAILING_LINKS = [
  { label: "Express Detail", href: "/services/detailing/express-detail" },
  { label: "Premium Detail", href: "/services/detailing/premium-detail" },
  { label: "Full Detail Package", href: "/services/detailing/full-detail-package" },
  { label: "Ceramic Coating", href: "/services/detailing/ceramic-coating" },
  { label: "Paint Correction", href: "/services/detailing/paint-correction" },
  { label: "Fleet Detailing", href: "/services/detailing/fleet-commercial-detailing" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111114] border-t border-white/5 pb-24 md:pb-0">
      {/* NAP Block — shared component for schema consistency */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand + NAP */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-[#00C2FF] text-xl">⟳</span>
              <div className="leading-tight">
                <div className="font-['Barlow',sans-serif] font-bold text-white text-base tracking-tight">NORTH PORT</div>
                <div className="font-['Barlow',sans-serif] text-[#00C2FF] text-xs tracking-widest uppercase">CAR WASH</div>
              </div>
            </Link>
            <address className="not-italic text-sm text-[#8C95A6] leading-relaxed">
              <p className="font-medium text-[#F0F2F5] mb-1">{BUSINESS.name}</p>
              <p>{BUSINESS.address.street}</p>
              <p>{BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}</p>
              <p className="mt-2">
                <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">
                  {BUSINESS.phone.display}
                </a>
              </p>
            </address>
            <div className="mt-4">
              <p className="text-xs text-[#8C95A6] mb-2 uppercase tracking-wider font-medium">Hours</p>
              <div className="text-xs text-[#8C95A6] space-y-0.5">
                <p>Mon–Sun: {HOURS_DISPLAY.monday}</p>
                <p className="text-[#00C2FF]">Touchless bay: Open 24/7</p>
              </div>
            </div>
          </div>

          {/* Wash Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Wash Services</h3>
            <ul className="space-y-2">
              {WASH_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/wash/${s.slug}`}
                    className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Detailing */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Detailing</h3>
            <ul className="space-y-2">
              {DETAILING_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-[#00C2FF] hover:underline">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Service Area</h3>
            <ul className="space-y-2">
              {SERVICE_AREA_CITIES.filter((c) => !c.primary).slice(0, 6).map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors"
                  >
                    Car Wash in {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              <Link href="/faq" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors block">FAQ</Link>
              <Link href="/reviews" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors block">Reviews</Link>
              <Link href="/gallery" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors block">Gallery</Link>
              <Link href="/about" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors block">About Us</Link>
              <Link href="/contact" className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors block">Contact</Link>
            </div>
          </div>
        </div>

        {/* Trusted Partner */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-[10px] text-[#8C95A6] uppercase tracking-widest font-medium mb-2">Trusted Partner</p>
          <p className="text-xs text-[#8C95A6] leading-relaxed">
            <a
              href="https://www.blueroseautodetailing.com/"
              target="_blank"
              className="text-[#00C2FF] font-semibold hover:underline"
            >
              Blue Rose Auto Detailing Services
            </a>
            {" "}— Professional auto detailing, paint correction, ceramic coating, PPF &amp; window tinting in{" "}
            <strong className="text-[#F0F2F5]">Springfield &amp; Eugene, OR</strong>.
            {" "}Located at 3436 Olympic St Suite 100, Springfield, OR 97478 · <a href="tel:+15413379893" className="text-[#00C2FF] hover:underline">+1 541-337-9893</a>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#8C95A6]">
            © {currentYear} {BUSINESS.name}. All rights reserved. · {BUSINESS.address.city}, {BUSINESS.address.state}
          </p>
          <div className="flex gap-4 text-xs text-[#8C95A6]">
            <a href={BUSINESS.social.googleBusinessProfile} target="_blank" rel="noopener noreferrer" className="hover:text-[#00C2FF] transition-colors">
              Google Business
            </a>
            <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#00C2FF] transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
