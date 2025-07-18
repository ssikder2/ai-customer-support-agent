export interface ScrapedContent {
  url: string;
  title: string;
  content: string;
  source: 'aven' | 'heloc';
  scrapedAt: Date;
}

export interface VectorChunk {
  id: string;
  values: number[];
  metadata: {
    url: string;
    title: string;
    content: string;
    source: string;
    chunkIndex: number;
    totalChunks: number;
  };
}

export interface ProcessedChunk {
  id: string;
  values: number[];
  metadata: {
    url: string;
    title: string;
    content: string;
    source: string;
    chunkIndex: number;
    totalChunks: number;
    wordCount: number;
  };
}

export function convertExaResultToScrapedContent(result: { url: string; title?: string | null; text?: string; content?: string }): ScrapedContent {
  return {
    url: result.url,
    title: result.title || result.url,
    content: result.text || result.content || '',
    source: result.url.includes('aven.com') ? 'aven' : 'heloc',
    scrapedAt: new Date(),
  };
}
