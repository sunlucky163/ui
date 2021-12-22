import * as puppeteer from 'puppeteer';
import { Config } from '@Core/config';
import { launchers } from '@Constants/launchers';
import { Page } from '@Core/page';
import { forEachSeries } from 'p-iteration';

export class Browser {
    private browser: puppeteer.Browser;
    private readonly launcher: puppeteer.LaunchOptions;

    constructor() {
        const launcher: string = new Config().get('launcher');
        this.launcher = launchers[launcher];
    }

    async launch(args: string[] = []): Promise<void> {
        this.launcher.args = [...this.launcher.args, ...args];
        this.browser = await puppeteer.launch(this.launcher);
    }

    async getPage(
        viewPort = {
            width: 1280,
            height: 1000,
        },
    ): Promise<Page> {
        const puppeteerPage = await this.browser.newPage();
        await puppeteerPage.emulate({
            viewport: viewPort,
            userAgent:
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
        });
        // const [uselessTab] = await this.browser.pages();
        // await uselessTab.close();

        const page = new Page(puppeteerPage);

        return page;
    }

    async pages(): Promise<puppeteer.Page[]> {
        return this.browser.pages();
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    async targets(): Promise<puppeteer.Browser.target[]> {
        return await this.browser.targets();
    }

    async close(): Promise<void> {
        await forEachSeries(
            await this.browser.pages(),
            async page => await page.close({ runBeforeUnload: true }),
        );
        await this.browser.close();
    }
}
