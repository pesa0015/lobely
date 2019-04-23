import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './../renderField/renderField'
import notyMessage from './../../services/notyMessage'
import { resetPassword } from './../../services/auth'
import ResetPasswordFormSubmit from './ResetPasswordFormSubmit'
import './ResetPasswordForm.css'

class ResetPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {token: this.props.token, isLoading: false};
        this.handleResetPassword = this.handleResetPassword.bind(this);
    }
    handleResetPassword(value) {
        this.setState({isLoading: true});

        let password = value.password;
        let repeatPassword = value.repeatpassword;

        if (password === repeatPassword) {
            let payload = JSON.stringify({
                token: this.state.token,
                password: password
            });

            this.props.reset();
            
            resetPassword(payload).then((response) => {
                this.setState({isLoading: false});
                notyMessage('Lösenord återställning lyckades');
            });
        }
    }
    render() {
        return (
            <div>
                <form id="reset-password">
                    <label className="label">Lösenord</label>
                    <Field
                        name="password"
                        type="password"
                        component={renderField}/>
                    <label className="label">Repetera lösenord</label>
                    <Field
                        name="repeatpassword"
                        type="password"
                        component={renderField}/>
                    <div id="buttons">
                        <ResetPasswordFormSubmit loading={this.state.isLoading} onSubmit={this.handleResetPassword}/>
                    </div>
                </form>
            </div>
        );
    }
}

ResetPasswordForm = reduxForm({
  form: 'resetPasswordForm',
  destroyOnUnmount: false
})(ResetPasswordForm);

export default ResetPasswordForm
