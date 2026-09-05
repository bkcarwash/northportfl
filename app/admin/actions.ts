"use server";

import { cookies } from "next/headers";
import { supabaseAdmin } from "@/lib/supabase";
import type { Booking, BookingStatus } from "@/lib/supabase";

const SESSION_COOKIE = "npcw_admin";

async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  return store.get(SESSION_COOKIE)?.value === "1";
}

export async function loginAdmin(password: string): Promise<{ error?: string }> {
  if (password !== process.env.ADMIN_PASSWORD) {
    return { error: "Incorrect password." };
  }
  const store = await cookies();
  store.set(SESSION_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return {};
}

export async function logoutAdmin(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
}

export async function checkAuth(): Promise<boolean> {
  return isAuthed();
}

export async function getBookings(): Promise<{ data?: Booking[]; error?: string }> {
  if (!(await isAuthed())) return { error: "Unauthorized" };

  const { data, error } = await supabaseAdmin()
    .from("bookings")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return { error: error.message };
  return { data: data as Booking[] };
}

export async function deleteBooking(id: string): Promise<{ error?: string }> {
  if (!(await isAuthed())) return { error: "Unauthorized" };

  const { error } = await supabaseAdmin().from("bookings").delete().eq("id", id);
  if (error) return { error: error.message };
  return {};
}

export async function updateBookingStatus(
  id: string,
  status: BookingStatus
): Promise<{ error?: string }> {
  if (!(await isAuthed())) return { error: "Unauthorized" };

  const { error } = await supabaseAdmin()
    .from("bookings")
    .update({ status })
    .eq("id", id);
  if (error) return { error: error.message };
  return {};
}
