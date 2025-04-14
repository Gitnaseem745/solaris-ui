const fs = require('fs');
const path = require('path');

// Path to the hooks directory
const hooksDir = path.join(process.cwd(), 'hooks', 'user');

// Check if the hooks directory exists
if (!fs.existsSync(hooksDir)) {
  console.error('Error: Hooks directory not found at', hooksDir);
  process.exit(1);
}

// Get all hook directories
const hookDirs = fs.readdirSync(hooksDir).filter((file) =>
  fs.lstatSync(path.join(hooksDir, file)).isDirectory()
);

console.log(`Found ${hookDirs.length} hook directories.`);

// Check each hook directory for required files
let missingFiles = 0;
hookDirs.forEach((hookDir) => {
  const readmePath = path.join(hooksDir, hookDir, 'README.md');
  const codePath = path.join(hooksDir, hookDir, `${hookDir}.ts`);
  
  if (!fs.existsSync(readmePath)) {
    console.error(`Error: README.md not found for hook ${hookDir}`);
    missingFiles++;
  }
  
  if (!fs.existsSync(codePath)) {
    console.error(`Error: ${hookDir}.ts not found for hook ${hookDir}`);
    missingFiles++;
  }
});

if (missingFiles > 0) {
  console.error(`Found ${missingFiles} missing files.`);
  process.exit(1);
} else {
  console.log('All hook files are present.');
} 
