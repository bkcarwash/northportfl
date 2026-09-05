"use client";

import { useState, useEffect, useTransition, useCallback } from "react";
import { useRouter } from "next/navigation";
import { getBookings, deleteBooking, updateBookingStatus, logoutAdmin } from "./actions";
import type { Booking, BookingStatus } from "@/lib/supabase";
import { BUSINESS } from "@/lib/business-config";

const STATUS_CONFIG: Record<BookingStatus, { label: string; color: string; bg: string }> = {
  new:       { label: "New",       color: "text-[#00C2FF]",  bg: "bg-[#00C2FF]/10 border-[#00C2FF]/20" },
  confirmed: { label: "Confirmed", color: "text-amber-400",  bg: "bg-amber-400/10 border-amber-400/20" },
  completed: { label: "Completed", color: "text-green-400",  bg: "bg-green-400/10 border-green-400/20" },
  cancelled: { label: "Cancelled", color: "text-[#8C95A6]",  bg: "bg-white/5 border-white/10" },
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    weekday: "short", month: "short", day: "numeric", year: "numeric",
  });
}

function formatCreatedAt(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
  });
}

function copyBooking(b: Booking) {
  const text = [
    `📋 BOOKING — ${formatCreatedAt(b.created_at)}`,
    `Name: ${b.name}`,
    `Phone: ${b.phone}`,
    b.email ? `Email: ${b.email}` : null,
    `Service: ${b.service}`,
    `Date: ${formatDate(b.preferred_date)} at ${b.preferred_time}`,
    b.vehicle ? `Vehicle: ${b.vehicle}` : null,
    b.notes ? `Notes: ${b.notes}` : null,
    `Status: ${b.status.toUpperCase()}`,
  ].filter(Boolean).join("\n");
  navigator.clipboard.writeText(text);
}

