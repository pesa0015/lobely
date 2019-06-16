import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import renderField from './../renderField/renderField'
import { loginSent, loginSuccess, invalidLogin, loginError } from '../../actions/login'
import { login } from './../../services/auth'
import LoginFormSubmit from './LoginFormSubmit'
import FormError from './../FormError/FormError'
import 'bulma/css/bulma.css'
import './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(value) {
        this.props.dispatch(loginSent());

        let email = value.email;
        let password = value.password;

        let payload = JSON.stringify({
            email: email,
            password: password
        });

        login(payload)
            .then((response) => {
                this.props.reset();
                this.props.dispatch(loginSuccess(response.data));
            }).catch((error) => {
                switch (error.response.status) {
                    case 401:
                        this.props.dispatch(invalidLogin());
                        break;
                    default:
                        this.props.dispatch(loginError());
                        break;
                }
            });
    }

    render() {
        if (this.props.auth.isAuthenticated) {
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
                    <FormError error={this.props.auth.error}/>
                    <div id="buttons">
                        <Link to="/forgot-password" className="button is-info">Glömt lösenord</Link>
                        <LoginFormSubmit loading={this.props.auth.isLoading} onSubmit={this.handleLogin}/>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

LoginForm = reduxForm({
  form: 'loginForm',
  destroyOnUnmount: false
})(connect(mapStateToProps)(LoginForm))

export default LoginForm
