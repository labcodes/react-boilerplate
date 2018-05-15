import React, { StrictMode } from 'react';
import FormComponent from 'components/form';

// ====

class LoginContainer extends React.Component {
    handleSubmitForm(values) {
        // const { addFormContent } = this.props;
        // addFormContent(values);
        console.warn('Submiting form using [LoginContainer]', values);
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

export default LoginContainer;
