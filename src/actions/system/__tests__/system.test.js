import reducer, { userLogged } from '../index';
import initialState from '../state';

// ====

describe('System reducer', () => {
    let initialObj;

    beforeEach(() => {
        initialObj = Object.assign({}, initialState);
    });

    test('Should return the initial state.', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toBeDefined();
    });

    describe('USER_LOGGED', () => {
        test('Should change the userIsLogged to true.', () => {
            const action = userLogged(true);
            const result = reducer(initialObj, action);

            expect(result.userIsLogged).toEqual(true);
        });

        test('Should change the userIsLogged to false.', () => {
            initialObj = { userIsLogged: true };

            const action = userLogged(false);
            const result = reducer(initialObj, action);

            expect(result.userIsLogged).toEqual(false);
        });
    });
});
