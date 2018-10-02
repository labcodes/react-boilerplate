import React, { StrictMode } from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';

import { addFormData } from 'actions/login';

import FormComponent from 'components/form';
import Formbuttons from 'components/form/form-buttons';

const LoginMarkup = ({ handleSubmitForm, addFakeData }) => {
	return (
		<StrictMode>
			<section>
				<h1>Login!</h1>
				<FormComponent submitForm={handleSubmitForm} />
			</section>

			<section>
				<h1>Fake data!</h1>
				<button onClick={addFakeData}>load</button>
			</section>

			<section>
				<h1>Remote submit!</h1>
				<Formbuttons />
			</section>
		</StrictMode>
	);
};

const enhance = compose(
  connect(null, { addFormData }),
	withHandlers({
    handleSubmitForm: ({ addFormData }) => (values) => {
			addFormData(values);
		},
    addFakeData: ({ addFormData }) => () => {
			addFormData({
				username: 'fake user',
				email: 'fake-user@email.com',
				uf: 'PE'
			});
		}
	}),
);

const LoginContainer = enhance(LoginMarkup);
export default LoginContainer;
