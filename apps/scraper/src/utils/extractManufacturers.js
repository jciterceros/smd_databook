const fs = require('fs');
const path = require('path');

// Directory containing the JSON files
const jsonDir = path.join(__dirname, '../json');

// Set to store unique manufacturers
const uniqueManufacturers = new Set();

// Read all JSON files in the directory
const files = fs.readdirSync(jsonDir);

// Process each JSON file
files.forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(jsonDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Extract manufacturers from each component
        data.forEach(component => {
            if (component.manufacturer) {
                uniqueManufacturers.add(component.manufacturer);
            }
        });
    }
});

// Convert Set to Array and sort
const sortedManufacturers = Array.from(uniqueManufacturers).sort();

// Create the output object
const output = {
    totalManufacturers: sortedManufacturers.length,
    manufacturers: sortedManufacturers
};

// Write to manufacturer.json in the types directory
fs.writeFileSync(
    path.join(__dirname, '../json/types/manufacturer.json'),
    JSON.stringify(output, null, 2),
    'utf8'
);

console.log(`Found ${sortedManufacturers.length} unique manufacturers`);
console.log('Data has been written to src/json/types/manufacturer.json'); 