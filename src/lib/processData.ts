import { index } from "./pinecone";
import { embed } from "./embeddings";
import { processScrapedContent } from "./textProcessor";
import { ScrapedContent } from "./types";

export const processData = async (scrapedContent: ScrapedContent) => {
  try{
    const processedChunks = processScrapedContent(scrapedContent);
    const embeddings = await Promise.all(processedChunks.map(chunk => embed(chunk.metadata.content)));
    const vectorChunks = processedChunks.map((chunk, index) => ({
        ...chunk,
        values: embeddings[index],
    }));
    await index.upsert(vectorChunks);
    console.log("Data processed and stored in Pinecone");
    return vectorChunks;
    
  } catch (error) {
    console.error("Error processing data:", error);
    throw error;
  }
}