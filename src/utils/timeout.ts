/* eslint-disable @typescript-eslint/no-explicit-any */
export const timeout = (ms: number, log = true): Promise<void> =>
    new Promise((resolve): any => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
