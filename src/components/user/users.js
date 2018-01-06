import React from 'react'
import { Link } from 'react-router-dom'
import './users.css'

export const User = ({user}) => {
    console.log(user);
    return (
      <div className='column user'>
        <div className='user-profile'>
            <Link to={'/user/' + user.slug} id={user.slug}>
                <img src={user.img} alt={user.name}/>
            </Link>
        </div>
        <div className='content'>
            {user.like.comment !== null ?
                <blockquote>{user.like.comment}</blockquote>
                : null
            }
            <Link to={'/user/' + user.slug} id={user.slug}>{user.name}</Link>
        </div>
      </div>
    );
}

export default User;
