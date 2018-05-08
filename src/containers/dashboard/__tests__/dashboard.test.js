'use strict';

import React from 'react';

// Test helpers
import renderer from 'react-test-renderer';

// Component
import Dashboard from 'containers/dashboard';

// ====

describe('Dashboard [Snapshot]', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

