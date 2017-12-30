import React from 'react'
import './../../views/Home/Book.css'

export const BookCover = ({book}) => {
    return (
      <div className='column book'>
        <img src={book.cover} alt={book.title}/>
      </div>
    );
}

export default BookCover;
