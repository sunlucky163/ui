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
exports.Page = void 0;
var element_1 = require("@Core/element");
var util_1 = require("util");
var Page = /** @class */ (function () {
    function Page(page) {
        this.page = page;
    }
    Page.prototype.goto = function (url, options) {
        if (options === void 0) { options = {
            waitUntil: 'domcontentloaded',
        }; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.goto(url, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.on = function (eventName, handler) {
        this.page.on(eventName, handler);
    };
    Page.prototype.getPage = function () {
        return this.page;
    };
    Page.prototype.mouseMove = function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.mouse.move(x, y)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.waitFor = function (selector, options) {
        if (options === void 0) { options = { visible: true }; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, Promise, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(typeof selector === 'number')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.page.waitFor(selector)];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, (_a = this.page).waitFor.apply(_a, __spreadArrays([selector, options], args))];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.screenShot = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.screenshot(options)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Page.prototype.waitForXPath = function (xpath, options) {
        if (options === void 0) { options = { visible: true }; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.waitForXPath(xpath, options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.$ = function (selector) {
        return __awaiter(this, void 0, Promise, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = element_1.Element.bind;
                        return [4 /*yield*/, this.page.$(selector)];
                    case 1: return [2 /*return*/, new (_a.apply(element_1.Element, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    Page.prototype.$$ = function (selector) {
        return __awaiter(this, void 0, Promise, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.$$(selector)];
                    case 1:
                        elements = _a.sent();
                        return [2 /*return*/, elements.map(function (element) { return new element_1.Element(element); })];
                }
            });
        });
    };
    Page.prototype.$x = function (selector) {
        return __awaiter(this, void 0, Promise, function () {
            var element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.$$x(selector)];
                    case 1:
                        element = (_a.sent())[0];
                        return [2 /*return*/, element];
                }
            });
        });
    };
    Page.prototype.$$x = function (selector) {
        return __awaiter(this, void 0, Promise, function () {
            var elements;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.$x(selector)];
                    case 1:
                        elements = _a.sent();
                        return [2 /*return*/, elements.map(function (element) { return new element_1.Element(element); })];
                }
            });
        });
    };
    Page.prototype.getByText = function (text) {
        return __awaiter(this, void 0, Promise, function () {
            var selector;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        selector = util_1.format('//*[contains(text(), "%s")]', text);
                        return [4 /*yield*/, this.$x(selector)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Page.prototype.type = function (text) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.element.focus()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.element.type(text)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.getInstance = function () {
        return this.page;
    };
    Page.prototype.waitForNavigation = function (options) {
        if (options === void 0) { options = { waitUntil: 'domcontentloaded' }; }
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.waitForNavigation(options)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Page.prototype.url = function () {
        return this.page.url();
    };
    Page.prototype.close = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.close()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Page;
}());
exports.Page = Page;
//# sourceMappingURL=page.js.map