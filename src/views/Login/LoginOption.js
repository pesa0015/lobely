import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { loginSuccess } from '../../actions/login'
import Modal from 'reboron/DropModal'
import notyMessage from './../../services/notyMessage'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { login, facebookAuth, register, forgotPassword } from './../../services/auth'
import 'bulma/css/bulma.css'

class LoginOption extends Component {
    constructor(props) {
        super(props);
        this.state = {username: 'herminia.mccoy88@example.com',
            password: 'derek',
            redirect: false,
            buttonIsLoading: false,
            name: null,
            email: null,
            gender: null,
            repeatPassword: null,
            forgotPassword: null,
            tabIndex: 0
        };
    }
    FbLogin() {
        window.FB.login(function(response) {
            if (response.status === 'connected') {
                window.FB.api('/me?fields=id,name,gender,birthday,email', 'GET', function(response) {
                    let payload = JSON.stringify({
                        facebookId: response.id,
                        name: response.name,
                        email: response.email,
                        gender: response.gender
                    });
                    facebookAuth(payload).then((response) => {
                        window.localStorage.setItem('user', JSON.stringify(response.data));
                        window.location.href = '/home';
                    });
                });
            }
        }, {scope: 'user_birthday', return_scopes: true});
    }
    showModal(){
        this.refs.modal.show();
    };
    hideModal(){
        this.refs.modal.hide();
    };
    handleLogin(e){
        e.preventDefault();
        this.setState({buttonIsLoading: true});

        let payload = JSON.stringify({
            email: this.state.username,
            password: this.state.password
        });
        login(payload).then((response) => {
            if (response.status === 200) {
                this.props.dispatch(loginSuccess(response.data));
                this.setState({redirect: true});
            }
        });
    }
    handleRegister(e){
        e.preventDefault();
        let password = this.state.password;
        let repeatPassword = this.state.repeatPassword;

        if (password === repeatPassword) {
            let payload = JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                gender: this.state.gender,
                password: password,
                repeatPassword: repeatPassword
            });
            register(payload).then((response) => {
                notyMessage('Registrering lyckades');
            });
        }
    }
    handleForgotPassword(e){
        e.preventDefault();
        let payload = JSON.stringify({
            email: this.state.forgotPassword
        });
        forgotPassword(payload).then((response) => {
            notyMessage('Lösenord återställning har skickats till ' + this.state.forgotPassword);
        });
    }
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/home'}/>
            );
        }
        let isLoading = this.state.buttonIsLoading ? 'button is-white is-loading' : 'button is-white is-text';
        return (
            <div>
                <span id='login' onClick={this.showModal.bind(this)}>Kom igång</span>
                <Modal ref='modal' className="login-modal">
                    <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                        <TabList>
                            <div className='columns'>
                                <Tab className='bd-notification is-login column'>Logga in</Tab>
                                <Tab className='bd-notification is-register column'>Registrera</Tab>
                                <Tab className='bd-notification is-fb column' onClick={this.FbLogin.bind(this)}>f</Tab>
                                <Tab></Tab>
                            </div>
                        </TabList>
                    <hr />
                        <TabPanel>
                            <h3 className='title is-3'>Logga in</h3>
                            <form>
                            <div className="field">
                              <label className="label">Användarnamn eller email</label>
                              <div className="control">
                                <input className="input" type="text" onChange={(input) => this.setState({username: input.target.value})}/>
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">Lösenord</label>
                              <div className="control">
                                <input className="input" type="password" onChange={(input) => this.setState({password: input.target.value})}/>
                              </div>
                            </div>
                            <br />
                            <button className={isLoading} onClick={this.handleLogin.bind(this)}>Logga in</button>
                            <button className='button is-white' onClick={() => this.setState({tabIndex: 3})}>Glömt lösenord</button>
                            </form>
                        </TabPanel>
                        <TabPanel>
                            <h3 className='title is-3'>Registrera</h3>
                            <form>
                            <div className="field">
                              <label className="label">Namn</label>
                              <div className="control">
                                <input className="input" type="text" onChange={(input) => this.setState({name: input.target.value})}/>
                              </div>
                            </div>
                            <div className="field">
                              <label className="label">Email</label>
                              <div className="control">
                                <input className="input" type="email" onChange={(input) => this.setState({email: input.target.value})}/>
                              </div>
                            </div>
                            <br />
                            <div className="field">
                              <label className="label">Kön</label>
                              <div className="control">
                                  <label className="radio">
                                    <input type="radio" name="gender" value='f' onChange={(input) => this.setState({gender: input.target.value})}/>
                                    Kvinna
                                  </label>
                                  <label className="radio">
                                    <input type="radio" name="gender" value='m' onChange={(input) => this.setState({gender: input.target.value})}/>
                                    Man
                                  </label>
                                </div>
                            </div>
                            <br />
                            <div className="field" style={{display: 'inline-block', width: '200px', marginRight: '25px'}}>
                              <label className="label">Lösenord</label>
                              <div className="control">
                                <input className="input" type="password" onChange={(input) => this.setState({password: input.target.value})}/>
                              </div>
                            </div>
                            <div className="field" style={{display: 'inline-block', width: '200px'}}>
                              <label className="label">Repetera lösenord</label>
                              <div className="control">
                                <input className="input" type="password" onChange={(input) => this.setState({repeatPassword: input.target.value})}/>
                              </div>
                            </div>
                            <br />
                            <button className={isLoading} onClick={this.handleRegister.bind(this)}>Registrera</button>
                            </form>
                        </TabPanel>
                        <TabPanel>
                        </TabPanel>
                        <TabPanel>
                            <h3 className='title is-3'>Glömt lösenord</h3>
                            <form>
                                <div className="field">
                                  <label className="label">Email</label>
                                  <div className="control">
                                    <input className="input" type="text" onChange={(input) => this.setState({forgotPassword: input.target.value})}/>
                                  </div>
                                </div>
                                <button className={isLoading} onClick={this.handleForgotPassword.bind(this)}>Skicka mail</button>
                            </form>
                        </TabPanel>
                    </Tabs>
                </Modal>
            </div>
        );
    }
}

export type Props = {
  token: Text,
  isAuthenticated: boolean
};

LoginOption.propTypes = {
  loginSuccess: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    token : state.auth.token,
    isAuthenticated : state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    loginSuccess : () => dispatch(loginSuccess)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginOption)
