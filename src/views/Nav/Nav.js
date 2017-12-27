import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { searchBooks } from './../../services/search'
import Logout from './Logout'
import './Nav.css'

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', books: [], chosenBook: false, slug: ''};
        this.handleSearch = this.handleSearch.bind(this);
        this.chooseBook = this.chooseBook.bind(this);
    }
    handleSearch(e){
        e.preventDefault();
        this.setState({title: e.target.value});
        searchBooks(this.state.title).then((response) => {
            this.setState({books: response.data});
        });
    }
    chooseBook(e){
        this.setState({books: []});
    }
    render() {
        let firstname = JSON.parse(window.localStorage.getItem('user')).firstname;
    return (
      <div>
        <header>
            <nav>
                <input id="search-book" className="input" type="text" placeholder="Sök bok" onChange={this.handleSearch}/>
                <div id='search-bar' style={(this.state.books.length === 0) ? {display: 'none'} : null }>
                    {this.state.books.map((book, index) => (
                        <Link to={'/title/' + book.slug} key={index} onClick={this.chooseBook}>{book.title}</Link>
                    ))}
                </div>
                <div className="navbar-menu">
                    <Link to="/home"><div className="navbar-item">Hem</div></Link>
                    <Link to="/profile"><div className="navbar-item">{ firstname }</div></Link>
                    <div className="navbar-item"><Logout/></div>
                </div>
            </nav>
        </header>
      </div>
    );
  }
}
