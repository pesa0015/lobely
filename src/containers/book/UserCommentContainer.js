import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import heart from './../../assets/img/heart.png'

class UserCommentContainer extends Component {
    render() {
        return (
            <div key={this.props.user.slug} className='content'>
                <div>
                    {this.props.user.like.comment !== null ?
                        <blockquote>{this.props.user.like.comment}</blockquote>
                        : null
                    }
                    <Link to={'/user/' + this.props.user.slug} id={this.props.user.slug}>{this.props.user.name}</Link>
                    {this.props.user.heart ?
                        null
                        : <Link to={'/user/' + this.props.user.slug}><img src={heart} className='heart' alt='Heart'/></Link>
                    }
                </div>
            </div>
        );
    }
}

export default UserCommentContainer
