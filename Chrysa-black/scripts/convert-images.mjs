/**
 * Image optimization script: converts PNG work images → WebP at multiple sizes
 * Run: node scripts/convert-images.mjs
 */
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, '../../public/work');
const outputDir = publicDir; // overwrite in-place, but as .webp

const images = [
  'sample-dhaba.png',
  'resin-art.png',
  'wedding-hall.png',
  'gift-shop-ai.png',
  'kohinoor.png',
];

// Display sizes from Lighthouse: ~441px wide
// We produce: 441, 882 (2x), 441 at mobile
const widths = [441, 882];

async function convertImage(filename) {
  const srcPath = path.join(publicDir, filename);
  const baseName = path.basename(filename, '.png');

  if (!fs.existsSync(srcPath)) {
    console.warn(`⚠ Skipping ${filename} — not found`);
    return;
  }

  for (const w of widths) {
    const outPath = path.join(outputDir, `${baseName}-${w}w.webp`);
    await sharp(srcPath)
      .resize(w, null, { withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(outPath);
    const stat = fs.statSync(outPath);
    console.log(`✓ ${baseName}-${w}w.webp — ${(stat.size / 1024).toFixed(1)} KB`);
  }

  // Also convert the original to webp at natural size for fallback
  const fullOut = path.join(outputDir, `${baseName}.webp`);
  await sharp(srcPath)
    .webp({ quality: 80, effort: 6 })
    .toFile(fullOut);
  const fullStat = fs.statSync(fullOut);
  console.log(`✓ ${baseName}.webp (full) — ${(fullStat.size / 1024).toFixed(1)} KB`);
}

console.log('🖼  Converting work images to WebP...\n');
for (const img of images) {
  await convertImage(img);
}
console.log('\n✅ Done.');

