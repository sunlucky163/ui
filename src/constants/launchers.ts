import * as puppeteer from 'puppeteer';

const defaultArgs = ['--embedded-extension-options', '--enable-experimental-extension-apis'];

export const launchers: { [key: string]: puppeteer.LaunchOptions } = {
    debug: {
        args: [
            ...defaultArgs,
            '--start-maximized',
        ],
        devtools: true,
        slowMo: 10,
        ignoreHTTPSErrors: true,
        headless: false,
    },
    headless: {
        args: defaultArgs,
        headless: true,
        ignoreHTTPSErrors: true,
    },
};
