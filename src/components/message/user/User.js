import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { age } from './../../../services/age'
import './User.css'
import UserImg from './../../../components/user/UserImg'

export const User = ({heart}) => {
    if (heart.messages.length === 0) {
        return null;
    }

    return (
        <div>
            <UserImg user={heart.user}/>
            <h4 className="title is-4">{heart.user.name}, {age(heart.user.birthDate)}</h4>
            <br/>
            <Link to={"/messages/" + heart.user.slug + "/" + heart.id} className="button is-success">Skriv</Link>
            <p>{moment(heart.messages[0].createdAt).startOf('hour').fromNow()}<hr/>{heart.messages[0].body}</p>
        </div>
    );
}

export default User;
