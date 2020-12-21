import React, { useEffect } from 'react';

import { Container } from '../../ui/container';
import { Plate } from '../../ui/plate';
import { Input } from '../../ui/input';

import { getTickerInfo } from '../../../api/ticker/ticker';

import styles from './dashboard.module.scss';

const CONTENT = [
    {
        id: '#1',
        title: 'title',
        text: 'text',
    },
    {
        id: '#2',
        title: 'title',
        text: 'text',
    },
    {
        id: '#3',
        title: 'title',
        text: 'text',
    },
    {
        id: '#4',
        title: 'title',
        text: 'text',
    },
];

export const Dashboard = ({}) => {
    useEffect(() => {
        getTickerInfo('GAZP').then(({ data: { marketdata } }) => {
            const tickerPrice = marketdata.data.filter((d) => {
                return ['TQBR', 'TQTF'].indexOf(d[1]) !== -1;
            })[0][12];
            console.log(tickerPrice)
        });
    }, []);

    return (
        <Container>
            <div className={ styles.dashboard }>
                Страница Дашборда
                <div className={ styles.plates }>
                    {
                        CONTENT.map(({ id, title, text }) => (
                            <Plate className={ styles.plate } key={ id }>
                                <Input label='Лейбл' />
                            </Plate>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};
