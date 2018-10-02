import React from 'react';
import { connect } from 'react-redux';
import { submit as submitForm, reset as resetForm } from 'redux-form';
import { compose, withHandlers } from 'recompose';

import { addFormData } from 'actions/login';

const FormButtons = ({ remoteSubmit, remoteReset }) => {
  return (
    <div>
      <button onClick={remoteSubmit}>submit</button>
      <button onClick={remoteReset}>reset</button>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = {
  submitForm,
  resetForm,
  addFormData
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    remoteSubmit: ({ submitForm }) => () => {
      submitForm('login');
    },
    remoteReset: ({ resetForm, addFormData }) => () => {
      resetForm('login');
      addFormData({});
    }
  })
);

export default enhance(FormButtons);
