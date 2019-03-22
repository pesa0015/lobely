import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMessages } from './../../services/messages'
import { fetchMessages } from './../../actions/message'
import { age } from './../../services/age'
import Chat from './../../components/chat/Chat'
import UserImg from './../../components/user/UserImg'
import ChatForm from './../../components/chat/ChatForm'
import './../../components/chat/Chat.css'

class ChatContainer extends Component {
    constructor(props) {
        super(props);

        getMessages(props.heartId)
            .then((response) => {
                this.props.dispatch(fetchMessages(response.data));
            });
    }

    render() {
        let chat = this.props.chat;
        if (chat.data.length === 0) {
            return null;
        }
        return (
            <div id="user-chat">
                <div>
                    <UserImg user={chat.data.user}/>
                    <h4 className="title is-4">{chat.data.user.name}, {age(chat.data.user.birthDate)}</h4>
                </div>
                <br/>
                <div id="messages">
                    {chat.data.messages.map(message => (
                        <Chat key={message.id} message={message} me={this.props.profile}/>
                    ))}
                </div>
                <ChatForm heartId={this.props.heartId}/>
            </div>
        );
  }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ChatContainer)