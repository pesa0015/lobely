import React from 'react'
import { Link } from 'react-router-dom'

export const UserImg = ({user, book}) => {
    return (
        <div className='user-profile'>
            <Link to={'/user/' + user.slug + '/' + book} id={user.slug}>
                <img src={user.img} alt={user.name}/>
            </Link>
        </div>
    );
}

export default UserImg;
