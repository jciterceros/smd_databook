const path = require('path');
const config = require('./config/config');
const linkService = require('./services/linkService');
const { saveToJson } = require('./utils/fileUtils');

async function main() {
    try {
        console.log('Starting link extraction process...');
        
        const links = await linkService.getTableLinks();
        console.log(`Found ${links.length} links`);
        
        const outputFile = path.join(config.OUTPUT_DIR, 'links.json');
        
        if (saveToJson(links, outputFile)) {
            console.log(`Links successfully saved to ${outputFile}`);
        } else {
            throw new Error('Failed to save links to file');
        }
    } catch (error) {
        console.error('Error in main process:', error.message);
        process.exit(1);
    }
}

// Run the main process
main(); 