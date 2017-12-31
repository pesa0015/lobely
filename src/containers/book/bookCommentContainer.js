import React, { Component } from 'react'
import { connect } from 'react-redux'
import { haveDeletedBook, updateComment } from '../../actions/book'
import { deleteBook, updateBookComment } from '../../services/book'

class BookCommentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {book: props.book, updateComment: false, comment: props.book.comment || ''};
        this.handleUpdateComment = this.handleUpdateComment.bind(this);
        this.bookDelete = this.bookDelete.bind(this);
    }
    handleUpdateComment() {
        updateBookComment(this.props.books.id, this.state.comment).then((response) => {
            this.props.dispatch(updateComment(this.state.comment));
            this.setState({updateComment: false});
        });
    }
    bookDelete() {
        deleteBook(this.props.books.id).then((response) => {
            this.props.dispatch(haveDeletedBook(this.props.books.id));
        });
    }
    render() {
        let book = this.props.books;
        if (typeof book.id === 'undefined') {
            return null;
        }
        return (
            <div>
                <div className='card'>
                    <header className='card-header'>
                        <p className='card-header-title'>Jag gillar boken för att</p>
                    </header>
                    <div className='card-content'>
                        <div className='content'>
                            {(this.state.updateComment ?
                                <form>
                                    <textarea className='textarea' value={this.state.comment} onChange={(input) => this.setState({comment: input.target.value})}
                                    style={{borderStyle: 'none', borderColor: 'transparent', margin: '-3%'}}/>
                                </form> :
                                <span>{book.comment}</span>
                            )}
                            <br />
                        </div>
                    </div>
                    <footer className='card-footer'>
                        {(this.state.updateComment ?
                            <a className='card-footer-item' onClick={this.handleUpdateComment}>Spara</a> :
                            <a className='card-footer-item' onClick={() => this.setState({updateComment: true})}>Ändra</a>
                        )}
                        <a className='card-footer-item' onClick={this.bookDelete}>Ta bort bok</a>
                    </footer>
                </div>
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
    haveDeletedBook : () => dispatch(haveDeletedBook),
    updateComment : () => dispatch(updateComment)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCommentContainer)
