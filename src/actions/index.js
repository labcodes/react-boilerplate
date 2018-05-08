import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import system from './system';

// ====

export default combineReducers({
    system,
    form
});
