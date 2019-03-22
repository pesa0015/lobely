import React from 'react'
import moment from 'moment'

export const Chat = ({message, me}) => {
    return (
        <div>
            {message.user.id === me.id ? (
                    <div className="right">
                        <p>{message.body}</p>
                        <p>{moment(message.createdAt).startOf('hour').fromNow()}</p>
                    </div>
                ) : (
                    <div className="left">
                        <p>{message.body}</p>
                        <p>{moment(message.createdAt).startOf('hour').fromNow()}</p>
                    </div>
                )
            }
            <br/>
        </div>
    );
}

export default Chat;
