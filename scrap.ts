//const playwright = require('playwright');
import  {chromium}  from 'playwright';

(async () => {
    
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({path: 'google.png'});

    await browser.close();
  
})();