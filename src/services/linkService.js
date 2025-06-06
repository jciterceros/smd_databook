const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config/config');

class LinkService {
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

    async getTableLinks() {
        try {
            const html = await this.fetchHtml(config.BASE_URL);
            const $ = cheerio.load(html);
            const links = [];

            // Find all links in the table with id "smdTable"
            $('#smdTable a').each((index, element) => {
                const href = $(element).attr('href');
                if (href) {
                    // Extract the code from the URL (e.g., '00' from '/smd/00')
                    const code = href.split('/').pop();
                    links.push({
                        code,
                        url: `${config.BASE_URL}/${code}`
                    });
                }
            });

            return links;
        } catch (error) {
            throw new Error(`Failed to get table links: ${error.message}`);
        }
    }
}

module.exports = new LinkService(); 