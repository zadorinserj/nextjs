import { request } from './request';

import {
    TINKOFF_SANDBOX_API,
    TINKOFF_API_TOKEN,
} from '../constants/tinkoff-api';

export const portfolio = (path = '') => request({
    method: 'GET',
    headers: {
        Authorization: `Bearer ${TINKOFF_API_TOKEN}`,
    },
    url: `${TINKOFF_SANDBOX_API}/portfolio${path}?brokerAccountId=2011401565`,
});

