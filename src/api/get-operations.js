import { request } from './request';

import {
    TINKOFF_SANDBOX_API,
    TINKOFF_API_TOKEN,
    TINKOFF_ACCOUNT_ID,
} from '../constants/tinkoff-api';

export const getOperations = () => request({
    method: 'GET',
    headers: {
        Authorization: `Bearer ${TINKOFF_API_TOKEN}`,
    },
    url: `${TINKOFF_SANDBOX_API}/operations?brokerAccountId=${TINKOFF_ACCOUNT_ID}&from=${new Date('01 01 2020').toISOString()}&to=${new Date('02 02 2021').toISOString()}`,
});

