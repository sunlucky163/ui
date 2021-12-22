import { timeout } from '@Utils/timeout';

type FunctionToWaitFor<T> = () => T;

type Options = {
    timeout?: number;
    interval?: number;
};

const isNotEmptyArray = (result: unknown): boolean => Array.isArray(result) && !!result.length;
const notArrayAndTruthy = (result: unknown): boolean => !Array.isArray(result) && !!result;

export const waitFor = async <T>(func: FunctionToWaitFor<T>, options?: Options): Promise<T> => {
    const endTime = Date.now() + (options?.timeout ?? 10000);
    while (Date.now() < endTime) {
        const result = await func();
        if (isNotEmptyArray(result) || notArrayAndTruthy(result)) {
            return result;
        }
        await timeout(options?.interval ?? 1000, false);
    }
    throw new Error('Timed out.');
};
