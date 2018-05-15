import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { validate as validateForm, normalize as normalizeForm, submit as submitForm } from './form-helpers';
import renderField from './render-field';

import { addFormData } from 'actions/login';

// ====

class FormComponent extends React.Component {
    resetForm() {
        const { reset, addFormData } = this.props;

        reset('login');
        addFormData({});
    }

    render() {
        const { handleSubmit, pristine, submitting, submitForm } = this.props;

        return(
            <form onSubmit={handleSubmit(submitForm)}>
                <Field
                    name="username"
                    type="text"
                    component={renderField}
                    label="Username"
                    placeholder="your username"
                />

                <Field
                    name="email"
                    type="email"
                    component={renderField}
                    label="E-mail"
                    placeholder="your email"
                />

                <Field
                    name="uf"
                    type="text"
                    component={renderField}
                    normalize={normalizeForm}
                    label="UF"
                    placeholder="your uf code"
                />

                <div className="field is-grouped">
                    <div className="control">
                        <button
                            type="button"
                            className="button is-text"
                            disabled={pristine || submitting}
                            onClick={() => this.resetForm()}>
                            Cancel
                        </button>
                    </div>

                    <div className="control">
                        <button
                            type="submit"
                            className="button is-link"
                            disabled={pristine || submitting}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
};

// ====

FormComponent.propTypes = {
    submitForm: PropTypes.func
};

// ====

FormComponent = reduxForm({
    form: 'login',
    enableReinitialize: true,
    onSubmit: submitForm,
    validate: validateForm,
})(FormComponent);

// ====

const mapStateToProps = (state) => {
    return {
        initialValues: state.login.formData
    };
};

const mapDispatchToProps = {
    addFormData
};

FormComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);

// ====

export default FormComponent;
