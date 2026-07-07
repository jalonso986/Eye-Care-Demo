/**
 * Open Graph image generator.
 * Renders og-template.html in headless Chromium and screenshots it
 * at 1200x630 to assets/og-image.jpg.
 *
 * Usage:
 *   npm install puppeteer --save-dev   (one-time, if missing)
 *   node generate-og.js                (from this directory)
 *
 * To produce an OG image for a different patient/content, edit
 * OG_CONFIG at the bottom of og-template.html, then re-run this
 * script and commit the regenerated assets/og-image.jpg.
 */
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.goto(
    'file://' + path.resolve(__dirname, 'og-template.html'),
    { waitUntil: 'networkidle0' }
  );
  await page.screenshot({
    path: path.resolve(__dirname, 'assets/og-image.jpg'),
    type: 'jpeg',
    quality: 95,
    clip: { x: 0, y: 0, width: 1200, height: 630 }
  });
  await browser.close();
  console.log('OG image generated: assets/og-image.jpg');
})();
