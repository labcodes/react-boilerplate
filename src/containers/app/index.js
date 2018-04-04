import React from 'react';
import { connect } from 'react-redux';

import { userLogged } from 'actions/dashboard'

import HeaderComponent from 'components/header';

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
            <div className="App">
                <HeaderComponent
                    logo={logoUrl}
                    handleButtonClick={this.loggedUser}
                />

                <p className="App-intro">
                    { logged ? 'User is logged' : 'User is unlogged.' }
                </p>
            </div>
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
