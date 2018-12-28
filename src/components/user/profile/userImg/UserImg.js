import React from 'react'
import './UserImg.css'

export const UserImg = ({user}) => {
    return (
        <div>
            <img src={user.img} alt={user.name}/>
        </div>
    );
}

export default UserImg;
