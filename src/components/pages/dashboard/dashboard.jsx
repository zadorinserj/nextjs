import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../ui/container';
import { Plate } from '../../ui/plate';
import { Input } from '../../ui/input';

import {
    getPortfolio,
    getAssets,
    getFigis,
    getOperations,
} from '../../../store/portfolio/actions';

import portfolioSelectors from '../../../store/portfolio/selectors';

import styles from './dashboard.module.scss';

export const Dashboard = ({}) => {
    const dispatch = useDispatch();

    const portfolio = useSelector(portfolioSelectors.portfolio);
    const operations = useSelector(portfolioSelectors.operations);

    const [figis, setFigis] = useState(null);
    const [operationsState, setOperationsState] = useState({
        commissions: 0,
    });

    useEffect(() => {
        dispatch(getPortfolio());
        dispatch(getAssets());
        dispatch(getOperations());
    }, [dispatch]);

    useEffect(() => {
        if (portfolio !== null) {
            let sum = 0;
            const figiNames = [];

            portfolio.forEach(({
                figi,
                balance,
                averagePositionPrice: { currency, value },
            }) => {
                figiNames.push(figi);
            });

            setFigis(figiNames);
        }
    }, [portfolio]);

    useEffect(() => {
        if (operations !== null) {
            const state = operationsState;

            operations.forEach((operation) => {
                const {
                    operationType,
                    figi,
                    payment,
                } = operation;

                if (operationType === 'BrokerCommission') {
                    state.commissions = state.commissions + (payment * -1);
                }
            });

            console.log(state);
            setOperationsState(state);
        }
    }, [operations]);

    useEffect(() => {
        // if (figis !== null) {
        //     dispatch(getFigis(figis));
        // }
    }, [figis]);

    // TODO Настроить запросы к МосБирже
    // useEffect(() => {
    //     getTickerInfo('GAZP').then(({ data: { marketdata } }) => {
    //         const tickerPrice = marketdata.data.filter((d) => {
    //             return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1;
    //         })[0][12];
    //         console.log(tickerPrice)
    //     });
    // }, []);

    return (
        <Container>
            <div className={ styles.dashboard }>
                Dashboard
                <div className={ styles.plates }>
                    {
                        operationsState.commissions
                    }
                </div>
            </div>
        </Container>
    );
};
