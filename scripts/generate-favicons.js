const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sizes = {
  'favicon-16x16.png': 16,
  'favicon-32x32.png': 32,
  'apple-touch-icon.png': 180,
  'android-chrome-192x192.png': 192,
  'android-chrome-512x512.png': 512,
};

async function generateFavicons() {
  const inputSvg = path.join(__dirname, '..', 'public', 'favicon.svg');
  const svgBuffer = await fs.readFile(inputSvg);

  for (const [filename, size] of Object.entries(sizes)) {
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(path.join(__dirname, '..', 'public', filename));
    
    console.log(`Generated ${filename}`);
  }

  // Generate ICO file (16x16 and 32x32 combined)
  const ico16 = await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toBuffer();

  const ico32 = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  // Use sharp to create an ICO file
  await sharp(ico32)
    .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));

  console.log('Generated favicon.ico');
}

generateFavicons().catch(console.error);
