import React, { StrictMode } from 'react';
import { connect } from 'react-redux';

import { userLogged } from 'actions/dashboard'

import HeaderComponent from 'components/header';
import ErrorBoundary from 'components/error-boundary';

import logoUrl from 'assets/images/logo.svg';
import './style.css';

// ====

class App extends React.Component {
    constructor(props) {
        super(props);

        this.loggedUser = this.loggedUser.bind(this);
    }

    loggedUser() {
        const { userLogged, logged } = this.props;
        userLogged(!logged);
    }

    render() {
        const { logged } = this.props;

        return (
            <StrictMode>
                <div className="App">
                    <ErrorBoundary>
                        <HeaderComponent
                            logo={logoUrl}
                            handleButtonClick={this.loggedUser}
                        />
                    </ErrorBoundary>

                    <p className="App-intro">
                        { logged ? 'User is logged' : 'User is unlogged.' }
                    </p>
                </div>
            </StrictMode>
        );
    }
}

// ====

const mapStateToProps = (state) => {
    return {
        logged: state.dashboard.userIsLogged,
    }
};

const mapDispatchToProps = {
    userLogged
};

// ====

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
