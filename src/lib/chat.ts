import { OpenAI } from "openai";
import { search } from "./search";
import { env } from "@/config/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const chat = async (query: string) => {
  const results = await search(query);
  const context = results.matches?.map((match) => match.metadata?.content).filter(Boolean).join("\n\n") || "";
  const prompt = `
  You are a helpful customer service specialist that can answer questions about the following context in a friendly and helpful manner:
  Context:
  ${context}
  Question:
  ${query}
  `;
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  return response.choices[0].message.content;
}