import { createClient } from "@supabase/supabase-js";

export type BookingStatus = "new" | "confirmed" | "completed" | "cancelled";

export type Booking = {
  id: string;
  created_at: string;
  name: string;
  phone: string;
  email: string | null;
  service: string;
  preferred_date: string;
  preferred_time: string;
  vehicle: string | null;
  notes: string | null;
  status: BookingStatus;
};

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const service = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabaseAnon = () => createClient(url, anon);
export const supabaseAdmin = () => createClient(url, service);
