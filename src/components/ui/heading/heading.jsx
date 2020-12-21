import React from 'react';

import classNames from 'classnames/bind';
import styles from './heading.module.scss';
const cx = classNames.bind(styles);

export const Heading = ({
    className,
    children,
}) => {
    return (
        <h2 className={ cx(styles.heading, className) }>
            { children }
        </h2>
    )
};
