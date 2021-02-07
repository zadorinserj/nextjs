import React, { useState, useEffect } from 'react';
import {
    string,
    func,
} from 'prop-types';

import classNames from 'classnames/bind';
import styles from './input.module.scss';
const cx = classNames.bind(styles);

export const Input = ({
    className,
    name,
    type,
    value,
    label,
    onChange,
    onFocus,
    onBlur
}) => {
    const [focused, setFocused] = useState(false);
    const [stateValue, setValue] = useState('');

    const handleChange = (event) => {
        event.persist();
        const { target } = event;

        setValue(target.value);
        onChange(name, target.value);
    };

    const handleFocus = () => {
        setFocused(true);

        onFocus();
    }

    const handleBlur = () => {
        setFocused(false);

        onBlur();
    };

    useEffect(() => {
        if (value !== stateValue) {
            setValue(value);
        }
    }, [value]);

    return (
        <label
            className={ cx(
                className,
                styles.field,
                {
                    focused,
                    has_value: value?.length > 0 || stateValue?.length > 0
                }
            ) }
        >
            { label && (
                <span className={ styles.label }>
                    { label }
                </span>
            ) }
            <input
                className={ styles.input }
                name={ name }
                type={ type }
                value={ value !== undefined ? value : stateValue }
                onChange={ handleChange }
                onFocus={ handleFocus }
                onBlur={ handleBlur }
            />
        </label>
    )
};

Input.propTypes = {
    className: string,
    name: string,
    type: string,
    value: string,
    label: string,
    onChange: func,
    onFocus: func,
    onBlur: func
};

Input.defaultProps = {
    className: null,
    name: null,
    type: 'text',
    value: undefined,
    label: null,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {}
};
