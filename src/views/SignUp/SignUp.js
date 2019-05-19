import React, { Component } from 'react'
import SignUpForm from './../../components/SignUp/SignUpForm'
import logo from '../../assets/img/blooovy.png'

export class SignUp extends Component {
    render() {
        return (
            <section className='section'>
                <img src={logo} alt='Logo'/>
                <hr />
                <br />
                <div className='container'>
                    <h1 className='title'>Registrera</h1>
                    <SignUpForm/>
                </div>
            </section>
        );
    }
}
