import React, { Component } from 'react'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import IdleTimer from 'react-idle-timer'
import reducer from './reducers'
import refreshToken from './services/refreshToken'
import { Login, Home, Book, Profile, ForgotPassword, User } from './views'
import { getProfile, getNotificationsCount } from './services/profile'
import { fetchProfile } from './actions/profile'
import { fetchNotificationsCount } from './actions/notification'
import isLoggedIn from './services/isLoggedIn'
import './App.css'
import Nav from './views/Nav/Nav'

// Add the reducer to your store on the `routing` key
const store = createStore(
    reducer,
    compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

class Routes extends Component {
    onIdle() {
        refreshToken();
    }
    fetchProfile() {
        getProfile().then((response) => {
            store.dispatch(fetchProfile(response.data));
        });
    }
    fetchNotifications() {
        getNotificationsCount().then((response) => {
            store.dispatch(fetchNotificationsCount(response.data));
        });
    }
    render() {
        if (!isLoggedIn()) {
            return <Redirect to='/'/>;
        }
        if (typeof store.getState().profile.name === 'undefined') {
            this.fetchProfile();
            this.fetchNotifications();
        }

        return (
            <div>
                <IdleTimer
                    ref="idleTimer"
                    element={document}
                    idleAction={this.onIdle}
                    timeout={1500000}
                    format="MM-DD-YYYY HH:MM:ss.SSS">
                  <Switch>
                    <div>
                        <Nav/>
                        <div id='wrapper'>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/profile' component={Profile}/>
                            <Route exact path='/title/:slug' component={(props) => (
                                <Book slug={props.match.params.slug}/>
                            )}/>
                            <Route exact path='/user/:slug/:title?' component={(props) => (
                                <User slug={props.match.params.slug} book={props.match.params.title}/>
                            )}/>
                        </div>
                    </div>
                  </Switch>
              </IdleTimer>
          </div>
        )
    }
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            { /* Tell the Router to use our enhanced history */ }
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/reset-password/:token' component={ForgotPassword}/>
                    <Routes/>
                </Switch>
            </BrowserRouter>
          </Provider>
    );
  }
}

export default App;
