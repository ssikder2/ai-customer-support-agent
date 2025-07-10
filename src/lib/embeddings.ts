import { OpenAI } from "openai";
import { env } from "@/config/env";

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
});

export const embed = async (text: string) => {
  try {
    const response = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
    });

    return response.data[0].embedding;
  } catch (error) {
    console.error("Error embedding text:", error);
    throw error;
  }
}