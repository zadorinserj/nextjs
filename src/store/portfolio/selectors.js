import { createSelector } from 'reselect';

const storeSelector = (store) => store.portfolio;

const portfolio = createSelector(storeSelector, (store) => store.portfolio);
const operations = createSelector(storeSelector, (store) => store.operations);

export default {
    portfolio,
    operations,
};
