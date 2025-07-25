/*
  # Create horoscopes table

  1. New Tables
    - `horoscopes`
      - `id` (uuid, primary key)
      - `zodiac_sign` (text)
      - `type` (text) - daily, weekly, monthly, yearly
      - `date` (date)
      - `content` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `horoscopes` table
    - Add policy for public read access
    - Add policy for admins to manage horoscopes
*/

CREATE TABLE IF NOT EXISTS horoscopes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  zodiac_sign text NOT NULL CHECK (zodiac_sign IN ('aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces')),
  type text NOT NULL CHECK (type IN ('daily', 'weekly', 'monthly', 'yearly')),
  date date NOT NULL,
  content jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE horoscopes ENABLE ROW LEVEL SECURITY;

-- Public read access for horoscopes
CREATE POLICY "Anyone can read horoscopes"
  ON horoscopes
  FOR SELECT
  TO authenticated, anon
  USING (true);

-- Admins can manage horoscopes
CREATE POLICY "Admins can manage horoscopes"
  ON horoscopes
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create indexes
CREATE INDEX IF NOT EXISTS horoscopes_sign_type_date_idx ON horoscopes(zodiac_sign, type, date DESC);
CREATE UNIQUE INDEX IF NOT EXISTS horoscopes_unique_sign_type_date ON horoscopes(zodiac_sign, type, date);