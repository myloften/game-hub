const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.join(process.cwd(), '.next');

function deleteCacheFiles(dir) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file === 'cache') {
        fs.rmSync(filePath, { recursive: true, force: true });
        console.log(`Deleted cache directory: ${filePath}`);
      } else {
        deleteCacheFiles(filePath);
      }
    } else if (file.endsWith('.pack')) {
      fs.unlinkSync(filePath);
      console.log(`Deleted pack file: ${filePath}`);
    }
  }
}

console.log('Cleaning build output...');
deleteCacheFiles(BUILD_DIR);
console.log('Build output cleaned successfully!'); 