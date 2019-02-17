import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { searchBooks } from './../../services/search'
import Logout from './Logout'
import './Nav.css'
import heart from './../../assets/img/heart-liked.png'

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
        let notifications = this.props.notification;
        let firstname = jwt_decode(window.localStorage.getItem('token')).firstname;
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
                    <Link to="notifications"><div className="navbar-item"><img src={heart} alt="Heart"/><span className="notification-count">{notifications.count}</span></div></Link>
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
