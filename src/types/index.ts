export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'user' | 'admin';
  subscription_tier: 'free' | 'premium' | 'lifetime';
  created_at: string;
  updated_at: string;
}

export interface BirthChart {
  id: string;
  user_id: string;
  name: string;
  date_of_birth: string;
  time_of_birth: string;
  place_of_birth: string;
  latitude: number;
  longitude: number;
  chart_data: any;
  created_at: string;
}

export interface Report {
  id: string;
  user_id: string;
  chart_id: string;
  report_type: string;
  title: string;
  content: string;
  is_premium: boolean;
  created_at: string;
}

export interface Horoscope {
  id: string;
  zodiac_sign: string;
  type: 'daily' | 'weekly' | 'monthly' | 'yearly';
  date: string;
  content: string;
  created_at: string;
}

export interface ChatMessage {
  id: string;
  user_id: string;
  message: string;
  response: string;
  chart_context?: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  is_active: boolean;
  created_at: string;
}

export interface Subscription {
  id: string;
  user_id: string;
  plan_type: 'free' | 'premium' | 'lifetime';
  status: 'active' | 'cancelled' | 'expired';
  expires_at?: string;
  created_at: string;
}

export interface DoshaAnalysis {
  id: string;
  chart_id: string;
  dosha_type: 'mangal' | 'kaal_sarp' | 'pitra';
  severity: 'low' | 'medium' | 'high';
  analysis: string;
  remedies: string[];
  created_at: string;
}