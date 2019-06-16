import React, { Component } from 'react'

export default class FormError extends Component {
    render() {
        if (this.props.error) {
            return (
                <div className="notification is-danger">
                    <span>{this.props.error}</span>
                </div>
            )
        } else {
            return null;
        }
    }
}
