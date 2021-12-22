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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Browser = void 0;
var puppeteer = require("puppeteer");
var config_1 = require("@Core/config");
var launchers_1 = require("@Constants/launchers");
var page_1 = require("@Core/page");
var p_iteration_1 = require("p-iteration");
var Browser = /** @class */ (function () {
    function Browser() {
        var launcher = new config_1.Config().get('launcher');
        this.launcher = launchers_1.launchers[launcher];
    }
    Browser.prototype.launch = function (args) {
        if (args === void 0) { args = []; }
        return __awaiter(this, void 0, Promise, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.launcher.args = __spreadArrays(this.launcher.args, args);
                        _a = this;
                        return [4 /*yield*/, puppeteer.launch(this.launcher)];
                    case 1:
                        _a.browser = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Browser.prototype.getPage = function (viewPort) {
        if (viewPort === void 0) { viewPort = {
            width: 1280,
            height: 1000,
        }; }
        return __awaiter(this, void 0, Promise, function () {
            var puppeteerPage, page;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.newPage()];
                    case 1:
                        puppeteerPage = _a.sent();
                        return [4 /*yield*/, puppeteerPage.emulate({
                                viewport: viewPort,
                                userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
                            })];
                    case 2:
                        _a.sent();
                        page = new page_1.Page(puppeteerPage);
                        return [2 /*return*/, page];
                }
            });
        });
    };
    Browser.prototype.pages = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.browser.pages()];
            });
        });
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    Browser.prototype.targets = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.browser.targets()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Browser.prototype.close = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = p_iteration_1.forEachSeries;
                        return [4 /*yield*/, this.browser.pages()];
                    case 1: return [4 /*yield*/, _a.apply(void 0, [_b.sent(),
                            function (page) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, page.close({ runBeforeUnload: true })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); }])];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, this.browser.close()];
                    case 3:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Browser;
}());
exports.Browser = Browser;
//# sourceMappingURL=browser.js.map