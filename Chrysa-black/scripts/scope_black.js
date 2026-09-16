const fs = require('fs');
const path = require('path');

const rawBlackCss = fs.readFileSync(path.join(__dirname, '../app/globals.css'), 'utf8');

function processCss(css) {
  let topLevelBlocks = [];
  let scopedRules = [];

  let i = 0;
  let len = css.length;
  let currentChunk = '';
  let braceDepth = 0;
  let inString = false;
  let stringChar = '';
  let inComment = false;

  while (i < len) {
    let char = css[i];
    let nextChar = css[i + 1] || '';

    if (inComment) {
      currentChunk += char;
      if (char === '*' && nextChar === '/') {
        currentChunk += nextChar;
        i += 2;
        inComment = false;
        continue;
      }
      i++;
      continue;
    }

    if (char === '/' && nextChar === '*') {
      inComment = true;
      currentChunk += char + nextChar;
      i += 2;
      continue;
    }

    if (inString) {
      currentChunk += char;
      if (char === '\\') {
        currentChunk += nextChar;
        i += 2;
        continue;
      }
      if (char === stringChar) {
        inString = false;
      }
      i++;
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      currentChunk += char;
      i++;
      continue;
    }

    if (char === '{') {
      braceDepth++;
      currentChunk += char;
      i++;
      continue;
    }

    if (char === '}') {
      braceDepth--;
      currentChunk += char;
      if (braceDepth === 0) {
        let trimmed = currentChunk.trim();
        if (trimmed.startsWith('@import') || trimmed.startsWith('@keyframes') || trimmed.startsWith('@-webkit-keyframes') || trimmed.startsWith(':root') || trimmed.startsWith('html') || trimmed.startsWith('body') || trimmed.startsWith('*')) {
          topLevelBlocks.push(trimmed);
        } else {
          scopedRules.push(trimmed);
        }
        currentChunk = '';
      }
      i++;
      continue;
    }

    currentChunk += char;
    i++;
  }

  if (currentChunk.trim().length > 0) {
    scopedRules.push(currentChunk.trim());
  }

  return {
    topLevel: topLevelBlocks.join('\n\n'),
    scoped: scopedRules.join('\n\n')
  };
}

const result = processCss(rawBlackCss);

const finalGlobalsCss = `@import "tailwindcss";

:root {
  --bg-deep: #0B0A08;
  --bg-surface: #141310;
  --bg-surface-elevated: #1B1915;
  --bg-card: rgba(23, 21, 18, 0.75);
  
  --text-cream: #F5F1E8;
  --text-stone: #8A8578;
  --text-muted: #5C584F;

  --accent-gold: #E8A33D;
  --accent-gold-dark: #C77B3D;
  --accent-gold-light: #F6C275;
  --accent-glow: rgba(232, 163, 61, 0.18);
  
  --border-subtle: rgba(245, 241, 232, 0.08);
  --border-active: rgba(232, 163, 61, 0.4);

  --font-display: var(--font-fraunces), serif;
  --font-body: var(--font-inter), sans-serif;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
  width: 100%;
}

html.theme-black,
body.theme-black {
  background-color: var(--bg-deep);
  color: var(--text-cream);
  font-family: var(--font-body);
}

html.theme-white,
body.theme-white {
  background-color: #f2f0eb;
  color: #1b1d1c;
  font-family: 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Custom Scrollbar in Dark Theme */
html.theme-black ::-webkit-scrollbar {
  width: 6px;
}
html.theme-black ::-webkit-scrollbar-track {
  background: #0B0A08;
}
html.theme-black ::-webkit-scrollbar-thumb {
  background: rgba(232, 163, 61, 0.25);
  border-radius: 4px;
}
html.theme-black ::-webkit-scrollbar-thumb:hover {
  background: rgba(232, 163, 61, 0.5);
}

html.theme-black ::selection {
  background: rgba(232, 163, 61, 0.3);
  color: #FFFFFF;
}

/* Scoped Black Theme Rules */
.theme-black,
.crysa-black-root {
  --font-serif: var(--font-display);
  --font-sans: var(--font-body);

${result.scoped}
}
`;

fs.writeFileSync(path.join(__dirname, '../app/globals.css'), finalGlobalsCss, 'utf8');
console.log('Successfully scoped globals.css! Size:', finalGlobalsCss.length, 'bytes');
