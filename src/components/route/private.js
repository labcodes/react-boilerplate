import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// ====

const Private = ({ component: Component, ...rest }) => {
    return (
        <main>
            <Route {...rest} render={(props) => (
                <Component {...props} />
            )} />
        </main>
    );
};

// ====

export default Private;
