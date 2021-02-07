import { createAction } from 'redux-act';

import {
    portfolio as portfolioRequest,
    search as searchRequest,
    getOperations as getOperationsRequest,
} from '../../api';

export const savePortfolio = createAction(
    'portfolio/SAVE_PORTFOLIO',
    (payload) => (payload),
);

export const saveAssets = createAction(
    'portfolio/SAVE_ASSETS',
    (payload) => (payload),
);

export const saveOperations = createAction(
    'portfolio/SAVE_OPERATIONS',
    (payload) => (payload),
);

export const getPortfolio = () => async (dispatch, getState) => {
    try {
        const { data } = await portfolioRequest();

        const { payload: { positions } } = data;

        dispatch(savePortfolio(positions));
    } catch (error) {
        console.log(error);
    }
};

export const getAssets = () => async (dispatch, getState) => {
    try {
        const { data } = await portfolioRequest('/currencies');

        dispatch(saveAssets(data));
    } catch (error) {
        console.log(error);
    }
};

export const getFigis = (figis) => (dispatch, getState) => {
    const promises = figis.map((figi) => {
        return searchRequest('figi', figi);
    })

    Promise.all(promises).then((results) => {
        console.log(results, 'results');
    })
};

export const getOperations = () => async (dispatch, getState) => {
    try {
        const { data } = await getOperationsRequest();

        dispatch(saveOperations(data));
    } catch (error) {
        console.log(error);
    }
};
