const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config/config');

class ScraperService {
    constructor() {
        this.axios = axios;
    }

    async fetchHtml(url) {
        try {
            const response = await this.axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch HTML: ${error.message}`);
        }
    }

    parseTableRow($, cells) {
        const smdCode = $(cells[0]).text().trim();
        const packageType = $(cells[1]).text().trim();
        const deviceName = $(cells[2]).text().trim();
        const manufacturer = $(cells[3]).text().trim();
        const data = $(cells[4]).text().trim();
        
        let datasheet = $(cells[5]).find(config.SELECTORS.DATASHEET_LINK).attr('href') || '';
        datasheet = datasheet.replace(/^\/\//, '');

        return {
            smdCode,
            package: packageType,
            deviceName,
            manufacturer,
            data,
            datasheet
        };
    }

    isValidRow(data) {
        return data.smdCode && 
               data.datasheet && 
               data.deviceName && 
               data.package && 
               data.manufacturer && 
               data.data;
    }

    async scrapeSMDData(url) {
        try {
            const html = await this.fetchHtml(url);
            const $ = cheerio.load(html);
            const smdData = [];

            $(config.SELECTORS.TABLE).each((index, element) => {
                if (index === 0) return; // Skip header

                const cells = $(element).find(config.SELECTORS.CELLS);
                if (cells.length < 6) return;

                const rowData = this.parseTableRow($, cells);
                if (this.isValidRow(rowData)) {
                    smdData.push(rowData);
                }
            });

            return smdData;
        } catch (error) {
            throw new Error(`Scraping failed: ${error.message}`);
        }
    }
}

module.exports = new ScraperService(); 