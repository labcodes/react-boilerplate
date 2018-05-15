import store from 'store';
import { addFormData } from 'actions/login';

// ====

const normalize = (value) => value && value.toUpperCase();

const validate = (values) => {
    let errors = {};

    if (!values.username) {
        errors.username = 'This field is required!';
    } else if (!values.email) {
        errors.email = 'The e-mail field is required';
    }

    return errors;
};

const submit = (values) => {
    store.dispatch(
        addFormData(values)
    )
};

// ====

export {
    normalize,
    validate,
    submit,
};
