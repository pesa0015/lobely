import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/img/blooovy.png'
import LoginForm from './../../components/login/LoginForm'
import isLoggedIn from './../../services/isLoggedIn'

export class Login extends Component {
    render() {
        if (isLoggedIn()) {
            return <Redirect to='/home'/>;
        }

        return (
            <div id="start-wrapper">
                <div id="welcome">
                    <img id="logo" src={logo} alt="Logo"/>
                    <div id="info">Hitta din partner baserat på böckerna du gillar.</div>
                    <LoginForm/>
                    <Link to="sign-up" id="get-started">Kom igång</Link>
                </div>
            </div>
        );
    }
}
