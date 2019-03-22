import React, { Component } from 'react'
import ChatContainer from './../../containers/chat/ChatContainer'

export class Chat extends Component {
    render() {
        let heartId = this.props.match.params.heartId;
        let slug = this.props.match.params.slug;
        
        return (
            <div>
                <ChatContainer heartId={heartId} slug={slug}/>
            </div>
        );
  }
}
