import React, { StrictMode } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transitionIn: false
        };

        this.loggedUser = this.loggedUser.bind(this);
    }

    componentDidMount() {
        this.setState({ transitionIn: true });
    }

    loggedUser() {
        const { userLogged, logged } = this.props;
        userLogged(!logged);
    }

    render() {
        const { logged } = this.props;
        const { transitionIn } = this.state;

        return (
            <StrictMode>
                <TransitionComponent transitionIn={transitionIn}>
                    <Wrapper>
                        <ErrorBoundary>
                            <HeaderComponent
                                logo={logoUrl}
                                handleButtonClick={this.loggedUser}
                            />
                        </ErrorBoundary>

                        <Paragraph>
                            { logged ? 'User is logged' : 'User is unlogged.' }
                        </Paragraph>
                    </Wrapper>
                </TransitionComponent>
            </StrictMode>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        logged: state.system.userIsLogged,
    }
};

const mapDispatchToProps = {
    userLogged
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
