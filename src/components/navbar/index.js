import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

// ====

const Navbar = ({ logged }) => {
    let loggedMenu = null;

    if (logged) {
        loggedMenu = (
            <Link to='/dashboard'>Dashboard</Link>
        );
    }

    return (
        <aside className="nav-list">
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            { loggedMenu }
        </aside>
    );
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
)(Navbar);
