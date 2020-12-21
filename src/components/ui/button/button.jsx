import React from 'react';

import classNames from 'classnames/bind';
import styles from './button.module.scss';
const cx = classNames.bind(styles);

export const Button = ({
    className,
    children,
    onClick,
}) => {
    return (
        <button
            className={ cx(styles.button, className) }
            onClick={ onClick }
        >
            { children }
        </button>
    )
};
