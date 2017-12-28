import React, { Component } from 'react'
import BookContainer from './../../containers/book/book'

export class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {slug: props.slug};
    }
    render() {
    return (
      <div>
        <BookContainer slug={this.state.slug}/>
      </div>
    );
  }
}
