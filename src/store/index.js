import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import actions from '../actions';

// ====

const store = createStore(
    actions,
    applyMiddleware(logger)
);

// ====

export default store;
