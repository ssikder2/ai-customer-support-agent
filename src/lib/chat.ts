import { OpenAI } from "openai";
import { search } from "./search";
import { env } from "@/config/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const chat = async (query: string) => {
  console.log("🤖 Chat function called with query:", query);
  
  const results = await search(query);
  console.log("🔍 Search completed, results:", results);
  
  const context = results.matches?.map((match) => match.metadata?.content).filter(Boolean).join("\n\n") || "";
  console.log("📝 Context length:", context.length);
  console.log("📝 Context preview:", context.substring(0, 200) + "...");
  
  const prompt = `You are a helpful customer service specialist for Aven. Answer questions about Aven's services, policies, and support using the provided context.

IMPORTANT GUIDELINES:
- Keep responses concise and to the point
- Be friendly, conversational, and approachable—like you’re talking to a friend.
- Use everyday language and avoid sounding robotic or overly formal.
- Keep responses concise and easy to understand.
- Use bullet points only if it helps clarity, but don’t over-structure.
- If you don’t have enough context, say so honestly.
- Focus on what would be most helpful to the user.

Context from Aven's documentation:
${context}

User Question: ${query}

Please provide a clear, concise answer:`;
  
  console.log("📤 Sending prompt to OpenAI...");
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  
  console.log("✅ OpenAI response received");
  return response.choices[0].message.content;
}