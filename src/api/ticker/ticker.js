import { request } from '../request';

export const getTickerInfo = async (ticker) => {
    return await request({
        url: `https://iss.moex.com/iss/engines/stock/markets/shares/securities/${ticker}.json`,
    });
}
