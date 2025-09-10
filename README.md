# AI Customer Support Agent

**🌐 [Live Demo](https://ai-customer-support-agent-mlvv.vercel.app/)**

A voice-enabled AI customer support agent for Aven, built with Next.js, Vapi for voice interactions, OpenAI for natural language processing, and Pinecone for intelligent search and context retrieval.

## 🚀 Features

- **Voice AI Assistant**: Real-time voice conversations using Vapi's voice AI platform
- **Intelligent Search**: Context-aware responses using Pinecone vector database
- **Custom Knowledge Base**: Searches through Aven's documentation and policies
- **Dual Interface**: Both text chat and voice call capabilities
- **Modern UI**: Clean, responsive interface built with Shadcn UI and Tailwind CSS
- **Type Safety**: Full TypeScript support throughout the application
- **Real-time Streaming**: Live voice responses with streaming support
- **Semantic Search**: Advanced vector-based knowledge retrieval

## 🛠️ Tech Stack

### **Core Framework:**
- [Next.js 15](https://nextjs.org) - React framework with API routes and App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety throughout the application
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - Modern component library

### **AI & Voice Technologies:**
- [OpenAI GPT-4](https://openai.com) - Natural language processing and embeddings
- [Vapi](https://vapi.ai) - Voice AI platform for real-time conversations
- [Pinecone](https://pinecone.io) - Vector database for semantic search
- [Exa AI](https://exa.ai) - Web scraping and content extraction

### **External APIs & Services:**
- **OpenAI Embeddings API** - Text-to-vector conversion
- **Pinecone Vector Database** - Semantic search storage
- **Vapi Voice Platform** - Real-time voice interactions
- **Exa Content Extraction** - Web scraping capabilities

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

# Exa AI (for web scraping)
EXA_API_KEY=your_exa_api_key

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## 🏗️ Architecture Overview

### **Frontend Layer (Next.js App)**
- **Main Page** (`src/app/page.tsx`): Landing page with Aven branding and chat interface
- **Chat Interface** (`src/components/ChatInterface.tsx`): Text-based chat component with message history
- **Vapi Widget** (`src/components/VapiWidget.tsx`): Voice call interface using Vapi's web SDK

### **API Layer (Next.js API Routes)**
- **Text Chat API** (`/api/chat`): Handles text-based conversations
- **Voice Chat API** (`/api/vapi/chat/completions`): Custom LLM endpoint for Vapi voice interactions

### **Core Logic Layer**
- **Chat Engine** (`src/lib/chat.ts`): Orchestrates conversations with context-aware responses
- **Search Engine** (`src/lib/search.ts`): Semantic search using Pinecone vector database
- **Embeddings** (`src/lib/embeddings.ts`): Converts text to vector embeddings using OpenAI

### **Data Layer**
- **Pinecone Integration** (`src/lib/pinecone.ts`): Vector database for storing and retrieving knowledge
- **Data Processing** (`src/lib/processData.ts`): Processes scraped content for storage
- **Web Scraping** (`src/lib/scrapeData.ts`): Scrapes Aven's website and HELOC resources

## 🔄 How It Works

### **Text Chat Flow:**
1. **User Input** → User types question in chat interface
2. **API Call** → Frontend sends POST to `/api/chat`
3. **Search Context** → System searches Pinecone for relevant Aven documentation
4. **AI Response** → OpenAI GPT-4 generates context-aware answer
5. **Display** → Response shown in chat interface with markdown formatting

### **Voice Chat Flow:**
1. **Voice Call** → User clicks "Talk to Assistant" button
2. **Vapi Integration** → Vapi SDK initiates voice conversation
3. **Custom LLM** → Vapi calls your custom endpoint `/api/vapi/chat/completions`
4. **Streaming Response** → Real-time voice responses with streaming support
5. **Voice Output** → Assistant speaks back to user

### **Knowledge Base Setup:**
1. **Web Scraping** → Exa AI scrapes Aven's website and HELOC resources
2. **Content Processing** → Raw content is cleaned and structured
3. **Vector Embeddings** → OpenAI converts text to numerical vectors
4. **Pinecone Storage** → Vectors stored in Pinecone for semantic search

## 📁 Project Structure

### **Frontend Components:**
- `src/components/ChatInterface.tsx` - Main chat UI with message history
- `src/components/VapiWidget.tsx` - Voice call button and status display
- `src/components/ui/*` - Reusable Shadcn UI components

### **API Routes:**
- `src/app/api/chat/route.ts` - Text chat endpoint
- `src/app/api/vapi/chat/completions/route.ts` - Voice chat endpoint

### **Core Logic:**
- `src/lib/chat.ts` - Main chat orchestration
- `src/lib/search.ts` - Pinecone search functionality
- `src/lib/embeddings.ts` - OpenAI embeddings
- `src/lib/pinecone.ts` - Database connection

### **Data Management:**
- `src/lib/scrapeData.ts` - Web scraping orchestration
- `src/lib/processData.ts` - Content processing
- `src/lib/urls.ts` - URLs to scrape (Aven + HELOC resources)
- `src/lib/types.ts` - TypeScript type definitions

### **Configuration:**
- `src/config/env.ts` - Environment variable validation
- `src/utils/logger.ts` - Logging utilities

## ⚙️ Configuration

### **Vapi Dashboard Setup**
1. Create a Vapi account and assistant
2. Configure the assistant to use your custom LLM URL: `https://your-ngrok-url.ngrok-free.app/api/vapi/chat/completions`
3. Set the assistant ID in your environment variables

### **Pinecone Setup**
1. Create a Pinecone index for your knowledge base
2. Upload Aven's documentation and policies
3. Configure the index name and environment in your environment variables

### **Knowledge Base Population**
The system automatically scrapes and processes content from:
- **Aven's Website**: Main pages, FAQ, support, education content
- **HELOC Resources**: External documentation about Home Equity Lines of Credit
- **Financial Education**: Comprehensive guides and explanations

Run the scraping script to populate your knowledge base:
```bash
npm run scrape
```

## 🚀 Deployment

The application can be deployed on Vercel or any other Next.js-compatible platform. Make sure to:

1. Set up all environment variables in your deployment platform
2. Configure your Vapi assistant to use the production URL
3. Ensure your Pinecone index is accessible from the deployment environment
4. Update the Vapi custom LLM URL to point to your production domain

### **Production Checklist:**
- ✅ All environment variables configured
- ✅ Vapi assistant updated with production URL
- ✅ Pinecone index accessible from production
- ✅ Knowledge base populated with Aven content
- ✅ SSL certificates configured for secure voice calls

## 📚 Learn More

- [Vapi Documentation](https://docs.vapi.ai) - Learn about Vapi's voice AI platform
- [OpenAI API Documentation](https://platform.openai.com/docs) - OpenAI API reference
- [Pinecone Documentation](https://docs.pinecone.io) - Vector database guide
- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [Exa AI Documentation](https://docs.exa.ai) - Web scraping and content extraction
- [Shadcn UI Documentation](https://ui.shadcn.com/) - Component library reference

---

## 🎯 Key Features Summary

This is a sophisticated AI customer support system that combines modern web technologies with advanced AI capabilities to provide intelligent, context-aware support for Aven's customers. The system features:

- **Dual Interface** - Both text and voice support
- **Context-Aware** - Searches Aven's knowledge base for relevant answers
- **Real-time Voice** - Streaming voice conversations
- **Modern UI** - Clean, responsive design with dark theme
- **Type Safety** - Full TypeScript coverage
- **Scalable** - Vector database for efficient knowledge retrieval
# Trigger deployment
