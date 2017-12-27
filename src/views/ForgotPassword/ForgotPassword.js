import React, { Component } from 'react'
import { Redirect } from 'react-router'
import notyMessage from './../../services/notyMessage'
import { resetPassword } from './../../services/auth'
import logo from '../../assets/img/blooovy.png'
import './ForgotPassword.css'

export class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {password: '', repeatPassword: '', token: props.match.params.token, buttonIsLoading: false, goToStartPage: false};
    }
    handleResetPassword(e){
        e.preventDefault();
        let password = this.state.password;
        let repeatPassword = this.state.repeatPassword;

        if (password === repeatPassword) {
            let payload = 'token=' + this.state.token + '&password=' + this.state.password;
            resetPassword(payload).then((response) => {
                notyMessage('Lösenord återställning lyckades');
            });
        }
    }
    render() {
        if (this.state.goToStartPage) {
            return ( <Redirect to='/'/> );
        }
        let isLoading = this.state.buttonIsLoading ? 'button is-white is-loading' : 'button is-success';
    return (
      <div>
            <section className='section'>
                <img src={logo} alt='Logo'/>
                <hr />
                <br />
                <div className='container'>
                    <h1 className='title'>Återställ lösenord</h1>
                    <div className='field' style={{display: 'inline-block', width: '200px', marginRight: '25px'}}>
                      <label className='label'>Lösenord</label>
                      <div className='control'>
                        <input className='input' type='password' onChange={(input) => this.setState({password: input.target.value})}/>
                      </div>
                    </div>
                    <div className='field' style={{display: 'inline-block', width: '200px'}}>
                      <label className='label'>Repetera lösenord</label>
                      <div className='control'>
                        <input className='input' type='password' onChange={(input) => this.setState({repeatPassword: input.target.value})}/>
                      </div>
                    </div>
                    <br />
                    <button className={isLoading} onClick={this.handleResetPassword.bind(this)}>Skicka</button>
                    <a className='button is-white' onClick={() => { this.setState({goToStartPage: true}); }} style={{marginLeft: '20px'}}>Till startsidan</a>
                </div>
            </section>
      </div>
    );
  }
}
