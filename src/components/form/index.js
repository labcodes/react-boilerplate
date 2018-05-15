import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { validate as validateForm, normalize as normalizeForm, submit as submitForm } from './form-helpers';
import renderField from './render-field';

// ====

class FormComponent extends React.Component {
    resetForm() {
        // removeFormContent
        const { reset } = this.props;

        reset('login');
        // removeFormContent({});
    }

    componentDidMount() {
        console.warn('[FormComponent] componentDidMount');
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return(
            <form onSubmit={handleSubmit()}>
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
                    normalize={normalizeUF}
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

FormComponent = reduxForm({
    form: 'login',
    enableReinitialize: true,
    onSubmit: submitForm,
    validate: validateForm,
})(FormComponent);

// ====

const mapStateToProps = (state) => {
    return state;
    // return {
    //     initialValues: state.system.formContent
    // };
};

const mapDispatchToProps = {};

FormComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormComponent);

// ====

export default FormComponent;
