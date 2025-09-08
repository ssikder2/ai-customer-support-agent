# Authentication Setup Guide

## Overview
DocuAgents uses NextAuth.js for authentication with Google OAuth.

## Required Environment Variables

Add these to your `.env` file:

```bash
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"

# OAuth Provider (Optional - for Google login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Setting up Google OAuth

### For Local Development:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set authorized redirect URIs to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env` file

### For Vercel Production:
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your existing project
3. Go to "Credentials" → "OAuth 2.0 Client IDs"
4. Edit your existing OAuth client
5. Add authorized redirect URI: `https://your-app-name.vercel.app/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your Vercel environment variables

## Database Setup

The authentication system uses SQLite for development. Run these commands:

```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma db push
```

## Testing Authentication

1. Start the development server: `npm run dev`
2. Visit `http://localhost:3000/landing`
3. Click "Get Started" or "Sign In"
4. Try signing in with Google (if configured)

## Features

- ✅ Google OAuth authentication
- ✅ Protected dashboard routes
- ✅ User session management
- ✅ Database integration with Prisma
- ✅ Responsive authentication pages
- ✅ Automatic redirects after login

## Next Steps

After authentication is working:
1. Create company setup wizard
2. Add user profile management
3. Implement company-specific configurations
4. Add user roles and permissions
