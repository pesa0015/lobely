import React, { Component } from 'react'
import { BookView } from './../../components/book/bookView'
import { getBook } from '../../services/book'

export default class BookContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {book: props};
    }
    componentWillMount() {
        getBook(this.state.book.slug)
            .then((response) => {
                this.setState({book: response.data});
            });
    }
    render() {
    return (
      <div>
        <BookView book={this.state.book}/>
      </div>
    );
  }
}
