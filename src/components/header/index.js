import React from 'react';
import PropTypes from 'prop-types';

// ====

const HeaderComponent = ({ logo, handleButtonClick }) => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            <h1 className="App-title">Welcome to React</h1>

            <button onClick={() => handleButtonClick()}>
                change user status
            </button>
        </header>
    )
};

// ====

HeaderComponent.defaultProps = {
    logo: ''
};

HeaderComponent.propTypes = {
    logo: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func
};

// ====

export default HeaderComponent;