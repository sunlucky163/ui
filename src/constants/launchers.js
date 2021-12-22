"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchers = void 0;
var defaultArgs = ['--embedded-extension-options', '--enable-experimental-extension-apis'];
var paths = 'C:\\Users\\mishu\\Docker\\extension-master\\packages\\extension\\build';
exports.launchers = {
    debug: {
        args: __spreadArrays(defaultArgs, [
            '--start-maximized',
            "--disable-extensions-except=" + paths,
            "--load-extension=" + paths,
        ]),
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
//# sourceMappingURL=launchers.js.map