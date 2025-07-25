/*
  # Setup storage for user uploads

  1. Create storage buckets
    - `avatars` for user profile pictures
    - `reports` for generated report PDFs
    - `charts` for birth chart images

  2. Security policies for storage
*/

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES 
('avatars', 'avatars', true),
('reports', 'reports', false),
('charts', 'charts', false);

-- Avatars bucket policies (public read, authenticated users can upload their own)
CREATE POLICY "Avatar images are publicly accessible"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'avatars');

CREATE POLICY "Users can upload their own avatar"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can update their own avatar"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can delete their own avatar"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'avatars' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Reports bucket policies (private, users can only access their own)
CREATE POLICY "Users can access their own reports"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'reports' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own reports"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'reports' AND auth.uid()::text = (storage.foldername(name))[1]);

-- Charts bucket policies (private, users can only access their own)
CREATE POLICY "Users can access their own charts"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'charts' AND auth.uid()::text = (storage.foldername(name))[1]);

CREATE POLICY "Users can upload their own charts"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'charts' AND auth.uid()::text = (storage.foldername(name))[1]);