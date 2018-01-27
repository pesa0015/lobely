import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUsers, listUsers, likeUser, deleteLikeUser } from '../../actions/user'
import { getUsersByBook } from './../../services/book'
import { sendHeart, deleteHeart } from './../../services/user'
import { User } from './../../components/user/users'
import heart from './../../assets/img/heart.png'
import heartLiked from './../../assets/img/heart-liked.png'
import message from './../../assets/img/message.png'

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {slug: props.slug, bookId: props.id};
        this.handleLikeUser = this.handleLikeUser.bind(this);
        this.handleDeleteLikeUser = this.handleDeleteLikeUser.bind(this);
    }
    componentWillMount() {
        getUsersByBook(this.state.slug)
            .then((response) => {
                this.props.dispatch(fetchUsers(response.data));
                this.props.dispatch(listUsers());
            });
    }
    handleLikeUser(userId) {
        sendHeart(userId, this.state.bookId)
            .then((response) => {
                this.props.dispatch(likeUser(userId));
            });
    }
    handleDeleteLikeUser(userId) {
        deleteHeart(userId, this.state.bookId)
            .then((response) => {
                this.props.dispatch(deleteLikeUser(userId));
            });
    }
    render() {
        let users = this.props.users;
        if (!users.length) {
            return null;
        }
        return (
            <div id='book-users'>
                {users.map((user, index) => (
                    <div key={user.slug} className='column user'>
                        <User key={index} user={user}/>
                        <div className='content'>
                            {user.like.comment !== null ?
                                <blockquote>{user.like.comment}</blockquote>
                                : null
                            }
                            <Link to={'/user/' + user.slug} id={user.slug}>{user.name}</Link>
                            {user.heart ?
                                <div style={{display: 'inline-block'}}>
                                    <img src={heartLiked} className='heart' alt='Heart' onClick={() => this.handleDeleteLikeUser(user.id)}/>
                                    <img src={message} className='heart-message' alt='message' style={{width: '40px', verticalAlign: 'middle'}}/>
                                </div>
                                : <img src={heart} className='heart' alt='Heart' onClick={() => this.handleLikeUser(user.id)}/>
                            }
                        </div>
                    </div>
                ))}
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
    fetchUsers : () => dispatch(fetchUsers),
    listUsers : () => dispatch(listUsers),
    likeUser : () => dispatch(likeUser)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
