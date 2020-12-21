import React from 'react';

import classNames from 'classnames/bind';
import styles from './plate.module.scss';
const cx = classNames.bind(styles);

export const Plate = ({
    className,
    isActive,
    children,
}) => {
    return (
        <div className={ cx(styles.plate, className, { [styles.active]: isActive }) }>
            { children }
        </div>
    );
};
