"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("@Core/browser");
var timeout_1 = require("@Utils/timeout");
describe('Extension ', function () {
    var browser = new browser_1.Browser();
    var XOR = {
        address: '0x0200000000000000000000000000000000000000000000000000000000000000',
        symbol: 'XOR',
        name: 'SORA',
        decimals: 18,
        totalSupply: '700000',
    };
    var PSWAP = {
        address: '0x0200050000000000000000000000000000000000000000000000000000000000',
        symbol: 'PSWAP',
        name: 'Polkaswap',
        decimals: 18,
        totalSupply: '10000000000',
    };
    var page;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, browser.launch()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, browser.getPage()];
                case 2:
                    page = _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); });
    test('should be installed', function () { return __awaiter(void 0, void 0, void 0, function () {
        var button, clickMenu, clickImport, inputMnemonic, nextButton, nameAndPassword, continueButton, newPage, connectAccount, newExtPage, allowAccess, selectAccount, faucetPage, inputs, submit, selectPool, addLiqudity, selectToken, tokenItem, inputToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Таймаут для загрузки страницы
                return [4 /*yield*/, timeout_1.timeout(3000)];
                case 1:
                    // Таймаут для загрузки страницы
                    _a.sent();
                    return [4 /*yield*/, page.goto('chrome-extension://nehkdgnjfikoojkpgeheohjnbadbcgfb/index.html#/')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, page.$('[class="Button-sc-1gyneog-0 jECBwC"]')];
                case 4:
                    button = _a.sent();
                    return [4 /*yield*/, button.click()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, page.$('[class="popupToggle"]')];
                case 7:
                    clickMenu = _a.sent();
                    return [4 /*yield*/, clickMenu.click()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, page.$$('[class="Link-sc-61h66h-0 hOcIva"]')];
                case 10:
                    clickImport = _a.sent();
                    return [4 /*yield*/, clickImport[2].click()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, page.$('[class="TextInputs__TextArea-sc-199o3xu-0 ikunKS"]')];
                case 13:
                    inputMnemonic = _a.sent();
                    return [4 /*yield*/, inputMnemonic.type('avocado guess suspect stone glide like bacon couch ridge topple derive process')];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, page.$('[class="ButtonArea-sc-1254szc-0 bgcaGh"] button')];
                case 15:
                    nextButton = _a.sent();
                    return [4 /*yield*/, nextButton.click()];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, page.$$('[class="TextInputs__Input-sc-199o3xu-1 dGCWLT"]')];
                case 17:
                    nameAndPassword = _a.sent();
                    return [4 /*yield*/, nameAndPassword[0].type('test')];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, nameAndPassword[1].type('123456')];
                case 19:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(2000)];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, page.$$('[class="TextInputs__Input-sc-199o3xu-1 dGCWLT"]')];
                case 21:
                    nameAndPassword = _a.sent();
                    return [4 /*yield*/, nameAndPassword[2].type('123456')];
                case 22:
                    _a.sent();
                    return [4 /*yield*/, page.$('[class="Button-sc-1gyneog-0 jECBwC NextStepButton-sc-26dpu8-0 gwzpcW"]')];
                case 23:
                    continueButton = _a.sent();
                    return [4 /*yield*/, continueButton.click()];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, browser.getPage()];
                case 25:
                    newPage = _a.sent();
                    return [4 /*yield*/, newPage.goto('https://exchange.dev.sora2.tachi.soramitsu.co.jp/')];
                case 26:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(5000)];
                case 27:
                    _a.sent();
                    return [4 /*yield*/, newPage.$('[class="el-button el-tooltip el-button--plain el-button--medium neumorphic s-medium s-border-radius-small s-tertiary account-control"]')];
                case 28:
                    connectAccount = _a.sent();
                    return [4 /*yield*/, connectAccount.click()];
                case 29:
                    _a.sent();
                    return [4 /*yield*/, browser.getPage()];
                case 30:
                    newExtPage = _a.sent();
                    return [4 /*yield*/, newExtPage.goto('chrome-extension://nehkdgnjfikoojkpgeheohjnbadbcgfb/index.html#/')];
                case 31:
                    _a.sent();
                    return [4 /*yield*/, newExtPage.$('[class="Button-sc-1gyneog-0 jECBwC acceptButton"]')];
                case 32:
                    allowAccess = _a.sent();
                    return [4 /*yield*/, allowAccess.click()];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, newExtPage.close()];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(2000)];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, newPage.$('[class="wallet-connection-account"]')];
                case 36:
                    selectAccount = _a.sent();
                    return [4 /*yield*/, selectAccount.click()];
                case 37:
                    _a.sent();
                    return [4 /*yield*/, browser.getPage()];
                case 38:
                    faucetPage = _a.sent();
                    return [4 /*yield*/, faucetPage.goto('https://faucet.dev.sora2.tachi.soramitsu.co.jp/')];
                case 39:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(3000)];
                case 40:
                    _a.sent();
                    return [4 /*yield*/, faucetPage.$$('[class="el-input__inner"]')];
                case 41:
                    inputs = _a.sent();
                    return [4 /*yield*/, inputs[2].type('5F9i59QD7aU54HexhfC89ccMrB2kzWRCR6DDCWjwdzfjvd86')];
                case 42:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 43:
                    _a.sent();
                    return [4 /*yield*/, inputs[3].type('1000')];
                case 44:
                    _a.sent();
                    return [4 /*yield*/, faucetPage.$('[class="el-button el-tooltip faucet-body-action el-button--primary el-button--medium s-medium s-border-radius-medium s-primary"]')];
                case 45:
                    submit = _a.sent();
                    return [4 /*yield*/, submit.click()];
                case 46:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(10000)];
                case 47:
                    _a.sent();
                    return [4 /*yield*/, faucetPage.close()];
                case 48:
                    _a.sent();
                    return [4 /*yield*/, newPage.$$('[class="el-menu-item s-flex menu-item"]')];
                case 49:
                    selectPool = _a.sent();
                    return [4 /*yield*/, selectPool[1].click()];
                case 50:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 51:
                    _a.sent();
                    return [4 /*yield*/, newPage.$('[class="el-button el-tooltip el-button--add-liquidity s-typography-button--large el-button--primary el-button--medium neumorphic s-medium s-border-radius-small s-primary"]')];
                case 52:
                    addLiqudity = _a.sent();
                    return [4 /*yield*/, addLiqudity.click()];
                case 53:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 54:
                    _a.sent();
                    return [4 /*yield*/, newPage.$('[class="el-button el-tooltip el-button--select-token el-button--plain el-button--small neumorphic s-small s-border-radius-mini s-secondary token-select-button"]')];
                case 55:
                    selectToken = _a.sent();
                    return [4 /*yield*/, selectToken.click()];
                case 56:
                    _a.sent();
                    return [4 /*yield*/, newPage.$$('[class="token-item"]')];
                case 57:
                    tokenItem = _a.sent();
                    return [4 /*yield*/, tokenItem[2].click()];
                case 58:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 59:
                    _a.sent();
                    return [4 /*yield*/, newPage.$('[class="s-input s-input--token-value neumorphic s-border-radius-small s-size-medium"] input')];
                case 60:
                    inputToken = _a.sent();
                    return [4 /*yield*/, inputToken.type('100')];
                case 61:
                    _a.sent();
                    return [4 /*yield*/, timeout_1.timeout(1000)];
                case 62:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); }, 50000);
});
//# sourceMappingURL=checkInstallExtension.test.js.map