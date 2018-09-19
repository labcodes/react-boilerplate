import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

const AppNavbar = styled.aside`
    width: 100%;
    text-align: center;

    a {
        padding: 10px;
        margin: 0 10px;
        display: inline-block;
    }
`;

const Navbar = ({ logged }) => {
    let loggedMenu = null;

    if (logged) {
        loggedMenu = (
            <Link to='/dashboard'>Dashboard</Link>
        );
    }

    return (
        <AppNavbar>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            { loggedMenu }
        </AppNavbar>
    );
};

const mapStateToProps = (state) => {
    return {
        logged: state.system.userIsLogged,
    }
};

export default connect(
    mapStateToProps
)(Navbar);
