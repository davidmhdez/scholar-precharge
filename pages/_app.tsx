import { AppProps } from 'next/app';
import React from 'react';
import '../styles/base-template.scss';

function MyApp({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp;