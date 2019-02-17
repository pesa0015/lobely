import React from 'react'
import { age } from './../../services/age'
import './Notification.css'
import UserImg from './UserImg'

export const Notification = ({notification}) => {
    return (
        <article className="media">
            <figure className="media-left">
                <UserImg user={notification.user} className="image is-64x64"/>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>{notification.user.name}, {age(notification.user.birthDate)}</strong>
                        <br/>
                        <span>{notification.user.bio}</span>
                    </p>
                </div>
            </div>
            <div className="media-right">
                <div>{notification.book.title}</div>
                <img src={notification.book.cover} className="image is-64x64" alt={notification.book.title}/>
            </div>
        </article>
    );
}

export default Notification;
