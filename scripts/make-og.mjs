// Generates public/og.png — the social-share card.
// Run locally with `npm run og` and commit the result; we don't regenerate in
// CI because the prebuilt libvips in Linux build images doesn't reliably render
// SVG text. Tweak the design here and re-run.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og.png');

const W = 1200;
const H = 630;

// VS Code "Dark+" inspired palette
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#1e1e1e" />
  <!-- editor title bar -->
  <rect width="${W}" height="48" fill="#252526" />
  <circle cx="34" cy="24" r="7" fill="#ff5f56" />
  <circle cx="58" cy="24" r="7" fill="#ffbd2e" />
  <circle cx="82" cy="24" r="7" fill="#27c93f" />
  <text x="120" y="30" font-family="Menlo, monospace" font-size="20" fill="#858585">gowtham.ai — README.md</text>
  <!-- accent rail -->
  <rect x="0" y="48" width="6" height="${H - 48}" fill="#569cd6" />
  <g font-family="Helvetica, Arial, sans-serif">
    <text x="80" y="180" font-family="Menlo, monospace" font-size="26" letter-spacing="4" fill="#569cd6">SOFTWARE ENGINEER</text>
    <text x="76" y="310" font-size="90" font-weight="700" fill="#ffffff">Gowtham Mallikarjuna</text>
    <text x="80" y="475" font-size="33" fill="#d4d4d4">9+ years at Meta and Amazon. Platform security,</text>
    <text x="80" y="520" font-size="33" fill="#d4d4d4">distributed systems, experimentation.</text>
    <text x="80" y="580" font-family="Menlo, monospace" font-size="26" fill="#4ec9b0">gowtham.ai</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log(`Wrote ${out}`);
