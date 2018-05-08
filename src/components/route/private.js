import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from 'components/navbar';

// ====

class Private extends React.Component {
    render() {
        const { logged, component: Component, ...rest } = this.props;

        if (!logged) {
            return <Redirect to='/login' />;
        }

        return (
            <main>
                <Navbar />

                <Route {...rest} render={(props) => (
                    <Component {...props} />
                )} />
            </main>
        );
    }
};

// ====

const mapStateToProps = (state) => {
    return {
        logged: state.system.userIsLogged,
    }
};

// ====

export default connect(
    mapStateToProps
)(Private);
