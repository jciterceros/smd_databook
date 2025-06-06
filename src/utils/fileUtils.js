const fs = require('fs');

const saveToJson = (data, filename) => {
    try {
        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
        return true;
    } catch (error) {
        console.error('Error saving file:', error.message);
        return false;
    }
};

module.exports = {
    saveToJson
}; 