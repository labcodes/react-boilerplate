import React from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import PublicRoute from 'components/route/public';
import PrivateRoute from 'components/route/private';

import AppContainer from 'containers/app';
import LoginContainer from 'containers/login';
import DashComponent from 'containers/dashboard';
import NotFoundContainer from 'containers/not-found';

// ====
const browserHistory = createBrowserHistory();

const Main = () => {
    return(
        <Router history={browserHistory}>
            <Switch>
                <PublicRoute exact path='/' component={AppContainer} />
                <PublicRoute path='/login' component={LoginContainer} />

                <PrivateRoute path='/dashboard' component={DashComponent} />

                <Route component={NotFoundContainer} />
            </Switch>
        </Router>
    )
};

// ====

export default Main;
