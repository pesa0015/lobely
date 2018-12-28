import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/user'
import { getUsersByBook } from './../../services/book'
import { UserImg } from './../../components/user/UserImg'
import UserCommentContainer from './UserCommentContainer'
import './../../components/user/UserImg.css'

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {slug: props.slug, bookId: props.id};
    }

    componentWillMount() {
        getUsersByBook(this.state.slug)
            .then((response) => {
                this.props.dispatch(fetchUsers(response.data));
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
                    <div key={index} className={this.props.userHeart.liked && this.props.userHeart.userId !== this.props.user.id ? 'column user hide' : 'column user'}>
                        <UserImg user={user} book={this.state.slug}/>
                        <UserCommentContainer user={user} heart={this.props.userHeart} book={this.state.slug}/>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
