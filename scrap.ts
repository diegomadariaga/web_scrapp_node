//const playwright = require('playwright');
import { chromium, Page } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: false }); // para que se vea la ventana de chrome
    const page: Page = await browser.newPage();
    await page.goto("https://www.pcfactory.cl/xbox?categoria=664&papa=438");
    //await page.screenshot({path: 'xbox.png'});
    try {
        let content = await page.textContent('[class="product-list"]');
        console.log(content);
        if(content?.includes("Xbox Series X")){
            console.log("encontrado");
        }else{
            console.log("no encontrado");
        }
        
    } catch (error) {
        console.log("ha ocurrido un error: ", error);
    }

    await browser.close();
})();
