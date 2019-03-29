import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import { searchBooks } from './../../services/search'
import Logout from './Logout'
import './Nav.css'
import heart from './../../assets/img/heart-liked.png'
import message from './../../assets/img/message-white.png'
import Navbar from 'react-bulma-components/lib/components/navbar';

export class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {title: '', books: [], chosenBook: false, slug: '', open: false};
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
            <Navbar active={this.state.open}>
                <Navbar.Brand>
                    <Navbar.Item renderAs='span'><Link to="/messages" onClick={() => this.setState({open: !this.state.open})}><img src={message} alt="Message"/>
                        {(notifications.count.messages > 0 ? (
                            <span className="notification-count">{notifications.count.messages}</span>
                            ) : null
                        )}</Link>
                    </Navbar.Item>
                    <Navbar.Item renderAs='span'><Link to="/notifications" onClick={() => this.setState({open: !this.state.open})}><img src={heart} alt="Heart"/>
                        {(notifications.count.hearts > 0 ? (
                            <span className="notification-count">{notifications.count.hearts}</span>
                            ) : null
                        )}</Link>
                    </Navbar.Item>
                    <Navbar.Burger active={this.state.open.toString()} onClick={() => this.setState({open: !this.state.open})}/>
                </Navbar.Brand>
                <Navbar.Menu>
                    <input id="search-book" className="input" type="text" placeholder="Sök bok" onChange={this.handleSearch}/>
                    <div id='search-bar' style={(this.state.books.length === 0) ? {display: 'none'} : null }>
                        {this.state.books.map((book, index) => (
                            <Link to={'/title/' + book.slug} key={index} onClick={this.chooseBook}>{book.title}</Link>
                        ))}
                    </div>
                    <Navbar.Item renderAs='span'><Link to="/home" onClick={() => this.setState({open: !this.state.open})}>Hem</Link></Navbar.Item>
                    <Navbar.Item renderAs='span'><Link to="/profile" onClick={() => this.setState({open: !this.state.open})}>{ firstname }</Link></Navbar.Item>
                    <Navbar.Item renderAs='span'><Logout/></Navbar.Item>
                </Navbar.Menu>
            </Navbar>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Nav)
