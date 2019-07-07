import React, { Component } from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import { Link } from 'react-router-dom'
import renderField from './../renderField/renderField'
import RadioGroup from './../renderField/RadioGroup'
import notyMessage from './../../services/notyMessage'
import { register } from './../../services/auth'
import { name, email, gender, password } from './../renderField/validation'
import './SignUpForm.css'

const validatePassword = value => value.password !== value.repeatpassword ? false : true

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false, haveSignedUp: false};
        this.handleSignUp = this.handleSignUp.bind(this);
    }
    handleSignUp(value) {
        if (!validatePassword(value)) {
            throw new SubmissionError({repeatpassword: 'Upprepa lösenord stämmer inte', _error: 'Upprepa lösenord stämmer inte'})
        }

        this.setState({isLoading: true});

        this.props.reset();

        let payload = JSON.stringify({
            name: value.name,
            email: value.email,
            gender: value.gender,
            password: value.password,
            repeatPassword: value.repeatpassword
        });
        register(payload).then((response) => {
            this.setState({isLoading: false, haveSignedUp: true});
            notyMessage('Registrering lyckades');
        });
    }
    render() {
        return (
            <div>
                <form id="signup">
                    <label className="label">Namn</label>
                    <Field
                        name="name"
                        type="text"
                        component={renderField}
                        validate={name}/>
                    <label className="label">E-mail</label>
                    <Field
                        name="email"
                        type="email"
                        component={renderField}
                        validate={email}/>
                    <label className="label">Kön</label>
                    <div className="control">
                        <div>
                            <Field component={RadioGroup} name="gender" validate={gender} options={[
                                { title: 'Kvinna', value: 'f' },
                                { title: 'Man', value: 'm' }]}/>
                        </div>
                    </div>
                    <br/>
                    <label className="label">Lösenord</label>
                    <Field
                        name="password"
                        type="password"
                        component={renderField}
                        validate={password}/>
                    <label className="label">Repetera lösenord</label>
                    <Field
                        name="repeatpassword"
                        type="password"
                        component={renderField}/>
                    <br/>
                    <div id="buttons">
                        {
                            !this.state.haveSignedUp ? (
                                <button className={"button is-success " + (this.state.isLoading ? 'is-loading' : '')} disabled={this.state.isLoading} type="submit" onClick={this.props.handleSubmit(this.handleSignUp)}>Skicka</button>
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
