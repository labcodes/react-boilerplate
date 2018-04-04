import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'containers/main';
import 'assets/styles/index.css';

import store from 'store';

import registerServiceWorker from './registerServiceWorker';

// ====

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    root
);

// ====

registerServiceWorker();
