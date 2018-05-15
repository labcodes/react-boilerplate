import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import system from './system';
import login from './login';

// ====

export default combineReducers({
    system,
    login,
    form
});
