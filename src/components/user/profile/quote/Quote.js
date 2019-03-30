import React from 'react'
import './Quote.css'

export const Quote = ({user}) => {
    var today = new Date();
    var birthDate = new Date(user.birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return (
        <div>
            <div className="quote--container">
                <p className="quote">{user.like.comment}</p>
                <p className="quote--author">&ndash; {user.name}, {age}</p>
            </div>
            <br/>
        </div>
    );
}

export default Quote;
