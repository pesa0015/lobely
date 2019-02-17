import React from 'react'
import './Notification.css'

export const UserImg = ({user}) => {
    return (
        <div>
            <img src={user.img} alt={user.name}/>
        </div>
    );
}

export default UserImg;
