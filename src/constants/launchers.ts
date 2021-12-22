import * as puppeteer from 'puppeteer';

const defaultArgs = ['--embedded-extension-options', '--enable-experimental-extension-apis'];

const paths = 'C:\\Users\\mishu\\Docker\\extension-master\\packages\\extension\\build';

export const launchers: { [key: string]: puppeteer.LaunchOptions } = {
    debug: {
        args: [
            ...defaultArgs,
            '--start-maximized',
            `--disable-extensions-except=${paths}`,
            `--load-extension=${paths}`,
        ],
        devtools: true,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
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
