import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import renderField from './../renderField/renderField'
import { loginSuccess } from '../../actions/login'
import { login } from './../../services/auth'
import LoginFormSubmit from './LoginFormSubmit'
import 'bulma/css/bulma.css'
import './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false, redirect: false};
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(value) {
        this.setState({isLoading: true});

        let email = value.email;
        let password = value.password;

        let payload = JSON.stringify({
            email: email,
            password: password
        });

        this.props.reset();

        login(payload)
            .then((response) => {
                this.props.dispatch(loginSuccess(response.data));
                this.setState({isLoading: false, redirect: true});
            });
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/home'}/>
            );
        }

        return (
            <div>
                <form>
                    <label className="label">E-mail</label>
                    <Field
                        name="email"
                        type="email"
                        component={renderField}/>
                    <label className="label">Lösenord</label>
                    <Field
                        name="password"
                        type="password"
                        component={renderField}/>
                    <div id="buttons">
                        <Link to="/forgot-password" className="button is-info">Glömt lösenord</Link>
                        <LoginFormSubmit loading={this.state.isLoading} onSubmit={this.handleLogin}/>
                    </div>
                </form>
            </div>
        )
    }
}

LoginForm = reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false
})(LoginForm);

export default LoginForm
