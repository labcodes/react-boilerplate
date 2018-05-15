import React from 'react';
import { connect } from 'react-redux';
import { submit as submitForm, reset as resetForm } from 'redux-form';
import { addFormData } from 'actions/login';

// ====

class FormButtons extends React.Component {
    remoteSubmit() {
        const { submitForm } = this.props;

        submitForm('login');
    }

    remoteReset() {
        const { resetForm, addFormData } = this.props;

        resetForm('login');
        addFormData({});
    }

    render() {
        return(
            <div>
                <button onClick={() => this.remoteSubmit()}>
                    submit
                </button>

                <button onClick={() => this.remoteReset()}>
                    reset
                </button>
            </div>
        )
    }
};

// ====

const mapStateToProps = null;

const mapDispatchToProps = {
    submitForm,
    resetForm,
    addFormData
};

FormButtons = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormButtons);

// ====

export default FormButtons;
