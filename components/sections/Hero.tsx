"use client";

import OpenStatusBadge from "@/components/ui/OpenStatusBadge";
import StarRating from "@/components/ui/StarRating";
import { BUSINESS } from "@/lib/business-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,194,255,0.12)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_60%,rgba(0,194,255,0.04)_0%,transparent_70%)]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,194,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <StarRating rating={BUSINESS.rating.value} size="sm" />
          <span className="text-sm text-[#F0F2F5] font-medium">
            {BUSINESS.rating.value} stars · {BUSINESS.rating.count} Google reviews
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-['Barlow',sans-serif] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-none tracking-tight mb-4">
          North Port&apos;s
          <br />
          <span className="bg-gradient-to-r from-[#00C2FF] to-[#A8B5C8] bg-clip-text text-transparent">
            Cleanest Car
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-[#8C95A6] font-['Barlow',sans-serif] font-semibold mb-3">
          Touchless Wash · Free Vacuums · Professional Detailing
        </p>
        <p className="text-base text-[#8C95A6] max-w-xl mx-auto mb-8">
          Located at{" "}
          <a href={BUSINESS.mapUrl} target="_blank" rel="noopener noreferrer" className="text-[#00C2FF] hover:underline">
            {BUSINESS.address.street}, North Port, FL
          </a>
          . Serving Sarasota &amp; Charlotte County.
        </p>

        {/* Open status + CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <OpenStatusBadge />
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <span className="text-sm text-[#8C95A6]">Touchless bay open 24/7</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={BUSINESS.phone.href}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#00C2FF] text-black font-bold text-lg hover:bg-[#00AADE] transition-all duration-200 shadow-[0_0_30px_rgba(0,194,255,0.4)] hover:shadow-[0_0_45px_rgba(0,194,255,0.55)] min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now — {BUSINESS.phone.display}
          </a>
          <a
            href="/book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white/8 border border-white/20 text-white font-bold text-lg hover:bg-white/15 hover:border-white/30 transition-all duration-200 min-h-[44px]"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </a>
        </div>
        <div className="mt-3">
          <a
            href={BUSINESS.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#8C95A6] hover:text-[#00C2FF] transition-colors duration-200 underline underline-offset-2"
          >
            Get Directions →
          </a>
        </div>

        {/* Trust chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 text-sm text-[#8C95A6]">
          {["✓ Free Vacuums with Every Wash", "✓ Punch Card — 10th Wash Free", "✓ Unlimited Monthly Plans", "✓ Professional Detailing"].map((item) => (
            <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#8C95A6]">
        <span className="text-xs">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
