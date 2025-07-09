import 'dotenv/config'
import Exa from "exa-js"
import { env } from "@/config/env"
import { avenUrls, helocUrls } from "./urls"

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
    console.log("Number of results:", result.results.length);

  } catch (error) {
    console.error("Scraping failed:", error);
  }
}

contentScraping();