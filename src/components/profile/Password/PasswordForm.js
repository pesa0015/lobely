import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './../../renderField/renderField'

class PasswordForm extends Component {
    render() {
        const { handleSubmit, onSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Field
                        name="currentPassword"
                        component={renderField}
                        label="Nuvarande lösenord"
                        type="password"/>
                    <Field
                        name="newPassword"
                        component={renderField}
                        label="Nytt lösenord"
                        type="password"/>
                    <Field
                        name="repeatPassword"
                        component={renderField}
                        label="Upprepa lösenord"
                        type="password"/>
                </div>
            </form>
        );
    }
}

PasswordForm = reduxForm({
  form: 'passwordForm',
})(PasswordForm);

export default PasswordForm;
