"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeout = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
exports.timeout = function (ms, log) {
    if (log === void 0) { log = true; }
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, ms);
    });
};
//# sourceMappingURL=timeout.js.map