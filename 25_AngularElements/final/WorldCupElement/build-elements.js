const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/WorldCupElement/runtime.js',
    './dist/WorldCupElement/polyfills.js',
    './dist/WorldCupElement/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/world-cup.js');

  console.info('Wold Cup Element created successfully!');
})();
