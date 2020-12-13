import React from 'react';
import Head from 'next/head';

import { Plate } from '../components/ui/plate';

const IndexPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
                <Plate />
            </Head>
        </div>
    )
}

export default IndexPage
