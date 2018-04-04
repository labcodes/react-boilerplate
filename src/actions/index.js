import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import dashboard from './dashboard';

// ====

export default combineReducers({
    dashboard,
    form
});