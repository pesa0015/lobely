import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { logoutSuccess } from './../../actions/logout'

class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false};
    }
    logOut() {
        this.props.dispatch(logoutSuccess());
        this.setState({redirect: true});
    }
  render() {
    if (this.state.redirect) {
        return (
            <Redirect to={'/'}/>
        );
    }
    return (
      <div>
        <span onClick={this.logOut.bind(this)}>Logga ut</span>
      </div>
    );
  }
}

Logout.propTypes = {
  logoutSuccess: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    token : state.auth.token,
    isAuthenticated : state.auth.isAuthenticated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    logoutSuccess : () => dispatch(logoutSuccess)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
