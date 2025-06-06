const path = require('path');

module.exports = {
    BASE_URL: 'https://www.s-manuals.com/smd',
    OUTPUT_DIR: path.join(__dirname, '..', 'json'),
    SELECTORS: {
        TABLE: 'table tr',
        CELLS: 'td',
        DATASHEET_LINK: 'a'
    }
}; 