import { Browser } from '@Core/browser';
import { Page } from '@Core/page';
import { ProductPage } from '@Components/product/productPage';

describe('Add items to cart ', () => {
    const browser = new Browser();
    let page: Page;
    let productPage: ProductPage;

    beforeAll(async () => {
        await browser.launch();
        page = await browser.getPage();
        productPage = new ProductPage(page);
    });

    afterAll(async () => {
        await browser.close();
    });

    test('should be success', async () => {
        await productPage.open();
        const mainContext = await productPage.getContext();
        await mainContext.addToCart();
        expect(await mainContext.addToCartCheck()).toBe(true);
    }, 50000);
});
