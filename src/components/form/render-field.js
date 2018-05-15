import React from 'react';

// ====

const renderField = (props) => {
    const { input, label, type, placeholder,
        meta: { touched, error }
    } = props;

    return(
        <div className="field">
            <label htmlFor={label} className="label">
                {label}
            </label>

            <div className="control">
                <input
                    {...input}
                    type={type}
                    name={label.toLowerCase()}
                    placeholder={placeholder}
                    className="input"
                    autoComplete="off"
                />

                {touched && (error &&
                    <p className="help is-danger">{error}</p>
                )}
            </div>
        </div>
    )
};

// ====

export default renderField;
