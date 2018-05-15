import reducer, { addFormData } from '../index';
import initialState from '../state';

// ====

describe('Login reducer', () => {
    let initialObj;

    beforeEach(() => {
        initialObj = Object.assign({}, initialState);
    });

    test('Should return the initial state.', () => {
        const result = reducer(undefined, { type: 'ANYTHING' });
        expect(result).toBeDefined();
    });

    describe('ADD_FORM_DATA', () => {
        test('Should update the formData.', () => {
            const formData = {
                username: 'manochao',
                email: 'manochao@labcodes.com.br',
                uf: 'PE'
            };

            const action = addFormData(formData);
            const result = reducer(initialObj, action);

            expect(result.formData.username).toEqual(formData.username);
            expect(result.formData.email).toEqual(formData.email);
            expect(result.formData.uf).toEqual(formData.uf);
        });
    });
});
