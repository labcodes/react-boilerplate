import React, { StrictMode } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { compose, withHandlers, withState, lifecycle } from 'recompose';

import { userLogged } from 'actions/system';

import HeaderComponent from 'components/header';
import ErrorBoundary from 'components/error-boundary';
import TransitionComponent from 'components/transition';

import logoUrl from 'assets/images/logo.svg';

const Wrapper = styled.div`
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: large;
`;

const AppMarkup = ({ transitionIn, loggedUser, logged }) => {
  return (
    <StrictMode>
      <TransitionComponent transitionIn={transitionIn}>
        <Wrapper>
          <ErrorBoundary>
            <HeaderComponent
              logo={logoUrl}
              handleButtonClick={loggedUser}
            />
          </ErrorBoundary>

          <Paragraph>
            {logged ? 'User is logged' : 'User is unlogged.'}
          </Paragraph>
        </Wrapper>
      </TransitionComponent>
    </StrictMode>
  );
};

const mapStateToProps = ({ system }) => ({
  logged: system.userIsLogged,
});

const mapDispatchToProps = {
  userLogged
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('transitionIn', 'updateTransition', false),
  withState('logged', 'updateLogged', false),
  withHandlers({
    loggedUser: ({ userLogged, updateLogged, logged }) => () => {
      userLogged(!logged);
      updateLogged(!logged);
    }
  }),
  lifecycle({
    componentWillMount() {
      const { updateTransition } = this.props;
      updateTransition(true);
    }
  }),
);

const AppContainer = enhance(AppMarkup);
export default AppContainer;
