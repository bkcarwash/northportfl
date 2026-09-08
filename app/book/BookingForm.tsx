"use client";

import { useActionState } from "react";
import { submitBooking } from "./actions";
import { BUSINESS } from "@/lib/business-config";

const SERVICES = [
  "Touchless Car Wash",
  "Car Waxing",
  "Paint Sealant",
  "Express Detail (1–1.5 hrs)",
  "Premium Detail (2.5–3.5 hrs)",
  "Full Detail Package (4–6 hrs)",
  "Ceramic Coating Package (1–2 days)",
  "Paint Correction",
  "Interior Detail",
  "Upholstery Shampoo",
  "Headlight Restoration",
  "Odor Removal / Ozone Treatment",
  "Fleet / Commercial Detailing",
  "Other — describe in notes",
];

const TIME_SLOTS = Array.from({ length: 24 }, (_, i) => {
  const hour = 7 + Math.floor(i / 2);
  const min = i % 2 === 0 ? "00" : "30";
  const ampm = hour < 12 ? "AM" : "PM";
  const h12 = hour > 12 ? hour - 12 : hour;
  return { value: `${hour}:${min}`, label: `${h12}:${min} ${ampm}` };
});

const today = new Date().toISOString().split("T")[0];

export default function BookingForm() {
  const [state, action, isPending] = useActionState(submitBooking, null);

  if (state?.success) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-[#00C2FF]/10 border border-[#00C2FF]/30 flex items-center justify-center mb-5">
          <svg className="w-8 h-8 text-[#00C2FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-['Barlow',sans-serif] font-black text-3xl text-white mb-3">Booking Received!</h2>
        <p className="text-[#8C95A6] mb-2 max-w-sm">
          We&apos;ll call you to confirm your appointment. If you need to reach us sooner:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <a href={BUSINESS.phone.href} className="px-6 py-3 rounded-xl bg-[#00C2FF] text-black font-bold hover:bg-[#00AADE] transition-colors">
            Call Now — {BUSINESS.phone.display}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5">
      {state?.error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {state.error}
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
            Your Name <span className="text-[#00C2FF]">*</span>
          </label>
          <input
            name="name"
            required
            placeholder="John Smith"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
            Phone Number <span className="text-[#00C2FF]">*</span>
          </label>
          <input
            name="phone"
            type="tel"
            required
            placeholder="(941) 000-0000"
            className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
          Email Address <span className="text-[#8C95A6] font-normal text-xs">(optional)</span>
        </label>
        <input
          name="email"
          type="email"
          placeholder="john@example.com"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
          Service Requested <span className="text-[#00C2FF]">*</span>
        </label>
        <select
          name="service"
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-white focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
        >
          <option value="" disabled className="text-[#4A5568]">Select a service...</option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-[#0A0A0B]">{s}</option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
            Preferred Date <span className="text-[#00C2FF]">*</span>
          </label>
          <input
            name="preferred_date"
            type="date"
            required
            min={today}
            className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-white focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
            Preferred Time <span className="text-[#00C2FF]">*</span>
          </label>
          <select
            name="preferred_time"
            required
            defaultValue=""
            className="w-full px-4 py-3 rounded-xl bg-[#0A0A0B] border border-white/10 text-white focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
          >
            <option value="" disabled>Select time...</option>
            {TIME_SLOTS.map((t) => (
              <option key={t.value} value={t.label} className="bg-[#0A0A0B]">{t.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
          Vehicle <span className="text-[#8C95A6] font-normal text-xs">(year, make, model — optional)</span>
        </label>
        <input
          name="vehicle"
          placeholder="e.g. 2021 Toyota Camry"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#00C2FF]/50 transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#A8B5C8] mb-1.5">
          Additional Notes <span className="text-[#8C95A6] font-normal text-xs">(optional)</span>
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="Any specific requests or concerns..."
          className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#00C2FF]/50 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full py-4 rounded-xl bg-[#00C2FF] text-black font-bold text-lg hover:bg-[#00AADE] transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isPending ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : "Request Appointment"}
      </button>

      <p className="text-center text-xs text-[#8C95A6]">
        We&apos;ll contact you within a few hours to confirm. Or call us now:{" "}
        <a href={BUSINESS.phone.href} className="text-[#00C2FF] hover:underline">{BUSINESS.phone.display}</a>.
      </p>
    </form>
  );
}
