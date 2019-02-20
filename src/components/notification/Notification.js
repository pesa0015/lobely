import React from 'react'
import { Link } from 'react-router-dom'
import { age } from './../../services/age'
import './Notification.css'
import UserImg from './UserImg'

export const Notification = ({notification}) => {
    let profile = '/user/' + notification.user.slug + '/' + notification.book.slug;

    return (
        <article className="media">
            <figure className="media-left">
                <Link to={profile}>
                    <UserImg user={notification.user} className="image is-64x64"/>
                </Link>
            </figure>
            <div className="media-content">
                <div className="content">
                    <p>
                        <strong>
                            <Link to={profile}>{notification.user.name}, {age(notification.user.birthDate)}</Link>
                        </strong>
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
