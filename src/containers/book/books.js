import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks, listBooks } from '../../actions/book'
import { Book } from './../../components/book/book'
import { getBooks } from './../../services/book'

export const BookList = ({books}) => {
    if (!books.length) {
            return null;
        }
    return (
      <div>
        {books.map((book, index) => (
            <Book key={index} book={book}/>
        ))}
      </div>
    );
}

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {redirect: false, books: []};
    }
    componentWillMount() {
        getBooks().then((response) => {
            this.props.dispatch(fetchBooks(response.data));
            this.props.dispatch(listBooks());
        });
    }
  render() {
    return (
      <div>
        <BookList books={this.props.books}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    fetchBooks : () => dispatch(fetchBooks),
    listBooks : () => dispatch(listBooks)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
