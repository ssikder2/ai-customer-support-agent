import { index } from "./pinecone";
import { embed } from "./embeddings";

export const search = async (query: string) => {
  console.log("🔍 Searching for:", query);
  
  const queryEmbedding = await embed(query);
  console.log("✅ Generated embedding, length:", queryEmbedding.length);
  
  const results = await index.query({
    vector: queryEmbedding,
    topK: 3,
    includeMetadata: true,
  });
  
  console.log("📊 Search results:", {
    totalMatches: results.matches?.length || 0,
    matches: results.matches?.map(match => ({
      score: match.score,
      id: match.id,
      content: typeof match.metadata?.content === 'string' 
        ? match.metadata.content.substring(0, 100) + "..." 
        : "No content",
      url: match.metadata?.url,
    }))
  });
  
  return results;
}