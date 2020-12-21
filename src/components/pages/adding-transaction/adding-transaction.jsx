import React, { useState, useEffect } from 'react';

import { Container } from '../../ui/container';
import { Plate } from '../../ui/plate';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';

import { keys, stringify } from '../../../utils/other';

import styles from './adding-transaction.module.scss';

const INITIAL_STATE = {
    type: {
        label: 'Тип операции',
        value: 'purchase',
    },
    ticker: {
        label: 'Тикер',
        value: '',
    },
    tickerType: {
        label: 'Тип тикера',
        value: 'action',
    },
    currency: {
        label: 'Валюта операции',
        value: 'rub',
    },
    quantity: {
        label: 'Количество',
        value: '',
    },
    sum: {
        label: 'Сумма покупки в рублях',
        value: '',
    },
    commission: {
        label: 'Комиссия брокера',
        value: '',
    },
    date: {
        label: 'Дата операции в формате "HH:mm dd.MM.yyyy"',
        value: '',
    },
};

export const AddingTransaction = () => {
    const [storage, setStorage] = useState(null);
    const [state, setState] = useState(INITIAL_STATE);

    useEffect(() => {
        setStorage(window.localStorage);
    }, [window]);

    const handleChange = (name, value) => {
        const field = state[name];
        setState({
            ...state,
            [name]: {
                ...field,
                value,
            },
        });
    };

    const handleBlur = () => {
        const values = keys(state).map((field) => ({ field: state[field] }));

        if (storage !== null) {
            storage.setItem('transactions', stringify(values));
        }
    };

    const handleSave = () => {
        setState(INITIAL_STATE);
    };

    return (
        <Container className={ styles.container }>
            <Plate isActive>
                <div className={ styles.fields }>
                    {
                        keys(state).map((field) => (
                            <Input
                                className={ styles.field }
                                name={ field }
                                label={ state[field].label }
                                value={ state[field].value }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />
                        ))
                    }
                </div>
                <Button
                    className={ styles.save }
                    onClick={ handleSave }
                >
                    Сохранить
                </Button>
            </Plate>
        </Container>
    )
};
