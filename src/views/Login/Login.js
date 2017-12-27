import React, { Component } from 'react'
import { Redirect } from 'react-router'
import './Login.css'
import logo from '../../assets/img/blooovy.png'
import LoginOption from './LoginOption'
import isLoggedIn from './../../services/isLoggedIn'

export class Login extends Component {
  render() {
    if (isLoggedIn()) {
        return <Redirect to='/home'/>;
    }
    return (
      <div id='startWrapper'>
            <div id='welcome'>
                <img id='logo' src={logo} alt='Logo'/>
                <div>Hitta din partner baserat på böckerna du gillar.</div>
            </div>
            <LoginOption/>
      </div>
    );
  }
}
