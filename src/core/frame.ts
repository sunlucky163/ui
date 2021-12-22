import * as puppeteer from 'puppeteer';
import { Element } from '@Core/element';

export class Frame {
    private readonly frame: puppeteer.Frame;

    constructor(frame: puppeteer.Frame) {
        this.frame = frame;
    }

    async waitFor(
        selector: number | string | puppeteer.EvaluateFn,
        options: puppeteer.WaitForSelectorOptions | puppeteer.PageFnOptions = {
            visible: true,
        },
        ...args: puppeteer.SerializableOrJSHandle[]
    ): Promise<void> {
        if (typeof selector === 'number') {
            await this.frame.waitFor(selector);
        } else {
            await this.frame.waitFor(selector, options, ...args);
        }
    }

    async $(selector: string): Promise<Element> {
        return new Element(await this.frame.$(selector));
    }

    async $$(selector: string): Promise<Element[]> {
        const elements = await this.frame.$$(selector);
        return elements.map(element => new Element(element));
    }
}
