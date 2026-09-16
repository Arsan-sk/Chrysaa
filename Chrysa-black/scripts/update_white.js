const fs = require('fs');
const path = require('path');

const whiteCssPath = path.join(__dirname, '../app/white.css');
let css = fs.readFileSync(whiteCssPath, 'utf8');

const target = `.desktop-links {
  display: flex;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 3rem;
  font: 500 .75rem var(--mono);
  text-transform: uppercase;
}

.site-nav.is-hidden {
  transform: translateY(-100%);
}`;

const replacement = `.desktop-links {
  display: flex;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 2.5rem;
  font: 500 .75rem var(--mono);
  text-transform: uppercase;
}

.site-nav-toggle-wrapper {
  display: flex;
  align-items: center;
}

@media (max-width: 800px) {
  .site-nav-toggle-wrapper {
    display: none;
  }
}

.site-nav.is-hidden {
  transform: translateY(-100%);
}`;

// Normalize line endings for replacement
const normalizedCss = css.replace(/\r\n/g, '\n');
const normalizedTarget = target.replace(/\r\n/g, '\n');
const normalizedReplacement = replacement.replace(/\r\n/g, '\n');

if (normalizedCss.includes(normalizedTarget)) {
  const updated = normalizedCss.replace(normalizedTarget, normalizedReplacement);
  fs.writeFileSync(whiteCssPath, updated, 'utf8');
  console.log('Successfully updated white.css');
} else {
  console.log('Target not found in white.css');
}
