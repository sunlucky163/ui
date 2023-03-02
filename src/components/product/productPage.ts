import { Component } from '@Components/component';
import {MainContext} from "@Components/product/mainContext/mainContext";

export class ProductPage extends Component {
    private selectors = {
        sidebar: '#sidebar'
    };

    async open(): Promise<void> {
        await this.page.goto('https://www.glassesusa.com/black-medium/ray-ban-rb2132-new-wayfarer-/46-p6709.html')
    }

    async getSidebar(): Promise<MainContext> {
        await this.page.waitFor(this.selectors.sidebar)
        const sidebar = await this.page.$(this.selectors.sidebar)
        return new MainContext(this.page, sidebar)
    }
}
