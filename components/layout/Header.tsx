"use client";

import Link from "next/link";
import { useState } from "react";
import { BUSINESS } from "@/lib/business-config";
import OpenStatusBadge from "@/components/ui/OpenStatusBadge";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Detailing", href: "/services/detailing/express-detail" },
  { label: "Memberships", href: "/services/wash/unlimited-wash-plans" },
  { label: "Locations", href: "/#service-area" },
  { label: "About", href: "/about" },
  { label: "Book", href: "/book", highlight: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <span className="text-[#00C2FF] text-2xl">⟳</span>
            <div className="leading-tight">
              <div className="font-['Barlow',sans-serif] font-800 text-white text-base leading-none tracking-tight">
                NORTH PORT
              </div>
              <div className="font-['Barlow',sans-serif] font-600 text-[#00C2FF] text-xs tracking-widest uppercase">
                CAR WASH
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.highlight
                    ? "text-sm font-semibold text-[#00C2FF] hover:text-white transition-colors duration-200"
                    : "text-sm text-[#8C95A6] hover:text-white transition-colors duration-200"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <OpenStatusBadge />
            <a
              href={BUSINESS.phone.href}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00C2FF] text-black text-sm font-bold hover:bg-[#00AADE] transition-all duration-200 min-h-[44px] shadow-[0_0_15px_rgba(0,194,255,0.25)]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="/book"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200 min-h-[44px]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#8C95A6] hover:text-white min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111114] border-t border-white/5 px-4 py-4">
          <div className="flex flex-col gap-1 mb-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={
                  item.highlight
                    ? "px-3 py-3 text-[#00C2FF] font-semibold hover:bg-[#00C2FF]/5 rounded-lg transition-colors"
                    : "px-3 py-3 text-[#8C95A6] hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            <a
              href={BUSINESS.phone.href}
              className="flex-[1.5] flex items-center justify-center gap-1.5 py-3 rounded-lg bg-[#00C2FF] text-black text-sm font-bold"
            >
              Call Now
            </a>
            <a
              href="/book"
              className="flex-[1.5] flex items-center justify-center gap-1.5 py-3 rounded-lg bg-white/5 border border-white/20 text-white text-sm font-bold"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
