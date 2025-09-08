# Authentication Setup Guide

## Overview
DocuAgents uses NextAuth.js for authentication with social media providers (Google and GitHub).

## Required Environment Variables

Add these to your `.env` file:

```bash
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-change-this-in-production"

# OAuth Providers (Optional - for social login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
LINKEDIN_CLIENT_ID="your-linkedin-client-id"
LINKEDIN_CLIENT_SECRET="your-linkedin-client-secret"
FACEBOOK_CLIENT_ID="your-facebook-client-id"
FACEBOOK_CLIENT_SECRET="your-facebook-client-secret"
```

## Setting up OAuth Providers

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client IDs"
5. Set authorized redirect URIs to: `http://localhost:3000/api/auth/callback/google`
6. Copy the Client ID and Client Secret to your `.env` file

### LinkedIn OAuth Setup
1. Go to [LinkedIn Developer Portal](https://www.linkedin.com/developers/)
2. Create a new app
3. Add redirect URL: `http://localhost:3000/api/auth/callback/linkedin`
4. Copy the Client ID and Client Secret to your `.env` file

### Facebook OAuth Setup
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add Facebook Login product
4. Set Valid OAuth Redirect URIs to: `http://localhost:3000/api/auth/callback/facebook`
5. Copy the App ID and App Secret to your `.env` file

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
4. Try signing in with Google, LinkedIn, or Facebook (if configured)

## Features

- ✅ Social media authentication (Google, LinkedIn, Facebook)
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
