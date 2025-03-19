import { rm, readdir } from 'fs/promises';
import { join } from 'path';

async function cleanBuild() {
  const buildDir = join(process.cwd(), '.next');
  
  try {
    // 删除整个 .next 目录
    console.log('Cleaning .next directory...');
    await rm(buildDir, { recursive: true, force: true });
    console.log('Successfully cleaned .next directory');
  } catch (error) {
    console.log('No .next directory found, proceeding with build');
  }
}

async function cleanPackFiles() {
  const buildDir = join(process.cwd(), '.next');
  
  try {
    async function findAndDeletePackFiles(dir) {
      const entries = await readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        
        if (entry.isDirectory()) {
          await findAndDeletePackFiles(fullPath);
        } else if (entry.name.endsWith('.pack')) {
          console.log(`Deleting pack file: ${fullPath}`);
          await rm(fullPath);
        }
      }
    }
    
    await findAndDeletePackFiles(buildDir);
    console.log('Successfully cleaned pack files');
    
    // 删除缓存目录
    const cacheDir = join(buildDir, 'cache');
    await rm(cacheDir, { recursive: true, force: true });
    console.log('Successfully cleaned cache directory');
  } catch (error) {
    console.error('Error cleaning files:', error);
  }
}

// 如果这是主模块，执行清理
if (process.argv[1] === new URL(import.meta.url).pathname) {
  const command = process.argv[2];
  if (command === 'pre') {
    await cleanBuild();
  } else if (command === 'post') {
    await cleanPackFiles();
  }
} 