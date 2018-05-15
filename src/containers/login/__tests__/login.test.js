'use strict';

import React from 'react';

// Test helpers
import renderer from 'react-test-renderer';

// Containers connected
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';

// Component
import Login from 'containers/login';

// ====

describe('Login [Snapshot]', () => {
    it('Renders correctly', () => {
        const component = (
            <BrowserRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </BrowserRouter>
        );

        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
