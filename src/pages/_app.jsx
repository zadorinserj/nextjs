import React from 'react';
import Head from 'next/head';
import { Provider } from 'react-redux'
import { useStore } from '../store';

import styles from './_index.css';

const App = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={ store }>
            <Head>
                <title>Инвест портфель</title>
            </Head>
            <Component { ...pageProps } />
        </Provider>
    );
};

App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
};

export default App;
