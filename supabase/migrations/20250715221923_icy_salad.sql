/*
  # Create reports table

  1. New Tables
    - `reports`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `chart_id` (uuid, foreign key to birth_charts, optional)
      - `report_type` (text)
      - `title` (text)
      - `content` (text)
      - `is_premium` (boolean)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `reports` table
    - Add policies for users to manage their own reports
*/

CREATE TABLE IF NOT EXISTS reports (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  chart_id uuid REFERENCES birth_charts(id) ON DELETE SET NULL,
  report_type text NOT NULL CHECK (report_type IN ('birth-chart', 'kundli', 'love', 'career', 'health', 'marriage', 'compatibility')),
  title text NOT NULL,
  content text NOT NULL,
  is_premium boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Users can manage their own reports
CREATE POLICY "Users can manage own reports"
  ON reports
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

-- Create indexes
CREATE INDEX IF NOT EXISTS reports_user_id_idx ON reports(user_id);
CREATE INDEX IF NOT EXISTS reports_type_idx ON reports(report_type);
CREATE INDEX IF NOT EXISTS reports_created_at_idx ON reports(created_at DESC);