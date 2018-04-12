'use strict';

import React from 'react';

// Test helpers
import renderer from 'react-test-renderer';

// Component
import Login from 'containers/login';

// ====

describe('Login [Snapshot]', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Login />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
