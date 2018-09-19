import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const AppHeader = styled.header`
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
`;

const AppTitle = styled.h1`
    font-size: 1.5em;
`;

const AppLogoSpin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
    animation: ${AppLogoSpin} infinite 20s linear;
    height: 80px;
`;

const HeaderComponent = ({ logo, handleButtonClick }) => {
    return(
        <AppHeader>
            <AppLogo src={logo} alt="logo" />

            <AppTitle>Welcome to React</AppTitle>

            <button onClick={() => handleButtonClick()}>
                change user status
            </button>
        </AppHeader>
    )
};

HeaderComponent.defaultProps = {
    logo: ''
};

HeaderComponent.propTypes = {
    logo: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func
};

export default HeaderComponent;
