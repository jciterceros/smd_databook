const fs = require('fs');
const path = require('path');

// Directory containing the JSON files
const jsonDir = path.join(__dirname, '../json');

// Set to store unique types
const uniqueTypes = new Set();

// Read all JSON files in the directory
const files = fs.readdirSync(jsonDir);

// Process each JSON file
files.forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(jsonDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Extract types from each component
        data.forEach(component => {
            if (component.data) {
                uniqueTypes.add(component.data);
            }
        });
    }
});

// Convert Set to Array and sort
const sortedTypes = Array.from(uniqueTypes).sort();

// Create the output object
const output = {
    totalTypes: sortedTypes.length,
    types: sortedTypes
};

// Write to types.json in the types directory
fs.writeFileSync(
    path.join(__dirname, '../json/types/types.json'),
    JSON.stringify(output, null, 2),
    'utf8'
);

console.log(`Found ${sortedTypes.length} unique component types`);
console.log('Data has been written to src/json/types/types.json'); 