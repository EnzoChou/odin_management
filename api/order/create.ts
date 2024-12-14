export default async function (orders: order[]) {
    let error: unknown | null = null;
    let message: string = '';
    try {
        await new Promise((resolve) =>
            setTimeout(() =>
                resolve(1), 1000));
    } catch (err: unknown) {
        orders = [];
        error = true;
        error = err;
    } finally {
        return {
            orders,
            error,
            message
        };
    }
};