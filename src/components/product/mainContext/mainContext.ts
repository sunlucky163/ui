import { Component } from '@Components/component';

export class MainContext extends Component {
    private selectors = {
        addToCart: '//button[contains(., "Добавить в корзину")]',
        addToCartCheck: '//div[contains(., "Товар добавлен в корзину")]',
    };

    async addToCart(): Promise<void> {
        await this.page.waitFor(this.selectors.addToCart);
        const addToCart = await this.page.$x(this.selectors.addToCart);
        await addToCart.click();
    }

    async addToCartCheck(): Promise<boolean> {
        await this.page.waitFor(this.selectors.addToCartCheck);
        return !!(await this.page.$x(this.selectors.addToCartCheck));
    }
}
