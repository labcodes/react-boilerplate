import { USER_LOGGED } from 'actions/system/types';

// ====

const initialState = {
    userIsLogged: false
};

// ====

export const userLogged = (val) => ({
    type: USER_LOGGED,
    payload: val
});

// ====

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_LOGGED:
            return {
                ...state,
                userIsLogged: payload
            }

        default:
            return state;
    }
}
