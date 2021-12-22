import { Browser } from '@Core/browser';
import { Page } from '@Core/page';
import { timeout } from '@Utils/timeout';
import { TestApi } from '@Core/api';

describe('Extension ', () => {
    const browser = new Browser();
    const XOR = {
        address: '0x0200000000000000000000000000000000000000000000000000000000000000',
        symbol: 'XOR',
        name: 'SORA',
        decimals: 18,
        totalSupply: '700000',
    };
    const PSWAP = {
        address: '0x0200050000000000000000000000000000000000000000000000000000000000',
        symbol: 'PSWAP',
        name: 'Polkaswap',
        decimals: 18,
        totalSupply: '10000000000',
    };
    let page: Page;

    beforeAll(async () => {
        await browser.launch();
        page = await browser.getPage();
    });

    afterAll(async () => {
        // await browser.close();
    });

    test('should be installed', async () => {
        // Таймаут для загрузки страницы
        await timeout(3000);

        await page.goto('chrome-extension://nehkdgnjfikoojkpgeheohjnbadbcgfb/index.html#/');
        await timeout(1000);
        const button = await page.$('[class="Button-sc-1gyneog-0 jECBwC"]');
        await button.click();
        await timeout(1000);

        const clickMenu = await page.$('[class="popupToggle"]');
        await clickMenu.click();
        await timeout(1000);

        const clickImport = await page.$$('[class="Link-sc-61h66h-0 hOcIva"]');
        await clickImport[2].click();
        await timeout(1000);

        const inputMnemonic = await page.$('[class="TextInputs__TextArea-sc-199o3xu-0 ikunKS"]');
        await inputMnemonic.type(
            'avocado guess suspect stone glide like bacon couch ridge topple derive process',
        );

        const nextButton = await page.$('[class="ButtonArea-sc-1254szc-0 bgcaGh"] button');
        await nextButton.click();

        let nameAndPassword = await page.$$('[class="TextInputs__Input-sc-199o3xu-1 dGCWLT"]');
        await nameAndPassword[0].type('test');

        await nameAndPassword[1].type('123456');
        await timeout(2000);
        nameAndPassword = await page.$$('[class="TextInputs__Input-sc-199o3xu-1 dGCWLT"]');

        await nameAndPassword[2].type('123456');
        const continueButton = await page.$(
            '[class="Button-sc-1gyneog-0 jECBwC NextStepButton-sc-26dpu8-0 gwzpcW"]',
        );
        await continueButton.click();

        const newPage = await browser.getPage();
        await newPage.goto('https://exchange.dev.sora2.tachi.soramitsu.co.jp/');
        await timeout(5000);
        const connectAccount = await newPage.$(
            '[class="el-button el-tooltip el-button--plain el-button--medium neumorphic s-medium s-border-radius-small s-tertiary account-control"]',
        );
        await connectAccount.click();

        const newExtPage = await browser.getPage();
        await newExtPage.goto('chrome-extension://nehkdgnjfikoojkpgeheohjnbadbcgfb/index.html#/');
        const allowAccess = await newExtPage.$('[class="Button-sc-1gyneog-0 jECBwC acceptButton"]');
        await allowAccess.click();
        await newExtPage.close();
        await timeout(2000);
        const selectAccount = await newPage.$('[class="wallet-connection-account"]');
        await selectAccount.click();

        const faucetPage = await browser.getPage();
        await faucetPage.goto('https://faucet.dev.sora2.tachi.soramitsu.co.jp/')
        await timeout(3000)
        let inputs = await faucetPage.$$('[class="el-input__inner"]')
        await inputs[2].type('5F9i59QD7aU54HexhfC89ccMrB2kzWRCR6DDCWjwdzfjvd86')
        await timeout(1000)
        await inputs[3].type('1000')

        const submit = await faucetPage.$('[class="el-button el-tooltip faucet-body-action el-button--primary el-button--medium s-medium s-border-radius-medium s-primary"]')
        await submit.click()

        await timeout(10000)

        await faucetPage.close()

        const selectPool = await newPage.$$('[class="el-menu-item s-flex menu-item"]');
        await selectPool[1].click();
        await timeout(1000);
        const addLiqudity = await newPage.$(
            '[class="el-button el-tooltip el-button--add-liquidity s-typography-button--large el-button--primary el-button--medium neumorphic s-medium s-border-radius-small s-primary"]',
        );
        await addLiqudity.click();
        await timeout(1000);

        const selectToken = await newPage.$(
            '[class="el-button el-tooltip el-button--select-token el-button--plain el-button--small neumorphic s-small s-border-radius-mini s-secondary token-select-button"]',
        );
        await selectToken.click();

        const tokenItem = await newPage.$$('[class="token-item"]');
        await tokenItem[2].click();
        await timeout(1000);

        const inputToken = await newPage.$(
            '[class="s-input s-input--token-value neumorphic s-border-radius-small s-size-medium"] input',
        );
        await inputToken.type('100');
        await timeout(1000);
    }, 50000);
});
