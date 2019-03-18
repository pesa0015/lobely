import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsersWithMessages } from './../../services/messages'
import { fetchUsersWithMessages } from './../../actions/message'
import User from './../../components/message/user/User'

class MessagesContainer extends Component {
    componentWillMount() {
        getUsersWithMessages()
            .then((response) => {
                this.props.dispatch(fetchUsersWithMessages(response.data));
            });
    }

    render() {
        let hearts = this.props.notification;
        if (hearts.count.messages === 0) {
            return null;
        }
        return (
            <div id="user-messages">
                {this.props.message.data.map(heart => (
                    <User key={heart.user.id} heart={heart}/>
                ))}
            </div>
        );
  }
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps)(MessagesContainer)