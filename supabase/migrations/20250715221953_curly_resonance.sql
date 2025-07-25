/*
  # Seed sample data

  1. Sample horoscopes for all zodiac signs
  2. Sample products for marketplace
  3. Admin user setup instructions
*/

-- Insert sample daily horoscopes for all zodiac signs
INSERT INTO horoscopes (zodiac_sign, type, date, content) VALUES
('aries', 'daily', CURRENT_DATE, '{"general": "Mars energizes your day with confidence and new opportunities.", "love": "Romantic connections flourish with honest communication.", "career": "Leadership opportunities arise in professional settings.", "health": "High energy levels support physical activities."}'),
('taurus', 'daily', CURRENT_DATE, '{"general": "Venus brings harmony and material comfort to your day.", "love": "Stable relationships deepen through shared values.", "career": "Financial matters receive favorable attention.", "health": "Focus on throat and neck health."}'),
('gemini', 'daily', CURRENT_DATE, '{"general": "Mercury enhances communication and mental agility.", "love": "Intellectual connections become more important.", "career": "Networking brings new opportunities.", "health": "Nervous system needs attention."}'),
('cancer', 'daily', CURRENT_DATE, '{"general": "Moon influences heighten intuitive abilities.", "love": "Emotional depth attracts meaningful connections.", "career": "Caring nature advances your career.", "health": "Digestive system and emotional health connected."}'),
('leo', 'daily', CURRENT_DATE, '{"general": "Sun empowers natural leadership and creativity.", "love": "Dramatic romantic gestures are favored.", "career": "Creative projects bring recognition.", "health": "Heart health and circulation need attention."}'),
('virgo', 'daily', CURRENT_DATE, '{"general": "Mercury sharpens analytical abilities.", "love": "Show love through practical acts of service.", "career": "Meticulous work is highly valued.", "health": "Digestive health and daily routines important."}'),
('libra', 'daily', CURRENT_DATE, '{"general": "Venus brings harmony and aesthetic appreciation.", "love": "Romance and partnership beautifully aspected.", "career": "Partnerships and collaborative projects favored.", "health": "Kidney and lower back health need attention."}'),
('scorpio', 'daily', CURRENT_DATE, '{"general": "Pluto intensifies transformative powers.", "love": "Deep, transformative connections possible.", "career": "Research and investigation favored.", "health": "Reproductive system needs attention."}'),
('sagittarius', 'daily', CURRENT_DATE, '{"general": "Jupiter expands horizons and understanding.", "love": "Foreign connections highlighted.", "career": "International business favored.", "health": "Hip and thigh health important."}'),
('capricorn', 'daily', CURRENT_DATE, '{"general": "Saturn rewards patience and hard work.", "love": "Serious, committed relationships favored.", "career": "Leadership positions come your way.", "health": "Bone and joint health need attention."}'),
('aquarius', 'daily', CURRENT_DATE, '{"general": "Uranus brings sudden insights and innovation.", "love": "Friendship-based relationships appeal.", "career": "Technology and innovation favored.", "health": "Circulatory system needs attention."}'),
('pisces', 'daily', CURRENT_DATE, '{"general": "Neptune enhances intuitive abilities.", "love": "Romantic idealism highlighted.", "career": "Creative arts and healing professions favored.", "health": "Feet and immune system need attention."}');

-- Insert sample products for marketplace
INSERT INTO products (name, description, price, category, is_active) VALUES
('Complete Birth Chart Analysis', 'Comprehensive 25-page birth chart analysis covering personality, career, relationships, and life path.', 49.99, 'reports', true),
('Love & Relationship Report', 'Detailed compatibility analysis and relationship guidance based on your birth chart.', 39.99, 'reports', true),
('Career Success Report', 'Professional guidance and career timing analysis through Vedic astrology.', 44.99, 'reports', true),
('Natural Ruby Ring', 'Certified natural ruby set in 14k gold ring. Perfect for Sun strengthening.', 299.99, 'gemstones', true),
('Blue Sapphire Pendant', 'Premium blue sapphire pendant for Saturn strengthening with silver chain.', 599.99, 'gemstones', true),
('Personal Astrology Consultation', '60-minute one-on-one consultation with certified Vedic astrologer.', 149.99, 'consultations', true),
('Vedic Astrology Masterclass', 'Complete digital course on Vedic astrology with 50+ video lessons.', 79.99, 'books', true);

-- Create admin user function (to be run manually after user signup)
CREATE OR REPLACE FUNCTION make_user_admin(user_email text)
RETURNS void AS $$
BEGIN
  UPDATE users 
  SET role = 'admin' 
  WHERE email = user_email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Instructions for creating admin user:
-- 1. Sign up normally through the app
-- 2. Run: SELECT make_user_admin('your-admin-email@example.com');