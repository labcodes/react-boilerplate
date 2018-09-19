import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from 'containers/dashboard';

describe('Dashboard [Snapshot]', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Dashboard />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

