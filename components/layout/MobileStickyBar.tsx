import { BUSINESS } from "@/lib/business-config";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#0A0A0B]/95 backdrop-blur-md border-t border-white/10 px-3 py-2 safe-area-pb">
      <div className="flex gap-2">
        <a
          href={BUSINESS.phone.href}
          className="flex-[1.5] flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl bg-[#00C2FF] text-black font-bold min-h-[52px] active:scale-95 transition-transform shadow-lg shadow-[#00C2FF]/20"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-bold">Call Now</span>
        </a>
        <a
          href="/book"
          className="flex-[1.5] flex flex-col items-center justify-center gap-0.5 py-2 rounded-xl bg-white/8 border border-white/20 text-white font-bold min-h-[52px] active:scale-95 transition-transform"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-[10px] font-bold">Book</span>
        </a>
      </div>
    </div>
  );
}
