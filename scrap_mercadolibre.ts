import { Browser, chromium, Page, ElementHandle } from "playwright";

(async () => {
    const browser:Browser = await chromium.launch();
    const page: Page = await browser.newPage();
    await page.goto("https://listado.mercadolibre.cl/celulares-telefonia/celulares/apple/iphone-13-pro_NoIndex_True#applied_filter_id%3DBRAND%26applied_filter_name%3DMarca%26applied_filter_order%3D3%26applied_value_id%3D9344%26applied_value_name%3DApple%26applied_value_order%3D2%26applied_value_results%3D334%26is_custom%3Dfalse");
    const elements: ElementHandle<SVGElement | HTMLElement>[] = await page.$$('.ui-search-price--size-medium .price-tag-fraction');
    const texto:(string | null)[]= await Promise.all(elements.map(async (element) => {
        return await element.evaluate(element => element.textContent);
    }));
    console.log(texto);
    await browser.close();
})();
