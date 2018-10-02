import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import Navbar from 'components/navbar';

const Private = ({ logged, component: Component, ...rest }) => {
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
};

const mapStateToProps = ({ system }) => ({
  logged: system.userIsLogged,
});

const enhance = compose(
  connect(mapStateToProps),
);

export default enhance(Private);
