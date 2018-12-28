import React, { Component } from 'react'
import UserContainer from './../../containers/user/UserContainer'

export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {slug: props.slug};
    }
    render() {
    return (
      <div>
        <UserContainer slug={this.state.slug} book={this.props.book}/>
      </div>
    );
  }
}
