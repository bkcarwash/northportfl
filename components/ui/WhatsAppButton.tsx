"use client";

import { BUSINESS } from "@/lib/business-config";

export default function CallFloatButton() {
  return (
    <a
      href={BUSINESS.phone.href}
      aria-label="Call Now"
      className="hidden md:flex fixed z-50 bottom-8 right-6 items-center justify-center w-14 h-14 rounded-full shadow-lg shadow-[#00C2FF]/30 bg-[#00C2FF] hover:bg-[#00AADE] active:scale-95 transition-all duration-200"
    >
      <span className="absolute inset-0 rounded-full bg-[#00C2FF] animate-ping opacity-20" />
      <svg className="w-6 h-6 fill-black relative z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z"/>
      </svg>
    </a>
  );
}