type Filter = "all" | BookingStatus;

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const load = useCallback(async () => {
    const result = await getBookings();
    if (result.error) setError(result.error);
    else setBookings(result.data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  function handleCopy(b: Booking) {
    copyBooking(b);
    setCopied(b.id);
    setTimeout(() => setCopied(null), 2000);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this booking? This cannot be undone.")) return;
    setDeleting(id);
    const result = await deleteBooking(id);
    if (result.error) { alert(result.error); setDeleting(null); return; }
    setBookings((prev) => prev.filter((b) => b.id !== id));
    setDeleting(null);
  }

  async function handleStatus(id: string, status: BookingStatus) {
    const result = await updateBookingStatus(id, status);
    if (result.error) { alert(result.error); return; }
    setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status } : b));
  }

  function handleLogout() {
    startTransition(async () => {
      await logoutAdmin();
      router.refresh();
    });
  }

  const filtered = bookings.filter((b) => {
    const matchStatus = filter === "all" || b.status === filter;
    const matchSearch = !search ||
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search) ||
      b.service.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const counts = {
    all: bookings.length,
    new: bookings.filter((b) => b.status === "new").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    completed: bookings.filter((b) => b.status === "completed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0A0A0B]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#00C2FF] font-['Barlow',sans-serif] font-black text-lg leading-none">NPCW</span>
            <span className="text-white font-semibold hidden sm:block">Bookings Admin</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS.whatsapp.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#8C95A6] hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 32 32" fill="currentColor">
                <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.479-2.001A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.787-1.856l-.486-.289-5.034 1.188 1.226-4.898-.32-.502A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333zm7.307-9.956c-.4-.2-2.365-1.167-2.731-1.3-.366-.133-.633-.2-.9.2-.266.4-1.033 1.3-1.266 1.566-.233.267-.466.3-.866.1-.4-.2-1.689-.623-3.217-1.984-1.189-1.059-1.991-2.368-2.224-2.768-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.267.066-.5-.034-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.067.5-.366.4-1.4 1.367-1.4 3.334 0 1.966 1.434 3.866 1.634 4.133.2.267 2.822 4.309 6.836 6.042.955.413 1.7.659 2.282.844.959.305 1.832.262 2.522.159.769-.115 2.365-.967 2.699-1.9.333-.934.333-1.734.233-1.9-.099-.167-.366-.267-.766-.467z"/>
              </svg>
              WhatsApp
            </a>
            <button
              onClick={load}
              className="p-2 rounded-lg text-[#8C95A6] hover:text-white hover:bg-white/5 transition-colors"
              title="Refresh"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
            <button
              onClick={handleLogout}
              disabled={isPending}
              className="px-3 py-1.5 text-sm rounded-lg text-[#8C95A6] hover:text-white border border-white/10 hover:border-white/20 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {(["new", "confirmed", "completed", "cancelled"] as BookingStatus[]).map((s) => {
            const cfg = STATUS_CONFIG[s];
            return (
              <button
                key={s}
                onClick={() => setFilter(filter === s ? "all" : s)}
                className={`p-4 rounded-xl border text-left transition-all ${filter === s ? cfg.bg + " " + cfg.color : "bg-white/[0.02] border-white/5 text-[#8C95A6] hover:border-white/10"}`}
              >
                <div className="text-2xl font-['Barlow',sans-serif] font-black">{counts[s]}</div>
                <div className="text-xs capitalize">{s}</div>
              </button>
            );
          })}
        </div>

        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, or service…"
            className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-[#4A5568] focus:outline-none focus:border-[#00C2FF]/40 text-sm transition-colors"
          />
          <div className="flex items-center gap-2 text-sm text-[#8C95A6]">
            <span>{filtered.length} of {bookings.length}</span>
            {filter !== "all" && (
              <button onClick={() => setFilter("all")} className="text-[#00C2FF] hover:underline text-xs">
                Clear filter
              </button>
            )}
          </div>
        </div>

        {/* Bookings list */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-[#8C95A6]">
            <svg className="w-6 h-6 animate-spin mr-2" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Loading bookings…
          </div>
        ) : error ? (
          <div className="text-center py-20 text-red-400">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-[#8C95A6]">
            {bookings.length === 0 ? "No bookings yet. Share your booking link!" : "No bookings match your search."}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((b) => {
              const cfg = STATUS_CONFIG[b.status];
              return (
                <div key={b.id} className="glass-card p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Main info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-['Barlow',sans-serif] font-bold text-lg text-white">{b.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.color} font-medium`}>
                          {cfg.label}
                        </span>
                        <span className="text-xs text-[#8C95A6] ml-auto">{formatCreatedAt(b.created_at)}</span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <a href={`tel:${b.phone}`} className="text-white font-medium hover:text-[#00C2FF] transition-colors">{b.phone}</a>
                        </div>
                        {b.email && (
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-[#8C95A6] truncate">{b.email}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                          <span className="text-white font-medium">{b.service}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-white">{formatDate(b.preferred_date)} · {b.preferred_time}</span>
                        </div>
                        {b.vehicle && (
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-[#00C2FF] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                            </svg>
                            <span className="text-[#8C95A6]">{b.vehicle}</span>
                          </div>
                        )}
                      </div>

                      {b.notes && (
                        <div className="mt-2 px-3 py-2 rounded-lg bg-white/[0.02] border border-white/5 text-sm text-[#8C95A6]">
                          {b.notes}
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col gap-2 flex-wrap sm:flex-nowrap sm:w-36 flex-shrink-0">
                      {/* Status selector */}
                      <select
                        value={b.status}
                        onChange={(e) => handleStatus(b.id, e.target.value as BookingStatus)}
                        className="flex-1 sm:w-full px-2 py-2 rounded-lg bg-[#0A0A0B] border border-white/10 text-[#8C95A6] text-xs focus:outline-none focus:border-[#00C2FF]/40 transition-colors"
                      >
                        <option value="new">New</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>

                      {/* WhatsApp reply */}
                      <a
                        href={`https://wa.me/${b.phone.replace(/\D/g, "")}?text=Hi%20${encodeURIComponent(b.name)}%2C%20this%20is%20North%20Port%20Car%20Wash.%20Your%20${encodeURIComponent(b.service)}%20appointment%20on%20${encodeURIComponent(formatDate(b.preferred_date))}%20at%20${encodeURIComponent(b.preferred_time)}%20is%20confirmed!%20See%20you%20then.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-white text-xs font-medium transition-colors"
                        style={{ backgroundColor: "#25D366" }}
                        title="Reply on WhatsApp"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 32 32" fill="currentColor">
                          <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.773L0 32l8.479-2.001A15.93 15.93 0 0016 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.333a13.27 13.27 0 01-6.787-1.856l-.486-.289-5.034 1.188 1.226-4.898-.32-.502A13.27 13.27 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667c7.364 0 13.333 5.969 13.333 13.333 0 7.364-5.969 13.333-13.333 13.333z"/>
                        </svg>
                        WhatsApp
                      </a>

                      {/* Copy */}
                      <button
                        onClick={() => handleCopy(b)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-[#8C95A6] hover:text-white text-xs transition-colors"
                        title="Copy booking details"
                      >
                        {copied === b.id ? (
                          <><svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Copied</>
                        ) : (
                          <><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg> Copy</>
                        )}
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => handleDelete(b.id)}
                        disabled={deleting === b.id}
                        className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 text-xs transition-colors disabled:opacity-50"
                        title="Delete booking"
                      >
                        {deleting === b.id ? (
                          <svg className="w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        ) : (
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        )}
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
