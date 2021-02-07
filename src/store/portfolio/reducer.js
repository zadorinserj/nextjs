import { createReducer } from 'redux-act';

import * as portfolioActions from './actions';

const INITIAL_STATE = {
    portfolio: null,
    assets: null,
    operations: null,
};

const reducer = createReducer({}, INITIAL_STATE);

reducer.on(portfolioActions.savePortfolio, (state, payload) => {
    return {
        ...state,
        portfolio: payload,
    };
});

reducer.on(portfolioActions.saveAssets, (state, payload) => {
    const { payload: { currencies } } = payload;

    return {
        ...state,
        assets: currencies,
    };
});

reducer.on(portfolioActions.saveOperations, (state, payload) => {
    const { payload: { operations } } = payload;

    return {
        ...state,
        operations,
    };
});

export default reducer;
