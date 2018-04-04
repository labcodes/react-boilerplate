import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/app';
import 'assets/styles/index.css';

import store from 'store';

import registerServiceWorker from './registerServiceWorker';

// ====

const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);

// ====

registerServiceWorker();