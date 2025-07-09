import { ScrapedContent, ProcessedChunk } from './types';

export function chunkText(text: string, maxChunkSize: number = 1000): string[] {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const chunks: string[] = [];
  let currentChunk = '';

  for (const sentence of sentences) {
    const trimmedSentence = sentence.trim();
    if (currentChunk.length + trimmedSentence.length > maxChunkSize && currentChunk.length > 0) {
      chunks.push(currentChunk.trim());
      currentChunk = trimmedSentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + trimmedSentence;
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

export function processScrapedContent(content: ScrapedContent): ProcessedChunk[] {
  const chunks = chunkText(content.content);
  const processedChunks: ProcessedChunk[] = [];

  chunks.forEach((chunk, index) => {
    const chunkId = `${content.url}-${index}`;
    
    processedChunks.push({
      id: chunkId,
      values: [], // Will be filled by embedding service
      metadata: {
        url: content.url,
        title: content.title,
        content: chunk,
        source: content.source,
        chunkIndex: index,
        totalChunks: chunks.length,
        wordCount: chunk.split(' ').length,
      },
    });
  });

  return processedChunks;
} 