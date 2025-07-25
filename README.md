# AstroVibe - Professional Astrology Web Application

A comprehensive astrology platform built with React, TypeScript, and Supabase.

## Quick Start Guide

### 1. Download and Setup
```bash
# Clone or download the project
git clone <your-repo-url>
cd astrovibe

# Install dependencies
npm install

# Copy environment file
cp .env.example .env
```

### 2. Supabase Setup
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to be ready (2-3 minutes)
3. Go to Settings > API in your Supabase dashboard
4. Copy the Project URL and anon public key
5. Update your `.env` file with these values:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

### 3. Database Setup
1. In Supabase dashboard, go to SQL Editor
2. Run the migration files in this order:
   - `supabase/migrations/create_database_schema.sql`
   - `supabase/migrations/create_users_trigger.sql`

### 4. Run the Application
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Features

- **Authentication System**
  - Email/Password authentication
  - Google SSO integration
  - Anonymous guest access
  - Account upgrade functionality

- **Core Features**
  - Birth Chart Generation
  - Kundli Reports
  - Daily/Weekly/Monthly/Yearly Horoscopes
  - AI Astrologer Chat
  - Dosha Analysis (Mangal, Kaal Sarp, Pitra)
  - Compatibility Checker
  - Love, Career, Health Reports

- **Premium Features**
  - Unlimited AI chat
  - Advanced reports
  - Gemstone recommendations
  - Spiritual guidance
  - Marketplace access

- **User Tiers**
  - **Guest**: Birth Chart & Kundli only
  - **Free**: Basic features with limitations
  - **Premium**: Full access to all features
  - **Lifetime**: Premium + exclusive content

## Setup Instructions

### 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to SQL Editor in your Supabase dashboard
3. Run each migration file in order:
   - `create_users_table.sql`
   - `create_birth_charts_table.sql`
   - `create_reports_table.sql`
   - `create_horoscopes_table.sql`
   - `create_chat_messages_table.sql`
   - `create_products_table.sql`
   - `create_subscriptions_table.sql`
   - `create_dosha_analysis_table.sql`
   - `setup_storage.sql`
   - `create_analytics_table.sql`
   - `seed_sample_data.sql`

### 2. Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your Supabase project URL and anon key:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

### 3. Authentication Setup

1. In Supabase Dashboard → Authentication → Settings
2. Enable Email authentication
3. Disable email confirmation (or configure SMTP)
4. For Google OAuth:
   - Go to Authentication → Providers
   - Enable Google provider
   - Add your Google OAuth credentials

### 4. Create Admin User

1. Sign up through the app normally
2. In Supabase SQL Editor, run:
   ```sql
   SELECT make_user_admin('your-admin-email@example.com');
   ```

### 5. Run the Application

```bash
npm install
npm run dev
```

## Database Schema

### Core Tables
- `users` - User profiles and subscription info
- `birth_charts` - Birth chart data and calculations
- `reports` - Generated astrology reports
- `horoscopes` - Daily/weekly/monthly/yearly horoscopes
- `chat_messages` - AI chat conversation history

### Additional Tables
- `products` - Marketplace items
- `subscriptions` - User subscription tracking
- `dosha_analysis` - Dosha analysis results
- `user_analytics` - User activity tracking

### Storage Buckets
- `avatars` - User profile pictures (public)
- `reports` - Generated report PDFs (private)
- `charts` - Birth chart images (private)

## Security

- Row Level Security (RLS) enabled on all tables
- Users can only access their own data
- Admin role for management functions
- Anonymous users have restricted access
- Secure file storage with proper access controls

## Deployment

The application is configured for deployment on Netlify with automatic builds from your repository.

## Support

For technical support or questions about the astrology calculations, please refer to the documentation or contact the development team.