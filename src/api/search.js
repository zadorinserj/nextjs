import { request } from './request';

import {
    TINKOFF_SANDBOX_API,
    TINKOFF_API_TOKEN,
} from '../constants/tinkoff-api';

const searchTypes = {
    ticker: 'by-ticker',
    figi: 'by-figi',
};

export const search = (by = searchTypes.ticker, searchString) => request({
    method: 'GET',
    headers: {
        Authorization: `Bearer ${TINKOFF_API_TOKEN}`,
    },
    url: `${TINKOFF_SANDBOX_API}/market/search/${searchTypes[by]}?${by === 'ticker' ? 'ticker' : 'figi'}=${searchString}`,
});

