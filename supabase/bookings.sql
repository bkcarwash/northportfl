-- Run this in: https://supabase.com/dashboard/project/gbaavsjzjfwnunknbugw/sql/new

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  vehicle text,
  notes text,
  status text DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'completed', 'cancelled'))
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a booking (customer form)
CREATE POLICY "public_insert" ON bookings
  FOR INSERT TO anon WITH CHECK (true);

-- Service role key (used by server actions) bypasses RLS — no extra policy needed
