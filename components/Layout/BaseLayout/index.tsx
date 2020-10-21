import React, { ReactNode } from 'react';
import Header from '../../Header';
import Helmets from './components/Helmet';

type Props = {
    children: ReactNode
}

function Layout({children}: Props) {
    return (
        <>
            <Helmets/>
            <Header/>
            <main>
                {children}
            </main>
        </>
    );
}

export default Layout;