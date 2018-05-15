import { ADD_FORM_DATA } from 'actions/login/types';
import initialState from 'actions/login/state';

// ====

export const addFormData = (val) => ({
    type: ADD_FORM_DATA,
    payload: val
});

// ====

const replaceObj = (payload) => Object.assign({}, payload);

// ====

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_FORM_DATA:
            return {
                ...state,
                formData: replaceObj(payload)
            }

        default:
            return state;
    }
}
