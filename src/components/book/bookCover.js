import React from 'react'
import './book.css'

export const BookCover = ({book}) => {
    return (
      <div id='book-cover'>
        <img src={book.cover} alt={book.title}/>
      </div>
    );
}

export default BookCover;
