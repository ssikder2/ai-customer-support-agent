import 'dotenv/config'
import Exa from "exa-js"
import { env } from "@/config/env"
import { processData } from "./processData"
import { convertExaResultToScrapedContent } from "./types"
import { getCompanyConfig } from "./companyConfig"
import { getCompanyUrls } from "./urlManager"

const exa = new Exa(env.EXA_API_KEY);

async function contentScraping() {
  try {
    console.log("Starting scraping test...");
    
    const companyConfig = getCompanyConfig();
    const companyUrls = getCompanyUrls(companyConfig);
    const enabledUrls = companyUrls.filter(url => url.enabled).map(url => url.url);
    
    console.log(`Scraping ${enabledUrls.length} URLs for ${companyConfig.name}`);
    
    const result = await exa.getContents(
      enabledUrls,
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