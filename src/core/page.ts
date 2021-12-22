import * as puppeteer from 'puppeteer';
import { Element } from '@Core/element';
import { format } from 'util';

export class Page {
    private readonly page: puppeteer.Page;

    constructor(page: puppeteer.Page) {
        this.page = page;
    }

    async goto(
        url: string,
        options: puppeteer.DirectNavigationOptions = {
            waitUntil: 'domcontentloaded',
        },
    ): Promise<void> {
        await this.page.goto(url, options);
    }

    on(eventName, handler) {
        this.page.on(eventName, handler);
    }

    getPage(): puppeteer.Page {
        return this.page;
    }

    async mouseMove(x: number, y: number) {
        await this.page.mouse.move(x, y);
    }

    async waitFor(
        selector: number | string | puppeteer.EvaluateFn,
        options: puppeteer.WaitForSelectorOptions | puppeteer.PageFnOptions = { visible: true },
        ...args
    ): Promise<void> {
        if (typeof selector === 'number') {
            await this.page.waitFor(selector);
        } else {
            await this.page.waitFor(selector, options, ...args);
        }
    }

    async screenShot(options?: puppeteer.ScreenshotOptions) {
        return await this.page.screenshot(options);
    }

    async waitForXPath(
        xpath: string,
        options: puppeteer.WaitForSelectorOptions = { visible: true },
    ): Promise<void> {
        await this.page.waitForXPath(xpath, options);
    }

    async $(selector: string): Promise<Element> {
        return new Element(await this.page.$(selector));
    }

    async $$(selector: string): Promise<Element[]> {
        const elements = await this.page.$$(selector);
        return elements.map(element => new Element(element));
    }

    async $x(selector: string): Promise<Element> {
        const [element] = await this.$$x(selector);
        return element;
    }

    async $$x(selector: string): Promise<Element[]> {
        const elements = await this.page.$x(selector);
        return elements.map(element => new Element(element));
    }

    async getByText(text: string): Promise<Element> {
        const selector = format('//*[contains(text(), "%s")]', text);
        return await this.$x(selector);
    }

    async type(text: string): Promise<void> {
        await this.element.focus();
        await this.element.type(text);
    }

    getInstance(): puppeteer.Page {
        return this.page;
    }

    async waitForNavigation(
        options: puppeteer.NavigationOptions = { waitUntil: 'domcontentloaded' },
    ): Promise<void> {
        await this.page.waitForNavigation(options);
    }

    url(): string {
        return this.page.url();
    }

    async close(): Promise<void> {
        return await this.page.close();
    }
}
