import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserBySlug } from './../../services/user'
import { addUser } from './../../actions/user'
import { Quote } from './../../components/user/profile/quote/Quote'
import { UserImg } from './../../components/user/profile/userImg/UserImg'
import { About } from './../../components/user/profile/about/About'
import { Like } from './../../components/user/profile/like/Like'

class UserContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {slug: props.slug, book: props.book};
    }

    componentWillMount() {
        getUserBySlug(this.state.slug, this.state.book)
            .then((response) => {
                this.props.dispatch(addUser(response.data));
            });
    }

    render() {
        let user = this.props.user;
        if (user.length === 0) {
            return null;
        }
        return (
            <div className='user-profile'>
                <Quote user={user}/>
                <UserImg user={user}/>
                <Like user={user}/>
                <About user={user}/>
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
    addUser : () => dispatch(addUser),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)