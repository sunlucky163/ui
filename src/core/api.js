"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.TestApi = void 0;
var util_1 = require("@sora-substrate/util");
var TestApi = /** @class */ (function (_super) {
    __extends(TestApi, _super);
    function TestApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestApi.prototype.faucetGetTokens = function (amount, receiver, asset) {
        return __awaiter(this, void 0, Promise, function () {
            var faucetAssetSymbols, faucetAssets, amountString, receiverBalance, err_1, _i, faucetAssets_1, token, amountString, receiverBalance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        faucetAssetSymbols = [KnownSymbols.XOR, KnownSymbols.VAL, KnownSymbols.PSWAP];
                        faucetAssets = KnownAssets.filter(function (item) {
                            return faucetAssetSymbols.includes(item.symbol);
                        });
                        if (!asset) return [3 /*break*/, 6];
                        amountString = new FPNumber(amount, asset.decimals).bnToString();
                        return [4 /*yield*/, this.api.rpc.assets.freeBalance(!receiver ? this.accountPair.address : receiver.address, asset.address)];
                    case 1:
                        receiverBalance = (_a.sent())
                            .unwrap()
                            .balance.toString();
                        if (!(+receiverBalance < +amountString)) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.customSubmitExtrinsic(this.api.tx.faucet.transfer(asset.address, receiver.address, amountString), receiver, 'Get from faucet ' + asset.symbol)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 5];
                    case 5: return [3 /*break*/, 11];
                    case 6:
                        _i = 0, faucetAssets_1 = faucetAssets;
                        _a.label = 7;
                    case 7:
                        if (!(_i < faucetAssets_1.length)) return [3 /*break*/, 11];
                        token = faucetAssets_1[_i];
                        amountString = new FPNumber(amount, token.decimals).bnToString();
                        return [4 /*yield*/, this.api.rpc.assets.freeBalance(!receiver ? this.accountPair.address : receiver.address, token.address)];
                    case 8:
                        receiverBalance = (_a.sent())
                            .unwrap()
                            .balance.toString();
                        if (!(+receiverBalance < +amountString / 100)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.customSubmitExtrinsic((this.api.tx).faucet.transfer(token.address, this.accountPair.address, amountString), this.accountPair, 'Get from faucet ' + token.symbol).catch(function (error) {
                                console.log(error);
                                throw error;
                            })];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 10:
                        _i++;
                        return [3 /*break*/, 7];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    return TestApi;
}(util_1.Api));
exports.TestApi = TestApi;
//# sourceMappingURL=api.js.map