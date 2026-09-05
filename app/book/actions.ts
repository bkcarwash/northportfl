"use server";

import { supabaseAnon } from "@/lib/supabase";

export type BookingState = {
  success?: boolean;
  error?: string;
} | null;

export async function submitBooking(
  _prev: BookingState,
  formData: FormData
): Promise<BookingState> {
  const name = (formData.get("name") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim();
  const email = (formData.get("email") as string)?.trim() || null;
  const service = formData.get("service") as string;
  const preferred_date = formData.get("preferred_date") as string;
  const preferred_time = formData.get("preferred_time") as string;
  const vehicle = (formData.get("vehicle") as string)?.trim() || null;
  const notes = (formData.get("notes") as string)?.trim() || null;

  if (!name || !phone || !service || !preferred_date || !preferred_time) {
    return { error: "Please fill in all required fields." };
  }

  const { error } = await supabaseAnon().from("bookings").insert({
    name,
    phone,
    email,
    service,
    preferred_date,
    preferred_time,
    vehicle,
    notes,
  });

  if (error) {
    return { error: "Could not save your booking. Please call us directly." };
  }

  return { success: true };
}
