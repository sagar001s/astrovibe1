import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL or Key is missing. Please check your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });
    return { data, error };
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  },

  signInAnonymously: async () => {
    const { data, error } = await supabase.auth.signInAnonymously();
    return { data, error };
  },

  signInWithGoogle: async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
    return { data, error };
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    return { data, error };
  },

  upgradeAnonymousAccount: async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.updateUser({
      email,
      password,
      data: {
        full_name: fullName,
      }
    });
    return { data, error };
  },
};

// Database helpers
export const db = {
  users: {
    create: async (userData: any) => {
      const { data, error } = await supabase
        .from('users')
        .insert(userData)
        .single();
      return { data, error };
    },
    
    getById: async (id: string) => {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();
      return { data, error };
    },
    
    update: async (id: string, updates: any) => {
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', id);
      return { data, error };
    },
  },

  charts: {
    create: async (chartData: any) => {
      const { data, error } = await supabase
        .from('birth_charts')
        .insert(chartData)
        .single();
      return { data, error };
    },
    
    getByUser: async (userId: string) => {
      const { data, error } = await supabase
        .from('birth_charts')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      return { data, error };
    },
  },

  reports: {
    create: async (reportData: any) => {
      const { data, error } = await supabase
        .from('reports')
        .insert(reportData)
        .single();
      return { data, error };
    },
    
    getByUser: async (userId: string) => {
      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      return { data, error };
    },
  },

  horoscopes: {
    getBySign: async (sign: string, type: string) => {
      const { data, error } = await supabase
        .from('horoscopes')
        .select('*')
        .eq('zodiac_sign', sign)
        .eq('type', type)
        .order('date', { ascending: false })
        .limit(1);
      return { data, error };
    },
    
    create: async (horoscopeData: any) => {
      const { data, error } = await supabase
        .from('horoscopes')
        .insert(horoscopeData)
        .single();
      return { data, error };
    },
  },

  chat: {
    create: async (messageData: any) => {
      const { data, error } = await supabase
        .from('chat_messages')
        .insert(messageData)
        .single();
      return { data, error };
    },
    
    getByUser: async (userId: string) => {
      const { data, error } = await supabase
        .from('chat_messages')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      return { data, error };
    },
  },

  products: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true);
      return { data, error };
    },
    
    getByCategory: async (category: string) => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('category', category)
        .eq('is_active', true);
      return { data, error };
    },
  },
};