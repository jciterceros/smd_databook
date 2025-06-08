const path = require('path');
const fs = require('fs');
const config = require('./config/config');
const scraperService = require('./services/scraperService');
const { saveToJson } = require('./utils/fileUtils');
const delay = require('./utils/delay');

async function processUrl(url, code) {
    try {
        console.log(`Processing ${code}...`);
        const smdData = await scraperService.scrapeSMDData(url);
        console.log(`Found ${smdData.length} SMD components for ${code}`);
                
        const outputFile = path.join(config.OUTPUT_DIR, `${code}.json`);

        if (fs.existsSync(outputFile)) {
            console.log(`File ${outputFile} already exists, skipping...`);
            return true;
        }
        
        if (saveToJson(smdData, outputFile)) {
            console.log(`Data successfully saved to ${outputFile}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`Error processing ${code}:`, error.message);
        return false;
    }
}

async function main() {
    try {
        console.log('Starting scraping process...');
        
        // Read links from links.json
        const linksFile = path.join(config.OUTPUT_DIR, 'links.json');
        const linksData = JSON.parse(fs.readFileSync(linksFile, 'utf8'));
        
        console.log(`Found ${linksData.length} pages to process`);
        
        // Process each URL with delay
        for (const link of linksData) {
            await processUrl(link.url, link.code);
            // Add 1 second delay between requests
            await delay(500);
        }
        
        console.log('Scraping process completed!');
    } catch (error) {
        console.error('Error in main process:', error.message);
        process.exit(1);
    }
}

// Run the main process
main(); 