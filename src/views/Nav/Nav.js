import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { searchBooks } from './../../services/search'
import Logout from './Logout'
import './Nav.css'
import heart from './../../assets/img/heart-liked.png'
import message from './../../assets/img/message-white.png'

export class Nav extends Component {
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
        let token = window.localStorage.getItem('token');
        let firstname;

        if (!token) {
            firstname = null;
        } else {
            firstname = jwt_decode(token).firstname;
        }

        let notifications = this.props.notification;
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
                    <Link to="/messages"><div className="navbar-item"><img src={message} alt="Message"/>
                    {(notifications.count.messages > 0 ? (
                        <span className="notification-count">{notifications.count.messages}</span>
                        ) : null
                    )}</div></Link>
                    <Link to="/notifications"><div className="navbar-item"><img src={heart} alt="Heart"/>
                    {(notifications.count.hearts > 0 ? (
                        <span className="notification-count">{notifications.count.hearts}</span>
                        ) : null
                    )}</div></Link>
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

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Nav)
