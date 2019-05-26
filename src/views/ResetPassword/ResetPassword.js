import React, { Component } from 'react'
import ResetPasswordForm from './../../components/ResetPassword/ResetPasswordForm'
import logo from '../../assets/img/logo.png'
import './ResetPassword.css'

export class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {token: props.match.params.token, isLoading: false};
    }
    
    render() {
        return (
            <div>
                <section className='section'>
                    <img src={logo} alt='Logo'/>
                    <hr />
                    <br />
                    <div className='container'>
                        <h1 className='title'>Återställ lösenord</h1>
                        <ResetPasswordForm token={this.state.token}/>
                    </div>
                </section>
            </div>
        );
    }
}
