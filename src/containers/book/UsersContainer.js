import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, listUsers } from '../../actions/user'
import { getUsersByBook } from './../../services/book'
import { User } from './../../components/user/users'

class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {slug: props.slug};
        console.log(this.props);
    }
    componentWillMount() {
        getUsersByBook(this.state.slug)
            .then((response) => {
                this.props.dispatch(fetchUsers(response.data));
                this.props.dispatch(listUsers());
            });
    }
    render() {
        let users = this.props.users;
        console.log(users);
        if (!users.length) {
            return null;
        }
        return (
            <div id='book-users'>
                {users.map((user, index) => (
                    <User key={index} user={user}/>
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
    listUsers : () => dispatch(listUsers)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
