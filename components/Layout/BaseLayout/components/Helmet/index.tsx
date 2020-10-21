import React from 'react';
import Helmet from 'react-helmet';

function Helmets() {
    return (
        <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Helmet>
    );
}

export default Helmets;