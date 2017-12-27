import React from 'react'
import { Link } from 'react-router-dom'
import './../../views/Home/Book.css'

export const Book = ({book}) => {
    return (
      <div className="column book">
        <Link to={'/title/' + book.slug} params={{ slug: book.slug }}>
            <img src={book.cover} alt={book.title}/>
        </Link>
      </div>
    );
}

export default Book;
