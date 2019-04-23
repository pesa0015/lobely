import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderField from './../renderField/renderField'
import notyMessage from './../../services/notyMessage'
import { forgotPassword } from './../../services/auth'
import ForgotPasswordFormSubmit from './ForgotPasswordFormSubmit'
import './ForgotPasswordForm.css'

class ForgotPasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false};
        this.handleForgotPassword = this.handleForgotPassword.bind(this);
    }
    handleForgotPassword(value) {
        this.setState({isLoading: true});

        let email = value.email;

        let payload = JSON.stringify({
            email: email
        });

        this.props.reset();

        forgotPassword(payload).then((response) => {
            this.setState({isLoading: false});
            notyMessage('Lösenord återställning har skickats till ' + email);
        });
    }
    render() {
        return (
            <div>
                <form id="forgot-password">
                    <label className="label">E-mail</label>
                    <Field
                        name="email"
                        type="email"
                        component={renderField}/>
                    <div id="buttons">
                        <ForgotPasswordFormSubmit loading={this.state.isLoading} onSubmit={this.handleForgotPassword}/>
                    </div>
                </form>
            </div>
        );
    }
}

ForgotPasswordForm = reduxForm({
  form: 'forgotPasswordForm',
  destroyOnUnmount: false
})(ForgotPasswordForm);

export default ForgotPasswordForm
