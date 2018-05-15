import React, { StrictMode } from 'react';
import { connect } from 'react-redux';

import { addFormData } from 'actions/login';

import FormComponent from 'components/form';

// ====

class LoginContainer extends React.Component {
    handleSubmitForm(values) {
        const { addFormData } = this.props;
        addFormData(values);
    }

    render(){
        return (
            <StrictMode>
                <section>
                    <h1>Login!</h1>

                    <FormComponent submitForm={this.handleSubmitForm.bind(this)} />
                </section>
            </StrictMode>
        );
    }
};

// ====

const mapStateToProps = null;

const mapDispatchToProps = {
    addFormData
};

LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);

// ====

export default LoginContainer;
