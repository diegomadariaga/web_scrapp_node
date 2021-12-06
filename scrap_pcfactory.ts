//const playwright = require('playwright');
import { chromium, Page } from "playwright";

(async () => {
    const browser = await chromium.launch({ headless: false }); // para que se vea la ventana de chrome
    const page: Page = await browser.newPage();
    await page.goto("https://www.pcfactory.cl/xbox?categoria=664&papa=438");
    //await page.screenshot({path: 'xbox.png'});
    try {
        const content = await page.textContent('[class="product-list"]');
        console.log(content);
        if(content?.includes("Xbox Series X")){
            console.log("encontrado");
        }else{
            console.log("no encontrado");
        }
        
    } catch (error) {
        console.log("ha ocurrido un error: ", error);
    }
    // hacer click en el boton de buscar
    await page.click('[class="ais-SearchBox-input"]');
    // escribir el nombre del juego
    await page.type('[class="ais-SearchBox-input"]', 'nicolito xbox');
    // hacer click en el boton de buscar
    await page.click('[class="ais-input-search-button"]');
    // esperar a que se carguen los resultados
    await page.waitForSelector('[id="data_mentalidad_web"]');

    await page.screenshot({path: 'xbox.png'});
    


    //await browser.close();
})();
