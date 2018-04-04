import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

// ====

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <main>
            <aside className="nav-list">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
            </aside>

            <Route {...rest} render={(props) => (
                <Component {...props} />
            )} />
        </main>
    );
};

// ====

export default PublicRoute;
