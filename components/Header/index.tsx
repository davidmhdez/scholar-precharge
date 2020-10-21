import React from 'react';
import headerStyles from './header.module.scss';

function Header() {
    return (
        <header className={headerStyles.header}>
            <h2 className={headerStyles.title}>Generador de precargas</h2>
        </header>
    );
}

export default Header;