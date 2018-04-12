'use strict';

import React from 'react';

// Test helpers
import renderer from 'react-test-renderer';

// Component
import NotFound from 'containers/not-found';

// ====

describe('NotFound [Snapshot]', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<NotFound />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
