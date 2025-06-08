const fs = require('fs');
const path = require('path');

// Directory containing the JSON files
const jsonDir = path.join(__dirname, '../json');

// Set to store unique package types
const uniquePackages = new Set();

// Read all JSON files in the directory
const files = fs.readdirSync(jsonDir);

// Process each JSON file
files.forEach(file => {
    if (file.endsWith('.json')) {
        const filePath = path.join(jsonDir, file);
        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        
        // Extract package types from each component
        data.forEach(component => {
            if (component.package) {
                uniquePackages.add(component.package);
            }
        });
    }
});

// Convert Set to Array and sort
const sortedPackages = Array.from(uniquePackages).sort();

// Create the output object
const output = {
    totalPackages: sortedPackages.length,
    packages: sortedPackages
};

// Write to packages.json in the types directory
fs.writeFileSync(
    path.join(__dirname, '../json/types/packages.json'),
    JSON.stringify(output, null, 2),
    'utf8'
);

console.log(`Found ${sortedPackages.length} unique package types`);
console.log('Data has been written to src/json/types/packages.json'); 