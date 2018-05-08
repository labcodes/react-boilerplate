import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from 'components/navbar';

// ====

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <main>
            <Navbar />

            <Route {...rest} render={(props) => (
                <Component {...props} />
            )} />
        </main>
    );
};

// ====

export default PublicRoute;
