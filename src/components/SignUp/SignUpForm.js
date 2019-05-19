import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import renderField from './../renderField/renderField'
import notyMessage from './../../services/notyMessage'
import { register } from './../../services/auth'
import SignUpFormSubmit from './SignUpFormSubmit'
import './SignUpForm.css'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false, haveSignedUp: false};
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleSignUp(value) {
        this.setState({isLoading: true});

        let password = value.password;
        let repeatPassword = value.repeatpassword;

        if (password === repeatPassword) {
            this.props.reset();

            let payload = JSON.stringify({
                name: value.name,
                email: value.email,
                gender: value.gender,
                password: password,
                repeatPassword: repeatPassword
            });
            register(payload).then((response) => {
                this.setState({isLoading: false, haveSignedUp: true});
                notyMessage('Registrering lyckades');
            });
        }
    }
    render() {
        return (
            <div>
                <form id="signup">
                    <label className="label">Namn</label>
                    <Field
                        name="name"
                        type="text"
                        component={renderField}/>
                    <label className="label">E-mail</label>
                    <Field
                        name="email"
                        type="email"
                        component={renderField}/>
                    <label className="label">Kön</label>
                    <div className="control">
                        <div>
                            <label style={{marginRight: '10px'}}><Field name="gender" component="input" type="radio" value="f"/> Kvinna</label>
                            <label><Field name="gender" component="input" type="radio" value="m"/> Man</label>
                        </div>
                    </div>
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
                    <br/>
                    <div id="buttons">
                        {
                            !this.state.haveSignedUp ? (
                                <SignUpFormSubmit loading={this.state.isLoading} onSubmit={this.handleSignUp}/>
                            ) : (
                                <div>
                                    <button className="button is-success" disabled={true}>Skicka</button>
                                    <Link to="/" className="button is-success">Gå till inloggning</Link>
                                </div>
                            )
                        }
                    </div>
                </form>
            </div>
        );
    }
}

SignUpForm = reduxForm({
  form: 'signUpForm',
  destroyOnUnmount: false
})(SignUpForm);

export default SignUpForm
