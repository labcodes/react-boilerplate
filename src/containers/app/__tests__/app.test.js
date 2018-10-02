import React from 'react';
import { shallow } from 'enzyme';

// Test helpers
import renderer from 'react-test-renderer';

// Containers connected
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';

// Component
import App from 'containers/app';

describe('App [Snapshot]', () => {
  it('Renders correctly', () => {
    const component = (
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should render the message [User is logged].', () => {
    const component = shallow(
      <BrowserRouter>
        <Provider store={store}>
          <App logged={false} />
        </Provider>
      </BrowserRouter>
    );
    // const paragraph = component.children().find('p');
    // console.warn(paragraph.text())
    // expect(paragraph.text()).toEqual('User is logged');
  });
});
