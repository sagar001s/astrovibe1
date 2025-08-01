import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import CosmicSpiritualDashboard from "../components/CosmicSpiritualDashboard";

interface AuthContextType {
  user: User | null;
  userProfile: any;
  loading: boolean;
  isAnonymous: boolean;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (email: string, password: string, fullName: string) => Promise<any>;
  signInAnonymously: () => Promise<any>;
  signInWithGoogle: () => Promise<any>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<any>;
  upgradeAnonymousAccount: (email: string, password: string, fullName: string) => Promise<any>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setIsAnonymous(session?.user?.is_anonymous ?? false);
      if (session?.user && !session.user.is_anonymous) {
        await fetchUserProfile(session.user.id);
      } else if (session?.user?.is_anonymous) {
        setUserProfile({
          id: session.user.id,
          email: null,
          full_name: 'Guest User',
          role: 'guest',
          subscription_tier: 'guest',
          is_anonymous: true
        });
      }
      setLoading(false);
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setIsAnonymous(session?.user?.is_anonymous ?? false);
        if (session?.user && !session.user.is_anonymous) {
          await fetchUserProfile(session.user.id);
        } else if (session?.user?.is_anonymous) {
          setUserProfile({
            id: session.user.id,
            email: null,
            full_name: 'Guest User',
            role: 'guest',
            subscription_tier: 'guest',
            is_anonymous: true
          });
        } else {
          setUserProfile(null);
        }
        setLoading(false);
      }
    );

    // Auto-refresh user profile every 30 seconds if logged in and not anonymous
    let intervalId: NodeJS.Timeout | undefined;
    intervalId = setInterval(() => {
      if (user && !isAnonymous) {
        fetchUserProfile(user.id);
      }
    }, 30000);

    return () => {
      subscription.unsubscribe();
      if (intervalId) clearInterval(intervalId);
    };
  }, [user, isAnonymous]);

  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();
      
      if (error) throw error;
      setUserProfile(data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return { data, error };
  };

  const signUp = async (email: string, password: string, fullName: string) => {
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
  };

  const signInAnonymously = async () => {
    const { data, error } = await supabase.auth.signInAnonymously();
    
    // Note: Anonymous users don't get a database profile
    // Their profile is handled in the auth state change listener
    
    return { data, error };
  };

  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/dashboard`
      }
    });
    return { data, error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    setUser(null);
    setUserProfile(null);
    setIsAnonymous(false);
    // Remove all Supabase auth keys
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('supabase')) localStorage.removeItem(key);
    });
    Object.keys(sessionStorage).forEach((key) => {
      if (key.startsWith('supabase')) sessionStorage.removeItem(key);
    });
    window.location.href = '/';
    if (error) throw error;
  };

  const resetPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    return { data, error };
  };

  const upgradeAnonymousAccount = async (email: string, password: string, fullName: string) => {
    if (!user?.is_anonymous) {
      throw new Error('User is not anonymous');
    }

    // Link the anonymous account with email/password
    const { data, error } = await supabase.auth.updateUser({
      email,
      password,
      data: {
        full_name: fullName,
      }
    });

    if (data.user && !error) {
      // Create user profile in database
      await supabase.from('users').insert({
        id: data.user.id,
        email: data.user.email,
        full_name: fullName,
        role: 'user',
        subscription_tier: 'free',
        is_anonymous: false,
      });
    }

    return { data, error };
  };

  const value = {
    user,
    userProfile,
    loading,
    isAnonymous,
    signIn,
    signUp,
    signInAnonymously,
    signInWithGoogle,
    signOut,
    resetPassword,
    upgradeAnonymousAccount,
  };

  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      <CosmicSpiritualDashboard />
    </>
  );
};