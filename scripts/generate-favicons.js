/* eslint-env node */
import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
};

async function generateFavicons() {
  const inputSvg = join(__dirname, '..', 'public', 'favicon.svg');
  const svgBuffer = await fs.readFile(inputSvg);

  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(join(__dirname, '..', 'public', filename));
    
    console.log(`Generated ${filename}`);
  }

  // Generate ICO file (32x32 only, since 16x16 is rarely used nowadays)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(__dirname, '..', 'public', 'favicon.ico'));

  console.log('Generated favicon.ico');
}

generateFavicons().catch(console.error);
