import dotenv from "dotenv";
dotenv.config();
import { z } from "zod";
import { Logger } from "@/utils/logger";

const logger = new Logger("Config:Env");

// Schema for environment variables
const envSchema = z.object({
  NODE_ENV: z.string(),
  NEXT_PUBLIC_APP_URL: z.string(),
  EXA_API_KEY: z.string().min(1, "Exa API key is required"),
  OPENAI_API_KEY: z.string().optional(),
  PINECONE_API_KEY: z.string().min(1, "Pinecone API key is required"),
  PINECONE_INDEX_NAME: z.string().min(1, "Pinecone index name is required"),
});

// Function to validate environment variables
const validateEnv = () => {
  try {
    logger.info("Validating environment variables");
    const env = {
      NODE_ENV: process.env.NODE_ENV,
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      EXA_API_KEY: process.env.EXA_API_KEY,
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
      PINECONE_API_KEY: process.env.PINECONE_API_KEY,
      PINECONE_INDEX_NAME: process.env.PINECONE_INDEX_NAME,
    };
    const parsed = envSchema.parse(env);
    logger.info("Environment variables validated successfully");
    return parsed;
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.errors.map(err => err.path.join("."));
      logger.error("Invalid environment variables", { error: { missingVars } });
      throw new Error(
        `❌ Invalid environment variables: ${missingVars.join(
          ", "
        )}. Please check your .env file`
      );
    }
    throw error;
  }
};

export const env = validateEnv();
