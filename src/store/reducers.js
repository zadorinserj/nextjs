import { combineReducers } from 'redux';

import portfolioReducer from './portfolio';

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
});

export default rootReducer;
