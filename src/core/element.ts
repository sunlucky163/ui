import * as puppeteer from 'puppeteer';
import { format } from 'util';

export class Element {
    private readonly element: puppeteer.ElementHandle;

    constructor(element: puppeteer.ElementHandle) {
        this.element = element;
    }

    getInstance(): puppeteer.ElementHandle {
        return this.element;
    }

    async $(selector: string): Promise<Element> {
        return new Element(await this.element.$(selector));
    }

    async $$(selector: string): Promise<Element[]> {
        const elements = await this.element.$$(selector);
        return elements.map(element => new Element(element));
    }

    async $x(selector: string): Promise<Element> {
        const [element] = await this.$$x(selector);
        return element;
    }

    async $$x(selector: string): Promise<Element[]> {
        const elements = await this.element.$x(selector);
        return elements.map(element => new Element(element));
    }

    async getByText(text: string): Promise<Element> {
        const selector = format('.//*[contains(text(), "%s")]', text);
        return await this.$x(selector);
    }

    async click(): Promise<void> {
        await this.element.click();
    }

    async hover(): Promise<void> {
        await this.element.hover();
    }

    async type(text: string): Promise<void> {
        await this.element.focus();
        await this.element.type(text);
    }

}
