/*
  # Create analytics table for tracking user activity

  1. New Tables
    - `user_analytics`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `event_type` (text)
      - `event_data` (jsonb)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `user_analytics` table
    - Add policies for system to insert analytics
    - Add policy for admins to read analytics
*/

CREATE TABLE IF NOT EXISTS user_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE,
  event_type text NOT NULL CHECK (event_type IN ('login', 'signup', 'chart_generated', 'report_created', 'ai_chat', 'horoscope_viewed', 'subscription_changed')),
  event_data jsonb DEFAULT '{}',
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_analytics ENABLE ROW LEVEL SECURITY;

-- System can insert analytics (for service role)
CREATE POLICY "System can insert analytics"
  ON user_analytics
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Admins can read all analytics
CREATE POLICY "Admins can read analytics"
  ON user_analytics
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Users can read their own analytics
CREATE POLICY "Users can read own analytics"
  ON user_analytics
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

-- Create indexes
CREATE INDEX IF NOT EXISTS user_analytics_user_id_idx ON user_analytics(user_id);
CREATE INDEX IF NOT EXISTS user_analytics_event_type_idx ON user_analytics(event_type);
CREATE INDEX IF NOT EXISTS user_analytics_created_at_idx ON user_analytics(created_at DESC);