# AI Customer Support Agent

**🌐 [Live Demo](https://ai-customer-support-agent-mlvv.vercel.app/)**

A voice-enabled AI customer support agent for Aven, built with Next.js, Vapi for voice interactions, OpenAI for natural language processing, and Pinecone for intelligent search and context retrieval.

## Features

- **Voice AI Assistant**: Real-time voice conversations using Vapi's voice AI platform
- **Intelligent Search**: Context-aware responses using Pinecone vector database
- **Custom Knowledge Base**: Searches through Aven's documentation and policies
- **Dual Interface**: Both text chat and voice call capabilities
- **Modern UI**: Clean, responsive interface built with Shadcn UI and Tailwind CSS
- **Type Safety**: Full TypeScript support throughout the application

## Tech Stack

- [Next.js](https://nextjs.org) - React framework with API routes
- [Vapi](https://vapi.ai) - Voice AI platform for real-time conversations
- [OpenAI](https://openai.com) - GPT-4 for natural language processing
- [Pinecone](https://pinecone.io) - Vector database for semantic search
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up your environment variables in the `.env` file:

```env
# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Pinecone
PINECONE_API_KEY=your_pinecone_api_key
PINECONE_INDEX_NAME=your_index_name
PINECONE_ENVIRONMENT=your_environment

# Vapi
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_assistant_id
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## How It Works

### Voice AI Integration
- Uses Vapi's web SDK for real-time voice conversations
- Custom LLM endpoint at `/api/vapi/chat/completions` for context-aware responses
- Streaming support for real-time voice interactions

### Intelligent Search
- Pinecone vector database stores Aven's documentation and policies
- Semantic search finds relevant context for user queries
- Custom prompt engineering for Aven-specific responses

### Dual Interface
- **Text Chat**: Traditional chat interface for typed questions
- **Voice Call**: Voice widget for hands-free conversations

## Project Structure

- `src/app/api/vapi/chat/completions/route.ts` - Custom LLM endpoint for Vapi
- `src/app/api/chat/route.ts` - Text chat API endpoint
- `src/lib/chat.ts` - Core chat logic with Pinecone search
- `src/lib/search.ts` - Pinecone search functionality
- `src/components/ChatInterface.tsx` - Text chat interface
- `src/components/VapiWidget.tsx` - Voice call widget
- `src/components/ui/*` - Shadcn UI components

## Configuration

### Vapi Dashboard Setup
1. Create a Vapi account and assistant
2. Configure the assistant to use your custom LLM URL: `https://your-ngrok-url.ngrok-free.app/api/vapi/chat/completions`
3. Set the assistant ID in your environment variables

### Pinecone Setup
1. Create a Pinecone index for your knowledge base
2. Upload Aven's documentation and policies
3. Configure the index name and environment in your environment variables

## Deployment

The application can be deployed on Vercel or any other Next.js-compatible platform. Make sure to:

1. Set up all environment variables in your deployment platform
2. Configure your Vapi assistant to use the production URL
3. Ensure your Pinecone index is accessible from the deployment environment

## Learn More

- [Vapi Documentation](https://docs.vapi.ai) - Learn about Vapi's voice AI platform
- [OpenAI API Documentation](https://platform.openai.com/docs) - OpenAI API reference
- [Pinecone Documentation](https://docs.pinecone.io) - Vector database guide
- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
