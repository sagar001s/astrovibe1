# VS Code Setup Instructions for AstroVibe

## Step 1: Download the Code

### Option A: Download ZIP
1. Click the "Download" button in the current interface
2. Extract the ZIP file to your desired location
3. Rename the folder to `astrovibe` (optional)

### Option B: Clone Repository (if available)
```bash
git clone <repository-url>
cd astrovibe
```

## Step 2: Open in VS Code

1. Open VS Code
2. File → Open Folder
3. Select the `astrovibe` folder
4. VS Code will open the project

## Step 3: Install Dependencies

Open the integrated terminal in VS Code (Terminal → New Terminal) and run:

```bash
npm install
```

## Step 4: Setup Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` file in VS Code and update with your Supabase credentials:
   ```
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

## Step 5: Supabase Setup (Required for Authentication)

### Create Supabase Project:
1. Go to [supabase.com](https://supabase.com)
2. Sign up/login and create a new project
3. Choose a project name and password
4. Wait 2-3 minutes for setup to complete

### Get API Keys:
1. In Supabase dashboard → Settings → API
2. Copy "Project URL" and "anon public" key
3. Update your `.env` file with these values

### Setup Database:
1. In Supabase dashboard → SQL Editor
2. Create a new query and paste the content from `supabase/migrations/create_database_schema.sql`
3. Click "Run" to execute
4. Create another query with content from `supabase/migrations/create_users_trigger.sql`
5. Click "Run" to execute

## Step 6: Run the Application

In VS Code terminal, run:

```bash
npm run dev
```

The application will start at `http://localhost:5173`

## Step 7: Test Authentication

1. Go to `http://localhost:5173`
2. Click "Sign Up" and create a test account
3. Check if signup/login works properly
4. If there are issues, check the browser console for errors

## Troubleshooting

### Common Issues:

1. **"Module not found" errors**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Supabase connection errors**:
   - Verify your `.env` file has correct URL and key
   - Check if Supabase project is active
   - Ensure database migrations were run successfully

3. **Pages not loading**:
   - Check browser console for JavaScript errors
   - Ensure all dependencies are installed
   - Restart the dev server

4. **Authentication not working**:
   - Verify Supabase database schema is created
   - Check if user trigger function is installed
   - Ensure RLS policies are properly set

### VS Code Extensions (Recommended):

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **TypeScript Importer**
4. **Auto Rename Tag**
5. **Prettier - Code formatter**

## GitHub Copilot Integration

Since you have Copilot Pro, you can use these prompts for development:

### For Bug Fixes:
```
Fix the authentication error in this React component. The signup is failing with database error. Check the Supabase integration and user creation flow.
```

### For New Features:
```
Add a new astrology report component for [specific report type]. Include form validation, loading states, and result display with professional styling.
```

### For Styling:
```
Improve the visual design of this component with better spacing, colors, and responsive layout. Use Tailwind CSS classes and maintain the cosmic theme.
```

## Next Steps

Once the app is running successfully:

1. Test all navigation pages
2. Verify authentication flow
3. Check admin panel access (set user role to 'admin' in database)
4. Test report generation features
5. Customize content and styling as needed

If you encounter any issues during setup, provide the specific error message and I'll help you resolve it!