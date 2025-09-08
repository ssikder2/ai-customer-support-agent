import { OpenAI } from "openai";
import { search } from "./search";
import { env } from "@/config/env";
import { getCompanyConfig } from "./companyConfig";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const chat = async (query: string, stream: boolean = false) => {  
  const results = await search(query);  
  const context = results.matches?.map((match) => match.metadata?.content).filter(Boolean).join("\n\n") || "";
  const companyConfig = getCompanyConfig();
  
  const prompt = `You are a helpful customer service specialist for ${companyConfig.name}. Answer questions about ${companyConfig.name}'s services, policies, and support using the provided context.

IMPORTANT GUIDELINES:
- Keep responses concise and to the point
- Be ${companyConfig.tone}, conversational, and approachable—like you're talking to a friend.
- Use everyday language and avoid sounding robotic or overly formal.
- Keep responses concise and easy to understand.
- Use bullet points only if it helps clarity, but don't over-structure.
- If you don't have enough context, say so honestly.
- Focus on what would be most helpful to the user.
- If the customer mispronounces ${companyConfig.name}, don't correct them, just continue to help them

Context from ${companyConfig.name}'s documentation:
${context}

User Question: ${query}

Please provide a clear, concise answer:`;
  
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    stream: stream,
  });
  
  return response;
}