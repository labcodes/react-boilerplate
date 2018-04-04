import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import PublicRoute from 'components/route/public';

import AppContainer from 'containers/app';
import LoginContainer from 'containers/login';
import NotFoundContainer from 'containers/not-found';

// ====
const browserHistory = createBrowserHistory();

const Main = () => {
    return(
        <Router history={browserHistory}>
            <Switch>
                {/* <Route path='/' exact render={() => (<Redirect to='/dashboard' />)} /> */}
                {/* <PrivateRoute path='/dashboard' component={App} logged={userLogged} /> */}

                <PublicRoute exact path='/' component={AppContainer} />
                <PublicRoute path='/login' component={LoginContainer} />

                <Route component={NotFoundContainer} />
            </Switch>
        </Router>
    )
};

// ====

export default Main;
