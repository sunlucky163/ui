import { Api } from '@sora-substrate/util';

export class TestApi extends Api {
    public async faucetGetTokens(
        amount: number,
        receiver?: KeyringPair,
        asset?: Asset,
    ): Promise<void> {
        const faucetAssetSymbols = [KnownSymbols.XOR, KnownSymbols.VAL, KnownSymbols.PSWAP];
        const faucetAssets = KnownAssets.filter(item =>
            faucetAssetSymbols.includes(item.symbol as KnownSymbols),
        );

        if (asset) {
            const amountString = new FPNumber(amount, asset.decimals).bnToString();
            const receiverBalance = (
                await (this.api.rpc as any).assets.freeBalance(
                    !receiver ? this.accountPair.address : receiver.address,
                    asset.address,
                )
            )
                .unwrap()
                .balance.toString();
            if (+receiverBalance < +amountString) {
                try {
                    await this.customSubmitExtrinsic(
                        (this.api.tx as any).faucet.transfer(
                            asset.address,
                            receiver.address,
                            amountString,
                        ),
                        receiver,
                        'Get from faucet ' + asset.symbol,
                    );
                } catch (err) {
                    console.log(err);
                }
            }
        } else {
            for (const token of faucetAssets) {
                const amountString = new FPNumber(amount, token.decimals).bnToString();
                const receiverBalance = (
                    await (this.api.rpc as any).assets.freeBalance(
                        !receiver ? this.accountPair.address : receiver.address,
                        token.address,
                    )
                )
                    .unwrap()
                    .balance.toString();
                if (+receiverBalance < +amountString / 100) {
                    await this.customSubmitExtrinsic(
                        (this.api.tx ).faucet.transfer(
                            token.address,
                            this.accountPair.address,
                            amountString,
                        ),
                        this.accountPair,
                        'Get from faucet ' + token.symbol,
                    ).catch(error => {
                        console.log(error);
                        throw error;
                    });
                } else {
                }
            }
        }
    }
}
