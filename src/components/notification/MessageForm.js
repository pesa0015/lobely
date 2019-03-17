import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import renderTextArea from './../../components/renderField/renderTextarea'
import { sendMessage } from './../../services/messages'
import { age } from './../../services/age'
import MessageFormSubmit from './../../components/notification/MessageFormSubmit'

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {user: props.user, heartId: props.id, loading: false};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(value) {
        this.setState({loading: true});
        let message = value.message;
        let payload = JSON.stringify({
            heartId: this.state.heartId,
            body: message
        });

        this.props.reset();

        sendMessage(payload)
            .then((response) => {
                this.setState({loading: false});
            });
    }

    render() {
        return (
            <div>
                <h1>Skriv till {this.state.user.name}, {age(this.state.user.birthDate)}</h1>
                <br/>
                <div>
                    <img src={this.state.user.img} alt={this.state.user.name}/>
                </div>
                <br/>
                <form>
                    <Field
                        className="textarea"
                        name="message"
                        component={renderTextArea}/>
                    <MessageFormSubmit heartId={this.state.heartId} loading={this.state.loading} onSubmit={this.handleSubmit}/>
                    <button className="button is-info">Avbryt</button>
                </form>
            </div>
        )
    }
}

MessageForm = reduxForm({
  form: 'messageForm',
  destroyOnUnmount: false
})(MessageForm);

export default MessageForm