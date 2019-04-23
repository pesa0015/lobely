import React, { Component } from 'react'
import ForgotPasswordForm from './../../components/ForgotPassword/ForgotPasswordForm'
import logo from '../../assets/img/blooovy.png'

export class ForgotPassword extends Component {
    render() {
        return (
            <div>
                <section className='section'>
                    <img src={logo} alt='Logo'/>
                    <hr />
                    <br />
                    <div className='container'>
                        <h1 className='title'>Glömt lösenord</h1>
                        <ForgotPasswordForm/>
                    </div>
                </section>
            </div>
        );
    }
}
