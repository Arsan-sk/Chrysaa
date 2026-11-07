/**
 * Generates a 1200x630 OG image PNG for CHRYSA
 * Run: node scripts/generate-og-image.mjs
 */
import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(__dirname, '../../public/common/chrysa-og.png');

// Create a 1200x630 dark branded OG image using SVG → PNG conversion
const svgContent = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="1200" height="630" fill="#0B0A08"/>
  
  <!-- Subtle grid pattern -->
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5F1E8" stroke-width="0.3" stroke-opacity="0.06"/>
    </pattern>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E8A33D" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#0B0A08" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <rect width="1200" height="630" fill="url(#grid)"/>
  <ellipse cx="600" cy="315" rx="500" ry="300" fill="url(#glow)"/>
  
  <!-- Gold accent line top -->
  <rect x="0" y="0" width="1200" height="2" fill="#E8A33D" opacity="0.6"/>
  
  <!-- Brand name -->
  <text 
    x="600" y="260" 
    font-family="Georgia, serif" 
    font-size="96" 
    font-weight="300" 
    font-style="italic"
    fill="#F5F1E8" 
    text-anchor="middle"
    letter-spacing="20"
  >CHRYSA</text>
  
  <!-- Gold separator -->
  <rect x="500" y="285" width="200" height="1" fill="#E8A33D" opacity="0.5"/>
  
  <!-- Tagline -->
  <text 
    x="600" y="340" 
    font-family="Arial, sans-serif" 
    font-size="18" 
    font-weight="400"
    fill="#8A8578" 
    text-anchor="middle"
    letter-spacing="6"
  >DIGITAL TRANSFORMATION STUDIO</text>
  
  <!-- Description -->
  <text 
    x="600" y="400" 
    font-family="Arial, sans-serif" 
    font-size="22" 
    font-weight="300"
    fill="#C4BBA8" 
    text-anchor="middle"
  >Web · SaaS · AI · Automation · Mumbai, India</text>
  
  <!-- Bottom tagline -->
  <text 
    x="600" y="560" 
    font-family="Arial, sans-serif" 
    font-size="14" 
    font-weight="400"
    fill="#5C584F" 
    text-anchor="middle"
    letter-spacing="4"
  >FROM POTENTIAL TO PRESENCE</text>
  
  <!-- Gold accent line bottom -->
  <rect x="0" y="628" width="1200" height="2" fill="#E8A33D" opacity="0.3"/>
</svg>
`;

await sharp(Buffer.from(svgContent))
  .resize(1200, 630)
  .png({ quality: 90 })
  .toFile(outputPath);

const { statSync } = await import('fs');
const stat = statSync(outputPath);
console.log(`✓ chrysa-og.png — ${(stat.size / 1024).toFixed(1)} KB`);
console.log(`  Path: ${outputPath}`);

