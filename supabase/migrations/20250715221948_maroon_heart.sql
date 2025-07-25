/*
  # Create dosha analysis table

  1. New Tables
    - `dosha_analysis`
      - `id` (uuid, primary key)
      - `chart_id` (uuid, foreign key to birth_charts)
      - `dosha_type` (text)
      - `severity` (text)
      - `analysis` (text)
      - `remedies` (text array)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `dosha_analysis` table
    - Add policies for users to access their own dosha analysis
*/

CREATE TABLE IF NOT EXISTS dosha_analysis (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  chart_id uuid REFERENCES birth_charts(id) ON DELETE CASCADE NOT NULL,
  dosha_type text NOT NULL CHECK (dosha_type IN ('mangal', 'kaal_sarp', 'pitra')),
  severity text NOT NULL CHECK (severity IN ('low', 'medium', 'high')),
  analysis text NOT NULL,
  remedies text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE dosha_analysis ENABLE ROW LEVEL SECURITY;

-- Users can access dosha analysis for their own charts
CREATE POLICY "Users can access own dosha analysis"
  ON dosha_analysis
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM birth_charts 
      WHERE id = chart_id AND user_id = auth.uid()
    )
  );

-- Create indexes
CREATE INDEX IF NOT EXISTS dosha_analysis_chart_id_idx ON dosha_analysis(chart_id);
CREATE INDEX IF NOT EXISTS dosha_analysis_type_idx ON dosha_analysis(dosha_type);