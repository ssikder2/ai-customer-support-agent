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
