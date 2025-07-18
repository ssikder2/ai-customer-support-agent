import 'dotenv/config'
import Exa from "exa-js"
import { env } from "@/config/env"
import { avenUrls, helocUrls } from "./urls"
import { processData } from "./processData"
import { convertExaResultToScrapedContent } from "./types"

const exa = new Exa(env.EXA_API_KEY);

async function contentScraping() {
  try {
    console.log("Starting scraping test...");
    
    const allUrls = [...avenUrls, ...helocUrls];
    
    const result = await exa.getContents(
      allUrls,
      {
        text: true,
        context: true,
      }
    )

    console.log("Scraping completed!");
    
    const scrapedContents = result.results.map(convertExaResultToScrapedContent);
    for (const content of scrapedContents) {
      await processData(content);
    }
    console.log("Data processed and stored in Pinecone");

  } catch (error) {
    console.error("Scraping failed:", error);
  }
}

contentScraping();