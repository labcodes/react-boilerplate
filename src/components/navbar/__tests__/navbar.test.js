'use strict';

import React from 'react';

// Test helpers
import renderer from 'react-test-renderer';

// Components connected
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';

// Component
import Navbar from 'components/navbar';

// ====

describe('Navbar [Snapshot]', () => {
    it('Renders correctly', () => {
        const component = (
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );

        const tree = renderer.create(component).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
