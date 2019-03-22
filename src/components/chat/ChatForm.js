import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextArea from './../../components/renderField/renderTextarea'
import { sendMessage } from './../../services/messages'
import { addMessage } from './../../actions/message'
import ChatFormSubmit from './../../components/chat/ChatFormSubmit'

class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {heartId: props.heartId, loading: false};
        this.handleSendMessage = this.handleSendMessage.bind(this);
    }

    handleSendMessage(value) {
        this.setState({loading: true});

        let heartId = this.props.heartId;
        let body = value.body;

        let payload = JSON.stringify({
            heartId: heartId,
            body: body
        });

        this.props.reset();

        sendMessage(payload)
            .then((response) => {
                this.setState({loading: false});
                this.props.dispatch(addMessage(response.data));
            });
    }

    render() {
        return (
            <div>
                <form>
                    <Field
                        className="textarea"
                        name="body"
                        component={renderTextArea}/>
                    <ChatFormSubmit heartId={this.state.heartId} loading={this.state.loading} onSubmit={this.handleSendMessage}/>
                </form>
            </div>
        )
    }
}

ChatForm = reduxForm({
  form: 'chatForm',
  destroyOnUnmount: false
})(ChatForm);

export default ChatForm