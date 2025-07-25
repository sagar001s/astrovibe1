/*
  # Create birth charts table

  1. New Tables
    - `birth_charts`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `name` (text)
      - `date_of_birth` (date)
      - `time_of_birth` (time)
      - `place_of_birth` (text)
      - `latitude` (decimal)
      - `longitude` (decimal)
      - `chart_data` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `birth_charts` table
    - Add policies for users to manage their own charts
*/

CREATE TABLE IF NOT EXISTS birth_charts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  date_of_birth date NOT NULL,
  time_of_birth time NOT NULL,
  place_of_birth text NOT NULL,
  latitude decimal(10, 8),
  longitude decimal(11, 8),
  chart_data jsonb,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE birth_charts ENABLE ROW LEVEL SECURITY;

-- Users can manage their own charts
CREATE POLICY "Users can manage own charts"
  ON birth_charts
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

-- Create index for better performance
CREATE INDEX IF NOT EXISTS birth_charts_user_id_idx ON birth_charts(user_id);
CREATE INDEX IF NOT EXISTS birth_charts_created_at_idx ON birth_charts(created_at DESC);