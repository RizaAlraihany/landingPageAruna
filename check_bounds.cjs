const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('http://localhost:5173');
  
  await page.waitForTimeout(2000); // wait for animations

  const bounds = await page.evaluate(() => {
    const h1 = Array.from(document.querySelectorAll('h1')).find(el => el.textContent.includes('Membangun'));
    const textContainer = h1.parentElement;
    const imageContainer = textContainer.nextElementSibling;
    const flexParent = textContainer.parentElement;

    return {
      flexParent: flexParent.getBoundingClientRect(),
      textContainer: textContainer.getBoundingClientRect(),
      imageContainer: imageContainer.getBoundingClientRect(),
    };
  });

  console.log('Flex Parent:', bounds.flexParent);
  console.log('Text Container:', bounds.textContainer);
  console.log('Image Container:', bounds.imageContainer);

  await browser.close();
})();
