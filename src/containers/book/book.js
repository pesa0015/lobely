import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBook } from '../../actions/book'
import { BookCover } from './../../components/book/bookCover'
import { getBook, likeBook, deleteBook } from '../../services/book'

class BookContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {book: props};
        this.bookLike = this.bookLike.bind(this);
        this.bookDelete = this.bookDelete.bind(this);
    }
    componentWillMount() {
        getBook(this.state.book.slug)
            .then((response) => {
                this.props.dispatch(fetchBook(response.data));
            });
    }
    bookLike() {
        likeBook(this.props.books.id).then((response) => {
            window.location.reload();
        });
    }
    bookDelete() {
        deleteBook(this.props.books.id).then((response) => {
            window.location.reload();
        });
    }
    render() {
        let book = this.props.books;
        if (typeof book.id === 'undefined') {
            return null;
        }
        return (
            <div>
                <BookCover book={this.props.books}/>
                {(book.liked ?
                    <a className='button is-large is-danger' onClick={this.bookDelete}>Ta bort</a> :
                    <a className='button is-large is-success' onClick={this.bookLike}>Gilla</a>
                )}
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
    fetchBook : () => dispatch(fetchBook)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
