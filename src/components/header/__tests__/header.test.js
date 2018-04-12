'use strict';

import React from 'react';

// Test helpers
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

// Component
import Header from 'components/header';

// ====

describe('Header [Snapshot]', () => {
    it('Renders correctly', () => {
        const tree = renderer.create(<Header />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});

