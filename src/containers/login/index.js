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

    addFakeData() {
        const { addFormData } = this.props;

        const fakeData = {
            username: 'fake user',
            email: 'fake-user@email.com',
            uf: 'PE'
        };

        addFormData(fakeData);
    }

    render(){
        return (
            <StrictMode>
                <section>
                    <h1>Login!</h1>

                    <FormComponent submitForm={this.handleSubmitForm.bind(this)} />
                </section>

                <section>
                    <h1>Fake data!</h1>

                    <button onClick={() => this.addFakeData()}>
                        load
                    </button>
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
