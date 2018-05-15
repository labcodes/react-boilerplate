'use strict';

import React from 'react';

// Test helpers
import renderer from 'react-test-renderer';

// Component
import Transition from 'components/transition';

// ====

describe('Transition [Snapshot]', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Transition />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly', () => {
        const tree = renderer.create(<Transition customClass="ds" />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

