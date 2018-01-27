import React from 'react'
import { Link } from 'react-router-dom'
import './users.css'

export const User = ({user}) => {
    return (
        <div className='user-profile'>
            <Link to={'/user/' + user.slug} id={user.slug}>
                <img src={user.img} alt={user.name}/>
            </Link>
        </div>
    );
}

export default User;
