import store from 'store';
// import { addFormContent } from 'actions/system';

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
    console.warn(values);
    // store.dispatch(
    //     addFormContent(values)
    // )
};


// ====

export {
    normalize,
    validate,
    submit,
};

// ====

export default submitForm;
